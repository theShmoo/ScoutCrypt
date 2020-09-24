import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import ScoutToolbar from './ScoutToolbar.jsx'
import ScoutCryptForm from './ScoutCryptForm.jsx'
import { DefaultMethod, Methods } from './ScoutMethods.jsx'
import { DefaultFormat, Formats } from './ScoutFormats.jsx'

import withRoot from './withRoot.jsx';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class App extends Component {

  state = {
    text: "",
    method: DefaultMethod,
    format: DefaultFormat,
  }

  setMethod = event => {
    this.setState({ method: Methods.find(m => m.name === event.target.value) });
  }
  setFormat = event => {
    this.setState({ format: Formats.find(f => f.name === event.target.value) });
  }
  setText = event => {
    this.setState({ text: event.target.value });
  }

  render() {
    const { classes } = this.props;
    const { text, method, format } = this.state;

    return <div className={classes.root}>
      <ScoutToolbar />
      <ScoutCryptForm
        text={text}
        method={method}
        format={format}
        formatChange={this.setFormat}
        methodChange={this.setMethod}
        textChange={this.setText}
      />
    </div>
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(App));
