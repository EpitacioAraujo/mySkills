import React from 'react'
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    TouchableOpacityProps
} from 'react-native'

interface SkillCardProps extends TouchableOpacityProps {
    skill: string
}

export function SkillCard({ skill, ...rest }: SkillCardProps) {
    return (
        <TouchableOpacity 
            style={styles.skillButton}
            {...rest}
        >
            <Text style={styles.skillText}>
                {skill}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    skillButton: {
        marginVertical: 10,
        backgroundColor: '#1f1e35',
        padding: 15,
        borderRadius: 30,
        alignItems: 'center'
    },
    skillText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
})