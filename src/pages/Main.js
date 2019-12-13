import React, { Component } from "react";
import CountryList from "../components/CountryList";
import Header from "../components/Header";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ActionCreators from "../store/actions";
import { MainStyled } from "./style";
import Search from "../components/Search";

class Main extends Component {
  render() {
    return (
      <MainStyled dark={this.props.darkMode} className="animated fadeIn">
        <Header />
        <div className="container">
          <Search />
          <CountryList />
        </div>
      </MainStyled>
    );
  }
}

const mapStateToProps = state => ({
  darkMode: state.getDarkmode.darkMode
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(ActionCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
