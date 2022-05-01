import React from 'react';
import { View, Text } from 'react-native';
import Botao from '../Botao';
import style from './style';

export default function StatusCarrinho({total}) {
    return(
        <View style={style.conteudo}>
            <View style={style.total}>
                <Text style={style.descricao}>Total do carrinho:</Text>
                <Text style={style.valor}>
                    {Intl.NumberFormat('pt-BR', {
                        style: 'currency', currency: 'BRL'
                    }).format(total)}
                </Text>
            </View>
            <View style={style.botao}>
                <Botao valor={'Concluir Pedido'} invertido />
            </View>
        </View>
    );
}