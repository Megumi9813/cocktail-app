import React from 'react'
import { Link } from 'react-router-dom'
import emptyList from '../assets/undraw_no_data_re_kwbl.svg'

function MyList({save, removeItem}) {

  return (
    <>
      <div className="row cart_height">
        <div className="save_list">
          {
            save.map((cocktail => 
              <div className='cocktail_card' key={cocktail.idDrink}>
                <Link to={`/cocktails/${cocktail.idDrink}`} className="list_card">
                  <div className="card">
                      <div className='cocktail_img'>
                          <img src={cocktail.strDrinkThumb} alt="" />
                      </div>
                      <div className="cocktail_name">{cocktail.strDrink}</div>
                  </div>
                </Link>
                <button className='btn_remove' onClick={() => removeItem(cocktail)}>Remove</button>
              </div>
            ))
          }
        </div>
        {
          save.length === 0 && <div className="empty_myList">
          <figure>
            <img src={emptyList} alt="" />
          </figure>
          <h2>You don't have any recipes in your list!</h2>
          <Link to={"/cocktails"}>
            <button className='btn_myList'>Browse Cocktails</button>
          </Link>
        </div>
        }
      </div>
    </>
  )
}

export default MyList