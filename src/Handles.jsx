import { useState } from "react";
import Nav from "./Nav/Nav";
import AllProducts from "./products/Products";
import Recommended from "./recommended/Recommended";
import Sidebar from "./SideBar/SideBar";
import Card from "./products/Card";
import "./index.css";

function App(products, product, Products, Product) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({
          category,
          mensClothing,
          womensClothing,
          jewelery,
          electronics,
          title,
        }) =>
          mensClothing === selected ||
          womensClothing === selected ||
          jewelery === selected ||
          electronics === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ title, price, category, description, image, id }) => (
        <Card
          key={id}
          image={image}
          title={title}
          price={price}
          category={category}
          description={description}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}

export default App;
