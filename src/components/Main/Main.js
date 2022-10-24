import React from 'react';

import Table from '../Table/Table';

function Main(props) {
  return (
    <main className="main">
      <div className="main__container">
        {/* <h1 className="main__heading">Трекер активности</h1> */}
        <p className="main__description">Ежедневное отслеживание фитнес-активности</p>
        <Table
          records={props.records}
          onThClick={props.onThClick}
          activeColumns={props.activeColumns}
          set={props.set}
        />
        </div>
    </main>
  );
}

export default Main;
