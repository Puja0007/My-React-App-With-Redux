import React,{useState,useEffect} from 'react';

export default function Posts(){
    const [posts, setPosts] = useState([]);
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then((json) => {
            setPosts(json);
          console.log(json);
        });
    });
    return (
      <ul>
        {posts.map((d: any) => (<li key={d.id}>{d.title}</li>))}
      </ul>
    );
}