# Austen Engineering & Solutions

Bem-vindo ao repositório do site institucional da **Austen Engineering & Solutions**. 
Este projeto é uma Landing Page super responsiva e moderna focada na apresentação dos serviços de **RPA**, **Chatbots**, **Energia Solar** e **Visão Computacional**.

Essa aplicação foi desenvolvida focada em facilidade de manutenção e alta performance de renderização, utilizando **React, Vite e TypeScript** com um Design System inteiramente customizado em Vanilla CSS.

## 🗂 Estrutura de Variáveis (Configuração Rápida)

Para facilitar futuras integrações com bancos de dados, todas as informações essenciais do site (como Endereço, Número do WhatsApp e Nome da Empresa) estão **centralizadas** em um único local: `src/config/siteData.ts`. 

Se precisar mudar o DDD, e-mail de contato, ou endereço no futuro, basta alterar neste arquivo e os componentes `Header` e `Footer` já refletirão no site todo instantaneamente!

---

## 💻 Como Rodar o Site Localmente (em sua máquina)

Certifique-se de ter o **[Node.js](https://nodejs.org/en/)** (Versão 22.x LTS recomendada) instalado.

1. **Baixe ou clone o repositório** e acesse a pasta raiz (se chama `austen/`).
2. **Abra o terminal** na pasta do projeto e rode o comando para instalar os pacotes e construir o "motor":
   ```bash
   npm install
   ```
3. **Inicie o Servidor Local** para abrir e desenvolver a página em tempo real:
   ```bash
   npm run dev
   ```
4. O terminal exibirá um link (geralmente `http://localhost:5173/`). Acesse esse link via Google Chrome, Safari, etc, para ver o site ao vivo.

---

## 🌐 Como Fazer o Deploy na Vercel (Colocar no ar!)

Como o projeto está usando Vite/React, a subida na plataforma Vercel é extremamente amigável:

### Método mais fácil (Via Dashboard do GitHub)
Se você for empurrar ("*push*") seu código para o **GitHub**:
1. Faça login na sua conta da **[Vercel](https://vercel.com/)**.
2. Clique no painel central em **"Add New Project"**.
3. Na área de importar projetos (Import Git Repository), **vincule o seu GitHub** com a Vercel e escolha o repositório da `austen`.
4. Aperte o botão azul **"Import"**. E apenas espere! A Vercel fará a leitura automática de que o site utiliza "Vite" e aplicará todos os comandos de build de trás dos panos. Assim que processar, ela dará a você a URL gratuita onde o site está vivo (por exemplo: `https://austen-solutions.vercel.app`), de onde você poderá customizar para o seu domínio final.

### Método Alternativo (Via Vercel CLI Direto pelo Terminal)
Se não for usar o GitHub e preferir enviar da sua exata máquina direto pro ar:
1. Instale o kit da vercel (via terminal): `npm i -g vercel`.
2. Estando dentro da pasta da `austen/`, apenas rode o comando isolado `vercel`.
3. Será exibida uma autenticação via navegador (você faz o login) e então ele fará upload da sua pasta direto pra nuvem e você já ganha a URL definitiva.

---

_Desenhado e estruturado por Rapha & AI._
