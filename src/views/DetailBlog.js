import {
    useParams,
    useHistory,
} from "react-router-dom/cjs/react-router-dom.min";

const DetailBlog = () => {
    let { id } = useParams();
    let history = useHistory();
    const handleBackData = () => {
        history.push("/blog");
    };
    return (
        <>
            <div>
                <span onClick={() => handleBackData()}>&lt;--- Back</span>
            </div>
            <h1>Hello DetailBlog {id}</h1>
        </>
    );
};

export default DetailBlog;
