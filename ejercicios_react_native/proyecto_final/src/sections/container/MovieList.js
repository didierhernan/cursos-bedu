import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {FlatList, StyleSheet, ImageBackground} from 'react-native';
import Empty from '../../components/Empty';
import Movie from '../components/movie';
import Separator from '../../components/vertical-separator';
import {useNavigation} from '@react-navigation/native';

const MovieList = props => {
  const navigation = useNavigation();
  const [movies, setMovies] = useState([]);

  React.useEffect(() => {
    fetch('/api/movies')
      .then(res => res.json())
      .then(json => setMovies(json.movies));
  }, []);

  const itemSeparator = () => <Separator />;
  const keyExtractor = item => item.id.toString();
  const renderEmpty = () => <Empty text="No hay peliculas para mostrar" />;
  const viewMovies = item => {
    navigation.navigate('Details', {
      item: item,
    });
  };
  const renderItem = ({item}) => {
    return (
      <Movie
        movie={item}
        onPress={() => viewMovies(item)}
        onLongPress={() => viewMovies(item)}
      />
    );
  };
  return (
    <ImageBackground source={require('../../../assets/background.jpg')}>
      <FlatList
        style={styles.layout}
        data={movies}
        ItemSeparatorComponent={itemSeparator}
        ListEmptyComponent={renderEmpty}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  layout: {
    marginTop: 15

  },
});

export default MovieList;
