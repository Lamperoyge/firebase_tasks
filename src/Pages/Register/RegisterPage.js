import React, {Component, Fragment} from 'react';
import {View, ScrollView, StyleSheet, Dimensions, Image} from 'react-native';
import {Divider, Text} from 'react-native-elements'
import * as Font from "expo-font";
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get('window').width;


const FormRegisterButton = (props) => {
  return (
      <LinearGradient
          colors={['#ed0056', '#ff95bb']}
          start={[0 ,1]}
          end={[1, 0]}
          style={styles.formRegisterButton}
      >
          <Button
            onPress={props.onFormRegisterPress}
            buttonStyle={styles.formRegisterButton}
            title={'get started'}
            titleStyle={{color: 'white', fontSize: 28, textAlign: 'center'}}
          />
      </LinearGradient>

  )
};

const FacebookButton = (props) => {

    return (
        <Button
            onPress={props.onFacebookPress}
            buttonStyle={styles.facebookButton}
            icon={
                <Icon
                    name={'facebook-f'}
                    size={28}
                    style={{right: 30, top: 2}}
                    color={'white'}
                />
            }
            title={'continue with facebook'}
            titleStyle={{textAlign: 'center'}}
        />
    )
};


class RegisterPage extends Component {

    state = {
        fontLoaded: false
    };

    onFacebookPress = () => {
      console.log('facebook clicked');
    };

    onFormRegisterPress = () => {
        this.props.navigation.navigate('RegisterForm');
    };

    async componentDidMount() {
        await Font.loadAsync({
            'nunito-light': require('../../../assets/fonts/Nunito-Light.ttf'),
        });
        this.setState({
            fontLoaded: true
        });
    }

    render() {
        return (
            <Fragment>
                {this.state.fontLoaded &&
                <View style={styles.container}>
                    <Image
                           source={require('../../../assets/Ellipse_1.png')}/>
                    <Text h3 style={styles.text}>let's create your {"\n"}new account</Text>
                    <View style={{display: 'flex',
                        justifyContent: 'space-around',
                        position: 'relative',
                        height: ScreenHeight / 4
                    }}>
                        <FormRegisterButton onFormRegisterPress={this.onFormRegisterPress}/>
                        <Divider style={{margin: 10}}/>
                        <FacebookButton onFacebookPress={this.onFacebookPress}/>
                    </View>
                </View>
                }
            </Fragment>
        );
    }
}


const styles = StyleSheet.create({
    text: {
        textAlign: 'left',
        color: '#6C6B6B',
        right: 20
    },
    formRegisterButton: {
        width: 300,
        height: 52,
        borderRadius: 25,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center'
    },
    facebookButton: {
        width: 300,
        height: 50,
        padding: 10,
        borderWidth: 1,
        display: 'flex',
        borderRadius: 30,
        backgroundColor: '#1677F1',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center'
    },
    container: {
        flex: 1,
        fontFamily: 'nunito-light',
        justifyContent: 'space-around',
        alignContent: 'center',
        alignItems: 'center',
        width: ScreenWidth,
        height: ScreenHeight,
        backgroundColor: 'white'
    }
});

export default RegisterPage;
