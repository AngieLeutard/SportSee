export default async function fetchData(url) {
    try {
        const response = await fetch(url, {
            method: 'GET', // méthode HTTP GET
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                // Ajoutez d'autres en-têtes si nécessaire
            }
        });

        // Vérifiez si la réponse est correcte
        if (!response.ok) {
            throw new Error(`Erreur HTTP ! statut: ${response.status}`);
        }

        // Analysez la réponse en JSON
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur de récupération des données:', error);
        throw error; // Relancez l'erreur pour la gestion des erreurs en amont
    }
}
