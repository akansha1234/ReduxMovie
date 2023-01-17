import axios from "axios";
import {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataError
  //fetchDataQuery
} from "./actions";

export function fetchProducts() {
  return (dispatch) => {
    dispatch(fetchDataRequest());
    axios
      .get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=132632f4a6f153ab2d13dd273a3d9c5c"
      )
      .then((response) => {
        dispatch(fetchDataSuccess(response.data));
        //console.log(response.data, "data");
      })
      .catch((error) => {
        dispatch(fetchDataError(error));
      });
  };
}

export function fetchQueryProducts(query) {
  return (dispatch) => {
    dispatch(fetchDataRequest());
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=132632f4a6f153ab2d13dd273a3d9c5c&language=en-US&page=1&include_adult=false&query=${query}`
      )
      .then((response) => {
        dispatch(fetchDataSuccess(response.data));
        console.log(response.data, "dataquery");
      })
      .catch((error) => {
        dispatch(fetchDataError(error));
      });
  };
}
