import React, {useState} from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native';

import { Participant } from '../../components/participant';

import { styles } from './styles';

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipanteName] = useState('');

  //const participants = ['John'];

  function handleParticipantAdd() {
    if(participants.includes(participantName)) {
      return Alert.alert("Existing Participant", "Participant already on list")
    }

    setParticipants(prevState => [...prevState, participantName]);
    setParticipanteName('');
  }

  function handleParticipantRemove(name: string) {
    console.log(participants.filter(participant => participant !== name))
    Alert.alert("Remove", `Remove ${name} from participants?`, [
      {
        text: 'Yes',
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
      },
      {
        text: 'No',
        style: 'cancel'
      }
    ])
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
        onChangeText={setParticipanteName}
        //value={participantName}
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