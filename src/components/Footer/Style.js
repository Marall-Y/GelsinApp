import { makeStyles, alpha } from "@material-ui/core/styles";
import { primary } from "../../StyleGuide/Colors";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: `${primary[0]}`,
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    padding: "0.8rem",
  },
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    borderBottom: "0.7px solid #eee",
    padding: "1rem",
  },
  phone: {
    margin: "0 1rem",
    padding: "1rem",
  },
  heading: {
    fontWeight: "bolder",
    fontSize: "0.9rem",
    marginBottom: "1rem",
  },
  category: {
    fontSize: "0.8rem",
    marginBottom: "0.4rem",
    cursor: "pointer",
  },
  footerImage: {
    width: "400px",
    height: "250px",
    cursor: "pointer",
  },
}));

export default useStyles;
