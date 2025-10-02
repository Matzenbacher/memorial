# Plano de Adaptação da Home – Memorial

## 🎯 Objetivos
- Adaptar o projeto React atual mantendo a estrutura e stack existente
- Substituir conteúdo, imagens e branding do template atual pelo conteúdo do site Memorial Garden (https://memorialgarden.com.br/)
- Ajustar cores, textos e pequenas alterações de layout para acomodar o novo conteúdo
- Preservar todas as animações e funcionalidades já implementadas (Locomotive Scroll, GSAP, Framer Motion)

## 🧱 Stack Mantida (Sem Alterações)
- **React** 17.0.2 – Mantém estrutura atual
- **React Router DOM** 6.2.2 – Navegação existente
- **Styled Components** 5.3.3 – Sistema de estilização atual
- **Framer Motion** 6.2.8 – Animações declarativas
- **GSAP** 3.9.1 – Animações avançadas
- **Locomotive Scroll** 4.1.4 – Scroll suave e parallax
- **Fontes**: Substituir por Poppins (adicionar @fontsource/poppins)

## 🎨 Adaptações de Branding

### Cores (Themes.js)
**Substituir:**
```javascript
// ANTES (template atual)
body: "#fff",
text: "#202020",
grey: "#909090"

// DEPOIS (Memorial Garden)
primary: "#6C20AF",      // Roxo principal
accent: "#FF3984",       // Rosa destaque
dark: "#333333",         // Textos
light: "#FFFFFF",        // Fundos
grey: "#666666"          // Textos secundários
```

### Tipografia
- **Adicionar fonte Poppins**: `npm install @fontsource/poppins`
- Manter fontes decorativas para títulos especiais se necessário
- Ajustar weights: 400 (regular), 600 (semibold), 700 (bold)

## 📁 Estrutura de Adaptação por Seção

### 1. **Home.jsx** → Hero Section
**Conteúdo a substituir:**
- Headline principal: Adaptar para messaging do Memorial Garden
- Subheadline: Inserir proposta de valor
- CTA primário: "Quero contratar um serviço" / "Fale conosco"
- Background: Trocar por imagem hero do Memorial (ambiente, jardim)

**Ajustes de layout:**
- Manter animações de entrada (Framer Motion)
- Ajustar altura mínima se necessário
- Garantir overlay gradient (roxo/rosa para legibilidade)

### 2. **CoverVideo.jsx** → Vídeo Institucional
**Conteúdo a substituir:**
- Vídeo atual por vídeo institucional do Memorial Garden
- Thumbnail preview com imagem do cemitério
- Botão play com cores do tema (roxo/rosa)

**Ajustes:**
- Adicionar overlay escuro se necessário
- Manter animação de play button (hover effect)

### 3. **About.jsx** → Sobre o Memorial
**Conteúdo a substituir:**
- Texto institucional: História, missão, diferenciais
- Imagem: Foto das instalações/ambiente do Memorial Garden
- CTA: "Conhecer mais" / "Visitar Memorial"

**Ajustes de layout:**
- Manter split layout (imagem + texto)
- Ajustar espaçamento se texto for mais longo
- Adaptar animações scroll reveal existentes

### 4. **Shop.jsx** → Serviços
**Transformar em grade de serviços:**
- Card 1: Sepultamento (ícone + descrição + CTA)
- Card 2: Espaço Cerimonial (ícone + descrição + CTA)
- Card 3: Velório (ícone + descrição + CTA)
- Card 4: Outros serviços (planos, plantão 24h)

**Conteúdo:**
- Substituir produtos por serviços
- Adicionar ícones/imagens representativos
- CTA: "Saiba mais" para cada serviço

**Ajustes de layout:**
- Manter grid responsivo atual
- Adaptar card design (bordas arredondadas, sombras suaves)
- Hover effects com escala sutil

### 5. **NewArrival.jsx** → Destaques/Diferenciais
**Conteúdo a substituir:**
- Card 1: Planos Personalizados
- Card 2: Ambiente Acolhedor
- Card 3: Plantão 24h
- Texto e imagens adaptados

**Ajustes:**
- Manter animações de carrossel se existir
- Adaptar cores dos cards (fundo claro, bordas roxas)

### 6. **Marquee.jsx** → Faixa de Métricas
**Conteúdo a substituir:**
- "14 anos de experiência"
- "+2000 famílias atendidas"
- "Atendimento 24/7"
- Adicionar animação counting se não existir

**Ajustes:**
- Background roxo ou gradient
- Texto branco
- Números grandes e destacados

### 7. **Novo: Testimonials Section** (criar se não existir)
**Adicionar seção de depoimentos:**
- Carrossel com 3-5 depoimentos
- Nome, foto (opcional), rating
- Usar Framer Motion para transições
- Estilo de card com aspas decorativas

**Implementação:**
```javascript
// Criar components/Testimonials.jsx
// Usar AnimatePresence do Framer Motion
// Navegação com setas ou dots
```

### 8. **Novo: Contact Form** (adicionar ao Footer ou seção própria)
**Criar formulário de contato:**
- Campos: Nome, E-mail, Telefone, Mensagem
- Validação simples (HTML5 ou library leve)
- CTA: "Enviar mensagem"
- Feedback visual (loading + success/error)

**Stack adicional sugerida:**
- React Hook Form (leve) ou validação nativa
- EmailJS ou endpoint próprio

### 9. **Novo: FAQ Accordion** (criar componente)
**Adicionar seção FAQ:**
- 5-8 perguntas frequentes
- Acordeão animado (Framer Motion)
- Ícone + ou - indicando estado
- Dados em JSON local

**Implementação:**
```javascript
// Criar components/FAQ.jsx
// Estado local para controlar item aberto
// AnimatePresence para altura animada
```

### 10. **Footer.jsx** → Footer Completo
**Expandir footer atual:**
- Coluna 1: Contatos (telefone, e-mail, endereço)
- Coluna 2: Links rápidos (Sobre, Serviços, Contato)
- Coluna 3: Serviços específicos
- Coluna 4: Horários de funcionamento
- Redes sociais (WhatsApp, Instagram, Facebook)
- Mapa embed (opcional)

**Ajustes:**
- Background escuro (roxo dark ou cinza escuro)
- Texto claro
- Links com hover (rosa)

### 11. **Navbar.jsx** → Header + Navegação
**Ajustes necessários:**
- Logo do Memorial Garden
- Links: Início, Sobre, Serviços, Contato
- CTA WhatsApp destacado (botão verde)
- Telefone fixo visível (desktop)
- Menu hamburger (mobile) mantido

**Barra superior (adicionar):**
- Telefone: (XX) XXXX-XXXX
- Horário de atendimento
- Botão WhatsApp

## 📦 Assets Necessários

### Imagens
- [ ] Logo Memorial Garden (PNG/SVG com fundo transparente)
- [ ] Hero background (alta resolução, 1920x1080+)
- [ ] Foto institucional (sobre)
- [ ] Fotos de serviços (3-4 imagens)
- [ ] Fotos de ambiente/instalações (3-5 imagens)
- [ ] Ícones de serviços (SVG ou PNG)
- [ ] Fotos para depoimentos (opcional)

### Vídeo
- [ ] Vídeo institucional (MP4 ou link YouTube/Vimeo)
- [ ] Thumbnail do vídeo

### Textos
- [ ] Headline principal
- [ ] Descrições de serviços
- [ ] Texto sobre (2-3 parágrafos)
- [ ] Depoimentos (3-5 com nome e relação)
- [ ] FAQ (perguntas e respostas)
- [ ] Textos do footer (endereço, horários, etc)

## 🗺️ Roadmap de Implementação

### Fase 1 – Preparação (1-2 horas)
- [x] Coletar todos os assets (imagens, textos, vídeo)
- [x] Instalar fonte Poppins: `npm install @fontsource/poppins`
- [x] Backup do projeto atual
- [x] Criar branch: `git checkout -b memorial-branding`

### Fase 2 – Tema e Cores (1 hora)
- [x] Atualizar `Themes.js` com palette Memorial Garden
- [x] Ajustar `GlobalStyles.js` com fonte Poppins
- [x] Testar tema em modo claro (ajustar se necessário)
- [x] Validar contraste de cores (acessibilidade)

### Fase 3 – Assets e Conteúdo (2-3 horas)
- [x] Adicionar imagens na pasta `src/assets/Images/`
- [x] Adicionar ícones/SVGs na pasta `src/assets/Svgs/`
- [x] Criar arquivo `memorial-assets/content.json` com todos os textos
- [x] Otimizar imagens (compressão, WebP) - 12 imagens hero, logo, about

### Fase 4 – Componentes Principais (4-6 horas)
- [x] Atualizar `CoverVideo.jsx` (hero com mensagem Memorial Garden, fonte Poppins)
- [x] Atualizar `About.jsx` (sobre com texto institucional, fonte Poppins, 3 imagens)
- [x] Transformar `Shop.jsx` em carrossel de 12 fotos Memorial Garden
- [x] Atualizar `NewArrival.jsx` (4 diferenciais: economia, ambiente, plantão, plano)
- [x] Ajustar `Marquee.jsx` (métricas: 14 anos, +2000 famílias, respeito)
- [x] Atualizar `Navbar.jsx` (menu em português: Início, Sobre, Espaço, Diferenciais)

### Fase 5 – Novos Componentes (3-4 horas)
- [ ] Criar `Testimonials.jsx` (depoimentos com carrossel)
- [ ] Criar `ContactForm.jsx` (formulário)
- [ ] Criar `FAQ.jsx` (acordeão)
- [ ] Integrar novos componentes no `App.js`

### Fase 6 – Navegação e Footer (2-3 horas)
- [x] Atualizar `Navbar.jsx` (menu português, links funcionais)
- [x] Expandir `Footer.jsx` (menu, links WhatsApp/Instagram, copyright, endereço)
- [x] Trocar logo por Memorial Garden logo.webp
- [x] Substituir vídeo inicial por video-institucional.mp4
- [x] Melhorar responsividade completa (mobile, tablet, desktop)
- [ ] Adicionar barra superior no header (telefone + horário)
- [ ] Adicionar botão WhatsApp flutuante (componente fixo)

### Fase 7 – Ajustes Finos (2-3 horas)
- [ ] Revisar responsividade (mobile, tablet, desktop)
- [ ] Ajustar espaçamentos e alinhamentos
- [ ] Verificar todas as animações (scroll, hover)
- [ ] Testar scroll suave entre seções
- [ ] Validar contraste e legibilidade

### Fase 8 – QA e Deploy (1-2 horas)
- [ ] Teste em diferentes navegadores (Chrome, Safari, Firefox)
- [ ] Teste em dispositivos móveis reais
- [ ] Corrigir bugs encontrados
- [ ] Otimizar performance (Lighthouse)
- [ ] Deploy (Vercel/Netlify)

## 🎨 Guia de Estilo – Memorial Garden

### Paleta de Cores
```javascript
const colors = {
  primary: '#6C20AF',      // Roxo - CTAs principais, títulos
  accent: '#FF3984',       // Rosa - Destaques, hover states
  dark: '#333333',         // Textos principais
  darkGrey: '#666666',     // Textos secundários
  lightGrey: '#F5F5F5',    // Fundos alternativos
  white: '#FFFFFF',        // Fundos principais
  success: '#28a745',      // WhatsApp, feedbacks positivos
  error: '#dc3545'         // Feedbacks de erro
}
```

### Tipografia
```javascript
fontFamily: "'Poppins', -apple-system, sans-serif"

// Tamanhos (manter tokens do Themes.js atual)
fontxs: '0.75em'    // 12px - captions
fontsm: '0.875em'   // 14px - small text
fontmd: '1em'       // 16px - body
fontlg: '1.25em'    // 20px - large text
fontxl: '2em'       // 32px - headings
fontxxl: '3em'      // 48px - hero
fontxxxl: '4em'     // 64px - display
fontBig: '5em'      // 80px - extra large

// Weights
regular: 400
semibold: 600
bold: 700
```

### Componentes Base
```javascript
// Botão Primário
background: gradient(135deg, #6C20AF, #FF3984)
borderRadius: 50px
padding: 12px 32px
fontSize: fontmd
fontWeight: 600
transition: transform 0.2s
hover: transform: scale(1.05)

// Card
background: white
borderRadius: 16px
padding: 32px
boxShadow: 0 4px 20px rgba(0,0,0,0.08)
transition: transform 0.3s, boxShadow 0.3s
hover: transform: translateY(-8px), boxShadow: 0 8px 30px rgba(0,0,0,0.12)
```

## 📋 Checklist de Conteúdo por Seção

### Hero
- [x] Headline (1 frase impactante) - "Preservamos a memória de histórias que não devem ser esquecidas"
- [x] Subheadline (1-2 linhas) - "Cemitério Parque Memorial Garden • Ourinhos, SP"
- [ ] CTA primário (texto do botão)
- [ ] Imagem de fundo ou carrossel (3-5 fotos)

### Sobre
- [x] Título da seção - "Sobre o Memorial Garden"
- [x] 2-3 parágrafos sobre o Memorial
- [x] 3 imagens institucionais (about-main, about-1, about-2)
- [ ] CTA "Conhecer mais"

### Serviços (Shop → Nosso Espaço)
- [x] 12 fotos do carrossel Memorial Garden
- [x] Texto descritivo sobre cemitério parque
- [x] Títulos: Ambiente, Jardim, Tranquilidade, Natureza, Serenidade, Paz, Memória, Cuidado, Acolhimento, Respeito, Conforto, Homenagem

### Diferenciais
- [x] 4 cards com:
  - "Economia de até 40%" - Plano preventivo
  - "Ambiente Acolhedor" - Jardins planejados
  - "Plantão 24 horas" - Atendimento emergencial
  - "Plano Preventivo" - Segurança para família

### Métricas
- [x] Animação horizontal com 5 frases:
  - "14 anos de história"
  - "em Ourinhos"
  - "Mais de 2.000 famílias"
  - "amparadas com"
  - "respeito e dignidade"

### Depoimentos
- [ ] 3-5 depoimentos com:
  - Texto do depoimento
  - Nome do cliente
  - Rating (opcional)

### FAQ
- [ ] 5-8 perguntas frequentes com respostas

### Formulário
- [ ] Labels dos campos
- [ ] Texto do botão de envio
- [ ] Mensagem de sucesso/erro

### Footer
- [ ] Endereço completo
- [ ] Telefones (fixo, WhatsApp)
- [ ] E-mail
- [ ] Horários de funcionamento
- [ ] Links de navegação
- [ ] Links de serviços
- [ ] Redes sociais (URLs)

## 🚀 Comandos Úteis

```bash
# Instalar nova fonte
npm install @fontsource/poppins

# Rodar em desenvolvimento
npm start

# Build para produção
npm run build

# Testar build localmente
npx serve -s build
```

## ✅ Critérios de Aceite

- [x] Todas as cores seguem a paleta Memorial Garden (lavanda/lilás suaves)
- [x] Fonte Poppins (300-400) aplicada em todos os textos
- [x] Logo Memorial Garden no header implementado
- [x] Vídeo institucional Memorial Garden substituído
- [x] Todas as seções principais com conteúdo real Memorial Garden
- [x] 12 imagens hero + 3 about otimizadas em WebP
- [x] Responsivo em mobile, tablet e desktop com breakpoints melhorados
- [x] Animações suaves mantidas (Locomotive, GSAP, Framer Motion preservadas)
- [ ] Formulário funcional com validação
- [ ] WhatsApp flutuante visível e funcional
- [ ] Performance ≥ 80 no Lighthouse
- [x] Navegação suave entre seções funcionando (Locomotive Scroll ativo)
- [x] Footer com links, endereço, copyright, WhatsApp/Instagram

## 📝 Observações Importantes

1. **Não alterar estrutura de arquivos** – manter organização atual de pastas
2. **Não remover Locomotive Scroll** – apenas ajustar offsets se necessário
3. **Não alterar lógica de animações** – apenas adaptar triggers e delays
4. **Manter lazy loading** – preservar React.lazy() dos componentes
5. **Manter Loader** – apenas ajustar cores para tema roxo/rosa
6. **Testar em mobile** – Locomotive Scroll tem configurações específicas
7. **Git commits atômicos** – commit por seção adaptada
8. **Backup de assets originais** – manter template original em pasta separada

## 🔄 Próximos Passos

1. ✅ Validar plano com a equipe
2. ✅ Coletar todos os assets (imagens, textos, vídeo) - coletados via scraping
3. ✅ Aprovar conteúdo adaptado
4. ✅ Iniciar Fase 1 (preparação) - fonte instalada, assets coletados
5. ✅ Fase 2 (tema) - cores e tipografia Memorial Garden aplicadas
6. ✅ Fase 3 (assets) - 15 imagens WebP organizadas, content.json criado
7. ✅ Fase 4 (componentes principais) - 6 seções atualizadas com conteúdo real
8. ⏳ **PRÓXIMO:** Fase 5 (novos componentes) - Testimonials, FAQ, ContactForm
9. ⏳ Fase 6 (navegação) - Logo Memorial, WhatsApp flutuante, barra superior
10. ⏳ Fase 7 (ajustes finos) - responsividade, performance, animações
11. ⏳ Fase 8 (QA e deploy) - testes cross-browser, mobile, Lighthouse, deploy

---

**Estimativa total:** 15-25 horas de desenvolvimento
**Tempo decorrido:** ~8 horas (Fases 1-4 completas)
**Restante:** ~7-17 horas (Fases 5-8)
**Prazo sugerido:** 1-2 semanas (trabalhando em sprints)
