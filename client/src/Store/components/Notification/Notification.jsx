import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const styles = theme => ({
  close: {
    padding: theme.spacing(.5)
  }
});

class Notification extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Snackbar
          key={this.props.msg.key}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          open={this.props.open}
          autoHideDuration={6000}
          onClose={this.props.handleClose}
          onExited={this.props.handleExited}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          message={
            <span id="message-id">
              {this.props.msg.c === "a"
                ? "Added to cart: "
                : "Removed from cart: "}
              {this.props.msg.message}
            </span>
          }
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.props.handleClose}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </div>
    );
  }
}

Notification.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Notification);
