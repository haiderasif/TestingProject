import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList} from 'react-native'
import { Books } from './Books';
const Bookslist = [
  {
    id: 1,
    title: 'Harry Potter and the',
    src: 'http://media.wbur.org/wp/2018/11/book-collage-1000x555.jpg',
    author: 'Haider'
  },
  {
    id: 2,
    title: 'Killing a mocking bird',
    src: 'http://media.wbur.org/wp/2018/11/book-collage-1000x555.jpg',
    author: 'Adnan'
  },
  {
    id: 3,
    title: 'What are you getting',
    src: 'http://media.wbur.org/wp/2018/11/book-collage-1000x555.jpg',
    author: 'Ahmed',
  },
  
]

export default function App() {
  return (
   <Books name={Bookslist}/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
