import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/fetchData";
import Movie from "./Movie";
import "./Home.css";
import Header from "./Header";
const Home = (props) => {
  //const [movies] = props.data;
  console.log(props.data, "data");
  useEffect(() => {
    props.dispatch(fetchProducts());
  }, []);
  return (
    <>
      <Header />
      <Container>
        <Row>
          {props.data.map((item) => (
            <Movie key={item.id} item={item} />
          ))}
        </Row>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => ({
  data: state.products.data,
  loading: state.products.loading,
  error: state.products.error
});
export default connect(mapStateToProps)(Home);
