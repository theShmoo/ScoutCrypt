import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import ScoutToolbar from './ScoutToolbar.jsx'
import ScoutCryptForm from './ScoutCryptForm.jsx'
import { DefaultMethod } from './ScoutMethods.jsx'
import { DefaultFormat } from './ScoutFormats.jsx'

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

  render() {
    const { classes } = this.props;
    const { text, method, format } = this.state;

    return <div className={classes.root}>
      <ScoutToolbar />
      <ScoutCryptForm text={text} method={method} format={format} />
    </div>
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(App));
