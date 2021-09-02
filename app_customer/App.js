import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerName}>Hi, Muhamad Amir 👋🏻</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.symptomsTitle}>What's your symptoms?</Text>
          <ScrollView horizontal={true} style={styles.symptoms}>
            <View style={styles.symptomItem}>
              <Text style={styles.symptomItemName}>Fever</Text>
            </View>
            <View style={styles.symptomItem}>
              <Text style={styles.symptomItemName}>Dizziness</Text>
            </View>
            <View style={styles.symptomItem}>
              <Text style={styles.symptomItemName}>Diarhea</Text>
            </View>
            <View style={styles.symptomItem}>
              <Text style={styles.symptomItemName}>Headache</Text>
            </View>
          </ScrollView>
          <View style={styles.clinicsContainer}>
            <Text style={styles.clinicsTitle}>Nearest Clinics</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 64,
  },
  headerName: {
    marginTop: 20,
    marginHorizontal: 12,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Quicksand',
  },
  content: {
    paddingHorizontal: 12,
  },
  symptomsTitle: {
    marginBottom: 12,
    color: '#6B7280',
  },
  symptoms: {
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  symptomItem: {
    backgroundColor: '#99F6E4',
    paddingHorizontal: 16,
    paddingVertical: 24,
    marginEnd: 12,
    borderRadius: 12,
    width: 120,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  symptomItemName: {
    textAlign: 'center',
    color: '#115E59',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  clinicsContainer: {
    marginTop: 12,
  },
  clinicsTitle: {
    fontSize: 24,
  },
});
