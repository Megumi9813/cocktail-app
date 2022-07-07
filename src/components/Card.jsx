import React, {useEffect, useState, useRef} from 'react'
import { Link } from 'react-router-dom'

function Card({cocktail}) {
  const [img, setImg] = useState();
  const [isInit, setIsInit] = useState(false);

    const mountRef = useRef(null);

    useEffect(() => {
      setIsInit(true)
        const image = new Image();
        image.onload = () => {
          if (mountRef.current) {
            setImg(image);
          }
        }
        image.src = cocktail.strDrinkThumb;
    },[isInit])

  return (
    <Link to={`/cocktails/${cocktail.idDrink}`} ref={mountRef}>
      {
        img ? (
          <div className="card">
              <div className='cocktail_img'>
                  <img src={cocktail.strDrinkThumb} alt="" />
              </div>
              <div className="cocktail_name">{cocktail.strDrink}</div> 
          </div>
        ) : (
          <div className="card_skelton"></div>
        )
      }
    </Link>
  )
}

export default Card

