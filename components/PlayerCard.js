import React, { useState } from 'react';
import { TouchableOpacity,StyleSheet,Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { PRIMARY_COLOR } from '../theme/default';

function PlayerCard ({title, isLast}){
    const[wins,setWins]= useState(0)
    return(
        <View style={{ marginBottom:70, borderBottomWidth: isLast ? 0: 1, borderBottomColor:'#f2f2f2'}}>
            <View style={{flexDirection:'row',justifyContent:'space-between', alignItems:'center'}}>
        <Text style={{ alignSelf:'flex-start', fontSize:32,}}>
            {title}
        </Text>
        <TouchableOpacity
        style={styles.button}
        onPress={
            () =>{
                setWins(wins+1)
            }
        }
        >
            <AntDesign name="plus" size={12} color={PRIMARY_COLOR}/>
            <Text style={{color:PRIMARY_COLOR}}>
                Add Win
            </Text>
        </TouchableOpacity>
        </View>
        <View style={{justifyContent:'center',alignItems:'center', height:150,flexDirection:'row',gap:10}}>
            <Text style={{ fontSize:15,color:'#999'}}>
                Wins :
            </Text>
            <Text style={{fontSize:50}}>
                {wins}
            </Text>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    border: {
        borderWidth:1,
        height:50,
        borderRadius:10
    },
    button:{
        borderWidth:1,
        alignItems: 'center',
        justifyContent: 'center',
        padding:15,
        borderRadius:5,
        borderColor:PRIMARY_COLOR,
        flexDirection:'row',
        
      },
});

export default React.memo(PlayerCard)