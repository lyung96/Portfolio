// ==========================================
// 1. YOUR VARIABLES (Edit this!)
// ==========================================
const portfolioData = [
    {
        title: "Data-Driven Armor Destruction",
        tech: "Unreal Engine 5 | C++ | Physics",
        description: "Implemented a procedural dismemberment and modular armor system optimized for network replication."
    },
    {
        title: "Gameplay Ability System (GAS)",
        tech: "UE5 | GAS | Multiplayer",
        description: "Architected scalable combat abilities with strict server-authoritative logic for competitive play."
    },
    {
        title: "AI Combat Architecture",
        tech: "C++ | Behavior Trees",
        description: "Designed responsive enemy AI featuring threat evaluation and dynamic group flanking."
    }
];

// ==========================================
// 2. DOM GENERATION
// ==========================================
const grid = document.getElementById('project-grid');

// Loop through your data and build the cards automatically
portfolioData.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
        <h3 class="project-title">${project.title}</h3>
        <p class="project-tech">${project.tech}</p>
        <p>${project.description}</p>
    `;
    grid.appendChild(card);
});

// ==========================================
// 3. THE "GAME START" SEQUENCE (GSAP)
// ==========================================
// Simulate asset loading
setTimeout(() => {
    document.getElementById('loading-text').style.display = 'none';
    document.getElementById('start-btn').style.display = 'block';
}, 1500);

document.getElementById('start-btn').addEventListener('click', () => {
    // Reveal the main content container
    const main = document.getElementById('main-content');
    main.style.display = 'block';
    document.body.style.overflow = 'auto'; // Re-enable scrolling

    // Create a cinematic animation timeline
    const tl = gsap.timeline();

    tl.to('#intro-screen', { 
        opacity: 0, 
        duration: 1, 
        ease: "power2.inOut",
        onComplete: () => document.getElementById('intro-screen').style.display = 'none'
    })
    .to('#main-content', { opacity: 1, duration: 0.5 }, "-=0.5")
    // Slide text up smoothly like an Awwwards site
    .from('.reveal-text', { 
        y: 50, 
        opacity: 0, 
        duration: 1, 
        stagger: 0.2, 
        ease: "power3.out" 
    });
});