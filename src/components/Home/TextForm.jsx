import React from 'react';

const TextForm = ({text,handleChange}) => {
    return (
        <div className='basis-2/3'>
            <textarea rows="10" placeholder='Write Something Here ...' className='w-full font-serif font-semibold bg-yellow-200 text-gray-500 rounded-2xl p-3 focus:bg-cyan-50 focus:text-black' value={text} onChange={handleChange}></textarea>
        </div>
    );
}

export default TextForm;
