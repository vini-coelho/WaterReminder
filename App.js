import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions, StatusBar } from 'react-native';
import Button from './src/components/Button';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Water from './src/components/Water'
import AmountSelection from './src/screens/AmountSelection';
import { isFlowBaseAnnotation } from '@babel/types';

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      waterHeight: 0,
      goal: 2300,
      waterLeft: 2300,
      goalReached: false,
      visible: isFlowBaseAnnotation
    }
  }

  drinkWater = lvl => {
    this.setState({visible: false})
    const height = Dimensions.get('window').height
    const goal = this.state.goal
    const lvlHeight = lvl*(height/goal)
    const waterHeight = this.state.waterHeight + lvlHeight
    const waterLeft = this.state.waterLeft - lvl
    if (waterLeft <= 0) {
      const goalReached = true
      this.setState({goalReached})
    }
    this.setState({waterHeight, waterLeft})
  }

  openSelection = props => {
    this.setState({visible: true})
  }

  render() {
    return (
    <View style={styles.app}>

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
            <Button onClick={this.openSelection}/>
          </View>
          <View style={styles.footer}>
            <Icon name='poll' size={30} color='#111'/>
            <Icon name='notifications-none' size={30} color='#111'/>
            <Icon name='settings' size={30} color='#111'/>
          </View>
        </View>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#ddd',
  },
  container: {
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
