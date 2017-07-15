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
    render(){
        return(
            <View>
                <View style={[StyleObject.flex,StyleObject.flexDirection,styles.HotSaleTabText]}>
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
                        <TouchableOpacity style={[StyleObject.flexDirection,StyleObject.center]} onPress={()=>{this.setState({currentTab:4})}}>
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
                <View>
                    {
                        this.state.show ?
                            <Goods type='goods' goodsData={goodsData}/> :
                            <Goods type='goodsListView' goodsData={goodsData} />
                    }
                </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    HotSaleContainer:{
        flexDirection:'row',
        justifyContent:"space-around",
        height:30,
        alignItems:'center',
    },
    HotSaleTabView:{
        alignItems:'center',
        justifyContent:'center',
        borderLeftWidth:1/PixelRatio.get(),
        paddingLeft:15,
        paddingRight:15,
        borderColor:'#ddd',
    },
    HotSaleTabText:{
        paddingTop:10,
        marginBottom:10,
        borderTopWidth:PixelRatio.get(),
        borderColor:'#ddd'
    },
});