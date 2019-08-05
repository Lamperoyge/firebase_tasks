import React, {Fragment} from 'react';
import {View,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Font from 'expo-font'
import { Input } from 'react-native-elements';



export default class FormInput extends React.Component {

    state = {
      fontLoaded: false
    };

    async componentDidMount() {
        await Font.loadAsync({
            'nunito-light': require('../../assets/fonts/Nunito-Light.ttf'),
        });
        this.setState({
            fontLoaded: true
        });
    }

    render() {
        return(
            <View style={styles.container}>
                {this.props.config.map((el, idx) => {
                    return(
                        <Fragment key={idx}>
                            {this.state.fontLoaded? <Input
                                errorStyle={{ color: 'red' }}
                                leftIcon={<Icon
                                    name={el.icon}
                                    size={15}
                                    color={'#bababa'}
                                    style={{marginRight: 20, justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}
                                    />
                                }
                                inputContainerStyle={styles.input}
                                placeholder={el.placeholder}
                                labelStyle={styles.label}
                                inputStyle={{fontFamily: 'nunito-light', fontSize: 12}}
                            /> : null}
                        </Fragment>
                    )
                })}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      marginTop: 80
    },
    label: {
        opacity: 0.5,
        fontFamily: 'nunito-light', fontSize: 20
    },
    input: {
        width: 250,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#D80057',
        marginBottom: 10,
    }
});

