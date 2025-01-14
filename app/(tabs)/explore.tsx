import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import MovieCard from '@/components/Movie-card';
import MOVIES from '@/models/mock-movie';
import MovieSlider from '@/components/Movie-slider';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


export default function TabTwoScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <MovieSlider header="Sorties de la semaine" movies={MOVIES}/>
      </SafeAreaView>
    </SafeAreaProvider>
      
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
