function searchshow(){
    let search = document.getElementById('search');
    let searchInput = document.getElementById('searchInput');
    let searchvalue = document.getElementById('searchInput').value.toLowerCase();
    if(searchInput.style.display = 'none'){
        searchInput.style.display = 'flex';
    }
    else{}
}
function menushow(){
    let options = document.getElementById('options');
    let content = document.getElementById('content');
    let close = document.getElementById('close');
    content.style.transition = '2s ease';
    content.style.display = 'flex';
    close.style.display = 'flex';
}
function closebar(){
    let close = document.getElementById('close');
    let content = document.getElementById('content');
    content.style.transition = '2s ease';
    content.style.display = 'none';
    close.style.display = 'none';
}
function countContainers() {
    // Select all elements with class "container"
    var containerElements = document.querySelectorAll('.container');

    // Initialize a counter variable
    var containerCount = 0;

    // Loop through each container element
    containerElements.forEach(function(container) {
        // Extract the numeric part of the ID
        var containerIdParts = container.id.split('-');
        var containerNumber = parseInt(containerIdParts[containerIdParts.length - 1]);

        // Check if it's a valid number
        if (!isNaN(containerNumber)) {
            // Increment the counter
            containerCount++;
        }
    });

    // Display the result
    console.log('Number of container elements: ' + containerCount);
}

// Call the function
countContainers();

