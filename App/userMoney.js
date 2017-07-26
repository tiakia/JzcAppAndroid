import React,{Component } from 'react';
import { 
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	StatusBar,
	Picker,
	PixelRatio,
	Modal,
	TouchableOpacity,
    ScrollView,
    Button,
} from 'react-native';
import StyleObject from './styleSheet.js';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Tab from './tab';

export default class UserMoney extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    static navigationOptions =({navigation})=> ({
		headerTitle: '我的钱包',
		headerTitleStyle:{alignSelf:'center',justifyContent:'center',fontSize:14,color:'#fff'},
        headerStyle:{height:50,paddingTop:20,backgroundColor:'#FD0744'},
        headerLeft: (
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Icon name='ios-arrow-back' size={25} color='#fff' style={{marginLeft:10}}/>
                    </TouchableOpacity>
                   ), 
        headerRight: <TouchableOpacity style={{marginRight:10}}>
                            <Text style={StyleObject.textColor}>账单</Text>
                     </TouchableOpacity>
	});
    render(){
        return (
            <View style={[StyleObject.flex,{paddingTop:10}]}>
                <StatusBar
                    barStyle='light-content'
                />
                <TouchableOpacity style={{paddingBottom:10}}
                    onPress={()=>this.props.navigation.navigate('UserAccount')}
                >
                    <Tab
                        barType = 'userMoney'
                        icon = 'ios-people'
                        iconColor = '#F9A703'
                        iconSize={40}
                        title = '全部订单'
                        titleSize = {20}
                        iconRightTitleSize={20}
                        tabHeight={80}
                        titleRight='¥66.66'
                        titleRightSize={20}
                        titleRightColor='red'
                    />
                </TouchableOpacity>
                <View style={{paddingBottom:10}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Integral')}>
                        <Tab
                            barType = 'userMoney'
                            icon = 'ios-people'
                            iconColor = '#F85A38'
                            iconSize={25}
                            title='积分'
                            tabHeight={40}
                            titleSize={12}
                            iconRightTitle='66个'

                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('EleCoupons')}>
                        <Tab
                            barType = 'userMoney'
                            icon = 'ios-people'
                            iconColor = '#F85A38'
                            iconSize={25}
                            title='电子券'
                            tabHeight={40}
                            titleSize={12}
                            iconRightTitle='66个'

                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('GiftBag')}>
                        <Tab
                            barType = 'userMoney'
                            icon = 'ios-people'
                            iconColor = '#F85A38'
                            iconSize={25}
                            title='礼包'
                            tabHeight={40}
                            titleSize={12}
                            iconRightTitle='66个'

                        />
                    </TouchableOpacity>
                </View>
                <View style={{paddingBottom:10}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Swfunds')}>
                        <Tab
                            barType = 'userMoney'
                            icon = 'ios-people'
                            iconColor = '#F85A38'
                            iconSize={25}
                            title='财富基金'
                            tabHeight={40}
                            titleSize={12}
                            iconRightTitle='¥66'

                        />  
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('ReCharge')}>
                        <Tab
                            barType = 'userMoney'
                            icon = 'ios-people'
                            iconColor = '#F85A38'
                            iconSize={25}
                            title='重复消费'
                            tabHeight={40}
                            titleSize={12}
                            iconRightTitle='¥66'

                        />
                    </TouchableOpacity>
                </View>
                 <TouchableOpacity style={{paddingBottom:10}} onPress={()=>this.props.navigation.navigate('SmallChange')}>
                    <Tab
                        barType = 'userMoney'
                        icon = 'ios-people'
                        iconColor = '#F85A38'
                        iconSize={25}
                        title='零钱'
                        tabHeight={40}
                        titleSize={12}
                        iconRightTitle='¥66'

                    />
                </TouchableOpacity>
            </View>
        )
    }
}