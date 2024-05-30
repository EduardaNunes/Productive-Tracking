# Productive-Tracking

O productive-tracking é um projeto pessoal que comecei a mexer no início de 2023 com o objetivo de aprender um pouco mais sobre programação e banco de dados antes de começar a faculdade.
A ideia do projeto é basicamente criar um To-Do list misturado com um tracker de produtividade (bastante similar ao do próprio github) e com um sistema de login e banco de dados remoto.

## Tela de Login

Para essa parte do projeto, decidi fazer algo bem interativo, bonito e funcional. Sendo assim, pesquisei algumas ideias até que encontrei uma de "slider" que me agradou bastante e decidi recriar. Dessa forma, o mesmo formulário que é usado para se registrar é usado também para fazer o login, sem a necessidade de mudar de página ou reescrever suas informações para isso, assim como é representado no gif a baixo:

![](https://github.com/EduardaNunes/Productive-Tracking/blob/main/Imgs/Readme/Login_Example.gif)

## Tela de Tasks

Nessa tela temos uma barra lateral, inicialmente, apenas com o botão para deslogar. Além disso temos a parte principal que é a lista To Do com a função de adicionar novas tarefas, excluí-las, editá-las e marcá-las como feitas. Todas essas mudanças são salvas automaticamente no RealTime DataBase do FireBase.

![](https://github.com/EduardaNunes/Productive-Tracking/blob/main/Imgs/Readme/Task_Example.gif)

## Criado com

- Linguagens: Html, Css e JavaScript
- Editor de Código: Visual Studio Code
- Banco de Dadoc: RealTime DataBase do Firebase

## Objetivos

No momento o projeto apesar de já estar inicialmente estruturado ainda faltam algumas funcionalidades importantes e melhorias:

- **Sistema de tracking de produtividade:** o sistema será baseado em uma calendário mensal, no qual ao clicar em um dia específico ele irá carregar a lista de tarefas respectiva daquele dia e quanto mais tarefas concluídas em um mesmo dia mais colorido ficará seu quadradinho no calendário.
- **Personalização:** Opção de mudar a imagem de fundo e a cor de destaque do calendário
- **Responsividade:** fazer com que as duas páginas html sejam responsivas e possam ser acessadas e navegadas tranquilamente de dispositivos móveis.

## Autor

**Projeto criado por:** Eduarda Pereira Mourão Nunes

