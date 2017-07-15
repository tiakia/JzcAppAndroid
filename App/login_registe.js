import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    Button,
    PixelRatio,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import StyleObject from './styleSheet.js';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Login extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.loginLayout}>
                <View style={[StyleObject.center, styles.headImgSplit]}>
                    <Image source={require('./../images/head.jpg')}
                        style={{ height: 60, width: 60, borderRadius: 30, marginBottom: 10 }} />
                    <Text>注册登录</Text>
                </View>

                <View>
                    <LoginValidation />
                </View>

                <View style={{ paddingLeft: 15, paddingRight: 15 }}>
                    <View style={[StyleObject.center, styles.loginSplit]}>
                        <Text>使用社交账号登录</Text>
                    </View>
                    <View style={StyleObject.flexDirection}>
                        <View style={styles.iconLogin}>
                            <Icon name='qq' size={20} />
                        </View>
                        <View style={styles.iconLogin}>
                            <Icon name='wechat' size={20} />
                        </View>
                        <View style={styles.iconLogin}>
                            <Icon name='weibo' size={20} />
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

class LoginValidation extends Component {
    constructor(props) {
        super(props);
        this.validata = this.validate.bind(this);
        this.isLogin = this.isLogin.bind(this);
        this.isLoginPassword = this.isLoginPassword.bind(this);
        this.state = {
            activeCode: false,
            activeLogin: false,
            toggle:true ,
            showPassword: true,
            inputText:'',
        }
    }
    validate(data) {
        let reg = /^1[3|4|5|7|8][0-9]{9}$/;
        let tel = Number(data);
        if (data.length == 11) {
            if (reg.test(tel)) {
                this.setState({
                    activeCode: true,
                });
            }
        } else {
            this.setState({
                activeCode: false,
            });
        }
    }
    isLogin(data) {
        if (data.length == 6 && Number(data)) {
            this.setState({
                activeLogin: true,
            });
        } else {
            this.setState({
                activeLogin: false,
            });
        }
    }
    isLoginPassword(data){
        
        if(data.length >=6 ){
            this.setState({
                activeLogin: true,
            });
        } else {
            this.setState({
                activeLogin: false,
            });
        }
        this.setState({
            inputText:data,
        });
    }
    render() {
        return (
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={[styles.marginLeft, StyleObject.center]}>
                        <Icon name='mobile-phone' size={40} />
                    </View>
                    <View style={[StyleObject.flex, styles.iconSplitLeft]}>
                        <View style={styles.inputLine}>
                            <View style={[StyleObject.flexDirection, StyleObject.center]}>
                                <Text>+86</Text>
                                <Icon name='caret-down' size={15} style={{ marginLeft: 5 }} />
                            </View>
                            <View style={[StyleObject.flex, styles.iconSplitLeft]}>
                                <TextInput
                                    underlineColorAndroid="transparent"
                                    placeholder='输入手机号'
                                    keyboardType='numeric'
                                    placeholderTextColor='#999'
                                    onChangeText={(data) => this.validate(data)}
                                    multiline = {true}
                                />
                            </View>
                        </View>
                    </View>
                </View>

                <View >
                    {
                        this.state.toggle ? 
                            <View style={[styles.marginBottom, { flexDirection: 'row' }]}>
                                <View style={[styles.marginLeft, StyleObject.center]}>
                                    <Icon name='envelope-o' size={20} />
                                </View>
                                <View style={[StyleObject.flex, styles.iconSplitLeft]}>
                                    <View style={styles.inputLine}>
                                        <View style={[StyleObject.flex,]}>
                                            <TextInput
                                                underlineColorAndroid="transparent"
                                                placeholder='短信验证码'
                                                keyboardType='numeric'
                                                placeholderTextColor='#999'
                                                onChangeText={(data) => this.isLogin(data)}
                                                multiline = {true}
                                            />
                                        </View>
                                        <TouchableOpacity disabled={!this.state.activeCode}
                                            style={this.state.activeCode ? [styles.codeButton, styles.activeColor] : [styles.codeButton, styles.normalColor]}>
                                            <Text style={[{ fontSize: 12, }, StyleObject.textColor]}>获取验证码</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View> : 
                            <View style={[styles.marginBottom, { flexDirection: 'row' }]}>
                                <View style={[styles.marginLeft, StyleObject.center]}>
                                    <Icon name='lock' size={25} />
                                </View>
                                <View style={[StyleObject.flex, styles.iconSplitLeft]}>
                                    <View style={styles.inputLine}>
                                        <View style={[StyleObject.flex,]}>
                                            <TextInput
                                                underlineColorAndroid="transparent"
                                                placeholder='输入密码'
                                                keyboardType='numeric'
                                                placeholderTextColor='#999'
                                                onChangeText={(data) => this.isLoginPassword(data)}
                                                secureTextEntry={this.state.showPassword}
                                                value={this.state.inputText}
                                                multiline = {true}
                                            />
                                        </View>
                                        <TouchableOpacity onPress={()=>this.setState({showPassword:!this.state.showPassword})}>
                                            {
                                                this.state.showPassword ?
                                                    <Ionicons name='ios-eye-off-outline' size={25} color='#666'/> :
                                                    <Ionicons name='ios-eye-outline' size={25} color='#FF2959'/>
                                            }
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                    }
                </View>

                <TouchableOpacity disabled={!this.state.activeLogin} style={[styles.buttonContainer, styles.marginBottom,]}>
                        <View style={this.state.activeLogin ? [styles.confirmButton, styles.activeColor] : [styles.confirmButton, styles.normalColor]}>
                            <Text style={[{ fontSize: 15, }, StyleObject.textColor]}>确定</Text>
                        </View>
                </TouchableOpacity>

                <TouchableOpacity style={[{ alignItems: 'flex-end' }, styles.marginBottom]} onPress={()=> this.setState({toggle:!this.state.toggle})}>
                    {
                        this.state.toggle  ?
                        <Text style={StyleObject.activeTextColor}>使用密码登录</Text> :
                        <Text style={StyleObject.activeTextColor}>使用验证码登录</Text> 
                    }
                </TouchableOpacity>
            </View>
        )
    }
}

