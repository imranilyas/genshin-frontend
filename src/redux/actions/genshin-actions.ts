import { Dispatch } from "redux";
import axios from "../../../axiosConfig";
import IItem from "../../entities/item";
import { AppActions } from "./actions";

const GetAllDrops = () => async (dispatch: Dispatch) => {
    try {
        // axios request
        const res = await axios.get('/all');
        dispatch({
            type: AppActions.UPDATE_ITEM,
            payload: {drops: res.data},
        });
    } catch (error) {
        console.log('Error with GetAllDrops: ' + error);
    }
}

const GetDropByName = (item: IItem) => async (dispatch: Dispatch) => {
    try {
        // axios request
        const res = await axios.get(`/${item.dropName}`);
        dispatch({
            type: AppActions.UPDATE_ITEM,
            payload: {drops: res.data},
        });
    } catch (error) {
        console.log('Error Getting Drop By Name: ' + error);
    }
}

const AddDrop = (item: IItem) => async (dispatch: Dispatch) => {
    try {
        // axios request
        await axios.post('/', item);
        const res = await axios.get('/all');
        dispatch({
            type: AppActions.UPDATE_ITEM,
            payload: {drops: res.data},
        });
    } catch (error) {
        console.log('Error with Adding an Item Drop: ' + error);
    }
}

const UpdateDrop = (item: IItem) => async (dispatch: Dispatch) => {
    try {
        await axios.put('/', {...item});
        const res = await axios.get('/all');
        dispatch({
            type: AppActions.UPDATE_ITEM,
            payload: {drops: res.data},
        });
    } catch (error) {
        console.log('Error with Updating a Drop: ' + error);
    }
}

const DeleteDrop = (item: IItem) => async (dispatch: Dispatch) => {
    try {
        await axios.delete(`/${item.dropName}`);
        const res = await axios.get('/all');
        dispatch({
            type: AppActions.UPDATE_ITEM,
            payload: {drops: res.data},
        });
    } catch (error) {
        console.log('Error with Deleting an Item Drop: ' + error);
    }
}