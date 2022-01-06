import React from "react";
import { Box, Container, Typography } from "@material-ui/core";
import footer from "../../images/footer.png";
import useStyle from "./Style";

const Footer = () => {
  const classes = useStyle();

  return (
    <Container className={classes.container}>
      <Box className={classes.footer}>
        <Box>
          <div className={classes.heading}>Kategorilar</div>
          <div className={classes.category}>Atıştırmalık</div>
          <div className={classes.category}>Su</div>
          <div className={classes.category}>Dondurma </div>
          <div className={classes.category}>Sebze & Meyve </div>
          <div className={classes.category}>Yiyecek </div>
          <div className={classes.category}>Içecek </div>
          <div className={classes.category}>Fırından </div>
          <div className={classes.category}>Çay ve Kahve </div>
        </Box>

        <Box>
          <a href="https://www.gelsinapp.com/">
            <img
              src={footer}
              className={classes.footerImage}
              alt={"application"}
            />
          </a>
        </Box>
      </Box>
      <Box className={classes.phone}>
        <span style={{ fontWeight: "bolder" }}>Bizi Arayın:</span> 0 (850) 480
        88 55
      </Box>
    </Container>
  );
};

export default Footer;
