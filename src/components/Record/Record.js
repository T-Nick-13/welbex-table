import React from 'react';

function Record(props) {
  return (
    <tr className="table__row">
      <td>{props.date}</td>
      <td>{props.title}</td>
      <td>{props.amount} ккал</td>
      <td>{props.distance} км</td>
    </tr>
  );
}

export default Record;
