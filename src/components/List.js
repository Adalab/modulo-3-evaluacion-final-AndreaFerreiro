import Element from "./Element";
const List = ({characterList}) => {
  const htmlLi = characterList.map((eachCharacter) => (
    <li key={eachCharacter.id} className="list-element">
      <Element eachCharacter={eachCharacter} />
    </li>
  ));
  return(
  <ul className="list">
    {htmlLi}
  </ul>
  )
};
export default List;

