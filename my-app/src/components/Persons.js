import React from 'react';
import axios from 'axios';
import {Link, Prompt} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

const element = <FontAwesomeIcon icon={faTrash} />;

export default class Persons extends React.Component {
  state = {
    persons: []
  };

  async componentDidMount() {
    const {data} = await axios.get(`http://5d36d86c86300e0014b647c7.mockapi.io/todos`);
    this.setState({persons: data});
  }

  render() {
    return (
      <ul>
        {this.state.persons.map(person => (
          <li key={person.id}>
            <Link to={`/detail/${person.id}`} children={person.name}/> &nbsp;&nbsp;&nbsp;
            <Link to={`/delete/${person.id}`} children={element} />
          </li>
        ))}
      </ul>
    );
  }

}