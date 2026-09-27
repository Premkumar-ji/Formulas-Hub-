import { TOPICS_DATA } from '../data/topics';
import { FormulaItem, TopicData } from '../types/formula';
import {
  ReminderSettings,
  SpacedFormulaItem,
  MasteryLevel,
  ReminderNotificationData,
  SpacedRepetitionStats,
} from '../types/reminder';

const SETTINGS_STORAGE_KEY = 'fu_formula_reminder_settings_v1';
const DB_STORAGE_KEY = 'fu_spaced_repetition_db_v1';
const STREAK_STORAGE_KEY = 'fu_reminder_streak_v1';

export const DEFAULT_REMINDER_SETTINGS: ReminderSettings = {
  enabled: true,
  selectedTopicIds: [
    'trigonometry',
    'matrices-determinants',
    'probability',
    'quadratic-equations',
    'progressions',
    'calculus-integration',
    'straight-lines',
    'number-system',
  ],
  formulasPerNotification: 1,
  remindersPerDay: 3,
  times: ['09:00', '14:00', '20:00'],
};

// Interval durations in milliseconds for each mastery level
const INTERVALS_MS: Record<MasteryLevel, number> = {
  0: 0,
  1: 1 * 24 * 60 * 60 * 1000,      // 1 day
  2: 2 * 24 * 60 * 60 * 1000,      // 2 days
  3: 4 * 24 * 60 * 60 * 1000,      // 4 days
  4: 10 * 24 * 60 * 60 * 1000,     // 10 days
};

/**
 * Extracts a concise 1-sentence meaning or use of the formula for quick mobile comprehension.
 */
export function extractShortMeaning(formula: FormulaItem): string {
  if (formula.remember) {
    const clean = formula.remember.replace(/^[🎯💡⚠️\s]+/, '').split('.')[0];
    if (clean.length > 5 && clean.length <= 80) return clean;
  }
  if (formula.shortcut) {
    const clean = formula.shortcut.replace(/^[🎯💡⚠️\s]+/, '').split('.')[0];
    if (clean.length > 5 && clean.length <= 80) return clean;
  }
  if (formula.explanation) {
    const clean = formula.explanation.replace(/^[📖\s]+/, '').split('.')[0];
    if (clean.length > 5 && clean.length <= 80) return clean;
    return clean.slice(0, 75) + '...';
  }
  return formula.title;
}

/**
 * Cleans formula text for plain-text mobile notifications (removes raw LaTeX wrappers).
 */
export function formatPlainFormula(formula: FormulaItem): string {
  if (formula.formula && !formula.formula.includes('\\begin')) {
    // Return the clean plain formula if available and concise
    const lines = formula.formula.split('\n').filter(l => l.trim().length > 0);
    if (lines.length > 0 && lines[0].length <= 80) {
      return lines[0].trim();
    }
  }

  // Clean common KaTeX patterns into readable Unicode characters
  let clean = formula.latex || formula.formula || '';
  clean = clean
    .replace(/\\boxed\{([^}]+)\}/g, '$1')
    .replace(/\\operatorname\{([^}]+)\}/g, '$1')
    .replace(/\\text\{([^}]+)\}/g, '$1')
    .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '($1)/($2)')
    .replace(/\\cdot/g, '·')
    .replace(/\\times/g, '×')
    .replace(/\\pm/g, '±')
    .replace(/\\le/g, '≤')
    .replace(/\\ge/g, '≥')
    .replace(/\\neq/g, '≠')
    .replace(/\\equiv/g, '≡')
    .replace(/\\approx/g, '≈')
    .replace(/\\theta/g, 'θ')
    .replace(/\\alpha/g, 'α')
    .replace(/\\beta/g, 'β')
    .replace(/\\lambda/g, 'λ')
    .replace(/\\pi/g, 'π')
    .replace(/\\infty/g, '∞')
    .replace(/\\implies/g, '⇒')
    .replace(/\\quad/g, ' ')
    .replace(/\\qquad/g, '  ')
    .replace(/\\left|\\right/g, '')
    .replace(/\\prod/g, '∏')
    .replace(/\\sum/g, '∑')
    .replace(/[{}]/g, '')
    .replace(/\\/g, '');

  const firstLine = clean.split('\n')[0].trim();
  return firstLine.length > 80 ? firstLine.slice(0, 77) + '...' : firstLine;
}

