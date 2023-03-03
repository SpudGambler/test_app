/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Modal,
  Image,
  Text,
  StyleSheet,
  Pressable,
  SafeAreaView,
  View,
  TextInput,
} from 'react-native';
import logo from './logo.jpg';

export const Superhero = ({modalHero, setModalHero}) => {
  return (
    <SafeAreaView>
      <Modal animationType="slide" visible={modalHero}>
        <View>
          <TextInput></TextInput>
        </View>
        <Pressable
          style={styles.close_window}
          onPress={() => {
            setModalHero(false);
          }}>
          <Text style={styles.text_close_window}>X</Text>
        </Pressable>
        <Text style={styles.title}>Superheroes</Text>
        <Image style={styles.img} source={logo} />
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  text_font: {
    fontFamily: 'Fira Sans',
  },
  title: {
    letterSpacing: 0.85,
    textAlign: 'center',
    color: 'black',
    fontSize: 25,
    fontWeight: 500,
    marginTop: 40,
    textTransform: 'capitalize',
    fontStyle: 'italic',
    textDecorationStyle: 'solid',
  },
  img: {
    marginTop: 25,
    resizeMode: 'contain',
    width: 400,
    height: 200,
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
