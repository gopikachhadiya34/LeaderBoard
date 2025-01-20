export type User = {
  name: string;
  bananas: number;
  rank?: number;
  stars?: number;
  subscribed?: any;
  uid: string;
  lastDayPlayed: string;
  longestStreak: number;

};

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
