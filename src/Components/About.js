import React, { useState } from 'react';
import {Jumbotron, Container,Fade, UncontrolledCollapse, Card, CardBody, CardTitle, Row, Col,Alert, Button, ButtonGroup,  ButtonDropdown, Badge , Breadcrumb, BreadcrumbItem, DropdownToggle, DropdownMenu, DropdownItem, CardText } from 'reactstrap';

class About extends React.Component{
    constructor(props){

        super(props);
        this.toggle = this.toggle.bind(this);
        this.changeValue = this.changeValue.bind(this);
        
        this.state = {
          actions: [],
            dropDownValue: 'Select action',
            dropdownOpen: false,
            fname:'',
            lname:'',
            fullname:'',
            email:'',
            country:'india',
            age: 0,
            gender:'',
            state:'',
            city:'',
            zip:'',
            address:'',
            textAreaValue:''

        }
      //  this.Example = this.Example.bind(this); //binds example method with the class
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

       
    }
    toggle(event) {

      this.setState({
          dropdownOpen: !this.state.dropdownOpen
      });
  }
  changeValue(e) {
    this.setState({dropDownValue: e.currentTarget.textContent})
  }
  

    validateResults = () => {
//check for fname and email
let username = this.state.fullname;
let email = this.state.email;
let userCheck = /^[A-Za-z. ]{3,30}$/ ;
var emailCheck = /^[A-Za-z0-9_\.]{3,20}@[A-Za-z]{3,10}[\.]{1}[A-Za-z\.]{2,6}$/;
if(!userCheck.test(username)){
  console.log('validate uname cond');
  alert('Invalid name given.');
  return false;
}else{
  console.log('validate uname cond elsee');
  alert('Valid name given.');
}
if(!emailCheck.test(email))
{
  console.log('validate pass cond');
  alert('You have entered an invalid email address');
  return false;
}else{
  console.log('validate pass cond elsee');
  alert('Valid email given.');
}
return true;
    }
    handleChange(event) {
        // this.setState({fname: event.target.fname});
        // this.setState({lname: event.target.lname});
        // this.setState({age: event.target.age});
        // this.setState({gender: event.target.gender});
        // this.setState({textAreaValue: event.target.textAreaValue});
        this.setState({
            [event.target.name] : event.target.value
        })

        

      }
    
      async handleSubmit(event) {
        event.preventDefault();
        let flag = await this.validateResults();
        if(flag == true)
        {
          console.log('if cond');
            alert(JSON.stringify(this.state));
        }
        else{
          console.log('else cond');
            alert('Please check the info');
        }
       
      }
    
    // Example()
    // {

    // } 
    // Example2 = (a,b,c) => { //arrow function automatically bind to the class

