import React from "react";
import { ImageBackground, Text, View} from "react-native";
import styles from '../style/Style';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = () => {
    const image = require('./images/bg.jpg');
        return(
            <ImageBackground source={image} style={styles.image}>
                <View style={styles.opacidade}>
                <Text style={styles.textHeader}>Lista de tarefas</Text>
                </View>
                
            </ImageBackground>


        )
}

export default Header;