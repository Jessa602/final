import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="mensClothing"
          title="Men's Clothing"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="womensClothing"
          title="Women's Clothing"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="jewelery"
          title="Jewelery"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="electronics"
          title="Electronics"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
