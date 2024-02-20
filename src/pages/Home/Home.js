import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Image,
  Pressable,
  Modal,
  TextInput,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import HomeWithoutExpensive from "../../Components/CardGastos/HomeWithoutExpensive";
import HomeWithExpensive from "../../Components/CardGastos/HomeWithExpensive";
import ModalGastos from "../../Components/Modais/ModalGastos";
import ModalEntrada from "../../Components/Modais/ModalEntrada";
import UseStorageGastos from "../../hooks/UseStorage/UseStorageGastos";
import UseStorageReceitas from "../../hooks/UseStorage/UseStorageReceitas";
import { useIsFocused } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ModalHelp from "../../Components/Modais/ModalHelp";

const Home = ({ route }) => {
  const [modalVisibleOut, setModalVisibleOut] = useState(false);
  const [modalVisibleIn, setModalVisibleIn] = useState(false);
  const [modalVisibleHelp, setModalVisibleHelp] = useState(true);
  const [valorTotal, setValorTotal] = useState(0);
  const [valorDisponivel, setValorDisponivel] = useState(0);
  const [id, setId] = useState(0);
  const [gastos, setGastos] = useState([]);
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const { getItem: getItemGastos, removeAll } = UseStorageGastos();
  const { getItem: getItemReceitas } = UseStorageReceitas();

  useEffect(() => {
    const buscaItens = async () => {
      const gastosSalvos = await getItemGastos("@gastos");
      console.log(gastosSalvos);
      setValorDisponivel(await getItemReceitas("@valorDisponivel"));
      setValorTotal(await getItemReceitas("@valorTotal"));

      if (gastosSalvos.length > 0) {
        setGastos(gastosSalvos);
        setId(gastosSalvos[gastosSalvos.length - 1]?.id + 1 || 0);
      }
    };

    buscaItens();
  }, []);

  // AsyncStorage.clear();
  return (
    <SafeAreaView>
      <StatusBar />
      <View style={StyleSheet.container}>
        {gastos.length === 0 ? (
          <HomeWithoutExpensive
            loggedInUser={route.params?.user}
            setModalVisibleOut={setModalVisibleOut}
            setModalVisibleIn={setModalVisibleIn}
            valorTotal={valorTotal}
            setValorTotal={setValorTotal}
            valorDisponivel={valorDisponivel}
            setValorDisponivel={setValorDisponivel}
            setModalVisibleHelp={setModalVisibleHelp}
          />
        ) : (
          <HomeWithExpensive
            loggedInUser={route.params?.user}
            gastos={gastos}
            setGastos={setGastos}
            valorTotal={valorTotal}
            setValorTotal={setValorTotal}
            valorDisponivel={valorDisponivel}
            setValorDisponivel={setValorDisponivel}
            setModalVisibleOut={setModalVisibleOut}
            setModalVisibleIn={setModalVisibleIn}
            setModalVisibleHelp={setModalVisibleHelp}
          />
        )}
      </View>

      <ModalHelp
        modalVisibleHelp={modalVisibleHelp}
        setModalVisibleHelp={setModalVisibleHelp}
      />

      <ModalGastos
        modalVisible={modalVisibleOut}
        setModalVisible={setModalVisibleOut}
        setTitle={setTitle}
        setValue={setValue}
        setDescription={setDescription}
        description={description}
        setGastos={setGastos}
        gastos={gastos}
        setId={setId}
        id={id}
        title={title}
        value={value}
        setValorDisponivel={setValorDisponivel}
        valorDisponivel={valorDisponivel}
      />

      <ModalEntrada
        modalVisible={modalVisibleIn}
        setModalVisible={setModalVisibleIn}
        setValue={setValue}
        setValorDisponivel={setValorDisponivel}
        setValorTotal={setValorTotal}
        valorDisponivel={valorDisponivel}
        valorTotal={valorTotal}
        value={value}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // containerModal: {
  //   flex: 1,
  //   backgroundColor: "rgba(2,2,2,0.5)",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // form: {
  //   backgroundColor: "white",
  //   width: 300,
  //   height: 360,
  //   padding: 30,
  //   borderRadius: 20,
  // },
  // text: {
  //   fontSize: 18,
  // },
  // input: {
  //   widht: 260,
  //   height: 40,
  //   padding: 10,
  //   borderColor: "black",
  //   borderWidth: 2,
  //   borderRadius: 8,
  //   marginBottom: 10,
  // },
  // buttons: {
  //   flexDirection: "row",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   gap: 20,
  //   marginTop: 10,
  // },
});

export default Home;
