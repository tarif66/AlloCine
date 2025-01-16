import React from 'react';
import { View, Text, StyleSheet, Pressable, Image, ScrollView } from 'react-native';
import MOVIES from '@/models/mock-movie';
import Movie from '@/models/movie';
import ReleaseCard from './ReleaseCard';
import ArrowIcon from '../assets/icons/arrow.svg';


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
                <ArrowIcon />
            </View>
        </View>
        <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={s.listOfMovies}>
                {movies.map((movieProp) => (
                    <ReleaseCard key={movieProp.id} movie={movieProp}/>
                ))}
            </View>
        </ScrollView>
    </View>
  );
};

const s = StyleSheet.create({
movieSlider: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    height: 'auto',
    gap: 8,
},
listOfMovies: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
    paddingHorizontal: 16
},
header: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 0,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
},
title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
},
titleFont: {
    color: 'white',
    fontFamily: 'Montserrat',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 36,
},
arrowBlock: {
    display: 'flex',
    padding: 8,
    alignItems: 'center',
    gap: 8,
    height: 24,
    width: 24,
},

});

export default MovieSlider;