import { useState, useCallback, useEffect } from "react";
import { connect } from "react-redux";
import { fetchQueryProducts, fetchProducts } from "../actions/fetchData";
import debounce from "lodash.debounce";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
const Header = (props) => {
  const [query, setQuery] = useState("");
  const handleChange = (value) => {
    setQuery(value);
    console.log(query, "a");
  };
  useEffect(() => {
    if (query.length !== 0) {
      console.log("hello");
      props.dispatch(fetchQueryProducts(query));
    } else {
      console.log("hello1");
      props.dispatch(fetchProducts());
    }
  }, [query]);

  const debounceChangeHandler = useCallback(debounce(handleChange, 300), []);
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>Anonime</Navbar.Brand>
        <p>Home</p>
        <input
          type="text"
          placeholder="Search Anime or Movie"
          onChange={(e) => debounceChangeHandler(e.target.value)}
        />
      </Container>
    </Navbar>
  );
};
const mapStateToProps = (state) => ({
  data: state.products.data,
  loading: state.products.loading,
  error: state.products.error
});
export default connect(mapStateToProps)(Header);
