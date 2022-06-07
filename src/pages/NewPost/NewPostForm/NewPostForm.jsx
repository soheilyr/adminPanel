import { Form, Button } from "react-bootstrap";
import { useRef } from "react";
const NewPostForm = (props) => {
  const titleValue = useRef();
  const category = useRef();
  const contentValue = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    props.handleSubmit(
      titleValue.current.value,
      category.current.value,
      contentValue.current.value
    );
  };
  return (
    <Form className="my-4" onSubmit={submitHandler}>
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
      <Button disabled={props.loading} variant="primary" type="submit">
        {props.loading ? "...Loading" : "Submit"}
      </Button>
    </Form>
  );
};

export default NewPostForm;
