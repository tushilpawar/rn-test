import React from 'react';
import { TextInput,StyleSheet,Text, View } from 'react-native';

export default function CustomInput ({title,value,onChange}){
    return(
        <View style={{justifyContent:'left'}}>
        <Text style={{marginTop:20, alignSelf:'flex-start'}}>
            {title}
        </Text>
        <TextInput
        placeholder='Name'
        style={styles.border}
        value={value}
        onChangeText={onChange}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    border: {
        borderWidth:1,
        height:55,
        paddingLeft:20,
        marginTop:5,
        borderColor:'#999',
        borderRadius:5
    },
  });