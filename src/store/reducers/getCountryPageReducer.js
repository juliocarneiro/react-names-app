const INITIAL_STATE = {
  countryPage: [],
  error: ""
};
export default function getData(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GET_COUNTRY_PAGE":
      return {
        countryPage: action.countryPage
      };
    case "GET_API_ERROR":
      return {
        error: action.error
      };

    default:
      return state;
  }
}
