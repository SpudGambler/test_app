/* eslint-disable prettier/prettier */
/* This form was the first example, to see the waited result go to RegisterForm.js, there is the homework */
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {
  Pressable,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Alert,
} from 'react-native';

export const Form = ({modalVisibleForm, setModalVisibleForm}) => {
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [birthday, setBirthday] = useState(new Date());
  const handlerNewUser = () => {
    console.log('Adding new user');
    if ([userName].includes('')) {
      Alert.alert('Alert Title', 'My Alert Msg', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
    const new_user = [userName, birthday];
    const new_user2 = (userName, birthday);
    let dateFormat =
      birthday.getDate() +
      '/' +
      (birthday.getMonth() + 1) +
      '/' +
      birthday.getFullYear();
    console.log(dateFormat);
    console.log('Message1: ', new_user);
    console.log('Message2: ', new_user2);
    setModalVisibleForm(!modalVisibleForm);
    setUserName('');
  };

  return (
    <Modal animationType="slide" visible={modalVisibleForm}>
      <Pressable
        style={styles.close_window}
        onPress={() => {
          setModalVisibleForm(false);
          setBirthday(new Date());
        }}>
        <Text style={styles.text_close_window}>X</Text>
      </Pressable>
      <SafeAreaView style={styles.content}>
        <ScrollView>
          <Text style={styles.title}>
            Sign Up {''}
            <Text style={styles.subtitle}>User UAM</Text>
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre de usuario"
            placeholderTextColor={'#203474'}
            value={userName}
            onChangeText={setUserName}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={'#203474'}
            value={userEmail}
            onChangeText={setUserEmail}
          />
          <DatePicker
            style={styles.content_date}
            date={birthday}
            locale="es"
            mode="date"
            onDateChange={date => setBirthday(date)}
          />
          <Pressable style={styles.btn_user_add} onPress={handlerNewUser}>
            <Text style={styles.text_btn_user_add}>Accept</Text>
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
});
