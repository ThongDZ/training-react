import React from 'react';
import axios from 'axios';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

const Trash = <FontAwesomeIcon icon={faTrash} />;

export default class DeletePerson extends React.Component {

  handleSubmit = async e => {
    e.preventDefault();

    const response = await axios.delete(`http://5d36d86c86300e0014b647c7.mockapi.io/todos/${this.props.id}`);

    if (response.statusText === 'OK'){
      alert('Success');
      document.getElementById('myForm').submit();
    }
  };

  render() {
    return (
      <form id='myForm' onSubmit={this.handleSubmit} action='/'>
        <h1>You want to delete user with ID: {this.props.id} &nbsp;&nbsp;&nbsp;
          <button
            type="submit"
            className="btn btn-danger"
          >{Trash} Delete</button>
        </h1>
      </form>
    );
  }
}