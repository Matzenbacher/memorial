# Memorial Garden - Assets README

## 📦 Conteúdo Baixado

Este diretório contém todos os assets (imagens, vídeos e textos) coletados do site Memorial Garden (https://memorialgarden.com.br/) para adaptação do projeto React atual.

## 📂 Estrutura de Arquivos

```
memorial-assets/
├── README.md                    # Este arquivo
├── content.json                 # Conteúdo estruturado em JSON (pronto para import)
├── content.md                   # Conteúdo em Markdown (referência visual)
├── video-institucional.mp4      # Vídeo institucional (32.7 MB)
└── images/
    ├── logo.webp               # Logo Memorial Garden (45.9 KB)
    ├── hero/                   # Imagens do carrossel hero
    │   ├── hero-01.webp       # 119 KB
    │   ├── hero-02.webp       # 55.5 KB
    │   ├── hero-03.webp       # 167 KB
    │   ├── hero-04.webp       # 96 KB
    │   ├── hero-05.webp       # 63.1 KB
    │   ├── hero-06.webp       # 82.1 KB
    │   ├── hero-07.webp       # 29.5 KB
    │   ├── hero-08.webp       # 54.9 KB
    │   ├── hero-09.webp       # 160 KB
    │   └── hero-10.webp       # 175 KB
    ├── services/
    │   └── service-sepultamento.png  # 15.2 KB (ícone placeholder)
    └── about/
        └── about-main.webp    # 28.2 KB (imagem institucional)
```

## 🎨 Informações de Branding

### Cores
- **Primário:** `#6C20AF` (Roxo)
- **Accent:** `#FF3984` (Rosa)
- **Texto Dark:** `#333333`
- **Texto Light:** `#666666`
- **Background:** `#FFFFFF`

### Tipografia
- **Fonte Principal:** Poppins
- **Weights:** 400, 600, 700

## 📝 Arquivos de Conteúdo

### content.json
Arquivo JSON pronto para ser importado no React. Contém:
- Hero (headline, subtitle, CTA)
- Institutional (textos do bloco institucional)
- Services (3 serviços com descrições)
- Highlights (3 cards de destaques)
- About (seção sobre completa)
- Stats (métricas: 14 anos, +2000 famílias)
- Testimonials (depoimento)
- FAQ (6 perguntas e respostas)
- Contact (campos do formulário)
- Footer (endereço, contatos, horários, links)
- SEO (title, description, keywords)

### content.md
Arquivo Markdown com toda a documentação visual e estruturada do conteúdo. Útil para:
- Referência rápida
- Aprovação de copy
- Documentação do projeto

## 🚀 Próximos Passos

### 1. Copiar Assets para o Projeto
```bash
# Copiar imagens
cp memorial-assets/images/logo.webp src/assets/Images/
cp memorial-assets/images/hero/* src/assets/Images/hero/
cp memorial-assets/images/services/* src/assets/Images/services/
cp memorial-assets/images/about/* src/assets/Images/about/

# Copiar vídeo
cp memorial-assets/video-institucional.mp4 public/videos/
```

### 2. Importar Conteúdo
```javascript
// Criar src/data/content.js
import contentData from '../../memorial-assets/content.json';
export default contentData;
```

### 3. Instalar Fonte Poppins
```bash
npm install @fontsource/poppins
```

### 4. Atualizar Temas
Editar `src/styles/Themes.js` com as cores do Memorial Garden.

## 📊 Estatísticas dos Assets

- **Total de imagens:** 13 (1 logo + 10 hero + 1 about + 1 service)
- **Tamanho total imagens:** ~1 MB
- **Vídeo:** 1 arquivo (32.7 MB)
- **Formato predominante:** WebP (otimizado)
- **Qualidade:** Alta resolução

## 🔗 Links Úteis

- **Site Original:** https://memorialgarden.com.br/
- **Instagram:** @memorial.garden
- **Telefone:** 14 99794-3325
- **WhatsApp:** 14 99881-1397

## ✅ Checklist de Uso

- [x] Assets baixados e organizados
- [x] Conteúdo extraído e estruturado
- [x] JSON criado para fácil importação
- [x] Documentação completa gerada
- [ ] Assets copiados para `src/assets/`
- [ ] Conteúdo integrado nos componentes
- [ ] Tema atualizado com cores corretas
- [ ] Fonte Poppins instalada e aplicada

---

**Coletado em:** 01/10/2025  
**Ferramenta:** Chrome DevTools MCP  
**Status:** ✅ Completo e pronto para uso
