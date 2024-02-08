
export default (state = { reviews: []   }, action) => {
    switch (action.type) {
      case "FETCH_ALL":
        return { ...state, reviews: action.payload.data };
      case "CREATE":
        return { ...state, reviews: [...state.reviews, action.payload.data] };
      default:
        return state;
    }
  };
  