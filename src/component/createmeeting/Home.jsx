import React, { Component } from "react";
import Map from "./Googlemap";

class Home extends Component {
  render() {
    return (
      <div style={{ margin: "100px" }}>
        <Map
          google={this.props.google}
          center={{ lat: 18, lng: 73.8 }}
          height="300px"
          zoom={15}
        />
      </div>
    );
  }
}

export default Home;
