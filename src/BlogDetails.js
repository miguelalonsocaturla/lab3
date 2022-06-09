import {  useNavigate, useParams } from "react-router-dom";
import useFetch from "./usefetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog } = useFetch('http://localhost:8001/blogs/' + id);
  const navigate = useNavigate();

  const handleClick = () => {
    fetch('http://localhost:8001/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      navigate.push('/');
    }) 
  }

  return (
    <div className="blog-details">
      
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.user }</p>
          <div>{ blog.body }</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;
