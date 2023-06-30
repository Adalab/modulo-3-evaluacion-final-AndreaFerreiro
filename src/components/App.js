import { useEffect, useState } from 'react';
import '../styles/App.css';
import { useLocation, matchPath } from 'react-router';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import callToApi from '../services/api';
import ls from '../services/LocalStorage';
import Hero from './Hero';
import List from './List';
function App() {
  const [characterList, setCharacterList] = useState([]);
  useEffect(() => {
    if (ls.get('characters', null) === null) {
      callToApi().then((cleanData) => {
        setCharacterList(cleanData);
        console.log(characterList);
        ls.set('characters', cleanData);
      });
    }
  }, []);
  return (
    <div className="page">
      <Hero />
      <main className="main">
        <form className="main__form">
          <label className="main__form--label" htmlFor="name">
            <input
              className="name-input"
              type="text"
              placeholder="Filtrar por nombre"
              id="name"
              htmlFor="name"
            ></input>
          </label>
          <input className="name-submit" type="submit" value="Buscar"></input>
        </form>
        <List characterList={characterList} />
      </main>
    </div>
  );
}

export default App;
