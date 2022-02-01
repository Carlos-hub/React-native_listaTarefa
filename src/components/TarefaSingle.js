import React from "react";
import { ImageBackground, Text, View, TouchableOpacity} from "react-native";
import styles from '../style/Style';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { ScrollView } from "react-native";
//   <FontAwesome5 name={'baby'} solid />

    const TarefaSingle  = () =>  {
    return(
        <ScrollView>
                <View style={styles.tarefaSingle}>
                    <View style={styles.TarefaSingleContainer}>
                        <Text>Minha Tarefa número 1 do dia xx do mês xx</Text>
                    </View>
                    <View style={styles.botaoExcluiTarefa}>
                        <TouchableOpacity title='press me'>
                            <FontAwesome5 name={'minus-circle'} solid  style={styles.iconTarefa}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>



    );
}


export default TarefaSingle;