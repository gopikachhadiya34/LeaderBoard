import {createStore} from 'redux';
import {leaderboardReducer} from '../Reducer/reducer';
import { LeaderboardState } from '../Action/ActionType';

export const store = createStore(leaderboardReducer);

export type RootState = LeaderboardState;
