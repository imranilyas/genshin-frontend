import IItem from "../entities/item";

export interface IAppState {
    items: IItem[],
}

// initial state of the application
export const initialState: IAppState = {
    items: [],
}