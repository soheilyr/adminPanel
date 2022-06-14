import { Table } from "react-bootstrap";
import { useContext, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SinglePost from "../../components/SinglePost/SinglePost";
import DeletePost from "../../components/DeletePosts/DeletePosts";
import Card from "../../UI/Card/Card";
import { NEWPOSTS } from "../../Urls/Urls";
import EditPosts from "../../components/EditPosts/EditPosts";
import "./Posts.css";
import { postsContext } from "../../context/posts/Posts-context";

const Posts = () => {
  const postsCTX = useContext(postsContext);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postCategory, setPostCategory] = useState("");
  const [postContent, setPostContent] = useState("");
  const [postId, setPostId] = useState(0);

  const handleShowDeleteModal = (state, id, title) => {
    setShowDeleteModal(state);
    setPostId(id);
    setPostTitle(title);
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

  const postsList = postsCTX.posts.map((item) => {
    return (
      <SinglePost
        handleShow={handleShowDeleteModal}
        edit={editModalHandler}
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
        show={showDeleteModal}
        handleShow={handleShowDeleteModal}
        id={postId}
        title={postTitle}
      />
    </Card>
  );
};

export default Posts;
