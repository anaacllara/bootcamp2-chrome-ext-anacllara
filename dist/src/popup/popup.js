// create variables to manipulate the input and buttons
const linksInput = document.getElementById('links');
const enableBtn = document.getElementById('enableFocus');
const disableBtn = document.getElementById('disableFocus');

// JS will "listen" the array sites when focus activeted 
// the array will catch the linksInput values and slipt them with ','
// using chrome API to manage the sites chosen to be blocked

enableBtn.addEventListener('click', () => {
    const sites = linksInput.value;
    const blockedSites = sites.split(',').map(s => s.trim());

    chrome.storage.local.set({ blockedSites: blockedSites }, () => {
        alert('Modo Foco Ativado!');
    });
});

// will save an empty array in chrome API, so no sites has to be "listen"
disableBtn.addEventListener('click', () => {
    chrome.storage.local.set({ blockedSites: [] }, () => {
        alert('Modo Foco Desativado!');
    });
});