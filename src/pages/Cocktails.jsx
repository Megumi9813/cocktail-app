import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import axious from 'axios'
import { Link } from 'react-router-dom'

function Cocktails() {
    const [cocktails, setCocktails] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    async function fetchMenu() {
        const {data} = await axious.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`);
        setCocktails(data.drinks)
    }

    useEffect(() => {
        fetchMenu();
    }, [])

  return (
      <>
        <div className="row cokctail_height">
            <div className="cocktails_header">
                <h3>Searched: {searchInput}</h3>
                <div className="input_wrapper">
                    <input 
                        type="text" 
                        placeholder='Search drinks...'
                        onChange={e => setSearchInput(e.target.value)}
                    />
                    <button className='search_btn'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="font_awesome-btn"/>
                    </button>
                </div>
            </div>
            <div className="cocktail_list">
                {
                    cocktails.filter(cocktail => {
                        if(searchInput === '') {
                            return cocktail;
                        } else if (cocktail.strDrink.toLowerCase().includes(searchInput.toLowerCase())) {
                            return cocktail;
                        }
                    }).map(cocktail => (
                        <Link to={`/cocktails/${cocktail.idDrink}`} key={cocktail.idDrink}>
                            <div className="card">
                                <div className='cocktail_img'>
                                    <img src={cocktail.strDrinkThumb} alt="" />
                                </div>
                                <div className="cocktail_name">{cocktail.strDrink}</div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
      </>
  )
}

export default Cocktails