import React from 'react';
import Record from '../Record/Record';
import TableHeader from '../TableHeader/TableHeader';


function Table(props) {


  return (
    <table className="table">
      <thead>
        <tr className="table__head-row">
          {Array.from(props.set).splice(1, 4).map((i) => {
            return (
              <TableHeader
                key={i}
                value={i}
                onThClick={props.onThClick}
                set={Array.from(props.set)}
                activeColumns={props.activeColumns}
              />
            )
          })}
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
