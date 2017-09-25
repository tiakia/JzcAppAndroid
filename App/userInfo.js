import React,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  Picker,
  PixelRatio,
  Modal,
  DatePickerAndroid,
  TouchableOpacity,
} from 'react-native';
import StyleObject from './styleSheet.js';
import Tab from './tab';
import Nav from './navigator';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackNavigator } from 'react-navigation';

export default class UserInfo extends Component {
      constructor(props){
           super(props);
           this.state={
              modalVisible: false,
              sex: '保密',
              type: '',
              birthDay: '2017/7/13',
           }
           this.closeModal = this.closeModal.bind(this);
           this.setModal = this.setModal.bind(this);
           this.toggleSex = this.toggleSex.bind(this);
           this.openDatePicker = this.openDatePicker.bind(this);
      }
      static navigationOptions = ({navigation})=> ({
          headerTitle: '用户信息',
          headerTitleStyle:{alignSelf:'center',justifyContent:'center',fontSize:12},
          headerStyle:{height:50,paddingTop:20},
          headerLeft: (
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Icon name='ios-arrow-back' size={25} color='#1d1d1d' style={{marginLeft:10}}/>
                    </TouchableOpacity>
                     ),
          headerRight:<View style={{width:20}}></View>,
      })
      closeModal(){
          this.setState({
              modalVisible: false
          });
      }
      setModal(visible){
          this.setState({
              modalVisible: visible
          });
      }
      toggleSex(data){
          this.setState({
              sex: data,
          });
         this.closeModal();
      }
     async openDatePicker(){
          try {
                const {action, year, month, day} = await DatePickerAndroid.open({
                    date: new Date(),
                    mode: "spinner",
                });
                if (action !== DatePickerAndroid.dismissedAction) {
                    // 这里开始可以处理用户选好的年月日三个参数：year, month (0-11), day
                    // this.setStata({birthDay: DatePickerAndroid.dateSetAction()});
                    var date = new Date(year,month,day);
                    var year = date.getFullYear() ;
                    var month = date.getMonth() +1 ;
                    var day = date.getDate() ;
                    var formatedStr = year + '/' + month +'/' + day ;
                    this.setState({
                        birthDay: formatedStr,
                    });
                }
          } catch ({code, message}) {
                console.warn('Cannot open date picker', message);
          } 
      }
      render(){
          const { navigate } = this.props.navigation;
        return (
                <View style={{paddingTop:10,paddingLeft:15,paddingRight:15,backgroundColor:'#fff',flex:1,}}>
                    <TouchableOpacity style={StyleObject.tabItemLine}>
                        <Tab
                            barType='tabBar'
                            iconLeftTitle='头像'
                            rightTab = {true}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={StyleObject.tabItemLine}>
                        <Tab
                            barType='tabBar'
                            iconLeftTitle='用户名称'
                            rightTab = {true}
                            title='China Cannon'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={StyleObject.tabItemLine} onPress={()=>{this.setModal(true);this.setState({modalType:'sexSel'})}}>
                        <Tab
                            barType='tabBar'
                            iconLeftTitle='性别'
                            rightTab = {true}
                            title= {this.state.sex}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={StyleObject.tabItemLine} onPress={()=>{this.openDatePicker()}}>
                        <Tab
                           barType='tabBar'
                           iconLeftTitle='出生日期'
                           rightTab = {true}
                           title={this.state.birthDay}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={StyleObject.tabItemLine} onPress={()=>navigate('RealName')}>
                        <Tab
                            barType='tabBar'
                            iconLeftTitle='实名认证'
                            rightTab = {true}
                            title='立即认证'
                        />
                    </TouchableOpacity>
                    <PickerModal 
                        modalVisible={this.state.modalVisible} 
                        closeModal={this.closeModal}
                        toggleSex={this.toggleSex}
                        type={this.state.modalType}
                    />  
                </View>
        )
      }
}

