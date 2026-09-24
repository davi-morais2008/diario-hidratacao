import { StyleSheet ,View, Text } from "react-native"
import { COLORS } from "../constants/colors"

export default function WaterProgress({aguaConsumida, objetivo}) {

    const percentual = Math.min(Math.round((aguaConsumida / objetivo) * 100),100)

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Você bebeu {aguaConsumida}ml de água hoje</Text>
            <Text style={styles.subtitle}>Você atingiu {percentual}% da meta hoje.</Text>

            <View style={styles.barProgress}>
                {/* + '%', uma concatenação pois sem ela, o width fica apenas como 50 e não 50%. */}
                <View style={styles.progress} width={percentual + '%'}/>
            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        height:200,
        width:'100%',
        backgroundColor:COLORS.background,
        alignItems: 'center',
        justifyContent:'center',
        
    },
    title:{
        color: COLORS.primary,
        fontSize: 20,
    },
    subtitle:{
        fontSize: 20
    },
    barProgress:{
        borderWidth: 1,
        width: '80%',
        height: 36,
        backgroundColor: COLORS.primary

    },
    progress:{
        height: '100%',
        backgroundColor: COLORS.secondary,
        boxShadow: '10px 0px 15px rgba(0, 0, 0, 0.2);,'
    }
})