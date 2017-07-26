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

export default class AccountSafe extends Component {
    constructor(props){
        super(props);
    }
    static navigationOptions =({navigation})=> ({
		headerTitle: '账户安全',
		headerTitleStyle:{alignSelf:'center',justifyContent:'center',fontSize:14,color:'#1d1d1d'},
        headerStyle:{height:50,paddingTop:20,},
        headerLeft: (
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Icon name='ios-arrow-back' size={25} color='#1d1d1d' style={{marginLeft:10}}/>
                    </TouchableOpacity>
                   ), 
    });
    render(){
        return(
            <View style={[StyleObject.flex]}>
                <TouchableOpacity style={StyleObject.tabItemLine}>
                    <Tab
                        barType = 'userMoney'
                        iconLeftTitle = '登录密码'
                        tabHeight={40}
                    />
                </TouchableOpacity>
                    <TouchableOpacity style={StyleObject.tabItemLine} onPress={()=>this.props.navigation.navigate('Integral')}>
                         <Tab
                            barType = 'userMoney'
                            iconLeftTitle = '支付密码'
                            tabHeight={40}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={StyleObject.tabItemLine}>
                        <Tab
                            barType = 'userMoney'
                            iconLeftTitle = '邮箱验证'
                            tabHeight={40}
                            iconRightTitle='未验证'
                            iconRightTitleSize={12}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={StyleObject.tabItemLine}>
                        <Tab
                            barType = 'userMoney'
                            iconLeftTitle = '手机验证'
                            tabHeight={40}
                            iconRightTitle='未验证'
                            iconRightTitleSize={12}
                        />
                    </TouchableOpacity>
            </View>
        )
    }
}