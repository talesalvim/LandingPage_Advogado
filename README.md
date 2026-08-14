# Landing Page — Advocacia (Planejamento Sucessório e Societário)

Landing page profissional de advocacia especializada em **planejamento sucessório e societário**.

> Os dados de identidade, contato e agendamento do escritório ficam em variáveis de ambiente (`.env`) e **não são versionados**. Veja a seção [Variáveis de ambiente](#variáveis-de-ambiente).

## Stack

- **Framework:** [Astro](https://astro.build) 7
- **UI:** React 18 + TypeScript
- **Estilização:** Tailwind CSS 3
- **Agendamento:** Calendly
- **Ícones:** Lucide

## Scripts

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Gera build estática em `dist/` |
| `npm run preview` | Pré-visualiza o build |

## Configuração

```bash
npm install
cp .env.example .env   # preencha com os dados reais do advogado
npm run dev
```

### Variáveis de ambiente

Os dados de marketing (identidade, contato e agendamento) ficam em variáveis de ambiente — **não são versionados no repositório**. Copie `.env.example` para `.env` e preencha:

| Grupo | Variável |
|-------|----------|
| Site | `PUBLIC_SITE_NAME`, `PUBLIC_SITE_TITLE`, `PUBLIC_SITE_DESCRIPTION`, `PUBLIC_SITE_OAB` |
| Contato | `PUBLIC_CONTACT_ADDRESS`, `PUBLIC_CONTACT_WHATSAPP`, `PUBLIC_CONTACT_WHATSAPP_LINK`, `PUBLIC_CONTACT_EMAIL`, `PUBLIC_CONTACT_INSTAGRAM`, `PUBLIC_CONTACT_INSTAGRAM_LINK`, `PUBLIC_CONTACT_LINKEDIN`, `PUBLIC_CONTACT_LINKEDIN_LINK` |
| Agendamento | `PUBLIC_CALENDLY_URL` |

> **Vercel**: como o `.env` não é versionado, configure **todas** as variáveis acima em *Settings → Environment Variables* do projeto (Production, Preview e Development). Sem elas, o build falha.
