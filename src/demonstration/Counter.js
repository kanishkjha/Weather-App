import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Counter = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('Count changed.')

    return () => {
      console.log('Cleanup function called.')
    }
  }, [count])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`Count: ${count}`}</Text>
      <View style={styles.buttonWrapper}>
        <Button
          color={'red'}
          title={'Increase the count'}
          onPress={() => setCount(count + 1)}
          style={styles.button}
        />
        <Button
          color={'blue'}
          title={'Decrease the count'}
          onPress={() => setCount(count - 1)}
          style={styles.button}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold'
  },
  buttonWrapper: {
    flexDirection: 'row',
    gap: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20
  }
})
export default Counter
