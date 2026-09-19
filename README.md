# Aprova — INSS · Banco do Brasil · PRF

App de estudos e simulados para os concursos do **INSS (Técnico do Seguro Social)**,
**Banco do Brasil (Escriturário)** e **PRF (Policial Rodoviário Federal)**.

Roda no navegador, sem instalar nada e sem internet (depois da primeira abertura).
Funciona no computador e no celular, e pode ser adicionado à tela de início do telefone como um aplicativo.

## O que tem dentro

| Aba | O que faz |
|---|---|
| **Conteúdo** | O edital dividido em módulos. Quatro botões: **Matérias em comum** (cai nas três provas), **Específico INSS**, **Específico BB** e **Específico PRF**. Cada módulo traz o resumo explicado, os pontos-chave para decorar, as pegadinhas da banca, **5 vídeos recomendados do YouTube** (3 aulas específicas + 2 buscas prontas) e um teste com correção e explicação no final. |
| **Treino** | Questões por concurso e por matéria, uma de cada vez, com correção imediata e explicação do erro. Filtros: "só as que eu errei" e "só matérias específicas". No fim, mostra o aproveitamento por matéria e **em que focar**. |
| **Simulados** | Prova completa de cada concurso, com tempo cronometrado, navegação entre questões, marcação para revisar e relatório final: nota, percentual, desempenho por matéria, pontuação líquida no padrão CEBRASPE e gabarito comentado questão por questão. |
| **Redação** | Temas de prova discursiva no formato da banca (texto motivador, comando e aspectos obrigatórios). A pessoa escreve dentro do app e clica em **Copiar prompt + minha redação**: o app monta um prompt de correção pronto para colar em um chat de IA (ChatGPT, Claude ou Gemini), que devolve nota por critério, erros de português trecho a trecho e o que treinar. Depois é possível **registrar a nota e a correção recebida**: o app guarda o histórico de cada tema e mostra média, melhor nota e se as notas estão subindo. O rascunho fica salvo. |

O progresso (módulos estudados, acertos, histórico de simulados) fica salvo no próprio navegador,
no aparelho de quem está estudando.

## Números

- 44 módulos de conteúdo (15 comuns + 9 INSS + 9 BB + 11 PRF), com 220 indicações de vídeo
- 191 questões com explicação, no estilo das bancas CEBRASPE (INSS e PRF) e CESGRANRIO (BB)
- 3 simulados completos: INSS (64 questões / 150 min), BB (52 / 150 min) e PRF (70 / 180 min),
  com opção de versão reduzida pela metade
- 15 temas de redação (5 por concurso), com o que a banca espera em cada um

## Como abrir no computador (Windows)

1. Copie a pasta inteira para o computador (mantenha todos os arquivos juntos).
2. Dê dois cliques em **`Abrir Aprova.bat`** — ou abra o `index.html` no navegador.

## Como abrir no celular

A maneira mais fácil é publicar no GitHub Pages e mandar o link:

1. No GitHub, abra o repositório → **Settings** → **Pages**.
2. Em *Source*, escolha **Deploy from a branch**, branch **main**, pasta **/ (root)** → **Save**.
3. Em um ou dois minutos o site fica no ar em `https://<seu-usuario>.github.io/<nome-do-repositorio>/`.
4. No celular, abra o link e use o menu do navegador → **Adicionar à tela de início**.
   Depois disso o app abre como um aplicativo e funciona offline.

> Para o link funcionar para outras pessoas, o repositório precisa estar como **Public**.

Sem GitHub também dá: mande a pasta compactada, a pessoa descompacta e abre o `index.html`.

> Dentro do próprio app há um botão **❓** no topo, com as instruções de instalação no Android, no iPhone e no computador.

## Progresso e vários aparelhos

O progresso (módulos estudados, acertos, simulados e textos) fica guardado **no navegador de cada
aparelho** — celular e computador não se conversam sozinhos, porque o app não tem servidor nem login.

Para juntar os dois, use **Treino → 📦 Levar meu progresso para outro aparelho**:

