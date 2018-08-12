import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from './container';
import { Header, Image, Table, Button, Icon } from 'semantic-ui-react'

class Popup extends React.Component {
    render() {
      return (
        <div className='popup'>
          <div className='popup-inner'>
            <h1>{this.props.text}</h1>
          <button onClick={this.props.closePopup}>close me</button>
          </div>
        </div>
      );
    }
  }