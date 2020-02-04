import React from 'react';
import Logo from './images/logo-coral.svg';
import cate from './images/categories.svg';
import cart from './images/cart.png'
import './styles/Header.css';


class Header extends React.Component{
    render(){
        return(

            <header className='header'>
            <div className='parentContainer'>

            <div className='logo'>
            <img src={Logo} alt='logo' id='logo'/>
            </div>

            <div className='categories'>
            <img src={cate} alt='' id='cate' />
            <p>categories</p>
            
            </div>

            <div className='input'>
            <input 
            placeholder='search for anything'
            id='input'
            />
              
            </div>

            <div className='text'>

            <p>Udemy for Business</p>
            <p>Teach on Udemy</p>
            
            </div>
            
            <div className='cart'>
            <img src = {cart} alt='cart' id='cart' />
            
            </div>

            <div className='button'>
            <button id='btn1'>Log In</button>
            <button id='btn2'>Sign Up</button>
            
            </div>

            </div>

            </header>
        )
    }
}export default Header;