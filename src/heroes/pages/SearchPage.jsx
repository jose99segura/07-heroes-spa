import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { HeroCard } from "../components"
import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../helpers";



export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse( location.search );

  const heroes = getHeroesByName( q );

  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if ( searchText.trim().length <= 1 ) {
      return;
    }
    navigate(`?q=${ searchText }`);
  }

  return (
    <>

      <h1>Search Page</h1>

      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />

          <form onSubmit={ onSearchSubmit }>
            <input 
              type="text"
              placeholder="Find your hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange }
            />

            <button
              type="submit"
              className="btn m-1 btn-block btn-outline-primary"
            >
              Search...
            </button>

          </form>
        </div>

        <div className="col-7">

          <h4>Results</h4>
          <hr />

          {
            ( q === '' )
            ? <div className="alert alert-info">Search a hero</div>
            : (heroes.length === 0) &&
            <div className="alert alert-danger">No results with { q }</div>
          }


            { 
              heroes.map( hero => (
                <div key={ hero.id }>
                  <HeroCard key={ hero.id } { ...hero } />
                </div>
              ))
            }

        </div>
      </div>
    
    </>
  )
}
