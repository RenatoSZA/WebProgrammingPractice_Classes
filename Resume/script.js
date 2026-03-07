    const socialLinks = {
        "GitHub": "https://github.com/RenatoSZA",
        "Facebook": "https://facebook.com/NejiV",
        "Instagram": "https://instagram.com/renatoszj",
        "Youtube": "https://youtube.com/@NejiV0800"
    };

    const buttons = document.querySelectorAll('.container button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const platform = button.id;
            const url = socialLinks[platform];
            
            if (url) {
                window.open(url, '_blank');
            } else {
                console.error("Link not found for: " + platform);
            }
        });
    });