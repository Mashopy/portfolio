function initializeImageFading() {
    // Trouver tous les conteneurs qui ont des paires d'images
    const containers = document.querySelectorAll('.aspect-video.relative');
    
    containers.forEach(container => {
        const images = container.querySelectorAll('img');
        if (images.length >= 2) {
            const image1 = images[0]; // Première image
            const image2 = images[1]; // Deuxième image
            let showingFirst = true;
            
            function fadeImages() {
                if (showingFirst) {
                    // Fade out first image, fade in second
                    image1.classList.remove('opacity-100');
                    image1.classList.add('opacity-0');
                    image2.classList.remove('opacity-0');
                    image2.classList.add('opacity-100');
                } else {
                    // Fade out second image, fade in first
                    image2.classList.remove('opacity-100');
                    image2.classList.add('opacity-0');
                    image1.classList.remove('opacity-0');
                    image1.classList.add('opacity-100');
                }
                showingFirst = !showingFirst;
            }
            
            // Commencer le fade pour cette paire
            setInterval(fadeImages, 5000);
        }
    });
}

// Initialiser quand la page est chargée
document.addEventListener('DOMContentLoaded', initializeImageFading);
