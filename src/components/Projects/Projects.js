import React from 'react';
import {Row, Col, Card, CardBody, Button} from 'reactstrap';
import sampImg from "../../assets/img/sampleProject.jpg";


const Projects = () => {
    const Project = () => (
        <Col md="6" className="mb-4">
            <Card className="shadow">
                <CardBody>
                    <img src={sampImg} alt="sampImg" className="img-fluid d-block mx-auto mb-4" />
                    <h4 className="text-semibold mb-3">Robofriends</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravidaa. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                    <Button outline color="info" className="d-block mx-auto btn-purple">View</Button>
                </CardBody>
            </Card>
        </Col>
    )
    return (
        <div className="mt-5">
             <div className="d-flex justify-content-center align-items-center flex-column mb-5">
                <h3 className="text-center text-semibold text-purple">My Startup Projects</h3>
                <p className="text-center w-50">
                This are some challenging projects that I made showcasing my skills of what I can do. I enjoyed creating these projects, it was tough but I learned a lot.
                </p>
            </div>
            <div className="w-75 mx-auto">
                <Row>
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                </Row>
            </div>
            
        </div>
    );
}

export default Projects;
