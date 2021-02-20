import React from 'react'
import CardItem from './CardItem'
import './Cards.css';


function Cards() {
    return (
        <div className='cards'>
            <h1>Projects</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                      <CardItem
                      src="mages/img-9.jpg"
                      text="Project Description" 
                      label='Crypto App'
                      path='/services'
                      /> 
                      <CardItem
                      src="mages/img-9.jpg"
                      text="Project Description" 
                      label='ESTORE'
                      path='/services'
                      /> 
                    </ul>
                    <ul className="cards__items">
                      <CardItem
                      src="mages/img-9.jpg"
                      text="Project Description" 
                      label='Crypto App'
                      path='/services'
                      /> 
                      <CardItem
                      src="mages/img-9.jpg"
                      text="Project Description" 
                      label='ESTORE'
                      path='/services'
                      /> 
                      <CardItem
                      src="mages/img-9.jpg"
                      text="Project Description" 
                      label='ESTORE'
                      path='/services'
                      /> 
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
