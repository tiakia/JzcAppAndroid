import React,{ Component } from 'react';
import {
    Image,
    Text,
    View,
    StyleSheet,
    PixelRatio,
    StatusBar,
    TextInput,
    TouchableHighlight
} from 'react-native';
import StyleObject from './styleSheet.js';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackNavigator } from 'react-navigation';

class Search extends Component {
    constructor(props){
        super(props);
    }
    static navigationOptions = {
        header:null,
    };
    render(){
         const { goBack } = this.props.navigation;
        return(
            <View style={[StyleObject.flex,{backgroundColor:'#fff'}]}>
                <StatusBar
                    translucent={true}
                    backgroundColor='#fcf6f6'
                    barStyle='dark-content'
                />
                <View style={styles.searchNav}>
                    <View style={styles.searchNavTextInput}>
                        <Icon name='ios-search' size={20}/>
                        <TextInput
                            underlineColorAndroid="transparent"
                            placeholder='选份走心好礼送给他'
                            placeholderTextColor='#999'
                            style={{flex:1,marginLeft:10,marginBottom:-3}}
                            multiline = {true}
                        />
                    </View>
                    <TouchableHighlight style={[styles.cancelSearch,StyleObject.center]}
                                        underlayColor='transparent'
                                        onPress={()=>goBack()}
                    >
                        <Text style={StyleObject.fontSize}>取消</Text>
                    </TouchableHighlight>
                </View>     
                <View style={[StyleObject.flex,{paddingLeft:15}]}>
                    <View style={styles.searchOther}>
                        <Icon name='ios-star-outline' size={20}/>
                        <Text style={[StyleObject.fontSize,{marginLeft:5}]}>大家都在搜</Text>
                    </View>
                    <View style={styles.searchItem}>
                        <TouchableHighlight style={[styles.searchItemNormal,styles.searchItemActive]}>
                            <Text style={[StyleObject.fontSize,{color:'#FF0C4D'}]}>情侣</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={[styles.searchItemNormal,styles.searchItemActive]}>
                            <Text style={[StyleObject.fontSize,{color:'#FF0C4D'}]}>情侣</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={[styles.searchItemNormal,styles.searchItemActive]}>
                            <Text style={[StyleObject.fontSize,{color:'#FF0C4D'}]}>情侣</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={[styles.searchItemNormal]}>
                            <Text style={[StyleObject.fontSize,{color:'#9C9C9C'}]}>钱包</Text>
                        </TouchableHighlight>
                    </View>
                </View>          
            </View>
        )
    }
}

export default Search;

const styles = StyleSheet.create({
    searchNav:{
        height:75,
        backgroundColor:'#fcf6f6',
        flexDirection:'row',
        paddingLeft:10,
        alignItems:'flex-end',
        paddingRight:10,
        paddingBottom:8,
    },
    searchNavTextInput:{
        backgroundColor:'#fff',
        borderRadius:20,
        flex:1,
        height:35,
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:15
    },
    cancelSearch:{
        width:50,
        height:35,
    },
    searchOther:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:10,
        marginBottom:10
    },
    searchItem:{
        flexDirection:'row',
    },
    searchItemActive:{
        backgroundColor:'#FFF1F1',
    },
    searchItemNormal:{
        paddingLeft:15,
        paddingRight:15,
        paddingTop:5,
        paddingBottom:5,
        marginBottom:10,
        marginRight:10,
        backgroundColor:'#F2F2F2',
    },
});