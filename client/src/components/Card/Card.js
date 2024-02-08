import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample({iurl}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img height='200' width='200' variant="top" src={iurl} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;