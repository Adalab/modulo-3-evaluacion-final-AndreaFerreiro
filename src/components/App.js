import { useEffect, useState } from 'react';
import '../styles/App.css';
import {useLocation, matchPath} from 'react-router';
import {Link, Route, Routes, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
function App() {
  return (
    <div>
      <hero>
        <img src='../images/rickymorty.jpeg'></img>
      </hero>
      <main>
        <form>
          <label htmlFor='name'>
            <input type='text' placeholder='Introduce el nombre del personaje que quieras buscar' id='name' htmlFor='name'></input>
          </label>
          <input type='submit' value={Buscar}></input>
        </form>
        <section>

        </section>
      </main>
    </div>
  );
}

export default App;
