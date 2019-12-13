import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ActionCreators from "../store/actions";
import numeral from "numeral";
import Img from "../components/Img";

import Loader from "../components/Loader";
import Header from "../components/Header";
import { CountryStyled } from "./style";

class Country extends Component {
  componentDidMount() {
    const country = this.props.match.params.id;
    this.props.getCountryPage(country);
  }
  render() {
    console.log(this.props.countryPage);
    return (
      <CountryStyled dark={this.props.darkMode}>
        <Header />
        <div className="container animated fadeIn">
          {typeof this.props.countryPage.alpha3Code != "undefined" ? (
            <div className="row">
              <div className="col-md-12">
                <Link to="/" className="btn btn-primary mb-5 mt-5">
                  <i className="fa fa-long-arrow-left"></i> Voltar
                </Link>
              </div>
              <div className="col-md-6">
                <Img
                  src={this.props.countryPage.flag}
                  alt={this.props.countryPage.name}
                />
              </div>
              <div className="col-md-6">
                <h3 className="mb-4">{this.props.countryPage.name}</h3>
                <div className="row">
                  <div className="col-md-6">
                    <p>
                      <b>Native Name</b>: {this.props.countryPage.nativeName}
                    </p>
                    <p>
                      <b>Population</b>:{" "}
                      {numeral(this.props.countryPage.population).format("0,0")}
                    </p>
                    <p>
                      <b>Region</b>: {this.props.countryPage.region}
                    </p>
                    <p>
                      <b>Sub Region</b>: {this.props.countryPage.subregion}
                    </p>
                    <p>
                      <b>Capital</b>: {this.props.countryPage.capital}
                    </p>
                  </div>
                  <div className="col-md-6">
                    <p>
                      <b>Top Level Domain</b>:{" "}
                      {this.props.countryPage.topLevelDomain.length > 1
                        ? this.props.countryPage.topLevelDomain.map(e => {
                            return e + ", ";
                          })
                        : this.props.countryPage.topLevelDomain.map(e => {
                            return e;
                          })}
                    </p>
                    <p>
                      <b>Currencies</b>:{" "}
                      {this.props.countryPage.currencies.length > 1
                        ? this.props.countryPage.currencies.map(e => {
                            return e.name + ", ";
                          })
                        : this.props.countryPage.currencies.map(e => {
                            return e.name;
                          })}
                    </p>
                    <p>
                      <b>Languages</b>:{" "}
                      {this.props.countryPage.languages.length > 1
                        ? this.props.countryPage.languages.map(e => {
                            return e.name + ", ";
                          })
                        : this.props.countryPage.languages.map(e => {
                            return e.name;
                          })}
                    </p>
                  </div>
                  {this.props.countryPage.borders.length ? (
                    <div className="col-md-12 mt-3 d-flex align-content-center align-items-center border-countries">
                      <p>
                        <b>Border Counstries:</b>
                      </p>
                      {this.props.countryPage.borders.map(e => {
                        return <p key={Math.random()}>{e}</p>;
                      })}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          ) : (
            <Loader
              color={this.props.darkMode ? "white" : "black"}
              title="Carregando..."
            />
          )}
        </div>
      </CountryStyled>
    );
  }
}

const mapStateToProps = state => ({
  countryPage: state.getCountryPage.countryPage,
  darkMode: state.getDarkmode.darkMode
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(ActionCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Country);
