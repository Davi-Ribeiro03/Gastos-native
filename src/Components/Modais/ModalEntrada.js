import {
  View,
  Text,
  Modal,
  Pressable,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import UseStorageReceitas from "../../hooks/UseStorage/UseStorageReceitas";

const ModalEntrada = ({
  modalVisible,
  setModalVisible,
  setValue,
  value,
  setValorTotal,
  valorTotal,
  setValorDisponivel,
  valorDisponivel,
}) => {
  const { saveItem } = UseStorageReceitas();
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.containerModal}>
        <View style={styles.form}>
          <Text style={{ fontSize: 25, fontWeight: "bold", marginBottom: 20 }}>
            Adicionar Entrada
          </Text>
          <Text style={styles.text}>Valor</Text>
          <TextInput
            keyboardAppearance="dark"
            keyboardType="numeric"
            style={styles.input}
            onChangeText={setValue}
          />

          <View style={styles.buttons}>
            <Pressable onPress={() => setModalVisible(!modalVisible)}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>Cancelar</Text>
            </Pressable>
            <TouchableOpacity
              style={{
                backgroundColor: "#2196F3",
                padding: 10,
                width: 130,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                if (value === "")
                  return alert("Você deve preencher antes de salvar!");
                const valorTotalAtualizado = valorTotal + parseFloat(value);
                const valorDisponivelAtualizado =
                  valorDisponivel + parseFloat(value);
                saveItem("@valorTotal", JSON.stringify(valorTotalAtualizado));
                saveItem(
                  "@valorDisponivel",
                  JSON.stringify(valorDisponivelAtualizado)
                );
                setValorDisponivel(valorDisponivelAtualizado);
                setValorTotal(valorTotalAtualizado);

                setModalVisible(false);
                setValue("");
                alert("Entrada salva com sucesso!");
              }}
            >
              <Text
                style={{ fontSize: 18, fontWeight: "bold", color: "white" }}
              >
                Salvar
              </Text>
            </TouchableOpacity>
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
  form: {
    backgroundColor: "white",
    width: 300,
    height: 260,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  text: {
    fontSize: 18,
    width: 250,
    textAlign: "left",
  },
  input: {
    width: 260,
    height: 40,
    padding: 10,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 8,
    marginBottom: 10,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginTop: 10,
  },
});

export default ModalEntrada;
