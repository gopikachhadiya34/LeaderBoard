import {LeaderboardEntry, SetLeaderboardAction} from './ActionType';

export const setLeaderboard = (leaderboard: LeaderboardEntry[]): SetLeaderboardAction => ({
    type: 'SET_LEADERBOARD',
    payload: leaderboard,
  });