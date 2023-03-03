/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  Modal,
  SafeAreaView,
  View,
  TextInput,
  StyleSheet,
  Text,
} from 'react-native';

export const FormPractice = ({modalPractice, setModalPractice}) => {
  const [value, setValue] = useState('');
  const capturaValor = event => {
    console.log(event);
    setValue(event);
  };
  return (
    <SafeAreaView>
      <Modal animationType="slide" visible={modalPractice}>
        <View style={styles.content}>
          <View style={styles.container}>
            <Text style={styles.title}>Formulario Nombre</Text>
            <TextInput
              style={styles.text_font}
              editable
              placeholder="Ingrese su nombre"
              value={value}
              onChangeText={capturaValor}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.title}>Formulario</Text>
            <TextInput style={styles.text_font} editable multiline />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#0069A3',
    flex: 1,
  },
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    padding: 10,
    backgroundColor: '#FAFAFA',
    borderRadius: 10,
  },
  title: {
    fontWeight: 'bold',
  },
  text_font: {
    fontFamily: 'Fira Sans',
  },
});
