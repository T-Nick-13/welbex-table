import React from 'react';
import Record from '../Record/Record';


function Table(props) {
  return (
    <table className="table">
      <thead>
        <tr className="table__head-row">
          <th>Дата</th>
          <th>Название</th>
          <th>Количество</th>
          <th>Расстояние</th>
        </tr>
      </thead>
      <tbody>
        {props.records.map((rec) => {
          return (
            <Record
              key={rec.id}
              date={rec.date}
              title={rec.title}
              amount={rec.amount}
              distance={rec.distance}
            />
          )
        })}
      </tbody>
    </table>
  );
}

export default Table;
