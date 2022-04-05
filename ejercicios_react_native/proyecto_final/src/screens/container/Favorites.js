import {Text, View} from 'react-native';
import React, {Component} from 'react';
import FavoriteList from '../../sections/container/FavoriteList'

export default class Favorites extends Component {
  render() {
    return (
      <View>
      <FavoriteList />
      </View>
    );
  }
}
