# **React Pokedex**

<img src="public/imgs/pokemon-gif.gif" alt="gif do projeto">

## **Descrição do Projeto**

O projeto React Pokedex consiste em uma aplicação React que utiliza a [PokeApi](https://pokeapi.co) para exibir uma lista de Pokemons e informações detalhadas sobre um Pokemon específico.

---

## **Funcionalidades**

- **Listagem de Pokemons** : <br>
    A página inicia com uma lista inicial de cartões de dez pokemons, cada cartão possui a imagem, o nome e o(s) tipo(s) de um pokemon específico.

    <img src="public/imgs/pokemon-list.gif"/> 

    <br>

- **Perfil detalhado do Pokemon** : <br>
    Ao clicar em um pokemon da lista, o usuário é redirecionado para uma seção que contém o nome, imagem, tipo(s), ataques e habilidades do pokemon clicado.

    <img src="public/imgs/pokemon-profile.gif"/> 

    <br>

- **Botão de voltar a Tela Inicial** : <br>
    É um botão localizado no canto superior esquerdo na seção de perfil do pokemon que ao ser clicado redireciona a página para a tela inicial.

    <img src="public/imgs/back.gif"/> 

    <br>

- **Botão de Carregar Mais** : <br>
    É um botão localizado no final da página que ao ser clicado exibe mais dez pokemons na lista.

    <img src="public/imgs/load-more.gif"/> 

    <br>

-  **Botão alternador de tema** : <br>
    É um botão localizado no canto superior esquerdo da página que ao ser clicado altera o tema da página para escuro ou claro, sendo o tema claro padrão ao iniciar o projeto.

    <img src="public/imgs/theme-toggler.gif"/> 

    <br>

-  **Select para filtrar um tipo** : <br>
    É um select localizado do lado esquerdo da página que permite o usuário filtrar um tipo específico de Pokemons, assim renderizando na tela uma lista de dez pokemons do tipo escolhido.

    <img src="public/imgs/select-type.gif"/> 

    <br>

-  **Barra de pesquisa** : <br>
    É uma barra de pesquisa localizada no centro da página que permite pesquisar o pokemon que usuário digitar, assim renderizando o cartão desse pokemon na tela. Caso o pokemon pesquisado não exista, a mensagem "Not Found 😥" aparecerá.

    <img src="public/imgs/search-pokemon.gif"/> 

    <br>

-  **Logo Pokemon** : <br>
    É a logo do site localizada na parte superior central. Ao clicar nela a página é recarregada e a lista de pokemons iniciais será renderizada novamente.

    <img src="public/imgs/pokelogo.gif"/> 

    <br>

---

## Ferramentas Utilizadas

**Vite**: <br>
Ferramenta de construção  moderna para projetos web, que oferece uma experiência de desenvolvimento extremamente rápida e eficiente. Foi utilizada porque prefiro utilizar o Vite para trabalhar com projetos React em vez do Create React App.

**React**: <br>
Biblioteca Javascript como foco em criar interfaces de usuário declarativas e dinâmicas, especialmente para aplicações de página única (Single Page Applications - SPAs).

**React-Router-Dom**: <br>
Biblioteca complementar ao React que permite a criação e gerenciamento de rotas em aplicações web de página única. Com essa ferramenta foi possível transitar entre perfil detalhado dos pokemons e tela inicial de forma fluída e rápida, já que com ela não é preciso recarregar a página para isso.

**ContextAPI**: <br>
Ferramenta nativa do React que permite compartilhar dados e estado global entre componentes, sem a necessidade de passar props manualmente em cada nível da árvore de componentes. A ContextAPI foi utilizada para criar a lógica do botão alternador de temas e assim passar essas informações entre os componentes.

**Styled-Components**: <br>
Biblioteca para React que permite escrever estilos de componentes em JavaScript. Assim foi possível definir estilos diretamente em certos componentes, sem a necessidade de criar um arquivo Css externo para estilização desses componentes.

**Axios**: <br>
Biblioteca baseada em JavaScript usada para fazer requisições HTTP de forma simples e eficiente. Com o Axios foi possível se comunicar com a [PokeApi](https://pokeapi.co) de forma simplificada, já que ele automaticamente transforma os dados recebidos em formato JSON, sendo uma melhor opção em relação ao Fetch.

**Material UI**: <br>
Material-UI é uma biblioteca de componentes de interface do usuário para React que implementa o design do Google Material Design e oferece uma experiência de usuário consistente e personalizável em todos os dispositivos.

---

## Como rodar o projeto

**1º - No terminal, clone o projeto na sua máquina :**
```
git clone https://github.com/Jooab/React-Pokedex
```

**2º - Navegue até o caminho do projeto :**
```
cd react-pokedex
```

**3º - Instale as dependências :**
```
npm install
```
**4º - Rode o projeto na sua máquina :**
```
npm run dev
```

---

## Decisões adotadas no projeto


### Utilizando o Axios
Decidi utilizar o Axios nesse projeto em vez de usar o convencional Fetch. Pelo fato do Axios transformar os dados recebidos da API diretamente em arquivo JSON deixou o código mais compreensível e limpo, já que com o Fetch seria necessário transformar os dados da API em JSON antes de conseguir utilizá-los no código, dessa maneira o código possuiria mais linhas.

### Utilizando a ContextAPI
Utilizei a ContextAPI para gerenciar os estados do meu código, tanto para mudar o tema do site quanto para renderizar os cartões de pokemons quando o usuário interage com os elementos na tela.

### Utilizando o hook useRef
Com esse hook consegui criar uma função que é chamada ao clicar na seta dos Ataques, assim fechando e abrindo a lista de ataques conforme o usuário decidir. Decidi utilizar esse hook porque foi a melhor maneira que encontrei de realizar essa funcionalidade, já que senti que o perfil do pokemon ficaria muito poluído caso não houvesse a opção de fechar a lista de ataques.

### Utizando um arquivo externo para o código do Styled Components
Preferi criar um arquivo chamado **css.jsx** em cada pasta de componente para colocar o código de estilização do Styled Components nesse arquivo, assim separando o código de estilização e o código da lógica do componente em arquivos diferentes.

### Utizando o Material UI
Utilizei a biblioteca Material UI para criar animações de carregamento na tela. Sempre que a lista de pokemons está sendo carregada, os cartões aparecerem com a animação **Skeleton** do Material UI até que todos os cartões sejam carregados com os pokemons. O mesmo acontece quando clicamos no botão **Show More**, até que outros dez pokemons sejam renderizados na tela o botão é substituído por uma animação de carregamento circular.

---