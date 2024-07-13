
import React, {Component} from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

class App extends Component{
  constructor(props){
      super(props);
      this.state={
        textofrase:'',
        img:require('./src/biscoito.png'),
       
      };

      this.quebraBiscoito = this.quebraBiscoito.bind(this);

      frases = ['A vida trará coisas boas se tiver paciência.',
        'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
        'Não compense na ira o que lhe falta na razão.',
        'Defeitos e virtudes são apenas dois lados da mesma moeda.',
        'A maior de todas as torres começa no solo.',
        'Não há que ser forte. Há que ser flexível.',
        'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
        'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
        'A juventude não é uma época da vida, é um estado de espírito.',
        'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
        'Maysa é uma menina muito linda.. '
      ];
  }

 quebraBiscoito(){
  let numeroAleatorio = Math.floor(Math.random() * frases.length )
  this.setState({
    textofrase:'"'+ frases[numeroAleatorio] +'"',
    img:require('./src/biscoitoAberto.png'),
    
  })
 }
  render(){
    return(

      <View style={styles.container}>

        <Image
        style={styles.img}
        source={this.state.img}
        />
         <Text style={styles.frase}>{this.state.textofrase}</Text>
         
        <TouchableOpacity style={styles.btn} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar Biscoito </Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
container:{
 flex:1,
 alignItems:'center',
 padding:50
},

 img:{
  height:250,
  width:250,
 },

 btn:{
  width:250,
  height:50,
  borderColor:'#dd7b22',
  borderWidth:2,
  borderRadius:25

 },

 btnTexto:{
  fontSize:25,
  fontWeight:'bold',
  color:'black'

 },
 btnArea:{
  flex:1,
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'center'

 },
 frase:{
  fontSize:25,
  fontWeight:'bold',
  color:'green',
  padding:15
 }

});

export default App;