import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Pressable,
  Modal,
} from 'react-native';
import {Form} from './src/components/Form';
import RegisterForm from './src/components/RegisterForm';

function App(): JSX.Element {
  const [userList, setUserList] = useState([]);
  const [text, onChangeText] = useState('Text');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisibleForm, setModalVisibleForm] = useState(false);
  const [modalVisibleForm2, setModalVisibleForm2] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.baseText}>Hello</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Pressable
        onPress={() => setModalVisible(!modalVisible)}
        onLongPress={() => console.log('Please release me')}
        style={styles.btnStyle}>
        <Text style={styles.btnTxtStyle}>Ventana Modal</Text>
      </Pressable>
      <Pressable
        onPress={() =>
          setTimeout(() => {
            setModalVisible2(true);
          }, 1000)
        }
        style={styles.btnStyleRed}>
        <Text style={styles.btnTxtStyle}>Mostrar Modal</Text>
      </Pressable>
      <Pressable
        onPress={() => setModalVisibleForm(true)}
        style={styles.btnStyle}>
        <Text style={styles.btnTxtStyle}>Registrar Usuario (Tarea 2)</Text>
      </Pressable>
      <Form
        modalVisibleForm={modalVisibleForm}
        setModalVisibleForm={setModalVisibleForm}
        userList={userList}
        setUserList={setUserList}
      />
      <Modal animationType="slide" visible={modalVisible}>
        <Text>Ventana Modal</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
      </Modal>
      <Pressable
        onPress={() => setModalVisibleForm2(true)}
        style={styles.btnStyleRed}>
        <Text style={styles.btnTxtStyle}>Formulario de Registro (Tarea 1)</Text>
      </Pressable>
      <RegisterForm
        modalVisibleForm2={modalVisibleForm2}
        setModalVisibleForm2={setModalVisibleForm2}
      />
      <Modal animationType="fade" visible={modalVisible2}>
        <Text>Mostrar por 3 segundos</Text>
      </Modal>
    </SafeAreaView>
  );
}

/* const onPressFunction = () => {
  console.log('Click');
}; */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  baseText: {
    fontSize: 25,
    /* Alinear Texto */
    textAlign: 'center',
    /* Negrilla */
    fontFamily: 'MountainsofChristmas-Regular',
    fontWeight: '600',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  btnStyle: {
    backgroundColor: '#2437DA',
    padding: 20,
    marginTop: 20,
    marginHorizontal: 11,
    borderRadius: 15,
  },
  btnStyleRed: {
    backgroundColor: '#EA4918',
    padding: 20,
    marginTop: 20,
    marginHorizontal: 11,
    borderRadius: 15,
  },
  btnTxtStyle: {
    textAlign: 'center',
    color: '#EDEEF4',
    fontSize: 20,
    textTransform: 'capitalize',
  },
});

export default App;
