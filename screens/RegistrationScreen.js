import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function RegistrationScreen({ navigation }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegistration = async () => {
    if (name && phone && email && address) {
      setLoading(true);
      try {
        const response = await fetch('http://192.168.31.190:5000/register', { 
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, phone, email, address }),
        });

        const data = await response.json();

        if (response.status === 201) {
          navigation.replace("Home");
        } else {
          alert(data.message || 'Registration failed');
        }
      } catch (error) {
        console.error(error);  
        alert('Something went wrong. Please try again.');
      } finally {
        setLoading(false);
      }
    } else {
      alert("Please fill all fields");
    }
  };

  const isFormComplete = name && phone && email && address;

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Registration</Text>
        <TextInput
          placeholder='Enter name'
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
        <TextInput
          placeholder='Enter phone number'
          style={styles.input}
          keyboardType='numeric'
          value={phone}
          onChangeText={setPhone}
        />
        <TextInput
          placeholder='Enter email'
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder='Enter address'
          style={[styles.input, styles.address]}
          multiline
          value={address}
          onChangeText={setAddress}
        />
        <Button
          title={loading ? 'Submitting...' : 'Submit'}
          onPress={handleRegistration}
          disabled={!isFormComplete || loading}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center"
  },
  box: {
    backgroundColor: "white",
    borderColor: "black",
    borderRadius: 5,
    padding: 20,
    borderWidth: 1,
    width: 300
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    height: 40
  },
  address: {
    height: 100,
    textAlignVertical: "top"
  }
});
