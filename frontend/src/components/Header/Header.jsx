import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
// Imgs
import Logo from "../../assets/logo2.jpg";
// Icons
import Icon, { Stack } from "@mdi/react";
import { mdiFacebookBox, mdiInstagram } from "@mdi/js";
// Styles
import styles from "../styles";
// Config
import { sections } from "../config";

class Hero extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Toolbar className={classes.toolbarMain}>
          <Icon path={mdiFacebookBox} size={1} color="grey" />
          <Icon path={mdiInstagram} size={1} color="grey" />

          <div className={classes.grow} />
          <Avatar alt="Logo" src={Logo} className={classes.toolbarTitle} />
          <div className={classes.grow} />
          {!context.state.isUserSignedIn ? (
            <Link to="/login">
              <Button
                key="logIn"
                onClick={this.login}
                variant="outlined"
                size="small"
              >
                Log in
              </Button>
            </Link>
          ) : (
            <Link to="/">
              <Button
                key="logOut"
                onClick={this.logout}
                variant="outlined"
                size="small"
              >
                Log out
              </Button>
            </Link>
          )}
        </Toolbar>
        <Toolbar variant="dense" className={classes.toolbarSecondary}>
          {sections.map(section => (
            <Typography color="inherit" noWrap key={section}>
              {section}
            </Typography>
          ))}
        </Toolbar>
      </Fragment>
    );
  }
}
Hero.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Hero);
