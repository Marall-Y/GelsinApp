import { makeStyles, alpha } from "@material-ui/core/styles";
import shadows from "@material-ui/core/styles/shadows";
import { primary } from "../../StyleGuide/Colors";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    minHeight: "100vh",
  },
  categories: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    minHeight: "90vh",
    padding: "5%",
  },
  typeBox: {
    backgroundColor: "#fff",
    padding: "5%",
    display: "flex",
    flexDirection: "column",
    border: "solid 1px #eee",
    borderRadius: "40px",
    margin: "10px",
    textAlign: "center",
    boxShaodw: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    "&:hover": {
      opacity: [0.9, 0.8, 0.7],
      cursor: "pointer",
      border: `1px solid ${primary[0]}`,
    },
  },
}));

export default useStyles;
