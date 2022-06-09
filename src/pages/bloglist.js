import './index.css'

export default function BlogList(){

    const user = String;
    const BlogList = ({ blogs }) => {
        return (
        <div className="blog-list">
            {blogs.map((blog) => {
                if (blog.user === user) {
                    <div className="blog-preview" key={blog.id} >
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                </div>   
                }
            })}
        </div>
        );
    }
}