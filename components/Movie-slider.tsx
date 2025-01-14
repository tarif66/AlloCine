import React from 'react';
import { View, Text, StyleSheet, Pressable, Image, ScrollView } from 'react-native';
import MOVIES from '@/models/mock-movie';
import Movie from '@/models/movie';
import StarIcon from '../assets/icons/star.svg';
import MovieCard from './Movie-card';


type Props = {
    header: string,
    movies: Movie[],
  };

const MovieSlider: React.FC<Props> = ({ header, movies  }) => {
  return (
    <View style={s.movieSlider}>
        <View style={s.header}>
            <View style={s.title}>
                <Text style={s.titleFont}>{header}</Text>
            </View>
            <View style={s.arrowBlock}>
                <StarIcon />
            </View>
        </View>
        <ScrollView style={s.listOfMovies} horizontal={true} showsHorizontalScrollIndicator={false}>
            {movies.map((movieProp) => (
                <MovieCard movie={movieProp}/>
            ))}
        </ScrollView>
    </View>
  );
};

const s = StyleSheet.create({
movieSlider: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    alignSelf: 'stretch'
},
listOfMovies: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
},
header: {
    display: 'flex',
    paddingHorizontal: 24,
    paddingVertical: 0,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
},
title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
},
titleFont: {
    color: 'black',
    fontFamily: 'Montserrat',
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 36,
},
arrowBlock: {
    display: 'flex',
    padding: 8,
    alignItems: 'center',
    gap: 8,
},

});

export default MovieSlider;