import React from 'react';
import axios from "axios";

export default class DetailPerson extends React.Component {
  state = {};

  async componentDidMount() {
    const {data} = await axios.get(`http://5d36d86c86300e0014b647c7.mockapi.io/todos/${this.props.id}`);
    this.setState({
      id: data.id,
      name: data.name,
      complete: data.complete
    });
  }

  render() {
    return (
      <ul>
        <li>ID: {this.state.id}</li>
        <li>Name: {this.state.name}</li>
        <li>Complete: {this.state.complete === true ? 'true' : 'false'}</li>
      </ul>
    );
  }
}