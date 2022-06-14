import { Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SinglePost from "../../components/SinglePost/SinglePost";
import DeletePost from "../../components/DeletePosts/DeletePosts";
import Card from "../../UI/Card/Card";
import { NEWPOSTS } from "../../Urls/Urls";
import EditPosts from "../../components/EditPosts/EditPosts";
import "./Posts.css";
const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postCategory, setPostCategory] = useState("");
  const [postContent, setPostContent] = useState("");
  const [postId, setPostId] = useState(0);
  const reqDelete = (targetLoc) => {
    axios.delete(
      `https://admin-panel-479e2-default-rtdb.firebaseio.com/posts/${targetLoc}.json`
    );
  };

  const removePostHandler = (id) => {
    setPostId(id);
    setPostTitle(title);
    setShowDeleteModal(true);
    let posts;
    let targetLoc;
    axios
      .get(NEWPOSTS)
      .then((response) => response.data)
      .then((data) => {
        posts = Object.assign({}, data);
      })
      .then(() => {
        targetLoc = Object.keys(posts).find((key) => posts[key].id === id);
      })
      .then(() => {
        console.log(targetLoc);
        reqDelete(targetLoc);
      });
  };

  const hideDeleteModalHandler = () => {
    setShowDeleteModal(false);
  };

  const editModalHandler = (id, title, category, content) => {
    setPostId(id);
    setPostTitle(title);
    setPostCategory(category);
    setPostContent(content);
    setShowModal(true);
  };

  useEffect(() => {
    axios
      .get("https://admin-panel-479e2-default-rtdb.firebaseio.com/posts.json")
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        let newPosts = [...posts];
        Object.values(data).forEach((item) => {
          newPosts.push(item);
        });
        setPosts(newPosts);
      })
      .then();
  }, []);

  const postsList = posts.map((item) => {
    return (
      <SinglePost
        edit={editModalHandler}
        remove={removePostHandler}
        key={item.id}
        id={item.id}
        content={item.content}
        category={item.category}
        title={item.title}
      />
    );
  });
  return (
    <Card>
      <Link to="new" className="btn my-3 btn-success">
        ADD
      </Link>
      <Table bordered size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Category</th>
            <th>Content</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>{postsList}</tbody>
      </Table>
      <EditPosts
        show={showEditModal}
        hide={hideDeleteModalHandler}
        id={postId}
        title={postTitle}
        content={postContent}
        category={postCategory}
      />
      <DeletePost
        removePostHandler={removePostHandler}
        show={showDeleteModal}
        hide={hideDeleteModalHandler}
        id={postId}
        title={postTitle}
      />
    </Card>
  );
};

export default Posts;
