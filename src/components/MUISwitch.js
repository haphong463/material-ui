import { Box, FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";
export const MUISwitch = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    setChecked(e.target.checked);
  };
  console.log(checked);
  return (
    <Box>
      <FormControlLabel
        label="Dark mode"
        control={
          <Switch
            checked={checked}
            onChange={handleChange}
            size="large"
            color="secondary"
          />
        }
      />
    </Box>
  );
};
