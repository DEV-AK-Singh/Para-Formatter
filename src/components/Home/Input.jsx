import React from 'react';

const Input = ({name,val,setVal,disable}) => {
    return (
        <>
            {
                (disable)
                ? <input className='border-blue-500 border-2 outline-blue-500 px-4 py-1 font-semibold text-black 'name={name} onChange={(e)=>{setVal(e.target.value)}} value={val} placeholder={name} disabled/>
                : <input className='border-blue-500 border-2 outline-blue-500 px-4 py-1 font-semibold text-black 'name={name} onChange={(e)=>{setVal(e.target.value)}} value={val} placeholder={name}/>
            }
        </>
    );
}

export default Input;
