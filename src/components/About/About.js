import React from 'react';
import {
    Card, CardBody, Row, Col
  } from 'reactstrap';

import backend from "../../assets/img/cog.png"
import frontend from "../../assets/img/code.png"

const About = () => {
    return (
        <div className="about mt-5 pt-5 d-flex  align-items-center flex-column">
            <div className="about-background"></div>
            <div className="about-section">
                <div className="d-flex justify-content-center align-items-center flex-column text-light pt-5">
                    <h3 className="text-center text-semibold">Hi I’m Jester Adduru, nice meeting you!</h3>
                    <p className="text-center w-50">I am a self taught web developer. I started loving coding
                    since i started to print “hello world” in html.
                    I became obsess in learning and practicing 
                    web development for the past years. </p>
                </div>

                <Card className="w-75 mt-5 shadow py-5 mx-auto">
                    <CardBody>
                        <Row>
                            <Col md="6">
                                <img className="mx-auto d-block mb-4 logo" src={frontend} alt="frontendlogo" />
                                <h5 className="text-semibold text-center">Frontend Development</h5>
                                <div className="mt-5">
                                    <p className="text-purple text-center">LANGUAGES I USE:</p>
                                    <p className="text-center">HTML, CSS, JAVASCRIPT, REACT</p>
                                </div>
                                <div className="mt-5">
                                    <p className="text-purple text-center">DEVELOPMENT TOOLS:</p>
                                    <p className="text-center">VS CODE,PHOTOSHOP, ILLUSTRATOR,
                                    BOOTSTRAP</p>
                                </div>
                            </Col>
                            <Col md="6" className="border-start">
                                <img src={backend} className="mx-auto d-block mb-4 logo" alt="backendlogo" />
                                <h5 className="text-semibold text-center">Backend Development</h5>
                                <div className="mt-5">
                                    <p className="text-purple text-center">LANGUAGES I USE:</p>
                                    <p className="text-center">EXPRESS, SQL</p>
                                </div>
                                <div className="mt-5">
                                    <p className="text-purple text-center">DEVELOPMENT TOOLS:</p>
                                    <p className="text-center">NODE, VS CODE</p>
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}

export default About;
