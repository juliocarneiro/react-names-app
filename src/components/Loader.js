import React, { Component } from "react";
import { LoaderStyled } from "./style";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ActionCreators from "../store/actions";

class Loader extends Component {
  render() {
    return (
      <LoaderStyled dark={this.props.darkMode}>
        <div className="load animated fadeIn">
          <div
            id="loader"
            style={{
              border: `10px solid ${this.props.color}`,
              borderTop: "10px solid transparent"
            }}
          ></div>
          <p className="loader-title">{this.props.title}</p>
        </div>
      </LoaderStyled>
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
)(Loader);
