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
            </div>

            <ul>
            <p id='para'>categories</p> 
            <ul>
            <li>Development</li>
            <li>Business</li>
            <li>Finance & Accounting</li>
            <li>IT & software</li>
            <li>Office Productivity</li>
            <li>Personal Development</li>
            <li>Design</li>
            <li>Marketing</li>
            <li>Lifestyle</li>
            <li>Health & fitness</li>
            <li>Photography</li>
            <li>Music</li>
            <li>Teaching</li>
            </ul>
            </ul>

            <input 
            placeholder='search for anything'
            id='input'
            />
              
       

            <div className='text'>

            <p>Udemy for Business</p>
            <p>Teach on Udemy</p>
            
            </div>

            <div className='left'></div>
            
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