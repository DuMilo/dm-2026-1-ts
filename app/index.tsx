import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
  SafeAreaView,
} from 'react-native';


export default function Index() {

  const [name, setName] = useState('');
  const [isFirstImage, setIsFirstImage] = useState(true);


  const image1 = 'https://i.pravatar.cc/300?img=47'; 
  const image2 = 'https://i.pravatar.cc/300?img=32'; 


  const handleSave = () => {
    if (name.trim() === '') {
      Alert.alert('Ops!', 'Por favor, insira um nome antes de salvar.');
      return;
    }
    Alert.alert('Perfil Salvo! 🚀', `Nome registrado: ${name}`);
  };


  const toggleImage = () => {
    setIsFirstImage((prev) => !prev);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        
        <TouchableOpacity onPress={toggleImage} activeOpacity={0.8} style={styles.imageContainer}>
          <Image
            source={{ uri: isFirstImage ? image1 : image2 }}
            style={styles.profileImage}
            resizeMode="cover"
          />
          <Text style={styles.hintText}>Toque na foto para alterar</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="Digite seu nome..."
          placeholderTextColor="#888"
          value={name}
          onChangeText={setName} 
        />

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Salvar Perfil</Text>
        </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  content: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',     
    padding: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75, 
    borderWidth: 3,
    borderColor: '#4A90E2',
  },
  hintText: {
    marginTop: 10,
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
  input: {
    width: '100%', 
    height: 55,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    paddingHorizontal: 15,
    fontSize: 18,
    marginBottom: 40,
    color: '#333',
  },
  saveButton: {
    width: '100%',
    backgroundColor: '#4A90E2',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, 
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});