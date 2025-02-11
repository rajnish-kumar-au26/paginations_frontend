import { useState } from "react";
import ProductCard from "./ProductCard";

const Pagination = ({ products }) => {
  const [pageNo, setPageNo] = useState(1);
  const showProduct = 12;
  const totalPage = Math.ceil(products.length / showProduct);
  const start = showProduct * pageNo;
  const end = start + showProduct;

  const nextClick = () => {
    if (pageNo < totalPage) {
      setPageNo((prev) => prev + 1);
    }
  };

  const prevClick = () => {
    if (pageNo <= totalPage) {
      setPageNo((prev) => prev - 1);
    }
  };

  const handleClick = (i) => {
    setPageNo(i);
  };

  return (
    <>
      <div className="pagination">
        {products.slice(start, end).map((data) => (
          <ProductCard
            key={data.id}
            imgage={data.thumbnail}
            title={data.title}
          />
        ))}
        <div>
          <button
            disabled={pageNo == 1}
            onClick={() => prevClick()}
            className="btn"
          >
            ◀️
          </button>
          {Array.from({ length: totalPage }).map((_, i) => (
            <button
              className={`btn ${pageNo == i + 1 ? "active" : ""}`}
              key={i}
              onClick={() => handleClick(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            disabled={pageNo == totalPage}
            onClick={() => nextClick()}
            className="btn"
          >
            ▶️
          </button>
        </div>
      </div>
    </>
  );
};

export default Pagination;
