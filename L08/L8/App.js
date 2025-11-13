import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Boat from './Boat';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>⛵ GetABoat - For Sale</Text>
        <Text style={styles.subtitle}>Discover timeless elegance on water</Text>

        <View style={styles.divider} />

        <View style={styles.card}>
          <Boat
            name="Sea Ray 500 Sundancer"
            description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
            icon_name="sailboat"
            icon_color="#6A5ACD"
            picture={require('./img/sea_ray.jpg')}
          />
        </View>

        <View style={styles.card}>
          <Boat
            name="Four Winns Horizon 180"
            description="A sporty look and refined details truly set the Horizon 180 above all others."
            icon_name="sailboat"
            icon_color="#6A5ACD"
            picture={require('./img/four_winns.jpg')}
          />
        </View>

        <View style={styles.card}>
          <Boat
            name="Flipper 640 ST"
            description="A modern take on the classic, traditional hardtop and perfect for a family picnic."
            icon_name="sailboat"
            icon_color="#6A5ACD"
            picture={require('./img/flipper.jpg')}
          />
        </View>

        <View style={styles.card}>
          <Boat
            name="Princess V48"
            description="An open design with a full-length cockpit and sunroof, or an enclosed deck saloon with climate control — your choice of luxury."
            icon_name="sailboat"
            icon_color="#6A5ACD"
            picture={require('./img/princess.jpg')}
          />
        </View>

        <View style={styles.card}>
          <Boat
            name="Bayliner 175 Bowrider"
            description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."
            icon_name="sailboat"
            icon_color="#6A5ACD"
            picture={require('./img/bayliner.jpg')}
          />
        </View>

        <View style={styles.card}>
          <Boat
            name="Fairline Targa 47"
            description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
            icon_name="sailboat"
            icon_color="#6A5ACD"
            picture={require('./img/fairline.jpg')}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6FB', // soft background
    alignItems: 'center', // center everything horizontally
    justifyContent: 'center',
  },
  scrollContainer: {
    paddingVertical: 30, // adds padding on top and bottom
    alignItems: 'center', // centers the cards
    width: '100%', // make sure the scrollable content uses full width
  },
  title: {
    fontSize: 30,
    fontWeight: '800', // makes the text bold
    color: '#2E2E2E',
    textAlign: 'center',
    letterSpacing: 1.2, // adds a small space b/w each letter
  },
  subtitle: {
    fontSize: 15, // controls how big the text appears
    color: '#555', // sets text colour
    textAlign: 'center',
    marginTop: 4, // adds space above the subtitle
    marginBottom: 12, // adds space below the subtitle
    fontStyle: 'italic',
  },
  divider: {
    height: 2, // sets thickness of the divider
    backgroundColor: '#A084E8', // elegant purple divider
    marginVertical: 15, // sep the divider from the content above
    width: '60%',
    borderRadius: 10, // round the edges of the divider
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18, // round the corners of the card
    padding: 12, // adds spaces inside the card on all sides
    marginBottom: 18, // adds space below each card
    borderWidth: 2, // make the  card thicker
    borderColor: '#A084E8', // soft royal purple border
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 6,
    width: '90%', // ensures cards are centered and same width
  },
});







