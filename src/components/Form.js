/* This form was the first example, to see the waited result go to RegisterForm.js, there is the homework */
import React, {useState} from 'react';
import DatePicker from 'react-native-modern-datepicker';
import {Pressable} from 'react-native';
import {
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export const Form = ({modalVisibleForm}) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [age, setAge] = useState('');

  return (
    <Modal animationType="slide" visible={modalVisibleForm}>
      <SafeAreaView style={styles.content}>
        <ScrollView>
          <Text style={styles.titleTxt}>Nuevo Usuario</Text>
          <View>
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
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="Age"
              placeholderTextColor={'#203474'}
              value={age}
              onChangeText={setAge}
            />
            <DatePicker
              mode="calendar"
              onSelectedChange={selectedDate => setSelectedDate(selectedDate)}
            />
            <Pressable style={styles.btnStyle}>
              <Text style={styles.btnTxtStyle}>Registrarse</Text>
            </Pressable>
          </View>
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
  titleTxt: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    color: 'black',
    fontSize: 20,
    textTransform: 'capitalize',
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
});
