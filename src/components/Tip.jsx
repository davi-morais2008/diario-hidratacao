import { StyleSheet ,View, Text } from "react-native"
import { COLORS } from "../constants/colors"

export default function Tip() {



    return(
        <View style={styles.container}>
            <Text style={styles.icon}>💡</Text>
            <View style={styles.content}>
                <Text style={styles.title} >Dica de Sáude</Text>
                <Text style={styles.text}>Beber água regularmente melhora a concentração, a digestão e mantém sua energia alta ao longo do dia</Text>
            </View>

        </View>

        
    )
};

const styles = StyleSheet.create({
    container:{
        width: '90%',
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
        gap: 16,
        marginTop: 24,
        marginBottom: 24,
    },

    icon:{
        fontSize: 34
    },

    content:{
        maxWidth:'90%'
    },

    title:{
        color:COLORS.textMain,
        fontWeight: 800
    },

    text:{
        color: COLORS.textMuted,
        fontSize: 12
    }

})