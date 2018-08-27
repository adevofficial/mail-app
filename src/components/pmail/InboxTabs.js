import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  tabsRoot: {
    borderBottom: "1px solid #e8e8e8"
  },
  tabsIndicator: {
    backgroundColor: "#1890ff"
  },
  tabRoot: {
    textTransform: "initial",
    minWidth: "13rem",
    fontWeight: theme.typography.fontWeightRegular,
    paddingRight: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:hover": {
      color: "#40a9ff",
      opacity: 1
    },
    "&$tabSelected": {
      color: "#1890ff",
      fontWeight: theme.typography.fontWeightMedium
    },
    "&:focus": {
      color: "#40a9ff"
    }
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  label: { fontWeight: 500 },
  labelIcon: { minHeight: "48px" },
  labelContainer: { paddingLeft: "4px" },

  tabSelected: {},
  typography: {
    padding: theme.spacing.unit * 3
  }
});

class InboxTabs extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    const TabClasses = {
      root: classes.tabRoot,
      selected: classes.tabSelected,
      wrapper: classes.wrapper,
      label: classes.label,
      labelContainer: classes.labelContainer,
      labelIcon: classes.labelIcon
    };

    return (
      <div className={classes.root}>
        <Tabs
          value={value}
          onChange={this.handleChange}
          classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
        >
          <Tab
            // disableRipple
            classes={TabClasses}
            icon={<Icon>inbox</Icon>}
            label="Primary"
          />
          <Tab
            // disableRipple
            icon={<Icon>people</Icon>}
            classes={TabClasses}
            label="Social"
          />
        </Tabs>
        <Typography className={classes.typography}>
          Ant Design UI powered by Material-UI
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(InboxTabs);
