import { Typography } from "@mui/material";
const MUITyporaphy = () => {
  return (
    <div>
      <Typography variant="h1">H1 heading</Typography>
      <Typography variant="h2">H2 heading</Typography>
      <Typography variant="h3">H3 heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        H4 heading
      </Typography>
      <Typography variant="h5">H5 heading</Typography>
      <Typography variant="h6">H6 heading</Typography>
      <Typography variant="subtitle1">subtitle1 heading</Typography>
      <Typography variant="subtitle2">subtitle2 heading</Typography>
      <Typography variant="body">body heading</Typography>
    </div>
  );
};
export default MUITyporaphy;
