import { mockCeoData } from '../src/mockCeoData';

/**
 * Affiche les données de CEO de tech à Paris
 */
function displayCeoData() {
  console.log('📊 Liste de 10 CEO de sociétés tech à Paris:');
  console.log('=============================================\n');

  // Afficher les informations détaillées de chaque CEO
  mockCeoData.forEach((profile, index) => {
    console.log(`CEO #${index + 1}: ${profile.name}`);
    console.log(`Poste: ${profile.position}`);
    console.log(`Entreprise: ${profile.company}`);
    console.log(`Profil LinkedIn: ${profile.profile_url}`);
    console.log('---------------------------------------------\n');
  });

  // Afficher le format JSON
  console.log('\n📋 Données au format JSON:');
  console.log(JSON.stringify(mockCeoData, null, 2));
}

// Exécuter l'affichage
displayCeoData();