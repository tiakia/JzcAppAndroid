import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    FlatList,
    TouchableOpacity,
    TextInput,
    StatusBar,
    PixelRatio,
    Modal,
    TouchableHighlight,
    Picker,
    Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import StyleObject from './styleSheet';
import Area from './area.json';
import { StackNavigator }  from 'react-navigation';
//弹出窗
export default class ModalContent extends Component {
    constructor(props) {
        super(props);
        const { modal } = props;
        this.state = {
            modalVisible: modal || false,
            modalType: props.modalType,
            goodsText:props.goodsText,
            memberDetail:props.memberDetail,
            prov: props.prov,
            city:props.city,
            area:props.area,
            selectProvince:props.selectProvince,
            selectCity:props.selectCity,
            selectArea:props.selectArea,
        }
        this.setModalVisible = this.setModalVisible.bind(this);
    }
    setModalVisible() {
        this.setState({ modalVisible: false });
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ modalVisible: nextProps.modal, modalType: nextProps.modalType })
    }
    render() {
        return (
            <View >
                <Modal
                    animationType={'slide'}
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => { this.setState({ modalVisible: false}); }}
                >
                    <StatusBar
                        translucent={true}
                        backgroundColor='rgba(0,0,0,0.3)'
                        barStyle='dark-content'
                    />
                    <View style={styles.modal}>
                        <ModalDetail
                                    modalType={this.state.modalType}
                                    closeModal={this.setModalVisible}
                                    goodsText={this.state.goodsText}
                                    memberDetail={this.state.memberDetail}
                                    navigation = {this.props.navigation}
                                    close={this.close}
                                    handleSelect={this.props.handleSelect}

                                    prov={this.state.prov}
                                    city={this.state.city}
                                    area={this.state.area}
                                    selectProvince={this.state.selectProvince}
                                    selectCity={this.state.selectCity}
                                    selectArea={this.state.selectArea}
                        />
                    </View>
                </Modal>

            </View>
        )
    }
}

class ModalDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: props.modalType,
            goodsText: props.goodsText,
            memberDetail: props.memberDetail,
            prov: props.prov,
            city:props.city,
            area:props.area,
            selectProvince:props.selectProvince,
            selectCity:props.selectCity,
            selectArea:props.selectArea,
        };
     this.renderPickerItem = this.renderPickerItem.bind(this);
        this.getProvince = this.getProvince.bind(this);
        this.getProvinceCity = this.getProvinceCity.bind(this);
        this.getProvinceCityArea = this.getProvinceCityArea.bind(this);
        this.selectProvince = this.selectProvince.bind(this);
        this.selectCity = this.selectCity.bind(this);
        this.selectArea = this.selectArea.bind(this);
        this.areaSelectResult = this.areaSelectResult.bind(this);
    }
    componentDidMount(){
        let province = this.getProvince();
        let city = this.getProvinceCity(this.state.selectProvince);
        let area = this.getProvinceCityArea(this.state.selectProvince,this.state.selectCity);
        this.setState({
            prov:province,
            city: city,
            area: area,
        });
    }
    
    renderPickerItem(val,idx){
            return (
                <Picker.Item label={val} value={val} key={val} />
            );
    }

    getProvince(){
        let result = [];
        Area.map((val,idx) => {
            result.push(val.name);
        });
        return result;
    }
    getProvinceCity(province){
        let result = [] , cityArea = [];
        Area.map(( val,idx ) => {
            cityArea = val.city;
            let curProvince = val.name;
            if( curProvince == province ) {
                cityArea.map((cityVal,cityIdx )=> {
                    result.push(cityVal.name);
                });
            }
        });
        return result;
    }
    getProvinceCityArea(province,city){
        let result =[],cityArray=[];
        Area.map(( val,idx ) => {
            cityArea = val.city;
            let curProvince = val.name;
            if( curProvince == province ) {
                cityArea.map((cityVal,cityIdx )=> {
                   let curCity = cityVal.name;
                   if(curCity == city ) {
                        cityVal.area.map((areaVal,areaIdx)=>{
                            result.push(areaVal);
                        });
                   }
                });
            }
        });

        return result;
    }

    selectProvince(val,idx){

        let city = this.getProvinceCity(val);
        let defaultCity = city[0];
        let area = this.getProvinceCityArea(val,defaultCity)
        this.setState({
            selectProvince: val,
            city:city,
            area:area,
        });
    }

    selectCity(val,idx){
        let area = this.getProvinceCityArea(this.state.selectProvince,val);
        this.setState({
            selectCity:val,
            area:area,
        });
    }

    selectArea(val,idx){
        this.setState({
            selectArea: val
        });
    }  
    areaSelectResult(){
        this.props.handleSelect(this.state.selectProvince,this.state.selectCity,this.state.selectArea);
    } 
    render() {
        let goodsText = this.state.goodsText;
        let memberDetail = this.state.memberDetail;
        if(this.state.type == 'memberPri'){
            return (
                <View style={styles.modalContainer}>
                <View>
                    <View style={[StyleObject.center, styles.modalTitle]}>
                        <Text style={StyleObject.fontSize}>会员专享价</Text>
                    </View>
                    <View style={styles.modalMemberContainer}>
                        <MemberDetail memberDetail={this.state.memberDetail} />
                    </View>
                </View>
                <TouchableHighlight underlayColor='transparent'
                    style={StyleObject.pageBottomBtn}
                    onPress={this.props.closeModal}
                >
                    <Text style={[StyleObject.textColor,StyleObject.fontSize]}>立即购买</Text>
                </TouchableHighlight>
            </View>
            )
        }else if(this.state.type == 'areaSelect'){
            return (
                <View style={styles.modalContainerArea}>
                    <View style={StyleObject.flex}>
                        <View style={styles.areaConfirm}>
                            <TouchableHighlight
                                    onPress={this.areaSelectResult}
                                    style={{padding:10}}
                                    underlayColor='transparent'

                                >
                                    <Text style={[StyleObject.fontSize,StyleObject.activeTextColor]}>确认</Text>
                                </TouchableHighlight>
                        </View>
                        <View style={styles.areaPickerDetail}>
                            <Picker
                                style={{ flex:1 }}
                                prompt='请选择省/市'
                                selectedValue={this.state.selectProvince}
                                onValueChange={(itemValue, itemIndex) => this.selectProvince(itemValue,itemIndex)}
                            >
                                {this.state.prov.map((val,idx)=> this.renderPickerItem(val,idx))}
                            </Picker>
                            <Picker
                                style={{ flex:1 }}
                                prompt='请选择市/区'
                                selectedValue={this.state.selectCity}
                                onValueChange={(itemValue, itemIndex) => this.selectCity(itemValue,itemIndex)}
                            >
                                {this.state.city.map((val,idx)=> this.renderPickerItem(val,idx))}
                            </Picker>
                            <Picker
                                style={{ flex:1  }}
                                prompt='请选择区/县'
                                selectedValue={this.state.selectArea}
                                onValueChange={(itemValue, itemIndex) => this.selectArea(itemValue,itemIndex)}
                            >
                                {this.state.area.map((val,idx)=> this.renderPickerItem(val,idx))}
                            </Picker>
                        </View>
                    </View>
                </View>
            )
        }else if(this.state.type == 'realName'){
            return (
                <View style={styles.modalContainerArea}>
                    <AreaPicker 
                                closeModal={this.props.closeModal}
                                showArea={this.props.handleSelect}
                                prov={this.state.prov}
                                city={this.state.city}
                                area={this.state.area}
                                selectProvince={this.state.selectProvince}
                                selectCity={this.state.selectCity}
                                selectArea={this.state.selectArea}
                                type='realName'
                    />
                </View>
            )
        }else if(this.state.type == 'share'){
            return (
                <View style={styles.modalShareContent}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:20,marginTop:20}}>
                        <View style={StyleObject.center}>
                            <Icon name='qq' size={25} color="#4EAFE7"/>
                            <Text style={styles.shareIcon}>QQ</Text>
                        </View>
                        <View style={StyleObject.center}>
                            <Icon name='wechat' size={25} color="#EECF43"/>
                            <Text style={styles.shareIcon}>QQ空间</Text>
                        </View>
                        <View style={StyleObject.center}>
                            <Icon name='weibo' size={25} color="#40AF35"/>
                            <Text style={styles.shareIcon}>微信好友</Text>
                        </View>
                        <View style={StyleObject.center}>
                            <Icon name='wechat' size={25} color="#43AF34"/>
                            <Text style={styles.shareIcon}>朋友圈</Text>
                        </View>
                        <View style={StyleObject.center}>
                            <Icon name='weibo' size={25} color="#E04F69"/>
                            <Text style={styles.shareIcon}>微博</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={this.props.closeModal} style={[StyleObject.center]}>
                        <View style={styles.cancleShare}>
                            <Text style={StyleObject.fontSize}>取消分享</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )
        }else if(this.state.type == 'goodsText'){
            return (
                <View style={styles.modalContainer}>
                    <View>
                        <View style={[StyleObject.center, styles.modalTitle]}>
                            <Text style={StyleObject.fontSize}>商品信息</Text>
                        </View>
                        <View style={styles.modalMemberContainer}>
                            <GoodsText goodsText={this.state.goodsText} />
                        </View>
                    </View>
                    <TouchableHighlight underlayColor='transparent'
                        style={StyleObject.pageBottomBtn}
                        onPress={this.props.closeModal}
                    >
                        <Text style={[StyleObject.textColor,StyleObject.fontSize]}>立即购买</Text>
                    </TouchableHighlight>
                </View>
            )
        }else{
            return null;
        }
    }
}

class AreaPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prov: props.prov,
            city: props.city,
            area: props.area,
            selectProvince:props.selectProvince,
            selectCity:props.selectCity,
            selectArea:props.selectArea,
        }
        this.renderPickerItem = this.renderPickerItem.bind(this);
        this.getProvince = this.getProvince.bind(this);
        this.getProvinceCity = this.getProvinceCity.bind(this);
        this.getProvinceCityArea = this.getProvinceCityArea.bind(this);
        this.selectProvince = this.selectProvince.bind(this);
        this.selectCity = this.selectCity.bind(this);
        this.selectArea = this.selectArea.bind(this);
    }
    componentDidMount(){
        let province = this.getProvince();
        let city = this.getProvinceCity(this.state.selectProvince);
        let area = this.getProvinceCityArea(this.state.selectProvince,this.state.selectCity);
        this.setState({
            prov:province,
            city: city,
            area: area,
        });
    }
    
    renderPickerItem(val,idx){
            return (
                <Picker.Item label={val} value={val} key={val} />
            );
    }

    getProvince(){
        let result = [];
        Area.map((val,idx) => {
            result.push(val.name);
        });
        return result;
    }
    getProvinceCity(province){
        let result = [] , cityArea = [];
        Area.map(( val,idx ) => {
            cityArea = val.city;
            let curProvince = val.name;
            if( curProvince == province ) {
                cityArea.map((cityVal,cityIdx )=> {
                    result.push(cityVal.name);
                });
            }
        });
        return result;
    }
    getProvinceCityArea(province,city){
        let result =[],cityArray=[];
        Area.map(( val,idx ) => {
            cityArea = val.city;
            let curProvince = val.name;
            if( curProvince == province ) {
                cityArea.map((cityVal,cityIdx )=> {
                   let curCity = cityVal.name;
                   if(curCity == city ) {
                        cityVal.area.map((areaVal,areaIdx)=>{
                            result.push(areaVal);
                        });
                   }
                });
            }
        });

        return result;
    }

    selectProvince(val,idx){

        let city = this.getProvinceCity(val);
        let defaultCity = city[0];
        let area = this.getProvinceCityArea(val,defaultCity)
        this.setState({
            selectProvince: val,
            city:city,
            area:area,
        });
    }

    selectCity(val,idx){
        let area = this.getProvinceCityArea(this.state.selectProvince,val);
        this.setState({
            selectCity:val,
            area:area,
        });
    }

    selectArea(val,idx){
        this.setState({
            selectArea: val
        });
    }
    render() {
        return (
            <View style={StyleObject.flex}>
                <View style={styles.areaConfirm}>
                       <TouchableHighlight
                            onPress={
                                        ()=>{
                                            this.props.closeModal;
                                            this.props.showArea(this.state.selectProvince,this.state.selectCity,this.state.selectArea);
                                        }
                                    }
                            style={{padding:10}}
                            underlayColor='transparent'

                        >
                            <Text style={[StyleObject.fontSize,StyleObject.activeTextColor]}>确认</Text>
                        </TouchableHighlight>
                </View>
                <View style={styles.areaPickerDetail}>
                    <Picker
                        style={{ flex:1 }}
                        prompt='请选择省/市'
                        selectedValue={this.state.selectProvince}
                        onValueChange={(itemValue, itemIndex) => this.selectProvince(itemValue,itemIndex)}
                    >
                        {this.state.prov.map((val,idx)=> this.renderPickerItem(val,idx))}
                    </Picker>
                    <Picker
                        style={{ flex:1 }}
                        prompt='请选择市/区'
                        selectedValue={this.state.selectCity}
                        onValueChange={(itemValue, itemIndex) => this.selectCity(itemValue,itemIndex)}
                    >
                        {this.state.city.map((val,idx)=> this.renderPickerItem(val,idx))}
                    </Picker>
                    <Picker
                        style={{ flex:1  }}
                        prompt='请选择区/县'
                        selectedValue={this.state.selectArea}
                        onValueChange={(itemValue, itemIndex) => this.selectArea(itemValue,itemIndex)}
                    >
                        {this.state.area.map((val,idx)=> this.renderPickerItem(val,idx))}
                    </Picker>
                </View>
            </View>
        )
    }
}

