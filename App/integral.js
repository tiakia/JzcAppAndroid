import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    PixelRatio,
    ScrollView,
    StatusBar,
    Image,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import StyleObject from './styleSheet';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Interail extends Component {
    constructor(props){
        super(props);
    }
    static navigationOptions = ({navigation})=>({
        headerTitle: '积分',
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
                    <View style={[StyleObject.center,StyleObject.UserCommenSubLayout,styles.integralTop]}>
                        <Image source={require('./../images/head.jpg')}  style={[StyleObject.center,styles.integralImage]}>
                            <Text  style={[StyleObject.textColor,StyleObject.fontSize,StyleObject.UserCommenMarginBottom]}>可用积分</Text>
                            <Text  style={[StyleObject.textColor,styles.integralDetailTextBottom]}>6666个</Text>
                        </Image>
                    </View>
                    <View style={[StyleObject.flexDirection,StyleObject.UserCommenSupLayout,StyleObject.UserCommenTop]}>
                        <View style={[StyleObject.UserCommenTopLeft,StyleObject.flex]}>
                            <Text style={StyleObject.UserCommenMarginBottom}>可用积分(个)</Text>
                            <Text style={[StyleObject.UserCommenTopText]}>6000.00</Text>
                        </View>
                        <View style={StyleObject.UserCommenSplitLine}></View>
                        <View style={[StyleObject.UserCommenTopRight,StyleObject.flex]}>
                            <Text style={StyleObject.UserCommenMarginBottom}>冻结积分(个)</Text>
                            <Text style={[StyleObject.UserCommenTopText]}>666.00</Text>
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
                                        <Text style={StyleObject.UserCommenText}>转账至零钱</Text>
                                        <Text style={StyleObject.fontSize}>2017-05-16</Text>
                                    </View>
                                    <View style={StyleObject.center}>
                                        <Text style={{color:"#1d1d1d"}}>-66</Text>
                                    </View>
                                </View>
                        </ScrollView>
                    </View>
                   <View style={[StyleObject.flexDirection,StyleObject.UserCommenBottom]}>
                       <TouchableOpacity style={[StyleObject.UserCommenBottomCommen,StyleObject.UserCommenBottomLeft]}>
                            <Text style={{color:'#1d1d1d'}}>积分赠送</Text>
                       </TouchableOpacity> 
                       <TouchableOpacity style={[StyleObject.UserCommenBottomCommen,StyleObject.UserCommenBottomRight]}>
                            <Text style={styles.integralDetailNum}>积分消费</Text>
                       </TouchableOpacity> 
                   </View>
               </View> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    integralTop:{
        backgroundColor:'#fff2e2'
    },
    integralImage:{
        width:100,
        height:100,
        marginTop:25,
        marginBottom:25
    },
    integralDetailTextBottom:{fontSize:22},
    integralDetailNum:{color:"#fff"},
});