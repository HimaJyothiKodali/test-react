import React, { Component } from 'react';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Col, Container, Label, Row, Button, Input, FormGroup} from 'reactstrap';
import axios from 'axios';
import BounceLoader from "react-spinners/BounceLoader";
import ClipLoader from "react-spinners/ClipLoader";
import Loader from 'react-loader';
import { css } from "@emotion/react";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len)
const minLength = (len) => (val) => (val) && (val.length >= len)
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val)
const isNumber = (val) => !isNaN(Number(val));

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
class Form2 extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLoading : true
        }

    }
  componentDidMount()
  {
    axios.get('https://api.npms.io/v2/search?q=react')
    .then((response)=>{
        console.log(response);
        this.setState({
            isLoading : false
        })
        alert(JSON.stringify(response));
    })
    .catch((err)=>{
        alert(err);
    })
  }
    render() { 
        return ( 
            <Container>
                {
                    this.state.isLoading?
                    // <div>
                    //    <h1> isLoading is true </h1> 
                    //    <p>Need to show animation here</p>
                    // </div>
                    <div className="sweet-loading">
                    <BounceLoader css={override} size={150} color={"#123abc"} loading={this.state.loading} speedMultiplier={1.5} />
                  </div>
                    :
                    <div>
                        <h2>isLoading is false</h2>
                    </div>
                }
                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                    <Row className="form-group">
                        <Label md={2}>FirstName</Label>
                        <Col md={10}>
                        <Control.text model=".firstname" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors 
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                            required: 'Required! ',
                                            minLength: 'Must be greater than 3 characters! ',
                                            maxLength: 'Must be 15 characters or less...'
                                        }}
                                    />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label md={2}>LastName</Label>
                        <Col md={10}>
                        <Control.text model=".lastname" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3)
                                        }}
                                         />
                                    <Errors 
                                        className="text-danger"
                                        model=".lastname"
                                        show="touched"
                                        messages={{
                                            required: 'Required! ',
                                            minLength: 'Must be greater than 3 characters! ',
                                        }}
                                    />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label md={2}>FullName</Label>
                        <Col md={10}>
                        <Control.text model=".fullname" id="fullname" name="fullname"
                                        placeholder="Full Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(25)
                                        }}
                                         />
                                    <Errors 
                                        className="text-danger"
                                        model=".fullname"
                                        show="touched"
                                        messages={{
                                            required: 'Required! ',
                                            minLength: 'Must be greater than 3 characters! ',
                                            maxLength: 'Must be less than 25 characters!'

                                        }}
                                    />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label md={2}>Age</Label>
                        <Col md={10}>
                        <Control.text type="number" model=".age" id="age" name="age"
                                        placeholder="Age"
                                        className="form-control"
                                        validators={{
                                            required
                                        }}
                                         />
                                    <Errors 
                                        className="text-danger"
                                        model=".age"
                                        show="touched"
                                        messages={{
                                        required: 'Required! ',
                                        }}
                                    />
                        </Col>
                    </Row>
                    <Row className="form-group">
                                <Label md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" id="telnum" name="telnum"
                                        placeholder="Tel. Number" 
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                                        }}
                                        />
                                    <Errors 
                                        className="text-danger"
                                        model=".telnum"
                                        show="touched"
                                        messages={{
                                            required: 'Required! ',
                                            minLength: 'Must be greater than 2 numbers! ',
                                            maxLength: 'Must be 15 numbers or less... ',
                                            isNumber: 'Must be a number!'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row>
                            <FormGroup tag="fieldset">
        <legend>Radio Buttons</legend>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Option one is this and that—be sure to include why it's great
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Option two can be something else and selecting it will deselect option one
          </Label>
        </FormGroup>
        <FormGroup check disabled>
          <Label check>
            <Input type="radio" name="radio1" disabled />{' '}
            Option three is disabled
          </Label>
        </FormGroup><FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Option two can be something else and selecting it will deselect option one
          </Label>
        </FormGroup>
        <FormGroup check disabled>
          <Label check>
            <Input type="radio" name="radio1" disabled />{' '}
            Option three is disabled
          </Label>
        </FormGroup>
        </FormGroup>
        </Row>
                    <Row className="form-group">
                                <Label md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email" 
                                        className="form-control"
                                        validators={{
                                            required, validEmail
                                        }}
                                        />
                                    <Errors 
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: 'Required! ',
                                            validEmail: 'Invalid Email address!'
                                        }}
                                    />
                                </Col>
                            </Row>
                  <Row className="form-group">
                        <Label md={2}>Gender</Label>
                        <Col md={10}>
                        <Control.select model=".gender" name="gender"
                                        className="form-control">
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Others</option>
                                    </Control.select>
                                </Col>
                    </Row>
                    <Row className="form-group">
                                <Col md={{size: 6, offset:2}}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".agree" name="agree"
                                                className="form-check-input"
                                                />{' '}
                                                <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{size: 3, offset:1}}>
                                    <Control.select model=".contactType" name="contactType"
                                        className="form-control"
                                    >
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>
                    <Row className="form-group">
                        <Col md={{size:10, offset:2}}>
                            <Button type="submit" color="primary">
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </LocalForm>
            </Container>
         );
    }
}
 
export default Form2;