    // }
   render()
   {
       return (
        
        <div style ={{margin : '50px'}}>
        <form class onSubmit={this.handleSubmit}>
        <div>
          <Breadcrumb tag ="nav" listTag="div">
            <BreadcrumbItem tag="a" href="./login.js">Login</BreadcrumbItem>
            <BreadcrumbItem active tag="span">About</BreadcrumbItem>
          </Breadcrumb>
        </div>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
         <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/login">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contact">Contact</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>        
        <br/><br/>
        <div class="mb-3">
        <div class="input-group">
        <span class="input-group-text">First and last name</span>
        <input type="text" aria-label="First name" data-toggle="tooltip" data-placement="top" title="Enter ur first name" class="form-control" name='fname' value={this.state.fname}  onChange={this.handleChange}/>
        <input type="text" aria-label="Last name" class="form-control" name='lname' data-toggle="tooltip" data-placement="bottom" title="Enter ur last name" value={this.state.lname}  onChange={this.handleChange}/>
        </div>
        <div>
          <Alert color="primary">
          Enter your first name and last name <a href="#" className="alert-link">here</a>.
          </Alert>
          </div>
        <div class="row g-2">
        <div class="col-md">
        <label for ="FullName" class="form-label">FullName</label>
        <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon3">@</span>        
        <input type="text" class="form-control" name='fullname' data-toggle="tooltip" data-placement="left" title="Enter ur full name" value={this.state.fullname} aria-describedby="basic-addon3"  onChange={this.handleChange} readonly/>
        </div>
        </div>
        <div class="col-md">
        <label for ="Email" class="form-label" data-toggle="tooltip" data-placement="right" title="Enter ur email id">Email</label>
        <div class ="input-group mb-3">
        <input type="text" class="form-control" name='email' value={this.state.email} aria-describedby="basic-addon2" onChange={this.handleChange} required/>
        <span class="input-group-text" id="basic-addon2">@gmail.com</span>
        </div>
        </div>
        </div>
        <div class="row g-2">
        <div class="col-md">
          <label for="Country" class="form-label">Country</label>      
          <select class="form-select" aria-label="Default select example" value={this.state.country} name='country' onChange={this.handleChange}>
          <option selected>Open this select menu</option>
          <option value="india">India</option>
          <option value="america">USA</option>
          <option value="uk">UK</option>
          <option value="canada">Canada</option>
          </select>
          </div>
        <div class="col-md">
        <label for="Gender" class="form-label">Gender</label>
        <input class="form-control" list="gender" id="exampleDataList" name="gender" placeholder="Type to search..."/>
          <datalist id="gender">
          <option value="Male"/>
          <option value="Female"/>
          <option value="Other"/>  
          </datalist>
          </div>
          </div>
          <div class="row">
          <div class="col-md">
          <label for="Age" class="form-label">Age</label><br/>
          <input type="number" class="form-control-sm" name='age' value={this.state.age}  onChange={this.handleChange} required/>
        </div>
          </div>
          <label for="textAreaValue" class="form-label">More Information About You</label>
         <textarea class="form-control" id="textAreaValue" rows="3"></textarea>
<div>
  <Alert color ="info">Please enter all the additional Information about you like education and family details.</Alert>
</div>
         <label for="Address" class="form-label">Address</label>
         <input type="text" class="form-control" name='address' placeholder="Apartment, studio, or floor" value={this.state.address}  onChange={this.handleChange} />
         <div class="row g-3">
          <div class="col-sm-7">
            <label for="City" class="form-label">City</label>
            <input type="text" class="form-control" placeholder="City" aria-label="City" name='city'  value={this.state.city}  onChange={this.handleChange}/>
          </div>
          <div class="col-sm">
          <label for="State" class="form-label">State</label>
            <input type="text" class="form-control" placeholder="State" aria-label="State" name='state'  value={this.state.state}  onChange={this.handleChange}/>
          </div>
          <div class="col-sm">
          <label for="Zip" class="form-label">Zip</label>
            <input type="text" class="form-control" placeholder="Zip" aria-label="Zip" name='zip' value={this.state.zip}  onChange={this.handleChange}/>
          </div>
        </div>
       <div class="row">
           <div class="col-md-4">
           <label for="formFileSm" class="form-label">Choose a file to upload</label>
           <input class="form-control form-control-sm" id="formFileSm" type="file"></input>
           </div>
         </div>
         <br/>
         <div>
         <label class="form-check-label" for="flexCheckChecked"> I agree to the terms and conditions </label>
         <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
         </div>
       
  {/* <label for="customRange2" class="form-label">Example range</label>
<input type="range" class="form-range" min="0" max="5" id="customRange2"></input> */}
    <div>
      <center>
      <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
      Click here before you submit.
    </Button>
      </center>
    
    <UncontrolledCollapse toggler="#toggler">
      <Card>
        <CardBody>
          Make sure that you fill all of the Information correctly.
        </CardBody>
      </Card>
    </UncontrolledCollapse>
  </div>
        <br/><br/>
        <div class="d-grid gap-2">
    <button type="submit" name="submit" class="btn btn-primary btn-lg mb-3">Confirm</button>
    </div>
    <div>
          <Badge href="#" color="secondary">Have a final look before you confirm</Badge>
        </div>
        </div>

<br/><br/>
</form>
<div class="jumbotron" style={{background:'white',color:"black"}}>
  <h1 class ="display-4">Fluid jumbotron with ReactJS</h1>
  <p>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
</div>
<br/>
<div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Fluid jumbotron with ReactStrap</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </Container>
      </Jumbotron>
    </div>
<br/>
<Row>
  <Col sm="6">
  <Card body className="text-center" inverse color="info">
      <CardTitle tag="h5">Learn JavaScript</CardTitle>
      <CardText>Goto the below link to learn react.</CardText>
      <Button color="primary" size="sm">Click me!</Button>
    </Card>
  </Col>
  <Col sm="6">
    <Card body className="text-center" inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
      <CardTitle tag="h5">Learn ReactStrap</CardTitle>
      <CardText>Goto the below link to learn react.</CardText>
      <Button color="primary" size="sm">Click me!</Button>
    </Card>
  </Col>
</Row>
<br/>

<div class="row">
  <div class="col-sm-6">
    <div class="card" id='card2'>
      <div class="card-body">
        <h5 class="card-title">Learn ReactJS</h5>
        <p class="card-text">Goto the below link to learn react.</p>
        <a href="#" class="btn btn-primary">Click me!</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card" id='card1'>
      <div class="card-body">
        <h5 class="card-title">Learn Bootstrap</h5>
        <p class="card-text">Goto the below link to learn Bootstrap.</p>
        <a href="#" class="btn btn-primary">Click me!</a>
      </div>
    </div>
  </div>
</div>
<br/>
  <div>
    <center>
    <ButtonGroup>
  <Button>1</Button>
  <Button>2</Button>
  <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
    <DropdownToggle caret>
      3
    </DropdownToggle>
    <DropdownMenu>
      <DropdownItem>3-1</DropdownItem>
      <DropdownItem>3-2</DropdownItem>
    </DropdownMenu>
  </ButtonDropdown>
</ButtonGroup>
    </center>
  </div>
</div>

       )
       
   }
   
}
export default About;