import React from 'react';
import Api from '../../utils/Api';
import { MAIN_API } from '../../utils/config';

import Main from '../Main/Main';

let tableHeaderSet = new Set();
let actveColumnSet = new Set([]);

function App() {
  const [records, setRecords] = React.useState([]);
  const [activeColumns, setActiveColumns] = React.useState([]);
  const [initialRecords, setInitialRecords] = React.useState([]);


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
      const lsData = JSON.parse(localStorage.getItem("data"))[0];
      setInitialRecords(lsData);
      setRecords(lsData);//строки таблицы из local storage
      lsData.forEach((i) => { //шапка таблицы из local storage
        Object.keys(i).forEach((k) => {
          tableHeaderSet.add(k);
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

  //сортировка таблицы
  function handleSorting(e) {

    const selectColumn = (a,b) => {
      if (e.textContent === "Количество")
        return a.amount - b.amount;
      if (e.textContent === "Расстояние")
        return a.distance - b.distance;
      if (e.textContent === "Название")
        return a.title > b.title ? 1 : -1;
    }

    if (actveColumnSet.has(e.dataset.title)) {
      records.reverse();
    } else {
      const sortedArrs = records.sort((a, b) => selectColumn(a,b));
      setRecords([...sortedArrs]);
    }
    setSort(e.dataset.title)
  }

  //фильтрация таблицы
  function selectFilterColumn(data) {
    let key = (data.column === 'Дата') ? 'date' :
      (data.column === 'Название') ? 'title' :
      (data.column === 'Количество') ? 'amount' :
      (data.column === 'Расстояние') ? 'distance' : 'Другое';

    const foundData = initialRecords.filter((i) => {
      const inputDataType =
        (data.compare === 'Содержит') ? data.text.toLowerCase() :
        (typeof(i[key]) === 'number') ? Number(data.text) :
        ((data.compare === 'Меньше' || data.compare === 'Больше') && (data.column === 'Дата')) ? new Date(data.text.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1')) :
        data.text.toLowerCase();

      const tableDataType = (data.compare === 'Содержит' && typeof(i[key]) === 'number') ? String(i[key]) :
        (typeof(i[key]) === 'number') ? i[key] :
        ((data.column === 'Дата') && (data.compare === 'Содержит' || data.compare === 'Равно')) ? new Date(i[key]).toLocaleDateString() :
        ((data.compare === 'Меньше' || data.compare === 'Больше') && (data.column === 'Дата')) ? new Date(i[key]) :
        i[key].toLowerCase();

      if (data.compare === 'Содержит') {
        return tableDataType.includes(inputDataType);
      }
      if (data.compare === 'Равно') {

        return tableDataType === inputDataType;
      }
      if (data.compare === 'Больше') {
        return tableDataType > inputDataType;
      }
      if (data.compare === 'Меньше') {
        return tableDataType < inputDataType;
      }
    })
    setRecords(foundData);
  }

  function handleFilter(data) {
    if (data.text.length === 0) {
      setRecords(initialRecords);
    } else {
      selectFilterColumn(data);
    }
  }

  return (
    <div className="page">
      <div className="page__container">
        <Main
          records={records}
          onThClick={handleSorting}
          activeColumns={activeColumns}
          set={tableHeaderSet}
          handleFilter={handleFilter}
        />
      </div>
    </div>
  );
}

export default App;
