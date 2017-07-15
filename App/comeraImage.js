import React,{Component } from 'react';
import { 
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	Picker,
	PixelRatio,
	TouchableOpacity,
} from 'react-native';
import StyleObject from './styleSheet.js';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import ModalContent from './Modal';
import Area from './area.json';

var ImagePicker = require('react-native-image-picker');

var options = {
  title: '请选择',
  cancelButtonTitle：'取消',
  customButtons: [
    {name: 'fb', title: 'Choose Photo from Facebook'},
  ],
    takePhotoButtonTitle:'拍照',
    chooseFromLibraryButtonTitle:'选择相册',
    quality:0.75,
    allowsEditing:true,
    noData:false,
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

cameraAction=()=>{
    ImagePicker.showImagePicker(options, (response) => {
    console.log('Response = ', response);

    if (response.didCancel) {
        console.log('User cancelled image picker');
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

        this.setState({
        avatarSource: source
        });
    }
    });
}