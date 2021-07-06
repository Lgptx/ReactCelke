import React, { useEffect, useState } from 'react';
import { Container, ConteudoTitulo, Titulo, ButtonSucess, BotaoAcao, BtnAnteriorProximo, ButtonPrimary, Table, TextDanger, TextSucess } from '../../styles/custom_adm';


export const Home = () =>{

    const [data, setData] = useState([]);

    var dataAtual = new Date();
    var ano = dataAtual.getFullYear();
    var mes = dataAtual.getMonth() + 1;
    //console.log("Mês:" + mes + " do ano:" + ano)
    const [dataView, setDataView] = useState({
        ano,
        mes
    })

    const anterior = async () => {
        if(dataView.mes === 1){
            setDataView({
                ano: dataView.ano - 1,
                mes: 12    
            })
        }else{
            setDataView({
                ano: dataView.ano,
                mes: dataView.mes - 1
            })
        }
    }

    const proximo = async () => {
        if(dataView.mes === 12){
            setDataView({
                ano: dataView.ano + 1,
                mes: 1
            })
        }else{
            setDataView({
                ano: dataView.ano,
                mes: dataView.mes + 1
            })   
        }
    }
    const listarExtrato = async e => {
        var valores = [
            {
                "id": 1,
                "nome": "Agua",
                "valor": 347,
                "tipo": 1,
                "situacao": "Pago"
            },
            {
                "id": 2,
                "nome": "Luz",
                "valor": 347.45,
                "tipo": 1,
                "situacao": "Pendente"
            },
            {
                "id": 3,
                "nome": "Salário",
                "valor": 1100,
                "tipo": 2,
                "situacao": ""
            }
        ]
        setData(valores);
    }

    useEffect(() => {
        listarExtrato(); 
    }, []);


    return(
        <Container>
            <ConteudoTitulo>
                <Titulo>Listar Situação Financeira</Titulo>
                    <BotaoAcao>
                        <ButtonSucess>Cadastrar</ButtonSucess>
                    </BotaoAcao>
            </ConteudoTitulo>
            <BtnAnteriorProximo>
                <ButtonPrimary type="button" onClick={() => anterior()}> Anterior </ButtonPrimary>
                <span>{dataView.mes + " / " + dataView.ano}</span>
                <ButtonPrimary type="button" onClick={() => proximo()}>Próximo</ButtonPrimary>
            </BtnAnteriorProximo>
            <Table>
                <thead>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Tipo</th>
                    <th>Situacao</th> 
                    <th>Valor</th>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.tipo === 1 ? <TextDanger>Pagamento</TextDanger> : <TextSucess>Recebimento</TextSucess> }</td>
                            <td>{item.situacao}</td>
                            <td>{item.valor}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                        <td>Total</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>586.15</td>
                </tfoot>    
            </Table>
        </Container>
    )
}