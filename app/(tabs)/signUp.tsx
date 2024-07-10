import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';

export default function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text>Details</Text>
        <TouchableOpacity
        style={styles.button}
        onPress={() => {}}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white'
  },
  button: {
    backgroundColor: '#000080',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
   buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
});
