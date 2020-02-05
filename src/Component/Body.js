import React from 'react';
import Header from'./Header';
import  Bimage from './images/background.jpg';
import './styles/Body.css'

class Body extends React.Component{
    render(){
        return(

            <div>
            <Header />

            <div className='bodyE'>
            <img src={Bimage} alt='background' className='bimage'/>
            </div>
            <div className='Itext'>
            <input
            type='text'
            placeholder='What do you want to learn' 
            className='binput'
            />
            <h1 id='text-color'>Learning is a Lifestyle</h1>
            <p id='text-color'> Celebrating lifeLong Learning Course</p>
            </div> 
            
            </div>
        )
    }
}export default Body;
