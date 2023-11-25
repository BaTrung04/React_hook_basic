import { useState } from "react";
import axios from "axios";
import "./Blog.scss";

const AddNewblog = (props) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmitBtn = async () => {
        // if (title === "" || title === 'null' || title === undefined) alert("empty title");
        if (!title) {
            alert("empty title");
            return;
        }
        if (!content) {
            alert("content title");
            return;
        }

        let data = {
            title: title,
            body: content,
            userId: 1,
        };

        let res = await axios.post(
            "https://jsonplaceholder.typicode.com/posts",
            data
        );

        if (res && res.data) {
            let newBlog = res.data;
            props.handleAddNew(newBlog);
            console.log(">>check new blog: ", newBlog);
        }

        console.log("check res post data:", res);

        console.log(
            ">>check data before send >>> title: ",
            title,
            "content:",
            content
        );
    };
    return (
        <div className="add-new-container">
            <div className="text-add-new">------ADD NEW BLOGS--------</div>
            <div className="input-data">
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                ></input>
            </div>
            <div className="input-data">
                <label>Content:</label>
                <input
                    type="text"
                    value={content}
                    onChange={(event) => setContent(event.target.value)}
                ></input>
            </div>
            <button
                type="submit"
                className=" btn-add-new"
                onClick={handleSubmitBtn}
            >
                Submit
            </button>
        </div>
    );
};

export default AddNewblog;
