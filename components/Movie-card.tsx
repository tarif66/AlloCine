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
            <View style={s.rating}>
                <View style={s.ratingBlock}>
                    <StarIcon />
                    <Text style={s.ratingFont}>{movie.rating}</Text>
                </View>
            </View>
            <View style={s.week}>
                <Text style={s.weekBlock}>5e semaine</Text>
            </View>
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
    display: 'flex',
    padding: 12,
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: 8,
    alignSelf: 'stretch'

},
ratingBlock: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    gap: 8,
    borderRadius: 30,
    backgroundColor: '#212121',
    flexDirection: 'row'
},
ratingFont: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'Montserrat',
    fontWeight: '700',
    wordWrap: 'break-word',
},
week: {
    display: 'flex',
    padding: 12,
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: 8,
    alignSelf: 'stretch',
},
weekBlock: {
    color: '#212121',
    fontSize: 16,
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
    width: 214,
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
    borderRadius: 20,
    backgroundColor: '#888888',
    },
info: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    alignSelf: 'stretch'
}
});

export default MovieCard;