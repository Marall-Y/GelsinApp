import React, { useState, useEffect } from "react";
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
import { Redirect } from "react-router-dom";
import { primary } from "../../StyleGuide/Colors";
import axios from "../../axios-orders";
import history from "../../history";

const Login = () => {
  const classes = useStyles();
  const [checked, setChecked] = useState(true);
  const [data, setData] = useState([]);
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const [user, setUser] = useState("");

  useEffect(async () => {
    try {
      const resp = await axios.get("/users");
      setData(resp.data);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  }, []);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const loginHandler = () => {
    setPhone("");
    setPass("");
    data.map((item) => {
      if (item.phone === phone) {
        if (item.password == pass) {
          setUser(item);
          window.location.href = "/";
        } else {
          return item;
        }
      } else {
        return item;
      }
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const phoneHandler = (event) => {
    setPhone(event.target.value);
  };

  const passHandler = (event) => {
    setPass(event.target.value);
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
                <TextField
                  label="Telefon"
                  value={phone}
                  onChange={phoneHandler}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Şifre"
                  type={"password"}
                  value={pass}
                  onChange={passHandler}
                />
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
                <Button
                  variant="contained"
                  color="primary"
                  onClick={loginHandler}
                >
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
