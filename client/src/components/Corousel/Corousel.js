import Carousel from 'react-bootstrap/Carousel';
import Imga from '../../static/Imga.jpeg'
import imgb from '../../static/imgb.jpeg'
import imgc from '../../static/imgc.jpeg'


function Corousel() {
  return (
    <Carousel  >
      <Carousel.Item>
        <img src={imgb}  alt="icon" height="400" width= '100%' />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Imga}  alt="icon" height="400" width= '100%' />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={imgc}  alt="icon" height="400" width= '100%' />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Corousel;