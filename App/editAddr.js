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

export default class EditAddr extends Component {
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
            receiveStreet:' ',
            isDefault:false,
            receiveName:'',
            receivePhone:'',
            addrId:'',
            deleteModal: false,
        }
        this.handleSelect = this.handleSelect.bind(this);
        this.setModalVisible = this.setModalVisible.bind(this);
	this.confirmDeleteAddr = this.confirmDeleteAddr.bind(this);
    }
    handleSelect(prov,city,area){
        this.setState({
            receiveAddr: (prov+city+area),
            modalVisible:false,	
		});
	}
    static navigationOptions = ({navigation}) => {
        const {state,setParams,goBack,navigate} = navigation;
        const { data } = state.params;
	// const newAddr = {
	//     addrId : this.state.addrId,
	//     receiveName : this.state.receiveName,
	//     receivePhone : this.state.receivePhone,
	//     receiveAddr : this.state.receiveAddr,
	//     receiveStreet : this.state.receiveStreet,
	//     isDefault : this.state.isDefault,
	// }
	//编辑成功后，点击保存，把state传给服务器，
	//删除地址后，把addrID,传给服务器，
           return{
                headerTitle: '编辑地址',
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
                                                                    );navigate('ReceiveAddr',{type:'edit',

											     }
									      )
		                                                   }}>
                                    <Text style={StyleObject.fontSize}>保存</Text>
                            </TouchableOpacity>
           };
    };
    componentDidMount(){
        const data = this.props.navigation.state.params.data;
        this.setState({
            receiveAddr:data.receiveAddr,
            isDefault:data.isDefault,
            receiveName:data.receiveName,
            receivePhone:data.receivePhone,
            addrId:data.addrId,
        });
    }
    setModalVisible(visible,index){
        if(index){
            this.setState({
                deleteModal : visible,
                deleteIndex : index,
            });
        }else{
            this.setState({
                deleteModal : visible,
            });
        }
    }
    confirmDeleteAddr(){
	this.setModalVisible(false);
	this.props.navigation.navigate('ReceiveAddr',{type:'delete',data:null});
    }
    render(){
        const {params} = this.props.navigation.state;
        const data = params.data;
        return(
            <View style={styles.EditAddr}>
                <View style={StyleObject.flex}>
                    <View style={[StyleObject.flexDirection,styles.EditAddrLayout]}>
                        <View style={StyleObject.center}>  
                            <Text style={[StyleObject.fontSize,{color:'#1d1d1d'}]}>收货人</Text>
                        </View>
                        <View style={[styles.EditAddrTextInput]}>  
                                <TextInput
                                    defaultValue={data.receiveName}
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
                                defaultValue={data.receivePhone}
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
                                defaultValue={data.receiveStreet}
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

                <TouchableOpacity style={StyleObject.pageBottomBtn} onPress={()=>this.setModalVisible(true)}>
                        <Text style={[StyleObject.fontSize,StyleObject.textColor]}>删除地址</Text>
                </TouchableOpacity>

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
                <Modal
                    animationType={'slide'}
                    transparent={true}
                    visible={this.state.deleteModal}
                    onRequestClose={() => { this.setState({ deleteModal: false}); }}
                >
                    <View style={[StyleObject.flex,StyleObject.center,styles.receiveAddrModal]}>
                        <StatusBar
                            translucent={true}
                            backgroundColor='rgba(0,0,0,.5)'
                            barStyle='dark-content'
                        />
                        <View style={styles.receiveAddrModalContainer}>
                            <View style={[StyleObject.center,StyleObject.flex]}>
                                <Text style={StyleObject.fontSize}>确定要删除该地址吗？</Text>
                            </View>
                            <View style={[StyleObject.flexDirection,styles.receiveAddrButton]}>
                                <TouchableOpacity style={[StyleObject.flex,StyleObject.center]} onPress={()=>this.setModalVisible(false)}>
                                    <Text style={[StyleObject.fontSize,StyleObject.active]}>取消</Text>
                                </TouchableOpacity>
                <TouchableOpacity style={[StyleObject.flex,StyleObject.center]} onPress={()=>this.confirmDeleteAddr()}>
                                    <Text style={[StyleObject.fontSize,StyleObject.active]}>确认</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </Modal>
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
    receiveAddrModal:{
        backgroundColor:"rgba(0,0,0,.5)"
    },
    receiveAddrModalContainer:{
        backgroundColor:"#fff",
        width:300,
        height:100,
        borderRadius:10
    },
    receiveAddrButton:{
        height:40,
        borderTopWidth:1/PixelRatio.get(),
        borderColor:'#ddd'
    },
});
