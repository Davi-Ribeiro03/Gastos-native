import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";

const Login = ({ navigation }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const verificaUsuario = () => {
    if (password === "1234") {
      return navigation.navigate("Home", { user: user });
    }
    return alert("Senha incorreta! OBS: Sua senha temporariamente é 1234");
  };

  const saveUser = async ({ user, password }) => {
    console.log("hello");
    // try {
    //   await AsyncStorage.setItem("@user", JSON.stringify({ user, password }));
    //   alert("Salvo com sucesso");
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#4F5AF3", flex: 1 }}>
      <StatusBar />

      <View style={styles.container}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 20,
            marginTop: 50,
            width: 350,
          }}
        >
          <Image
            source={require("../../assets/login.png")}
            style={{ width: 150, height: 150, margin: 30 }}
          />
          <Text
            style={{
              fontSize: 45,
              fontWeight: "bold",
              marginBottom: 20,
              color: "#4F5AF3",
            }}
          >
            Login
          </Text>
          <View style={styles.loginContent}>
            <Text>Usuário</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu nome..."
              onChangeText={setUser}
            />
            <Image
              source={require("../../assets/user.png")}
              style={{ position: "absolute", bottom: 8, right: 8 }}
            />
          </View>
          <View style={styles.loginContent}>
            <Text>Senha</Text>
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              onChangeText={setPassword}
            />
            <Image
              source={require("../../assets/eye.png")}
              style={{ position: "absolute", bottom: 8, right: 8 }}
            />
          </View>
          <Text style={{ color: "red", width: 260, textAlign: "center" }}>
            A funcionalidade de cadastro ainda está em desenvolvimento, para
            acessar o aplicativo, digite a senha '1234'
          </Text>

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.buttonEntrar}
            onPress={verificaUsuario}
          >
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          <Text
            style={{
              width: 200,
              textAlign: "center",
              marginTop: 10,
              marginBottom: 20,
              opacity: 0.7,
            }}
          >
            Ainda não possui uma conta?{" "}
            <Text
              style={{ color: "#4F5AF3" }}
              onPress={() => alert("Funcionalidade em desenvolvimento")}
            >
              Cadastre-se aqui
            </Text>
          </Text>
          {/* </KeyboardAvoidingView> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "#4F5AF3",
    shadowOffset: 10,
    shadowColor: "white",
  },
  loginContent: {
    width: "400",
    position: "relative",
    margin: 15,
  },
  input: {
    width: 260,
    borderColor: "black",
    borderBottomWidth: 1,
  },
  buttonEntrar: {
    backgroundColor: "#4F5AF3",
    padding: 15,
    marginTop: 20,
    borderRadius: 10,
    width: 230,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15,
  },
});

export default Login;
