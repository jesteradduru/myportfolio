import React from 'react';
import {Container, Card, CardBody, Form, FormGroup, Input, Button} from 'reactstrap';
import avatar from "../../assets/img/avatar.png";

const ContactForm = () => {
  return (
    <Container>
      <Card className="shadow">
        <CardBody>
          <Container className="w-50 mx-auto">
          <img src={avatar} className="img-fluid mx-auto d-block" alt="avatar" style={{width: '35%'}} />
          <h3 className="text-semibold text-center text-purple">Hi! How may i help you?</h3>
          <Form>
            <FormGroup>
              <Input type="text" placeholder="Name" />
            </FormGroup>
            <FormGroup className="mt-3">
              <Input type="text" placeholder="Email" />
            </FormGroup>
            <FormGroup className="mt-3">
              <Input type="textarea" placeholder="Message" rows="8" />
            </FormGroup>

            <Button className="bg-purple mt-4 px-4 mx-auto d-block">Send</Button>
          </Form>
          </Container>
        </CardBody>
      </Card>
    </Container>
  );
}

export default ContactForm;