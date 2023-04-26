
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View,SafeAreaView } from 'react-native';
import CustomInput from '../components/CustomInput';
import KeyboardAwareScrollView from '../components/KeyboardAwareScrollView';

export default function Players ({navigation}) {

    const [player1, setPlayer1] =useState('')
    const [player2, setPlayer2] =useState('')

    return(
        
        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView>
        <View style={styles.title}>
        <Text style={{fontWeight:600, fontSize: 30}}>
            Enter player details to continue
        </Text>
        </View>
        <View style={styles.contentContainer}>
        <CustomInput
        title={'Player 1 name'}
        value={player1}
        onChange={(text) =>{
            setPlayer1(text)
        }}
        />
        <CustomInput
        title={'Player 2 name'}
        value={player2}
        onChange={(text) =>setPlayer2(text)}
        />
        <TouchableOpacity
        style={styles.button}
        onPress={
            () =>{                
                navigation.navigate('Scores',{player2,player1})
            }
        }
        >
            <Text style={{color:'white'}}>
                Continue
            </Text>
        </TouchableOpacity>
        </View>
        </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title:{
        flex:0.3,
        justifyContent:'center',
    },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical:15,
    borderRadius:5,
    marginVertical:45,
    backgroundColor:'dodgerblue'
  },
  contentContainer:{
    flex:0.7,
    width:'95%'
  }

});
