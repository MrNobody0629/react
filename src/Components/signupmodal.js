// import { error } from "jquery";
import React,{ useState } from "react";

const SignUp = ()=>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [gender, setGender] = useState('');
    const [password, setPassword] = useState('');
    const [isTermsAccept, setIsTermsAccept] = useState(false);

    // const [allEntry, setAllEntry] = useState([]);

    const ValidateForm = async (e) => {
        e.preventDefault();
        if (isTermsAccept === false) {
            document.querySelector('.msg-box-signup').style.display = "block";
            document.querySelector('.msg-box-signup').innerHTML = "Please Accept Terms & conditions";
            setTimeout(()=>{
                document.querySelector('.msg-box-signup').style.display = "none";
            },10000)
            return false;
        }
        const res = await fetch('https://roomorent.herokuapp.com/insertNewUser',{
            method:'get',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name,email,contact,gender,password}),
        });
        const data = await res.json();
        console.log(data);
        if(data.status === -1)
        {
            document.querySelector('.msg-box-signup').style.display = "block";
            document.querySelector('.msg-box-signup').innerHTML = "Email '"+email+"' is already Register";
            setTimeout(()=>{
                document.querySelector('.msg-box-signup').style.display = "none";
            },10000)
            console.log(data.msg);
        }
        if(data.status === 1)
        {
            document.querySelector('.msg-box-signup').style.display = "block";
            document.querySelector('.msg-box-signup').innerHTML = "Register succesfully You inserted Id is "+data.result.insertId;
            setTimeout(()=>{
                document.querySelector('.msg-box-signup').style.display = "none";
            },10000)
            console.log("Register succesfully You inserted Id is "+data.result.insertId);
        }
    }
    return (
        <>
            <div className="modal fade" id="signUpForm" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Sign Up</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="container-fluid msg-box-signup text-danger text-center" style={{display:'none'}}></div>
                        <div className="form-container">
                            <form action="" onSubmit={ValidateForm}>
                                <div className="row mb-3">
                                    <label htmlFor="inputName" className="col col-form-label">Full Name</label>
                                    <div className="col-sm-12">
                                    <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="Enter Full Name" id="inputName"/>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="inputEmail" className="col col-form-label">Email</label>
                                    <div className="col-sm-12">
                                    <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Enter Email" id="inputEmail"/>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="inputMobile" className="col col-form-label">Contact No.</label>
                                    <div className="col-sm-12">
                                    <input type="number" name="mobile" value={contact} onChange={(e)=>setContact(e.target.value)} className="form-control" placeholder="Enter Contact Number" id="inputMobile"/>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="inputGender" className="col col-form-label">Gender</label>
                                    <div className="col-sm-12">
                                        <select value={gender} onChange={(e)=>setGender(e.target.value)} className="form-control" id="inputGender">
                                            <option value="">Select</option>
                                            <option value="M">Male</option>
                                            <option value="F">Female</option>
                                            <option value="O">others</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="inputPassword" className="col col-form-label">Password</label>
                                    <div className="col-sm-12">
                                    <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Enter Password" id="inputPassword"/>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-10">
                                    <div className="form-check">
                                        <input checked={isTermsAccept} onChange={(e)=>setIsTermsAccept(e.target.checked)} className="form-check-input" type="checkbox" id="isTermsAccept"/>
                                        <label className="form-check-label" htmlFor="isTermsAccept">
                                        Term's & Conditions
                                        </label>
                                    </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="d-flex justify-content-between">
                                        <button type="reset" className="col-5 m-2 btn btn-outline-danger">Reset</button>
                                        <button type="submit" className="col-5 m-2 btn btn-outline-success">Sign Up</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="text-center p-2">New User ? <a type="button" className="text-primary" data-bs-toggle="modal" data-bs-target="#logInForm">Sign In</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUp;