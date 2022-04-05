import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  Text,
  Image,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import WebView from 'react-native-webview';

const makeHTML = id => {
  return `
    <style>
      .video {
        position: relative;
        padding-bottom: 56.25%;
      }
      iframe {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
      }
    </style>
    <div class="video">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  `;
};

function MovieDetails(props) {
  console.log('props..detail ', props.route.params);

  return (
    <View>
      <View style={styles.top}>
        <Text style={styles.title}>{props.route.params.item.name}</Text>
      </View>
      <View style={styles.trailerContainer}>
        <View style={styles.trailer}>
          <WebView
            source={{html: makeHTML(props.route.params.item.trailerId)}}
          />
        </View>
      </View>
      <ScrollView>
        <View style={styles.bottom}>
          <View style={styles.details}>
            <Image
              style={styles.cover}
              source={{
                uri: props.route.params.item.photo,
              }}
            />
            <Text style={styles.description}>
              {props.route.params.item.description}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  trailerContainer:{
    alignItems: 'center',
  },
  trailer: {
    width: 360,
    height: 210,
    marginBottom: 10,
  },
  cover: {
    width: 120,
    height:200,
    borderRadius:10
    },
  details: {
    flexDirection: 'row',
    marginBottom: 25,
  },
  title: {
    color: '#44546b',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign:'right'
  },
  top: {
    borderBottomWidth: 2,
    borderBottomColor: '#111111',
    padding: 10,
    backgroundColor: 'white',
  },
  bottom: {
    padding: 20,
    flex: 1,
  },
  description: {
    fontSize: 15,
    lineHeight: 22.5,
    color: '#4c4c4c',
    marginLeft: 10,
    flex: 1,
  },
});

export default MovieDetails;
