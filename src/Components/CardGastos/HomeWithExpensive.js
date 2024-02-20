import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import CardGastos from "./CardGastos";
import UseStorageReceitas from "../../hooks/UseStorage/UseStorageReceitas";

const HomeWithExpensive = ({
  loggedInUser,
  gastos,
  setGastos,
  valorTotal,
  setValorTotal,
  valorDisponivel,
  setValorDisponivel,
  setModalVisibleOut,
  setModalVisibleIn,
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

      <View style={styles.add}>
        <Pressable
          style={styles.cardAdd}
          onPress={() => setModalVisibleOut(true)}
        >
          <Image source={require("../../assets/add.png")} />
          <Text>Adicionar Gastos</Text>
        </Pressable>
        <Pressable
          style={styles.cardAdd}
          onPress={() => setModalVisibleIn(true)}
        >
          <Image source={require("../../assets/add.png")} />
          <Text>Adicionar Entrada</Text>
        </Pressable>
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text style={{ fontSize: 40, fontWeight: "bold" }}>Gastos</Text>

        <ScrollView
          style={{
            height: 300,
            backgroundColor: "#e6e6e6",
            borderRadius: 10,
            padding: 10,
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={true}
        >
          <FlatList
            data={gastos}
            renderItem={({ item }) => (
              <CardGastos
                {...item}
                gastos={gastos}
                setGastos={setGastos}
                setValorDisponivel={setValorDisponivel}
              />
            )}
            keyExtractor={(item) => String(item.id)}
          />
        </ScrollView>
      </View>
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
  add: {
    flexDirection: "row",
    marginTop: 15,
    justifyContent: "center",
    gap: 30,
  },
  cardAdd: {
    borderColor: "black",
    borderWidth: 2,
    width: 160,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});

export default HomeWithExpensive;
