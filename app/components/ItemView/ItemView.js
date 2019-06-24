import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import styles from './styles';

export default class ItemScreen extends Component {
  renderError() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sorry, something went wrong...</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.pressBackHandler()}
        />
      </View>
    );
  }

  render() {
    const item = this.props.item;
    if (!item) {
      return this.renderError();
    }
  
    const itemStyle = Object.assign({}, styles.block, { backgroundColor: item.color || styles.block.backgroundColor });
    return (
      <View style={styles.container}>
        <View style={itemStyle}></View>
        <Text style={styles.title}>{ item.title || 'Unknown item' }</Text>
        <Text style={styles.price}>{ `Price: ${item.price || 'Unknown item'}$` }</Text>
        <View style={ styles.button }>
          <Button
            title="Go to Home"
            onPress={() => this.props.pressBackHandler()}
          />
        </View>
      </View>
    );
  }
}