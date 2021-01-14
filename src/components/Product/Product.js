const Product = ({ title, description }) => {
  return (
    <ul>
      {" "}
      <li>{title}</li>
      <li>{description}</li>{" "}
    </ul>
  );
};

export default Product;
