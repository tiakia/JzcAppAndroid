import React,{ Component } from 'react';
import {
    StyleSheet,
    PixelRatio,
    Text,
    View,
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import StyleObject from './styleSheet';
/*
  arrowShow             返回按钮是否显示
  arrowBColor           返回按钮颜色
  title                 中间文字是否内容
  rightTitle            右侧文字内容
  titleColor            标题文字颜色
  rightTitleColor       右侧标题文字颜色
  bColor                背景颜色
  type                  Icon 类型
  titleSize,rightTitleSize  中间标题和右侧标题文字大小
*/

class NavIcon extends Component {
    constructor(props){
        super(props);
    }
    render() {
       const { type } = this.props;
        if(this.props.type == 'fullIcon'){
            return(
                <TouchableOpacity style={[StyleObject.fullIcon,]} onPress={this.props.goToBack}>
                    {
                        <Text style={StyleObject.fullIconCenter} >
                          <Icon name='ios-arrow-back' size={25}/>
                        </Text>
                    }
                </TouchableOpacity>
            )
        }else{
            return(
                <TouchableHighlight style={StyleObject.fullIcon} onPress={this.props.goToBack} underlayColor='transparent'>
                    {
                        <Text style={{color : this.props.arrowColor}} >
                          <Icon name='ios-arrow-back' size={25}/>
                        </Text>
                    }
                </TouchableHighlight>
            )
        }
    }
}

class NavSearch extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <TouchableHighlight onPress={this.props.NavSearch} underlayColor='transparent'>
                {
                    <Text>
                      <Icon name='ios-search' size={25}/>
                    </Text>
                }
            </TouchableHighlight>
        )
    }
}

class NavScan extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View>
               {
                   <Text>
                        <Icon name='ios-qr-scanner-outline' size={25}/>
                   </Text>
               }
            </View>
        )
    }
}

class NavCart extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <TouchableOpacity style={StyleObject.fullIcon} onPress={this.props.goToCart}>
               {
                   <Text style={StyleObject.fullIconCenter}>
                        <Icon name='ios-cart-outline' size={20}/>
                   </Text>
               }
            </TouchableOpacity>
        )
    }
}


export default class Nav extends Component {
    constructor(props){
        super(props);
    }
    render() {
       const {arrowShow,arrowBColor,rightTitle,title,titleColor,rightTitleColor,bColor,type} = this.props
       const navType = this.props.type
       if(navType == 'fullIcon'){
            return (
                  <View style={{backgroundColor : this.props.bColor}}>
                     <View style={[StyleObject.nav,StyleObject.flexDirection]}>
                        <View style={StyleObject.navLeft}>
                            {
                                       <NavIcon type={this.props.type} goToBack={this.props.goToBack}/>
                            }
                        </View>
                        <View>
                            <Text style={{color : this.props.titleColor || '#1d1d1d',fontSize: this.props.titleSize || 18  }}>{this.props.title}</Text>
                        </View>
                        <View style={StyleObject.navRight}>
                            {
                                    <NavCart goToCart={this.props.goToCart}/>
                            }
                        </View>
                     </View>
                  </View>
           )
       }else if(navType == 'scan'){
           return (
                 <View style={{backgroundColor : this.props.bColor}}>
                    <View style={[StyleObject.nav,StyleObject.flexDirection]}>
                       <View style={StyleObject.navLeft}>
                             {
                                  <NavSearch NavSearch={this.props.search}/>
                             }
                       </View>
                       <View>
                           <Text style={{color : this.props.titleColor || '#1d1d1d',fontSize: this.props.titleSize || 18  }}>{this.props.title}</Text>
                       </View>
                       <View style={StyleObject.navRight}>
                           {
                                   <NavScan/>
                           }
                       </View>
                    </View>
                 </View>
          )
       }else if(navType == 'normal'){
           return (
                <View style={{backgroundColor : this.props.bColor,
                              }}>
                    <View style={[StyleObject.nav,StyleObject.flexDirection]}>
                       <View style={StyleObject.navLeft}>
                             {
                                  this.props.arrowShow ?
                                  <NavIcon arrowColor={this.props.arrowColor}/>
                                  : null
                             }
                       </View>
                       <View>
                           <Text style={{color : this.props.titleColor || '#1d1d1d',fontSize: this.props.titleSize || 18 }}>{this.props.title}</Text>
                       </View>
                       <View style={StyleObject.navRight}>
                           {
                                   this.props.rightTitle ?
                                     <Text style={{color: this.props.rightTitleColor || '#1d1d1d',fontSize: this.props.rightTitleSize || 14 }}>{this.props.rightTitle}</Text>
                                   : null
                           }
                       </View>
                    </View>
                 </View>
           )
       }
    }
}
