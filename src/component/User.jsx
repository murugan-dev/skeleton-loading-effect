import React, {useState, useEffect} from 'react';
import SkeletanUser from '../skeletonElements/skeletanUser';

const User = () => {
    const [user, setUser] = useState(0);
    
    useEffect(()=>{
        setTimeout(async () =>{
            const fecthData = await fetch("https://jsonplaceholder.typicode.com/users/1");
            const data = await fecthData.json();
            setUser(data);
        },3000)
    },[user])
    
    return (
        <div className='user-container'>
         <h1>Users Details</h1>
        {(!user && <SkeletanUser /> )|| (user && (
            <div className='user-data'>
                <br />
                <h4 className='user-name'>{user.name}</h4>
                <br />
                <p className='user-name'>{user.username}</p>
            </div>
        ))}
        </div>
    );
}

export default User;
