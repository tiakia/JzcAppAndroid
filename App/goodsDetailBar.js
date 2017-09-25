import React,{ Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import StyleObject from './styleSheet.js';

export default class GoodsDetailBar extends Component {
  constructor(props){
    super(props);
    this.state={
        isCollect:false,
    }
  }
  render() {
    return (
    <View style={[StyleObject.tabs,{backgroundColor:'#fff'}]}>
        <TouchableOpacity 
                style={[styles.tabItem,styles.iconBar]}
                onPress={this.props.toIndex}
        >
                <Icon name='ios-home-outline'  size={20}/>
                <Text style={StyleObject.fontSize}> 首页 </Text>
        </TouchableOpacity>
        <TouchableOpacity 
                style={[styles.tabItem,styles.iconBar]}
                onPress={this.props.toCustomerServer}
        >
            <Icon name='ios-keypad'  size={20}/>
            <Text style={StyleObject.fontSize}>客服</Text>
        </TouchableOpacity>
        <TouchableOpacity 
                style={[styles.tabItem,styles.iconBar]}
                onPress={()=>this.setState({isCollect:!this.state.isCollect})}
        >
            {
                this.state.isCollect ? 
                    <View style={StyleObject.center}>
                        <Icon name='ios-star' size={20} color="#FD0841"/>
                    <Text style={[StyleObject.fontSize,StyleObject.activeTextColor]}>已收藏</Text>
                    </View> :
                    <View style={StyleObject.center}>
                        <Icon name='ios-star-outline' size={20}/>
                        <Text style={StyleObject.fontSize}>收藏</Text>
                    </View>
            }
        </TouchableOpacity>
        <TouchableOpacity  style={[styles.goodsDetailBarText,styles.tabItem,styles.textBar]}>
                        <Text style={[{color:'#fff',},StyleObject.fontSize]}>加入购物车</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.goodsDetailBarText,styles.tabItem,styles.textBar]} 
                          onPress={this.props.confirmOrder}
        >
                        <Text style={[{color:'#fff',},StyleObject.fontSize]}>立即购买</Text>
        </TouchableOpacity>
    </View>
    )
  }
}

const styles = StyleSheet.create({
    tabItem:{
         alignItems:'center',
         justifyContent:'center',
    },
    goodsDetailBarText:{
        backgroundColor:'#fd0841',
        flex:1,
    },
    tab:{
        justifyContent: 'center',
        backgroundColor: "#fff",
    },
    textBar:{
        width:120,
    },
    iconBar:{
        paddingTop:5,
        width:55,
    }
});
