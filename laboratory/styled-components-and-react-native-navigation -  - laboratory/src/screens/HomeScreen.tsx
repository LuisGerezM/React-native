import { useNavigation } from "@react-navigation/native"
import { Text, TouchableOpacity } from "react-native"

const HomeScreen = ():JSX.Element => {

  const navigation = useNavigation()
  return (
    <>
    <Text>HomeScreen</Text>
      <TouchableOpacity style={{
        backgroundColor: 'blue',
        padding: 10,
        width: '50%',
        alignSelf: 'center',
        borderRadius: 8,
        marginTop: "20%"
      }}
      onPress={() => navigation.navigate("Stack")}
      >
        <Text style={{
        fontSize: 15,
        textAlign: 'center',
        color: 'white'
      }}>Go to stack screen</Text>
      </TouchableOpacity>
      </>
  )
}
export default HomeScreen