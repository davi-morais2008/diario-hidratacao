import { StyleSheet ,View, Text, Pressable } from "react-native"
import { COLORS } from "../constants/colors"

export default function DailyGoal({goal, metaAcrescimo, metaSubtracao}){
    return(
        <View style={styles.container}>
            <Text style={styles.label} >Ajustar meta diária</Text>
            <View style={styles.content}>
                <Pressable onPress={() => metaSubtracao(250)} style={styles.button} >
                    <Text style={styles.textButton} >-250</Text>
                </Pressable>
                <Text style={styles.textGoal} >{goal} ml</Text>
                <Pressable onPress={() => metaAcrescimo(250)} style={styles.button} >
                    <Text style={styles.textButton} >+250</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    borderRadius: 16,
    padding: 10,
    alignItems: 'center',
    alignSelf: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 26
  },

  label: {
    fontSize: 14,
    color: COLORS.textMuted,
    marginBottom: 14,
  },

  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 18,
    marginBottom: 16,
    textAlign: 'center',
  },

  button: {
    flex: 1,
    borderColor: COLORS.primary,
    borderWidth: 2,
    paddingVertical: 8,
    borderRadius: 10,
    alignItems: 'center',
  },

  textButton: {
    color: COLORS.primary,
    fontWeight:600,
    fontSize: 14
  },

  textGoal: {
    fontSize: 20,
    fontWeight: 800,
    color: COLORS.textMain

  }
    
});