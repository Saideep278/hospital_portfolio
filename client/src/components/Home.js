import React from 'react'
import Navbar from './Navbar/Navbar'
import Corousel from './Corousel/Corousel'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Imga from '../static/Imga.jpeg'
import imgb from '../static/imgb.jpeg'
import imgc from '../static/imgc.jpeg'
import Card from '../components/Card/Card'
import Closing from './Closing/Closing';

const Home = () => {
  const history = useNavigate()

  
  const openReview = ()=>{
    history('/wreview')
  }

  
  
  
  return (
    <>
      <Navbar />
      
      <br></br>
      
      <Container>

        
        <Row style={{ display:'flex',alignItems:'center',justifyContent:'center' }} > 
         
         <div style={{color:'#1f5156', textAlign:'center' , fontSize:40 ,fontWeight:'bold' }} ><b><h1 style={{fontFamily:'cursive'}} >Hanusai Super Speciality Dental Hospital</h1></b></div> 
         <div style={{color:'#1f5156', textAlign:'center' , fontSize:25}} >Paedodontist & Implatolosit</div>
          
        </Row>
        <br/>
        <Row  >
          <Corousel />
        </Row>

        <Row style={{ display:'flex',alignItems:'start',justifyContent:'center' , padding:'10px'  }} >
          <div style={{textAlign:'center', fontSize:25}} > Drop a Review about our community and services</div>
          <Button style={{width:220}} variant="info" onClick={openReview} >Write a Review</Button>
        </Row>

        <Row>
          <Col> <Card iurl={imgb} /> </Col>
          <Col> <Card iurl={imgc} /> </Col>
          <Col> <Card iurl={Imga} /> </Col>
          <Col> <Card iurl={imgb} /> </Col>
        </Row>
        <br/>
        <Row style={{margin:5}} >
       
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.789213097372!2d79.2075977!3d18.896430100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcd49358c33da63%3A0xaaadcc3efe4e3351!2sHANUSAI%20Dental%20Hospital!5e0!3m2!1sen!2sin!4v1707214962473!5m2!1sen!2sin" width="600" height="450"   loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </Row>


         <Row>
          <Closing/>
         </Row>
        
       
        
      </Container>
    </>
  )
}

export default Home


//        

