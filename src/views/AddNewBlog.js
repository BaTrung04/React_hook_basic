import { useState } from "react";

const AddNewblog = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmitBtn = () => {
        console.log(">>Check data:", title, content);
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
