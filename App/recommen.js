import React,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  TouchableHighlight,
} from 'react-native';

import StyleObject from './styleSheet';
import Goods from './goods';

class IndexNavBar extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={StyleObject.flexDirection}>
                <View style={[StyleObject.flexDirection,{alignItems:'flex-end'}]}>
                    <Text style={[{marginRight:5,},StyleObject.fontSize]}>{this.props.leftTitle}</Text>
                    <Text style={StyleObject.fontSize}>{this.props.middleTitle}</Text>
                </View>
                <View>
                    <Text style={StyleObject.fontSize}>{this.props.rightTitle}</Text>
                </View>
            </View>
        )
    }
}

class  Brand extends Component {
    constructor(props){
        super(props);
        this.state={
            brand : props.brand
        }
        this.renderBrand = this.renderBrand.bind(this);
    }
    renderBrand(data,idx){
        return(
            <View style={styles.brand} key={idx}>
                <Image source={{uri:data.img}} style={{width:"100%",height:100}}/>
                <Text style={[{marginTop:5,},StyleObject.fontSize]}>{data.brandName}</Text>
            </View>
        )
    }
    render(){
        return(
            <View style={styles.brandContainer}>
                {
                   this.state.brand.map((data,idx)=>this.renderBrand(data,idx))
                }
            </View>
        )
    }
}

export default class Recommen extends Component{
    constructor(props){
        super(props);
        const { goodsItemData,goodsData,brand } = props;
        this.state={
            goodsItemData:props.goodsItemData,
            goodsData:props.goodsData,
            brand:props.brand,
        }
    }
    // goodsDetail={this.props.goodsDetail}
    render(){
        return(
            <View style={[StyleObject.indexLayout,]}
            >
                {
                    this.props.type == 'recommen' ? 
                    <View>
                        <IndexNavBar 
                            leftTitle='推荐' 
                            middleTitle='Recommended' 
                            rightTitle='查看更多'
                        />
                        <View style={{marginTop:10}}>
                            <Goods goodsData={this.state.goodsItemData} navigation={this.props.navigation}/>
                        </View>
                    </View> : this.props.type == 'brand' ? 
                    <View>
                        <IndexNavBar 
                            leftTitle='品牌' 
                            middleTitle='Brand' 
                            rightTitle='查看更多'
                        />
                        <View style={{marginTop:10}}>
                            <Brand brand={this.state.brand}/>
                        </View>
                    </View> : this.props.type == 'goods' ?
                     <View>
                        <IndexNavBar 
                            leftTitle='热销' 
                            middleTitle='Hot Sale' 
                            rightTitle='查看更多'
                        />
                        <View style={{marginTop:10}}>
                            <Goods type="goods" goodsData={this.state.goodsData} navigation={this.props.navigation}/>
                        </View>
                    </View> : null

                }
            </View>
        )
    }
}

const styles={
    brandContainer:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-around',
    },
    brand:{
        width:"30%",
        alignItems:'center',
        marginBottom:10,
        marginLeft:5,
        marginRight:5,
    }
}