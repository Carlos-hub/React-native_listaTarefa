import React from "react";
import { ImageBackground, StyleSheet, View, StatusBar, ScrollView  } from "react-native";
import Header from './components/Header';
import Menu from './components/Menu';
import TarefaSingle from './components/TarefaSingle';
import Styles from './style/Style';
import useState from 'react';





function App() {
  const [tarefas, setTarefas] = useState([
    {
      id: 1,
      tarefa: 'Minha tarefa 1.'
    },
    {
      id: 2,
      tarefa: 'Minha tarefa 2.'
    },
    {
      id: 3,
      tarefa: 'Minha tarefa 3.'
    }
  ]);



  return (
    <View>
      <StatusBar hidden />
            <Header></Header>
                {
                tarefas.map(function (val){
                  <TarefaSingle></TarefaSingle>
                })
              }
    </View>

  )



}
export default App;


