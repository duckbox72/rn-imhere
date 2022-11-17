import { Text, View, TextInput, TouchableOpacity } from 'react-native';

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
        placeholder="Atendee Name"
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


    </View>
  );
}