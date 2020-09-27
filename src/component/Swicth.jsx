import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  // use "icon" instead of "thumb" in v3
  thumb: {
    borderRadius: 0,
  },
};
class SwitchLabels extends React.Component {
  state = {
    checked: false,
  };

  handleChange = (event) => {
    this.setState({ checked: event.target.checked });
    const lang = this.state.checked;
    this.props.onSelectLanguage(lang);
  };

  render() {
    return (
      <FormControlLabel
        control={
          //   <Switch
          //     classes={this.props.classes}
          //     checked={this.state.checked}
          //     onChange={this.handleChange}
          //     value="checked"
          //     color="primary"
          //   />
          <Switch
            checked={this.state.checked}
            onChange={this.handleChange}
            value="checked"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        }
        labelPlacement="start"
        label="Admin"
      />
    );
  }
}

export default withStyles(styles)(SwitchLabels);
