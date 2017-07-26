import React,{Component} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    PixelRatio,
    StyleSheet,
    StatusBar,
    ScrollView,
    ToastAndroid,
    Switch,
    Modal,
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import StyleObject from './styleSheet';
import Icon from 'react-native-vector-icons/Ionicons';
import ModalContent from './Modal';
import Area from './area.json';

export default class AddNewAddr extends Component {
    constructor(props){
        super(props);
        this.state={
            modalVisible : false,
            modalType: 'realName', 
            prov:[],
            city:[],
            area:[],
            selectProvince:Area[0].name,
            selectCity:Area[0].city[0].name,
            selectArea:Area[0].city[0].area[0],
            receiveAddr:"",
            receiveStreet:'',
            isDefault:false,
            receiveName:'',
            receivePhone:'',
            addrId:'',
        }
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect(prov,city,area){
        this.setState({
            receiveAddr: (prov+city+area),
            modalVisible:false,	
		});
	}
    static navigationOptions = ({navigation}) => {
          const {state,setParams,goBack} = navigation;
           return{
                headerTitle: '添加新地址',
                headerTitleStyle:{alignSelf:'center',justifyContent:'center',fontSize:14,color:'#F4013C'},
                headerStyle:{height:50,paddingTop:20,},
                headerLeft: (
                            <TouchableOpacity onPress={()=>goBack()}>
                                <Icon name='ios-arrow-back' size={25} color='#1d1d1d' style={{marginLeft:10}}/>
                            </TouchableOpacity>
                        ), 
                headerRight: <TouchableOpacity style={{marginRight:10}} onPress={()=>{
                                                                    ToastAndroid.showWithGravity(
                                                                        '保存成功',
                                                                        ToastAndroid.SHORT,
                                                                        ToastAndroid.CENTER
                                                                    )}}>
                                    <Text style={StyleObject.fontSize}>保存</Text>
                            </TouchableOpacity>
           };
    };
    render(){
        return(
            <View style={styles.EditAddr}>
                <View style={StyleObject.flex}>
                    <View style={[StyleObject.flexDirection,styles.EditAddrLayout]}>
                        <View style={StyleObject.center}>  
                            <Text style={[StyleObject.fontSize,{color:'#1d1d1d'}]}>收货人</Text>
                        </View>
                        <View style={[styles.EditAddrTextInput]}>  
                                <TextInput
                                    placeholderTextColor='#1d1d1d'
                                    style={styles.EditReceiveName}
                                    underlineColorAndroid='transparent'
                                    mutiline={true}
                                    onChangeText={(data)=>this.setState({receiveName:data})}
                                />
                        </View>
                    </View>
                    <View style={[StyleObject.flexDirection,styles.EditAddrLayout]}>
                        <View style={StyleObject.center}>  
                            <Text style={[StyleObject.fontSize,{color:'#1d1d1d'}]}>联系电话</Text>
                        </View>
                        <View style={[styles.EditAddrTextInput]}>  
                            <TextInput
                                style={styles.EditReceivePhone}
                                underlineColorAndroid='transparent'
                                mutiline={true}
                                onChangeText={(data)=>this.setState({receivePhone:data})}
                            />
                        </View>
                    </View>
                    <View style={[StyleObject.flexDirection,styles.EditAddrLayout]}>
                        <View style={StyleObject.center}>  
                            <Text style={[StyleObject.fontSize,{color:'#1d1d1d'}]}>所在地区</Text>
                        </View>
                        <TouchableOpacity style={[styles.EditReceiveAddr]} onPress={()=>this.setState({modalVisible:true})}>
                            <View>
                                <Text style={[StyleObject.fontSize,{color:'#1d1d1d'}]}>{this.state.receiveAddr}</Text>
                            </View>
                            <View style={[styles.EditAddrIcon]}>
                                <Icon name='ios-arrow-forward' size={25}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.EditAddrReceiveStreet,styles.EditAddrLayout]}>
                        <View style={StyleObject.flex}>  
                            <TextInput
                                style={{padding:0,fontSize:12,}}
                                underlineColorAndroid='transparent'
                                mutiline={true}
                                numberOfLines={3}
                                onChangeText={(data)=>this.setState({receiveStreet:data})}
                            />
                        </View>
                    </View>
                    <View style={[StyleObject.flexDirection,styles.EditAddrLayout,{marginTop:5}]}>
                        <View style={StyleObject.center}>  
                            <Text style={[StyleObject.fontSize,{color:'#1d1d1d'}]}>设为默认</Text>
                        </View>
                        <Switch
                            value={this.state.isDefault}
                            onTintColor='#fc0941'
                            thumbTintColor='#fff'
                            onValueChange={(value)=>{this.setState({isDefault:value})}}
                        />
                    </View>
               </View>
                <ModalContent   modal={this.state.modalVisible}
                                modalType={this.state.modalType}

                                handleSelect={this.handleSelect}

                                prov={this.state.prov}
                                city={this.state.city}
                                area={this.state.area}
                                selectProvince={this.state.selectProvince}
                                selectCity={this.state.selectCity}
                                selectArea={this.state.selectArea}
                />
            </View>
        )
    }
}

const styles=StyleSheet.create({
    EditAddr:{
        flex:1,
        justifyContent:'space-between',
    },
    EditAddrLayout:{
        paddingLeft:15,
        paddingRight:15,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#fff',
        borderBottomWidth:1/PixelRatio.get(),
        borderColor:"#ddd",
    },
    EditAddrTextInput:{
        width:'80%',
        alignItems:'flex-end'
    },
    EditReceiveName:{
        padding:0,
        fontSize:12,
        textAlign:'right',
        width:'50%'
    },
    EditReceivePhone:{
        padding:0,
        width:'50%',
        fontSize:12,
        textAlign:'right',
    },
    EditReceiveAddr:{
        flexDirection:'row',
        alignItems:'center',
    },
    EditAddrIcon:{
        alignItems:'flex-end',
        paddingLeft:10
    },
    EditAddrReceiveStreet:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:"flex-start"
    },
    deleteAddr:{
            paddingTop:10,
            paddingBottom:10,
            backgroundColor:'#FC0844',  
            alignItems:'center',
    },
});