class PickerModal extends Component {
    constructor(props){
        super(props);
        this.state={
            modalVisible: props.modalVisible || false,
        }
    }
    componentWillReceiveProps(nextProps,nextState){
        this.setState({ modalVisible: nextProps.modalVisible,})
    }
    render(){
        return(
                <Modal
                  animationType={'slide'}
                  visible={this.state.modalVisible}
                  transparent={true}
                  onRequestClose={()=>{this.setState({ modalVisible : false})}}
              >
                  <StatusBar
                        backgroundColor='rgba(0,0,0,0.5)'
                        barStyle='dark-content'
                  />
                  <View style={styles.UserInfoModal}>
                        <View style={[styles.UserinfomodalContainer]}>
                            {
                                this.props.type == 'sexSel' ?
                                <View>
                                    <View style={styles.UserInfoModalTop}>
                                      <View style={[styles.UserInfoModalTopTitle,StyleObject.center]}>
                                          <Text>性别选择</Text>
                                      </View>
                                      <TouchableOpacity style={[styles.UserInfoModalItem,StyleObject.center]}
                                                        onPress={()=>this.props.toggleSex('男')}
                                      >
                                          <Text>男</Text>
                                      </TouchableOpacity>
                                      <TouchableOpacity style={[StyleObject.center]}
                                                        onPress={()=>this.props.toggleSex('女')}
                                      >
                                          <Text style={styles.sexSelLine}>女</Text>
                                      </TouchableOpacity>
                                      <TouchableOpacity  style={[styles.UserInfoModalItem,StyleObject.center]}
                                                         onPress={()=>this.props.toggleSex('保密')}
                                      >
                                          <Text>保密</Text>
                                      </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity  style={[styles.UserInfoModalButton,StyleObject.center]}
                                                        onPress={this.props.closeModal}
                                    >
                                            <Text style={{color:'#fff'}}>取消</Text>
                                    </TouchableOpacity>
                                </View> : this.props.type == 'dateSel' ? 
                                <View>
                                    <View style={styles.UserInfoModalTop}>
                                        
                                    </View>
                                    <View style={StyleObject.flexDirection}>
                                        <TouchableOpacity  style={[styles.UserInfoDateButton,StyleObject.center]}
                                                        onPress={this.props.closeModal}
                                        >
                                                <Text style={{color:'#fff'}}>取消</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={[StyleObject.center,styles.UserInfoDateButton]}>
                                                <Text style={{color:'#fff'}}>确定</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View> : null
                            }
                        </View>
                  </View>
              </Modal>
        )
    }
}

const styles = StyleSheet.create({
     UserInfoModal:{
         flex:1,
         backgroundColor:'rgba(0,0,0,.5)',
         paddingLeft:10,
         paddingRight:10,
         justifyContent:"flex-end"
   },
   UserInfoModalTop:{
        marginBottom:5,
        backgroundColor:'#fff',
        borderRadius:8,
   },
   UserInfoModalTopTitle:{
       width:'100%',
       backgroundColor:'#f4f4f4',
       paddingTop:10,
       paddingBottom:10,
       borderTopLeftRadius:8,
       borderTopRightRadius:8,
   },
   UserInfoModalItem:{
        width:'100%',
        paddingTop:15,
        paddingBottom:15,
   },
   UserInfoModalButton:{
        paddingTop:10,
        paddingBottom:10,
        borderRadius:10,
        backgroundColor:"#fd0841",
        marginBottom:5,
   },
   sexSelLine:{
        borderTopWidth:1,
        borderBottomWidth:1,
        paddingTop:10,
        paddingBottom:10,
        borderColor:'#fd0841',
        width:25,
        textAlign:'center',
   },
    UserInfoDateButton:{
        flex:1,
        paddingTop:10,
        paddingBottom:10,
        borderRadius:10,
        backgroundColor:"#fd0841",
        marginBottom:5,
        marginLeft:5,
        marginRight:5,
    },
});
