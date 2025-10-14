# Bloqueador de Foco
Extensão simples e eficaz que ajuda você a manter o foco, **bloqueando o acesso a sites de distração**. Conta com mensagem motivacional para encorajar a manter os seus objetivos. 

---

## 🚀  Começando
Ao seguir as intruções, você terá uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste. 

### 🌐 Pré-requisitos
Para rodar a aplicação e os testes, você precisará dos seguintes softwares instalados: 
* **Node.js**
* **npm** (instalado junto com o Node.js)
* **Docker Desktop**
* **Navegador Google Chrome**

### 🔧 Instalação
Série de passo-a-passo que lhe instruí a ter essa extensão no seu navegador: 

1. Clone o repositório:
> ``git clone https://github.com/anaacllara/bootcamp2-chrome-ext-anacllara.git``
2. Instale as dependências do Node.js:
> ``npm install``
3. Instale a Extensão no Chrome:
> 1. Abra o Chrome e digite ``chrome://extensions `` na barra de pesquisa.
 > 2. No canto superior direito, ative o ``Modo Desenvolvedor``. 
 > 3. Clique no botão ``Carregar sem compactar (Load unpacked)``.
 > 4. Selecione a pasta raiz que contenha o arquivo ``manifest.json``

Depois de instalar, o ícone da extensão aparecerá na barra de ferramentas do Chrome 🧩. 

 ## ⚙️ Executando os Testes 
 Esta seção explica como rodar os testes automatizados da aplicação, que usa o **Playwright** para testes *end-to-end (e2e)*.

 **🔩 Pré-requisito:** Instale as dependências *(passo 2 da Instalação)* e certifique-se que o Chrome esteja acessível.
 
**Rodando no terminal:**
> No terminal da pasta raiz do projeto, digite: ``npm test``

**Testes manuais:**
Adicione a extensão no Chrome, conforme o passo 3 da Instalação.
 > 1. Clique no ícone 🎯 para abrir o pop-up. 
 > 2. No campo de texto, digite a URL de um site que deseja bloquear, exemplo:  ``youtube.com``.
 > 3. Clique em ``Ativar Foco``.
 > 4. Abra uma nova aba e tente acessar o site que você acabou de digitar. 

Se a página de bloqueio aparecer, significa que a extensão está funcionando corretamente ☑️ .

 ## 🛠️ Construído com 
- [ ] HTML, CSS e JAVASCRIPT
- [ ] APIs do CHROME ``chrome.storage``  ``chrome.tabs``
- [ ] NODE.JS
- [ ] PLAYWRIGHT
- [ ] DOCKER e DOCKER COMPOSE

## 🖇️ Estrutura do Projeto 

A estrutura foi organizada para facilitar o desenvolvimento e manutenção. A pasta ``chrome-ext`` contém cada um dos arquivos citados. 

- **`icons/`**: contém ícones da extensão.
- **`node_modules`**: dependências do node.js.
- **`pages/`**: armazena páginas html e seus estilos, como a página de bloqueio.
- **`scripts`**: scripts auxiliares, como o de build (gera pasta ``dist`` com o arquivo ``.zip``).
- **`src/`**: diretório principal do código-fonte.
   * **`src/background/`**: contém o ``service-worker.js`` que roda em segundo plano.
   * **`src/popup/`**: contém os arquivos da interface do usuário que aparece no pop-up da extensão.
   * **`src/styles/`**: centraliza os arquivos CSS reutilizáveis.
- **`tests`**: contém arquivo do teste automatizado e configuração do Playwright.
- **`DockerFile`** e **`docker-compose.yml`**: arquivos de configuração do Docker.
- **`manifest.json`**: arquivo de configuração principal da extensão.
- **`package-lock.json`**: arquivo Node.js para garantir consistência.
- **`package.json`**: arquivo de configuração do Node.js

## 🤝 Colaborando 
Fique à vontade para contribuir com ideias, reportar bugs ou enviar melhorias! Se quiser colaborar com o projeto, entre em contato comigo. 

## 📄 Licença 
Este projeto está sob a licença MIT - veja o arquivo **[LICENSE](./LICENSE.md)** para detalhes. 

---
com ❤️ por **[Ana Clara Carvalho](https://github.com/anaacllara)** .
