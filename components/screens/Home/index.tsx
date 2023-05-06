import { ScrollView, Text, View } from 'react-native';
import styles from './styles';
import MovieRow from '../../../components/common/MovieRow';
import feRequests from '../../../connections/fe-requests';

const HomePage = () => {
    return (
        <>
            <View style={styles.header}>
                <Text style={styles.title}>Movie App</Text>
            </View>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <MovieRow title='Action Movies' fetchUrl={feRequests.fetchActionMovies} />
                <MovieRow title='Action Shows' fetchUrl={feRequests.fetchActionShows} />
                <MovieRow title='Animated Shows' fetchUrl={feRequests.fetchAnimationShows} />
                <MovieRow title='Comedy Movies' fetchUrl={feRequests.fetchComedyMovies} />
                <MovieRow title='Comedy Shows' fetchUrl={feRequests.fetchComedyShows} />
                <MovieRow title='Crime SHows' fetchUrl={feRequests.fetchCrimeShows} />
                <MovieRow title='Documentaries' fetchUrl={feRequests.fetchDocumentries} />
                <MovieRow title='Bollywood Movies' fetchUrl={feRequests.fetchHindiMovies} />
                <MovieRow title='Horror Movies' fetchUrl={feRequests.fetchHorrorMovies} />
                <MovieRow title='Only on Netflix' fetchUrl={feRequests.fetchNetflixOriginals} />
                <MovieRow title='Romance Movies' fetchUrl={feRequests.fetchRomanceMovies} />
                <MovieRow title='SciFi Movies' fetchUrl={feRequests.fetchScifiMovies} />
                <View style={styles.bottom}></View>
            </ScrollView>
        </>
    )
}

export default HomePage

