import { Text, View, TextInput } from 'react-native';

import { styles } from './styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Event Name
      </Text>
      
      <Text style={styles.eventDate}>
        Friday, November 4 2022
      </Text>

      <TextInput
       style={styles.textInput}
       placeholder="Atendee Name"
       placeholderTextColor="#6b6b6b"
      />


    </View>
  );
}