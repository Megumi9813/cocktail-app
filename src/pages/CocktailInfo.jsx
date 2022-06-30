import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import Cocktail from '../components/Cocktail';

function CocktailInfo({adddToSave, save}) {
  const { id } = useParams();
  const [cocktails, setCocktails] = useState([]);

  async function fetchCocktail() {
    const { data } = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    setCocktails(data.drinks);
  }

  useEffect(() => {
    fetchCocktail()
  }, [])

  return (
    <>
      <div className="row info_height">
        <Link to="/cocktails" className='cocktail_selected-top'>
          <FontAwesomeIcon icon={faArrowLeft} />
          <h3>Cocktails</h3>
        </Link>
        {
          cocktails.map(cocktail => (
            <Cocktail cocktail={cocktail} key={cocktail.idDrink} adddToSave={adddToSave} id={id} save={save}/>
          ))
        }
      </div>
    </>
  )
}

export default CocktailInfo