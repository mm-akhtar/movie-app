import { Image, StyleSheet, Text, View } from 'react-native';
import styles from './styles';

const ComingSoonPage = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Coming Soon</Text>
            <Image source={{ uri: 'https://pbs.twimg.com/media/Ec_7SzOUEAAuGit.jpg' }} style={styles.poster} />
        </View>
    )
}

export default ComingSoonPage
