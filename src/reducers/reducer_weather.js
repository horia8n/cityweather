import {FETCH_WEATHER} from "../actions/index";

export default function (state = [], action) {
    console.log("Action received:", action.type);
    switch (action.type) {
        case FETCH_WEATHER:
            if (action.error) {
                alert('Please check you spelling and try again!');
                return state;
            }
            return [action.payload.data, ...state];

    }
    return state;
}