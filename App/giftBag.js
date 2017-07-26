import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    StatusBar,
    Text,
    TouchableOpacity,
    PixelRatio,
    ScrollView,
    Image,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import StyleObject from './styleSheet';
import Icon from 'react-native-vector-icons/Ionicons';

export default class GiftBag extends Component {
    constructor(props){
        super(props);
    }
    static navigationOptions = ({navigation})=>({
        headerTitle: '礼包',
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
                    <View style={[StyleObject.center,StyleObject.UserCommenSubLayout,styles.giftTop]}>
                        <Image source={require('./../images/head.jpg')}  style={[StyleObject.center,styles.giftImage]}/>
                        <Text style={styles.giftDetailText}>
                            你当前共有    

                            <Text style={styles.giftDetailNum}>19</Text>
                            
                            个礼包
                        </Text>
                    </View>
                    <View style={styles.giftTop}>
                            <Text style={StyleObject.fontSize}>再获得一个礼包，即可免费旅游一次</Text>
                    </View>
               </View>
               <View style={StyleObject.flex}>
                   <View style={StyleObject.UserCommenTitle}>
                        <Text style={[StyleObject.fontSize,{color:'#1d1d1d'}]}>兑换记录</Text>
                   </View>
                    <View style={StyleObject.flex}>
                        <ScrollView
                                showsVerticalScrollIndicator={false}	 
                        >
                                <View style={[StyleObject.flexDirection,StyleObject.UserCommenItem]}>
                                    <View style={[StyleObject.UserCommenItemTop]}>
                                        <Text style={StyleObject.fontSize}>2017-05-16</Text>
                                        <Text style={styles.giftListText}>旅游消费</Text>
                                    </View>
                                    <View style={StyleObject.center}>
                                        <Text style={styles.giftListNum}>-20</Text>
                                    </View>
                                </View>
                        </ScrollView>
                    </View>
                   <View style={[StyleObject.flexDirection,StyleObject.UserCommenBottom]}>
                       <TouchableOpacity style={[StyleObject.UserCommenBottomCommen,StyleObject.UserCommenBottomRight]}>
                            <Text style={{color:'#fff'}}>获得更多礼包</Text>
                       </TouchableOpacity> 
                   </View>
               </View> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    giftTop:{
        backgroundColor:'#fff',
        borderBottomWidth:1/PixelRatio.get(),
        borderColor:'#ddd',
    },
    giftImage:{
        width:80,
        height:80,
        marginTop:20,
        marginBottom:20
    },
    giftDetailTextTop:{
        color:'#1d1d1d',
        fontSize:15,
    },
    giftTop:{
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:15,
        backgroundColor:'#f2f2f2',
    },
    giftDetailText:{
        fontSize:15,
        color:'#1d1d1d'
    },
    giftDetailNum:{
        color:'#7d0171',
        fontSize:22,
        marginLeft:15,
        marginRight:15,
    },
    giftListText:{
        color:'#1d1d1d',
        marginTop:10,
    },
    giftListNum:{
        color:'#1d1d1d',
        fontSize:15,
    }
});