class MemberDetail extends Component {
    constructor(props) {
        super(props);
        this.renderMember = this.renderMember.bind(this);
        this.state={
            memberDetail:props.memberDetail
        }
    }
    renderMember(tab, i) {
        return (
            <View style={styles.modalMemberLine} key={i}>
                <View style={styles.memberEve}>
                    <Text style={StyleObject.fontSize}>{tab.level}</Text>
                </View>
                <View style={[StyleObject.flex,]}>
                    <Text style={[styles.goodsDetailMainColor,StyleObject.fontSize]}>{tab.price}</Text>
                </View>
            </View>
        )
    }
    render() {
        return (
            <View>
                {
                    this.state.memberDetail.map((tab, i) => this.renderMember(tab, i))
                }
            </View>
        )
    }
}

class GoodsText extends Component {
    constructor(props) {
        super(props);
        this.renderGoodsText = this.renderGoodsText.bind(this);
    }
    renderGoodsText(tab, i) {
        return (
            <View style={[styles.modalMemberLine]} key={i}>
                <View style={styles.memberEve}>
                    <Text style={StyleObject.fontSize}>{tab.text}</Text>
                </View>
                <View style={[StyleObject.flex, { alignItems: 'flex-start' }]}>
                    <Text style={[{ color: '#1d1d1d' },StyleObject.fontSize]}>{tab.detail}</Text>
                </View>
            </View>
        )
    }
    render() {
        return (
            <View>
                {
                    this.props.goodsText.map((tab, i) => this.renderGoodsText(tab, i))
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    modal: {
        flex: 1, justifyContent: 'flex-end',
        backgroundColor:'rgba(0,0,0,.3)',
    },
    modalContainer: {
        backgroundColor: '#fff',
        height: 500,
        justifyContent: 'space-between'
    },
    modalContainerArea:{
        backgroundColor:'#fff',
        height:200,
    },
    modalShareContent:{
        backgroundColor:"#fff",
        paddingLeft:20,
        paddingRight:20,
    },
    modalMemberContainer: {
        paddingLeft: 20,
        paddingRight: 20
    },
    modalMemberLine: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderBottomWidth: 1 / PixelRatio.get(),
        borderColor: '#ddd',
        paddingBottom: 15,
        paddingTop: 10,
    },
    modalTitle: {
        marginTop: 25,
        marginBottom: 25
    },
    modalBottomBtn: {
        backgroundColor: '#FF1A4B',
        height: 50
    },
    memberEve: {
        width: '40%',
    },
    shareIcon:{
        marginTop:10,
        fontSize:12,
    },
    cancleShare:{
        marginBottom:10,
        marginTop:10,
        borderWidth:1/PixelRatio.get(),
        borderColor:'#333',
        borderRadius:20,
        width:100,
        justifyContent:'center',
        alignItems:'center',
        paddingTop:5,
        paddingBottom:5,
        paddingLeft:10,
        paddingRight:10,
    },
    areaConfirm:{
        height:30,
        backgroundColor:'#F7F7F9',
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
    },
    areaPickerDetail:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
});