import React from "react";
import {Mail} from "@mui/icons-material";
import GradientDivider from "../others/reuseable";

function ContactForm() {
    return (
        <form action="">
            <div className="form-group">
                <label htmlFor="email-address" className="form-label">Email Address</label>
                <input id="email-address" type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="phone-number" className="form-label">Phone Number</label>
                <input type="text" className="form-control" id="phone-number" />
            </div>
            <div className="form-group">
                <label htmlFor="more-info" className="form-label">Additional Information</label>
                <textarea name="" id="more-ifo" cols="30" rows="5" className="form-control"></textarea>
            </div>
            <div className="form-group text-center">
                <button className="btn btn-dark btn-custom btn-lg d-inline-flex">
                    <Mail/>
                    &nbsp;&nbsp;&nbsp;
                    <span>Holla!</span>
                </button>
            </div>
        </form>
    );
}

function Contact() {
    return (
        <section id="contact">
            <GradientDivider />
            <div className="bg-white p-5">
                <div className="row">
                    <div className="col-lg-6 col-sm-12 d-flex align-center justify-content-around">
                        <div>
                            <div className="balance-theme mb-5 mt-5">
                                <h1>Did you</h1>
                                <h1>Find your balance?</h1>
                            </div>
                            <div className="infinity-base">
                                <div className="infinity-path">
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                            <div className="balance-theme mt-3">
                                <h1>
                                    Yes ?
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    No?
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="bg-black p-5 rounded">
                            <div className="balance-theme">
                                <h1>Contact Me</h1>
                            </div>
                            <p className="text-underline">I will help you find that balance</p>
                            <ContactForm />
                            <p className="text-underline text-italics">
                                Wanna contact me directly ??, I won't tell if you don't.<br />
                                <a href="mailto:itzstriker561@gmail.com" target="_blank" rel="noopener noreferrer" className="text-light">
                                    I'm Here
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;