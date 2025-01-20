import { LeaderboardEntry } from '../../screens/Home/utils';
import {SetLeaderboardAction} from './ActionType';

export const setLeaderboard = (
  leaderboard: LeaderboardEntry[],
): SetLeaderboardAction => ({
  type: 'SET_LEADERBOARD',
  payload: leaderboard,
});
