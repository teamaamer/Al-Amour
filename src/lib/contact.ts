// Official contact details, used by the footer, WhatsApp buttons and product pages

export const CONTACT_EMAIL = 'Saleh@al-amour.com';

export const INSTAGRAM_URL = 'https://www.instagram.com/alamour.co/';
export const FACEBOOK_URL = 'https://www.facebook.com/share/1E4Lcsq5g6/';

// Number shown in the "Need help?" boxes
export const HELP_LINE = {
  code: '+972',
  number: '59-308-0909',
  tel: '+972593080909',
};

export interface ContactLine {
  // Digits as written locally, grouped for display
  groups: string[];
  tel: string;
  whatsapp: string;
}

export const SALES: ContactLine = {
  groups: ['059', '308', '0909'],
  tel: '+970593080909',
  whatsapp: '972593080909',
};

export const SUPPORT: ContactLine = {
  groups: ['059', '422', '5209'],
  tel: '+970594225209',
  whatsapp: '972594225209',
};
