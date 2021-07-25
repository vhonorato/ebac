            #language: pt

            Funcionalidade: Tela de cadastro
            Como cliente da EBAC-SHOP
            Quero fazer meu cadastro
            Para finalizar minha compra

            Cenário: Cadastro de um cliente
            Dado que eu preencha o formulário com os seguintes dados obrigatórios:
            | nome     | sobrenome               | país   | endereço                           | cidade              | cep       | celular         | email                                                                        |
            | Julia    | Vera Aline Freitas      | Brasil | Quadra 112 Norte Alameda 26, 341   | Palmas              | 77006-182 | (63) 99440-1491 | jjuliaveraalinefreitas@predialnet.com.br                                     |
            | Emilly   | Marcela Evelyn Drumond  | Brasil | Rua António Lino Bandeira, 546     | Guarapari           | 29215-220 | (27) 98556-1399 | emillymarcelaevelyndrumond..emillymarcelaevelyndrumond@valltech.com.br       |
            | Betina   | Sónia Viana             | Brasil | Rua Vaticano, 738                  | Teixeira de Freitas | 45994-761 | (73) 98511-6543 | betinasoniaviana-98@tigertimoveis.com                                        |
            | Isadora  | Manuela Drumond         | Brasil | Rua Q, 601                         | Gurupi              | 77433-450 | (63) 98418-7105 | isadoramanueladrumond-72@tecnew.net                                          |
            | Yago     | Victor Ribeiro          | Brasil | Rua Miguel Kuninfas, 181           | Itajaí              | 88307-060 | (47) 99657-7025 | yagovictorribeiro-72@cancaonova.com                                          |
            | Caroline | Renata Aragão           | Brasil | Rua Honduras, 642                  | Aracaju             | 49080-320 | (79) 99841-2804 | carolinerenataaragao__carolinerenataaragao@outershoes.com.br                 |
            | Andrea   | Francisca Flávia Farias | Brasil | Rua António Josino de Andrade, 114 | São João Del Rei    | 36307-308 | (32) 99793-2839 | andreafranciscaflaviafarias_@bluespropaganda.com                             |
            | Leonardo | Osvaldo Novaes          | Brasil | Alameda Florida, 310               | São José            | 88110-692 | (48) 99748-2691 | leonardoosvaldonovaes..leonardoosvaldonovaes@viasegbrasil.com.br             |
            | Aurora   | Evelyn Renata da Cunha  | Brasil | Vila Chico Buarque, 474            | Belém               | 66030-366 | (91) 98575-3188 | auroraevelynrenatadacunha..auroraevelynrenatadacunha@sistectecnologia.com.br |
            | Tomás    | Nathan Alves            | Brasil | Caminho 36, 269                    | Salvador            | 41490-192 | (71) 99463-0643 | ttomasnathanalves@molsanto.com                                               |
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
            | nome     | sobrenome               | país   | endereço                           | cidade              | cep       | celular         | email                                                                  |
            |          | Vera Aline Freitas      | Brasil | Quadra 112 Norte Alameda 26, 341   | Palmas              | 77006-182 | (63) 99440-1491 | jjuliaveraalinefreitas@predialnet.com.br                               |
            | Emilly   |                         | Brasil | Rua António Lino Bandeira, 546     | Guarapari           | 29215-220 | (27) 98556-1399 | emillymarcelaevelyndrumond..emillymarcelaevelyndrumond@valltech.com.br |
            | Betina   | Sónia Viana             |        | Rua Vaticano, 738                  | Teixeira de Freitas | 45994-761 | (73) 98511-6543 | betinasoniaviana-98@tigertimoveis.com                                  |
            | Isadora  | Manuela Drumond         | Brasil |                                    | Gurupi              | 77433-450 | (63) 98418-7105 | isadoramanueladrumond-72@tecnew.net                                    |
            | Yago     | Victor Ribeiro          | Brasil | Rua Miguel Kuninfas, 181           |                     | 88307-060 | (47) 99657-7025 | yagovictorribeiro-72@cancaonova.com                                    |
            | Caroline | Renata Aragão           | Brasil | Rua Honduras, 642                  | Aracaju             |           | (79) 99841-2804 | carolinerenataaragao__carolinerenataaragao@outershoes.com.br           |
            | Andrea   | Francisca Flávia Farias | Brasil | Rua António Josino de Andrade, 114 | São João Del Rei    | 36307-308 |                 | andreafranciscaflaviafarias_@bluespropaganda.com                       |
            | Leonardo | Osvaldo Novaes          | Brasil | Alameda Florida, 310               | São José            | 88110-692 | (48) 99748-2691 |                                                                        |
            |          |                         |        |                                    |                     |           |                 |                                                                        |
            Quando clicar em "finalizar compra"
            Então deve exibir a mensagem de alerta "Preencha os campos obrigatórios"