class Code extends Component {
    constructor(props){
        super(props);
        const { isActive } = props;
        this.state = {
            activeCode: isActive ,
        }
    }
    compoenWillReceiveProps(nextProps,nextState){
        
    }
    render(){
        return(
            <View style={[styles.marginBottom, { flexDirection: 'row' }]}>
                <View style={[styles.marginLeft, StyleObject.center]}>
                    <Icon name='envelope-o' size={20} />
                </View>
                {console.log(this.state.activeCode)}
                <View style={[StyleObject.flex, styles.iconSplitLeft]}>
                    <View style={styles.inputLine}>
                        <View style={[StyleObject.flex,]}>
                            <TextInput
                                underlineColorAndroid="transparent"
                                placeholder='短信验证码'
                                keyboardType='numeric'
                                placeholderTextColor='#999'
                                onChangeText={(data) => this.isLogin(data)}
                                multiline = {true}
                            />
                        </View>
                        <TouchableOpacity disabled={!this.state.activeCode}
                            style={this.state.activeCode ? [styles.codeButton, styles.activeColor] : [styles.codeButton, styles.normalColor]}>
                            <Text style={[{ fontSize: 12, }, StyleObject.textColor]}>获取验证码</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loginLayout: {
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 50
    },
    iconLogin: {
        borderWidth: 1 / PixelRatio.get(),
        borderColor: '#666',
        borderRadius: 30,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginSplit: {
        marginBottom: 20,
    },
    headImgSplit: {
        marginBottom: 50,
    },
    marginLeft: {
        marginLeft: 10
    },
    marginBottom: {
        marginBottom: 20
    },
    inputLine: {
        borderBottomWidth: 1 / PixelRatio.get(),
        borderColor: '#666',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconSplitLeft: {
        marginLeft: 20
    },
    codeButton: {
        borderRadius: 5,
        paddingLeft: 15,
        paddingRight: 15,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    normalColor: {
        backgroundColor: '#DCD2D1',
    },
    activeColor: {
        backgroundColor: '#F80C49',
    },
    buttonContainer: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    confirmButton: {
        borderRadius: 5,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
});