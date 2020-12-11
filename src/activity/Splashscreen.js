// Import React and Component
import React, {useState, useEffect} from 'react';
import { ActivityIndicator, View, StyleSheet, Image,Text } from 'react-native';
import { AppStyles } from "../config/AppStyles";

const SplashScreen = ({navigation}) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
        navigation.replace(value === null ? 'Auth' : 'NavigationComponent')
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Image Login</Text>
      <Image
        source={require("../../assets/auth/logo.png")}
        style={{ width: "90%", resizeMode: "contain", margin: 30 }}
      />

      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: AppStyles.color.deepblue,
  },
  activityIndicator: {
    alignItems: "center",
    height: 80,
  },
  header: {
    fontSize: 20,
    color: "#ffff",
    fontWeight: "bold",
    paddingVertical: 14,
  },
});
