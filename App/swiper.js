import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  StatusBar,
} from 'react-native';
import Swiper from 'react-native-swiper';
import Nav from './navigator.js';
import StyleObject from './styleSheet';
const { width } = Dimensions.get('window');

const styles = {
  wrapper: {

  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#000',
    marginLeft:10,
    marginRight:10
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },

  image: {
    width,
    flex: 1
  }
};

export default class MySwiper extends Component {
  constructor(props){
    super(props);
    const { imagesData } = props;
    this.state={
        swiperImages : imagesData,
        swiperShow: false,
    };
  }
  componentDidMount(){
    setTimeout(()=>{
        this.setState({
            swiperShow:true
        });
    },0);
}
  render () {
    const { type } = this.props;
    if(this.state.swiperShow){
        if(type == 'index'){
          return (
            <Swiper
                  style={styles.wrapper}
                  height={240}
                  paginationStyle={{
                    left:0,bottom:10,top:null
                  }}
                  loop
                  autoplay
                  dot={<View style={{borderWidth:1,borderColor:'#fff', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                  activeDot={<View style={{backgroundColor: '#fff', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
              >
                  {
                      this.state.swiperImages.map((val,idx)=>{
                          return (
                              <View style={styles.slide} key={idx}>
                              <Image style={styles.image} source={{uri:val.uri}} resizeMode={Image.resizeMode.contain} resizeMethod={'scale'}/>
                              </View>
                          );
                      })
                  }
            </Swiper>
          )
        }else if(type == 'goodsDetail'){
          return (
		  <View style={StyleObject.flex}>
            <Swiper
                  style={styles.wrapper}
                  height={320}
                  showsPagination={false}
                  autoplayTimeout={1}
                  loop={true}
              >
                  {
                      this.state.swiperImages.map((val,idx)=>{
                          return (
                              <View style={StyleObject.flex} key={idx}>
                                <Image style={styles.image} source={{uri:val.uri}} />
                              </View>
                          );
                      })
                  }
              </Swiper>
		   <View style={{
		      position:'absolute',
		       top:10,
		       left:0,
		       right:0,
		  }}>
		    <Nav
                        type="fullIcon"
                        goToBack={this.props.goToBack}
                        goToCart={this.props.goToCart}
	            />
		  </View>
            </View>
          )
        }
    }else{
      return(
        <View style={{height:200}}>
            <Image source={ require('./../images/head.jpg')} style={styles.image} />
        </View>
      );
    }
  }
}
