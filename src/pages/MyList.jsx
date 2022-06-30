import React from 'react'
import { Link } from 'react-router-dom'

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
      </div>
    </>
  )
}

export default MyList