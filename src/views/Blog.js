import useFetch from "../customize/fetch";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./Blog.scss";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import AddNewblog from "./AddNewBlog";
import { useEffect } from "react";

const Blog = () => {
    const [show, setShow] = useState(false);
    const [newData, setNewDate] = useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { data: dataBlogs, isLoading } = useFetch(
        "https://jsonplaceholder.typicode.com/posts",
        false
    );
    useEffect(() => {
        if (dataBlogs && dataBlogs.length > 0) {
            let data = dataBlogs.slice(0, 9);
            setNewDate(data);
        }
    }, [dataBlogs]);

    const handleAddNew = (blog) => {
        let data = newData;
        data.unshift(blog);
        setShow(false);
        setNewDate(data);
    };

    const deletePost = (id) => {
        let data = newData;
        data = data.filter((item) => item.id !== id);
        setNewDate(data);
    };
    return (
        <>
            <Button variant="primary" className="my-3" onClick={handleShow}>
                +Add new blog
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New blog</Modal.Title>
                </Modal.Header>
                <Modal.Body className="my-3">
                    <AddNewblog handleAddNew={handleAddNew} />
                </Modal.Body>
            </Modal>

            <div className="blogs-container">
                {newData &&
                    newData.length > 0 &&
                    newData.map((item) => {
                        return (
                            <div className="single-blog">
                                <div className="title">
                                    <span>Title: {item.title}</span>
                                    <span
                                        onClick={() => deletePost(item.id)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        X
                                    </span>
                                </div>
                                <div className="content">Body: {item.body}</div>
                                <button>
                                    {" "}
                                    <Link to={`/blog/${item.id}`}>
                                        View Detail
                                    </Link>
                                </button>
                            </div>
                        );
                    })}

                {isLoading === true && (
                    <div
                        style={{ textAlign: "center !important", with: "100%" }}
                    >
                        Loading data...
                    </div>
                )}
            </div>
        </>
    );
};

export default Blog;
