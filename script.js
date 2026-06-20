// High quality curated collection across multiple categories
const quotesDatabase = [
    // Motivation
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt", category: "Motivation" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill", category: "Motivation" },
    { text: "It always seems impossible until it's done.", author: "Nelson Mandela", category: "Motivation" },
    { text: "Act as if what you do makes a difference. It does.", author: "William James", category: "Motivation" },
    { text: "Keep your face always toward the sunshine - and shadows will fall behind you.", author: "Walt Whitman", category: "Motivation" },
    { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs", category: "Motivation" },
    { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky", category: "Motivation" },
    { text: "The best way to predict your future is to create it.", author: "Abraham Lincoln", category: "Motivation" },
    { text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis", category: "Motivation" },
    { text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar", category: "Motivation" },

    // Wisdom
    { text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu", category: "Wisdom" },
    { text: "Happiness depends upon ourselves.", author: "Aristotle", category: "Wisdom" },
    { text: "The mind is everything. What you think you become.", author: "Buddha", category: "Wisdom" },
    { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi", category: "Wisdom" },
    { text: "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.", author: "Martin Luther King Jr.", category: "Wisdom" },
    { text: "Peace begins with a smile.", author: "Mother Teresa", category: "Wisdom" },
    { text: "For every minute you are angry you lose sixty seconds of happiness.", author: "Ralph Waldo Emerson", category: "Wisdom" },
    { text: "No medicine cures what happiness cannot.", author: "Gabriel García Márquez", category: "Wisdom" },
    { text: "A warm smile is the universal language of kindness.", author: "William Arthur Ward", category: "Wisdom" },
    { text: "The greatest weapon against stress is our ability to choose one thought over another.", author: "William James", category: "Wisdom" },

    // Creativity
    { text: "Creativity is intelligence having fun.", author: "Albert Einstein", category: "Creativity" },
    { text: "Every child is an artist. The problem is how to remain an artist once we grow up.", author: "Pablo Picasso", category: "Creativity" },
    { text: "You can't use up creativity. The more you use, the more you have.", author: "Maya Angelou", category: "Creativity" },
    { text: "Art is the elimination of the unnecessary.", author: "Pablo Picasso", category: "Creativity" },
    { text: "To live a creative life, we must lose our fear of being wrong.", author: "Joseph Chilton Pearce", category: "Creativity" },
    { text: "Everything you can imagine is real.", author: "Pablo Picasso", category: "Creativity" },
    { text: "An idea that is not dangerous is unworthy of being called an idea at all.", author: "Oscar Wilde", category: "Creativity" },
    { text: "Creativity takes courage.", author: "Henri Matisse", category: "Creativity" },
    { text: "The chief enemy of creativity is 'good' sense.", author: "Pablo Picasso", category: "Creativity" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt", category: "Creativity" },

    // Science
    { text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein", category: "Science" },
    { text: "Somewhere, something incredible is waiting to be known.", author: "Carl Sagan", category: "Science" },
    { text: "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.", author: "Marie Curie", category: "Science" },
    { text: "The good thing about science is that it's true whether or not you believe in it.", author: "Neil deGrasse Tyson", category: "Science" },
    { text: "Look deep into nature, and then you will understand everything better.", author: "Albert Einstein", category: "Science" },
    { text: "Science is organized knowledge. Wisdom is organized life.", author: "Immanuel Kant", category: "Science" },
    { text: "In all things of nature there is something of the marvelous.", author: "Aristotle", category: "Science" },
    { text: "We are a way for the cosmos to know itself.", author: "Carl Sagan", category: "Science" },
    { text: "The important thing is not to stop questioning. Curiosity has its own reason for existence.", author: "Albert Einstein", category: "Science" },
    { text: "Time spent among trees is never wasted time.", author: "Katrina Mayer", category: "Science" },

    // Philosophy
    { text: "The only true wisdom is in knowing you know nothing.", author: "Socrates", category: "Philosophy" },
    { text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Aristotle", category: "Philosophy" },
    { text: "Life is not a problem to be solved, but a reality to be experienced.", author: "Søren Kierkegaard", category: "Philosophy" },
    { text: "He who has a why to live can bear almost any how.", author: "Friedrich Nietzsche", category: "Philosophy" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs", category: "Philosophy" },
    { text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson", category: "Philosophy" },
    { text: "Quiet minds cannot be perplexed or frightened but go on in fortune or misfortune at their own private pace.", author: "Robert Louis Stevenson", category: "Philosophy" },
    { text: "If you want to live a happy life, tie it to a goal, not to people or things.", author: "Albert Einstein", category: "Philosophy" },
    { text: "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.", author: "Bil Keane", category: "Philosophy" },
    { text: "The mind once stretched by a new idea, never returns to its original dimensions.", author: "Oliver Wendell Holmes Sr.", category: "Philosophy" }
];

// Curated beautiful vibrant gradient themes
const colorThemes = [
    { gradient: "linear-gradient(135deg, #f53f54, #ff8a00)", accent: "#f53f54", rgb: "245, 63, 84" },
    { gradient: "linear-gradient(135deg, #00c6ff, #0072ff)", accent: "#0072ff", rgb: "0, 114, 255" },
    { gradient: "linear-gradient(135deg, #11998e, #38ef7d)", accent: "#11998e", rgb: "17, 153, 142" },
    { gradient: "linear-gradient(135deg, #7f00ff, #e100ff)", accent: "#7f00ff", rgb: "127, 0, 255" },
    { gradient: "linear-gradient(135deg, #654ea3, #eaafc8)", accent: "#654ea3", rgb: "101, 78, 163" },
    { gradient: "linear-gradient(135deg, #0575e6, #00f260)", accent: "#0575e6", rgb: "5, 117, 230" },
    { gradient: "linear-gradient(135deg, #ff416c, #ff4b2b)", accent: "#ff416c", rgb: "255, 65, 108" },
    { gradient: "linear-gradient(135deg, #e65c00, #f9d423)", accent: "#e65c00", rgb: "230, 92, 0" },
    { gradient: "linear-gradient(135deg, #134e5e, #71b280)", accent: "#134e5e", rgb: "19, 78, 94" },
    { gradient: "linear-gradient(135deg, #2b5876, #4e4376)", accent: "#4e4376", rgb: "78, 67, 118" },
    { gradient: "linear-gradient(135deg, #ff0844, #ffb199)", accent: "#ff0844", rgb: "255, 8, 68" },
    { gradient: "linear-gradient(135deg, #1d976c, #93f5d1)", accent: "#1d976c", rgb: "29, 151, 108" }
];

let currentQuote = null;
let selectedCategory = 'All';
let favorites = [];
let synth = window.speechSynthesis;
let speechUtterance = null;
let isSpeaking = false;
let lastThemeIndex = -1;

// Initialize
window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('year').textContent = new Date().getFullYear();
    loadFavorites();
    displayNewQuote();
    if (synth) synth.cancel();
});

function getFilteredQuotes() {
    return selectedCategory === 'All' ? quotesDatabase : quotesDatabase.filter(q => q.category === selectedCategory);
}

function setCategory(category, element) {
    if (selectedCategory === category) return;
    selectedCategory = category;
    const buttons = document.querySelectorAll('.category-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');
    displayNewQuote();
}

function getRandomQuote(filteredPool) {
    if (filteredPool.length === 0) return null;
    if (filteredPool.length === 1) return filteredPool[0];
    let newQuote = null;
    do {
        const randIndex = Math.floor(Math.random() * filteredPool.length);
        newQuote = filteredPool[randIndex];
    } while (currentQuote && newQuote.text === currentQuote.text);
    return newQuote;
}

function changeTheme() {
    let nextIndex = lastThemeIndex;
    while (nextIndex === lastThemeIndex) {
        nextIndex = Math.floor(Math.random() * colorThemes.length);
    }
    lastThemeIndex = nextIndex;
    const theme = colorThemes[nextIndex];
    const root = document.documentElement;
    root.style.setProperty('--theme-gradient', theme.gradient);
    root.style.setProperty('--theme-accent', theme.accent);
    root.style.setProperty('--theme-accent-rgb', theme.rgb);
}

function displayNewQuote() {
    stopSpeech();
    const pool = getFilteredQuotes();
    const nextQuote = getRandomQuote(pool);
    if (!nextQuote) return;

    const quoteWrapper = document.getElementById('quote-wrapper');
    const quoteCategory = document.getElementById('quote-category');
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');

    quoteWrapper.classList.add('fade-out');

    setTimeout(() => {
        currentQuote = nextQuote;
        quoteText.textContent = `“${currentQuote.text}”`;
        quoteAuthor.textContent = currentQuote.author;
        quoteCategory.textContent = currentQuote.category;
        updateFavoriteButtonState();
        changeTheme();
        quoteWrapper.classList.remove('fade-out');
    }, 300);
}

function isCurrentQuoteFavorited() {
    if (!currentQuote) return false;
    return favorites.some(fav => fav.text === currentQuote.text && fav.author === currentQuote.author);
}

function toggleActiveQuoteFavorite() {
    if (!currentQuote) return;
    const index = favorites.findIndex(fav => fav.text === currentQuote.text && fav.author === currentQuote.author);
    if (index > -1) {
        favorites.splice(index, 1);
        showToast("Removed from favorites!");
    } else {
        favorites.push({ text: currentQuote.text, author: currentQuote.author, category: currentQuote.category });
        showToast("Added to favorites!", true);
    }
    saveFavorites();
    updateFavoriteButtonState();
    renderFavoritesList();
}

function updateFavoriteButtonState() {
    const favBtn = document.getElementById('fav-btn');
    if (isCurrentQuoteFavorited()) {
        favBtn.classList.add('is-fav');
        favBtn.setAttribute('aria-label', 'Remove from Favorites');
    } else {
        favBtn.classList.remove('is-fav');
        favBtn.setAttribute('aria-label', 'Add to Favorites');
    }
}

function showToast(message, isSuccess = true) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-message');
    toastMsg.textContent = message;
    const icon = toast.querySelector('svg');
    icon.style.display = 'block';
    icon.style.fill = isSuccess ? '#34c759' : '#ff3b30';
    toast.classList.add('show');
    clearTimeout(window.toastTimer);
    window.toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
}

function toggleSidebar(open) {
    const sidebar = document.getElementById('favorites-sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');
    if (open) {
        sidebar.classList.add('open');
        backdrop.classList.add('active');
        renderFavoritesList();
    } else {
        sidebar.classList.remove('open');
        backdrop.classList.remove('active');
    }
}

function saveFavorites() {
    localStorage.setItem('zenquotes_favorites', JSON.stringify(favorites));
    document.getElementById('fav-count').textContent = favorites.length;
}

function loadFavorites() {
    try {
        const stored = localStorage.getItem('zenquotes_favorites');
        favorites = stored ? JSON.parse(stored) : [];
    } catch (e) {
        favorites = [];
    }
    document.getElementById('fav-count').textContent = favorites.length;
}

function renderFavoritesList() {
    const container = document.getElementById('favorites-list');
    container.innerHTML = '';
    if (favorites.length === 0) {
        container.innerHTML = `
            <div class="empty-favorites">
                <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                <p class="empty-favorites-text">No favorites saved yet. Heart your favorite quotes to review them here!</p>
            </div>`;
        return;
    }
    favorites.forEach((fav, index) => {
        const item = document.createElement('div');
        item.className = 'fav-item';
        item.setAttribute('onclick', `selectFavoriteQuote(${index})`);
        item.innerHTML = `
            <div class="fav-item-text">“${fav.text}”</div>
            <div class="fav-item-author">— ${fav.author}</div>
            <div class="fav-item-footer" onclick="event.stopPropagation()">
                <span class="fav-item-tag">${fav.category}</span>
                <div class="fav-item-actions">
                    <button class="fav-action-btn" onclick="copyIndividualQuote('${fav.text.replace(/'/g, "\\'")}', '${fav.author.replace(/'/g, "\\'")}')" aria-label="Copy Quote">
                        <svg viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
                    </button>
                    <button class="fav-action-btn delete-fav" onclick="deleteFavorite(${index})" aria-label="Delete Favorite">
                        <svg viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                    </button>
                </div>
            </div>`;
        container.appendChild(item);
    });
}

function selectFavoriteQuote(index) {
    const fav = favorites[index];
    if (!fav) return;
    currentQuote = fav;
    const quoteWrapper = document.getElementById('quote-wrapper');
    const quoteCategory = document.getElementById('quote-category');
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');

    quoteWrapper.classList.add('fade-out');
    setTimeout(() => {
        quoteText.textContent = `“${fav.text}”`;
        quoteAuthor.textContent = fav.author;
        quoteCategory.textContent = fav.category;
        updateFavoriteButtonState();
        changeTheme();
        quoteWrapper.classList.remove('fade-out');
        toggleSidebar(false);
        showToast("Quote applied!");
    }, 300);
}

function deleteFavorite(index) {
    favorites.splice(index, 1);
    saveFavorites();
    renderFavoritesList();
    updateFavoriteButtonState();
    showToast("Removed from favorites!");
}

function copyQuote() {
    if (!currentQuote) return;
    const fullText = `“${currentQuote.text}” — ${currentQuote.author}`;
    navigator.clipboard.writeText(fullText).then(() => {
        showToast("Copied to clipboard!");
    }).catch(() => {
        const textarea = document.createElement('textarea');
        textarea.value = fullText;
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            showToast("Copied to clipboard!");
        } catch (err) {
            showToast("Failed to copy quote.", false);
        }
        document.body.removeChild(textarea);
    });
}

function copyIndividualQuote(text, author) {
    const fullText = `“${text}” — ${author}`;
    navigator.clipboard.writeText(fullText).then(() => showToast("Copied to clipboard!"));
}

function shareOnTwitter() {
    if (!currentQuote) return;
    const text = encodeURIComponent(`“${currentQuote.text}” — ${currentQuote.author}`);
    const twitterUrl = `https://twitter.com/intent/tweet?text=${text}`;
    window.open(twitterUrl, '_blank');
}

function toggleSpeech() {
    if (!currentQuote) return;
    if (!synth) {
        showToast("Speech synthesis not supported in this browser.", false);
        return;
    }
    const speechBtn = document.getElementById('speech-btn');
    if (isSpeaking) {
        stopSpeech();
    } else {
        isSpeaking = true;
        speechBtn.classList.add('is-reading');
        speechBtn.setAttribute('data-tooltip', 'Stop Reading');
        const textToRead = `${currentQuote.text} by ${currentQuote.author}`;
        speechUtterance = new SpeechSynthesisUtterance(textToRead);
        speechUtterance.rate = 0.95;
        speechUtterance.pitch = 1.0;
        speechUtterance.onend = () => stopSpeech();
        speechUtterance.onerror = () => stopSpeech();
        synth.speak(speechUtterance);
    }
}

function stopSpeech() {
    if (synth && isSpeaking) synth.cancel();
    isSpeaking = false;
    const speechBtn = document.getElementById('speech-btn');
    if (speechBtn) {
        speechBtn.classList.remove('is-reading');
        speechBtn.setAttribute('data-tooltip', 'Read Aloud');
    }
}
