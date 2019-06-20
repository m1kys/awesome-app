import React, { Component } from 'react';
import { Text, ScrollView, View } from 'react-native';
import ItemPreview from '../ItemPreview/ItemPreview';
import styles from './styles';

export default class ItemsList extends Component {
  render() {
    return this.props.items && this.props.items.length
      ? <ScrollView>
          <View style={ styles.container }>
            { this.props.items.map(item => {
                return <ItemPreview
                  onPress={() => this.props.onPressHandler(item.id)} 
                  item={item }
                  key={ item.id }
                />;
              }) }
          </View>
      </ScrollView>
      : <View>
        <Text style={ styles.title }>No data...</Text>
      </View>
  }
};