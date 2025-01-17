import { Image, StyleSheet, Platform, SafeAreaView, View, ScrollView } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import MOVIES from '@/models/mock-movie';
import MovieSlider from '@/components/Movie-slider';
import ReleaseSlider from '@/components/Release-slider';
import MovieTheaterSlider from '@/components/MovieTheaterCard-slider';
import MovieTheaterCard from '@/components/MovieTheater-card';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 40 }}>
      <ScrollView  horizontal={false} showsHorizontalScrollIndicator={false}>
        <View style={styles.homePage}>  
          <MovieTheaterSlider header="Salles de cinéma"/>          
          <ReleaseSlider header="Sorties de la semaine" movies={MOVIES}/>
          <MovieSlider header="Toujours à l'affiche" movies={MOVIES}/>
          <ReleaseSlider header="Les indés au cinéma" movies={MOVIES}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  homePage: {
    gap: 16,
    height: 'auto',
  },
  containerTest: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 'auto',
    gap: 16,
    paddingHorizontal: 16,
  },
});
