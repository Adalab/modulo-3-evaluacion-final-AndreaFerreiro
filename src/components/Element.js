const Element = ({eachCharacter}) => {
  return (
    <>
      <img className="element-img" src={eachCharacter.img}></img>
      <p className="element-name">{eachCharacter.name}</p>
      <p className="element-race">{eachCharacter.species}</p>
    </>
  )
};
export default Element;