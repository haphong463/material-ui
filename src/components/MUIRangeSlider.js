import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import SendIcon from "@mui/icons-material/Send";
import { Button } from "@mui/material";

function valuetext(value) {
  return `${value}°C`;
}

export default function MUIRangeSlider() {
  const [value, setValue] = React.useState([20, 37]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleSubmit = () => {
    console.log("min is ", value[0], " max is ", value[1]);
  };
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
      <p>
        {value[0]} - {value[1]}
      </p>
      <Button
        variant="contained"
        onClick={handleSubmit}
        startIcon={<SendIcon />}
      >
        Submit
      </Button>
    </Box>
  );
}
