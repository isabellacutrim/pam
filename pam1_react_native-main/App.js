import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Currículo</Text>
      <View style={styles.tarefas}>
           <Text style={styles.text}>
                Isabella Gomes Cutrim <br></br> 
                isabella.cutrim@etec.sp.gov.br <br></br> 
                (11) 99021-8199 <br></br> 
                16 anos <br></br> 
          </Text>
      </View>
      <View  style={styles.tarefas}>
           <Text style={styles.text}>
           <br></br>FORMAÇÃO:<br></br> 
           Cursando ensino médio com técnico em desenvolvimento de sistemas<br></br>
          </Text>
      </View>
      <View  style={styles.tarefas}>
           <Text style={styles.text}>
           <br></br>RESUMO:<br></br> 
                <br></br>Me chamo Isabella Gomes Cutrim, sou uma adolescente de 16 anos de idade, 
                cursando o ensino médio com técnico em desenvolvimento de sistemas. 
                Sou uma pessoa fácil de se adpitar à lugares, trablho em grupo,
                Falo inglês. Tenho interesse em agregar para a empresa e crescer junto com ela.
            </Text>
      </View>
       
    
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '120%',
   
  },  
  fundo:{
    height: '100%',
    width: '100%', 
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: '25%',
    shadowColor:  '60px -16px teal;'
  },
  tarefas:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '50%',
    gap: '20px', 
    marginTop: '10px',
    border: 'solid black 1px',
    padding: '10px',
    paddingLeft: '30px',
    paddingRight: '30px',
    borderRadius: '10px'
  }, 
  text:{
     width: '1000%',
     fontSize: '10px',
     textAlign: 'justify'
  }
});
