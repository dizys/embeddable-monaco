const urlParams = new URLSearchParams(window.location.search);
const lang = urlParams.get('lang') || 'typescript';
const codeBase64 = urlParams.get('code');
let code = '// Start here...';
if (codeBase64) {
  code = Base64.decode(codeBase64);
}

let editor = monaco.editor.create(document.getElementById('container'), {
  value: code,
  theme: 'vs-dark',
  language: lang,
  tabSize: 2,
  insertSpaces: true,
  minimap: {
    enabled: false,
  },
  lineNumbersMinChars: 3,
  lineDecorationsWidth: 3,
  fontFamily: "'JetBrains Mono', Consolas, 'Courier New', monospace",
});

// $.getJSON('./monaco-one-dark-pro.json', theme => {
//   monaco.editor.defineTheme('one-dark-pro', theme);
//   monaco.editor.setTheme('one-dark-pro');
// });

document.addEventListener(
  'keydown',
  e => {
    if (
      (window.navigator.platform.match('Mac') ? e.metaKey : e.ctrlKey) &&
      e.keyCode == 83
    ) {
      e.preventDefault();
      let code = editor.getValue();
      if (!code.endsWith('\n')) {
        let position = editor.getPosition();
        let selections = editor.getSelections();
        code += '\n';
        editor.setValue(code);
        editor.setPosition(position);
        editor.setSelections(selections);
      }
      editor.getAction('editor.action.formatDocument').run();
      updateURLCode(lang, code);
    }
  },
  false,
);

function updateURLCode(lang, code) {
  let codeBase64 = Base64.encode(code);

  let url = new URL(window.location);
  url.searchParams.set('lang', lang);
  url.searchParams.set('code', codeBase64);
  window.history.replaceState('', 'Embeddable Monaco', url);
}
