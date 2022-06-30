import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTag, faSquareFull} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function Cocktail({cocktail, adddToSave, id, save}) {

  function addCocktailToSave(cocktail) {
    adddToSave(cocktail);
  }

  function cokctailExistOnCart() {
    return save.find(cocktail => +cocktail.idDrink === +id)
  }

  return (
      <>
         <div className="cocktail_selected" key={cocktail.idDrink}>
              <figure className='cocktail_selected-figure'>
                <img src={cocktail.strDrinkThumb} alt="" />
              </figure>
              <div className="cocktail_selected-description">
                <h2 className='cocktail_selected-name'>{cocktail.strDrink}</h2>
                <div className="tags">
                  <div className='tag alcoholic'>
                    <FontAwesomeIcon icon={faTag} />
                    {cocktail.strAlcoholic}
                  </div>
                  <div className='tag category'>
                    <FontAwesomeIcon icon={faTag} />
                    {cocktail.strCategory}
                  </div>
                  <div className='tag glass'>
                    <FontAwesomeIcon icon={faTag} />
                    {cocktail.strGlass}
                  </div>
                </div>
                <div className="cocktail_selected-ingredients">
                  <div className="cocktail_selected-title">Ingredients</div>
                  <div className="cocktail_selected-ingredient">
                    <FontAwesomeIcon icon={faSquareFull} className="square"/>
                    <span>{cocktail.strIngredient1}</span>
                    <span>{cocktail.strMeasure1}</span>
                  </div>
                  <div className="cocktail_selected-ingredient">
                    <FontAwesomeIcon icon={faSquareFull} className="square"/>
                    <span>{cocktail.strIngredient2}</span>
                    <span>{cocktail.strMeasure2}</span>
                  </div>
                  <div className="cocktail_selected-ingredient">
                    <FontAwesomeIcon icon={faSquareFull} className="square"/>
                    <span>{cocktail.strIngredient3}</span>
                    <span>{cocktail.strMeasure3}</span>
                  </div>
                  <div className="cocktail_selected-ingredient">
                    <FontAwesomeIcon icon={faSquareFull} className="square"/>
                    <span>{cocktail.strIngredient4}</span>
                    <span>{cocktail.strMeasure4}</span>
                  </div>
                </div>
                <div className="cocktail_selected-instruction">
                  <div className="cocktail_selected-title">Directions</div>
                  {cocktail.strInstructions}
                </div>
                {
                  cokctailExistOnCart() ? (
                    <Link to="/mylist">
                      <button className='btn_added'>Go to my List</button>
                    </Link>
                  ) : (
                    <button className='btn_myList' onClick={() => addCocktailToSave(cocktail)}>Add to my List</button>
                  )
                }
              </div>
            </div>
      </>
  )
}

export default Cocktail