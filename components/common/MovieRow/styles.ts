import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // alignItems: 'flex-start',
        // justifyContent: 'center',
        // paddingTop: 50,
        paddingLeft: 10,
        marginBottom: 20
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 7
    },
    poster: {
        width: 110,
        height: 180,
        resizeMode: 'cover',
        borderRadius: 5,
        margin: 5
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
})

export default styles