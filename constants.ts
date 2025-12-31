import { ServiceCategory } from './types';

// Base URL pour récupérer les images brutes (Raw) depuis le dépôt GitHub.
const BASE_IMAGE_URL = "https://raw.githubusercontent.com/bassova69-prog/image/main";

// Fonction utilitaire pour générer les URLs
// Utilisation de .getTime() pour garantir que les nouvelles images s'affichent immédiatement sans cache navigateur obsolète
const getAssetUrl = (filename: string) => `${BASE_IMAGE_URL}/${filename}?v=${new Date().getTime()}`;

export const ASSETS = {
  // Image de fond
  BACKGROUND: getAssetUrl('fond.webp'), 
  
  // Logo
  LOGO_URL: getAssetUrl('logo.webp'),
  
  // Photo de profil (si utilisée)
  PROFILE_PIC: getAssetUrl('profile.webp'),
  
  LOGO_PLACEHOLDER: getAssetUrl('logo.webp'),

  // Programme Coaching
  PROGRAM: getAssetUrl('programme.webp'),
};

export const SOCIAL_LINKS = {
  INSTAGRAM: "https://www.instagram.com/shelleynailss/",
  TIKTOK: "https://www.tiktok.com/@shelleynailss",
  BOOKING: "https://www.instagram.com/direct/t/109840043746601/",
  REVIEWS: "https://g.page/r/CVgGwCIwC6D5EBI/review"
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
    { 
        category: 'Les Extensions', 
        type: 'pricing', 
        items: [
            { name: 'Capsules Gelx (américaines)', price: '50', details: 'Extension sur mesure' },
            { name: 'Forfait dépose/repose Gelx', price: '55', details: 'Entretien complet' },
            { name: 'Capsules Gel', price: '60', details: 'Extension technique' },
            { name: 'Gainage Gel', price: '50', details: 'Sur ongles naturels' },
            { name: 'Remplissage Gel', price: '55', details: 'Entretien mensuel' },
            { name: 'Gainage base protéiné', price: '45', details: 'Renfort naturel' },
            { name: 'Remplissage protéiné', price: '50', details: 'Entretien renfort' },
            { name: 'Chablon Gel', price: '65', details: 'Extension papier forme' },
        ]
    },
    { 
        category: 'Nail Art & Extras', 
        type: 'pricing', 
        items: [
            { name: 'Dépose', price: '15', details: 'Toutes matières + manucure' },
            { name: 'Réparation/rallongement', price: '3', details: 'Par ongle (avec nail art: 5€)' },
            { name: 'Nail art easy', price: '10', details: 'Lignes, points, simple' },
            { name: 'Nail art complex', price: '20', details: 'Dessins, détails' },
            { name: 'Nail art challenging', price: '30', details: 'Personnages, 3D complexe' },
            { name: 'Nail art devis', price: '', details: 'Voir en DM' },
        ]
    },
    { 
        category: 'Avant de réserver', 
        type: 'info', 
        items: [
            { 
                name: 'Contact & Inspiration', 
                details: "Merci de me contacter par message pour choisir la prestation adaptée à tes besoins. Prévoir des photos d'inspiration !",
                action: { label: 'Message Instagram', link: 'https://www.instagram.com/direct/t/109840043746601/' }
            },
        ]
    },
    { 
        category: 'Règles du Salon', 
        type: 'info', 
        items: [
            { name: 'Annulation & Retard', details: "Être présent(e) le jour J. Prévenir 48h à l'avance en cas d'empêchement." },
        ]
    }
];

export const GALLERY_IMAGES = [
  getAssetUrl('port1.webp'),
  getAssetUrl('port2.webp'),
  getAssetUrl('port3.webp'),
  getAssetUrl('port4.webp'),
  getAssetUrl('port5.webp'),
  getAssetUrl('port6.webp'),
];

export const NAV_LINKS = [
  { name: 'Accueil', href: '#home' },
  { name: 'Tarifs', href: '#services' },
  { name: 'Coaching', href: '#coaching' },
  { name: 'Collab', href: '#collaboration' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Galerie', href: '#gallery' },
];