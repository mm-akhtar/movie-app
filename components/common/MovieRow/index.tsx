import React, { useEffect, useState } from 'react'
import styles from './styles'
import { FlatList, Image, ScrollView, Text, View } from 'react-native'
import feServices from '../../../connections/fe-services'
interface IMovieRow {
    title: string,
    fetchUrl: string
}
const base_url = "https://image.tmdb.org/t/p/w500";

const MovieRow = ({ title, fetchUrl }: IMovieRow) => {
    const [movies, setMovies] = useState<any[]>([])
    useEffect(() => {
        try {
            const fetchData = async () => {
                const data = await feServices.get(fetchUrl)
                // console.log(data.data.results)
                setMovies(data.data.results)
            }
            fetchData()
        } catch (e) {
            console.log(e)
        }
    }, [])
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                data={movies}
                renderItem={({ item }: any) => (
                    <>
                        <Image source={{
                            uri: `${base_url + item?.poster_path}`
                        }} style={styles.poster} />
                    </>
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}
export default MovieRow