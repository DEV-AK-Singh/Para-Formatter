import React from 'react';

const Button = ({name,func}) => {
    return (
        <>
        {(name=="Copy Text")?
            <button onClick={func} className='w-full bg-blue-500 px-4 py-2 rounded-lg font-semibold text-white'>{name}</button>    
            :
            <button onClick={func} className='basis-1/3 bg-blue-500 px-4 py-2 rounded-lg font-semibold text-white'>{name}</button>
            }
        </>
    );
}

export default Button;
