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
import StyleObject from './styleSheet.js';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import ModalContent from './Modal';
import Area from './area.json';

export default class RealName extends Component {
	constructor(props){
		super(props)
		this.state={
			modalVisible: false,
			modalType: 'realName', 
			prov:[],
            city:[],
            area:[],
            selectProvince:Area[0].name,
            selectCity:Area[0].city[0].name,
            selectArea:Area[0].city[0].area[0],
		}
		this.handleSelect = this.handleSelect.bind(this);
		//this.cameraAction = this.cameraAction.bind(this);
	}
	handleSelect(prov,city,area){
        this.setState({
            prov:prov,
            city:city,
			area:area,
			modalVisible:false,	
		});
	}
//	cameraAction=()=>{
//		ImagePicker.showImagePicker(options, (response) => {
//		console.log('Response = ', response);
//
//		if (response.didCancel) {
//			console.log('User cancelled image picker');
//		}
//		else if (response.error) {
//			console.log('ImagePicker Error: ', response.error);
//		}
//		else if (response.customButton) {
//			console.log('User tapped custom button: ', response.customButton);
//		}
//		else {
//			let source = { uri: response.uri };
//
//			// You can also display the image using data:
//			// let source = { uri: 'data:image/jpeg;base64,' + response.data };
//
//			this.setState({
//			avatarSource: source
//			});
//		}
//		});
//	}
	static navigationOptions = {
		headerTitle: '实名认证',
		headerTitleStyle:{alignSelf:'center',justifyContent:'center',fontSize:14},
		headerStyle:{height:50,paddingTop:20},
	}
	render(){
		return(
		   <View style={styles.realNameContainer}>
			  <View style={styles.realNameItem}>
				 <View style={styles.itemLeft}>
				 	<Text style={{color:"#1d1d1d"}}>真实姓名</Text> 
				 </View>	
				 <View style={StyleObject.flex}>
					  <TextInput
							style={{padding:0}}
							underlineColorAndroid='transparent'
							mutiline={true}
							placeholder="请如实填写"
					  />
				 </View>	
			  </View>
			  <View style={styles.realNameItem}>
				 <View style={styles.itemLeft}>
				 	<Text style={{color:"#1d1d1d"}}>身份证号</Text> 
				 </View>	
				 <View style={StyleObject.flex}>
					  <TextInput
							style={{padding:0}}
							underlineColorAndroid='transparent'
							mutiline={true}
							placeholder="请如实填写"
							keyboardType="numeric"
					  />
				 </View>	
			  </View>
			  <View style={[styles.realNameItem,{alignItems:'flex-start',paddingTop:15}]}>
				 <View style={[styles.itemLeft,]}>
				 	<Text style={{color:"#1d1d1d"}}>证件照片</Text> 
				 </View>	
				 <View style={StyleObject.flex}>
					  <TouchableOpacity style={styles.selectImg} >
						  <Icon name='ios-add' size={60}/>
					 	  <Text>请上传身份证正面照片</Text> 
					  </TouchableOpacity>
					  <TouchableOpacity style={styles.selectImg}>
						  <Icon name='ios-add' size={60}/>
					 	  <Text>请上传身份证反面照片</Text> 
					  </TouchableOpacity>
				 </View>	
			  </View>
			  <TouchableOpacity style={styles.realNameItem} onPress={()=>this.setState({modalVisible:true})}>
				 <View style={styles.itemLeft}>
				 	<Text style={{color:"#1d1d1d"}}>现居地</Text> 
				 </View>
				  <View style={StyleObject.flexDirection}>
					  <Text style={styles.realNameAreaResult}>{this.state.prov}</Text> 
					  <Text style={styles.realNameAreaResult}>{this.state.city}</Text>
					  <Text style={styles.realNameAreaResult}>{this.state.area}</Text>	
				  </View>	
				 <View style={[StyleObject.flex,{alignItems:'flex-end',paddingRight:15}]}>
					<Icon name='ios-arrow-forward' size={25}/>
				 </View>	
			  </TouchableOpacity>
			  <View style={styles.realNameItem}>
				 <View style={styles.itemLeft}>
				 	<Text style={{color:"#1d1d1d"}}>详细地址</Text> 
				 </View>	
				 <View style={StyleObject.flex}>
					  <TextInput
							style={{padding:0}}
							underlineColorAndroid='transparent'
							mutiline={true}
							placeholder="街道楼牌号等"
					  />
				 </View>	
			  </View>
			<ModalContent   modal={this.state.modalVisible}
							modalType={this.state.modalType}

							handleSelect={this.handleSelect}

							prov={this.state.prov}
							city={this.state.city}
							area={this.state.area}
							selectProvince={this.state.selectProvince}
							selectCity={this.state.selectCity}
							selectArea={this.state.selectArea}
			/>
		   </View>
		)
	}
}

const styles=StyleSheet.create({
	realNameContainer:{
		backgroundColor:'#fff',
		flex:1,
		paddingLeft:10,
		paddingRight:10,
		paddingTop:10,
	},
	realNameItem:{
		flexDirection:'row',
		alignItems:'center',
		borderBottomWidth:1/PixelRatio.get(),
		borderColor:'#ddd'
	},
	itemLeft:{
		width:80,
		marginLeft:10,
		paddingTop:15,
		paddingBottom:15,
	},
	selectImg:{
		width:250,
		height:150,
		borderWidth:1/PixelRatio.get(),
		borderStyle:'dashed',
		alignItems:"center",
		justifyContent:'center',
		borderRadius:5,
		marginBottom:15,
	},
	realNameAreaResult:{
		marginRight:5
	},
});
