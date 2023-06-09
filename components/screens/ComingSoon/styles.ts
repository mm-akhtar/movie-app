import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // alignItems: 'flex-start',
        // justifyContent: 'center',
        // paddingTop: 50,
        // backgroundColor: '#ff000030'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    poster: {
        width: 110,
        height: 180,
        resizeMode:'cover',
        borderRadius: 5,
        margin:5
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
})

export default styles