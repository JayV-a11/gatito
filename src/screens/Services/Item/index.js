import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Botao from '../../../components/Botao';
import CampoInteiro from '../../../components/CampoInteiro';
import style from './style';

export default function Item({nome, preco, descricao}) {
    const [quantidade, setQuantidade] = useState(1);
    const [total, setTotal] = useState(preco);
    const [expandir, setExpandir] = useState(false);

    const atualizaQuantidadeTotal = (novaQuantidade) => {
        setQuantidade(novaQuantidade);
        calculaTotal(novaQuantidade);
    }

    const calculaTotal = (novaQuantidade) => {
        setTotal(novaQuantidade * preco);
    }

    const inverteExpandir = () => {
        setExpandir(!expandir);
        atualizaQuantidadeTotal(1);
    }

    return (
       <>
            <TouchableOpacity 
                style={style.informacao}
                onPress={inverteExpandir}
            >
                <Text style={style.nome}>{nome}</Text>
                <Text style={style.descricao}>{descricao}</Text>
                <Text style={style.preco}>{
                        Intl.NumberFormat('pt-BR', {
                            style: 'currency', currency: 'BRL'
                        }).format(preco)
                    }
                </Text>
            </TouchableOpacity>
            {expandir &&
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
                    <Botao valor='Adicioanr ao carrinho' acao={() => {}} />
                </View>
            }
            <View style={style.divisor} />
       </>
    );
} 