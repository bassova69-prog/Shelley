import { ServiceCategory } from './types';

// Images mises à jour via Unsplash car le lien GitHub précédent est inactif.
export const ASSETS = {
  // Image de fond (Texture marbre/béton doux)
  BACKGROUND: "https://images.unsplash.com/photo-1596704017235-d96354431871?q=80&w=2500&auto=format&fit=crop", 
  LOGO_PLACEHOLDER: "https://images.unsplash.com/photo-1522337360705-8763d39a820c?q=80&w=2670&auto=format&fit=crop",
  PROFILE_PIC: "https://images.unsplash.com/photo-1632324343640-86af9827dbe9?q=80&w=1000&auto=format&fit=crop", 
  // Logo (Image abstraite stylée pour remplacer le logo manquant)
  LOGO_URL: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=500&auto=format&fit=crop"
};

export const SOCIAL_LINKS = {
  INSTAGRAM: "https://www.instagram.com/shel",
  TIKTOK: "https://www.tiktok.com/@shel",
  BOOKING: "https://www.instagram.com/shel" 
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
                action: { label: 'Message Instagram', link: 'https://ig.me/m/shel' }
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

export const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1632324343640-86af9827dbe9?q=80&w=800&auto=format&fit=crop", // Pink Art
  "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop", // Green Edgy
  "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop", // Pastel
  "https://images.unsplash.com/photo-1595867165380-0a37941789c6?q=80&w=800&auto=format&fit=crop", // Hands
  "https://images.unsplash.com/photo-1519017715179-c699f15a9843?q=80&w=800&auto=format&fit=crop", // Sparkle
  "https://images.unsplash.com/photo-1629213508492-36916a04e5d3?q=80&w=800&auto=format&fit=crop", // Detail
  "https://images.unsplash.com/photo-1599695655589-4b6842777f98?q=80&w=800&auto=format&fit=crop", // Abstract
];

export const NAV_LINKS = [
  { name: 'Accueil', href: '#home' },
  { name: 'Tarifs', href: '#services' },
  { name: 'Coaching', href: '#coaching' },
  { name: 'Collab', href: '#collaboration' },
  { name: 'Galerie', href: '#gallery' },
];