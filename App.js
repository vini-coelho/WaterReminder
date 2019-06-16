import React, {Component} from 'react';
import { StatusBar, Animated, StyleSheet, Text, View, Dimensions, TouchableWithoutFeedback } from 'react-native';
import Button from './src/components/Button';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Water from './src/components/Water'
import AmountSelection from './src/screens/AmountSelection';
import Settings from './src/screens/Settings'

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      waterHeight: new Animated.Value(0),
      waterHeightCom: 0,   
      goal: 2000,
      waterLeft: 2000,
      goalReached: false,
      visible: false,
      settVisible: false,
      settText: null,
    }
  }

  drinkWater = lvl => {
    this.setState({visible: false})
    const height = Dimensions.get('screen').height
    const goal = this.state.goal
    const lvlHeight = lvl*(height/goal)
    const waterHeightCom = this.state.waterHeightCom+lvlHeight
    const waterLeft = this.state.waterLeft - lvl

    Animated.timing(this.state.waterHeight, {
      toValue: waterHeightCom,
      timing: 2000,
    }).start()

    if (waterLeft <= 0) {
      const goalReached = true
      this.setState({goalReached})
    }
    this.setState({waterLeft, waterHeightCom})
  }


  changeText = text => {
    this.setState({settText: text})
  }

  setWaterAmount = peso => {
    const amount = peso*35
    const goal = amount
    const waterLeft = amount 

    if (amount === this.state.goal){
      this.setState({settVisible: false})
      return
    }

    this.setState({ goal, waterLeft, settVisible: false,  waterHeight: new Animated.Value(0),
      waterHeightCom: 0 })
  }

  openSelection = () => {
    this.setState({visible: true})
  }

  openSettings = () => {
    this.setState({settVisible: true})
  }

  render() {
    return (
      <>
      <StatusBar translucent={true} barStyle='dark-content' backgroundColor='rgba(0,0,0,0)'/>
      <View style={styles.app}>

        <Settings onCancel={() => this.setState({settVisible: false})}
        isVisible={this.state.settVisible}
        onSave={() => this.setWaterAmount(this.state.settText)}
        onType={this.changeText}
        waterAmount={this.state.settText*35}
        textShow={this.state.settText}
        />

        <AmountSelection onCancel={() => this.setState({visible: false})}
        isVisible={this.state.visible}
        onClick={this.drinkWater}
        />

        <View style={styles.water}>
          <Water alt={this.state.waterHeight}/>
        </View>

        <View style={styles.container}>
          <View stye={styles.header}> 
            {!this.state.goalReached ? <Text style={styles.title}>Hoje ainda preciso beber:</Text> :
            <Text style={styles.title}>Objetivo alcançado!</Text>}
            {!this.state.goalReached ? 
            <Text style={styles.waterText}>{this.state.waterLeft} ml</Text> : 
            <Text style={styles.waterText}>{this.state.goal} ml</Text> }
          </View>

          <View style={styles.bottom}>
            <View style={styles.body}>
              <Button turnedOff={this.state.goalReached} onClick={this.openSelection}/>
            </View>
            <View style={styles.footer}>
              <Icon name='poll' size={30} color='#111'/>
              <Icon name='notifications-none' size={30} color='#111'/>
              <TouchableWithoutFeedback onPress={this.openSettings}>
                <Icon name='settings' size={30} color='#111'/>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
      </View>
    </>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#ddd',
  },
  container: {
    marginTop: StatusBar.currentHeight,
    justifyContent: 'space-between',
    padding: 15,
    paddingBottom: 40,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  header: {
    backgroundColor: '#111',
    flex: 1,
  },
  body: {
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: '#1a1a1a',
  },
  waterText: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#1F1F1F'
  },
  bottom: {
    height: 140,
    justifyContent: 'space-between',
  },
  water: {
    flex: 1,
    justifyContent: 'flex-end',
  },

});
