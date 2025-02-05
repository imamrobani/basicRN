import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

type FormProps = {
  name: string;
  address: string;
};

const App = () => {
  const [form, setForm] = useState<FormProps>({
    name: '',
    address: '',
  });
  const [data, setData] = useState<FormProps[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleSubmit = () => {
    if (editIndex !== null) {
      // Edit Data
      const newData = [...data];
      newData[editIndex] = form;
      setData(newData);

      // reser index
      setEditIndex(null);
    } else {
      // Add Data
      setData([...data, form]);
    }

    // RESET FORM
    setForm({
      name: '',
      address: '',
    });
  };

  const handleDelete = (index: number) => {
    setData(data.filter((_, idx) => idx !== index));
  };

  return (
    <View style={styles.container}>
      <View style={{gap: 4}}>
        <Text>Nama</Text>
        <TextInput
          value={form.name}
          placeholder="Masukkan Nama"
          onChangeText={text => setForm({...form, name: text})}
          style={styles.input}
        />
      </View>

      <View style={{gap: 4}}>
        <Text>Alamat</Text>
        <TextInput
          value={form.address}
          placeholder="Masukkan Alamat"
          multiline
          textAlignVertical="top"
          onChangeText={text => setForm({...form, address: text})}
          style={styles.inputArea}
        />
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button}
        onPress={handleSubmit}>
        <Text>{editIndex !== null ? 'EDIT' : 'TAMBAH'}</Text>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={{gap: 16, paddingBottom: 20}}>
        {data.map((item, index) => (
          <View key={index} style={styles.card}>
            <View>
              <Text>No: {index + 1}</Text>
              <Text>Nama: {item.name}</Text>
              <Text>Alamat: {item.address}</Text>
            </View>
            <View style={{gap: 8}}>
              <TouchableOpacity
                style={styles.buttonDelete}
                onPress={() => handleDelete(index)}>
                <Text style={{color: 'white'}}>Hapus</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonEdit}
                onPress={() => {
                  setForm(item);
                  setEditIndex(index);
                }}>
                <Text style={{color: 'white'}}>edit</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
  inputArea: {
    height: 150,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EFB036',
    height: 48,
    borderRadius: 8,
  },
  card: {
    padding: 8,
    gap: 4,
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonDelete: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EB5A3C',
    borderRadius: 8,
    padding: 4,
    paddingHorizontal: 8,
  },
  buttonEdit: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EFB036',
    borderRadius: 8,
    padding: 4,
    paddingHorizontal: 8,
  },
});

export default App;