/**
 * Loads reminder settings from localStorage.
 */
export function loadReminderSettings(): ReminderSettings {
  try {
    const raw = localStorage.getItem(SETTINGS_STORAGE_KEY);
    if (!raw) return { ...DEFAULT_REMINDER_SETTINGS };
    const parsed = JSON.parse(raw);
    return {
      ...DEFAULT_REMINDER_SETTINGS,
      ...parsed,
      times:
        parsed.remindersPerDay === 2
          ? parsed.times && parsed.times.length === 2
            ? parsed.times
            : ['09:00', '19:00']
          : parsed.times && parsed.times.length === 3
          ? parsed.times
          : ['09:00', '14:00', '20:00'],
    };
  } catch {
    return { ...DEFAULT_REMINDER_SETTINGS };
  }
}

/**
 * Saves reminder settings to localStorage.
 */
export function saveReminderSettings(settings: ReminderSettings): void {
  try {
    localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
  } catch {
    // Ignore storage errors
  }
}

/**
 * Loads the Spaced Repetition card database.
 */
export function loadSpacedRepetitionDb(): Record<string, SpacedFormulaItem> {
  try {
    const raw = localStorage.getItem(DB_STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

/**
 * Saves the Spaced Repetition card database.
 */
export function saveSpacedRepetitionDb(db: Record<string, SpacedFormulaItem>): void {
  try {
    localStorage.setItem(DB_STORAGE_KEY, JSON.stringify(db));
  } catch {
    // Ignore storage errors
  }
}

/**
 * Synchronizes the spaced repetition database with all available formulas across topics.
 */
export function syncFormulasDatabase(): Record<string, SpacedFormulaItem> {
  const db = loadSpacedRepetitionDb();
  let hasChanges = false;

  TOPICS_DATA.forEach(topic => {
    topic.categories.forEach(cat => {
      cat.formulas.forEach(formula => {
        if (!db[formula.id]) {
          db[formula.id] = {
            id: formula.id,
            topicId: topic.id,
            topicName: topic.name,
            topicIcon: topic.icon,
            title: formula.title,
            formula: formatPlainFormula(formula),
            latex: formula.latex,
            meaning: extractShortMeaning(formula),
            mustKnow: formula.mustKnow,
            level: 0,
            timesSeen: 0,
            lastSeenAt: 0,
            nextReviewDue: 0,
            wrongCount: 0,
            correctCount: 0,
          };
          hasChanges = true;
        }
      });
    });
  });

  if (hasChanges) {
    saveSpacedRepetitionDb(db);
  }

  return db;
}

/**
 * Selects the next 1 or 2 formulas for notification following strict spaced-repetition logic.
 */
export function getNextFormulasForReminder(
  settings: ReminderSettings,
  slotIndex: number = 0
): ReminderNotificationData | null {
  const db = syncFormulasDatabase();
  const selectedTopics = new Set(
    settings.selectedTopicIds.length > 0
      ? settings.selectedTopicIds
      : DEFAULT_REMINDER_SETTINGS.selectedTopicIds
  );

  // Filter formulas belonging to selected topics
  const candidates = Object.values(db).filter(item => selectedTopics.has(item.topicId));
  if (candidates.length === 0) return null;

  const now = Date.now();
  const cooldownPeriodMs = 8 * 60 * 60 * 1000; // 8 hours cooldown

  // Split candidates:
  // 1. Due for review (seen before and nextReviewDue <= now)
  // 2. Unseen (never shown)
  // 3. Seen recently (under cooldown)
  const dueForReview: SpacedFormulaItem[] = [];
  const unseen: SpacedFormulaItem[] = [];
  const otherSeen: SpacedFormulaItem[] = [];

  candidates.forEach(item => {
    if (item.timesSeen === 0) {
      unseen.push(item);
    } else if (now - item.lastSeenAt >= cooldownPeriodMs && item.nextReviewDue <= now) {
      dueForReview.push(item);
    } else {
      otherSeen.push(item);
    }
  });

  // Sort due formulas: prioritize formulas with higher mistakes, then oldest review date
  dueForReview.sort((a, b) => {
    if (b.wrongCount !== a.wrongCount) return b.wrongCount - a.wrongCount;
    return a.lastSeenAt - b.lastSeenAt;
  });

  // Sort unseen formulas: prioritize 'mustKnow' high frequency formulas first
  unseen.sort((a, b) => {
    if (a.mustKnow && !b.mustKnow) return -1;
    if (!a.mustKnow && b.mustKnow) return 1;
    return 0;
  });

  const countNeeded = settings.formulasPerNotification;
  const picked: { item: SpacedFormulaItem; isNew: boolean }[] = [];

  if (countNeeded === 1) {
    // 1 formula per notification:
    // Prefer a due review formula if available; otherwise introduce a new formula
    if (dueForReview.length > 0) {
      picked.push({ item: dueForReview[0], isNew: false });
    } else if (unseen.length > 0) {
      picked.push({ item: unseen[0], isNew: true });
    } else {
      // All formulas seen recently, pick the one seen longest ago
      otherSeen.sort((a, b) => a.lastSeenAt - b.lastSeenAt);
      picked.push({ item: otherSeen[0] || candidates[0], isNew: false });
    }
  } else {
    // 2 formulas per notification:
    // Rule: Mix revision and new formulas whenever possible
    if (dueForReview.length > 0 && unseen.length > 0) {
      picked.push({ item: dueForReview[0], isNew: false });
      picked.push({ item: unseen[0], isNew: true });
    } else if (dueForReview.length >= 2) {
      picked.push({ item: dueForReview[0], isNew: false });
      picked.push({ item: dueForReview[1], isNew: false });
    } else if (unseen.length >= 2) {
      picked.push({ item: unseen[0], isNew: true });
      picked.push({ item: unseen[1], isNew: true });
    } else {
      // Fallback mix
      const remainingPool = [...dueForReview, ...unseen, ...otherSeen.sort((a, b) => a.lastSeenAt - b.lastSeenAt)];
      const first = remainingPool[0] || candidates[0];
      const second = remainingPool.find(f => f.id !== first.id) || candidates[1] || first;
      picked.push({ item: first, isNew: first.timesSeen === 0 });
      if (second && second.id !== first.id) {
        picked.push({ item: second, isNew: second.timesSeen === 0 });
      }
    }
  }

  const primaryTopicName = picked[0]?.item.topicName || 'Formula Universe';

  return {
    id: `reminder-${now}-${slotIndex}`,
    timestamp: now,
    topicName: primaryTopicName,
    slotIndex,
    formulas: picked.map(({ item, isNew }) => ({
      id: item.id,
      topicId: item.topicId,
      topicName: item.topicName,
      title: item.title,
      formula: item.formula,
      meaning: item.meaning,
      latex: item.latex,
      isNew,
    })),
  };
}

/**
 * Records that a formula was shown in a reminder notification and updates its spaced repetition state.
 */
export function markFormulaShownInReminder(formulaId: string): void {
  const db = loadSpacedRepetitionDb();
  const item = db[formulaId];
  if (!item) return;

  const now = Date.now();
  item.timesSeen += 1;
  item.lastSeenAt = now;

  // If newly introduced, advance to Level 1 (due in 24 hours)
  if (item.level === 0) {
    item.level = 1;
  }
  item.nextReviewDue = now + INTERVALS_MS[item.level];

  db[formulaId] = item;
  saveSpacedRepetitionDb(db);
  updateRevisionStreak();
}

/**
 * Records user feedback during active micro-revision ("easy" vs "hard").
 */
export function recordFormulaFeedback(formulaId: string, feedback: 'easy' | 'hard'): void {
  const db = loadSpacedRepetitionDb();
  const item = db[formulaId];
  if (!item) return;

  const now = Date.now();
  item.timesSeen += 1;
  item.lastSeenAt = now;

  if (feedback === 'easy') {
    item.correctCount += 1;
    // Advance mastery level up to 4
    const newLevel = Math.min(4, item.level + 1) as MasteryLevel;
    item.level = newLevel;
    item.nextReviewDue = now + INTERVALS_MS[newLevel];
  } else {
    // If forgotten / hard: downgrade level, increment mistakes, and schedule for review in 4 hours
    item.wrongCount += 1;
    item.level = Math.max(1, item.level - 1) as MasteryLevel;
    item.nextReviewDue = now + 4 * 60 * 60 * 1000;
  }

  db[formulaId] = item;
  saveSpacedRepetitionDb(db);
  updateRevisionStreak();
}

/**
 * Calculates spaced repetition statistics for selected topics.
 */
export function getSpacedRepetitionStats(selectedTopicIds: string[]): SpacedRepetitionStats {
  const db = syncFormulasDatabase();
  const selected = new Set(selectedTopicIds);
  const items = Object.values(db).filter(item => selected.has(item.topicId));

  const now = Date.now();
  let masteredCount = 0;
  let learningCount = 0;
  let unseenCount = 0;
  let dueForReviewCount = 0;

  items.forEach(item => {
    if (item.timesSeen === 0) {
      unseenCount++;
    } else if (item.level >= 3) {
      masteredCount++;
    } else {
      learningCount++;
    }

    if (item.timesSeen > 0 && item.nextReviewDue <= now) {
      dueForReviewCount++;
    }
  });

  return {
    totalInRotation: items.length,
    masteredCount,
    learningCount,
    unseenCount,
    dueForReviewCount,
    streakDays: getRevisionStreak(),
  };
}

/**
 * Tracks daily revision streak.
 */
function updateRevisionStreak(): void {
  try {
    const today = new Date().toISOString().split('T')[0];
    const raw = localStorage.getItem(STREAK_STORAGE_KEY);
    let streakData = raw ? JSON.parse(raw) : { currentStreak: 0, lastDate: '' };

    if (streakData.lastDate === today) {
      return; // Already counted today
    }

    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    if (streakData.lastDate === yesterday) {
      streakData.currentStreak += 1;
    } else {
      streakData.currentStreak = 1;
    }
    streakData.lastDate = today;

    localStorage.setItem(STREAK_STORAGE_KEY, JSON.stringify(streakData));
  } catch {
    // Ignore
  }
}

export function getRevisionStreak(): number {
  try {
    const raw = localStorage.getItem(STREAK_STORAGE_KEY);
    if (!raw) return 1;
    const streakData = JSON.parse(raw);
    return Math.max(1, streakData.currentStreak || 1);
  } catch {
    return 1;
  }
}

/**
 * Calculates the next upcoming scheduled notification time and slot.
 */
export function getNextScheduledSlot(settings: ReminderSettings): {
  timeStr: string;
  slotIndex: number;
  minutesUntil: number;
  isToday: boolean;
  dateStr: string;
} {
  const times = settings.times.slice(0, settings.remindersPerDay).sort();
  const now = new Date();
  const currentHours = now.getHours();
  const currentMinutes = now.getMinutes();
  const currentTotalMins = currentHours * 60 + currentMinutes;

  // Check today's upcoming slots
  for (let i = 0; i < times.length; i++) {
    const [h, m] = times[i].split(':').map(Number);
    const slotTotalMins = h * 60 + m;
    if (slotTotalMins > currentTotalMins) {
      return {
        timeStr: times[i],
        slotIndex: i,
        minutesUntil: slotTotalMins - currentTotalMins,
        isToday: true,
        dateStr: now.toISOString().split('T')[0],
      };
    }
  }

  // Next slot is tomorrow's first slot
  const [firstH, firstM] = times[0].split(':').map(Number);
  const firstSlotTotalMins = firstH * 60 + firstM;
  const minutesUntilTomorrowFirst = (24 * 60 - currentTotalMins) + firstSlotTotalMins;

  const tomorrow = new Date(now.getTime() + 86400000);
  return {
    timeStr: times[0],
    slotIndex: 0,
    minutesUntil: minutesUntilTomorrowFirst,
    isToday: false,
    dateStr: tomorrow.toISOString().split('T')[0],
  };
}
