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
            <View style={s.ratingPill}>
                <View style={s.ratingBlock}>
                    <StarIcon />
                    <Text style={s.ratingFont}>{movie.rating}</Text>
                </View>
            </View>
            <View style={s.week}>
                <Text style={s.weekBlock}>5e semaine</Text>
            </View>
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
ratingPill: {
    display: 'flex',
    padding: 12,
    flexDirection: 'column',
    alignItems: 'flex-end',
    alignSelf: 'stretch',
    height: 64,
},
ratingBlock: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    gap: 6,
    borderRadius: 30,
    backgroundColor: '#212121',
    flexDirection: 'row'
},
ratingFont: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'Montserrat',
    fontWeight: '700',
    wordWrap: 'break-word',
},
week: {
    display: 'flex',
    height: 100,
    padding: 12,
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: 8,
    alignSelf: 'stretch',
},
weekBlock: {
    color: '#212121',
    fontSize: 11,
    fontFamily: 'Montserrat',
    fontWeight: '700',
    wordWrap: 'break-word',
    display: 'flex',
    paddingHorizontal: 6,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    backgroundColor: 'white',
    borderRadius: 20,
    opacity: 0.8,
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