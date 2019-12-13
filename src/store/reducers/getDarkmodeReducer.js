const INITIAL_STATE = {
  darkMode: false
};
export default function getData(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GET_DARKMODE":
      return {
        darkMode: action.darkMode
      };

    default:
      return state;
  }
}
