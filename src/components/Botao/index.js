import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styleFunction from './style';

export default function Botao({pequeno = false, invertido = false, valor, acao, style}) {
    const defaultStyle = styleFunction(pequeno, invertido);

    return(
        <TouchableOpacity onPress={acao} style={[defaultStyle.botao, style]}>
            <Text style={[defaultStyle.valor, style]}>{valor}</Text>
        </TouchableOpacity>
    );
}