// components/TransactionCard.tsx
import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import MOVIES from '../models/mock-movie';
import Movie from '../models/movie';

type Props = {
    movie: Movie,
  };

const MovieCard: React.FC<Props> = ({ movie }) => {
  return (
    <View style={s.movieCard}>
        <View style={s.cover}>
            <Text style={s.rating}>{movie.rating}</Text>
            <Text style={s.week}>{movie.author}</Text>
        </View>
        <View>
            <Text style={s.title}>{movie.name}</Text>
            <Text style={s.author}>{movie.author}</Text>
        </View>
    </View>
  );
};

const s = StyleSheet.create({
rating: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'Montserrat',
    fontWeight: '700',
    wordWrap: 'break-word'
    },
week: {
    color: '#212121',
    fontSize: 16,
    fontFamily: 'Montserrat',
    fontWeight: '700',
    wordWrap: 'break-word',
    },
title: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Montserrat',
    fontWeight: '700',
    wordWrap: 'break-word'
    },
author: {
    color: '#888888',
    fontSize: 18,
    fontFamily: 'Montserrat',
    fontWeight: '400',
    wordWrap: 'break-word'
    },
movieCard: {        
    display: 'flex',
    height: 340,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
    },
cover: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 163,
    alignSelf: 'stretch',
    },
info: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    alignSelf: 'stretch'
}
});

export default MovieCard;