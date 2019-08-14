import React, {Component, Fragment} from 'react';
import {Dimensions, View, StyleSheet} from 'react-native';
import {Text, Input} from 'react-native-elements';
import * as Font from "expo-font";
import Icon from "react-native-vector-icons/MaterialIcons";
let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get('window').width;

class RegisterForm extends Component {

    state = {
        email: '',
        password: '',
        name: '',
        fontLoaded: false
    };


    async componentDidMount() {
        await Font.loadAsync({
            'nunito-light': require('../../../assets/fonts/Nunito-Light.ttf'),
        });
        this.setState({
            fontLoaded: true
        });
    }

    formConfig = () => {
        return [
            {
                placeholder: "my email",
                icon: 'email',
                value: this.state.email,
                handleChange: (text) => {
                    this.setState({
                        email: text
                    })
                },
                secureTextEntry: false,
            },
            {
                placeholder: "my passowrd",
                icon: 'lock',
                value: this.state.password,
                handleChange: (text) => {
                    this.setState({
                        password: text
                    })
                },
                secureTextEntry: true,
            },
            {
                placeholder: "my name",
                icon: 'person',
                value: this.state.name,
                handleChange: (text) => {
                    this.setState({
                        name: text
                    })
                },
                secureTextEntry: false,
            }
        ]
    };

    render() {
        return (
            <View>
                <Text h4>Register</Text>
                <View style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignContent: 'center',
                    alignItems: 'center'
                }}>
                    {this.formConfig().map((el, idx) => {
                        return(
                            <Fragment key={idx}>
                                {this.state.fontLoaded && <Input
                                    errorStyle={{ color: 'red' }}
                                    containerStyle={{
                                        borderStyle: 'dotted',
                                        borderBottomWidth: 1
                                    }}
                                    leftIcon={<Icon
                                        name={el.icon}
                                        size={15}
                                        color={'#bababa'}
                                        style={{marginRight: 20,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            alignContent: 'center',
                                        }}
                                    />
                                    }
                                    placeholder={el.placeholder}
                                    inputStyle={{fontFamily: 'nunito-light', fontSize: 12}}
                                />}
                            </Fragment>
                        )
                    })}
                </View>
            </View>
        );
    }
}

export default RegisterForm;


const styles = StyleSheet.create({

});
