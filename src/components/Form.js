const Form = ({handleSearch})=> {
    return(
        <form className="main__form">
          <label className="main__form--label" htmlFor="name">
            <input
              className="name-input"
              type="text"
              placeholder="Filtrar por nombre"
              id="name"
              htmlFor="name"
              onInput={handleSearch}
            ></input>
          </label>
        </form>
    )
}
export default Form;