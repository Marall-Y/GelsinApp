import { makeStyles, alpha } from "@material-ui/core/styles";
import shadows from "@material-ui/core/styles/shadows";
import { primary } from "../../StyleGuide/Colors";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    minHeight: "100vh",
  },
  products: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    minHeight: "80vh",
    padding: "5%",
  },
  typeBox: {
    backgroundColor: "#fff",
    padding: "4%",
    display: "flex",
    justifyContent: "space-between",
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
  button: { marginTop: "-12px", backgroundColor: "#62CD7D", color: "#fff" },
}));

export default useStyles;
