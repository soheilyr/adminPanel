import { Form, Button } from "react-bootstrap";
import Input from "../../../UI/input/Input";
import { createRef } from "react";
import Label from "../../../UI/Label/Label.";
import Card from "../../../UI/Card/Card";
import Textarea from "../../../UI/Textarea/Textarea";
const NewPostForm = (props) => {
  const titleValue = createRef();
  const category = createRef();
  const contentValue = createRef();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(titleValue);
    props.handleSubmit(
      titleValue.current.value,
      category.current.value,
      contentValue.current.value
    );
  };
  return (
    <Card>
      <Form className="my-4" onSubmit={submitHandler}>
        <Form.Group className="mb-3">
          <Label>Title</Label>
          <Input ref={titleValue} type="text" placeholder="title" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Label>category</Label>

          <Input placeholder="text" type="text" ref={category} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Label>content</Label>
          <Textarea ref={contentValue} as="textarea" rows={3} />
        </Form.Group>
        <Button disabled={props.loading} variant="primary" type="submit">
          {props.loading ? "...Loading" : "Submit"}
        </Button>
      </Form>
    </Card>
  );
};

export default NewPostForm;
