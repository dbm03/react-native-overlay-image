import { useState } from 'react'
import {
    View, StyleSheet, TouchableOpacity, Image, Dimensions,
} from 'react-native'
import Modal from './Modal'

const SCREEN_WIDTH = Dimensions.get('window').width

const styles = StyleSheet.create({
    buttonDefault: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    zoomedAvatar: {
        width: SCREEN_WIDTH / 1.5,
        height: SCREEN_WIDTH / 1.5,
        borderRadius: SCREEN_WIDTH / 3,
    },
})

const ImageOverlay = ({
    source, imageButtonStyle, modalStyle, zoomedImageStyle,
}) => {
    // when true, shows a big avatar image on top of everything
    // tapping outside the image hides it
    const [visible, setVisible] = useState(false)

    const imageButton = [styles.buttonDefault, imageButtonStyle]
    const zoomedImage = [styles.zoomedAvatar, zoomedImageStyle]

    return (
        <View>
            <Modal visible={visible} dismiss={() => { setVisible(false) }} style={modalStyle}>
                <Image source={source} style={zoomedImage} />
            </Modal>
            <TouchableOpacity onPress={() => { setVisible(true) }}>
                <Image
                    source={source}
                    style={imageButton}
                />
            </TouchableOpacity>
        </View>
    )
}

export default ImageOverlay
