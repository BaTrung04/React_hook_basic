import useFetch from "../customize/fetch";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Blog.scss";
const Blog = () => {
    const { data: dataBlogs } = useFetch(
        "https://jsonplaceholder.typicode.com/posts",
        false
    );
    let newData = [];
    if (dataBlogs && dataBlogs.length > 0) {
        newData = dataBlogs.slice(0, 9);
    }
    console.log("check data: ", dataBlogs);
    return (
        <div className="blogs-container">
            {newData &&
                newData.length > 0 &&
                newData.map((item) => {
                    return (
                        <div className="single-blog">
                            <div className="title">Title: {item.title}</div>
                            <div className="content">Body: {item.body}</div>
                            <button>
                                {" "}
                                <Link to={`/blog/${item.id}`}>View Detail</Link>
                            </button>
                        </div>
                    );
                })}
        </div>
    );
};

export default Blog;
