import React, { Component, Fragment } from "react";
import { HeaderStyled } from "./style";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ActionCreators from "../store/actions";

class Header extends Component {
  handleDark = () => {
    this.props.getDarkmode(this.props.darkMode);
  };
  render() {
    console.log("darkmode", this.props.darkMode);
    return (
      <HeaderStyled dark={this.props.darkMode}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-8">
              <h1>Where in the world?</h1>
            </div>
            <div className="col-md-6 col-4 text-right">
              <p className="darkmode" onClick={this.handleDark}>
                {this.props.darkMode ? (
                  <Fragment>
                    <i className="fa fa-lightbulb-o"></i> Light Mode
                  </Fragment>
                ) : (
                  <Fragment>
                    <i className="fa fa-moon-o"></i> Dark Mode
                  </Fragment>
                )}
              </p>
            </div>
          </div>
        </div>
      </HeaderStyled>
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
)(Header);
