import { ServiceCategory } from './types';

// Base URL pour récupérer les images brutes (Raw) depuis le dépôt GitHub.
// Note : Le dépôt DOIT être PUBLIC pour que cela fonctionne.
const BASE_IMAGE_URL = "https://raw.githubusercontent.com/bassova69-prog/image/main";

// Fonction utilitaire pour ajouter un timestamp et éviter le cache agressif de GitHub
const getAssetUrl = (filename: string) => `${BASE_IMAGE_URL}/${filename}?v=${new Date().getDate()}`;

export const ASSETS = {
  // Mise à jour vers fond.png
  BACKGROUND: getAssetUrl('fond.png'), 
  
  // Nom exact attendu : logo.png
  LOGO_URL: getAssetUrl('logo.png'),
  
  // Nom exact attendu : profile.jpg
  PROFILE_PIC: getAssetUrl('profile.jpg'),
  
  LOGO_PLACEHOLDER: getAssetUrl('logo.png'),
};

export const SOCIAL_LINKS = {
  INSTAGRAM: "https://www.instagram.com/shelleynailss/",
  TIKTOK: "https://www.tiktok.com/@shel",
  BOOKING: "https://www.instagram.com/direct/t/109840043746601/" 
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
            { name: 'Annulation & Retard', details: "Être présent(e) le jour J. Prévenir 24h à l'avance en cas d'empêchement." },
        ]
    }
];

// Mise à jour : les images s'appellent port1.png, port2.png, etc.
export const GALLERY_IMAGES = [
  getAssetUrl('port1.png'),
  getAssetUrl('port2.png'),
  getAssetUrl('port3.png'),
  getAssetUrl('port4.png'),
  getAssetUrl('port5.png'),
  getAssetUrl('port6.png'),
  getAssetUrl('port7.png'),
];

export const NAV_LINKS = [
  { name: 'Accueil', href: '#home' },
  { name: 'Tarifs', href: '#services' },
  { name: 'Coaching', href: '#coaching' },
  { name: 'Collab', href: '#collaboration' },
  { name: 'Galerie', href: '#gallery' },
];