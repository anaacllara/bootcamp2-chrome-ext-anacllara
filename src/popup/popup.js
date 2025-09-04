const linksInput = document.getElementById('links');
const enableBtn = document.getElementById('enableFocus');
const disableBtn = document.getElementById('disableFocus');


enableBtn.addEventListener('click', () => {
    const sites = linksInput.value;
    const blockedSites = sites.split(',').map(s => s.trim());

    chrome.storage.local.set({ blockedSites: blockedSites }, () => {
        alert('Modo Foco Ativado!');
    });
});

disableBtn.addEventListener('click', () => {
    chrome.storage.local.set({ blockedSites: [] }, () => {
        alert('Modo Foco Desativado!');
    });
});

