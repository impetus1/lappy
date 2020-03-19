// SignIn Styles
import loginBg from "../../assets/hero2.jpg";

const signinStyle = theme => ({
  root: {
    flexGrow: 1,
    position: "relative",
    overflow: "hidden",
    display: "flex",
    height: "100%",
    minHeight: "100vh",
    backgroundImage: "url(" + loginBg + ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  container: {
    marginTop: "5%",
    width: "auto",
    display: "block", // Fix IE11 issue.
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(3),
    [theme.breakpoints.up(400 + theme.spacing(3*2))]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  green: {
    color: "#388e3c"
  },
  form: {
    width: "100%", // Fix IE11 issue.
    marginTop: theme.spacing()
  },
  noDeco: {
    textDecoration: "none",
    width: "100%"
  },
  submit: {
    marginTop: theme.spacing(3)
  },
  iconBack: {
    minHeight: "30px",
    width: "auto"
  },
  paper: {
    position: "relative",
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`
  },
  backBtn: {
    position: "absolute",
    left: 20,
    color: "#388e3c"
  },
  avatar: {
    margin: theme.spacing(),
    backgroundColor: theme.palette.secondary.main
  },
  heroLogo: {
    height: 200,
    width: "auto",
    borderRadius: 20
  }
});

export default signinStyle;
