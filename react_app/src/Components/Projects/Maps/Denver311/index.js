import React from 'react';
import Map from "./Map";
import axios from 'axios';
import styled from "styled-components";

const Wrapper = styled.div`
    text-align: center;
`;



export default class Denver311 extends React.Component {
    state = {
        data: []
    };

    componentDidMount(){
        const data = []
        axios.get('/denver311').then(response => {
            data.push(response.data.features)
            
            this.setState({ data: data})
            
        })
    }

    render(){
        const dataLoading = (<h2> Data Loading...</h2>)
        
        return(
        
            <Wrapper className="map">
                <h1>Denver 311 Help Center 2016</h1>
                <p>Denver has an open data catalog that has a variety of data. This is the Denver 311 Help Center database from 2016, Complaints. Each data point is clickable and has a description of the incident.</p>
                {this.state.data.length >0? <br/> : <h3>DATA LOADING:</h3> }
            
            <Map props={this.state.data} />
            </Wrapper>
    )
}
}