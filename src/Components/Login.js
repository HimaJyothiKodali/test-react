import React, { Component } from 'react';
// import styles from './mystyle.module.css'; 
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Login extends Component {
    state = { 
        modal : false
     }
    test = () => {
        console.log("entered test");
        window.location.href='http://localhost:3000/about';
    }
    toggle=()=>{
            this.setState({
                modal:!this.state.modal
            })
    }
    handleLogin =(e) =>{
        console.log(e);
        e.preventDefault();
        var user = document.getElementById('username').value;
        var pass = document.getElementById('pass').value;

    if(user === 'hima' && pass === '123')
    {

        console.log("Login Successful");
        window.location.href='http://localhost:3000/about';
       // window.location.href='http://localhost:3000/about';
    }
    else{
        window.alert("login failed");
    }
    }
    render() { 
        return ( 
            
            <div className = "ui main">
            
            <center>
           <h1 style={{backgroundColor: "black"}}>Welcome to Login Page</h1>
           <form className ="ui form" >
           {/* <nav class="navbar navbar-default">
           <div class="container-fluid">
            <div class="navbar-header">
            <p class="navbar-brand" name="new" href="#">React</p>
            </div>
            </div>
           </nav> */}



<div>
      <Button color="danger" onClick={this.toggle}>LOGIN MODAL</Button>
      <Modal isOpen={this.state.modal} toggle={this.toggle} >
        <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
           <div class="mb-3">
               <div className = "row">
                   {/* <Row></Row> */}
                   <div className = "col-sm-2"></div>
                   {/* <Col sm={2}></Col> */}
                   <div className = "col-sm-4">
                        <div className = "field">
                        <label for ="UserName" class="form-label">USERNAME</label>
                        <input type="text" class="form-control" name="name" id="username"></input>
                    </div>
                   </div>
                   <div className = "col-sm-4">
                        <div className = "field">
                        <label for="password" class="form-label"> PASSWORD </label>
                        <input type="password" class="form-control"name ="password" name="pass" id="pass"></input>
                    </div>
                    <div className = "col-sm-2"></div>
                   </div>
                    </div>
              
                <button type="button" class="btn btn-primary" onClick ={this.handleLogin}>SUBMIT</button>
               </div>
           </form>
           {/* <button onClick ={this.test}>TEST</button> */}

      </center>
      {/* style={{color:"red"}} */}
        </div>
        
         );
    }

}
 
export default Login;