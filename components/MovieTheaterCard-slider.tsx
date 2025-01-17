import React from 'react';
import { View, Text, StyleSheet, Pressable, Image, ScrollView } from 'react-native';
import MOVIES from '@/models/mock-movie';
import Movie from '@/models/movie';
import ReleaseCard from './Release-card';
import ArrowIcon from '../assets/icons/arrow.svg';
import MovieTheaterCard from './MovieTheater-card';


type Props = {
    header: string,
  };

const MovieTheaterSlider: React.FC<Props> = ({ header  }) => {
  return (
    <View style={s.movieTheaterSlider}>
        <View style={s.header}>
            <View style={s.title}>
                <Text style={s.titleFont}>{header}</Text>
            </View>
        </View>
        <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={s.listOfMovieTheater}>
                <MovieTheaterCard title="A proximité" />
                <MovieTheaterCard title="Ajoutez à vos cinémas" />
                <MovieTheaterCard title="Opéraims" />
                <MovieTheaterCard title="UGC Ciné Cité Rosny" />
                <MovieTheaterCard title="Pathé Thillois - IMAX" />
            </View>
        </ScrollView>
    </View>
  );
};

const s = StyleSheet.create({
movieTheaterSlider: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    height: 'auto',
    gap: 8,
},
listOfMovieTheater: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 'auto',
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
}
});

export default MovieTheaterSlider;