# Documentação Técnica - Memorial Project

## 📋 Visão Geral

Este é um projeto React moderno que implementa uma landing page com animações suaves, scroll customizado e design responsivo. O projeto utiliza tecnologias de ponta para criar uma experiência visual rica e interativa.

## 🛠️ Stack Tecnológica

### Core
- **React** 17.0.2 - Biblioteca JavaScript para construção da interface
- **React DOM** 17.0.2 - Renderização do React no navegador
- **React Router DOM** 6.2.2 - Roteamento e navegação entre páginas

### Styling & Animações
- **Styled Components** 5.3.3 - CSS-in-JS para estilização de componentes
- **Framer Motion** 6.2.8 - Biblioteca de animações declarativas
- **GSAP** 3.9.1 - GreenSock Animation Platform para animações avançadas
- **Locomotive Scroll** 4.1.4 - Scroll suave e parallax
- **React Locomotive Scroll** 0.2.0 - Wrapper React para Locomotive Scroll
- **Normalize.css** 8.0.1 - Reset CSS para consistência entre navegadores

### Fontes
- **@fontsource/kaushan-script** 4.5.2 - Fonte decorativa
- **@fontsource/sirin-stencil** 4.5.2 - Fonte principal do projeto

## 📁 Estrutura do Projeto

```
memorial/
├── public/                    # Arquivos públicos estáticos
│   ├── index.html            # HTML raiz
│   ├── manifest.json         # Manifesto PWA
│   └── robots.txt            # Configuração para crawlers
├── src/
│   ├── App.js                # Componente principal
│   ├── index.js              # Ponto de entrada da aplicação
│   ├── assets/               # Recursos estáticos
│   │   ├── Images/          # Imagens do projeto
│   │   └── Svgs/            # Ícones e SVGs
│   ├── components/           # Componentes reutilizáveis
│   │   ├── CoverVideo.jsx   # Componente de vídeo de capa
│   │   ├── Loader.jsx       # Componente de loading
│   │   ├── Logo.jsx         # Componente de logo
│   │   ├── Navbar.jsx       # Barra de navegação
│   │   ├── ScrollTriggerProxy.js  # Proxy para ScrollTrigger
│   │   └── useLocoScroll.js # Hook customizado para Locomotive Scroll
│   ├── sections/             # Seções da página
│   │   ├── About.jsx        # Seção sobre
│   │   ├── Footer.jsx       # Rodapé
│   │   ├── Home.jsx         # Seção inicial
│   │   ├── Marquee.jsx      # Seção com texto em movimento
│   │   ├── NewArrival.jsx   # Seção de novidades
│   │   └── Shop.jsx         # Seção de produtos
│   └── styles/               # Estilos globais e temas
│       ├── GlobalStyles.js  # Estilos globais da aplicação
│       └── Themes.js        # Temas (claro/escuro)
└── package.json              # Dependências e scripts
```

## 🎨 Arquitetura e Padrões

### Sistema de Temas
O projeto implementa um sistema de temas com suporte a modo claro e escuro:
- Cores personalizáveis (body, text, grey)
- Tipografia escalável (fontxs até fontBig)
- Valores tokenizados para consistência

### Animações e Scroll
- **Locomotive Scroll**: Scroll suave com suporte mobile e tablet
- **GSAP ScrollTrigger**: Animações baseadas em scroll
- **Framer Motion**: Animações de entrada/saída e interações hover/tap
- Loader com delay de 3 segundos na inicialização

### Code Splitting
Utiliza React.lazy() para carregamento sob demanda de componentes:
```javascript
const CoverVideo = React.lazy(() => import('../components/CoverVideo'));
const Navbar = React.lazy(() => import('../components/Navbar'));
const Logo = React.lazy(() => import('../components/Logo'));
```

### Navegação
- Navegação por scroll suave entre seções
- Menu expansível com animações
- Scroll offset de -100px e duração de 2000ms
- Easing personalizado: [0.25, 0.0, 0.35, 1.0]

## 🚀 Como Instalar e Rodar o Projeto

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação

