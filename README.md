# **Projeto de Carrinho de Compras!**


## O desenvolvimento

Neste projeto foi criado  uma versão simplificada, sem persistência no banco de dados, de uma loja online, desenvolvendo em grupo suas funcionalidades de acordo com demandas definidas em um quadro Kanban.

A partir dessas demandas, teremos uma aplicação em que pessoas usuárias poderão:

- Buscar produtos por termos e categorias a partir da API do Mercado Livre;
- Interagir com os produtos buscados de modo a adicioná-los e removê-los de um carrinho de compras em diferentes quantidades;
- Visualizar detalhes e avaliações prévias de um produto, bem como criar novas avaliações e;
- Simular a finalização da compra dos itens selecionados.

---

## Tecnologia:

Tecnologias aplicadas no projeto

- Jest;
- Javascript;
- CSS;
- HTML;
---
## Entregáveis:

1. (TDD) Desenvolva testes de no mínimo 25% de cobertura total e 100% da função `fetchProducts`

2. Crie uma listagem de produtos

3. (TDD) Desenvolva testes de no mínimo 50% de cobertura total e 100% da função `fetchItem`

4. Adicione o produto ao carrinho de compras

5. Remova o item do carrinho de compras ao clicar nele

6. (TDD) Desenvolva testes de no mínimo 75% de cobertura total e 100% da função `saveCartItems`

7. (TDD) Desenvolva testes para atingir 100% de cobertura total e 100% da função `getSavedCartItems`

8. Carregue o carrinho de compras ao iniciar a página

9. Calcule o valor total dos itens do carrinho de compras

10. Limpe o carrinho de compras

11. Adicione um texto de `carregando` durante uma requisição à API

---

## Instalar as dependencias, inicialização do projeto e realização dos testes

Você pode executar todos os testes unitários localmente para verificar a solução proposta com o comando abaixo:

Instalando dependências
```
npm install
```

Iniciando o Cypress
```
npm run cypress:open
```

Iniciando avaliador
```
npm test
```
