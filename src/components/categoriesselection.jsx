import react, { useState, useEffect } from "react";
import "font-awesome/css/font-awesome.min.css";
import axios from "axios";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select, { SelectChangeEvent } from "@material-ui/core/Select";
let temps = "";

const CategoriesSelection = ({ changeCategories }) => {
  const [age, setAge] = useState("");
  const [categoriesList, setCategoriesList] = useState([]);
  useEffect(() => {
    axios.get("https://dummyjson.com/products/categories").then((res) => {
      let temp = [];
      temp = res.data;
      setCategoriesList(temp);
    });
  }, []);

  const handleChange = (value) => {
    setAge(value);
    temps = value.toString();
  };

  return (
    <div className="container mt-3">
      <FormControl style={{ width: "30%" }}>
        <InputLabel id="demo-simple-select-label">Select Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={temps}
          label="Select Category"
        >
          {categoriesList
            ? categoriesList.map((el, i) => (
                <MenuItem
                  value={el}
                  onClick={(e) => {
                    let tempss = categoriesList[i];
                    changeCategories(tempss);
                    handleChange(categoriesList[i]);
                  }}
                >
                  {el}
                </MenuItem>
              ))
            : ""}
        </Select>
      </FormControl>
    </div>
  );
};

export default CategoriesSelection;
