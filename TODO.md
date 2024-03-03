
## TODO List:

> Trocar a fonte do app
>
> https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating


# Project Structure

## Routes
> Agenda (calendar)
> Métricas (dashboard)
> Receitas (income)
> Despesas (expense)
> Fechamento de caixa (month-end-closing)

### Detailing

> Métricas:
    1. Gráfico de Receitas e Despesas
    2. Gráfico de Lucro
    3. Gráfico com quantidade de Procedimentos mensais realizados


> Fechamento de caixa:
    Precisará ser um sistema de abas para que um passo a passo seja seguido.
        Aba 1
            Tela com listagem de fechamentos de caixas passados.
            Botão "Fazer novo fechamento de caixa" (só ficará habilitado no primeiro dia de cada mês).
            Modal após o clique do botão "Para iniciar o fechamento do caixa, garanta que as tabelas de Receitas e Despesas
            estejam atualizadas e corretas." Botões: "Iniciar o fechamento" e "Voltar".
        Aba 2
            Preencha os valores acumulados no(em):
            - Banco do Brasil
            - PagBank
            - Dinheiro
        Aba 3
            Todas as receitas de cartão de crédito precisam ser listadas para ter sua taxa conferida. Precisa estar igual na PagBank.
        Aba 4
            Tabela com resultado dos cálculos no lado esquerdo da tela:
                Receita bruta
                Receita líquida (subtraindo taxa do cartão)
                Despesas

                Lucro Mirian
                Lucro Alana
            
            Tabela com texto por escrito do lado direito da tela, formato de lista:
                - Mirian deve receber o valor de R$ XX,XX (se positivo, verbo receber)
                - Alana deve pagar o valor de R$ XX,XX (se negativo, verbo pagar)


