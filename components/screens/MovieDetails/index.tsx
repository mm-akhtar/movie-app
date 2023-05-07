import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import styles from './styles'
import { useEffect, useState } from 'react'
import feServices from '../../../connections/fe-services'
import feRequests from '../../../connections/fe-requests'
const base_url = "https://image.tmdb.org/t/p/w500";
import YoutubePlayer from "react-native-youtube-iframe";
import DetailsHeader from '../../../components/common/DetailsHeader';

const MovieDetails = () => {
    const [movie, setMovie] = useState<any>({})
    const [trailerUrl, setTrailerUrl] = useState<string>('')
    const id = '640146'
    useEffect(() => {
        try {
            const fetchData = async () => {
                const data = await feServices.get(`${feRequests.fetchById(id)}`)
                const result = data?.data?.videos
                // console.log(data?.data)
                const trailer = result?.results.find((item: any) => item.type === 'Trailer')
                setTrailerUrl(trailer?.key)
                setMovie(data.data)
            }
            fetchData()
        } catch (e) {
            console.log(e)
        }
    }, [])
    return (
        <View style={styles.container}>
            <DetailsHeader
                image={movie.backdrop_path}
                trailerUrl={trailerUrl}
            />
            <View style={{ padding: 12 }}>
                <Text style={styles.title}>{movie?.title}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.match}>98% Match</Text>
                    <Text style={styles.year}>{movie?.release_date.split('-')[0]}</Text>
                    <Text style={styles.vote}>{movie?.vote_average.toFixed(1)}</Text>
                </View>
            </View>
        </View>
    )
}

export default MovieDetails