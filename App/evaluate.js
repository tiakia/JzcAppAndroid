import React,{ Component } from 'React';
import {
    Image,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    FlatList,
    PixelRatio,
    StyleSheet,
    TextInput,
    ToastAndroid,
} from 'react-native';
import StyleObject from './styleSheet.js';
import Icon from 'react-native-vector-icons/Ionicons';
import FlowerIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {StackNavigator,TabNavigator } from 'react-navigation';

export default class Evaluate extends Component {
    constructor(props){
        super(props);
        this.state={
	    isChecked:false,
        }
	this.changeCheck = this.changeCheck.bind(this); 
    }
    static navigationOptions=({navigation})=>({
        headerTitle:'发表评价',				
        headerTitleStyle:{alignSelf:'center',justifyContent:'center',fontSize:14,color:'#F4013C'},
        headerStyle:{height:50,paddingTop:20,},
        headerLeft: (
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Icon name='ios-arrow-back' size={25} color='#1d1d1d' style={{marginLeft:10}}/>
                </TouchableOpacity>
        ), 
        headerRight:(
		<TouchableOpacity style={{width:40}} onPress={()=>ToastAndroid.show('发布成功',ToastAndroid.SHORT)}>
                <Text style={[StyleObject.fontSize]}>发布</Text>
		</TouchableOpacity>
        ),
    });
    changeCheck(){
	this.setState({
	    isChecked : !this.state.isChecked,
	})
    }
    render(){
        return(
		<View style={StyleObject.flex}>
                <View style={{backgroundColor:'#fff'}}>
                <View  style={[StyleObject.flexRow,styles.evaluteContainer]}>
                <Image source={require('./../images/head.jpg')}
            style={{width:35,height:35}}
                />
                <Text style={[StyleObject.fontSize,StyleObject.normalColor,styles.evaluateText]}>描述相符</Text>
                <View>
		<StarIcon selIcon={0} maxIcon={5} isShowText={true}/>
                </View>
		
            
            </View>
                <View style={[styles.evaluateTextInput,{justifyContent:'space-between',
						       }]}>
                <TextInput
            placeholder="宝贝满足你的期待吗？说说它的优点和美中不足的地方吧"
            style={{padding:0,}}
            underlineColorAndroid="transparent"
            numberOfLines={4}
            multiline={true}
                />
		<TouchableOpacity style={[styles.evaluateTakePhoto,StyleObject.center]}>
                <Icon name='ios-camera-outline' size={40}/>
                <Text style={[StyleObject.fontSize]}>添加图片</Text>
                </TouchableOpacity>
                </View>
                <View style={[styles.evaluateNoName,StyleObject.flexDirection]}>
                <TouchableOpacity style={[StyleObject.flexRow,StyleObject.center]} onPress={()=>this.changeCheck()}>
                {
               	    this.state.isChecked ?
                        <Icon name='ios-checkmark-circle' size={25} color='#FD0744'/> :
                        <Icon name='ios-radio-button-off-outline' size={25}/>

                }
 	        <Text style={[StyleObject.fontSize,StyleObject.normalColor,{marginLeft:10}]}>匿名</Text>
                </TouchableOpacity>
                <Text style={[StyleObject.fontSize]}>
                你写的评价会以匿名的形式展现
	    </Text>
                </View>
		</View>
		<View style={[styles.flowerContainer,StyleObject.flexRow,]}>
                <View style={styles.flowerIcon}>
                <FlowerIcon name='flower' size={25} color="#FD0346"/>
                </View>
                <View>
                <Text style={[StyleObject.fontSize,StyleObject.normalColor]}>
	        对小兔其他评价
            </Text>
	        <View style={[StyleObject.flexRow,styles.evaluateOther]}>
   		<Text style={[StyleObject.fontSize]}>物流服务</Text>
                <View style={StyleObject.flexRow}>
		<StarIcon selIcon={0} maxIcon={5}/>
	        </View>
	        </View>
		<View style={[StyleObject.flexRow,styles.evaluateOther]}>
		<Text style={[StyleObject.fontSize]}>服务态度</Text>
                <View style={StyleObject.flexRow}>
                <StarIcon selIcon={0} maxIcon={5}/>
                </View>
	        </View>	

	    </View>
	        </View>
		</View>
        )
    }
}

class StarIcon extends Component {
    constructor(props){
	super(props);
	const { selIcon,maxIcon } = props;
	this.state={
	    selIcon: props.selIcon || 0,
	    maxIcon: props.maxIcon || 5,
	}
	this.starIcon = this.starIcon.bind(this);
	this.changeIcon = this.changeIcon.bind(this);
    }
    starIcon(selIcon,maxIcon){
	var iconArray = [];
	for(let i = 0;i<maxIcon;i++){
	    if(i<selIcon){
		iconArray.push(
			<TouchableOpacity style={{marginLeft:10}} key={i} onPress={()=>this.changeIcon(i)}>
                        <Icon name='md-star' size={25} color='#FD0346'/>
			</TouchableOpacity>
		)
	    }else{
		iconArray.push(
			<TouchableOpacity style={{marginLeft:10}} key={i} onPress={()=>this.changeIcon(i)}>
                        <Icon name='md-star-outline' size={25} />
			</TouchableOpacity>
		)
	    }
	}
	return iconArray;
    }
    changeIcon(index){
	this.setState({
	    selIcon:index+1,
	});
    }
    render(){
	return(
		<View style={[StyleObject.flexRow,{alignItems:'center'}]}>
		{
		    this.starIcon(this.state.selIcon,this.state.maxIcon)
		}
	    {this.props.isShowText ?
	     <Text style={[StyleObject.fontSize,StyleObject.normalColor,{marginLeft:20}]}>
	     {
		 this.state.selIcon == 5 ? "非常好" :
		     this.state.selIcon == 4 ? "很好" :
		     this.state.selIcon == 3 ? "一般" :
		     this.state.selIcon == 2 ? "良好" :
                     this.state.selIcon == 1 ? "差" :
                     null
	     }
             </Text> : null}
	    </View>
	)
    }
}

const styles = StyleSheet.create({
    evaluteContainer:{
        alignItems:'center',
        paddingLeft:10,
        paddingRight:10,
        paddingTop:10,
        paddingBottom:10,
        borderBottomWidth:1/PixelRatio.get(),
        borderColor:"#ddd",
    },
    evaluateText:{marginLeft:10,marginRight:5},
    evaluateTextInput:{
	height:200,
	paddingLeft:10,
	paddingRight:10
    },
    evaluateTakePhoto:{
        width:80,
        height:80,
        borderWidth:1/PixelRatio.get(),
        borderStyle:'dashed',
        backgroundColor:"#fff",
	marginBottom:25,
    },
    evaluateNoName:{
		    paddingTop:5,
		    paddingBottom:5,
		    paddingLeft:10,
		    borderTopWidth:1/PixelRatio.get(),
		    borderColor:"#ddd",
		    alignItems:'center',
		    paddingRight:10,
    },
    flowerContainer:{
                    backgroundColor:'#fff',
		    marginTop:5,
		    paddingTop:10,
		    paddingLeft:10,
		    paddingBottom:10,
		    
    },
    evaluateOther:{alignItems:'center',marginTop:10},
    flowerIcon:{marginRight:15,justifyContent:'flex-start'},
});
