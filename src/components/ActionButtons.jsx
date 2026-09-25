import { StyleSheet ,View, Text, Pressable } from "react-native"
import { COLORS } from "../constants/colors"

export default function ActionButton({ aguaAcrescimo, reset }) {
    return (
        <View>
            <Text>Adicionar ao consumo:</Text>
            <View style={styles.container}>
                <Pressable onPress={() => aguaAcrescimo(200)} style={styles.btnAdd}>
                    <Text>+200</Text>
                </Pressable>

                <Pressable  style={styles.btnAdd}>
                    <Text>+350</Text>
                </Pressable>

                <Pressable  style={styles.btnAdd}>
                    <Text>+500</Text>
                </Pressable>
            </View>
            
        </View>

    )
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems:'center',
        flexDirection:'row',
        gap:20
    },
    btnAdd: {
        width:100,
        height:36,
        backgroundColor:COLORS.primary,
        borderRadius: 14,
        alignItems:'center',
        justifyContent:'center'

    },
    btnReset: {}
})