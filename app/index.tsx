import { StatusBar } from 'expo-status-bar';
import Checkbox from 'expo-checkbox';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [isChecked, setIsChecked] = useState([])

  interface ItemProps {
    id: string;
    title: string;
    description: string;
  }

  const data = [
    {
      id: "1",
      title: "First todo",
      description: "this is my first todo.",
    },
    {
      id: "2",
      title: "Second todo",
      description: "this is my second todo.",
    }
  ]

  // const Col: React.FC<{ children: React.ReactNode}> = ({ children }) => (
  //   <View style={{flexDirection: 'column'}}>{children}</View>
  // )

  const Item = ({ title, description, id } : ItemProps) => (
    <View style={{padding: 10, margin: 10, flexDirection: 'row', gap: 20, alignItems: 'center'}}>
      <Checkbox value={isChecked[parseInt(id)]} onValueChange={(newValue) => { setIsChecked({...isChecked, [id]: newValue})}} />
      <View style={{flexDirection: 'column', gap: 10}}>
      <Text style={{fontWeight: 'bold', fontSize: 15}}>{title} </Text>
      <Text>{description} </Text>
      </View>
    </View>
  );

   return (
    <View style={styles.container}>
      <Text style={{padding: 20, fontSize: 32, alignSelf: "flex-start"}}>All Tasks</Text>
      <StatusBar style='auto'/>
      <FlatList data={data} renderItem={({item}) => <Item id={item.id} title={item.title}  description={item.description} />} keyExtractor={item => item.id} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
