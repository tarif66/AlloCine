import { Image, StyleSheet, Platform, SafeAreaView, View, ScrollView } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MovieSlider from '@/components/Movie-slider';
import MOVIES from '@/models/mock-movie';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 40 }}>
      <ScrollView  horizontal={false} showsHorizontalScrollIndicator={false}>
        <View style={styles.homePage}>  
          <MovieSlider header="Sorties de la semaine" movies={MOVIES}/>
          <MovieSlider header="Sorties de la semaine" movies={MOVIES}/>
          <MovieSlider header="Sorties de la semaine" movies={MOVIES}/>
          <MovieSlider header="Sorties de la semaine" movies={MOVIES}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  homePage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexShrink: 0,
    gap: 16,
  },
});
