// components/TransactionCard.tsx
import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import Movie from '../models/movie';
import StarIcon from '../assets/icons/star.svg';

type Props = {
    movie: Movie,
  };

const MovieCard: React.FC<Props> = ({ movie }) => {
  return (
    <View style={s.movieCard}>
        <View style={s.cover}>
        </View>
        <View style={s.info}>
            <Text style={s.title} numberOfLines={1} ellipsizeMode="tail">{movie.name}</Text>
            <Text style={s.author} numberOfLines={1} ellipsizeMode="tail">{movie.author}</Text>
        </View>
    </View>
  );
};

const s = StyleSheet.create({
movieCard: {        
    display: 'flex',
    width: 142,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 'auto'
    },
cover: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 70,
    alignSelf: 'stretch',
    borderRadius: 20,
    backgroundColor: '#888888',
    height: 190,
    },
title: {
    color: 'white',
    fontSize: 13,
    fontFamily: 'Montserrat',
    fontWeight: '700',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    textAlign: 'center',
    },
author: {
    color: '#888888',
    fontSize: 13,
    fontFamily: 'Montserrat',
    fontWeight: '400',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    textAlign: 'center',
    },
info: {
    display: 'flex',
    flexDirection: 'column',
    paddingVertical: 8,
    height: 'auto',
}
});

export default MovieCard;