import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function GameScreen() {
    const [screen, setScreen] = React.useState('start')
    // const [boxes, setBoxes] = React.useState(['', '', '', '', '', '', '', '', '']);

    const [box1, set1] = React.useState('')
    const [box2, set2] = React.useState('')
    const [box3, set3] = React.useState('')
    const [box4, set4] = React.useState('')
    const [box5, set5] = React.useState('')
    const [box6, set6] = React.useState('')
    const [box7, set7] = React.useState('')
    const [box8, set8] = React.useState('')
    const [box9, set9] = React.useState('')
    const [turn, setTurn] = React.useState(false);
    const [decision, setDecision] = React.useState('');

    function start() {
        return(
            <View>
                <Text style={styles.introText}>Start Game!</Text>
                <TouchableOpacity onPress={() => {
                    setScreen('board')
                }} style={styles.StartButton}><Text>Start</Text></TouchableOpacity>
            </View>
        )
    }

    function check() {
        if (box1 === box2 && box2 === box3 && box1 !== '') {
            box1 === 'X' ? setDecision('Player 1') : setDecision('Player 2')
            setScreen('winScreen');
        }
        else if (box4 === box5 && box5 === box6 && box4 !== '') {
            box4 === 'X' ? setDecision('Player 1') : setDecision('Player 2')
            setScreen('winScreen');
        }
        else if (box7 === box8 && box8 === box9 && box7 !== ''){
            box7 === 'X' ? setDecision('Player 1') : setDecision('Player 2')
            setScreen('winScreen');
        }
        else if (box1 === box5 && box5 === box9 && box1 !== '') {
            box1 === 'X' ? setDecision('Player 1') : setDecision('Player 2')
            setScreen('winScreen');
        }
        else if (box3 === box5 && box5 === box7 && box3 !== '') {
            box3 === 'X' ? setDecision('Player 1') : setDecision('Player 2')
            setScreen('winScreen');
        }
        else if (box1 === box4 && box4 === box7 && box1 !== '') {
            box1 === 'X' ? setDecision('Player 1') : setDecision('Player 2')
            setScreen('winScreen');
        }
        else if (box2 === box5 && box5 === box8 && box2 !== '') {
            box2 === 'X' ? setDecision('Player 1') : setDecision('Player 2')
            setScreen('winScreen');
        }
        else if (box3 === box6 && box6 === box9 && box3 !== '') {
            box3 === 'X' ? setDecision('Player 1') : setDecision('Player 2')
            setScreen('winScreen');
        }
    }

    function reset(){
        set1('')
        set2('')
        set3('')
        set4('')
        set5('')
        set6('')
        set7('')
        set8('')
        set9('')
        setTurn(false)
        setDecision('')
    }



    function board(){
        return(
            <View style={styles.screen}>
                <Text style={styles.turnText}>{turn === false ? "Player 1" : "Player 2"}</Text>
                <View style={styles.board}>
                <View style={styles.row}>
                    <TouchableOpacity onPress={function() {
                        turn === false ? set1("X") : set1("O")
                        setTurn(!turn)
                        setDecision(1+decision)
                        console.log(decision)
                        decision > 2 ? check() : null;
                        
                    }} style={styles.tileBg} disabled={box1 === '' ? false : true}><Text style={styles.boxText}>{box1}</Text></TouchableOpacity>
                    <TouchableOpacity onPress={function() {
                        turn === false ? set2("X") : set2("O")
                        setTurn(!turn)
                        check()
                    }} style={styles.tileBg} disabled={box2 === '' ? false : true}><Text style={styles.boxText}>{box2}</Text></TouchableOpacity>
                    <TouchableOpacity onPress={function() {
                        turn === false ? set3("X") : set3("O")
                        setTurn(!turn)
                        setDecision(decision+1)
                        check()
                    }} style={styles.tileBg} disabled={box3 === '' ? false : true}><Text style={styles.boxText}>{box3}</Text></TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity onPress={function() {
                        turn === false ? set4("X") : set4("O")
                        setTurn(!turn)
                        check()
                    }} style={styles.tileBg} disabled={box4 === '' ? false : true}><Text style={styles.boxText}>{box4}</Text></TouchableOpacity>
                    <TouchableOpacity onPress={function() {
                        turn === false ? set5("X") : set5("O")
                        setTurn(!turn)
                        check()
                    }} style={styles.tileBg} disabled={box5 === '' ? false : true}><Text style={styles.boxText}>{box5}</Text></TouchableOpacity>
                    <TouchableOpacity onPress={function() {
                        turn === false ? set6("X") : set6("O")
                        setTurn(!turn)
                        check()
                    }} style={styles.tileBg} disabled={box6 === '' ? false : true}><Text style={styles.boxText}>{box6}</Text></TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity onPress={function() {
                        turn === false ? set7("X") : set7("O")
                        setTurn(!turn)
                        check()
                    }} style={styles.tileBg} disabled={box7 === '' ? false : true}><Text style={styles.boxText}>{box7}</Text></TouchableOpacity>
                    <TouchableOpacity onPress={function() {
                        turn === false ? set8("X") : set8("O")
                        setTurn(!turn)
                        check()
                    }} style={styles.tileBg} disabled={box8 === '' ? false : true}><Text style={styles.boxText}>{box8}</Text></TouchableOpacity>
                    <TouchableOpacity onPress={function() {
                        turn === false ? set9("X") : set9("O")
                        setTurn(!turn)
                        check()
                    }} style={styles.tileBg} disabled={box9 === '' ? false : true}><Text style={styles.boxText}>{box9}</Text></TouchableOpacity>
                </View>
            </View>
            </View>
        )
    }

    function winScreen(){
        return(
        <View>
            <Text style={styles.winText}>Woohoo! {decision} won!</Text>
            <TouchableOpacity onPress={() => {
                reset()
                setScreen('board')
                }}><Text>Restart?</Text></TouchableOpacity>
        </View>
        )
    }

  return (
    <View style={styles.container}>
        {screen === 'winScreen' ? winScreen() : (screen === 'start' ? start() : board())}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D8D2E1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  introText: {
    fontSize: 34,
  },
  screen: {
      alignItems: 'center'
  },
  turnText: {
      fontSize: 35,
      color: '#6369D1'
  },
  StartButton: {
    margin: 20,
    paddingVertical: 20,
    paddingHorizontal: 40,
    backgroundColor: '#6369D1',
    borderRadius: 15,
    alignItems: 'center'
  },
  tileBg: {
      backgroundColor: '#34435E',
      width: 80,
      height: 80,
      margin: 10,
      alignItems: 'center',
      justifyContent: 'center'
  },
  board: {
      display: 'flex',
      flexDirection: 'column'
  },
  row: {
      display: 'flex',
      flexDirection: 'row'
  },
  boxText: {
      fontSize: 24,
      color: 'white'
  },
  winText: {
      fontSize: 40
  }
});