import React from 'react';
import sortingLogo from '../../images/icons8-сортировка-по-возрастанию-48.png';

function TableHeader(props) {

  const isLiked = props.activeColumns.some(i => i === props.value);
  const sortLogoClass = isLiked ? 'table__sort-logo table__sort-logo_active' : 'table__sort-logo';

  function handleSorting(e) {
    if (e.target.dataset.title !== 'date') {
      props.onThClick(e.target);
    }
  }

  const headerTitle = (props.value === 'date') ? 'Дата' :
    (props.value === 'title') ? 'Название' :
    (props.value === 'amount') ? 'Количество' :
    (props.value === 'distance') ? 'Расстояние' : 'Другое';

  return (
      <th onClick={handleSorting} data-title={props.value}>
        {headerTitle}
        <img className={sortLogoClass} src={sortingLogo} alt="sorting"></img>
      </th>
  );
}

export default TableHeader;
