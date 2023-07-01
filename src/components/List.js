import Element from './Element';
import { NavLink } from 'react-router-dom';
const List = ({ filterCharacters }) => {
  const htmlLi = filterCharacters.map((eachCharacter) => (
    <NavLink key={eachCharacter.id} to="/element:ElementId">
      <li key={eachCharacter.id} className="list-element">
        <Element eachCharacter={eachCharacter} />
      </li>
    </NavLink>
  ));
  return <ul className="list">{htmlLi}</ul>;
};
export default List;
