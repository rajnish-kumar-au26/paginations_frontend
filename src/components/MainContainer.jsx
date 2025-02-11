import { useEffect, useState } from "react";
import Pagination from "./Pagination";

const MainContainer = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products/?limit=500");
    const jsonData = await res.json();
    setProducts(jsonData.products);
  };
  console.log(products);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Pagination products={products} />
    </>
  );
};

export default MainContainer;
