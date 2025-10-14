import { test, expect, chromium, type Page } from '@playwright/test';
import path from 'node:path';

const dist = path.resolve(__dirname, '..', 'dist'); 

test('Deve ativar o modo foco e bloquear o acesso ao YouTube', async () => {
    const context = await chromium.launchPersistentContext('', {
        headless: false,
        args: [
            `--disable-extensions-except=${dist}`,
            `--load-extension=${dist}`
        ]
    });

    let backgroundPage: Page | undefined; 

    for (const page of context.pages()){
        if(page.url().startsWith('chrome-extension://')){
            backgroundPage = page;
            break;
        }
    }

    expect(backgroundPage, 'Service Worker não foi carregado.').toBeDefined();
   
    const extensionId = backgroundPage!.url().split('/')[2];
    console.log(`Id da extensão encontrado: ${extensionId}`);

    const popupURL = `chrome-extension://${extensionId}/src/popup/popup.html`;
    const popupPage = await context.newPage();
    await popupPage.goto(popupURL);

    const linksInput = popupPage.locator('#links');
    const enableButton = popupPage.locator('#enableFocus');

    await linksInput.fill('youtube.com');
    await enableButton.click();

    popupPage.once('dialog', async dialog =>{
        await dialog.accept();
    });

    const blockedURL = 'https://www.youtube.com/';
    const blockedPageURL = `chrome-extension://${extensionId}/pages/blocked.html`;

    const newPage = await context.newPage();
    await newPage.goto(blockedURL);

    await newPage.waitForURL(blockedPageURL);

    await expect(newPage.locator('h1')).toHaveText(/Acesso Bloqueado!/i);

    await context.close();
});