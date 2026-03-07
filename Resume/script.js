// Garante que o script só rode depois que a página inteira carregar
document.addEventListener('DOMContentLoaded', () => {

    // Seu dicionário de links: excelente prática de estruturação de dados
    const socialLinks = {
        "GitHub": "https://github.com/RenatoSZA",
        "Facebook": "https://facebook.com/NejiV0800",
        "Instagram": "https://instagram.com/renatoszj",
        "Youtube": "https://youtube.com/@NejiV0800"
    };

    // Seleciona os botões de forma mais estrita (só os que têm ID dentro da classe container)
    const buttons = document.querySelectorAll('.container button[id]');

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Evita qualquer comportamento padrão maluco que o botão possa tentar fazer
            event.preventDefault();
            
            const platform = button.id;
            const url = socialLinks[platform];
            
            if (url) {
                // Abertura de aba segura blindada contra ataques de Tabnabbing
                window.open(url, '_blank', 'noopener,noreferrer');
            } else {
                // Uso de Template Literals pra string ficar mais profissional
                console.error(`[Erro de Rota]: Link não encontrado para a plataforma '${platform}'.`);
            }
        });
    });

});