import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    PixelRatio,
    ScrollView,
    Image,
    StatusBar,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import StyleObject from './styleSheet';
import Icon from 'react-native-vector-icons/Ionicons';

export default class EleCoupons extends Component {
    constructor(props){
        super(props);
    }
    static navigationOptions = ({navigation})=>({
        headerTitle: '电子券',
		headerTitleStyle:{alignSelf:'center',justifyContent:'center',fontSize:14},
        headerStyle:{height:50,paddingTop:20,},
        headerLeft: (
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Icon name='ios-arrow-back' size={25} color='#1d1d1d' style={{marginLeft:10}}/>
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
                    <View style={[StyleObject.center,StyleObject.UserCommenSubLayout,styles.eleTop]}>
                        <Image source={require('./../images/head.jpg')}  style={[StyleObject.center,styles.eleImage]}/>
                        <Text  style={[styles.eleDetailTextTop,StyleObject.UserCommenMarginBottom]}>电子券(张)</Text>
                        <Text  style={[styles.eleDetailTextBottom]}>6666</Text>
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
                   <View style={StyleObject.UserCommenTitle}>
                        <Text style={StyleObject.fontSize}>消费明细</Text>
                   </View>
                    <View style={StyleObject.flex}>
                        <ScrollView
                                showsVerticalScrollIndicator={false}	 
                        >
                                <View style={[StyleObject.flexDirection,StyleObject.UserCommenItem]}>
                                    <View style={[StyleObject.UserCommenItemTop]}>
                                        <Text style={StyleObject.UserCommenText}>转给朋友</Text>
                                        <Text style={StyleObject.fontSize}>2017-05-16</Text>
                                    </View>
                                    <View style={StyleObject.center}>
                                        <Text style={styles.eleDetailNum}>-66</Text>
                                    </View>
                                </View>
                        </ScrollView>
                    </View>
                   <View style={[StyleObject.flexDirection,StyleObject.UserCommenBottom]}>
                       <TouchableOpacity style={[StyleObject.UserCommenBottomCommen,StyleObject.UserCommenBottomRight]}>
                            <Text style={{color:'#fff'}}>电子券消费</Text>
                       </TouchableOpacity> 
                   </View>
               </View> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    eleTop:{
        backgroundColor:'#fff',
        borderBottomWidth:1/PixelRatio.get(),
        borderColor:'#ddd',
    },
    eleImage:{
        width:80,
        height:80,
        marginTop:20,
        marginBottom:20
    },
    eleDetailTextTop:{
        color:'#1d1d1d',
        fontSize:15,
    },
    eleDetailTextBottom:{
        fontSize:22,
        color:'#1d1d1d'
    },
    eleDetailNum:{
        color:'#1d1d1d',
    }
});