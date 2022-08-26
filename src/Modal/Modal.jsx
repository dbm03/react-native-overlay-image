import {
    TouchableWithoutFeedback,
    StyleSheet,
    Modal as NativeModal,
    View,
} from 'react-native'

const styles = StyleSheet.create({
    modalContent: {
        // using only margin: 'auto' doesn't work
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    modalOverlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0, 0.24)',
    },
})
const Modal = ({
    animationType = 'fade', transparent = true, style, ...props
}) => {
    const overlay = [styles.modalOverlay, style]

    return (
        <View>
            <NativeModal
                visible={props.visible}
                transparent={transparent}
                onRequestClose={props.dismiss}
                animationType={animationType}
            >
                <TouchableWithoutFeedback onPress={props.dismiss}>
                    <View style={overlay} />
                </TouchableWithoutFeedback>

                <View style={styles.modalContent}>
                    {props.children}
                </View>
            </NativeModal>
        </View>
    )
}

export default Modal
