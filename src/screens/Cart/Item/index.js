import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Botao from '../../../components/Botao';
import CampoInteiro from '../../../components/CampoInteiro';
import style from './style';

export default function Item({nome, preco, descricao, quantidade: quantidadeInicial}) {
    const [quantidade, setQuantidade] = useState(quantidadeInicial);
    const [total, setTotal] = useState(preco*quantidadeInicial);

    const atualizaQuantidadeTotal = (novaQuantidade) => {
        setQuantidade(novaQuantidade);
        calculaTotal(novaQuantidade);
    }

    const calculaTotal = (novaQuantidade) => {
        setTotal(novaQuantidade * preco);
    }

    return (
       <>
            <View style={style.informacao} >
                <Text style={style.nome}>{nome}</Text>
                <Text style={style.descricao}>{descricao}</Text>
                <Text style={style.preco}>{
                        Intl.NumberFormat('pt-BR', {
                            style: 'currency', currency: 'BRL'
                        }).format(preco)
                    }
                </Text>
            </View>
            <View style={style.carrinho}>
                <View>
                    <View style={style.valor}>
                        <Text style={style.descricao}>Quantidade:</Text>
                        <CampoInteiro style={style.quantidade} valor={quantidade} acao={atualizaQuantidadeTotal}/>
                    </View>
                    <View style={style.valor}>
                        <Text style={style.descricao}>Total: </Text>
                        <Text style={style.preco}>{
                            Intl.NumberFormat('pt-BR', {
                                style: 'currency', currency: 'BRL'
                            }).format(total)}
                        </Text>
                    </View>
                </View>
                <Botao valor='Remover do carrinho' acao={() => {}} />
            </View>
            <View style={style.divisor} />
       </>
    );
} 