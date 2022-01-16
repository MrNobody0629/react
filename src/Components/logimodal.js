import React,{ useState } from "react";
import jsCookies from 'js-cookie';

const LogIn = ()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const [allEntry, setAllEntry] = useState([]);

    const SignIn = async (e)=>{
        e.preventDefault();
        const res = await fetch('http://localhost:3001/signin',{
            method:'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify({email,password}),
        });
        const data = await res.json();
        console.log(data);
        if(data.status === -1)
        {
            document.querySelector('.msg-box-signin').style.display = "block";
            document.querySelector('.msg-box-signin').innerHTML = data.msg;
            setTimeout(()=>{
                document.querySelector('.msg-box-signin').style.display = "none";
            },10000)
        }
        else if(data.status === 1)
        {
            createCookie(data.result[0]);
            document.querySelector('.msg-box-signin').style.display = "block";
            document.querySelector('.msg-box-signin').innerHTML = "Hello Mr. "+jsCookies.get('userName');
            setTimeout(()=>{
                document.querySelector('.msg-box-signin').style.display = "none";
            },10000)
            window.location.reload(false);
        }
        else if(data.status === -2)
        {
            document.querySelector('.msg-box-signin').style.display = "block";
            document.querySelector('.msg-box-signin').innerHTML = "ERROR It's not you It's US";
            setTimeout(()=>{
                document.querySelector('.msg-box-signin').style.display = "none";
            },10000)
        }
    }
    const createCookie = (obj)=>
    {
        jsCookies.set('userName', obj.name,{path:'/',expires:30});
        jsCookies.set('userEmail', obj.email,{path:'/',expires:30});
        jsCookies.set('userPhone', obj.contact,{path:'/',expires:30});
        jsCookies.set('userId', obj.id,{path:'/',expires:30});
        jsCookies.set('userGender', obj.gender,{path:'/',expires:30});
    }
    return (
        <>
            <div className="modal fade" id="logInForm" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Sign In</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="container-fluid msg-box-signin text-danger text-center" style={{display:'none'}}></div>
                        <div className="form-container">
                            <form action="" onSubmit={SignIn}>
                                <div className="row mb-3">
                                    <label htmlFor="inputUserEmail" className="col col-form-label">Email</label>
                                    <div className="col-sm-12">
                                    <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Enter UserId" id="inputUserEmail"/>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="inputUserPassword" className="col col-form-label">Password</label>
                                    <div className="col-sm-12">
                                    <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Enter Password" id="inputUserPassword"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="d-flex justify-content-between">
                                        <button type="reset" className="col-5 m-2 btn btn-outline-danger">Reset</button>
                                        <button type="submit" className="col-5 m-2 btn btn-outline-success">Sign in</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="text-center p-2">New User ? <a type="button" className="text-primary" data-bs-toggle="modal" data-bs-target="#signUpForm">Register</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LogIn;