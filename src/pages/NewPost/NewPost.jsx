import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NEWPOSTS } from "../../Urls/Urls";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NewPostForm from "./NewPostForm/NewPostForm";
const NewPost = () => {
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

  const handleSubmitPost = (title, category, content) => {
    console.log(title, category, content);
    if (title && category && content) {
      setLoading(true);
      axios
        .post(
          NEWPOSTS,
          {
            id: Math.floor(Math.random() * 100000),
            title,
            category,
            content,
          },
          {
            headers: { "Content-type": "application/json" },
          }
        )
        .then((response) => {
          if (response.statusText === "OK") {
            notify();
          }
        });
    } else {
      warn();
    }
  };

  return (
    <>
      <NewPostForm handleSubmit={handleSubmitPost} loading={loading} />
      <ToastContainer />
    </>
  );
};

export default NewPost;
