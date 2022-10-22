import React from 'react';
import Api from '../../utils/Api';
import { MAIN_API } from '../../utils/config';

import Main from '../Main/Main';


function App() {

  const [records, setRecords] = React.useState([]);

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
    .then((records) => {
      localStorage.setItem("records", JSON.stringify(records));
      setRecords(JSON.parse(localStorage.getItem("records"))[0]);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])

  return (
    <div className="page">
      <div className="page__container">
        <Main
          records={records}
        />
      </div>
    </div>
  );
}

export default App;
