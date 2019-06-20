import React, { Component } from 'react';
import { Text, View, Button, ActivityIndicator, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import ItemsList from '../ItemsList/ItemsList';
import styles from './styles';

class HomeScreen extends Component {
  static navigationOptions() {
    return {
      headerTitle: <Text style={ styles.mainTitle }>Items:</Text>,
      headerStyle: styles.header,
    };
  };

  onPressItemHandler(id) {
    this.props.navigation.navigate('Item', {
      item: this.props.items.find(item => item.id === id)
    });
  }

  render() {
    if (this.props.showSpinner) {
      return <View style={ styles.container }>
        <ActivityIndicator size="large" color="#5FCEF9" />
        <Text style={ styles.mainTitle }>Load basic data...</Text>
      </View>
    }

    return (
      <View style={ styles.container }>
        <ItemsList items={ this.props.items } onPressHandler={ (id) => this.onPressItemHandler(id) } />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.test.items,
    showSpinner: state.test.isFetching
  }
}

export default connect(mapStateToProps)(HomeScreen);