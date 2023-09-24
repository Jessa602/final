import { useState, useEffect } from "react";
import { getProducts } from "../helper";
import Card from "./Card";
import DetailCard from "./DetailCard";

export default function AllProducts() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [selectedProduct, setSelectedProduct] = useState({});
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const results = await getProducts();
        setProducts(results);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <>
      <section className="card-container">
        {products.map((product, index) => (
          <Card
            key={index}
            product={product}
            productData={product}
            setSelectedProductId={setSelectedProductId}
          />
        ))}
      </section>
    </>
  );
}
