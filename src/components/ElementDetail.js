import '../styles/Detail.scss';
import { NavLink } from 'react-router-dom';

const ElementDetail = ({ elementData }) => {
  const handleStatus = () => {
    if (elementData.status === 'Dead'){
      return (
        `${elementData.status} 😵`
      )
    } else{
      return(
        `${elementData.status}`
      )
    }
  }
  return (
    <>
      <section className="detail">
        <img className="detailImg" src={elementData.image}></img>
        <div className="detailData">
          <span className="detailName">Name: {elementData.name}</span>
          <span className="detailSpecie">Specie: {elementData.species}</span>
          <span className="detailStatus">Status: {handleStatus()}</span>
          <span className="detailOrigin">
            Origin: {elementData.origin.name}
          </span>
          <span className="detailEpisodes">
            Episodes: {elementData.episodes}
          </span>
        </div>
      </section>
      <NavLink key={elementData.id} to={'/'}>
        <button className="reset">Volver</button>
      </NavLink>
    </>
  );
};
export default ElementDetail;
