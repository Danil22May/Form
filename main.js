document.getElementById("opinion_form").addEventListener('submit', function(event) {
    event.preventDefault();
    
    const form = document.getElementById("opinion_form");
    const formData = new FormData(form);

    
    for (let pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
    }
});