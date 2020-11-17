import React from 'react';
import { StyleSheet, Text, View,TextInput ,TouchableOpacity} from 'react-native';

export default class WriteScreen extends React.Component{
    constructor(){
        super();
        this.state={
            storyTitle :'',writting:'',author:''
        }
    }
 render(){
     return(
         <View>
         <TextInput
         style={style.inputs}
         placeholder="Story Title"
         value={this.state.storyTitle}
         />
    <TextInput
         style={style.inputs}
         placeholder="Author"
         value={this.state.author}
         />
             <TextInput
         style={style.input2}
         placeholder="Write your stroy"
         value={this.state.writting}
         />
         <TouchableOpacity style={{backgroundColor:'red',width:60,marginLeft:598}}><Text style={{color:'white',textAlign:'center'}}>Submit</Text></TouchableOpacity>
         </View>
     )
 }   
}
const style = StyleSheet.create({
  inputs:{
 justifyContent:'center',
width:140,
borderWidth:2,
marginLeft:480
  },
  input2:{
    justifyContent:'center',
    width:340,
    height:200,
    borderWidth:2,
    marginLeft:480
  }  
})