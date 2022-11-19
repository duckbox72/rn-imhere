import React from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';

import { Participant } from '../../components/participant';

import { styles } from './styles';

export default function Home() {
  const participants = ['Rodrigo', 'Vini', 'Diego', 'Biro', 'Ana', 'Isa', 'Jack', 'Mayk', 'Dani'];

  function handleParticipantAdd() {
    console.log("Add Participant Clicked");
  }

  function handleParticipantRemove(name: string) {
    console.log(`Remove Participant Clicked ${name}`);
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

      <FlatList 
        data={participants}
        //data={[]}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item} 
            name={item} 
            onRemove={() => handleParticipantRemove(item)}  
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            No one signed for the event yet. Add participants to your presence list
          </Text>
        )}
      />

      {/* <ScrollView showsVerticalScrollIndicator={false}>
      {
        participants.map(participant => (
          <Participant
            key={participant} 
            name={participant} 
            onRemove={() => handleParticipantRemove(participant)}  
          />
        ))
      }
      </ScrollView> */}
      

    </View>
  );
}