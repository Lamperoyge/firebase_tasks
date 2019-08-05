import React, {Component, Fragment} from 'react';
import {View,ScrollView, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements'
import * as Font from "expo-font";
class RegisterPage extends Component {

    state = {
        fontLoaded: false
    };

    async componentDidMount() {
        await Font.loadAsync({
            'nunito-regular': require('../../../assets/fonts/Nunito-Regular.ttf'),
        });
        this.setState({
            fontLoaded: true
        });
    }

    render() {
        return (
            <ScrollView style={style.container}>
                {this.state.fontLoaded && <Fragment>
                    <View style={style.formContainer}>
                        <Text style={style.logoName}>Register</Text>
                    </View>
                    <View>
                        <Text h4>login</Text>
                    </View>
                </Fragment>}
            </ScrollView>
        );
    }
}


const style = StyleSheet.create({
   container: {
     height: 1000
   },
    formContainer: {
       backgroundColor: "#D80057",
       height: 700,
       right: 30,
       width: 600,
       borderTopEndRadius: 0,
       borderTopLeftRadius: 0,
       borderRadius: 500
    },
    logoName: {
        color: 'white',
        fontFamily: 'nunito-regular', fontSize: 30,
    },
});

export default RegisterPage;