1. **Clone o repositório** (ou copie os arquivos do projeto)
```bash
cd /caminho/para/seu/projeto
```

2. **Instale as dependências**
```bash
npm install
```
ou
```bash
yarn install
```

### Rodando Localmente

1. **Inicie o servidor de desenvolvimento**
```bash
npm start
```
ou
```bash
yarn start
```

2. **Acesse no navegador**
- O projeto abrirá automaticamente em `http://localhost:3000`
- Recarregamento automático ao salvar alterações

### Build para Produção

```bash
npm run build
```
ou
```bash
yarn build
```

Isso criará uma versão otimizada na pasta `build/` pronta para deploy.

### Testes

```bash
npm test
```
ou
```bash
yarn test
```

## 📝 Conceitos-Chave para Nova Implementação

### 1. Configuração do Scroll Suave
```javascript
<LocomotiveScrollProvider
  options={{
    smooth: true,
    smartphone: { smooth: true },
    tablet: { smooth: true },
  }}
  containerRef={containerRef}
>
```

### 2. Estrutura de Componentes
- **Seções**: Componentes grandes que representam áreas da página
- **Components**: Componentes reutilizáveis e genéricos
- **Lazy Loading**: Para melhor performance inicial

### 3. Estilização
```javascript
const Component = styled.div`
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};
  font-size: ${props => props.theme.fontmd};
`;
```

### 4. Animações
```javascript
<motion.div
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ duration: 2 }}
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
>
```

### 5. Scroll para Seção
```javascript
scroll.scrollTo(elem, {
  offset: '-100',
  duration: '2000',
  easing: [0.25, 0.0, 0.35, 1.0],
});
```

## 🎯 Pontos de Atenção

1. **Locomotive Scroll CSS**: Sempre importar o CSS do Locomotive Scroll
2. **Overflow**: HTML com `has-scroll-smooth` tem overflow hidden
3. **Mobile**: Configurações específicas para smooth scroll em dispositivos móveis
4. **z-index**: Navbar com z-index 6 para ficar sobre outros elementos
5. **Loading**: Loader aparece por 3 segundos antes de mostrar conteúdo
6. **Source Maps**: Build com `GENERATE_SOURCEMAP=false` para produção

## 🔧 Scripts Disponíveis

| Script | Comando | Descrição |
|--------|---------|-----------|
| Desenvolvimento | `npm start` | Inicia servidor local na porta 3000 |
| Build | `npm run build` | Gera build otimizado para produção |
| Testes | `npm test` | Executa testes em modo watch |
| Eject | `npm run eject` | Ejeta configurações do CRA (irreversível) |

## 📦 Dependências Principais Explicadas

- **framer-motion**: Animações fluidas e declarativas
- **gsap**: Animações complexas e timeline
- **locomotive-scroll**: Scroll suave e parallax effects
- **styled-components**: CSS modular e com suporte a temas
- **react-router-dom**: Navegação SPA
- **normalize.css**: Reset CSS cross-browser

## 💡 Dicas para Criar Nova Página Baseada Neste Projeto

1. **Comece instalando as dependências**: Use o mesmo package.json como referência
2. **Configure o tema**: Adapte as cores em `Themes.js` para sua identidade visual
3. **Crie suas seções**: Use as seções existentes como template
4. **Mantenha a estrutura de pastas**: Separe components, sections e styles
5. **Teste o scroll**: Configure offset e duração de acordo com seu layout
6. **Otimize imagens**: Coloque assets otimizados na pasta assets
7. **Ajuste o timing**: Modifique delays de animações conforme necessário
8. **Teste em mobile**: Verifique comportamento do scroll em dispositivos móveis

## 📱 Responsividade

O projeto usa media queries no styled-components:
```javascript
@media (max-width: 40em) {
  // Estilos para telas pequenas (640px)
}
```

## 🌐 Browser Support

Configurado para suportar:
- Navegadores modernos (últimas 2 versões)
- >0.2% de participação de mercado
- Sem suporte para Opera Mini

---

**Criado em:** Outubro 2025
**Versão do React:** 17.0.2
**Versão do Node:** 14+
