            #language: pt

            Funcionalidade: Configurar produto
            Como cliente da EBAC-SHOP
            Quero configurar meu produto de acordo com meu tamanho e gosto
            E escolher a quantidade
            Para depois inserir no carrinho

            Contexto:
            Dado que eu esteja na página do produto

            Cenário: Seleções de cor, tamanho e quantidade devem ser obrigatórios
            Quando clicar em comprar
            Então deve exibir uma mensagem de alerta "Escolha um tamanho, cor e quantidade"

            Cenário: Limpar seleção
            Quando eu escolher uma cor, tamanho e quantidade
            Entao ao clicar em Limpar o estado da página deve voltar ao original

            Esquema do Cenário: Inserir produto no carrinho
            Quando eu clicar no botão <tamanho> e <cor>
            E selecionar uma <quantidade>
            Entao ao clicar em comprar o produto deve ir ao carrinho

            Exemplos:

            | tamanho | cor    | quantidade |
            | xs      | blue   | 9          |
            | xs      | orange | 10         |
            | xs      | red    | 8          |
            | s       | blue   | 1          |
            | s       | orange | 7          |
            | s       | red    | 4          |
            | m       | blue   | 1          |
            | m       | orange | 9          |
            | m       | red    | 5          |
            | l       | blue   | 5          |
            | l       | orange | 2          |
            | l       | red    | 8          |
            | xl      | blue   | 7          |
            | xl      | orange | 5          |
            | xl      | red    | 6          |
