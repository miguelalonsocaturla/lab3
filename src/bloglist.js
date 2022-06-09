import { Link, useParams } from "react-router-dom";
import useFetch from "./usefetch";


export default function BlogList(){
    const { user } = useParams();
    const {  data: blogs } = useFetch('http://localhost:8001/blogs')
        return (
        <div className="blog-list">
            {blogs && blogs.map((blog) => {
                if (blog.user === user) {
                    <div className="blog-preview" key={blog.id} >
                    <Link to={`/blogs/${blog.id}`}>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    </Link>
                </div>   
                }
            })}
        </div>
        );
    }
