import { useEffect, useState } from 'react';
import '../styles/Main.scss';
import { useLocation, matchPath } from 'react-router';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import callToApi from '../services/api';
import ls from '../services/LocalStorage';
import Hero from './Hero';
import List from './List';
import Form from './Form';
import ElementDetail from './ElementDetail';
function App() {
  const [characterList, setCharacterList] = useState(ls.get('characters', []));
  const [nameSearch, setNameSearch] = useState(ls.get('nameSearch', ''));
  const [specieSearch, setSpecieSearch] = useState('');
  useEffect(() => {
    if (ls.get('characters', null) === null) {
      callToApi().then((cleanData) => {
        setCharacterList(cleanData);
        //ls.set('characters', cleanData);
      });
    }
  }, []);
 
  const handleSearch = (ev) => {
    ev.preventDefault();
    const namesearchValue = ev.target.value.toLowerCase();
    setNameSearch(namesearchValue);
    ls.set('nameSearch', nameSearch);
  };
  const filterCharacters = characterList.filter((eachCharacter) =>
    eachCharacter.name.toLowerCase().includes(nameSearch)
  ).filter((eachCharacter) => eachCharacter.species.toLowerCase().includes(specieSearch));
  const {pathname} = useLocation();
  const routeData = matchPath('/element/:elementId', pathname);
  const elementId = routeData !== null ? routeData.params.elementId : '';
  const elementData = characterList.find((element) => element.id === parseInt(elementId) );
  console.log(elementData);
  console.log(routeData);
  useEffect(() => {
    ls.set("nameSearch", nameSearch);
  }, [nameSearch]);
  return (
    <div className="page">
      <Hero />
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Form handleSearch={handleSearch} nameSearch={nameSearch} filterCharacters={filterCharacters}/>
                <List filterCharacters={filterCharacters} />
              </>
            }
          />
          <Route path="/element/:elementId" element={<ElementDetail elementData={elementData}/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
