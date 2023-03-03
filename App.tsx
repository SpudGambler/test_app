import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Pressable,
  Modal,
  FlatList,
} from 'react-native';
import {Form} from './src/components/Form';
import {User} from './src/components/User';
import {Superhero} from './src/components/SuperHero';
import {FormPractice} from './src/components/FormPractice';
/* import RegisterForm from './src/components/First_Homework'; */

function App(): JSX.Element {
  const [users, setUsers] = useState([]);
  const [modalHero, setModalHero] = useState(false);
  const [modalPractice, setModalPractice] = useState(false);
  const [text, onChangeText] = useState('Text');
  /* const [modalVisible, setModalVisible] = useState(false); */
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalRegister, setModalRegister] = useState(false);
  /* const [modalVisibleForm2, setModalVisibleForm2] = useState(false); */
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.baseText}>Hello</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      {/* <Pressable
        onPress={() => setModalVisible(!modalVisible)}
        onLongPress={() => console.log('Please release me')}
        style={styles.btnStyle}>
        <Text style={styles.btnTxtStyle}>Ventana Modal</Text>
      </Pressable> */}
      <Pressable onPress={() => setModalPractice(true)} style={styles.btnStyle}>
        <Text style={styles.btnTxtStyle}>Modal de Practica</Text>
      </Pressable>
      <FormPractice
        modalPractice={modalPractice}
        setModalPractice={setModalPractice}
      />
      {/* <FormPractice
        modalPractice={modalPractice}
        setModalPractice={setModalPractice}
      /> */}
      <Pressable onPress={() => setModalHero(true)} style={styles.btnStyleRed}>
        <Text style={styles.btnTxtStyle}>Modal de Heroe</Text>
      </Pressable>
      <Superhero modalHero={modalHero} setModalHero={setModalHero} />
      <Pressable
        onPress={() =>
          setTimeout(() => {
            setModalVisible2(true);
          }, 1000)
        }
        style={styles.btnStyleRed}>
        <Text style={styles.btnTxtStyle}>Iniciar Sesion</Text>
      </Pressable>
      <Pressable onPress={() => setModalRegister(true)} style={styles.btnStyle}>
        <Text style={styles.btnTxtStyle}>Registrarse</Text>
      </Pressable>
      <Form
        modalRegister={modalRegister}
        setModalRegister={setModalRegister}
        users={users}
      />
      {users.length === 0 ? (
        <Text>No hay usuarios aún</Text>
      ) : (
        <FlatList
          data={users}
          renderItem={({item}) => {
            return <User user_item={user_item} />;
          }}
        />
      )}
      {/* <Modal animationType="slide" visible={modalVisible}>
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
      </Modal> */}
      {/* <Pressable
        onPress={() => setModalVisibleForm2(true)}
        style={styles.btnStyleRed}>
        <Text style={styles.btnTxtStyle}>Formulario de Registro (Tarea 1)</Text>
      </Pressable>
      <RegisterForm
        modalVisibleForm2={modalVisibleForm2}
        setModalVisibleForm2={setModalVisibleForm2}
      /> */}
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
