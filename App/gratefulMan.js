import React,{Component} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    PixelRatio,
    StyleSheet,
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import StyleObject from './styleSheet';
import Icon from 'react-native-vector-icons/Ionicons';



export default class GratefulMan extends Component {
    constructor(props){
        super(props);
        this.state={
            isCorrect: false, //手机号格式是否正确
            gratefulManPhone:null,
        }
        this.validate = this.validate.bind(this);
    }
    static navigationOptions = ({navigation})=>{
        const {state,setParams} = navigation;
        const { gratefulMan } = state.params;
       return { 
            headerTitle: '感恩人',
            headerTitleStyle:{alignSelf:'center',justifyContent:'center',fontSize:14,color:'#1d1d1d'},
            headerStyle:{height:50,paddingTop:20,},
            headerLeft: (
                        <TouchableOpacity onPress={()=>navigation.goBack()}>
                            <Icon name='ios-arrow-back' size={25} color='#1d1d1d' style={{marginLeft:10}}/>
                        </TouchableOpacity>
                    ), 
            headerRight: <TouchableOpacity style={{marginRight:10}} onPress={()=>{ gratefulMan[0]=='noOne'?setParams({gratefulMan:['addOne']}):null}}>
                                <Text style={StyleObject.active}>添加</Text>
                        </TouchableOpacity>
       }
    };
    validate(data) {
        let reg = /^1[3|4|5|7|8][0-9]{9}$/;
        let tel = Number(data);
        if (data.length == 11) {
            if (reg.test(tel)) {
                data = data.replace(/(\d{3})(\d{4})(\d{4})/ig,'$1 **** $3');
                this.setState({
                    isCorrect: true,
                    gratefulManPhone:data,
                });
            }
        } else {
            this.setState({
                isCorrect: false,
            });
        }
    }
    render(){
        const {params} = this.props.navigation.state;
        return(
            <View>
                {
                    params.gratefulMan[0] == 'noOne' ?
                    <TouchableOpacity style={styles.noGratefulMan} onPress={this.isShow}>
                        <Text style={StyleObject.fontSize}>您还没有感恩人，请添加</Text>
                    </TouchableOpacity> : params.gratefulMan[0] == 'addOne' ?
                    <View style={{alignItems:'center'}}>
                        <View style={styles.addGratefulMan}>
                            <Text style={[StyleObject.fontSize,{color:'#1d1d1d'}]}>添加感恩人</Text>
                            <View style={styles.gratefulManInput}>
                                <TextInput
                                    style={{padding:0,fontSize:12}}
                                    multiline = {true}
                                    underlineColorAndroid="transparent"
                                    placeholder='感恩人手机号'
                                    placeholderTextColor='#ddd'
                                    onChangeText={(data) => this.validate(data)}
                                />
                            </View>
                            <TouchableOpacity style={this.state.isCorrect ? [styles.gratefulManConfrim,styles.gratefulManConfirmActive] : [styles.gratefulManConfrim]} 
                                              disabled={!this.state.isCorrect}
                                              onPress={()=>{this.props.navigation.setParams({gratefulMan:['haveOne']})}}
                            >
                                <Text style={StyleObject.textColor}>确定</Text>
                            </TouchableOpacity>
                        </View>
                    </View> : params.gratefulMan[0] == 'haveOne' ?
                    <View style={styles.gratefulManResult}>
                        <View>
                            <Text style={[{color:'#1d1d1d'},StyleObject.fontSize]}>手机号</Text>
                        </View>
                        <View>
                            <Text style={StyleObject.fontSize}>{this.state.gratefulManPhone}</Text>
                        </View>
                    </View> : null

                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    noGratefulMan:{
        paddingLeft:20,
        marginTop:25,
    },
    addGratefulMan:{
        marginTop:100,
        paddingTop:15,
        paddingBottom:25,
        paddingLeft:10,
        paddingRight:10,
        borderRadius:10,
        backgroundColor:'#fff',
        alignItems:"center",
    },
    gratefulManInput:{
        borderColor:'#FD0744',
        borderRadius:5,
        paddingLeft:10,
        borderWidth:1/PixelRatio.get(),
        marginTop:15,
        marginBottom:15,
        width:200,
    },
    gratefulManConfrim:{
        borderRadius:5,
        width:200,
        backgroundColor:'#DCD2D1',
        paddingTop:5,
        paddingBottom:5,
        alignItems:'center',
    },
    gratefulManConfirmActive:{
         backgroundColor:'#fd0744',
    },
    gratefulManResult:{
        backgroundColor:'#fff',
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:10,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingRight:10,
        marginTop:10,
    }
});