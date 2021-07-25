            #language: pt

            Funcionalidade: Login na plataforma
            Como cliente da EBAC-SHOP
            Quero fazer o login(autenticação) na plataforma
            Para visualizar meus pedidos

            Contexto:
            Dado que eu acesse a página de autenticação da EBAC-SHOP

            Cenário: Autenticação válida
            Quando eu digitar o usuário "joão@ebac.com.br"
            E a senha "senha@123"
            Então deve redirecionar para tela de checkout

            Cenário: Usuário inexistente
            Quando eu digitar o usuário "xxxyyyzzz@ebac.com.br"
            E a senha "senha@123"
            Então deve exibir uma mensagem de alerta "Usuário inexistente"

            Cenário: Usuário com senha inválida
            Quando eu digitar o usuário "joão@ebac.com.br"
            E a senha "isadhidasd"
            Então deve exibir uma mensagem de alerta "Usuário ou senha inválidos"

            Esquema do Cenário: Autenticar multiplos usuários
            Quando eu digitar o <usuario>
            E a <senha>
            Entao deve redirecionar para tela de checkout

            Exemplos:
            | usuario             | senha       |
            | "joão@ebac.com.br"  | "senha@123" |
            | "maria@ebac.com.br" | "senha@123" |
            | "jose@ebac.com.br"  | "senha@123" |