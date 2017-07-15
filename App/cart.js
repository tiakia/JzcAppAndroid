import React,{ Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  PixelRatio,
  FlatList,
  ScrollView,
  Dimensions,
  StatusBar,
} from 'react-native';
import StyleObject from './styleSheet.js';
import Nav from './navigator';
import Icon from 'react-native-vector-icons/Ionicons';

class SelectTextBar extends Component {
    constructor(props){
        super(props);
        const { check } = props;
        this.state = {
            isChecked : props.check,
        }
    }
    componentWillReceiveProps(nextProps,nextState){
        this.setState({
            isChecked : nextProps.check,
        });
    }
    render(){
        // console.log(this.state.isChecked);
        return(
           <TouchableOpacity onPress={this.props.onChange} style={{marginLeft:10,marginRight:10,}}>
                <View>
                    {
                        this.state.isChecked ?
                             <Icon name='ios-checkmark-circle' size={25} color='#FD0744'/> :
                             <Icon name='ios-radio-button-off-outline' size={25}/>

                    }
                </View>
           </TouchableOpacity>
        )
    }
}

class CartSelectBar extends Component {
    constructor(props){
        super(props);
        const { check,allPrice } = props;
        this.state={
            isChecked:props.check,
            allPrice: props.allPrice,
        }
    }
    componentWillReceiveProps(nextProps,nextState){
        this.setState({
            isChecked : nextProps.check,
            allPrice:nextProps.allPrice,
        });
    }
    render(){
        return(
            <View style={[StyleObject.flexDirection,StyleObject.card]}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <SelectTextBar 
                                check={this.state.isChecked}
                                onChange={this.props.selectAll}
                    />
                </View>
                <View style={{alignItems:'center',justifyContent:'center'}}>
                    <Text>合计：<Text style={{color:'#FD0744'}}>{"¥ "+(this.state.allPrice || 0)}</Text></Text>
                    <Text style={[StyleObject.fontSize,{color:'#999'}]}>不含运费及优惠</Text>
                </View>
                <TouchableOpacity style={[StyleObject.center,styles.btnText]}>
                    <View>
                        <Text style={[StyleObject.fontSize,StyleObject.textColor]}>
                            {this.props.btnText}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

class ShopNum extends Component {
    constructor(props){
        super(props);
        const { buyNum,goodsId } = props;
        this.state = {
            num:props.buyNum,
            goodsId:props.goodsId,
        };
    }
    componentWillReceiveProps(nextProps,nextState){
        this.setState({
            num:nextProps.buyNum
        });
    }
    render(){
        return (
            <View style={StyleObject.cartShopNum}>
                <TouchableOpacity style={StyleObject.button}
                                  onPress={()=>this.props.reduce(this.state.goodsId)}
                >
                    {this.state.num >1 ?
                     <Icon name='ios-remove' size={20} color='#000'/> :
                     <Icon name='ios-remove' size={20} color='#ddd'/>
                    }
                </TouchableOpacity>
                <TextInput value={this.state.num+''}
                           style={StyleObject.cartInput}
                           underlineColorAndroid='transparent'
                           multiline = {true}
                />
                <TouchableOpacity
                    style={StyleObject.button}
                    onPress={()=>this.props.add(this.state.goodsId)}
                >
                    {this.props.maxNum == 0 ?
                     <Icon name='ios-add' size={20} color='#ddd'/> :
                     <Icon name='ios-add' size={20} color='#000'/>
                    }
                </TouchableOpacity>
            </View>
        )
    }
}

const goods = [
    {
        img:'https://img.alicdn.com/imgextra/i3/2653351646/TB2mDWnq5RnpuFjSZFCXXX2DXXa_!!2653351646.jpg_430x430q90.jpg',
        goodsText:'卡姿兰口红专柜正品丝绸美型唇膏唇彩保湿滋润持久不易掉色彩妆',
        goodsAttr:'颜色',
        goodsDetail:'优雅红',
        price:'¥ 320',
        maxNum:4,
        isChecked:true,
        buyNum:1,
        id:1,
    },
    {
        img:'https://img.alicdn.com/imgextra/i3/2653351646/TB2mDWnq5RnpuFjSZFCXXX2DXXa_!!2653351646.jpg_430x430q90.jpg',
        goodsText:'卡姿兰口红专柜正品丝绸美型唇膏唇彩保湿滋润持久不易掉色彩妆',
        goodsAttr:'颜色',
        goodsDetail:'优雅红',
        price:'¥ 320',
        maxNum:4,
        isChecked:true,
        buyNum:1,
        id:2,
    },
    {
        img:'https://img.alicdn.com/imgextra/i3/2653351646/TB2mDWnq5RnpuFjSZFCXXX2DXXa_!!2653351646.jpg_430x430q90.jpg',
        goodsText:'卡姿兰口红专柜正品丝绸美型唇膏唇彩保湿滋润持久不易掉色彩妆',
        goodsAttr:'颜色',
        goodsDetail:'优雅红',
        price:'¥ 320',
        maxNum:9,
        isChecked:false,
        buyNum:1,
        id:3,
    },
    {
        img:'https://img.alicdn.com/imgextra/i3/2653351646/TB2mDWnq5RnpuFjSZFCXXX2DXXa_!!2653351646.jpg_430x430q90.jpg',
        goodsText:'卡姿兰口红专柜正品丝绸美型唇膏唇彩保湿滋润持久不易掉色彩妆',
        goodsAttr:'颜色',
        goodsDetail:'优雅红',
        price:'¥ 320',
        maxNum:9,
        isChecked:false,
        buyNum:1,
        id:4,
    },
    {
        img:'https://img.alicdn.com/imgextra/i3/2653351646/TB2mDWnq5RnpuFjSZFCXXX2DXXa_!!2653351646.jpg_430x430q90.jpg',
        goodsText:'卡姿兰口红专柜正品丝绸美型唇膏唇彩保湿滋润持久不易掉色彩妆',
        goodsAttr:'颜色',
        goodsDetail:'优雅红',
        price:'¥ 320',
        maxNum:9,
        isChecked:false,
        buyNum:1,
        id:5,
    },
    {
        img:'https://img.alicdn.com/imgextra/i3/2653351646/TB2mDWnq5RnpuFjSZFCXXX2DXXa_!!2653351646.jpg_430x430q90.jpg',
        goodsText:'卡姿兰口红专柜正品丝绸美型唇膏唇彩保湿滋润持久不易掉色彩妆',
        goodsAttr:'颜色',
        goodsDetail:'优雅红',
        price:'¥ 320',
        maxNum:9,
        isChecked:false,
        buyNum:1,
        id:6,
    }, 
];
class GoodOrder extends Component {
    constructor(props){
        super(props);
        this.RenderGoodsDetail = this.RenderGoodsDetail.bind(this);
        this.selectAll = this.selectAll.bind(this);
        this.selectOne = this.selectOne.bind(this);
        this.allPrice = this.allPrice.bind(this);
        this.add = this.add.bind(this);
        this.reduce = this.reduce.bind(this);
        this.state = ({
            goods:goods,
            allPrice:null,
            goodsId:null,
            buyNum:1,
        });
    }
    selectAll(){//全选
        let allCheck = this.state.goods.every( val=>{
                return val.isChecked
        });
        let newGoods = this.state.goods.map((val,idx)=>{
                val.isChecked  = !allCheck
                return val;
        })
        this.setState({
            goods: newGoods,
        });
        this.allPrice();
    }
    selectOne(idx){//单选
        let newGoods = this.state.goods.map((item,index)=>{
            if(index == idx ){
                item.isChecked = !item.isChecked;
            }
            return item;
        });
        this.setState({
            goods:newGoods,
        });
        this.allPrice();
    }
    allPrice(){
        var price = null;
        this.state.goods.map((val,idx)=>{
            let bool = val.isChecked;
            if(bool){
                price += parseFloat(val.price.split("¥")[1] * val.buyNum) ;
            }

        });
        this.setState({
            allPrice:price,
        });
    }
    add(goodsId){
        let newGoods = this.state.goods.map((val,idx)=>{
            if(val.maxNum>0 && val.id == goodsId ){
                val.isChecked = true;
                val.buyNum +=1;
                val.maxNum -=1;
            }
            return val;
        });
        this.setState({
            goods:newGoods,
        });
       //  console.log(newGoods);
        this.allPrice();
    }
    reduce(goodsId){
        let newGoods = this.state.goods.map((val,idx)=>{
            if( val.buyNum>1 && val.id == goodsId){
                val.isChecked = true;
                val.buyNum -=1;
                val.maxNum +=1;
            }
            return val;
        });
        this.setState({
            goods:newGoods,
        });
       // console.log(newGoods);
        this.allPrice();
    }
    RenderGoodsDetail(val,idx){
        return (
             <View key={idx} style={{paddingTop:2}}>
                <View style={[StyleObject.flexDirection,styles.cartItem]}>
                    <View>
                        <SelectTextBar
                           check={val.isChecked}
                           onChange={()=>{ this.selectOne(idx) }}
                        />
                    </View>
                    <View style={styles.cartItemImage}>
                        <Image source={{uri:val.img}}
                            style={{width:100,height:100}}
                        />
                    </View>
                    <View style={StyleObject.flex}>
                        <View>
                            <Text style={[{lineHeight:25,},StyleObject.fontSize]}>{val.goodsText}</Text>
                        </View>
                        <View style={styles.cartItemGoodIntro}>
                            <Text style={StyleObject.fontSize}>{val.goodsAttr}<Text>{val.goodsDetail}</Text></Text>
                        </View>
                        <View style={[StyleObject.flexDirection]}>
                            <View style={{marginTop:3}}>
                                <Text style={[StyleObject.activeTextColor,styles.cartItemsGoodsPri,StyleObject.fontSize]}>{val.price}</Text>
                            </View>
                            <View>
                                <ShopNum maxNum={val.maxNum}
                                         buyNum={val.buyNum}
                                         goodsId={val.id}
                                         add={this.add}
                                         reduce={this.reduce}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
    componentDidMount(){
        this.allPrice();
    }
    render(){
        return(
            <View style={{flex:1}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                            this.state.goods.map((val,idx)=> this.RenderGoodsDetail(val,idx))
                    }
                </ScrollView>
                <CartSelectBar selectText='全选' btnText='去结算'  allPrice={this.state.allPrice}
                    selectAll={this.selectAll}
                    check={this.state.goods.every((val,idx)=>{
                        return val.isChecked
                    })}
                />
            </View>
        )
    }
}

export default class Cart extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={{flex:1}}>
                <GoodOrder/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    btnText:{
        width:100,
        backgroundColor:'#FD0744',
        marginRight:-16
    },
    cartItem:{
        alignItems:'center',
        padding:5,
        backgroundColor:'#fff',
    },
    cartItemImage:{
        marginRight:8,
        borderWidth:1/PixelRatio.get(),
        borderColor:'#ddd'
    },
    cartItemGoodIntro: {
        marginTop:10,
        marginBottom:10
    },
    cartItemsGoodsPri:{
        fontSize:12,
    }
});