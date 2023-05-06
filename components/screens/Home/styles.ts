import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // height: 'auto',
        paddingTop: 120,
        paddingBottom: 400,
    },
    title: {
        fontSize: 26,
        textTransform: 'uppercase',
        letterSpacing: 10,
        fontWeight: '400',
        color: 'rgba(255,255,255,0.9)',
        marginTop: 'auto',
        marginBottom: 'auto',
        alignSelf: 'center'
    },
    header: {
        position: 'absolute',
        width: '100%',
        zIndex: 1,
        height: 100,
        paddingTop: 40,
        backgroundColor: 'rgba(143,7,14,0.92)',
        marginBottom: 20,
    },
    bottom: {
        height: 120,
        
    }
})

export default styles