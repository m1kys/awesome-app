import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

export default class ItemPreview extends Component {
  render() {
    const item = this.props.item;
    const blockStyle = Object.assign({}, styles.block, { backgroundColor: item.color || styles.block.backgroundColor })

    return <TouchableOpacity style={ styles.container } onPress={ () => this.props.onPress(item.id) }>
      <View style={ blockStyle }></View>
      <Text style={ styles.item }>{ item.title }</Text>
    </TouchableOpacity>
  }
}