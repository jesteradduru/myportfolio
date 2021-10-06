import React from 'react';
import jaLogo from "../../assets/img/logo-light.png";
import bootstrapLogo from "../../assets/img/bootstrap-logo.png";
import reactLogo from "../../assets/img/React-logo.png";
const Footer = () => {
    return (
        <div className="footer py-5 mt-5">
            <div className="logo d-flex justify-content-center align-items-center flex-column">
                <img className="img-fluid" src={jaLogo} alt="logo" />
                <p className="text-semibold text-light mt-1" style={{marginBottom: 0}}>Jester Adduru</p>
            </div>
            <hr className="bg-light w-25 mx-auto"/>
           <div className="d-flex justify-content-center mt-4">
                <a href="#" className="btn btn-outline-light me-2">Facebook</a>
                <a href="#" className="btn btn-outline-light me-2">Gmail</a>
                <a href="#" className="btn btn-outline-light me-2">Github</a>
           </div>
           <div className="mt-4 d-flex justify-content-center align-items-center flex-column">
                <h5 className="text-semibold text-light mt-1 text-center" style={{marginBottom: 0}}>Made with:</h5>
                <div className="mt-3">
                    <img src={bootstrapLogo} alt="bootstrapLogo" className="img-fluid me-2"/>
                    <img src={reactLogo} alt="bootstrapLogo" className="img-fluid me-2"/>
                </div>
           </div>
           <p className="mt-4 text-light text-center">Copyright © Jester Adduru</p>
        </div>
    )
}

export default Footer;