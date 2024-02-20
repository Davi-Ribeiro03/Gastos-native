import { View, Text, Modal, StyleSheet, Button } from "react-native";
import React from "react";

const ModalHelp = ({ modalVisibleHelp, setModalVisibleHelp }) => {
  return (
    <Modal animationType="fade" transparent={true} visible={modalVisibleHelp}>
      <View style={styles.containerModal}>
        <View style={styles.content}>
          <Text style={{ fontSize: 20 }}>Orientações</Text>
          <View style={{ width: "100%", height: 1, backgroundColor: "#888" }} />

          <View
            style={{
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <Text style={styles.text}>
              Ao clicar no Botão de + ao lado do saldo disponível, é possível
              Adicionar uma entrada
            </Text>
            <Text style={styles.text}>
              {" "}
              Se você desejar remover um gasto, você pode pressionar e segurar
              no gasto que deseja remover
            </Text>
            <Text style={styles.text}>
              Caso deseje visualizar a descrição que você adicionou, basta
              clicar no gasto que aparecerá sua descrição
            </Text>
            <Text style={styles.text}>
              Caso deseje apagar o valor disponível ou o valor total, basta
              pressionar e segurar sobre um deles
            </Text>
          </View>
          <View style={{ width: "70%", marginTop: 10 }}>
            <Button title="Ok" onPress={() => setModalVisibleHelp(false)} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  containerModal: {
    flex: 1,
    backgroundColor: "rgba(2,2,2,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    backgroundColor: "white",
    width: 300,
    height: 500,
    padding: 20,
    alignItems: "center",
    borderRadius: 20,
  },
  text: {
    color: "white",
    width: "100%",
    padding: 5,
    borderRadius: 10,
    margin: 10,
    backgroundColor: "rgba(0,0,0,0.9)",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "justify",
    fontSize: 15,
    fontWeight: "bold",
  },
});
export default ModalHelp;
