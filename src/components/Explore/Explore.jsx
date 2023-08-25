import React from 'react';

const Explore = ({title}) => {
    document.title = title;
    return (
        <div className='mx-2'>
            <h1 className='text-2xl font-bold my-8'># Explore</h1>
        </div>
    );
}

export default Explore;
