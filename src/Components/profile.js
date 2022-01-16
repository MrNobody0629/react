import React, { Component } from 'react';
import jsCookies from 'js-cookie';
import '../App.css';

class Profile extends Component {
    
    render() {
        if (userExist()) {
            return (
                <>
                <li className="nav-item dropdown dropdown-menu-start">
                    <a className="nav-link dropdown-toggle" id="navbarDarkDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">Log In</a>
                    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                        <li><a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#logInForm">SignIn</a></li>
                        <li><a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#signUpForm">Register</a></li>
                    </ul>
                </li>
                </>
            );
        }
        else
        {
            return (
                <>                
                <li className="nav-item dropdown dropdown-menu-start">
                    <a className="nav-link" data-bs-toggle="modal" data-bs-target="#addPostModal">Add Post</a>
                </li>
                <li className="nav-item dropdown dropdown-menu-end">
                    <a className="nav-link dropdown-toggle" id="navbarDarkDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">{jsCookies.get('userName').split(' ')[0]}
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark right" aria-labelledby="navbarDarkDropdownMenuLink">
                        <li><a class="dropdown-item" href="#">Profile</a></li>
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" onClick={()=>{logOut()}}>Log Out</a></li>
                    </ul>
                </li>
                </>
            );
        }
    }
}

const userExist = ()=>{
    var data = jsCookies.get('userName');
    return data? false:true;
}
const logOut = ()=>{
    jsCookies.remove('userName');
    jsCookies.remove('userEmail');
    jsCookies.remove('userPhone');
    jsCookies.remove('userId');
    jsCookies.remove('userName');
    window.location.reload(false);
}
export default Profile;
