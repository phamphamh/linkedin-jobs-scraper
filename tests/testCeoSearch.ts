import { searchLinkedInProfiles } from '../src/linkedinScraper';

/**
 * Test de recherche des CEO de sociétés tech à Paris
 */
async function testCeoSearch() {
  console.log('🔍 Recherche de CEO de sociétés tech à Paris...');

  const searchQuery = 'CEO tech Paris';

  try {
    // Exécuter la recherche avec un maximum de 10 résultats
    const profiles = await searchLinkedInProfiles(searchQuery, 10);

    // Afficher le nombre de profils trouvés
    console.log(`✅ ${profiles.length} profils trouvés`);

    // Afficher les détails de chaque profil
    profiles.forEach((profile, index) => {
      console.log(`\nProfil #${index + 1}`);
      console.log(`  - Nom: ${profile.name}`);
      console.log(`  - Poste: ${profile.position}`);
      console.log(`  - Entreprise: ${profile.company}`);
      console.log(`  - URL: ${profile.profile_url}`);
    });

    // Afficher le JSON pour consultation
    console.log('\n📊 Résultats au format JSON:');
    console.log(JSON.stringify(profiles, null, 2));
  } catch (error) {
    console.error('❌ Erreur lors de la recherche:', error);
    process.exit(1);
  }
}

// Exécuter la recherche
testCeoSearch().catch(error => {
  console.error('Erreur non gérée:', error);
  process.exit(1);
});