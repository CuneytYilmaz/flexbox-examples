import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components/native'
import Tabs from './Tabs'
import Stack from './Stack'
import Drawer from './Drawer'

const CenterView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #333;
`

const WelcomeText = styled.Text`
  color: white;
  font-size: 20;
`

const WelcomeBtn = styled.TouchableOpacity`
  width: 100px;
  height: 50px;
  background: red;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`

export default class App extends Component {
  render () {
    return (
      <CenterView>
        <WelcomeText>
          Different!
        </WelcomeText>
        <WelcomeBtn onPress={() => alert('Hello!')}>
          <WelcomeText>
            Push Me!
          </WelcomeText>
        </WelcomeBtn>
      </CenterView>
    )
  }
}

// class FlexboxExamples extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={[styles.box, {flex: 1}]}/>
//         <View style={[styles.box, {flex: 1}, {alignSelf: 'flex-end'}]}/>
//         <View style={[styles.box, {flex: 1}]}/>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexDirection: 'row'
//   },
//   box: {
//     height: 50,
//     width: 50,
//     backgroundColor: '#e76e63',
//     margin: 10,
//   }
// })

//export default FlexboxExamples;