import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // height: 'auto',
        // paddingTop: 120,
        // paddingBottom: 400,
        justifyContent: 'flex-start',
        backgroundColor: '#000'
    },
    title: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold'
    },
    match: {
        color: '#00aa00',
        fontWeight: 'bold',
        marginEnd:5
    },
    year: {
        color: '#a3a3a3',
        marginEnd: 5
    },
    vote: {
        color: '#fff',
    }
})

export default styles