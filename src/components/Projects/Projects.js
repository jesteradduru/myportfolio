import React from 'react';
import {Row, Col} from 'reactstrap';

const Projects = () => {
    return (
        <div>
             <div className="d-flex justify-content-center align-items-center flex-column">
                <h3 className="text-center text-semibold text-purple">My Startup Projects</h3>
                <p className="text-center w-50">
                This are some challenging projects that I made showcasing my skills of what I can do. I enjoyed creating these projects, it was tough but I learned a lot.
                </p>
            </div>
            <Row>
                <Col md="3"></Col>
            </Row>
            
        </div>
    );
}

export default Projects;
