import React, { Component, Fragment } from "react";
import Loader from "../components/Loader";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ActionCreators from "../store/actions";

class Img extends Component {
  state = {
    imageLoad: true
  };
  handleLoad = () => {
    this.setState({
      imageLoad: false
    });
  };
  render() {
    return (
      <Fragment>
        <img
          src={this.props.src}
          alt={this.props.alt}
          onLoad={this.handleLoad}
          className={this.state.imageLoad ? "d-none" : "animated fadeIn"}
        />
        {this.state.imageLoad ? (
          <Loader
            color={this.props.darkMode ? "white" : "black"}
            title="Carregando..."
          />
        ) : null}
      </Fragment>
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
)(Img);
