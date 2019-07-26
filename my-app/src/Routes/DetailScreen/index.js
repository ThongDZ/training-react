import React from 'react';
import DetailPerson from '../../components/DetailPerson';

export default function index({match}) {
  return (
    <div>
      <h1>Detail</h1>
      <DetailPerson id={match.params.id} />
    </div>
  );
}