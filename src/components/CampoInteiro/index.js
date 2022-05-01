import React from 'react';
import { TextInput } from 'react-native';
import defaultStyle from './style.js'; 

export default function CampoInteiro({valor, style, acao}) {
    const atualiza = (novoValor, acaoRetorno) => {
        const verificaInteiro = novoValor.match(/^[0-9]*$/);
        
        if(!verificaInteiro) return;

        const removeZeroEsquerda = novoValor.replace(/^(0)(.+)/, '$2');
        
        acaoRetorno(removeZeroEsquerda);
    }

    const numeroString = String(valor);

    return (
        <TextInput 
            style={[defaultStyle.campo, style]}
            keyboardType='number-pad'
            selectTextOnFocus
            onChangeText={(novoValor) => {atualiza(novoValor, acao)}}
            value={numeroString}
        /> 
    );
}