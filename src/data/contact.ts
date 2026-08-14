import type { ContactInfo } from '../types'

export const contact: ContactInfo = {
  address: import.meta.env.PUBLIC_CONTACT_ADDRESS,
  whatsapp: import.meta.env.PUBLIC_CONTACT_WHATSAPP,
  whatsappLink: import.meta.env.PUBLIC_CONTACT_WHATSAPP_LINK,
  email: import.meta.env.PUBLIC_CONTACT_EMAIL,
  instagram: import.meta.env.PUBLIC_CONTACT_INSTAGRAM,
  instagramLink: import.meta.env.PUBLIC_CONTACT_INSTAGRAM_LINK,
  linkedin: import.meta.env.PUBLIC_CONTACT_LINKEDIN,
  linkedinLink: import.meta.env.PUBLIC_CONTACT_LINKEDIN_LINK,
}
