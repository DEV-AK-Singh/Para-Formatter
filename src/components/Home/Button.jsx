import React from 'react';

const Button = ({name,func}) => {
    return (
        <>
            <button onClick={func} className='w-full bg-blue-500 py-2 font-semibold text-white text-xs sm:text-sm text-center'>{name}</button>    
        </>
    );
}

export default Button;
