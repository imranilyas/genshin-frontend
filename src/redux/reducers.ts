import { IAppActions, AppActions } from "./actions/actions";
import { initialState, IAppState } from "./state";

export const Reducer = (
    state: IAppState = initialState,
    action: IAppActions
): IAppState => {
    const newState = { ...state };
    switch (action.type) {
        case AppActions.UPDATE_ITEM: 
            newState.items = action.payload.drops;
            return newState;
        default:
            return newState;
    }
}
