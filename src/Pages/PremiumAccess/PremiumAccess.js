import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PremiumAccess = () => {
    const singleCourse = useLoaderData();
    return (
        <div>
            <h2>This is premium access for <span className='text-danger'>{singleCourse.title}</span></h2>
        </div>
    );
};

export default PremiumAccess;