import React, { useEffect, useState } from 'react'
import styles from './styles'
import { Image, View } from 'react-native'
import YoutubePlayer from "react-native-youtube-iframe";
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
const base_url = "https://image.tmdb.org/t/p/w500";


interface IDetailsHeader {
    image: string,
    trailerUrl: string,
}

const DetailsHeader = ({ image, trailerUrl }: IDetailsHeader) => {
    const [show, setShow] = useState(false)
    useEffect(() => {
        const intervalId = setTimeout(() => {
            setShow(true)
        }, 2000);
        return () => clearInterval(intervalId);
    }, [])

    const changeHandler = (e: string) => {
        if (e === 'ended') {
            setShow(false)
        }
        if (e == 'paused') {
            setShow(false)
        }
    }
    return (
        <View style={{ paddingTop: 100, backgroundColor: '#ff0', maxHeight: 319, flex: 1 }}>
            <View style={{ flex: 1, zIndex: show ? -1 : 1 }}>
                <Image style={styles.header} source={{ uri: `${base_url + image}` }}></Image>
                <AntDesign name='play' onPress={() => setShow(true)} size={50} color={'#fff'} style={{ marginTop: '20%', marginLeft: '42.5%', position: 'absolute', zIndex: 2 }} />
                <View style={styles.top} />
            </View>
            {trailerUrl && <>
                <YoutubePlayer
                    height={320}
                    play={show}
                    videoId={trailerUrl}
                    volume={1}
                    initialPlayerParams={{ rel: false, loop: true, controls: false, modestbranding: false }}
                    onChangeState={changeHandler}
                />
            </>}
        </View>
    )
}

export default DetailsHeader