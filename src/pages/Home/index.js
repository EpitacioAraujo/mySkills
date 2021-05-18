import React, {useState, useEffect} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    FlatList,
    Platform,
    StatusBar
} from 'react-native'
import { Button } from '../../components/Button'
import { SkillCard } from '../../components/SkillCard';

export function Home(){
    const [newSkill, setNewSkill] = useState();
    const [mySkills, setMySkills] = useState([]);
    const [greetings, setGreetings] = useState('');

    function handleAddNewSkill() {
        setMySkills(oldSkills => [...oldSkills, newSkill])
    }

    useEffect(() => {
        const currentHour = new Date().getHours();

        if(currentHour > 5 && currentHour <= 12){
            setGreetings('Good morning')
        }else if(currentHour >= 12 && currentHour <= 18){
            setGreetings('Good afternoon')
        }else{
            setGreetings('Good night')
        }
    }, [])

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Welcome, Epitacio</Text>
            <Text style={styles.greetings}>{greetings}</Text>

            <TextInput
                style={styles.input}
                placeholder='New skill'
                placeholderTextColor='#555'
                onChangeText={setNewSkill}
            />

            <Button onPress={handleAddNewSkill} />

            <Text style={[styles.title, {marginVertical: 20}]}>
                My skills
            </Text>
            
            <FlatList
                data={mySkills}
                keyExtractor={item => item}
                renderItem={({item}) => (
                    <SkillCard skill={item} />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1, 
        backgroundColor: '#121015',
        paddingVertical: Platform.OS == 'ios' ? 70 : 30,
        paddingHorizontal: 20
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#1f1e35',
        color: '#fff',
        fontSize: 18,
        padding: Platform.OS == 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7
    },
    greetings: {
        color: '#fff'
    }
})