import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import UseStorageGastos from "../../hooks/UseStorage/UseStorageGastos";
import UseStorageReceitas from "../../hooks/UseStorage/UseStorageReceitas";

const CardGastos = ({
  title,
  value,
  id,
  description,
  gastos,
  setGastos,
  setValorDisponivel,
}) => {
  const { removeItem: removeItemGastos } = UseStorageGastos();
  const { saveItem: saveItemReceitas, getItem: getItemReceitas } =
    UseStorageReceitas();
  const [expandir, setExpandir] = useState(false);

  return (
    <Pressable
      style={styles.container}
      onLongPress={async () => {
        removeItemGastos("@gastos", id);
        setGastos(gastos.filter((gasto) => gasto.id !== id));
        const valorDisponivel = await getItemReceitas("@valorDisponivel");
        setValorDisponivel(valorDisponivel + value);
        saveItemReceitas("@valorDisponivel", valorDisponivel + value);
      }}
      onPress={() => setExpandir(!expandir)}
    >
      <View style={styles.TitleAndValue}>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.text}>R$ {value},00</Text>
      </View>
      {expandir && (
        <View style={styles.description}>
          <Text style={styles.text}>Descrição:</Text>
          <Text style={styles.textDescription}>
            {description === ""
              ? "Você não adicionou uma descrição :("
              : description}
          </Text>
        </View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    backgroundColor: "rgba(0,0,0,0.9)",
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    width: 300,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  TitleAndValue: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  textDescription: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  description: {
    width: "100%",
    marginTop: 20,
  },
});

export default CardGastos;
