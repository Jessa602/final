import "./gender.css";
import Input from "../../components/Input";

const Gender = ({ handleChange }) => {
  return (
    <>
      <div>
        <h2 className="sidebar-title gender-title">Gender</h2>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test1" />
          <span className="checkmark all"></span>
          All
        </label>

        <Input
          handleChange={handleChange}
          value="mens"
          title="Men's"
          name="test1"
          gender="mens"
        />

        <label className="sidebar-label-container">
          <input
            onChange={handleChange}
            type="radio"
            value="womens"
            name="test1"
          />
          <span
            className="checkmark"
            style={{ background: "white", border: "2px solid black" }}
          ></span>
          Women&rsquo;s
        </label>
      </div>
    </>
  );
};

export default Gender;
