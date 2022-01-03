            #language: pt

            Funcionalidade: Tela de cadastro
            Como cliente da EBAC-SHOP
            Quero fazer meu cadastro
            Para finalizar minha compra

            Cenário: Cadastro de um cliente
            Dado que eu preencha o formulário com os seguintes dados obrigatórios:
            | nome   | sobrenome              | país   | endereço                         | cidade    | cep       | celular         | email                                                                  |
            | Julia  | Vera Aline Freitas     | Brasil | Quadra 112 Norte Alameda 26, 341 | Palmas    | 77006-182 | (63) 99440-1491 | jjuliaveraalinefreitas@predialnet.com.br                               |
            | Emilly | Marcela Evelyn Drumond | Brasil | Rua António Lino Bandeira, 546   | Guarapari | 29215-220 | (27) 98556-1399 | emillymarcelaevelyndrumond..emillymarcelaevelyndrumond@valltech.com.br |
            Quando clicar em "finalizar compra"
            Então devo ser redirecionado para a página de pagamento

            Cenário: E-mail inválido
            Dado que eu preencha o formulário com os seguintes dados obrigatórios:
            | nome   | sobrenome  | país   | endereço                         | cidade    | cep       | celular        | email              |
            | Amanda | Aline Luiz | Brasil | Quadra 112 Norte Alameda 26, 341 | São Paulo | 03739-060 | (11) 945347844 | amanda.luiz@tecnet |
            Quando clicar em "finalizar compra"
            Então deve exibir a mensagem de alerta "E-mail inválido"

            Cenário: Cadastro com campos vazios
            Dado que eu preencha o formulário com os seguintes dados obrigatórios:
            | nome   | sobrenome          | país   | endereço                         | cidade    | cep       | celular         | email                                                                  |
            |        | Vera Aline Freitas | Brasil | Quadra 112 Norte Alameda 26, 341 | Palmas    | 77006-182 | (63) 99440-1491 | jjuliaveraalinefreitas@predialnet.com.br                               |
            | Emilly |                    | Brasil | Rua António Lino Bandeira, 546   | Guarapari | 29215-220 | (27) 98556-1399 | emillymarcelaevelyndrumond..emillymarcelaevelyndrumond@valltech.com.br |
            Quando clicar em "finalizar compra"
            Então deve exibir a mensagem de alerta "Preencha os campos obrigatórios"
