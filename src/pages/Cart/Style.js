import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cartContainer: {
    display: "flex",
    justifyContent: "space-between",
    padding: "2rem",
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
    alignItems: "center",
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
    fontSize: "0.7rem",
  },
  emptyCart: {
    width: "100%",
    height: "60vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "3rem 0",
  },
}));

export default useStyles;
