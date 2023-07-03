import '../styles/Form.scss';
const Form = ({ handleSearch, nameSearch, filterCharacters, specieSearch }) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  const renderMessage = () => {
    if (nameSearch && filterCharacters.length === 0) {
      return <p className="message">Not coincidences found</p>;
    } else if (specieSearch && filterCharacters.length === 0) {
      return <p className="message">Not coincidences found </p>;
    }
    return null;
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="main__form">
        <label className="main__form--label" htmlFor="name">
          <input
            className="name-input"
            type="text"
            placeholder="Name"
            id="name"
            htmlFor="name"
            value={nameSearch}
            onInput={handleSearch}
          ></input>
        </label>
        <label htmlFor="specie">
          <input
            className="specie-input"
            type="text"
            placeholder="Specie"
            id="specie"
            htmlFor="specie"
            value={specieSearch}
            onInput={handleSearch}
          ></input>
        </label>
      </div>
      <div className="error-form">{renderMessage()}</div>
    </form>
  );
};
export default Form;
