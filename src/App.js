import React from 'react';
import PropTypes from 'prop-types';

function Food({name, picture, rating}){
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src = {picture} width='80px' height='60px' alt={name}/>
    </div>
  );
}

const foodILike = [
  {
    id : 1,
    name : "Kimchi",
    image : 'https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png',
    rating : 5,
  },
  {
    id : 2,
    name : "Samgyeopsal",
    image : 'https://pds.joins.com/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg',
    rating : 4.9,
  },
  {
    id : 3,
    name : "Bibimbap",
    image : 'https://recipe1.ezmember.co.kr/cache/recipe/2017/04/13/abcf293fb7d0d73d61e274127ced7b931.jpg',
    rating : 4,
  },
  {
    id : 4,
    name : "Doncasu",
    image : 'https://th3.tmon.kr/thumbs/image/6ea/082/d57/2906e06a0_700x700_95_FIT.jpg',
    rating : 4.5,
  },
  {
    id : 5,
    name : "Kimbap",
    image : 'https://recipe1.ezmember.co.kr/cache/recipe/2016/06/29/e7401296033ab8e4297cd53d71e1bba91.jpg',
    rating : 3.6,
  },
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
      ))}
    </div>
  );
}

Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number,
};

export default App;
