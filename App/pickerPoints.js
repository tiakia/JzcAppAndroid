import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    TouchableHighlight,
    Dimensions,
} from 'react-native';
import Nav from './navigator';
import Icon from 'react-native-vector-icons/FontAwesome';
import StyleObject from './styleSheet';
const pickData = [
    {
        area:'太原市小店区学府街96号',
        points:'太原锦雪苑宾馆东100米',
        distance:'2.2千米',
    },
    {
        area:'太原市小店区长治路111号',
        points:'山西世贸中心北侧',
        distance:'3.6千米',
    },
    {
        area:'太原市小店区体育路晋阳街口',
        points:'北美N1文创中心',
        distance:'1.6千米',
    },
    {
        area:'太原市小店区长治路111号',
        points:'山西世贸中心北侧',
        distance:'3.6千米',
    },
];

export default class PickPoints extends Component {
    constructor(props){
        super(props);
        this.RenderItem = this.RenderItem.bind(this);
    }
    static navigationOptions = {
        headerTitle:'自提点',
        headerTitleStyle:{alignSelf:'center',justifyContent:'center',fontSize:14},
        headerStyle:{height:50,paddingTop:20},
    }
    RenderItem({itemData}){
            return (
                <View style={[StyleObject.flexDirection,{padding:15}]}>
                    <View>
                        <View>
                            <Text style={[{color:'#333',},StyleObject.fontSize]}>{itemData.points}</Text>
                        </View>
                        <View style={{marginTop:5}}>
                            <Text style={StyleObject.fontSize}>{itemData.area}</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={[StyleObject.fontSize,{color:'#333',}]}>{itemData.distance}</Text>
                    </View>
                </View>
            )
    }
    render(){
        return(
            <View style={{backgroundColor:'#fff',flex:1}}>
                <View style={StyleObject.flex}>
                    <FlatList
                        data={pickData}
                        horizontal={false}
                        renderItem={({item})=> this.RenderItem({itemData:item})}
                        ListEmptyComponent={
                            <View style={[StyleObject.center,{height:Dimensions.get('window').height-200}]}>
                                <Icon name='map-marker' size={100} color="#999" style={{marginBottom:15}}/>
                                <Text style={StyleObject.fontSize}>该地区没有开放自提点</Text>
                            </View>
                        }
                    />
                </View>
            </View>
        )
    }
}
