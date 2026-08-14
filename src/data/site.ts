import type { SiteConfig } from '../types'

export const siteConfig: SiteConfig = {
  name: import.meta.env.PUBLIC_SITE_NAME,
  title: import.meta.env.PUBLIC_SITE_TITLE,
  description: import.meta.env.PUBLIC_SITE_DESCRIPTION,
  ogImage: '/src/assets/photo-advogado.jpg',
  oab: import.meta.env.PUBLIC_SITE_OAB,
}
