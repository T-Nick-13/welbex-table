import React from 'react';

function Record(props) {

  const curDate = new Date(props.date);
  const newDate = curDate.toLocaleDateString();

  return (
    <tr className="table__row">
      <td>{newDate}</td>
      <td>{props.title}</td>
      <td>{props.amount} ккал</td>
      <td>{props.distance} км</td>
    </tr>
  );
}

export default Record;
