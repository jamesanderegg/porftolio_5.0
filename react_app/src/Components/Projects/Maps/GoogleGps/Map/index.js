import React from 'react';
import * as L from 'leaflet';

import 'leaflet/dist/leaflet.css';
import 'leaflet-spin'
import 'leaflet.heat'

import styled from 'styled-components';
import * as d3 from "d3";

const Wrapper = styled.div`
    width: 85%;
    height: ${props => props.height};
    z-index: 3
    margin: 0 auto;
    min-width: 300px;
    left: 50%;
    transform: translateX(-50%);
`;

export default class Map extends React.Component {
    constructor(props){
        super(props);
        
    }

    componentDidMount(){
        this.map = L.map('map', {
            center: [39.7392, -104.9903],
            zoom: 4,
            maxZoom: 11,
            zoomControl: false
        });

  

        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
        maxZoom: 18,
        id: "mapbox/streets-v10",
        accessToken: 'pk.eyJ1IjoianVpY3lqYW1lcyIsImEiOiJja2gyajIxb3IwYzZxMzBucGZkemt4Z3U5In0.3HY66jz4v0DTTGQygAYFJQ'
        }).addTo(this.map);

        var layer = L.geoJSON().addTo(this.map);
        this.map.spin(true);
    }
    
    componentWillReceiveProps(newProps) {
        
        // this.updateD3(newProps);
        this.map.spin(false);
        var heat = L.heatLayer(newProps.props, {
            radius: 20,
            blur: 50
        }).addTo(this.map)
      }
    
    render(){
        return <Wrapper width="80%" height="720px" id="map" />
    }
    
}

