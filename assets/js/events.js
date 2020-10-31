// ----------------------------------------------------------------------------------------------------------Event listeners for key input
// ------------------------------------------------Club Search
document.getElementById("club-search").addEventListener("keyup", function() {
    let searchString = document.getElementById("club-search").value;
    if (searchString.length > 0 && searchString.length < 4) {
        document.getElementById("search-string-message").innerHTML = "Your search string must be at least 4 characters long.";
    } else {
        document.getElementById("search-string-message").innerHTML = "";
    };
});

// ----------------------------------------------------------------------------------------------------------Event listeners for clicks
// ------------------------------------------------Club Search

// Search when user clicks search button
document.getElementById("club-search-button").addEventListener("click", function() {
    // Get the search string from the search input box
    let input = document.getElementById("club-search").value;
    // Search for club and call the API via the clubSearch function
    clubSearch(input);
});

// Search when user presses Enter
document.getElementById("club-search-form").addEventListener("submit", function(event) {
    event.preventDefault();
    // Get the search string from the search input box
    let input = document.getElementById("club-search").value;
    // Search for club and call the API via the clubSearch function
    clubSearch(input);
});

// ------------------------------------------------New Search Button

document.getElementById("new-search-button").addEventListener("click", function returnToResults() {
    document.getElementById("search-results").classList.add("hide");
    document.getElementById("club-info").classList.add("hide");
    document.getElementById("club-search").value=null;
});

// ------------------------------------------------Return to Search Results Button

document.getElementById("view-results-button").addEventListener("click", function returnToResults() {
    document.getElementById("club-info").classList.add("hide");
    document.getElementById("search-results").classList.remove("hide");
});

// ------------------------------------------------Report Bug Button in footer
// Change button to grey when clicked
// This will also need to launch modal to email query - TO BE BUILT - once done the button
document.getElementById("report-bug-button").addEventListener("click", function getElement() {
    document.getElementById("report-bug-modal").classList.remove("hide");
});

// ------------------------------------------------Close Modal
document.getElementById("close-modal-icon").addEventListener("click", function(event) {
    event.preventDefault();
    closeModal();
});

document.getElementById("close-modal-button").addEventListener("click", function(event) {
    event.preventDefault();
    closeModal();
});

function closeModal() {
    document.getElementById("report-bug-modal").classList.add("hide");
};
