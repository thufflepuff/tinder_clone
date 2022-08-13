import React from 'react'
import TinderCard from 'react-tinder-card';
import './Tindercards.css'

function TinderCards() {

    const [cars, setCars] = React.useState([

    {
        name: 'lamborghini',
        url: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/aventador/2021/gate_aven_01_m.jpg'
    },  
    {
        name: 'BMW',
        url: 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iQTIeCcQCL4A/v1/1200x-1.jpg'
    },
    {
        name: 'Audi',
        url: 'https://i.ytimg.com/vi/OVNc6k7AeLU/maxresdefault.jpg'
    },
    {
        name: 'Bugati',
        url: 'https://www.bugatti.com/fileadmin/_processed_/sei/p121/se-image-4f750982624e527a8b1003408e4febcf.jpg'
    }
    ]);

  return (
    <div className='card-container'>
      {
        cars.map( car => (
            <TinderCard
                className='swipe'
                key={car.name}
                preventSwipe={['up', 'down']}
            >
                <div
                style={ { backgroundImage: `url(${car.url})` } }
                className= 'card'
                >
                    <h3>{car.name}</h3>
                </div>
            </TinderCard>
        ))
      }
    
    </div>
  )
}

export default TinderCards
