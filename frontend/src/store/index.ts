import { Reducer } from 'redux';
import { combineReducers } from 'redux-seamless-immutable';
import exampleReducer, { ExampleState } from './_example';

/* Shape of store root, i.e. state produced by highest-level reducer. */
export type AppState = {
    example: ExampleState;
};

/* Highest-level reducer for store root. Simply dispatches to other reducers. */
export const appReducer: Reducer<AppState> = combineReducers({
    example: combineReducers,
});
