import React from 'react'
import Navbar from '../Navbar/Navbar'
import Closing from '../Closing/Closing'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

const About = () => {
  return (
    <div>
      <Navbar/>
      <Container>
        <Row   > 
        <div elevation={10} style={{backgroundColor:'#F8F9F9', padding:'10px', fontSize:'20px', marginTop:'20px',marginBottom:'20px'}} >
        A Paedodontist and an Implantologist are both specialized dental professionals with distinct focuses within the field. A Paedodontist specializes in providing comprehensive dental care to children, focusing on the unique needs of pediatric patients. They are skilled in managing child-specific dental issues, promoting oral health, and creating a positive dental experience for young patients.

        On the other hand, an Implantologist specializes in dental implantology, which involves the surgical placement of dental implants to replace missing teeth. They are trained to assess and restore oral function and aesthetics through the use of dental implants, providing long-term solutions for individuals with tooth loss.

        While their areas of expertise differ, both professionals play crucial roles in promoting overall dental health. Paedodontists contribute to the early establishment of good oral hygiene habits, ensuring a solid foundation for a lifetime of dental health in children. Implantologists, on the other hand, focus on restoring oral function and aesthetics in adults through advanced implant procedures. Together, they contribute to the comprehensive care and well-being of patients at different stages of life.
        </div>
        </Row>
      </Container>
      <Closing/>
    </div>
  )
}

export default About