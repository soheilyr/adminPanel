import axios from "axios";
import React from "react";
import { useState, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { NEWPOSTS } from "../../Urls/Urls";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const NewPost = () => {
  const titleValue = useRef();
  const category = useRef();
  const contentValue = useRef();

  let history = useNavigate();
  const [loading, setLoading] = useState(false);
  const notify = () =>
    toast("Post Successfully Added !!!", {
      onClose: () => {
        history("/posts");
        setLoading(true);
      },
    });
  const warn = () => {
    toast.warn("please fill all of the field!", {
      autoClose: 1000,
      closeOnClick: true,
    });
  };
  const handleSubmitPost = (e) => {
    e.preventDefault();
    if (
      titleValue.current.value &&
      category.current.value &&
      contentValue.current.value
    ) {
      setLoading(true);
      axios
        .post(
          NEWPOSTS,
          {
            category: category.current.value,
            content: contentValue.current.value,
            id: Math.floor(Math.random() * 100000),
            title: titleValue.current.value,
          },
          {
            headers: { "Content-type": "application/json" },
          }
        )
        .then((response) => {
          if (response.statusText === "OK") {
            notify();

            //   history("/posts");
          }
        });
    } else {
      warn();
    }
  };
  return (
    <Form className="my-4" onSubmit={handleSubmitPost}>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control ref={titleValue} type="text" placeholder="title" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>category</Form.Label>
        <Form.Control ref={category} type="text" placeholder="text" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>content</Form.Label>
        <Form.Control ref={contentValue} as="textarea" rows={3} />
      </Form.Group>
      <Button disabled={loading} variant="primary" type="submit">
        {loading ? "...Loading" : "Submit"}
      </Button>

      <ToastContainer autoClose={500} />
    </Form>
  );
};

export default NewPost;
