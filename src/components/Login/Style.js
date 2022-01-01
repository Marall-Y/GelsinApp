import { makeStyles, alpha } from "@material-ui/core/styles";
import { primary } from "../../StyleGuide/Colors";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "100%",
    height: "70vh",
    marginTop: "15vh",
    display: "flex",
  },
  container: {
    width: "100%",
    minHeight: "100vh",
  },
}));

export default useStyles;
