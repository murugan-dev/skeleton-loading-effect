import React from 'react';
import Skeletan from './skeletan';

const SkeletanArticle = () => {
    return (
        <div className='skeletan-article-wrapper'>
            <br />
            <Skeletan type="title"/>
            <br />
            <Skeletan type="text"/>
            <Skeletan type="text"/>
            <Skeletan type="text"/>
        </div>
    );
}

export default SkeletanArticle;
