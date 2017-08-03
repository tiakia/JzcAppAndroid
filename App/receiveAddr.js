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
    Modal,
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import StyleObject from './styleSheet';
import Icon from 'react-native-vector-icons/Ionicons';

const Addr = [
    {
        addrId:1,
        receiveName: 'ing',
        receivePhone: '15834029762',
        receiveAddr: '山西省太原市小店区',
        receiveStreet:'晋阳街长治路口天骄科技园8层口fdjsklajfldsfjdsa;fljkdsaf ',
        isDefault: true,
    },
    {
        addrId:2,
        receiveName: '五月天',
        receivePhone: '15834029762',
        receiveAddr: '山西省太原市小店区',
        receiveStreet:'晋阳街长治路口天骄科技园8层',
        isDefault: false,
    },
    {
        addrId:3,
        receiveName: 'linken',
        receivePhone: '15834029762',
        receiveAddr: '山西省太原市小店区',
        receiveStreet:'晋阳街长治路口天骄科技园8层',
        isDefault: false,
    },
];

export default class ReceiveAddr extends Component {
    constructor(props){
        super(props);
        this.renderReceiveAddr = this.renderReceiveAddr.bind(this);
        this.state={
            receiveAddr: Addr,
            modalVisible: false,
            deleteIndex : 0,
        }
        this.changeDefault = this.changeDefault.bind(this);
        this.setModalVisible = this.setModalVisible.bind(this);
        this.deleteAddr = this.deleteAddr.bind(this);
    }
    static navigationOptions = ({navigation}) => {
          const {state,setParams,goBack} = navigation;
          const { type } = state.params;
           return{
                headerTitle: '选择收货地址',
                headerTitleStyle:{alignSelf:'center',justifyContent:'center',fontSize:14,color:'#F4013C'},
                headerStyle:{height:50,paddingTop:20,},
                headerLeft: (
                            <TouchableOpacity onPress={()=>goBack()}>
                                <Icon name='ios-arrow-back' size={25} color='#1d1d1d' style={{marginLeft:10}}/>
                            </TouchableOpacity>
                        ), 
                headerRight: <TouchableOpacity style={{marginRight:10}} onPress={()=>{setParams({type:'manage'})}}>
                                    <Text style={StyleObject.fontSize}>管理</Text>
                            </TouchableOpacity>
           };
    };
    setModalVisible(visible,index){
        if(index){
            this.setState({
                modalVisible : visible,
                deleteIndex : index-1,
            });
        }else{
            this.setState({
                modalVisible : visible,
            });
        }
    }
    changeDefault(idx){
       let newAddr =  this.state.receiveAddr.map((item,index)=>{
            if(item){
                item.isDefault = false;
                if(index == idx) {
                    item.isDefault = true;
                }
            }
            return item;
       });
       this.setState({
           receiveAddr : newAddr,
       });
    }
    deleteAddr(){
        let newAddr = this.state.receiveAddr.map((item,index)=>{
            if(index == this.state.deleteIndex ){
                item = null//要删除的
            }
            return item;
        });
        this.setState({
           receiveAddr : newAddr,
           modalVisible : false,
       });
    }
    renderReceiveAddr(data,idx,type){
       if(data){
           const { navigate } = this.props.navigation;
            return (
                <View key={idx} style={[styles.receiveAddrLayout]}>
                    <View style={[StyleObject.flexDirection,styles.receiveAddrItemTopLayout]}>
                        <View>                                                                                                                          
                            <Text style={StyleObject.fontSize}>{data.receiveName}</Text>
                        </View>
                        <View>
                            <Text style={StyleObject.fontSize}>{data.receivePhone}</Text>
                        </View>
                    </View>
                    <View style={styles.receiveAddrItemBottomLayout}>
                        <Text style={StyleObject.fontSize}>
                            {data.isDefault ? <Text style={[{color:'#F81644'},StyleObject.fontSize]}>[默认地址]</Text> : null}
                            {data.receiveAddr+data.receiveStreet}
                        </Text>
                    </View>
                    { type == 'manage' ?
                         <View style={[StyleObject.flexDirection,styles.receiveAddrItemTopLayout]}>
                            {
                                data.isDefault ?    
                                <View style={styles.receiveAddrFlex}>
                                    <Icon name='ios-checkmark-circle' size={20} color='#FD0744' style={styles.receiveAddrMarginRight}/>
                                    <Text style={StyleObject.fontSize}>默认地址</Text>
                                </View> :
                                <TouchableOpacity style={styles.receiveAddrFlex} onPress={()=>this.changeDefault(idx)}>
                                    <Icon name='ios-radio-button-off-outline' size={20} style={styles.receiveAddrMarginRight}/>
                                    <Text style={StyleObject.fontSize}>设为默认</Text>
                                </TouchableOpacity>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
                            }
                            <View style={styles.receiveAddrFlex}>
                                <TouchableOpacity style={styles.EidtAddr} onPress={()=>navigate('EditAddr',{data:data})}>
                                        <Icon name='ios-create-outline' size={20} style={styles.receiveAddrMarginRight}/>
                                        <Text style={StyleObject.fontSize}>编辑</Text>
                                </TouchableOpacity> 
                                <TouchableOpacity style={styles.receiveAddrFlex} onPress={()=>this.setModalVisible(true,data.addrId)}>
                                        <Icon name='ios-trash-outline' size={20} style={styles.receiveAddrMarginRight} />
                                        <Text style={StyleObject.fontSize}>删除</Text>
                                </TouchableOpacity> 
                            </View>
                        </View>  : null
                    }
                </View>
            )
       }else{
           return  null;
       }
    }
    render(){
        const {navigate,state} = this.props.navigation;
        return(
            <View style={StyleObject.flex}> 
                <ScrollView style={StyleObject.flex}>   
                    {
                        state.params.type =='normal' ? 
                        this.state.receiveAddr.map((data,idx)=>this.renderReceiveAddr(data,idx,"normal")) :
                        this.state.receiveAddr.map((data,idx)=>this.renderReceiveAddr(data,idx,'manage'))
                    } 
                </ScrollView>
                {
                    state.params.type == 'manage' ?
                    <TouchableOpacity style={StyleObject.pageBottomBtn} onPress={()=>navigate('AddNewAddr')}>
                        <Text style={[StyleObject.fontSize,StyleObject.textColor]}>添加新地址</Text>
                    </TouchableOpacity> : null
                }
                <Modal
                    animationType={'slide'}
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => { this.setState({ modalVisible: false}); }}
                >
                    <View style={[StyleObject.flex,StyleObject.center,StyleObject.receiveAddrModal]}>
                        <StatusBar
                            translucent={true}
                            backgroundColor='rgba(0,0,0,.5)'
                            barStyle='dark-content'
                        />
                        <View style={StyleObject.receiveAddrModalContainer}>
                            <View style={[StyleObject.center,StyleObject.flex]}>
                                <Text style={StyleObject.fontSize}>确定要删除该地址吗？</Text>
                            </View>
                            <View style={[StyleObject.flexDirection,StyleObject.receiveAddrButton]}>
                                <TouchableOpacity style={[StyleObject.flex,StyleObject.center]} onPress={()=>this.setModalVisible(false)}>
                                    <Text style={[StyleObject.fontSize,StyleObject.active]}>取消</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[StyleObject.flex,StyleObject.center]} onPress={()=>this.deleteAddr()}>
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

const styles = StyleSheet.create({
    receiveAddrLayout:{
        paddingLeft:15,
        paddingRight:15,
        backgroundColor:"#fff",
        marginBottom:5,
    },
    receiveAddrItemTopLayout:{
        paddingTop:8,
        paddingBottom:8
    },
    receiveAddrFlex:{
        flexDirection:'row'
    },
    receiveAddrItemBottomLayout:{
        paddingBottom:8
    },
    receiveAddrMarginRight:{
        marginRight:5
    },
    EidtAddr:{
        flexDirection:'row',
        marginRight:10,
    },
});