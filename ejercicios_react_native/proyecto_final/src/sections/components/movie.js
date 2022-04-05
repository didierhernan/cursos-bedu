import React from 'react';
import 'react-native-gesture-handler';
import {View} from 'react-native';
import ImagedCardView from 'react-native-imaged-card-view';

const backgrounCardColor = ['#393737', '#A63A3A', '#A6753A', '#A6A43A', '#3A64A6', '#3AA66C'];

function Movie(props) {
  return (
    <View>
        <ImagedCardView
          title={props.movie.name}
          subtitle={props.movie.rate}        
          stars={5}
          ratings={props.movie.rating}
          reviews={props.movie.votes}

          leftSideTitle="Año"
          leftSideValue={props.movie.year}

          rightSideTitle="Duración"
          rightSideValue={props.movie.duration}

          backgroundColor={backgrounCardColor[parseInt(props.movie.rating)]}
          source={{
            uri: props.movie.photo,
          }}

          onPress = {props.onPress}

        />
    </View>
  );
}
export default Movie;
