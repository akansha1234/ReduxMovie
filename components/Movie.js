import "./Movie.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
const Movie = ({ item }) => {
  return (
    <Col xs={12} sm={12} md={2} lg={2}>
      <Card>
        <Card.Img
          variant="top"
          src={`http://image.tmdb.org/t/p/w500/${item.poster_path}`}
        />
        <Card.Body>
          <Card.Title>Title:{item.title ? item.title : item.name}</Card.Title>
          <Card.Text>Rating:{item.vote_average}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default Movie;
