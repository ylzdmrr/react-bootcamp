import React,{Component} from 'react';
import {TextInput, View, Text, StyleSheet,Dimensions, TouchableOpacity, Alert, FlatList, Image} from 'react-native';

const {width} = Dimensions.get('window');

export class InputContainer extends Component{
   state ={todolist:[],text:"", textInputValue1:"", textInputValue2:""};

   
    _onClick =()=>{
        // Alert.alert(
        //     'Onay',
        //     'Devam etmek istediğinize emin misiniz?',
        //     [
        //       {
        //         text: 'İptal',
        //         onPress: () => console.log('İptal Edildi.'),
        //         style: 'cancel',
        //       },
        //       {text: 'Tamam', onPress: () => (this.setState(this.state.todolist[{'title':this.state.textInputValue1, 'explanation':this.state.textInputValue2}]))},
        //     ],
        //     {cancelable: false},
        //   );
        this.setState({todolist:[{'title':this.state.textInputValue1, 'explanation':this.state.textInputValue2}]})
        strData = JSON.stringify(this.state.todolist);
    }
    renderItem(todolist) {
        let { item, index } = todolist;
        return (
            <View>
                <View style={style.listItem}>
                    <Text style={style.listItemText}>Başlık: {item.title}</Text>
                    <Text style={style.listItemText}>Açıklama: {item.explanation}</Text>
                </View>
            </View>
        ) 
      }

    render(){
        return(
            <View style={style.container}>
                <TextInput style={style.textInputStyle} placeholder="Başlık" onChangeText={(textInputValue1) => this.setState({textInputValue1})}></TextInput>
                <TextInput style={style.textAreaInputStyle} placeholder="Açıklama" onChangeText={(textInputValue2) => this.setState({textInputValue2})}></TextInput>
                <View style={style.buttonContainer}>
                <TouchableOpacity onPress={this._onClick} style={style.buttonEvent}>
                    <Text style={style.buttonStyle}>Kaydet</Text>
                </TouchableOpacity>
                </View>
                <View>
                <FlatList 
                    keyExtractor={this._keyExtractor}
                    data={this.state.todolist}
                    renderItem={this.renderItem.bind(this)}
                    />
                </View>
            </View>
        );
    }
}
const style = StyleSheet.create({
    container:{
        marginTop: 10,
        width: width,
    },
    textInputStyle:{
        marginTop:5,
        width: width,
        height:40,
        backgroundColor:'white',
        borderWidth:2,
        borderColor: 'black',
        borderRadius: 10,
    },
    textAreaInputStyle:{
        marginTop:5,
        width: width,
        height:60,
        backgroundColor:'white',
        borderWidth:2,
        borderColor: 'black',
        borderRadius: 10,
    },
    buttonContainer:{
        justifyContent:'center',
        alignItems: 'center',
    },
    buttonStyle:{
        marginTop:10,
        width: 200,
        height:30,
        borderWidth:2,
        borderColor: 'black',
        borderRadius: 10,
        backgroundColor: 'purple',
        color:'white',
        textAlign: 'center',
        fontSize: 20
    },
    buttonEvent:{
        opacity: 0.7,
    },
    listItem:{
        width:width,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth:2,
        borderRadius:10,
        marginTop:10
    },
    listItemText:{
        padding:3,
        fontSize: 14,
        fontWeight: 'bold',
    }
});