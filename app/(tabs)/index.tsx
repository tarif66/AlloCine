import { Image, StyleSheet, Platform, SafeAreaView } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MovieSlider from '@/components/Movie-slider';
import MOVIES from '@/models/mock-movie';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }} headerImage={undefined} >  
          <MovieSlider header="Sorties de la semaine" movies={MOVIES}/>
    
    
    </ParallaxScrollView>


  );
}

const styles = StyleSheet.create({
});
