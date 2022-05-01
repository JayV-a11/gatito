import React from 'react';
import { SafeAreaView, StatusBar, KeyboardAvoidingView } from 'react-native';
import styles, {cores} from '../../screens/styles';
import style from './style';

export default function TelaPadrao({children}) {
    return(
        <>
            <SafeAreaView style={style.ajusteTela}>
                <StatusBar backgroundColor={cores.roxo} />
                <KeyboardAvoidingView style={styles.preencher}>
                    {children}
                </KeyboardAvoidingView>
            </SafeAreaView>
            <SafeAreaView style={style.ajusteTelaBaixo} />
        </>
    );
}