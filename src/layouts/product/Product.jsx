import { useEffect } from "react";
import { connect } from "react-redux";
import { toggleTab } from "../../redux/reducers/tab";
import { setInitialData } from "../../redux/reducers/product";
import PropTypes from "prop-types";
import parse from "html-react-parser";

const Description = (props) => {
  return <article className="description">{parse(props.text)}</article>;
};

const Attributes = () => {};

const Product = ({ tabIndex, product, toggleTab, setInitialData }) => {
  useEffect(() => {
    fetch("https://api-test.innoloft.com/product/6781/")
      .then((response) => response.json())
      .then((payload) => {
        const { id, name, type, picture, description } = payload;
        setInitialData({
          id,
          name,
          type,
          picture,
          description,
        });
      });
  }, []);

  return (
    <div className="product">
      <div className="product-header">
        <h1 className="name">{product.name}</h1>
        <div className="type">{product.type.name}</div>
      </div>

      <div className="product-cover">
        <img src={product.picture} alt={`${product.name} product cover`} />
      </div>

      <div className="product-content">
        <div className="tabs">
          <div className={`tab ${tabIndex === 0 && "tab-active"}`}>
            <button onClick={toggleTab}>Description</button>
          </div>
          <div className="v-divider"></div>
          <div className={`tab ${tabIndex === 1 && "tab-active"}`}>
            <button onClick={toggleTab}>Attributes</button>
          </div>
          <div className="h-indicator"></div>
        </div>

        <div className="content-area">
          {tabIndex === 0 ? (
            <Description text={product.description} />
          ) : (
            "Attributes content"
          )}
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  tabIndex: PropTypes.number.isRequired,
  product: PropTypes.object.isRequired,
};

const mapStateToProps = ({ tabReducer: { tabIndex }, productReducer }) => ({
  tabIndex,
  product: productReducer,
});

const mapDispatchToProps = {
  toggleTab,
  setInitialData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
