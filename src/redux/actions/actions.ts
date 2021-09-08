import IItem from "../../entities/item";

export enum AppActions {
    UPDATE_ITEM,
}

export interface IAppActions {
    type: AppActions,
    payload: {
        drops: IItem[];
    }
}