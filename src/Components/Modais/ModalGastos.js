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
import UseStorageGastos from "../../hooks/UseStorage/UseStorageGastos";
import UseStorageReceitas from "../../hooks/UseStorage/UseStorageReceitas";

const ModalGastos = ({
  modalVisible,
  setModalVisible,
  setTitle,
  setValue,
  setDescription,
  description,
  setGastos,
  gastos,
  setId,
  id,
  title,
  value,
  setValorDisponivel,
  valorDisponivel,
}) => {
  const { saveItem: saveItemGastos } = UseStorageGastos();
  const { saveItem: saveItemReceitas } = UseStorageReceitas();

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
          <Text style={styles.text}>Título</Text>
          <TextInput style={styles.input} onChangeText={setTitle} />
          <Text style={styles.text}>Valor</Text>
          <TextInput
            keyboardAppearance="dark"
            keyboardType="numeric"
            style={styles.input}
            onChangeText={setValue}
          />
          <Text style={styles.text}>Descrição</Text>
          <TextInput
            onChangeText={setDescription}
            placeholder="opicional..."
            style={{
              width: 260,
              padding: 10,
              paddingTop: 0,
              borderColor: "black",
              borderWidth: 2,
              borderRadius: 8,
              marginBottom: 10,
            }}
            multiline
            numberOfLines={3}
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
              onPress={async () => {
                if (title | (value === ""))
                  return alert("Você deve preencher os campos antes de salvar");

                setId(id + 1);
                saveItemGastos("@gastos", {
                  id: id,
                  title: title,
                  value: parseInt(value),
                  description: description,
                });

                setGastos([
                  ...gastos,
                  {
                    id: id,
                    title: title,
                    value: parseInt(value),
                    description: description,
                  },
                ]);

                console.log(gastos);

                saveItemReceitas(
                  "@valorDisponivel",
                  JSON.stringify(valorDisponivel - parseFloat(value))
                );

                setValorDisponivel(valorDisponivel - parseFloat(value));

                setModalVisible(false);
                alert("Salvo com sucesso!");
                setTitle("");
                setValue("");
                setDescription("");
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
    height: 360,
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

export default ModalGastos;
