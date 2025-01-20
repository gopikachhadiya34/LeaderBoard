// src/redux/types.ts
export interface LeaderboardEntry{
  name: string;
  bananas: number;
  rank: number;
  uid?: string;
  stars?: number;
  subscribed?: boolean;
  lastDayPlayed?: string;
  longestStreak?: number;
}

export interface LeaderboardState {
  leaderboard: LeaderboardEntry[];
}

export interface SetLeaderboardAction {
  type: 'SET_LEADERBOARD';
  payload: LeaderboardEntry[];
}

export type LeaderboardAction = SetLeaderboardAction;
