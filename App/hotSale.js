import React,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  PixelRatio,
} from 'react-native';

import StyleObject from './styleSheet';
import Goods from './goods';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import IosIcon from 'react-native-vector-icons/Ionicons';
import {StackNavigator} from 'react-navigation';

const goodsData = [
    {
        img:'https://img.alicdn.com/bao/uploaded/i3/TB1gzs5RXXXXXalXVXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg',
        detailText:'皮肤补水站-温和修护，璀璨焕白',
        price:'¥ 320',
        num:50,
    },
    {
        img:'https://img.alicdn.com/bao/uploaded/i3/TB1un0JQFXXXXcUXVXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg',
        detailText:'皮肤补水站-温和修护，璀璨焕白',
        price:'¥ 320',
        num:50,
    },
    {
        img:'https://img.alicdn.com/bao/uploaded/i2/TB1zDSDRFXXXXXqXFXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg',
        detailText:'皮肤补水站-温和修护，璀璨焕白',
        price:'¥ 320',
        num:50,
    },
    {
        img:'https://img.alicdn.com/bao/uploaded/i8/TB1vLcbQXXXXXakXpXXYXGcGpXX_M2.SS2_430x430q90.jpg',
        detailText:'皮肤补水站-温和修护，璀璨焕白',
        price:'¥ 320',
        num:50,
    },
    {
        img:'https://img.alicdn.com/bao/uploaded/i3/TB1HavXSXXXXXXzXXXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg',
        detailText:'皮肤补水站-温和修护，璀璨焕白',
        price:'¥ 320',
        num:50,
    },
];

export default class HotSale extends Component {
    constructor(props){
        super(props);
        this.state={
            show:true,
            currentTab:1,
        }
    }
    static navigationOptions = ({navigation}) => {
	const {navigate,goBack} = navigation;
	return {
	    headerTitle: '热销',
	    headerTitleStyle:{alignSelf:'center',justifyContent:'center',fontSize:12,},
	    headerStyle:{height:50,paddingTop:20},
	    headerLeft:(  <TouchableOpacity onPress={()=>goBack()}>
                        <IosIcon name='ios-arrow-back' size={25} color='#1d1d1d' style={{marginLeft:10}}/>
			  </TouchableOpacity>
		       ),
	    headerRight:(
		    <View style={{width:20}}>

		    </View>
	    )
	}
    }
    render(){
        return(
		<View style={{backgroundColor:'#fff',flex:1}}>
                   <View style={[StyleObject.flexRow,styles.HotSaleTabText]}>
                    <View style={[StyleObject.flex,styles.HotSaleContainer,]}>
                        <TouchableOpacity onPress={()=>{this.setState({currentTab:1})}}>
                            <Text style={this.state.currentTab == 1 ? [StyleObject.activeTextColor] : null}>最新</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{this.setState({currentTab:2})}}>
                            <Text style={this.state.currentTab == 2 ? [StyleObject.activeTextColor] : null}>销量</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{this.setState({currentTab:3})}}>
                            <Text style={this.state.currentTab == 3 ? [StyleObject.activeTextColor] : null}>信用</Text>
                        </TouchableOpacity>
                <TouchableOpacity style={[StyleObject.flexRow,StyleObject.center,]} onPress={()=>{this.setState({currentTab:4})}}>
                            <Text style={this.state.currentTab == 4 ? [StyleObject.activeTextColor] : null}>价格</Text>
                            <MatIcon name='unfold-more' size={15} color={this.state.currentTab == 4 ? '#F80C49' : null}/>
                </TouchableOpacity>
		 </View> 

	                <TouchableOpacity style={styles.HotSaleTabView}
                                      onPress={()=>{this.setState({show:!this.state.show})}}
                        >
                          {
                             this.state.show ?
                              <Icon name='view-list' size={30}/> :
                              <Icon name='view-grid' size={30}/>
                          }
                        </TouchableOpacity>
                    
                  </View>
                <ScrollView style={StyleObject.flex}>
                    {
                        this.state.show ?
                            <Goods type='goods' goodsData={goodsData} navigation={this.props.navigation}/> :
                            <Goods type='goodsListView' goodsData={goodsData} navigation={this.props.navigation}/>
                    }
                </ScrollView>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    HotSaleContainer:{
        flexDirection:'row',
        justifyContent:"space-between",
        height:30,
        alignItems:'center',
	paddingLeft:15,
	paddingRight:15,
    },
    HotSaleTabView:{
        alignItems:'center',
        justifyContent:'center',
        borderLeftWidth:1/PixelRatio.get(),
        borderColor:'#ddd',
	paddingLeft:10,
	paddingRight:15,
    },
    HotSaleTabText:{
        paddingTop:10,
        borderTopWidth:PixelRatio.get(),
        borderColor:'#ddd'
    },
});
