import axios from "axios";

export const getCountryList = () => {
  return dispatch => {
    axios
      .get(`https://restcountries.eu/rest/v2/all`)
      .then(res => {
        dispatch({
          type: "GET_COUNTRY_LIST",
          countryList: res.data
        });
      })
      .catch(error => {
        dispatch({ type: "GET_API_ERROR", error });
      });
  };
};

export const getCountryPage = country => {
  return dispatch => {
    dispatch({
      type: "GET_COUNTRY_PAGE",
      countryPage: ""
    });
    axios
      .get(`https://restcountries.eu/rest/v2/alpha/${country}`)
      .then(res => {
        dispatch({
          type: "GET_COUNTRY_PAGE",
          countryPage: res.data
        });
      })
      .catch(error => {
        dispatch({ type: "GET_API_ERROR", error });
      });
  };
};
export const getSearchCountry = country => {
  return dispatch => {
    console.log("country", country);
    if (country === "" || typeof country === "undefined") {
      axios
        .get(`https://restcountries.eu/rest/v2/all`)
        .then(res => {
          dispatch({
            type: "GET_COUNTRY_LIST",
            countryList: res.data
          });
        })
        .catch(error => {
          dispatch({ type: "GET_API_ERROR", error });
        });
    } else {
      axios
        .get(`https://restcountries.eu/rest/v2/name/${country}`)
        .then(res => {
          dispatch({
            type: "GET_COUNTRY_LIST",
            countryList: res.data
          });
        })
        .catch(error => {
          dispatch({ type: "GET_API_ERROR", error });
        });
    }
  };
};

export const getDarkmode = darkMode => {
  return dispatch => {
    dispatch({
      type: "GET_DARKMODE",
      darkMode: !darkMode
    });
  };
};
