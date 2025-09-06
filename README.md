# Bloqueador de Foco
Extensão extensão simples e eficaz que ajuda você a manter o foco. Bloqueando o acesso a sites de distração. Conta com mensagem motivacional para encorajar a manter os seus objetivos. 

---

## 🚀  Começando
Ao seguir as intruções, você terá uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste. 

### 🌐 Pré-requisitos
Você só precisa do navegador Google Chrome instalado na sua máquina. 

### 🔧 Instalação
Série de passo-a-passo que lhe instruí a ter essa extensão no seu navegador: 

 > 1. Abra o Chrome e digite ``chrome://extensions `` na barra de pesquisa. 
 2. No canto superior direito, ative o ``Modo Desenvolvedor``. 
 3. Clique no botão ``Carregar sem compactar (Load unpacked)``.
 4. Selecione a pasta raiz que contenha o arquivo ``manifest.json``

 Depois de instalar, o ícone da extensão aparecerá na barra de ferramentas do Chrome 🧩. 

 ## ⚙️ Executando os Testes 
 A extensão não possui testes automatizados complexos 🎉. Siga estes passos para testá-la: 

 > 1. Clique no ícone 🎯 abrir o pop-up. 
 2. No campo de texto, digite a URL de um site que deseja bloquear, exemplo:  ``youtube.com``.
 3. Clique em ``Ativar Foco``
 4. Abra uma nova aba e tente acessar o site que você acabou de digitar. 

 Se a página de bloqueio aparecer, significa que a extensão está funcionando corretamente ☑️ .

 ## 🛠️ Construído com 
- [ ] HTML
- [ ] CSS
- [ ] JAVASCRIPT
- [ ] APIs do CHROME ``chrome.storage``  ``chrome.tabs``

## 🖇️ Estrutura do Projeto 

A estrutura foi organizada para facilitar o desenvolvimento e manutenção, separando funcionalidades principais em pastas lógicas: 

- **`icons/`**: contém ícones da extensão em ``16px``, ``32px``, ``48px`` e ``128px``. 
- **`pages/`**: armazena páginas html e seus estilos, como a página de bloqueio. 
- **`src/`**: diretório principal do código-fonte. 
- **`src/background/`**: contém o ``service-worker.js`` que roda em segundo plano. 
- **`src/popup/`**: contém os arquivos da interface do usuário que aparece no pop-up da extensão. 
- **`src/styles/`**: centraliza os arquivos CSS reutilizáveis.

- **`LICENSE.md`**: arquivo de licença do projeto. 
- **`manifest.json`**: arquivo de configuração principal da extensão. 

## 🤝 Colaborando 
Fique à vontade para contribuir com ideias, reportar bugs ou enviar melhorias! Se quiser colaborar com o projeto, entre em contato comigo. 

## 📄 Licença 
Este projeto está sob a licença MIT - veja o arquivo **[LICENSE.md](./LICENSE.md)** para detalhes. 

---
com ❤️ por **[Ana Clara Carvalho](https://github.com/anaacllara)** 