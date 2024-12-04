async function carregarHeader() {
    try {
        const response = await fetch('/shared/header.html');
        if (!response.ok) {
            throw new Error(`Erro ao carregar o cabeçalho: ${response.statusText}`);
        }

        const headerHtml = await response.text();
        document.querySelector('header').innerHTML = headerHtml;
    } catch (error) {
        console.error(error.message);
    }
}