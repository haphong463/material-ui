import { Stack, Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
const skill = {
  id: 0,
  label: "",
};
const skills = ["HTML", "CSS", "JavaScript", "PHP", "Ruby"];
const skillOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));
export const MUIAutocomplete = () => {
  const [value, setValue] = useState([]);
  const [skill, setSkill] = useState(null);
  console.log(value);
  return (
    <Stack spacing={2} width="500px">
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={value}
        onChange={(e, newValue) => setValue(newValue)}
        multiple
        disableCloseOnSelect
        fullWidth
      />
      <Autocomplete
        options={skillOptions}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={skill}
        onChange={(e, newValue) => setSkill(newValue)}
      />
    </Stack>
  );
};
