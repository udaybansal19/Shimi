import React from 'react';
import { withNavigation } from '@react-navigation/compat';
import PropTypes from 'prop-types';
import { StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import { Block, Button as GaButton,Text, theme } from 'galio-framework';
import { Button} from ".";
import { argonTheme } from '../constants';

class CardWishList extends React.Component {
  renderTrash = ()=>{
    return(
      <Block style={styles.trash} >
        <Image source={require("../assets/imgs/bin.png")} style={styles.logo} />
      </Block>
    )
  }
  renderButton = () => {
    return (
      <Block flex style={styles.group}>
          <Button  style={styles.button}>
            View
          </Button>        
      </Block>
    );
  };
  renderStoreInfo =()=> {
    return (
      <Block flex style={styles.group2}>        
        <Block >
          <Image source={require("../assets/imgs/hm.png")} style={styles.logo} />
        </Block>
        <Block >
          <Text size={15}
            style={{ marginBottom:4,marginRight:20,color:'#A6A6A6',}}
            color={argonTheme.COLORS.DEFAULT}
          >
            Mango
          </Text>
        </Block>
      </Block>
    );
  }
  render() { 
    const { 
      navigation, 
      item, 
      horizontal, 
    } = this.props;
    return (
      <Block row={horizontal} CardWishList flex style={styles.CardWishList}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro')}>
          <Block flex >
            <Image source={require("../assets/imgs/def.png")} style={styles.imageStyles} />      
          </Block>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro')}>
          <Block flex style={styles.CardWishListDescription}>
            <Block flex>
              <Text bold style={styles.CardWishListTitle}>{item.title}</Text>
              {this.renderStoreInfo()}
              {this.renderButton()}
            </Block>                              
          </Block>
        </TouchableWithoutFeedback>
        {this.renderTrash()} 
      </Block>
    );
  }
}
CardWishList.propTypes = {
  item: PropTypes.object,
  horizontal: PropTypes.bool,
  full: PropTypes.bool,
  ctaColor: PropTypes.string,
  imageStyle: PropTypes.any,
}// defining all the prop types this Card Wishlist can accept
const styles = StyleSheet.create({
  button: {
    backgroundColor:'#DD4A65',
    borderRadius:20,
    width: 75,
    height:24,
    padding:2,
    marginLeft:1,
    marginVertical:0,
  },
  logo: {
    width: theme.SIZES.BASE * 1.58,
    height: theme.SIZES.BASE *1.58,
    marginRight:10,
    borderWidth:0,
  },
  trash:{
   marginTop:118,
  },
  
  logotrash: {
    
    width: theme.SIZES.BASE * 1.58,
    height: theme.SIZES.BASE *1.58,
    
  },
  group: {
    flexDirection: "row",
    marginLeft:10,  
  },
  group2: {
    
    flexDirection: "row",
    alignItems: "center",
    marginLeft:8,
    marginBottom:40,
  },
  CardWishList: {
    height:170,
    marginVertical: 10,
    marginHorizontal:0,
    borderWidth:0,
    borderBottomWidth:1,
    borderRadius:0,
    borderBottomColor:'#DCDCDC',
  },
  CardWishListTitle: {
    fontSize:16,
    flex: 1,
    marginTop:0,
    marginLeft:10,
  },
  CardWishListDescription: {
    alignContent:'center',
    padding:3,
    paddingTop:5,
    paddingBottom:15,
    marginRight:60,  
  },
  imageStyles:{
    height:140,
    width:135,
    borderRadius:10,
    marginBottom:5,
    marginLeft:'7%',
  },
  
});
export default withNavigation(CardWishList);