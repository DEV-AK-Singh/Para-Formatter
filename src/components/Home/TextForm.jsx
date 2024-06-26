import React from 'react';

const TextForm = ({text,handleChange}) => {
    return (
        <div>
            <textarea rows="15" placeholder='Write Something Here ...' className='w-full font-serif font-semibold bg-yellow-100 text-gray-500 p-3 focus:bg-white focus:text-black resize-none border-2 border-blue-500 outline-none' value={text} onChange={handleChange}></textarea>
        </div>
    );
}

export default TextForm;
