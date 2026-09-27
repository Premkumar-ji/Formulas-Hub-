export interface ReminderSettings {
  enabled: boolean;
  selectedTopicIds: string[];
  formulasPerNotification: 1 | 2;
  remindersPerDay: 2 | 3;
  times: string[]; // e.g. ['09:00', '14:00', '20:00'] or ['09:00', '19:00']
  lastNotificationSentAt?: number;
  lastSentDateSlot?: string; // e.g. "2026-09-27_0"
}

export type MasteryLevel = 0 | 1 | 2 | 3 | 4;
// 0: New / Unseen
// 1: Learning (1-day interval)
// 2: Reviewing (2-day interval)
// 3: Consolidating (4-day interval)
// 4: Mastered (7-14 day interval)

export interface SpacedFormulaItem {
  id: string; // formula.id
  topicId: string;
  topicName: string;
  topicIcon: string;
  title: string;
  formula: string;
  latex?: string;
  meaning: string;
  mustKnow?: boolean;
  level: MasteryLevel;
  timesSeen: number;
  lastSeenAt: number; // timestamp in ms (0 if never)
  nextReviewDue: number; // timestamp in ms
  wrongCount: number;
  correctCount: number;
}

export interface ReminderNotificationData {
  id: string;
  timestamp: number;
  topicName: string;
  slotIndex: number;
  formulas: {
    id: string;
    topicId: string;
    topicName: string;
    title: string;
    formula: string;
    meaning: string;
    latex?: string;
    isNew: boolean;
  }[];
}

export interface SpacedRepetitionStats {
  totalInRotation: number;
  masteredCount: number; // level >= 3
  learningCount: number; // level 1 or 2
  unseenCount: number;   // level 0
  dueForReviewCount: number;
  streakDays: number;
}
