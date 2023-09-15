import { Checkbox, FormControlLabel, Grid } from "@mui/material";

const Terms = () => {
  return (
    <div>
      {" "}
      <Grid item xs={12}>
        <FormControlLabel
          required
          control={<Checkbox name="agreeToTerms" />}
          label={"I agree to the Terms and Conditions"}
        />
      </Grid>
    </div>
  );
};
export default Terms;
