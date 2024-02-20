import { View, Text } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const UseStorageGastos = () => {
  const getItem = async (key) => {
    try {
      const item = await AsyncStorage.getItem(key);
      return JSON.parse(item) || [];
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const saveItem = async (key, value) => {
    try {
      const itens = await getItem(key);
      itens.push(value);

      await AsyncStorage.setItem(key, JSON.stringify(itens));
    } catch (error) {
      console.log(error);
    }
  };

  const removeItem = async (key, id) => {
    try {
      const itens = await getItem(key);
      const itensAtualizados = itens.filter((item) => item.id !== id);
      await AsyncStorage.removeItem(key);

      // if (itensAtualizados.length > 0)
      await AsyncStorage.setItem(key, JSON.stringify(itensAtualizados));

      alert("Removido com sucesso!");
      return itensAtualizados;
    } catch (error) {
      console.log(error);
    }
  };

  const removeAll = async () => {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.log(error);
    }
  };

  return { getItem, saveItem, removeItem, removeAll };
};

export default UseStorageGastos;
