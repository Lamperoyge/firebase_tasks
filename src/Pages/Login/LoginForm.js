import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import Input from '../../Components/Input';
import Button from '../../Components/SubmitButton';
import { Divider, Text} from 'react-native-elements/src/index';
const SignUpButton = (props) => {
    return (
        <TouchableWithoutFeedback onPress={props.onpress}>
            <Text style={{color: '#EB0055', textAlign: 'center'}}>
                Sign up!
            </Text>
        </TouchableWithoutFeedback>
    )
};

export default class LoginForm extends React.Component {

    state = {
      email: '',
      password: ''
    };

    formConfig = () => {
        return[
            {
                placeholder: "email",
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
                placeholder: "password",
                icon: 'lock',
                value: this.state.password,
                handleChange: (text) => {
                    this.setState({
                        password: text
                    })
                },
                secureTextEntry: true,
            }
        ]
    };

    handlePress = () => {
        console.log('login')
    };

    render() {
        return(
            <View style={style.container}>
                <Input config={this.formConfig()}/>
                <Text style={style.h4}>Not a member?</Text>
                <SignUpButton onpress={() => this.props.navigate('Register')}/>
                <Divider style={{marginTop: 5}}/>
                <Button title={"Submit"} handlePress={() => this.handlePress()}/>
            </View>
        )
    }
}



const style = StyleSheet.create({
    container: {
    },
    h4: {
        fontSize: 12,
        textAlign: 'center',
        padding: 10
    }
});
