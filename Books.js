import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView,View,Image } from 'react-native';
import { FlatList} from 'react-native'
import { Card,Button  } from 'react-native-paper';
import React, { useState } from 'react';





export const  Books = (props) => {
    const [Display, GetDisplay] = useState('title');
    return (
        <SafeAreaView style = {styles.container}>
        <FlatList
        data={props.name}
        renderItem={({item}) => (
          <View
            style={{
              flex: 1,              
              margin: 10
            }}>
            <Card  style={styles.BooksCard}>
              <Card.Cover
                key={item.id}
                source={{ uri: item.src }}
                style={styles.BooksCardCover}
              />
              <View style={styles.info}>                
              {Display == 'title' ? // Check if title button is pressed or author
                (
        
                    <Text style={styles.title}>Title: {item.title}</Text>
               )
                 : <Text style={styles.title}>Author: {item.author}</Text>}
              </View>
            </Card>
           
          </View>
        )}
        
        //Setting the number of column
        numColumns={3}
        keyExtractor={(item) => item.key}
      />
      <View style= {{ flexDirection: 'row', alignSelf: 'center', position: 'relative'}}>
       <Button style = {{marginRight: 10}} mode="contained" onPress={() => {
        GetDisplay('title')
       }}>
        Display Title
        </Button>
        <Button mode="contained" onPress={() => {
            GetDisplay('author')
        }}>
        Display author
        </Button>
        </View>
      </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'white',
    },
    info: {
        padding: 10,
        alignItems: 'center'
      },
      BooksCard: {
        backgroundColor: 'white',
        marginBottom: 20,
      },
      BooksCardCover: {
        padding: 10,
        backgroundColor: 'white',
        height: 200,
      },
  });
  