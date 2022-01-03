import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cartContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "5%",
  },
  cartItems: {
    flex: "0.6",
  },
  cartSummary: {
    backgroundColor: "#fff",
    height: "35vh",
    flex: 0.3,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    padding: "1rem",
    borderRadius: "10px",
    boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px",
  },
  price: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  button: {
    backgroundColor: "#62CD7D",
    color: "#fff",
    height: "25%",
    fontSize: "1rem",
  },
}));

export default useStyles;
