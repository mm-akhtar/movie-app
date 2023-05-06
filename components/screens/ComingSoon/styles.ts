import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    poster: {
        height: 400,
        width: 200,
        borderRadius: 5,
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
})

export default styles