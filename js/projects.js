document.addEventListener('DOMContentLoaded', function() {
    initProjectFilters();
    initProjectAnimations();
});

// Initialize project filters
function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter projects
            const filter = button.getAttribute('data-filter');
            
            projectCards.forEach(card => {
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

// Initialize project animations
function initProjectAnimations() {
    const projectCards = document.querySelectorAll('.project-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1
    });

    projectCards.forEach(card => {
        observer.observe(card);
    });
}

// Optional: Add search functionality
function initProjectSearch() {
    const searchInput = document.querySelector('.project-search input');
    const projectCards = document.querySelectorAll('.project-card');

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();

        projectCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();
            const tags = Array.from(card.querySelectorAll('.tech-tag'))
                .map(tag => tag.textContent.toLowerCase());

            const matches = title.includes(searchTerm) || 
                          description.includes(searchTerm) ||
                          tags.some(tag => tag.includes(searchTerm));

            card.classList.toggle('hidden', !matches);
        });
    });
}