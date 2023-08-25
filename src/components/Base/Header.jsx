import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const isLoggedIn = false;
    return (
        <div class="flex flex-row bg-blue-500 m-2 rounded-2xl">
            <div class="basis-3/12 p-4 text-2xl font-bold font-serif text-center text-cyan-50"><span>Para~Formator</span></div>
            <div class="basis-7/12 py-5 flex flex-row list-none gap-8 font-semibold text-base">
                <li className='hover:text-cyan-50'><Link to='/'>Home</Link></li>
                <li className='hover:text-cyan-50'><Link to='/about'>About</Link></li>
                <li className='hover:text-cyan-50'><Link to='/contact'>Contact</Link></li>
                <li className='hover:text-cyan-50'><Link to='/explore'>Explore</Link></li>

            </div>
            <div class="basis-2/12 text-center p-4 flex flex-row list-none gap-4 font-semibold text-sm bg-cyan-50 border-4 border-blue-500 rounded-2xl">
                {isLoggedIn ? <li className='hover:text-blue-500 grow p-1 rounded-full font-extrabold'>Welcome User!!</li> : 
                <> <li className='hover:text-blue-500 grow p-1 rounded-full font-extrabold'>Login / SignUp</li></> }
            </div>
        </div>
    );
}

export default Header;
