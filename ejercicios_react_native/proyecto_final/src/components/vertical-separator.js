import React from 'react';
import {View, StyleSheet} from 'react-native';

function VerticalSeparator(props) {
  return (
    <View
      style={[
        styles.separator,
        {
          borderTopColor: props.color ? props.color : '#eaeaea',
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  separator: {
   margin:8
  },
});

export default VerticalSeparator;
