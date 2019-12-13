import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ActionCreators from "../store/actions";
import { Link } from "react-router-dom";
import numeral from "numeral";

import { CountryListStyled } from "./style";
//import Loader from "./Loader";
import Img from "./Img";

class CountryList extends Component {
  componentDidMount() {
    if (
      typeof this.props.countryList !== "undefined" ||
      this.props.countryList.length
    ) {
      this.props.getCountryList();
    }
  }
  render() {
    console.log(this.props.countryList);
    return (
      <CountryListStyled dark={this.props.darkMode} className="row">
        {this.props.countryList &&
        typeof this.props.countryList !== "undefined" ? null : (
          <p>Não existem dados...</p>
        )}
        {this.props.countryList && this.props.countryList !== 0
          ? this.props.countryList.map(item => {
              return (
                <div
                  key={item.numericCode}
                  className="col-md-3 mb-4 animated fadeIn"
                >
                  <div className="wrapper-country">
                    <Link to={item.alpha3Code} className="d-block">
                      <Img src={item.flag} alt={item.name} />
                      <div className="country-data">
                        <h5 className="">{item.name}</h5>
                        <p className="">
                          <b>Population</b>:{" "}
                          {numeral(item.population).format("0,0")} <br />
                          <b>Region</b>: {item.region} <br />
                          <b>Capital</b>: {item.capital} <br />
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })
          : null}
      </CountryListStyled>
    );
  }
}

const mapStateToProps = state => ({
  countryList: state.getCountryList.countryList,
  darkMode: state.getDarkmode.darkMode
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(ActionCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountryList);
