import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";
import { useMemo } from "react";


export const HeroPage = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const hero = useMemo( () => getHeroById( id ), [ id ] );

  const onNavigateBack = () => {
    navigate(-1);
  };

  if( !hero ){
    <Navigate to="/marvel" />
  }

  return (
   <>
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`../assets/heroes/${id}.jpg`}
          alt={ hero.superhero }
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="col-3">
        <h3>
          { hero.superhero }
        </h3>
        <ul className="list-group list-group-flush">
          <li>
            <b>Alter ego:</b> { hero.alter_ego }
          </li>
          <li>
            <b>Publisher:</b> { hero.publisher }
          </li>
          <li>
            <b>First appearance:</b> { hero.first_appearance }
          </li>
        </ul>
          <h5 className="mt-3">Characters</h5>
          <p>{ hero.characters }</p>
          <button onClick={ onNavigateBack } className="btn btn-outline-primary">
            Return
          </button>
      </div>

    </div>
   </>
  )
}


