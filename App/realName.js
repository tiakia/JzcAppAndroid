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
} from 'react-native';
import StyleObject from './styleSheet.js';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import ModalContent from './Modal';
import Area from './area.json';
import ImagePicker from 'react-native-image-picker';


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
			avatarFront:null,
			avatarReverce:null,
		}
		this.handleSelect = this.handleSelect.bind(this);
		this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
	}
	handleSelect(prov,city,area){
        this.setState({
            prov:prov,
            city:city,
			area:area,
			modalVisible:false,	
		});
	}
	static navigationOptions = ({navigation})=>({
		headerTitle: '实名认证',
		headerLeft: (
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Icon name='ios-arrow-back' size={25} color='#1d1d1d' style={{marginLeft:10}}/>
                    </TouchableOpacity>
        ),
		headerTitleStyle:{alignSelf:'center',justifyContent:'center',fontSize:12},
		headerStyle:{height:50,paddingTop:20},
	});
	selectPhotoTapped(dir) {
		const options = {
			title:'请选择图片来源',
			cancelButtonTitle:'取消',
			takePhotoButtonTitle:'拍照',
  			chooseFromLibraryButtonTitle:'相册图片',
			quality: 1.0,
			maxWidth: 500,
			maxHeight: 500,
			storageOptions: {
				skipBackup: true
			}
		};
		ImagePicker.showImagePicker(options, (response) => {
			console.log('Response = ', response);

			if (response.didCancel) {
				console.log('用户取消了选择图片');
			}
			else if (response.error) {
				console.log('ImagePicker Error: ', response.error);
			}
			else if (response.customButton) {
				console.log('User tapped custom button: ', response.customButton);
			}
			else {
				let source = { uri: response.uri };
				// You can also display the image using data:
				// let source = { uri: 'data:image/jpeg;base64,' + response.data };
				console.log(source);
				if(dir == 'front'){
					this.setState({
						avatarFront: source
					});
				}else if(dir == 'revese'){
					this.setState({
						avatarReverce: source
					});
				}
			}
		});
	}
	render(){
		const { navigate } = this.props.navigation;
		return(
		   <ScrollView style={styles.realNameContainer}
			       showsVerticalScrollIndicator={false}	   	  
		   >
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
					  <TouchableOpacity style={styles.selectImg} onPress={()=>{this.selectPhotoTapped('front')}}>
							{ this.state.avatarFront === null ? 
								<View style={StyleObject.center}>
									 <Icon name='ios-add' size={60}/>
						   			 <Text>请上传身份证正面照片</Text> 	
								</View> :
								<Image style={styles.avatar} source={require(this.state.avatarFront)} />
							}
					  </TouchableOpacity>
					  <TouchableOpacity style={styles.selectImg} onPress={()=>{this.selectPhotoTapped('reverse')}}>
						  { this.state.avatarReverce === null ? 
								<View style={StyleObject.center}>
									 <Icon name='ios-add' size={60}/>
						   			 <Text>请上传身份证反面照片</Text> 	
								</View> :
								<Image style={styles.avatar} source={require(this.state.avatarReverce)} />
							}
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
			  <View style={[styles.realNameItem,{marginBottom:20}]}>
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
		   </ScrollView>
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
		marginRight:5,
		color:'#1d1d1d',
	},
});
