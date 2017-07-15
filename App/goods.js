import React,{ Component } from 'react';
import {
    Image,
    Text,
    View,
    StyleSheet,
    PixelRatio,
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native';
import StyleObject from './styleSheet.js';
import { StackNavigator,TabNavigator } from 'react-navigation';

export default class Goods extends Component {
    constructor(props){
        super(props);
        const { goodsData } = props;
        this.state={
            goodsData:props.goodsData,
        }
        this.renderGoods = this.renderGoods.bind(this);
    }
    renderGoods(data,idx){
        return (
            <TouchableOpacity style={styles.goodsItem} key={idx} 
                                onPress={()=>this.props.navigation.navigate('GoodsDetail',{info:data.detailText})} 
            >
                <View >
                    {
                        this.props.type == 'goods' ?
                        <Image source={{uri:data.img}}
                                                   style={{height:200,width:'100%'}}
                                            /> :
                        <Image source={{uri:data.img}}
                                                   style={{height:120,width:'100%'}}
                                            />
                    }
                </View>

                <View style={styles.goodsDec}>
                    <Text numberOfLines={2} style={StyleObject.fontSize}>
                        {data.detailText}
                    </Text>
                </View>

                {
                    this.props.type == 'goods' ?
                    <View style={[StyleObject.flexDirection,styles.goodsPri]}>
                        <View>
                            <Text style={[StyleObject.activeTextColor,StyleObject.fontSize]}>{data.price}</Text>
                        </View>
                        <View>
                            <Text style={[{color:'#ADADAD'},StyleObject.fontSize]}>{data.num}人已付款</Text>
                        </View>
                    </View> :
                    null
                }
            </TouchableOpacity>
        )
    }
    renderGoodsListView(data,idx){
        return (
            <View style={styles.goodsListViewItem} key={idx}>
                <View style={styles.goodsListImg}>
                    <Image source={{uri:data.img}}
                            style={{height:120,width:220}}
                    />
                </View>

                <View style={styles.goodsListDetail}>
                    <View style={[styles.goodsDec,]}>
                        <Text numberOfLines={2}>
                            {data.detailText}
                        </Text>
                    </View>
                    <View style={[StyleObject.flexDirection,styles.goodsPri,]}>
                        <View>
                            <Text style={StyleObject.activeTextColor}>{data.price}</Text>
                        </View>
                        <View>
                            <Text style={{color:'#ADADAD'}}>{data.num}人已付款</Text>
                        </View>
                    </View> 
                </View>
            </View>
        )
    }
    render(){
        return(
            <View style={this.props.type == 'goodsListView' ? styles.goodsListContainer : styles.goodsItemsContainer} >
                              
                {
                    this.props.type == 'goodsListView' ?
                    this.state.goodsData.map((data,idx)=>this.renderGoodsListView(data,idx)) :
                    this.state.goodsData.map((data,idx)=>this.renderGoods(data,idx))
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    goodsItemsContainer:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        paddingLeft:10,
        justifyContent:'space-between',
    },
    goodsListContainer:{
    },
    goodsItem:{
        width:'47%',
        marginRight:10,
        marginBottom:10,
    },
    goodsDec:{
        marginTop:8,
        marginBottom:8
    },
    goodsPri:{
        paddingRight:15,
    },
    goodsListDetail:{
        justifyContent:'space-between',
        borderBottomWidth:1/PixelRatio.get(),
        paddingBottom:15,
        borderBottomColor:'#ddd',
        flex:1,
    },
    goodsListViewItem:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginBottom:15,
    },
    goodsListImg:{
        marginLeft:15,
        marginRight:15
    }
});