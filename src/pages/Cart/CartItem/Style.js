import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cartItem: {
    backgroundColor: "#fff",
    marginBottom: "1rem",
    display: "flex",
    justifyContent: "space-around",
    borderRadius: "0.5rem",
    boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px",
    padding: "1rem",
  },
  cartImage: {
    objectFit: "contain",
    width: "150px",
    height: "150px",
    borderRadius: "0.5rem 0 0 0.5rem",
    cursor: "pointer",
  },
  cartDescription: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderLeft: "1px solid #e8e8e8",
    padding: "1rem",
  },
  lastDescription: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontWeight: "bold",
  },
  cartQty: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  input: {
    width: "20%",
    padding: "0.2rem",
    margin: "0.4rem",
    borderRadius: "0.5rem",
  },
}));

export default useStyles;
