import React from 'react'
import NavBar from '../Navbar/Navbar'
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';
import imgd from '../../static/imgd.jpeg'
import Corousel from '../../components/Corousel/Corousel'
import Closing from '../Closing/Closing';

const Review = () => {
  let tempdata = useSelector((state) => (state.data.reviews))
  const data = tempdata

  const Rating = ({ value }) => {
    const stars = Array.from({ length: 5 }, (_, index) => (
      <span key={index} style={index < value ? { color: 'gold' } : { color: 'black' }} >
        &#9733; {/* Unicode star character */}
      </span>
    ));

    return <div className="rating">{stars}</div>;
  };


  return (
    <div>
      <NavBar />
      <br />
      <Container>
        <Row  >
          <Col>
          {
            data.map((itr) => (
              <div key={itr._id} style={{ marginBottom: 10 }} >
                <div style={{ display: 'flex' }} >
                  <h2>{itr.name}</h2>
                  <div style={{ marginTop: '10px', marginLeft: '10px' }}><Rating value={itr.star} /></div>
                </div>
                <h4>{itr.message}</h4>
              </div>
            ))
          }
          </Col>
          <Col>
            <div className='imgdiv' >
              <Corousel />
            </div>
          </Col>
        </Row>
        <Row>
          <Closing/>
        </Row>
      </Container>
    </div>
  )
}

export default Review


 
