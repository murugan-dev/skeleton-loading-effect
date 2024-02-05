import React from 'react'

import './App.css';
import User from './component/User';
import Article from './component/Article';
import Skeletan from './skeletonElements/skeletan';


function App() {
 return ( 
    <div className='title-heading'> 
     
     <Article />
     <User />
    </div>   
  )
}

export default App
