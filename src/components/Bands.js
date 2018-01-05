import React, { Component } from "react";

class Bands extends Component {
  bands = () => {
    return this.props.store.getState().bands.map(band => {
      return <li>{band}</li>;
    });
  };

  render() {
    return (
      <div>
        <ul>{this.bands()}</ul>
      </div>
    );
  }
}

export default Bands;
