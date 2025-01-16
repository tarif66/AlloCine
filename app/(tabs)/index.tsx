import { Image, StyleSheet, Platform, SafeAreaView, View, ScrollView } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MovieSlider from '@/components/Movie-slider';
import MOVIES from '@/models/mock-movie';
import MovieCard from '@/components/Movie-card';
import ReleaseSlider from '@/components/Release-slider';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 40 }}>
      <ScrollView  horizontal={false} showsHorizontalScrollIndicator={false}>
        <View style={styles.homePage}>  
          <ReleaseSlider header="Sorties de la semaine" movies={MOVIES}/>
          <MovieSlider header="Toujours à l'affiche" movies={MOVIES}/>
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
});
