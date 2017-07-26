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
} from 'react-native';
import StyleObject from './styleSheet';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackNavigator } from 'react-navigation';
import Tab from './tab';

export default class FundsManage extends Component {
	constructor(props){
		super(props);
	}
	static navigationOptions =({navigation})=> ({
		headerTitle: '资金管理',
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
                        iconLeftTitle = '资金概况'
                        tabHeight={40}
                    />
                </TouchableOpacity>
                    <TouchableOpacity style={StyleObject.tabItemLine} onPress={()=>this.props.navigation.navigate('Integral')}>
                         <Tab
                            barType = 'userMoney'
                            iconLeftTitle = '收支明细'
                            tabHeight={40}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={StyleObject.tabItemLine}>
                        <Tab
                            barType = 'userMoney'
                            iconLeftTitle = '账户充值'
                            tabHeight={40}
                            iconRightTitleSize={12}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={StyleObject.tabItemLine}>
                        <Tab
                            barType = 'userMoney'
                            iconLeftTitle = '提现管理'
                            tabHeight={40}
                            iconRightTitleSize={12}
                        />
					</TouchableOpacity>
					<TouchableOpacity style={StyleObject.tabItemLine}>
                        <Tab
                            barType = 'userMoney'
                            iconLeftTitle = '银行卡管理'
                            tabHeight={40}
                            iconRightTitleSize={12}
                        />
                    </TouchableOpacity>
            </View>
        )
    }
}
