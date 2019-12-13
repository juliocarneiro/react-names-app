const INITIAL_STATE = {
  countryList: [],
  error: ""
};
export default function getData(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GET_COUNTRY_LIST":
      return {
        countryList: action.countryList
      };
    case "GET_API_ERROR":
      return {
        error: action.error
      };

    default:
      return state;
  }
}
