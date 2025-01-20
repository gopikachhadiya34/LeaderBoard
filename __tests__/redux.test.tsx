import {
  LeaderboardEntry,
  SetLeaderboardAction,
} from '../src/redux/Action/ActionType';
import { leaderboardReducer } from '../src/redux/Reducer/reducer';

describe('Redux Logic', () => {
  describe('Reducer', () => {
    it('should return the initial state', () => {
      const initialState = {leaderboard: []};
      expect(leaderboardReducer(undefined, {} as any)).toEqual(initialState);
    });

    it('should handle SET_LEADERBOARD', () => {
      const leaderboard: LeaderboardEntry[] = [
        {name: 'User1', bananas: 100, rank: 1},
        {name: 'User2', bananas: 90, rank: 2},
      ];

      const action: SetLeaderboardAction = {
        type: 'SET_LEADERBOARD',
        payload: leaderboard,
      };

      const expectedState = {leaderboard};
      expect(leaderboardReducer(undefined, action)).toEqual(expectedState);
    });
  });
});
