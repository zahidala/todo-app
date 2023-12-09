import { StatusBar } from 'expo-status-bar';
import Checkbox from 'expo-checkbox';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

export default function App() {

  interface Todo {
    id: string;
    title: string;
    description: string;
    isChecked: boolean
  }

  const [data, setData] = useState<Todo[]>([
    {
      id: "1",
      title: "First todo",
      description: "this is my first todo.",
      isChecked: false,
    },
    {
      id: "2",
      title: "Second todo",
      description: "this is my second todo.",
      isChecked: false,
    },
  ])

  const setCheckBoxValue = (id: string) => {
    setData((prevData) => 
      prevData.map((item) =>item.id === id ? {...item, isChecked: !item.isChecked } : item
      )
    );
  }

  console.log(data)

  const Col: React.FC<{ children: React.ReactNode}> = ({ children }) => (
    <View style={{flexDirection: 'column'}}>{children}</View>
  )

  const Item = ({ title, description, id, isChecked } : Todo) => (
    <View style={{padding: 10, margin: 10, flexDirection: 'row', gap: 20, alignItems: 'center'}}>
      <Checkbox value={isChecked} onValueChange={ () => setCheckBoxValue(id)} />
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
      <FlatList data={data} renderItem={({item}) => <Item {...item} />} keyExtractor={item => item.id} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
