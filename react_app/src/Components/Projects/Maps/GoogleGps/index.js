import React from "react";
import Map from "./Map";
import axios from "axios";
import styled from 'styled-components'
const Wrapper = styled.div`
    text-align: center;
`;
const Paragraph = styled.p`
    margin: 20px;
`;

export default class GoogleGps extends React.Component {
  state = {
    location: [],
  };

  componentDidMount() {
    const data = [];
    axios.get("/google_data").then((response) => {
      for (var i = 0; i < response.data.latitude.length; i++) {
        data.push([response.data.latitude[i], response.data.longitude[i]]);
      }
      this.setState({ location: data });
    });
  }

  render() {
    return (
      <Wrapper className="map">
        <h1>Google GPS Data</h1>
        <Paragraph>Anyone can download their Google gps data in a number of different formats.  </Paragraph>
        <Paragraph>I used Leaflet Javascript to build a map, a loading spinner and a heat map overlay.</Paragraph>
        {this.state.location.length === 0 ? (<h4>Loading data from a MySQL database, please be patient....</h4>) : (null)}
        <Map props={this.state.location} />
      </Wrapper>
    );
  }
}
