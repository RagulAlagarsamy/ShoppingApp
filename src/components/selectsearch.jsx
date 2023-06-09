import React, { useState, useEffect } from "react";
import axios, { Axios } from "axios";
import "./search.css";

function SelectSearch({ searchContent }) {
  const [item, setItem] = useState([]);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/search?q=${searchContent}`)
      .then((res) => {
        let temp = [];
        temp = res.data.products;
        setItem(temp);
      });
  }, [searchContent]);

  const listItems = item.map((el) => (
    <li className="lists">
      <button
        className="btn"
        style={{ border: "none", width: "100%" }}
        // onClick={() => this.props.handleClick(coffee)}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-3" style={{ alignItems: "center" }}>
              <img src={el.thumbnail} width="100px" alt={el.title}></img>
            </div>
            <div
              className="col-lg-7"
              style={{
                marginTop: "25px",
                textAlign: "center",
              }}
            >
              {el.title}
            </div>
          </div>
        </div>
      </button>
    </li>
  ));

  return (
    <div
      className="shadows-lg mb-5 rounded"
      style={{
        background: "white",
        width: "31.5%",
        zIndex: 1,
        marginTop: "2px",
        position: "absolute",
        borderRadius: "3px",
        textAlign: "left",
        maxHeight: "200px",
        overflow: "auto",
      }}
    >
      {listItems.length > 0 ? (
        <ul style={{ listStyleType: "none", padding: "0" }}>{listItems}</ul>
      ) : (
        <p style={{ padding: "10px 15px" }}>No Matches Found</p>
      )}
    </div>
  );
}

export default SelectSearch;
