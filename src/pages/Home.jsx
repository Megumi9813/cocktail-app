import React, { useState, useEffect, useRef } from 'react'
import Footer from '../components/Footer'
import HomeImg from '../assets/home_img.webp'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Home({}) {
  const [days, setDays] = useState([]);
  const [seasonals, setSeasonals] = useState([]);
  const [nonAlcoholics, setNonAlcoholics] = useState([]);

  async function fetchDay() {
    const { data } = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`);
    setDays(data.drinks);
  }

  async function fetchSeasonal() {
    const { data } = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=14107`);
    setSeasonals(data.drinks);
  }
  async function fetchNonAlcoholic() {
    const { data } = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`);
    setNonAlcoholics(data.drinks);
  }

  useEffect(() => {
    fetchDay();
    fetchSeasonal();
    fetchNonAlcoholic();
  }, [])

  return (
    <>
      <div className="row home_height">
        <div className="home_top-wrapper">
          <figure>
            <img src={HomeImg} alt="" />
          </figure>
          <h1>Find your GoTo Coktail recipes</h1>
          <ul className="drink_option">
            <li>Special Cocktail for the day</li>
            <li>Seasonal Drinks</li>
            <li>Non Alcoholic drinks</li>
          </ul>
          <div className="home_para">
            <p>Thirsty...? We have hundreds and hundreds of delicious cocktail recipes including Tips, Ingredients and recomemded the type of glass. Browse our list of cocktail and find your GoTo Cokctail for the fancy night! </p>
          </div>
        </div>
        <div className="spotlights">
          <div className="spotlight-left">
            {
              days.map(img => 
                <Link to={`/cocktails/${img.idDrink}`} key={img.idDrink}>
                  <div className="spotlight" >
                    <div className="spotlight_card">
                      <div className="img_holder">
                        <figure>
                          <img src={img.strDrinkThumb} alt="" />
                        </figure>
                      </div>
                    </div>
                    <h4>{img.strDrink.toUpperCase()}</h4>
                    <h3>Special Cocktail for the day</h3>
                  </div>
                </Link>
              )
            }
          </div>
          <div className="spotlight-right">
            {
              seasonals.map(seasonal => 
                <Link to={`/cocktails/${seasonal.idDrink}`} key={seasonal.idDrink}>
                  <div className="spotlight" >
                    <div className="spotlight_card">
                      <div className="img_holder">
                        <figure>
                          <img src={seasonal.strDrinkThumb} alt="" />
                        </figure>
                      </div>
                    </div>
                    <h4>{seasonal.strDrink.toUpperCase()}</h4>
                    <h3>Seasonal Drinks</h3>
                  </div>
                </Link>
              )
            }
            {
              nonAlcoholics.slice(9, 10).map(nonAlcoholic => 
                <Link key={nonAlcoholic.idDrink} to={`/cocktails/${nonAlcoholic.idDrink}`}>
                  <div className="spotlight">
                    <div className="spotlight_card">
                      <div className="img_holder">
                        <figure>
                          <img src={nonAlcoholic.strDrinkThumb} alt="" />
                        </figure>
                      </div>
                    </div>
                    <h4>{nonAlcoholic.strDrink.toUpperCase()}</h4>
                    <h3>Non Alcoholic drinks</h3>
                  </div>
                </Link>
              )
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Home