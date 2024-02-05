import React, {useState, useEffect} from 'react';
import SkeletanArticle from '../skeletonElements/skeletanArticle';

const Article = () => {
    const [news, setNews] = useState([]);
    useEffect(()=>{
       const timerId = setTimeout(async ()=>{
            const req = await fetch("https://jsonplaceholder.typicode.com/posts");
            const res = await req.json();
            setNews(res);
        },3000)
       return () => clearTimeout(timerId);
    },[news])

    return (
        <div>
            <h1>Article</h1>
            <br />
            {news.length === 0 && [1,2,3,4,5].map((e)=>(<SkeletanArticle />))}
            {(news.length > 0 && (news.map((data) => (
             <div key={data.id}>   
                <br />
                <h4>{data.title}</h4>
                <br />
                <p>{data.body}</p>
             </div>  
            ))
        ))}
    </div>
    );
}

export default Article;
