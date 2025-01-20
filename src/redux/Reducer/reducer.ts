import { LeaderboardEntry } from '../../screens/Home/utils';
import {LeaderboardAction} from '../Action/ActionType';

const initialState: { leaderboard: LeaderboardEntry[] } = {
  leaderboard: [],
};

export const leaderboardReducer = (
  state = initialState,
  action: LeaderboardAction
) => {
  switch (action.type) {
    case 'SET_LEADERBOARD':
      return {
        ...state,
        leaderboard: action.payload,
      };
    default:
      return state;
  }
};