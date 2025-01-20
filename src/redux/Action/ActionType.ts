// src/redux/types.ts

import {LeaderboardEntry} from '../../screens/Home/utils';

export interface LeaderboardState {
  leaderboard: LeaderboardEntry[];
}

export interface SetLeaderboardAction {
  type: 'SET_LEADERBOARD';
  payload: LeaderboardEntry[];
}

export type LeaderboardAction = SetLeaderboardAction;
