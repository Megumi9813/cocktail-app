import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import axious from 'axios'
import { Link } from 'react-router-dom'
import Card from '../components/Card'

function Cocktails() {
    const [cocktails, setCocktails] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    const [filteredItem, setFilteredItem] = useState([]);

    async function fetchMenu() {
        const {data} = await axious.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`);
        setCocktails(data.drinks)
    }

    function filterCocktail() {
        cocktails.filter(cocktail => {
            if(searchInput === '') {
                return setFilteredItem(cocktail);
            } else if (cocktail.strDrink.toLowerCase().includes(searchInput.toLowerCase())) {
                return setFilteredItem(cocktail);
            }
        })
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
                {/* {
                    filterCocktail(filteredItem).map(cocktail => (
                        <Card cocktail={cocktail} key={cocktail.idDrink}/>
                    ))
                } */}
                {
                    cocktails.filter(cocktail => {
                        if(searchInput === '') {
                            return cocktail;
                        } else if (cocktail.strDrink.toLowerCase().includes(searchInput.toLowerCase())) {
                            return cocktail;
                        }
                    }).map(cocktail => (
                        <Card cocktail={cocktail} key={cocktail.idDrink}/>
                    ))
                }
            </div>
        </div>
      </>
  )
}

export default Cocktails