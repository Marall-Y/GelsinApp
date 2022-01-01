import React, { useState } from "react";
import useStyles from "./Style";
import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Paper,
  Container,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import logo from "../../images/Logo.png";
import { primary } from "../../StyleGuide/Colors";

const Login = () => {
  const classes = useStyles();
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className={classes.Container}>
      <Container component="main" maxWidth="md">
        <Paper className={classes.paper} elevation={3}>
          <div
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <Grid
              container
              spacing={3}
              direction={"column"}
              justify={"center"}
              alignItems={"center"}
            >
              <Grid item xs={12}>
                <TextField label="Telefon"></TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField label="Şifre" type={"password"}></TextField>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={handleChange}
                      label={"Keep me logged in"}
                      inputProps={{ "aria-label": "primary checkbox" }}
                    />
                  }
                  label="Beni hatırla"
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary">
                  Giriş Yap
                </Button>
              </Grid>
            </Grid>
          </div>
          <div
            style={{
              backgroundColor: `${primary[0]}`,
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={logo} className={classes.logo} alt={"Logo"} />
          </div>
        </Paper>
      </Container>
    </div>
  );
};

export default Login;
