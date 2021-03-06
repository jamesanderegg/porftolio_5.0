import React from "react";
import "./LeafletControl.css";
import styled from "styled-components";

const ListItem = styled.li`
  text-align: start;
`;

class LeafletControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isChecked: false };
    this.handleChecked = this.handleChecked.bind(this);
  }
  handleChecked() {
    this.setState({ isChecked: !this.state.isChecked });
  }
  render() {
    return (
      <div className="leaflet-top leaflet-left">
        <div className="classname leaflet-control">
          <div className="container-leaf">
            <input
              id="toggle-leaf"
              type="checkbox"
              onChange={this.handleChecked}
            />
            <label id="label-leaf" htmlFor="toggle-leaf">
              <h4>Search</h4>
            </label>
            <div id="expand-leaf">
              <ul>
                <p>It is not case sensitive. Search words not phrases.</p>
                <h4>Interesting Searches</h4>
                <ListItem>Bed Bugs</ListItem>
                <ListItem>Turtles</ListItem>
                <ListItem>Dogs</ListItem>
              </ul>
              <form noValidate onSubmit={this.props.onSubmit}>
                <input
                  id="search-box"
                  type="search"
                  name="searchbox"
                  placeholder="Search"
                  onChange={this.props.onChange}
                  value={this.props.searchbox}
                />
                <button id="search-btn" className="form-control" type="submit">
                  Go!
                </button>
              </form>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default LeafletControl;
