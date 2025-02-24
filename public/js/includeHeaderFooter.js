function includeHeaderFooter(elementId, filePath) {
    // Fetch the content from the external file
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            // Insert the fetched HTML content into the specified element
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => {
            console.error("Error including file:", error);
        });
}