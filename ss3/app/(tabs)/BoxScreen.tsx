import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '@/components/Header';

const boxData = [
  { id: 1, color: '#EF4444', width: 100, height: 40 },
  { id: 2, color: '#F97316', width: 80, height: 50 },
  { id: 3, color: '#22C55E', width: 120, height: 60 },
  { id: 4, color: '#3B82F6', width: 90, height: 30 },
  { id: 5, color: '#8B5CF6', width: 110, height: 55 },
];

export default function BoxScreen() {
  return (
    <View style={styles.container}>
      <Header title="Box Layout" />
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Box Layout Demo</Text>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Lần 1: Sắp xếp theo chiều dọc</Text>
        <View style={styles.verticalContainer}>
          {boxData.map((box) => (
            <View
              key={`v-${box.id}`}
              style={[
                styles.box,
                {
                  backgroundColor: box.color,
                  width: box.width,
                  height: box.height,
                },
              ]}
            />
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Lần 2: Sắp xếp theo chiều ngang</Text>
        <View style={styles.horizontalContainer}>
          {boxData.map((box) => (
            <View
              key={`h-${box.id}`}
              style={[
                styles.box,
                {
                  backgroundColor: box.color,
                  width: box.width,
                  height: box.height,
                },
              ]}
            />
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Lần 3: Sắp xếp dạng lưới</Text>
        <View style={styles.gridContainer}>
          <View style={styles.gridRow}>
            {boxData.slice(0, 3).map((box) => (
              <View
                key={`g1-${box.id}`}
                style={[
                  styles.box,
                  {
                    backgroundColor: box.color,
                    width: box.width,
                    height: box.height,
                  },
                ]}
              />
            ))}
          </View>
          <View style={styles.gridRow}>
            {boxData.slice(3, 5).map((box) => (
              <View
                key={`g2-${box.id}`}
                style={[
                  styles.box,
                  {
                    backgroundColor: box.color,
                    width: box.width,
                    height: box.height,
                  },
                ]}
              />
            ))}
          </View>
        </View>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  section: {
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#555',
    textAlign: 'center',
  },
  
  verticalContainer: {
    alignItems: 'center',
    minHeight: 300,
    justifyContent: 'center',
  },
  
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    minHeight: 200,
  },
  
  gridContainer: {
    alignItems: 'center',
    minHeight: 200,
  },
  gridRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 10,
    width: '100%',
  },
  
  box: {
    borderRadius: 8,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
