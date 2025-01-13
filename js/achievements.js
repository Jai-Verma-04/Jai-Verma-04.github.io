document.addEventListener('DOMContentLoaded', function() {
    initCertificateFilters();
});

// Initialize certificate filters
function initCertificateFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const certificationCards = document.querySelectorAll('.certification-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter certificates
            const filter = button.getAttribute('data-filter');
            
            certificationCards.forEach(card => {
                card.classList.add('hidden');
                
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    setTimeout(() => {
                        card.classList.remove('hidden');
                    }, 300);
                }
            });
        });
    });
}

