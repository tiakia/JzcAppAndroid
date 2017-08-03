import React,{ Component } from 'React';
import {
    Image,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    FlatList,
    PixelRatio,
    StyleSheet,
    TextInput,
} from 'react-native';
import StyleObject from './styleSheet.js';
import Icon from 'react-native-vector-icons/Ionicons';
import {StackNavigator,TabNavigator } from 'react-navigation';

export default class Evaluate extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    static navigationOptions=({navigation})=>({
        headerTitle:'发表评价',
        headerTitleStyle:{alignSelf:'center',justifyContent:'center',fontSize:14,color:'#F4013C'},
        headerStyle:{height:50,paddingTop:20,},
        headerLeft: (
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Icon name='ios-arrow-back' size={25} color='#1d1d1d' style={{marginLeft:10}}/>
                    </TouchableOpacity>
                ), 
        headerRight:(
            <TouchableOpacity style={{width:40}}>
                <Text style={[StyleObject.fontSize]}>发布</Text>
            </TouchableOpacity>
        ),
    });
    render(){
        return(
            <View style={StyleObject.flex}>
                <View style={[StyleObject.flexRow,{
                    alignItems:'center',
                    paddingLeft:10,
                    paddingRight:10,
                    paddingTop:10,
                    paddingBottom:10,
                    borderBottomWidth:1/PixelRatio.get(),
                    borderColor:"#ddd",
                    backgroundColor:'#fff',
                }]}>
                    <Image source={require('./../images/head.jpg')}
                           style={{width:35,height:35}}
                    />
                    <Text style={[StyleObject.fontSize,StyleObject.normalColor,{marginLeft:10,marginRight:5}]}>描述相符</Text>
                    <View style={StyleObject.flexRow}>
                        <TouchableOpacity style={{marginLeft:10}}>
                            <Icon name='md-star-outline' size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginLeft:10}}>
                            <Icon name='md-star-outline' size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginLeft:10}}>
                            <Icon name='md-star-outline' size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginLeft:10}}>
                            <Icon name='md-star-outline' size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginLeft:10}}>
                            <Icon name='md-star-outline' size={25} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[{backgroundColor:'#fff',height:100,paddingLeft:10,paddingRight:10}]}>
                    <TextInput
                        placeholder="宝贝满足你的期待吗？说说它的优点和美中不足的地方吧"
                        style={{padding:0,}}
                        underlineColorAndroid="transparent"
                        numberOfLines={4}
                        multiline={true}
                    />
                </View>
                <TouchableOpacity style={[{
                        width:80,
                        height:80,
                        borderWidth:1/PixelRatio.get(),
                        borderStyle:'dashed',
                        backgroundColor:"#fff",
                    },StyleObject.center]}>
                    <Icon name='ios-camera-outline' size={40}/>
                    <Text style={[StyleObject.fontSize,StyleObject.normalColor]}>添加图片</Text>
                </TouchableOpacity>
            </View>
        )
    }
}