import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import LoginForm from './LoginForm';

let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get('window').width;

export default class LoginPage extends React.Component {


    render() {
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.container}>
                <Image source={require('../../../assets/logo.png')}/>
                <LoginForm navigate={navigate}/>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        width: ScreenWidth,
        height: ScreenHeight,
        backgroundColor: 'white'
    }
});
