import '../styles/Detail.scss';
import { NavLink } from 'react-router-dom';

const ElementDetail = ({ elementData }) => {
  console.log(elementData);
  return (
    <>
      <section className="detail">
        <img className="detailImg" src={elementData.image}></img>
       {/*<div className="detailData">
          <span className="detailName">Nombre: {elementData.name}</span>
          <span className="detailSpecie">Especie: {elementData.species}</span>
          <span className="detailStatus">Estado: {elementData.status}</span>
          <span className="detailOrigin">
            Origen: {elementData.origin.name}
          </span>
          <span className="detailEpisodes">
            Episodios: {elementData.episodes}
          </span>
  </div>*/}
      </section>
      <NavLink key={elementData.id} to={"/"}>
        <button className="reset">Volver</button>
      </NavLink>
    </>
  );
};
export default ElementDetail;
/*
        species: objectAPI.species,
        status: objectAPI.status,
        origin: objectAPI.origin.name,
        episodes: objectAPI.episode.length,
*/
