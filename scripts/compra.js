document.addEventListener("DOMContentLoaded", function() {
    function getQueryParams() {
        const params = {};
        const queryString = window.location.search.slice(1);
        const queryArray = queryString.split('&');

        queryArray.forEach(function(query) {
            const [key, value] = query.split('=');
            params[key] = decodeURIComponent(value.replace(/\+/g, ' '));
        });

        return params;
    }

    const params = getQueryParams();
    const produtoInfo = document.getElementById("produto-info");

    if (params.name && params.price && params.image) {
        produtoInfo.innerHTML = `
            <h3>${params.name}</h3>
            <img src="${params.image}" alt="${params.name}" style="width: 100%; max-width: 300px; margin: 10px 0;">
            <p>Preço: R$ ${params.price}</p>
        `;
    } else {
        produtoInfo.innerHTML = `<p>Informações do produto não disponíveis.</p>`;
    }

    const compraForm = document.getElementById("compra-form");
    compraForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Compra finalizada com sucesso!');
    });
});
