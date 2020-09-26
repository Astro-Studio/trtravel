import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the pearl of the Mediterranean.'
              label='Luxury'
              path='/'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Join the hot air balloons at sunset in Cappadocia.'
              label='Adventure'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Discover the ancient history of Troy on a full-day sightseeing tour.'
              label='Mystery'
              path='/'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Take A Quick Rundown For An Enthralling Vacation.'
              label='Adventure'
              path='/'
            />
            <CardItem
              src='images/img-8.jpg'
              text='See a wonder of beauty in Manavgat waterfall.'
              label='Romantic'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
