import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { ModalTitle } from "react-bootstrap";
const initialState = {
  posts: [],
  addPostHandler: () => {},
  removePostHandler: () => {},
  editPostHandler: () => {},
};
export const postsContext = createContext(initialState);
const PostsProvider = (props) => {
  const [posts, setPosts] = useState([]);

  const editPostHandler = (id, title, category, content) => {
    const targetPost = [...posts];
    const targetPostIndex = targetPost.findIndex((item) => item.id === id);
    targetPost[targetPostIndex] = { id, title, category, content };
    setPosts(targetPost);
  };

  const removePostHandler = (id) => {
    console.log("this is the id : ", id);
    let postsAfterRemove = [...posts];
    postsAfterRemove = postsAfterRemove.filter((item) => item.id !== id);
    setPosts(postsAfterRemove);
  };

  const addPostHandler = (id, title, category, content) => {
    let newPosts = [...posts];
    newPosts.push({
      id: id,
      title,
      category,
      content,
    });
    setPosts(newPosts);
  };

  useEffect(() => {
    axios
      .get("https://admin-panel-479e2-default-rtdb.firebaseio.com/posts.json")
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        let postsRendered = [...posts];
        Object.values(data).forEach((item) => {
          postsRendered.push(item);
        });
        setPosts(postsRendered);
      });
  }, []);
  const value = { posts, addPostHandler, editPostHandler, removePostHandler };
  return (
    <postsContext.Provider value={value}>
      {props.children}
    </postsContext.Provider>
  );
};
export default PostsProvider;
