/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_NAME: string
  readonly PUBLIC_SITE_TITLE: string
  readonly PUBLIC_SITE_DESCRIPTION: string
  readonly PUBLIC_SITE_OAB: string
  readonly PUBLIC_CONTACT_ADDRESS: string
  readonly PUBLIC_CONTACT_WHATSAPP: string
  readonly PUBLIC_CONTACT_WHATSAPP_LINK: string
  readonly PUBLIC_CONTACT_EMAIL: string
  readonly PUBLIC_CONTACT_INSTAGRAM: string
  readonly PUBLIC_CONTACT_INSTAGRAM_LINK: string
  readonly PUBLIC_CONTACT_LINKEDIN: string
  readonly PUBLIC_CONTACT_LINKEDIN_LINK: string
  readonly PUBLIC_CALENDLY_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
