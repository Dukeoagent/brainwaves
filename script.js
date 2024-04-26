// Sample data for autocomplete search
const searchData = ['Technology', 'Programming', 'Gaming', 'Movies', 'Music', 'Art', 'Books', 'Travel', 'Food', 'Fitness'];

const searchInput = document.getElementById('searchInput');
const searchResults = document.querySelector('.search-results');

// Event listener for search input
searchInput.addEventListener('input', function() {
    const searchQuery = this.value.toLowerCase();
    const filteredResults = searchData.filter(item => item.toLowerCase().startsWith(searchQuery));
    displaySearchResults(filteredResults);
});

// Display search results
function displaySearchResults(results) {
    searchResults.innerHTML = '';
    results.forEach(result => {
        const li = document.createElement('li');
        li.textContent = result;
        searchResults.appendChild(li);
    });
}

// Hide search results when clicking outside the search bar
document.addEventListener('click', function(event) {
    if (!event.target.closest('.search-bar')) {
        searchResults.innerHTML = '';
    }
});

// Community Showcase Overlay
function showOverlay(element) {
    element.getElementsByClassName("overlay")[0].style.display = "flex";
}

function hideOverlay(element) {
    element.getElementsByClassName("overlay")[0].style.display = "none";
}

// JavaScript code to handle post creation
const postForm = document.getElementById('postForm');

postForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get post data from the form
    const postTitle = postForm.elements['postTitle'].value;
    const postContent = postForm.elements['postContent'].value;

    // Create a new post object (you'll need to define this based on your backend setup)
    const newPost = {
        title: postTitle,
        content: postContent,
        // Add other necessary fields like author, timestamp, etc.
    };

    // Handle posting logic (e.g., send data to backend API)
    // Replace this with your actual backend integration
    console.log('New post:', newPost);

    // Clear the form after submission
    postForm.reset();
});
