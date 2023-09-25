import Button from "../components/Buttons";
import "./recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="mens" title="Men's" />
          <Button onClickHandler={handleClick} value="womens" title="Women's" />
          <Button
            onClickHandler={handleClick}
            value="jewelery"
            title="Jewelery"
          />
          <Button
            onClickHandler={handleClick}
            value="electronics"
            title="Electronics"
          />
        </div>
      </div>
    </>
  );
};

export default Recommended;
