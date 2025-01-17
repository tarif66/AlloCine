// components/TransactionCard.tsx
import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import Movie from '../models/movie';

type Props = {
    title: string,
  };

const ReleaseCard: React.FC<Props> = ({ title }) => {
  return (
    <View style={s.movieTheaterCard}>
        <View style={s.cover}>
        </View>
        <View style={s.info}>
            <Text style={s.title} numberOfLines={2} ellipsizeMode="tail">{title}</Text>
        </View>
    </View>
  );
};

const s = StyleSheet.create({
movieTheaterCard: {        
    display: 'flex',
    width: 96,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
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
    height: 70,
    },
title: {
    color: 'white',
    fontSize: 13,
    fontFamily: 'Montserrat',
    fontWeight: '700',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    justifyContent: 'flex-start',

    },
info: {
    flexDirection: 'column',
    paddingVertical: 8,
    height: 50,
    width: 'auto',
}
});

export default ReleaseCard;