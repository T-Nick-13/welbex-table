import React from 'react';
import Api from '../../utils/Api';
import { MAIN_API } from '../../utils/config';

import Main from '../Main/Main';

let set = new Set();
let actveColumnSet = new Set([]);

function App() {
  const [records, setRecords] = React.useState([]);
  const [activeColumns, setActiveColumns] = React.useState([]);


  const api = new Api ({
    baseUrl: MAIN_API,
    headers: {
      'Content-Type': 'application/json'
    }
  });

  React.useEffect(() => {
    Promise.all([
      api.getRecords()
    ])
    .then((data) => {
      localStorage.setItem("data", JSON.stringify(data));
      const lclStrg = JSON.parse(localStorage.getItem("data"))[0];
      setRecords(lclStrg);//строки таблицы из local storage
      lclStrg.forEach((i) => { //шапка таблицы из local storage
        Object.keys(i).forEach((k) => {
          set.add(k);
        })
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])

  function setSort(col) {
    if (actveColumnSet.has(col)) {
      actveColumnSet.add(col)
    } else {
      actveColumnSet.clear();
      actveColumnSet.add(col);
    }
    setActiveColumns(Array.from(actveColumnSet));
  }

  function handleSorting(e) {

    const selectColumn = (a,b) => {
      if (e.textContent === "Количество")
        return a.amount - b.amount;
      if (e.textContent === "Расстояние")
        return a.distance - b.distance;
      if (e.textContent === "Название")
        return a.title - b.title;
    }

    if (actveColumnSet.has(e.dataset.title)) {
      records.reverse();
    } else {
      const sortedArrs = records.sort( (a, b) => selectColumn(a,b) );
      setRecords([...sortedArrs]);
    }
    setSort(e.dataset.title)
  }

  return (
    <div className="page">
      <div className="page__container">
        <Main
          records={records}
          onThClick={handleSorting}
          activeColumns={activeColumns}
          set={set}
        />
      </div>
    </div>
  );
}

export default App;
