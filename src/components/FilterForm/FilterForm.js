import React from 'react';

let data = {};
function FilterForm(props) {

  function handleChangeSelect(e) {
    const {name, value} = e.target;
    data = {...data,
      [name]: value
    }
  }

  function handleChange(e) {
    const {name, value} = e.target;
    data = {...data,
      [name]: value
    }
    props.onChange(data);
  }

  return (
    <form className="filterForm">
      <p>Фильтр</p>
      <select className="filterForm__select" required="required" onChange={handleChangeSelect} name="column">
        <option value="">Выберите колонку</option>
        <option value="Дата">Дата</option>
        <option value="Название">Название</option>
        <option value="Количество">Количество</option>
        <option value="Расстояние">Расстояние</option>
      </select>
      <select className="filterForm__select" required="required" onChange={handleChangeSelect} name="compare">
        <option value="">Выберите условие</option>
        <option value="Равно">Равно</option>
        <option value="Содержит">Содержит</option>
        <option value="Больше">Больше</option>
        <option value="Меньше">Меньше</option>
      </select>
      <input className="filterForm__input" placeholder="Введите данные" required type="text"
        onChange={handleChange} name="text"></input>
    </form>
  );
}

export default FilterForm;
