import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function Card(props) {
  const { title, description } = props;

  return (
    <div className="BorderStyle">
      <Container>
        <Row>
          <Col>1</Col>
          <Col>
            <h1 className="headingStyle">{title}</h1>
            <p>{description}</p>
            <p> Footer of the card</p>
            <h2>Call BKB</h2>
          </Col>
          <Col>3</Col>
        </Row>
      </Container>
    </div>
  );
}
export default Card;
