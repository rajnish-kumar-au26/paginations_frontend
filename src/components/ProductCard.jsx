const ProductCard = ({ imgage, title }) => {
  return (
    <>
      <div className="main-card">
        <div>
          <img className="image" src={imgage} alt="product image" />
        </div>
        <div className="title">
          <p>{title}</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
