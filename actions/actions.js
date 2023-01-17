//this file is for action creator
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR
} from "./actionTypes";
// export const authenticate = () => {
//   return {
//     type: "CHECK-LOGIN"
//   };
// };

export function fetchDataRequest() {
  return {
    type: FETCH_DATA_REQUEST
  };
}

export function fetchDataSuccess(data) {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data
  };
}

export function fetchDataError(error) {
  return {
    type: FETCH_DATA_ERROR,
    error
  };
}
