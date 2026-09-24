import { StyleSheet ,View, Text } from "react-native"
import { COLORS } from "../constants/colors"

export default function Header({goal}) {



    return(
        <View style={styles.container} >
            <Text style={styles.title} >Diário de Hidratação</Text>
            <Text style={styles.subtitle}>Meta diária: {goal}ml</Text>
        </View>

        
    )
};

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        backgroundColor: COLORS.background
    },
    title:{
        color: COLORS.primary,
    },
    subtitle:{
        backgroundColor: COLORS.background,
    },

})