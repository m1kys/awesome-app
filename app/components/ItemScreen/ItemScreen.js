import React, { Component } from 'react';
import ItemView from '../ItemView/ItemView';

export default class ItemScreen extends Component {
  static navigationOptions = {
    header: null
  };

  handlerOnPressBack = () => {
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <ItemView 
        item={ this.props.navigation.getParam('item', null) } 
        pressBackHandler={ this.handlerOnPressBack }
      />
    );
  }
}