import React from "react";
import { productsData } from "../../data-Mochup/Products-Mockup";
import Product from "../../components/Product/Product";

class Products extends React.Component {
  render() {
    return (
      <div>
        {productsData.map(({ id, title, description }) => {
          return <Product key={id} title={title} description={description} />;
        })}
      </div>
    );
  }
}

export default Products;
