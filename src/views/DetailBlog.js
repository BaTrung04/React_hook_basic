import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const DetailBlog = () => {
    let { id } = useParams();
    return <h1>Hello DetailBlog {id}</h1>;
};

export default DetailBlog;
