import React, { Component } from 'react';
import { Text, ScrollView, View } from 'react-native';
import ItemPreview from '../ItemPreview/ItemPreview';
import styles from './styles';

export default class ItemsList extends Component {
  renderEmptyItem() {
    return (
      <View>
        <Text style={ styles.title }>No data...</Text>
      </View>
    );
  }

  renderItemList() {
    return this.props.items.map(item => {
      return (
        <ItemPreview
          onPress={() => this.props.selectItem(item.id)} 
          item={ item }
          key={ item.id }
        />
      );
    });
  }

  render() {
    if (this.props.items && this.props.items.length) {
      return (
        <ScrollView>
          <View style={ styles.container }>
            { this.renderItemList() }
          </View>
        </ScrollView>
      );
    }

    return this.renderEmptyItem();
  }
};