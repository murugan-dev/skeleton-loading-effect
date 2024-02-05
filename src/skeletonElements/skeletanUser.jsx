import React from 'react';
import Skeletan from './skeletan';

const SkeletanUser = () => {
    return (
        <div className='user-skeletan'>
            <div>

            <Skeletan type="avathar"/>
            </div>
            <div>   
            <Skeletan type="title"/>
            <Skeletan type="text"/>
            </div>
        </div>
    );
}

export default SkeletanUser;
