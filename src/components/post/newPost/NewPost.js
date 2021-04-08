import "./NewPost.css";
import axios from "axios";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useState, useEffect } from "react";

const { REACT_APP_SERVER_URL } = process.env;



const NewPost = (props) => {
  const [payload, setPayload] = useState("");



  const changeHandler = (event) => {
    setPayload(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    axios.post(`${REACT_APP_SERVER_URL}/post`, payload);
  };
  return (
    <>
      <div className="newpost-container shadow">
        <Form>
          <FormGroup>
            <h2>New Post</h2>
            <Input type="text" onChange={changeHandler} id="content"></Input>
            <Button className="submit" onClick={submitHandler}>
              Submit
            </Button>
          </FormGroup>
        </Form>
      </div>
    </>
  );
};

export default NewPost;
