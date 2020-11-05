# Projeto Blog

Este projeto foi criado com o [Angular CLI](https://github.com/angular/angular-cli) versão 8.


## Escopo

Criar um projeto Angular 8, com as seguintes funcionalidades:

- Segurança:

- Permitir o cadastro de usuários e login com autenticação via token JWT.

- Post:

- Permitir o cadastro e consulta de posts com texto, imagens e links.
- Apenas o criador do post poderá ter permissão para excluí-lo.

- Comentários:

- Suportar a adição e exclusão de comentários em posts. Os posts
- poderão ser visíveis a todos os usuários. Apenas o criador do comentário poderá ter permissão para excluí-lo.

- Fotos:

- Permitir a criação de álbuns de fotos. As fotos dos álbuns poderão ser visíveis a todos os usuários. Apenas o dono de um álbum poderá excluí-lo.

## Tecnologias

- Angular CLI 8
- Bootstrap 4.0

## Como instalar

- Baixe ou clone este repositório usando `git clone https://github.com/felipehts/blogfrwk-client.git`;
- Dentro do diretório, instale as dependências usando `npm install`.

## Como executar

Execute `ng serve` para executar a versão de desenvolvimento. Depois acesse `http://localhost:4200/`.

Para executar o servidor de endpoints de API, acesse: [Blogfwrk](https://github.com/felipehts/blogfrwk).

## Como compilar/construir

Execute `ng build` para buildar o projeto. Para buildar a versão de produção adicione a flag `--prod`.

## Dúvidas
Caso há alguma dúvida em relação a este repositório, envie para contato@fhtsistemas.com.br.