import React from 'react';


function Table() {
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
        <tr className="table__row">
          <td>20.10.22</td>
          <td>Ходьба</td>
          <td>200ккал</td>
          <td>2км</td>
        </tr>
        <tr className="table__row">
          <td>20.10.22</td>
          <td>Бег</td>
          <td>300ккал</td>
          <td>2км</td>
        </tr>
        <tr className="table__row">
          <td>20.10.22</td>
          <td>Бег</td>
          <td>300ккал</td>
          <td>2км</td>
        </tr>
        <tr className="table__row">
          <td>20.10.22</td>
          <td>Бег</td>
          <td>300ккал</td>
          <td>2км</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
