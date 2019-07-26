import React from 'react';
import axios from 'axios';
import '../Routes/PostScreen/index.css';

export default class PostPerson extends React.Component {
  state = {
    name: '',
    complete: true
  };

  handleChange = e => {
    let target = e.target,
      name = target.name,
      value = target.value;

    this.setState({
      [name]: value
    })
  };

  handleSubmit = async e => {
    e.preventDefault();

    const person = {
      name: this.state.name,
      complete: this.state.complete
    };

    const response = await axios.post('http://5d36d86c86300e0014b647c7.mockapi.io/todos/', person);
    
    if (response.statusText === 'Created') {
      alert('Success');
      document.getElementById('form-post').submit();
    }
  };

  render() {
    return (
      <div className="d-flex justify-content-center">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">FORM POST DATA</h3>
            </div>
            <div className="panel-body">
              <form id='form-post' onSubmit={this.handleSubmit} action='/'>
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  className="form-control"
                  placeholder="please enter name"
                  onChange={this.handleChange}
                />
                <label>Complete:</label>
                <select name="complete" className="form-control" value={this.state.complete} onChange={this.handleChange}>
                  <option value={true}>true</option>
                  <option value={false}>false</option>
                </select>
                <br/>
                <button
                  type="submit"
                  className="btn btn-primary"
                >POST
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

}