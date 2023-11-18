import { Rating, Box } from "@mui/material";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
export const MUIRating = () => {
  const [value, setValue] = useState(3.5);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  console.log(value);
  return (
    <Box>
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        size="large"
        icon={<FavoriteIcon fontSize="inherit" color="error" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        readOnly
      />
    </Box>
  );
};
