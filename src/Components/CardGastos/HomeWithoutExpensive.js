import {
  View,
  Text,
  Pressable,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import UseStorageReceitas from "../../hooks/UseStorage/UseStorageReceitas";

const HomeWithoutExpensive = ({
  loggedInUser,
  setModalVisibleOut,
  setModalVisibleIn,
  valorTotal,
  setValorTotal,
  valorDisponivel,
  setValorDisponivel,
  setModalVisibleHelp,
}) => {
  const { saveItem } = UseStorageReceitas();

  return (
    <>
      <View style={styles.title}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.text}>Hello {loggedInUser}!</Text>
          <Text
            onPress={() => setModalVisibleHelp(true)}
            style={{
              fontSize: 18,
              color: "#4F5AF3",
              backgroundColor: "#e6e6e6",
              padding: 5,
              borderRadius: 8,
              width: 80,
              textAlign: "center",
            }}
          >
            Help
          </Text>
        </View>
        <View style={styles.saldo}>
          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "white" }}>
              Disponível
            </Text>
            <Text
              style={styles.text}
              onLongPress={() => {
                setValorDisponivel(0);
                saveItem("@valorDisponivel", 0);
              }}
            >
              R$ {String(valorDisponivel)},00{" "}
            </Text>
          </View>
          <Pressable onPress={() => setModalVisibleIn(true)}>
            <Image source={require("../../assets/add.png")} />
          </Pressable>
        </View>
      </View>

      <View style={styles.totalRecebido}>
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
          Total Recebido
        </Text>
        <Text
          style={styles.text}
          onLongPress={() => {
            setValorTotal(0);
            saveItem("@valorTotal", 0);
          }}
        >
          R$ {String(valorTotal)},00
        </Text>
      </View>

      <Image
        source={require("../../assets/noExpenses.png")}
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          width: 340,
          marginTop: 10,
        }}
      />
      <Text
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 5,
          opacity: 0.6,
        }}
      >
        Você ainda não possui gastos!
      </Text>

      <TouchableOpacity activeOpacity={0.8} style={styles.buttonAdd}>
        <Text
          style={styles.buttonText}
          onPress={() => setModalVisibleOut(true)}
        >
          Adicionar um novo gasto
        </Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    backgroundColor: "#4F5AF3",
    height: 180,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
    padding: 20,
  },
  saldo: {
    flexDirection: "row",
    marginTop: 40,
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  totalRecebido: {
    width: 330,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 5,
    padding: 15,
    backgroundColor: "rgba(0,0,0,0.9)",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonAdd: {
    backgroundColor: "#4F5AF3",
    padding: 15,
    marginTop: 25,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 10,
    width: 280,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
});

export default HomeWithoutExpensive;
