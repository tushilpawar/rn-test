
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import PlayerCard from '../components/PlayerCard';

export default function Scores ({route}) {
    return(
        <>
        <SafeAreaView style={styles.container}>
        <View style={styles.title}>
        <Text style={{fontWeight:600, fontSize: 30}}>
            Add players win details
        </Text>
        </View>
        <View style={styles.contentContainer}>
        <PlayerCard
        title={route.params.player1}
        />
        <PlayerCard
        title={route.params.player2}
        isLast
        />
        </View>
        </SafeAreaView>
        
        </>
    )
}

const styles = StyleSheet.create({
    title:{
        flex:0.2,
        justifyContent:'center',
        width:'85%',
    },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    borderWidth:1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:30,
    paddingVertical:15,
    borderRadius:10,
    backgroundColor:'blue'
  },
  contentContainer:{
    flex:0.8,
    width:'85%',
  }

});