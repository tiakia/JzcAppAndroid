import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import StyleObject from './styleSheet';
/*
    barType   tabBar ， barDetail 个人中心 我的资产，barSup 待收货,userMoney 我的钱包里的bar && 账户安全 && 资金管理
    icon   图标名字
    iconColor 图标颜色
    title   bar 中间的文字
    titleSize
    rightTab 文字在做还是在右
    img      中间是图片
    iconLeftTitle
    iconRightTitle 右侧图标位置是文字 或 图标侧又文字(见我的钱包账户余额),
    iconRigthTitleSize 
    tabHeight tab的高度
    iconSize 图标的大小
    titleRight 紧挨着tab title的文字，见我的钱包账户余额
    titleRightSize
    titleRightColor
*/
class Tab extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { barType, icon, iconColor, title, img, iconLeftTitle, iconRightTitle, rightTab } = this.props;
        const type = this.props.barType;
        if (type == 'tabBar') {
            return (
              <View style={[StyleObject.flexDirection, { height: 40, alignItems: 'center' }]}>
                    {this.props.icon ?
                        <Icon name={this.props.icon} color={this.props.iconColor} size={25} /> :
                        <Text style={StyleObject.fontSize}>{this.props.iconLeftTitle}</Text>
                    }
                    <View style={this.props.rightTab ? styles.tabBarRight : styles.tabBarLeft}>
                        {this.props.title ?
                            <Text style={StyleObject.fontSize}>{this.props.title}</Text> :
                            <Image source={require('./../images/head.jpg')}
                                style={{
                                    height: 40,
                                    width: 40,
                                    borderRadius: 50,
                                }}
                            />
                        }
                    </View>
                    {
                        this.props.iconRightTitle ?
                            <Text style={StyleObject.fontSize}>{this.props.iconRightTitle}</Text> :
                            <Icon name='ios-arrow-forward' size={25} />
                    }
                </View>
            )
        } else if (type == 'barDetail') {
            return (
                <View style={[styles.tabItem, { height: 70 }]}>
                    <Icon name={this.props.icon} color={this.props.iconColor} size={this.props.iconSize} />
                    <Text style={[StyleObject.fontSize,styles.number]}>{this.props.subTitle}</Text>
                    <Text style={StyleObject.fontSize}>{this.props.title}</Text>
                </View>
            )
        } else if (type == 'barSup') {
            return (
                <View style={styles.tabItem}>
                    <Icon name={this.props.icon} color={this.props.iconColor} size={this.props.iconSize} />
                    {
                        this.props.subTitle ?
                            <Text style={[styles.supNum,{fontSize:6}]}>{this.props.subTitle}</Text> :
                            null
                    }
                    <Text style={StyleObject.fontSize}>{this.props.title}</Text>
                </View>
            )
        }else if(type == 'userMoney') {
            return (
                <View style={[StyleObject.flexDirection, { height:this.props.tabHeight, 
                                                           alignItems: 'center',
                                                           backgroundColor:'#fff',
                                                           paddingLeft:10,
                                                           paddingRight:10,
                                                        }]}>
                    {this.props.icon ?
                        <Icon name={this.props.icon} color={this.props.iconColor} size={this.props.iconSize||25 } /> :
                        <Text style={StyleObject.fontSize}>{this.props.iconLeftTitle}</Text>
                    }
                    <View style={this.props.rightTab ? styles.tabBarRight : this.props.titleRight ? styles.tabBarTitleRight : styles.tabBarLeft}>
                            <Text style={{fontSize: this.props.titleSize || 12}}>{this.props.title}</Text>
                            {
                                this.props.titleRight ? 
                                    <Text style={{fontSize: this.props.titleRightSize || 12,color: this.props.titleRightColor || '#1d1d1d',marginLeft:15}}>{this.props.titleRight}</Text> :
                                    null
                            }
                    </View>
                    {
                        this.props.iconRightTitle ?
                            <Text style={{marginRight:8,fontSize:this.props.iconRightTitleSize || 12}}>{this.props.iconRightTitle}</Text> :
                            null
                    }
                    <Icon name='ios-arrow-forward' size={25} />
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    tabItem: {
        height: 50,
        width: 70,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    number: {
        color: '#FD6270',
        fontSize: 12
    },
    supNum: {
        lineHeight: 9,
        textAlign: 'center',
        width:10,
        height: 10,
        color: '#fff',
        borderRadius:20,
        backgroundColor: '#FD6270',
        fontSize: 5,
        position: 'absolute',
        top: 8,
        right:20,
        fontWeight: 'bold'
    },
    tabBarLeft: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: 15
    },
    tabBarTitleRight:{
        flex: 1,
        flexDirection:'row',
        alignItems: 'center',
        marginLeft: 15
    },
    tabBarRight: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginRight: 15
    },
});

export default Tab;
