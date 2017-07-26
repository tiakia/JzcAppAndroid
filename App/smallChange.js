import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    PixelRatio,
    StatusBar,
    ScrollView,
    Image,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import StyleObject from './styleSheet';
import Icon from 'react-native-vector-icons/Ionicons';

export default class SmallChange extends Component {
    constructor(props){
        super(props);
    }
    static navigationOptions = ({navigation})=>({
        headerTitle: '零钱',
		headerTitleStyle:{alignSelf:'center',justifyContent:'center',fontSize:14},
        headerStyle:{height:50,paddingTop:20,paddingRight:15,},
        headerLeft: (
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Icon name='ios-arrow-back' size={25} color='#1d1d1d' style={{marginLeft:10}}/>
                    </TouchableOpacity>
                   ), 
        headerRight: (
                    <TouchableOpacity >
                        <Text style={{color:'#c5c5c5'}}>明细</Text>
                    </TouchableOpacity>
                   ), 
    });
    render(){
        return(
           <View style={[StyleObject.flex]}>
                <StatusBar
                    barStyle='dark-content'
                />
               <View>
                    <View style={[StyleObject.center,StyleObject.UserCommenSubLayout,styles.smallChangeTop]}>
                        <Image source={require('./../images/head.jpg')}  style={[StyleObject.center,styles.smallChangeImage]}/>
                        <Text  style={[styles.smallChangeDetailTextTop,StyleObject.UserCommenMarginBottom]}>零钱总额(元)</Text>
                        <Text  style={[styles.smallChangeDetailTextBottom]}>+666.66</Text>
                    </View>
                    <View style={[StyleObject.flexDirection,StyleObject.UserCommenSupLayout,StyleObject.UserCommenTop]}>
                        <View style={[StyleObject.UserCommenTopLeft,StyleObject.flex]}>
                            <Text style={StyleObject.UserCommenMarginBottom}>可用电子券(张)</Text>
                            <Text style={[StyleObject.UserCommenTopText]}>6000.00</Text>
                        </View>
                        <View style={StyleObject.UserCommenSplitLine}></View>
                        <View style={[StyleObject.UserCommenTopRight,StyleObject.flex]}>
                            <Text style={StyleObject.UserCommenMarginBottom}>冻结电子券(张)</Text>
                            <Text style={[StyleObject.UserCommenTopText]}>666</Text>
                        </View>
                    </View>
               </View>
               <View style={StyleObject.flex}>
                    <TouchableOpacity style={[styles.smallChangeBottomCommen,styles.smallChangeWithDrawBtn]}>
                        <Text style={styles.smallChangeWithDraw}>体现</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity style={[styles.smallChangeBottomCommen,styles.smallChangeRechargeBtn]}>
                        <Text style={styles.smallChangeRecharge}>充值</Text>
                    </TouchableOpacity> 
               </View> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    smallChangeTop:{
        backgroundColor:'#fff',
        borderBottomWidth:1/PixelRatio.get(),
        borderColor:'#ddd',
    },
    smallChangeImage:{
        width:80,
        height:80,
        marginTop:20,
        marginBottom:20
    },
    smallChangeDetailTextTop:{
        color:'#c9c9c9',
        fontSize:13,
    },
    smallChangeDetailTextBottom:{
        fontSize:25,
        color:'#da1117'
    },
    smallChangeDetailNum:{
        color:'#1d1d1d',
    },
    smallChangeBottomCommen:{
        height:35,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        marginTop:20,
        marginLeft:15,
        marginRight:15,
    },
    smallChangeWithDraw:{
        color:'#1d1d1d',
        fontSize:12
    },
    smallChangeRecharge:{
        color:'#fff',
        fontSize:12,
    },
    smallChangeWithDrawBtn:{
        backgroundColor:'#fff',
    },
    smallChangeRechargeBtn:{
        backgroundColor:'#fd0841',
    },
});