import React,{ Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    PixelRatio,
    StyleSheet,
    Image,
    ToastAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {StackNavigator} from 'react-navigation';
import StyleObject from './styleSheet';
import { OrderButton } from './order.js';
import { SwipeRow } from 'react-native-swipe-list-view';

export default class ShopCollect extends Component{
    constructor(props){
	super(props);
    }
    static navigationOptions = ({navigation})=>{
	const {navigate,goBack} = navigation;
	return {
	    headerTitle: '商品收藏',
	    headerTitleStyle:{alignSelf:'center',justifyContent:'center',fontSize:14,color:'#fd0841'},
	    headerStyle:{height:50,paddingTop:20},
	    headerLeft:(
		    <TouchableOpacity onPress={()=>goBack()}>
		    <Icon color='#1d1d1d' name='ios-arrow-back' size={25} style={{marginLeft:10}} />
		    </TouchableOpacity>
	    ),
	    headerRight:(
		    <View style={{width:20}}></View>
	    )
	}
    };
    render(){
	return(
	    
		<View style={{flex:1}}>
		<View style={{paddingLeft:10,paddingTop:5,paddingBottom:5}}>
		<Text style={[StyleObject.fontSize,StyleObject.normalColor]}>1个月以内</Text>
	             </View>
	 	
		<SwipeRow
	    rightOpenValue={-75}
	    disableRightSwipe={true}
		>
                 <TouchableOpacity onPress={()=>{ToastAndroid.show('删除成功',ToastAndroid.SHORT)}}  style={{
		     flex:1,
		     alignItems:'center',
		     backgroundColor:"#FD0744",
		     flexDirection:'row',
		     padding:20,
		     justifyContent:'flex-end',
		 }}>
		 <View>
		 <Text style={[StyleObject.fontSize,StyleObject.textColor]}>删除</Text>
		 </View>
		 </TouchableOpacity>

                <View style={[{backgroundColor:"#fff"}]}>
                <View style={[StyleObject.flexRow,{paddingTop:5,paddingBottom:5,paddingLeft:10}]}>
                             <Text style={[StyleObject.fontSize,StyleObject.normalColor,{marginRight:8}]}>Armani阿玛尼</Text>   
                             <Icon name='ios-arrow-forward' size={15} />
                         </View> 
                <View style={[StyleObject.flexRow,StyleObject.orderDetail,{marginTop:0,}]}>
                             <View >
                                  <Image source={{uri:'https://img.alicdn.com/imgextra/i3/2653351646/TB2mDWnq5RnpuFjSZFCXXX2DXXa_!!2653351646.jpg_430x430q90.jpg'}}
                                        style={{height:100,width:100,marginRight:5,}}
                                  />
                             </View>
                <View style={{flex:1,justifyContent:'space-between'}}>
                                               <Text style={[StyleObject.normalColor,StyleObject.fontSize,{lineHeight:22}]}
                                      numberOfLines= {2}
                                >
                                   MC欧美女装 V领连衣裤超显瘦女神气质系带压褶短袖阔腿连体裤女
                           </Text>
	        <View style={[StyleObject.flexDirection,{marginBottom:5}]}>
		<Text style={[StyleObject.fontSize,StyleObject.normalColor]}>
		              小兔价：
		<Text style={[StyleObject.fontSize,StyleObject.activeTextColor]}>¥999</Text>
                          </Text>
		<Text style={[StyleObject.fontSize]}>
		             累计评论：
		            <Text>558</Text>
	                </Text>
                     </View>
                 </View>
                 </View>
                    <View style={{
			justifyContent:'flex-end',
	                borderBottomWidth:1/PixelRatio.get(),
			paddingTop:5,
			paddingBottom:3,
			borderColor:'#ddd',
			flexDirection:'row'
                    }}>
                <OrderButton
	    type='collect'
	    title='已收藏'
		/>
                <OrderButton
	    title='付款'
	    handlePress={()=>alert('正在跳转。。。')}
	    isActive={true}
		/>
                    </View>
		</View>
		</SwipeRow>
	        </View>
	)
    }
}
