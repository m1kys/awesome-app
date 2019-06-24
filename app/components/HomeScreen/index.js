import React, { Component } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';

import ItemsList from '../ItemsList/ItemsList';
import styles from './styles';

export default class HomeScreen extends Component {
  static navigationOptions() {
    return {
      headerTitle: <Text style={ styles.mainTitle }>Items:</Text>,
      headerStyle: styles.header,
    };
  };

  handleSelectItem = (id) => {
    this.props.navigation.navigate('Item', {
      item: this.props.items.find(item => item.id === id)
    });
  }

  renderLoadingState() {
    return (
      <View style={ styles.container }>
        <ActivityIndicator size="large" color="#5FCEF9" />
        <Text style={ styles.mainTitle }>Load basic data...</Text>
      </View>
    );
  }

  render() {
    if (this.props.showSpinner) {
      return this.renderLoadingState();
    }

    return (
      <View style={ styles.container }>
        <ItemsList items={ this.props.items } selectItem={ this.handleSelectItem } />
      </View>
    );
  }
}