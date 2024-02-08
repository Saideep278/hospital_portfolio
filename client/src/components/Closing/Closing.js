import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";

const Closing = () => {
  return (
    <div>
        <Container style={{color:'white'}} >
            <Row style={{backgroundColor:'#1f5156', padding:'20px'}}>
                <Col>
                    <Row><h1>Contact Us</h1></Row>
                    <Row><h6>Treatement</h6></Row>
                    <Row><h6>Paedodonlogy</h6></Row>
                    <Row><h6>Implatology</h6></Row>
                    <Row><h6>Treatement</h6></Row>
                    <Row><h6>Treatement</h6></Row>
                    <Row><h6>Treatement</h6></Row>
                    <Row><h6>Treatement</h6></Row>
                    <Row><h6>Treatement</h6></Row>
                    <Row><h6>Treatement</h6></Row>
                    <Row><h6>Treatement</h6></Row>
                    <Row><h6>Treatement</h6></Row>
                </Col>
                <Col>
                    <Row><h1>About Us</h1></Row>
                    <Row><h6>Dr. Hanusai</h6></Row>
                    <Row><h6>Dr. Hanusai</h6></Row>
                    <Row><h6>Dr. Hanusai</h6></Row>
                </Col>
                <Col>
                    <Row><h1>Review</h1></Row>
                    <Row><h6>Donate</h6></Row>
                    <Row><h6>Contribute</h6></Row>
                    <Row><h6>Comment</h6></Row>
                </Col>
                <Col>
                <Row  ><h1 >Social</h1></Row>
                    <FaFacebookSquare style={{margin:'2px'}}  />
                    <FaSquareInstagram style={{margin:'2px'}}  />
                    <FaSquareWhatsapp  style={{margin:'2px'}} />
                    
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Closing