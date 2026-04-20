export const SITE_CONFIG = {
  company: {
    name: 'Austen Engineering & Solutions',
    shortName: 'austen',
    description: 'Desenvolvemos soluções tecnológicas avançadas com RPA, Engenharia e Integração IA.',
  },
  contact: {
    phoneDisplay: '+55 (96) 99999-0000',
    whatsappNumber: '5596999990000', // Sem pontuação para links
    whatsappMessage: 'Olá! Gostaria de entender como as automações da Austen podem escalar o meu negócio.',
    address: 'Macapá/AP',
    fullAddress: 'Macapá/AP e atendimento nacional',
    email: 'contato@austen.com',
  },
  social: {
    instagram: 'https://instagram.com/',
    linkedin: 'https://linkedin.com/',
  },
  services: [
    { id: 'rpa', title: 'Robôs de Software (RPA)' },
    { id: 'chatbots', title: 'Chatbots Inteligentes' },
    { id: 'solar', title: 'Sistemas para Energia Solar' },
    { id: 'eng', title: 'Automação de Engenharia' },
  ],
};

export const getWhatsAppLink = () => {
  const url = new URL('https://wa.me/' + SITE_CONFIG.contact.whatsappNumber);
  url.searchParams.append('text', SITE_CONFIG.contact.whatsappMessage);
  return url.toString();
};
