import { Container } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import axios from "../../axios-orders";
import Header from "../../components/Header/Header";
import { Box } from "@material-ui/core";
import useStyles from "./Style";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const classes = useStyles();

  useEffect(async () => {
    try {
      const resp = await axios.get("/categories");
      setData(resp.data);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  }, []);

  return (
    <div>
      <Header />
      <div className={classes.container}>
        <Box className={classes.categories}>
          {data.map((item) => (
            <Link
              to={item.title}
              style={{ textDecoration: "none", color: "#000" }}
            >
              <div className={classes.typeBox}>
                <img src={item.image} />
                <div
                  style={{
                    margin: "10px",
                    fontWeight: "bold",
                    fontSize: "1rem",
                  }}
                >
                  {item.title}
                </div>
              </div>
            </Link>
          ))}
        </Box>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
