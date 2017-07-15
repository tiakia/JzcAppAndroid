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
  StatusBar,
  Dimensions,
} from 'react-native';
import Nav from './navigator.js';
import StyleObject from './styleSheet';
import Goods from './goods';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MatIcon from 'react-native-vector-icons/MaterialIcons';

const classifyItemData = [
    {
        item:'特选区',
        isActive:true,
    },
    {
        item:'女装',
        isActive:false,
    },
    {
        item:'男装',
        isActive:false,
    },
    {
        item:'男鞋',    
        isActive:false,
    },
    {
        item:'箱包装饰',
        isActive:false,
    },
    {
        item:'内衣',
        isActive:false,
    },
    {
        item:'家用电器',
        isActive:false,
    },
    {
        item:'家具',
        isActive:false,
    },
    {
        item:'美食',
        isActive:false,
    },
];

const classifyData = [
    {
        mainImg:'https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg'
    },
    [
        {
            img:'https://img.alicdn.com/tps/TB1TEOXIpXXXXXAXXXXXXXXXXXX.jpg_125x125Q50s50.jpg_.webp',
            detail:'连衣裙'
        },
        {
            img:'https://img.alicdn.com/tps/TB1bopNIpXXXXXUXVXXXXXXXXXX.jpg_125x125Q50s50.jpg_.webp',
            detail:'衬衫'
        },
        {
            img:'https://img.alicdn.com/tps/TB1ZIxUIpXXXXbgXFXXXXXXXXXX.jpg_125x125Q50s50.jpg_.webp',
            detail:'娃娃装'
        },
        {
            img:'https://img.alicdn.com/tps/TB1Z48_IpXXXXa4XXXXXXXXXXXX.jpg_125x125Q50s50.jpg_.webp',
            detail:'卫衣'
        },
        {
            img:'https://img.alicdn.com/tps/i4/TB1AXECGVXXXXcCXFXXMxXJVFXX-100-100.jpg_125x125Q50s50.jpg_.webp',
            detail:'针织衫'
        },
        {
            img:'https://img.alicdn.com/tps/i1/TB1hOdGHpXXXXXMaXXXMxXJVFXX-100-100.jpg_125x125Q50s50.jpg_.webp',
            detail:'风衣'
        },
        {
            img:'https://img.alicdn.com/tps/TB1pdFMIpXXXXbrXVXXXXXXXXXX.jpg_125x125Q50s50.jpg_.webp',
            detail:'连衣裙'
        },
        {
            img:'https://img.alicdn.com/tps/TB12kxUIpXXXXa7XFXXXXXXXXXX.jpg_125x125Q50s50.jpg_.webp',
            detail:'连衣裙'
        },
        {
            img:'https://img.alicdn.com/tps/TB1XcJKIpXXXXcsXVXXXXXXXXXX.jpg_125x125Q50s50.jpg_.webp',
            detail:'连衣裙'
        },
    ]
];

export default class Classify extends Component {
    constructor(props){
        super(props);
        this.state={
            item:classifyItemData,
            isActive:false,
            classifyData:classifyData,
        }
        this.isActiveItem = this.isActiveItem.bind(this);
        this.isActiveItemText = this.isActiveItemText.bind(this);
        this.toggle = this.toggle.bind(this);
    }
    isActiveItem(data){
      if(data.isActive){
          return styles.activeItem;
      }else{
          return null;
      }
    }
    isActiveItemText(data){
        if(data.isActive){
            return styles.activeItemText;
        }else{
            return null;
        }
    }
    toggle(item){
        //如果点击到item了，请求到新的数据，再设置到state上
        let newArray = this.state.item.map((val,idx)=>{
            if(idx == item ) {
                val.isActive = true;
            }else{
                val.isActive = false;
            }
            return val;
        });
        this.setState({
            item:newArray
        })
    }
    render(){
      return(
          <ScrollView style={{backgroundColor:'#fff'}}>
            <View style={[StyleObject.flexDirection,]}>
                <ClassifyItem item = {this.state.item} 
                                isActiveItem={ this.isActiveItem }
                                isActiveItemText={ this.isActiveItemText }
                                toggle={this.toggle}/>
                <View style={[StyleObject.flex]}>
                        <ClassifyDetail classifyData={this.state.classifyData}/>
                </View>
            </View>
        </ScrollView>
      )
    }
}


class ClassifyItem extends Component {
  constructor(props) {
      super(props);
      this.RenderItem = this.RenderItem.bind(this);
      const { item } = props
      this.state={
          item : props.item,
      }
  }
  RenderItem(data,idx){
      return(
        <TouchableOpacity style={[styles.classifyItem,StyleObject.center,this.props.isActiveItem(data)]}
            onPress={()=>{this.props.toggle(idx)}}
            key={idx}
        >
            <Text style={[StyleObject.fontSize,this.props.isActiveItemText(data)]}>{data.item}</Text>
        </TouchableOpacity>
      )
  }
  render(){
    return(
          <View>
            {
                this.state.item.map((data,idx)=>this.RenderItem(data,idx))
            }
          </View>
    )
  }
}

class ClassifyDetail extends Component{
    constructor(props){
        super(props);
        const { classifyData } = props
        this.state={
            classifyData:props.classifyData
        }
        this.RenderItem = this.RenderItem.bind(this);
    }
    RenderItem(data,idx){
        return (
            <View key={idx} style={[StyleObject.center,styles.classifyDataItem]}>
                <Image source={{uri:data.img}}
                        style={{width:80,height:80,marginBottom:8}}
                />
                <Text style={StyleObject.fontSize}>{data.detail}</Text>
            </View>
        )
    }
    render(){
        return(
            <View style={StyleObject.flex}>
                <View style={styles.classifyHeadImg}>
                    <Image source={{uri:this.state.classifyData[0].mainImg}}
                        style={{width:Dimensions.get('window').width-110,height:100}}
                    />
                </View>
                <View style={styles.classifyData}>
                    {
                        this.state.classifyData[1].map((val,idx)=>this.RenderItem(val,idx))
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    classifyItem:{
        width:100,
        paddingTop:15,
        paddingBottom:15,
        borderBottomWidth:1/PixelRatio.get(),
        borderBottomColor:'#ddd',
    },
    activeItem:{
        borderLeftWidth:3,
        borderColor:'#FB0741',
    },
    activeItemText:{
        color:'#FB0741',
    },
    classifyHeadImg:{
        height:150,
        marginBottom:10,
        alignItems:'center',
        justifyContent:'center',
        marginRight:10,
    },
    classifyData:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between'
    },
    classifyDataItem:{
        width:"33%",
        marginBottom:15,
    }
});