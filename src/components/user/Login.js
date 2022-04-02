import React, { useContext, useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from "react-router";
import { Link } from 'react-router-dom';
import userContext from '../../context/user/userContext';


const Login = () => {
  let navigate = useNavigate();

  const context = useContext(userContext);
  const { host } = context;
  const [loginDtls, setloginDtls] = useState({});



  const handelOnSubmit = (e) => {
    e.preventDefault();
    // userLogin(loginDtls.email, loginDtls.password);
    fetch(
      `${host}/api/auth/login`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: loginDtls.email, password: loginDtls.password })
      }
    ).then((response) => {
      response.json().then(usrAuth => {
        //user valide hole ai function e true acbe and home e redirect kore dewa hobe
        if (usrAuth.authToken) {
          localStorage.setItem('inoteToken', usrAuth.authToken);
          navigate("/");
        } else {
          alert(usrAuth.errors)
        }
      });
    })




  }


  const onChange = (e) => {
    setloginDtls({ ...loginDtls, [e.target.name]: e.target.value });
  }
  return (
    <Container>
      <Form onSubmit={handelOnSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" onChange={onChange} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" onChange={onChange} />
        </Form.Group>
        <div className='my-3'>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>

  );
}

export default Login;
