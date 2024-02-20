import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';
import Cookies from "js-cookie";

export default function MyProfile() {
    const [users , setUsers] = useState([]);
   // var uid = localStorage.getItem('userid');
    var uid=Cookies.get("userid");
    useEffect(() => {
        axios.get("http://localhost:8087/user/oneuser/"+uid)
            .then((response) => {
                console.log(response.data);
                setUsers(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    const user = {
        uname : users.uname,
        mobileno: users.mobileno,
        email: users.email,
        firstname: users.firstname,
        lastname: users.lastname,
        question: users.question,
        answer:users.answer


    }
    return (
        <section className="" style={{ background: '#f4f5f7' }}>
            <div className="container py-5 ">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-lg-6 mb-4 mb-lg-0">
                        <div className="card mb-3" style={{ border: '.5rem' }}>
                            <div className="row g-0">
                                <div className="col-md-4 gradient-custom text-center text-white">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                        alt="Avatar" className="img-fluid my-5" style={{ width: '80px' }} />
                                    <h5>My Profile</h5>
                                    <i className="far fa-edit mb-5"></i>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body p-4">
                                        <h4>Information</h4><br />
                        
                                            <div className="row">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <h6>User Name : {user.uname} </h6>
                                                    </div>
                                                    
                                                </div>
                                                <hr class="mt-0 mb-4" />
                                            <br />
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <h6>Contact : {user.mobileno}</h6>
                                                </div>
                                                
                                            </div>
                                            <hr class="mt-0 mb-4" />
                                            <br />
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <h6>Email-Id : {user.email}</h6>
                                                </div>
                                                
                                            </div>
                                            <hr class="mt-0 mb-4" />
                                            <br />
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <h6>First Name :{user.firstname} </h6>
                                                </div>
                                                
                                            </div>
                                            <hr class="mt-0 mb-4" />
                                            <br />
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <h6>Last Name : {user.lastname}</h6>
                                                </div>
                                                
                                            </div>
                                            <hr class="mt-0 mb-4" />
                                            <br />
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <h6>Security Questions : {user.question}</h6>
                                                </div>
                                                
                                            </div>
                                            <hr class="mt-0 mb-4" />
                                            <br />
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <h6>Answers :{user.answer} </h6>
                                                </div>
                                               
                                            </div>
                                            <hr class="mt-0 mb-4" />
                                            <br />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}