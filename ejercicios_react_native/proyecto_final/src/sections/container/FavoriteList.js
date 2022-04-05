import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {FlatList, StyleSheet, ImageBackground} from 'react-native';
import Empty from '../../components/Empty';
import Movie from '../components/movie';
import Separator from '../../components/vertical-separator';
import {useNavigation} from '@react-navigation/native';

const FavoriteList = props => {
  const navigation = useNavigation();
  const [favorites, setFavorites] = useState([]);

  React.useEffect(() => {
    fetch('/api/favorites')
      .then(res => res.json())
      .then(json => setFavorites(json.favorites));
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
    <ImageBackground source={require('../../../assets/background-favorites.jpg')}>
      <FlatList
        style={styles.layout}
        data={favorites}
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
    marginTop: 15,
    height:800

  },
});

export default FavoriteList;
