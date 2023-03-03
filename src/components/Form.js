/* eslint-disable prettier/prettier */
/* Second homework */
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {RadioButton} from 'react-native-paper';
import {
  Pressable,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Alert,
  View,
} from 'react-native';

export const Form = ({modalRegister, setModalRegister, users}) => {
  const [userEmail, setUserEmail] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [birthday, setBirthday] = useState(new Date());
  const [gender, setGender] = useState('');
  const handlerNewUser = () => {
    if ([userName, userLastName, userEmail, birthday, gender].includes('')) {
      Alert.alert('Error', 'Campos sin diligenciar', [
        {text: 'Aceptar', onPress: () => console.log('OK Pressed')},
      ]);
      return;
    }
    /* Validar es un nuevo usuario o uno ya existente */
    let dateFormat =
      birthday.getDate() +
      '/' +
      (birthday.getMonth() + 1) +
      '/' +
      birthday.getFullYear();
    const newUser = {userName, userLastName, userEmail, birthday, gender};
    newUser.birthday = dateFormat;
    if (users.find(element => element.userEmail === userEmail) != null) {
      const userLast = users.find(element => element.userEmail === userEmail);
      userLast.userName = newUser.userName;
      userLast.userLastName = newUser.userLastName;
      userLast.userEmail = newUser.userEmail;
      userLast.birthday = newUser.birthday;
      userLast.gender = newUser.gender;
    } else {
      newUser.id = users.length + 1;
      users.push(newUser);
    }
    //setUsers(users);
    console.log('------------- Lista de Usuarios -------------');
    users.forEach(element => {
      console.log(element);
    });
    /* const new_user = [userName, birthday];
    const new_user2 = (userName, birthday);
    let dateFormat =
      birthday.getDate() +
      '/' +
      (birthday.getMonth() + 1) +
      '/' +
      birthday.getFullYear();
    console.log(dateFormat);
    console.log('Message1: ', new_user);
    console.log('Message2: ', new_user2); */
    setModalRegister(!modalRegister);
    setUserName('');
    setUserLastName('');
    setGender('');
    setUserEmail('');
    setBirthday(new Date());
  };

  return (
    <Modal animationType="slide" visible={modalRegister}>
      <Pressable
        style={styles.close_window}
        onPress={() => {
          setModalRegister(false);
          setBirthday(new Date());
        }}>
        <Text style={styles.text_close_window}>X</Text>
      </Pressable>
      <SafeAreaView style={styles.content}>
        <ScrollView>
          <Text style={styles.title}>
            Registro de Usuarios {''}
            <Text style={styles.subtitle}>UAM</Text>
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre(s)"
            placeholderTextColor={'#203474'}
            value={userName}
            onChangeText={setUserName}
          />
          <TextInput
            style={styles.input}
            placeholder="Apellido(s)"
            placeholderTextColor={'#203474'}
            value={userLastName}
            onChangeText={setUserLastName}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={'#203474'}
            value={userEmail}
            onChangeText={setUserEmail}
          />
          <View style={styles.radioButtonContent}>
            <Text style={styles.sectionTxt}>Género: </Text>
            <RadioButton.Item
              value="female"
              label="F"
              status={gender === 'female' ? 'checked' : 'unchecked'}
              onPress={() => setGender('female')}
            />
            <RadioButton.Item
              value="male"
              status={gender === 'male' ? 'checked' : 'unchecked'}
              label="M"
              onPress={() => setGender('male')}
            />
          </View>
          <Text style={styles.dateSectionTxt}>Fecha de nacimiento</Text>
          <DatePicker
            style={styles.content_date}
            date={birthday}
            locale="es"
            mode="date"
            onDateChange={date => setBirthday(date)}
          />
          <Pressable style={styles.btn_user_add} onPress={handlerNewUser}>
            <Text style={styles.text_btn_user_add}>Aceptar</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    marginHorizontal: 16,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  title: {
    textAlign: 'center',
    color: 'black',
    fontSize: 25,
    marginBottom: 15,
    textTransform: 'capitalize',
  },
  content_date: {
    height: 130,
    width: 300,
    borderWidth: 1,
  },
  titleTxt: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    color: 'black',
    fontSize: 20,
    textTransform: 'capitalize',
  },
  btn_user_add: {
    marginVertical: 30,
    backgroundColor: '#1B5FDF',
    padding: 15,
    borderRadius: 10,
  },
  text_btn_user_add: {
    color: '#FCFCFC',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  btnStyle: {
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
  close_window: {
    marginTop: 10,
    marginLeft: 341,
    alignItems: 'flex-end',
    marginHorizontal: 20,
    backgroundColor: '#ff0000',
    borderRadius: 100,
    padding: 5,
  },
  text_close_window: {
    color: '#ffffff',
    marginEnd: 6,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  radioButtonContent: {
    flex: 1,
    justifyContent: 'flex-start',
    marginHorizontal: 16,
    flexDirection: 'row',
  },
  sectionTxt: {
    textAlign: 'center',
    marginTop: 15,
    marginRight: 10,
    marginLeft: 10,
    color: 'black',
    fontSize: 17,
    textTransform: 'capitalize',
  },
});
