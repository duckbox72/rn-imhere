import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import { Participant } from '../../components/participant';

import { styles } from './styles';

export default function Home() {

  function handleParticipantAdd() {
    console.log("Add Participant Clicked")
  }


  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Event Name
      </Text>
      
      <Text style={styles.eventDate}>
        Friday, November 4 2022
      </Text>

      <View style={styles.form}>
        <TextInput
        style={styles.textInput}
        placeholder="Participant Name"
        placeholderTextColor="#6b6b6b"
        />

        <TouchableOpacity 
          style={styles.button}
          onPress={handleParticipantAdd}
        >
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <Participant name="Rodrigo"/>
      <Participant name="Diego"/>
      <Participant name="Vini"/>
      <Participant name="Luis"/>

    </View>
  );
}