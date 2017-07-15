import React,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import StyleObject from './styleSheet';

const lucky = [
    {
        img:'https://img.alicdn.com/bao/uploaded/i3/TB1gzs5RXXXXXalXVXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg',
        detail:'美肌护肤套装',
        discount:'惊喜折扣价¥88',
    },
     {
        img:'https://img.alicdn.com/bao/uploaded/i3/TB1gzs5RXXXXXalXVXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg',
        detail:'美肌护肤套装',
        discount:'惊喜折扣价¥88',
    },
     {
        img:'https://img.alicdn.com/bao/uploaded/i3/TB1gzs5RXXXXXalXVXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg',
        detail:'美肌护肤套装',
        discount:'惊喜折扣价¥88',
    },
     {
        img:'https://img.alicdn.com/bao/uploaded/i3/TB1gzs5RXXXXXalXVXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg',
        detail:'美肌护肤套装',
        discount:'惊喜折扣价¥88',
    },
];

export default class Lucky extends Component {
    constructor(props){
        super(props);
        this.renderLucky = this.renderLucky.bind(this);
        this.state={
            Lucky:lucky
        }
    }
    renderLucky(data,index){
        return (
            <View style={[StyleObject.center,styles.luckyGoods]} key={index}>
                <View style={[StyleObject.center,styles.luckyImgCon]}>
                    <Image source={{uri:data.img}}
                        style={{width:80,height:80}}
                    />
                </View>
                <View style={StyleObject.center}>
                    <Text style={styles.luckyDes}>{data.detail}</Text>
                </View>
                <View style={[styles.luckyDesText,StyleObject.center]}>
                    <Text style={[StyleObject.textColor,{fontSize:10}]}>{data.discount}</Text>
                </View>
            </View>
        )
    }
    render(){
        return(
            <View style={[StyleObject.indexLayout,]}>
                <View style={styles.luckyTitle}>
                    <Text style={styles.luckySubTitle}>小仙女专享的小幸运</Text>
                    <Text style={styles.luckSupTitle}>EXCLUSIVE SMALL LUCKY</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                    {
                        this.state.Lucky.map((item,index)=>this.renderLucky(item,index))
                    }
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    luckyTitle:{
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10
    },
    luckySubTitle:{
        color:'#E7267E',
    },
    luckSupTitle:{
        color:'#ED5885',
        fontSize:12,
    },
    luckyGoods:{
        backgroundColor:'#FFEAF3',
        marginRight:2,
    },
    luckyImgCon: {
        margin:10,
        marginBottom:5
    },
    luckyDes:{
        color:'#A19CA2',
        fontSize:10,
    },
    luckyDesText:{
        backgroundColor:'#F50A43',
        borderRadius:5,
        marginTop:2,
        width:"100%",
        padding:2
    },
});