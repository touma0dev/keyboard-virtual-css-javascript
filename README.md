# keyboard-virtual-60%-css-javascript
Keyboard ABNT Virtual Using Javascript and css.
# Link Do Site 
[LINK](https://keyboard-virtual-abnt-2.netlify.app/)
# Como funciona ? 
 Bom ele pega seu data key do keyboard e convert no script do java compara numa lista de array e blablabla....
 Você Não aqui pra isso olha o diretorio ali ta bem separado visivelmente não nem comitar funcionalidade.
# Linguagem - Language
 Bom ele usa o sua própria linguagem do seu navegador então se ele ta em inglês... você já sabe nem me vem falar que ta disfuncional .
 ` window.onload = function() {
          var lang = navigator.language || navigator.userLanguage; // obtém o idioma do navegador do usuário
          if (lang.startsWith('pt')) {
            // Redireciona para a página em português
            window.location.href = "/lib/portuguese.html";
          } else {
            // Redireciona para a página em inglês
            window.location.href = "/lib/english.html";
          }
}`
# Defeitos 
  Bom como curiosamente existem mts teclados diferentes então é complicado mapear todas as teclas então ficou desse jeito msm .
