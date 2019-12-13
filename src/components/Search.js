import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ActionCreators from "../store/actions";
import debounce from "../utils/debounce";

class Search extends Component {
  state = {
    search: ""
  };
  handleInputChange = async (self, changeEvent) => {
    const name = changeEvent.target.name;
    const value = changeEvent.target.value;

    await self.setState({
      ...this.state,
      [name]: value
    });

    debounce(() => {
      self.props.getSearchCountry(value);
    }, 1000)();
  };
  render() {
    return (
      <Fragment>
        <input
          className="mt-5 mb-3"
          value={this.state.search}
          onChange={event => {
            this.handleInputChange(this, event);
          }}
          name="search"
        ></input>
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
)(Search);
