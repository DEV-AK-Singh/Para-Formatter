import React from 'react';

const About = ({title}) => {
    document.title = title;
    return (
        <div className='mx-2'>
            <h1 className='text-2xl font-bold my-8'># About</h1>
        </div>
    );
}

export default About;
