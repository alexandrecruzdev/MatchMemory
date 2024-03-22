import React from 'react';
import { View, SafeAreaView, Text, ScrollView, StyleSheet, Image, Button, TouchableOpacity, TextInput } from 'react-native';
import DayCards from './DayCards';
import ButtonNav from './ButtonNav';
import EntryText from './EntryText';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import HourInput from './NumberInput';
import NumberInput from './NumberInput';
import HourEntry from './HourEntry';

const AddTarefa = () => {
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <KeyboardAwareScrollView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <ButtonNav />
                    <View style={styles.header}>
                        {/* header */}
                        <View style={styles.containerLogo}>
                            <Image
                                source={require('./images/logo_sem_fundo.png')}
                                style={styles.logo}
                            />
                        </View>
                      
                    </View>
                    <View style={styles.content}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.scrollViewContent}
                        >
                            <View style={styles.dayCardsContainer}>
                                <DayCards dayMonth="23" dayWeek="QUI" />
                                <DayCards dayMonth="24" dayWeek="SEX" />
                                <DayCards dayMonth="23" dayWeek="QUI" />
                                <DayCards dayMonth="24" dayWeek="SEX" />
                                <DayCards dayMonth="23" dayWeek="QUI" />
                                <DayCards dayMonth="24" dayWeek="SEX" />
                                <DayCards dayMonth="23" dayWeek="QUI" />
                                <DayCards dayMonth="24" dayWeek="SEX" />
                                <DayCards dayMonth="23" dayWeek="QUI" />
                                <DayCards dayMonth="24" dayWeek="SEX" />
                            </View>
                        </ScrollView>
                        <EntryText label="New Memory" placeholder="Write your placeholder here...." />
                        <View style={styles.containerHourEntry}> 
                        <HourEntry/>
                        <HourEntry/>
                        </View>
                       
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    containerHourEntry: {
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    containerLogo: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonNav: {
        flex: 1,
        padding: 8,
    },
    safeAreaView: {
        flex: 1,
        backgroundColor: 'rgb(59,66,196)', // Cor do header
    },
    container: {
        flex: 1,
        backgroundColor: 'rgb(59,66,196)', // Cor do header
        padding: 20,
    },
    header: {
        height: 100, // Defina a altura desejada aqui
        backgroundColor: 'rgb(59,66,196)', // Cor do header
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    logo: {
        width: 120,
        height: 120
    },
    textHeadingWhite: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },
    textHeadingDark: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        margin: 8
    },
    scrollViewContent: {
        flexGrow: 1,
    },
    content: {
        backgroundColor: 'white',
        borderRadius: 25,
        padding: 18,
        marginTop: 10,
    },
    dayCardsContainer: {
        flexDirection: 'row',
    },
});

export default AddTarefa;
