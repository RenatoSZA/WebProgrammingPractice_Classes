    // 1. Define the links for each platform
    const socialLinks = {
        "GitHub": "https://github.com/RenatoSZA",
        "Facebook": "https://facebook.com/NejiV",
        "Instagram": "https://instagram.com/renatoszj",
        "Youtube": "https://youtube.com/@NejiV0800"
    };

    // 2. Select all buttons inside the last container
    const buttons = document.querySelectorAll('.container button');

    // 3. Add a click event listener to each button
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const platform = button.id;
            const url = socialLinks[platform];
            
            if (url) {
                // Opens the link in a new tab
                window.open(url, '_blank');
            } else {
                console.error("Link not found for: " + platform);
            }
        });
    });