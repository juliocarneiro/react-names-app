import React, { Component, Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ActionCreators from "../store/actions";

import Loader from "../components/Loader";

import Main from "../pages/Main";
import Country from "../pages/Country";

class Routes extends Component {
  state = {
    isLoading: true
  };
  componentDidMount() {
    this.setState({
      isLoading: false
    });
  }
  render() {
    return (
      <Fragment>
        {this.state.isLoading ? (
          <Loader
            color={this.props.darkMode ? "white" : "black"}
            title="Carregando..."
          />
        ) : (
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/:id" component={Country} />
            </Switch>
          </BrowserRouter>
        )}
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
)(Routes);
