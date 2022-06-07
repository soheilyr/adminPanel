import { Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Posts = (props) => {
  const [posts, setPosts] = useState([]);
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
        console.log(posts);
      })
      .then(console.log(posts));
  }, []);
  const postContent = posts.map((item) => {
    return (
      <tr key={item.id}>
        <th>{item.id}</th>
        <th>{item.title}</th>
        <th>{item.category}</th>
        <th>{item.content}</th>
      </tr>
    );
  });
  return (
    <>
      <Link to="new" className="btn my-3 btn-success">
        ADD
      </Link>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>title</th>
            <th>category</th>
            <th>content</th>
          </tr>
        </thead>
        <tbody>{postContent}</tbody>
      </Table>
    </>
  );
};

export default Posts;
