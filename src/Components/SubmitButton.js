import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
class SubmitButton extends Component {
    render() {
        return (
            <View style={style.container}>
                <Icon name="login" reverse style={{
                    fontSize: 30,
                    color: 'white'}} onPress={this.props.handlePress} disabled={true}/>
            </View>
        );
    }
}


const style = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 50,
        height: 70,
        borderColor: 'transparent',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 100,
        top: 280,
        backgroundColor: '#16d3b8',
        width: 70
    }
});

export default SubmitButton;
