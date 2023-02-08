import React, {useState} from 'react';
import {RadioButton} from 'react-native-paper';
import DatePicker from 'react-native-modern-datepicker';
import {
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
} from 'react-native';

function RegisterForm({modalVisibleForm2}: any) {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [checked, setChecked] = React.useState('first');
  return (
    <Modal visible={modalVisibleForm2}>
      <SafeAreaView>
        <ScrollView>
          <Text style={styles.titleTxt}>Registro</Text>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Nombre(s)"
              placeholderTextColor={'#203474'}
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.input}
              placeholder="Apellido(s)"
              placeholderTextColor={'#203474'}
              value={lastName}
              onChangeText={setLastName}
            />
            <TextInput
              style={styles.input}
              placeholder="Correo"
              placeholderTextColor={'#203474'}
              value={email}
              onChangeText={setEmail}
            />
            <View style={styles.radioButtonContent}>
              <Text style={styles.sectionTxt}>Género: </Text>
              <RadioButton.Item
                value="female"
                label="F"
                status={checked === 'female' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('female')}
              />
              <RadioButton.Item
                value="male"
                status={checked === 'male' ? 'checked' : 'unchecked'}
                label="M"
                onPress={() => setChecked('male')}
              />
            </View>
            <Text style={styles.dateSectionTxt}>Fecha de nacimiento</Text>
            <DatePicker
              mode="calendar"
              onSelectedChange={selectedDate => setSelectedDate(selectedDate)}
            />
            <View style={styles.buttonsContent}>
              <Pressable style={styles.btnStyleBlue}>
                <Text style={styles.btnStyleBlue}>Aceptar</Text>
              </Pressable>
              <Pressable style={styles.btnStyleRed}>
                <Text style={styles.btnStyleRed}>Cancelar</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  radioButtonContent: {
    flex: 1,
    justifyContent: 'flex-start',
    marginHorizontal: 16,
    flexDirection: 'row',
  },
  buttonsContent: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
    flexDirection: 'row',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  titleTxt: {
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 15,
    color: 'black',
    fontSize: 20,
    textTransform: 'capitalize',
  },
  sectionTxt: {
    textAlign: 'center',
    marginTop: 15,
    marginRight: 120,
    marginLeft: 10,
    color: 'black',
    fontSize: 17,
    textTransform: 'capitalize',
  },
  dateSectionTxt: {
    textAlign: 'left',
    marginLeft: 15,
    marginTop: 5,
    color: 'black',
    fontSize: 17,
    textTransform: 'capitalize',
  },
  btnStyleRed: {
    backgroundColor: '#FF3636',
    padding: 20,
    marginTop: 20,
    marginHorizontal: 11,
    borderRadius: 15,
  },
  btnStyleBlue: {
    backgroundColor: '#0068FF',
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

export default RegisterForm;
