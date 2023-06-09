import react, { useState } from "react";
import SelectSearch from "./selectsearch";
import "font-awesome/css/font-awesome.min.css";

const TitleBar = () => {
  const [textFocus, setTextFocus] = useState(false);
  const [searchContent, setSearchContent] = useState("");
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-lg-2"
          style={{ marginTop: "25px", fontWeight: "bold", fontSize: "22px" }}
        >
          <span style={{ color: "red" }}>M</span>oBoo{" "}
          <span style={{ color: "red" }}>M</span>
        </div>
        <div className="col-lg-6" style={{ marginTop: "20px" }}>
          <form
            className="container"
            style={{
              maxWidth: "600px",
              marginLeft: "5px",
              padding: "0",
              backgroundColor: "white",
            }}
            onBlur={() => setTextFocus(false)}
          >
            <div
              className="input-group"
              style={{ width: "100%", display: "inline-flex" }}
            >
              <input
                type="text"
                className="form-control"
                placeholder="What do you want to buy today"
                aria-label="Username"
                aria-describedby="basic-addon1"
                style={{ borderRadius: "8px" }}
                onClick={() => setTextFocus(true)}
                onChange={(e) => {
                  setSearchContent(e.target.value);
                }}
                value={searchContent}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="grey"
                className="bi bi-search"
                viewBox="0 0 16 16"
                style={{
                  position: "absolute",
                  left: "95%",
                  top: "10px",
                }}
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>
            {textFocus ? <SelectSearch searchContent={searchContent} /> : ""}
          </form>
        </div>
        <div className="col-lg-4" style={{ marginTop: "25px", color: "gray" }}>
          <span style={{ paddingRight: "40px" }}>Store</span>
          <span style={{ paddingRight: "40px" }}>Account</span>
          <span style={{ paddingRight: "40px" }}>Wish List</span>
          <span
            style={{ paddingRight: "40px", color: "black", fontWeight: "bold" }}
          >
            Basket <i className="fa fa-shopping-basket" aria-hidden="true"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TitleBar;
