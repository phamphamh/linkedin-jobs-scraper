import { searchLinkedInProfiles } from '../src/linkedinScraper';

/**
 * Fonction pour valider le format d'un profil LinkedIn
 * @param profile Le profil à valider
 * @returns boolean Vrai si le format est valide
 */
function isValidLinkedInProfile(profile: any): boolean {
  return (
    profile &&
    typeof profile.name === 'string' && profile.name.length > 0 &&
    typeof profile.position === 'string' && profile.position.length > 0 &&
    typeof profile.company === 'string' &&
    typeof profile.profile_url === 'string' && profile.profile_url.includes('linkedin.com/in/')
  );
}

/**
 * Test principal de la fonction de recherche LinkedIn
 */
async function testLinkedInSearch() {
  console.log('🧪 Test de recherche LinkedIn démarré...');

  const searchQuery = 'Growth Hacker Paris';
  console.log(`🔍 Recherche pour: "${searchQuery}"`);

  try {
    // Exécuter la recherche
    const profiles = await searchLinkedInProfiles(searchQuery, 3);

    // Vérifier que des résultats ont été trouvés
    if (profiles.length === 0) {
      console.error('❌ Test échoué: Aucun profil trouvé');
      process.exit(1);
    }

    console.log(`✅ ${profiles.length} profils trouvés`);

    // Vérifier que chaque profil a le bon format
    let allValid = true;

    profiles.forEach((profile, index) => {
      const isValid = isValidLinkedInProfile(profile);
      console.log(`Profil #${index + 1} - Format valide: ${isValid ? '✅' : '❌'}`);

      if (!isValid) {
        allValid = false;
      } else {
        // Afficher les détails du profil
        console.log(`  - Nom: ${profile.name}`);
        console.log(`  - Poste: ${profile.position}`);
        console.log(`  - Entreprise: ${profile.company}`);
        console.log(`  - URL: ${profile.profile_url}`);
      }
    });

    if (!allValid) {
      console.error('❌ Test échoué: Certains profils ont un format invalide');
      process.exit(1);
    }

    // Afficher le JSON pour vérification manuelle
    console.log('\n📋 Résultat JSON:');
    console.log(JSON.stringify(profiles, null, 2));

    console.log('\n✅ Test réussi: Les profils ont été correctement extraits et formatés');
  } catch (error) {
    console.error('❌ Test échoué avec erreur:', error);
    process.exit(1);
  }
}

// Exécuter le test
testLinkedInSearch().catch(error => {
  console.error('Erreur non gérée:', error);
  process.exit(1);
});