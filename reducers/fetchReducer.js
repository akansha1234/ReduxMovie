let initialState = {
  loading: false,
  data: [],
  error: null
};
const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_PENDING":
      return {
        ...state,
        loading: true,
        error: null
      };
    case "FETCH_DATA_SUCCESS":
      console.log(action.payload, "payload");
      return {
        ...state,
        loading: false,
        data: action.payload.results
      };
    // case "FETCH_DATA_QUERY":
    //   console.log(action.payload, "payload");
    //   return {
    //     ...state,
    //     loading: false,
    //     data: action.payload.results
    //   };
    case "FETCH_DATA_ERROR":
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};
export default fetchReducer;
