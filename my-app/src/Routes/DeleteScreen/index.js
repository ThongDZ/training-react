import React from 'react';
import DeletePerson from '../../components/DeletePerson';
import './index.css';

export default function index({match}) {
  return (
    <div>
      <h1>Delete</h1>
      <hr/>
      <div>
        <DeletePerson id={match.params.id} />
      </div>
    </div>
  );
}