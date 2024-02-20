import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo ao CDG!</Text>
      <Image style={styles.img} source={require("../../assets/imgMoney.png")} />
      <Text style={styles.descricao}>
        Aqui você pode controlar todos os gasto que você tem ao deccorrer do mês
      </Text>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.buttonContinuar}
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 20,
    color: "#4F5AF3",
  },
  img: {
    margin: 20,
  },
  descricao: {
    width: 180,
    opacity: 0.4,
  },
  buttonContinuar: {
    backgroundColor: "#4F5AF3",
    padding: 20,
    marginTop: 50,
    borderRadius: 10,
    width: 250,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
});

export default Welcome;