1. No aparelho que está mais adiantado, abra essa seção e toque em **Copiar meu progresso**.
2. Mande o código para você mesmo (WhatsApp, e-mail, bloco de notas).
3. No outro aparelho, abra a mesma seção, cole o código e toque em **Importar progresso**.

Os dois históricos são **somados**, nada é apagado. Dá para repetir quando quiser.

Duas observações: limpar os dados do navegador apaga o progresso daquele aparelho; e a aba anônima
não guarda nada.

## Sobre o conteúdo

- Os resumos seguem os editais mais recentes de cada concurso e os pontos historicamente mais
  cobrados pelas bancas.
- As questões são **originais**, escritas no estilo das provas anteriores (itens de Certo/Errado
  da CEBRASPE para INSS e PRF; múltipla escolha com cinco alternativas da CESGRANRIO para o BB).
  Todas trazem explicação do porquê da resposta.
- Cada módulo traz **3 aulas específicas do YouTube** sobre o assunto, localizadas por busca na web,
  mais **2 buscas prontas** no YouTube (com tema e canal sugerido: Gran Cursos, Estratégia Concursos,
  AlfaCon e outros). Se algum vídeo sair do ar, a busca logo abaixo dele resolve — e sempre traz
  material atualizado.
- Leis e valores mudam. Antes da prova, confira sempre o edital publicado.

### Requisitos de escolaridade

- **INSS — Técnico do Seguro Social**: nível médio.
- **Banco do Brasil — Escriturário**: nível médio.
- **PRF — Policial Rodoviário Federal**: curso superior completo em qualquer área.

A PRF tem ainda outras fases além da prova objetiva: discursiva, teste de aptidão física,
exames médicos e psicológico, investigação social e curso de formação.

## Como acrescentar conteúdo ou questões

Tudo fica em arquivos JavaScript simples dentro da pasta `dados/`, sem etapa de build:

- `conteudo-comum.js`, `conteudo-inss.js`, `conteudo-bb.js`, `conteudo-prf.js` — os módulos de estudo.
- `banco-comum.js`, `banco-inss.js`, `banco-bb.js`, `banco-prf.js` — as questões.
- `simulados.js` — quantas questões de cada matéria entram em cada simulado.
- `redacoes.js` — os temas de redação (texto motivador, comando, aspectos e o que a banca espera).

Uma questão tem este formato:

```js
{
  id: 'C-PT-023',                       // identificador único
  editais: ['inss','bb','prf'],         // em quais provas ela entra
  materia: 'Língua Portuguesa',
  topico: 'pt-interpretacao',           // liga a questão ao módulo de conteúdo
  banca: 'Estilo CEBRASPE',
  tipo: 'ce',                           // 'ce' = Certo/Errado | 'me' = múltipla escolha (5 opções)
  dificuldade: 'media',
  enunciado: '<p>...</p>',
  alternativas: ['Certo','Errado'],
  gabarito: 0,                          // índice da alternativa correta (começa em 0)
  explicacao: 'CERTO. ...'
}
```

Para ligar uma questão a um módulo, use o mesmo valor de `topico` que está na lista `topicos`
do módulo correspondente.

### Redação

Para criar um tema novo, copie um bloco de `redacoes.js` e troque `titulo`, `motivador`, `comando`,
`aspectos` (os pontos de abordagem obrigatória) e `espera` (o que a banca quer ver, exibido só depois
que a pessoa escreve). O prompt de correção é montado pelo app a partir desses campos — não precisa
escrever prompt nenhum à mão.

## Estrutura dos arquivos

```
index.html              página única do app
styles.css              estilo (tema claro e escuro)
app.js                  navegação, motor de questões, simulados e progresso
manifest.webmanifest    permite instalar como app no celular
sw.js                   cache para funcionar offline
icons/icon.svg          ícone
dados/                  conteúdo, questões, simulados e temas de redação
Abrir Aprova.bat        atalho para abrir no Windows
```
