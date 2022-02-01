import React from "react";
import { ImageBackground, Text, View, TouchableOpacity} from "react-native";
import styles from '../style/Style';
import FontAwesome, {
    SolidIcons,
    RegularIcons,
    BrandIcons,
    parseIconFromClassName,
  } from 'react-native-fontawesome';
  import Icon from 'react-native-vector-icons/FontAwesome';
  import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
//   <FontAwesome5 name={'baby'} solid />
const Menu = () => {
    
const validIcon = parseIconFromClassName('fas fa-chevron-left')

        return(
            <View style={styles.viewBtn}>


                <TouchableOpacity title='teste' 
                    style={styles.btnMenu}
                    >
                    <FontAwesome5 name={'home'} solid style={styles.iconView} />
                </TouchableOpacity>

                <TouchableOpacity title='teste'
                    style={styles.btnMenu} onPress={{}}
                    >
                        <FontAwesome5 name={'chart-pie'} solid style={styles.iconView} />
                </TouchableOpacity>
                
                <TouchableOpacity title='teste'
                    style={styles.btnMenu}
                    >
                    <FontAwesome5 name={'user'} solid style={styles.iconView} />
                </TouchableOpacity>
                <TouchableOpacity title='teste'
                    style={styles.btnMenu} onPress={{}}
                    >
                        <FontAwesome5 name={'stream'} solid style={styles.iconView} />
                </TouchableOpacity>
            </View>


        )
}

export default Menu;