/* Banco de questões — matérias comuns aos três concursos.
   tipo: 'ce' = Certo/Errado (estilo CEBRASPE) | 'me' = múltipla escolha (estilo CESGRANRIO/FGV) */
CONC.addQuestoes([

/* ---------------- INTERPRETAÇÃO DE TEXTO ---------------- */
{
  id: 'C-PT-001', editais: ['inss','bb','prf'], materia: 'Língua Portuguesa', topico: 'pt-interpretacao',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'media',
  enunciado: '<div class="texto-apoio">"A digitalização dos serviços públicos reduziu filas e encurtou prazos. Ainda assim, parte da população continua sem acesso adequado à internet, o que pode transformar a modernização em nova forma de exclusão."</div><p>Julgue o item: depreende-se do texto que a digitalização dos serviços públicos é prejudicial à população.</p>',
  alternativas: ['Certo','Errado'], gabarito: 1,
  explicacao: 'ERRADO. O texto reconhece benefícios ("reduziu filas e encurtou prazos") e faz uma ressalva sobre quem não tem acesso à internet. Dizer que a digitalização "é prejudicial" é uma generalização que o texto não autoriza. Cuidado com alternativas que transformam ressalva em condenação.'
},
{
  id: 'C-PT-002', editais: ['inss','bb','prf'], materia: 'Língua Portuguesa', topico: 'pt-interpretacao',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'media',
  enunciado: '<div class="texto-apoio">"A digitalização dos serviços públicos reduziu filas e encurtou prazos. Ainda assim, parte da população continua sem acesso adequado à internet, o que pode transformar a modernização em nova forma de exclusão."</div><p>Julgue o item: a expressão "Ainda assim" introduz uma ideia de contraste em relação ao que foi afirmado antes.</p>',
  alternativas: ['Certo','Errado'], gabarito: 0,
  explicacao: 'CERTO. "Ainda assim" equivale a "mesmo assim", "apesar disso": é um conectivo adversativo/concessivo que opõe a ressalva ao benefício apresentado na primeira frase.'
},
{
  id: 'C-PT-003', editais: ['inss','bb','prf'], materia: 'Língua Portuguesa', topico: 'pt-interpretacao',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<div class="texto-apoio">"Não basta oferecer o crédito: é preciso garantir que o cliente entenda o que está contratando. A informação clara é, antes de tudo, uma forma de respeito."</div><p>A ideia central do texto é que</p>',
  alternativas: [
    'o crédito deve ser oferecido apenas a clientes bem informados.',
    'a clareza na informação ao cliente é uma exigência ética, e não apenas comercial.',
    'a oferta de crédito é desnecessária quando o cliente não compreende o contrato.',
    'o respeito ao cliente depende da quantidade de crédito oferecida.',
    'a informação clara substitui a necessidade de contrato escrito.'
  ], gabarito: 1,
  explicacao: 'Letra B. O texto afirma que informar com clareza é "uma forma de respeito", ou seja, desloca a questão do plano comercial para o ético. As demais alternativas extrapolam ou distorcem: o texto não proíbe a oferta, não condiciona o respeito à quantidade de crédito e não dispensa contrato.'
},
{
  id: 'C-PT-004', editais: ['inss','bb','prf'], materia: 'Língua Portuguesa', topico: 'pt-interpretacao',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'facil',
  enunciado: '<p>Um texto que apresenta instruções passo a passo sobre como preencher um formulário, com verbos predominantemente no imperativo, pertence ao tipo textual</p>',
  alternativas: ['narrativo.','descritivo.','injuntivo (instrucional).','dissertativo-argumentativo.','expositivo-comparativo.'],
  gabarito: 2,
  explicacao: 'Letra C. O texto injuntivo (ou instrucional) orienta o leitor a executar uma ação, usando verbos no imperativo ou no infinitivo. Manuais, receitas e tutoriais são exemplos clássicos.'
},

/* ---------------- ORTOGRAFIA E CRASE ---------------- */
{
  id: 'C-PT-005', editais: ['inss','bb','prf'], materia: 'Língua Portuguesa', topico: 'pt-crase',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>Assinale a opção em que o sinal indicativo de crase foi empregado CORRETAMENTE.</p>',
  alternativas: [
    'O servidor começou à trabalhar mais cedo.',
    'Entregou o documento à ela ontem.',
    'O atendimento ocorre das 8h às 17h.',
    'Vamos à pé até a agência.',
    'Refiro-me à todos os candidatos.'
  ], gabarito: 2,
  explicacao: 'Letra C. Em horas determinadas, a crase é obrigatória ("às 17h"). Nas demais: não há crase antes de verbo ("a trabalhar"), antes de pronome pessoal ("a ela"), antes de palavra masculina ("a pé") nem antes de pronome indefinido "todos".'
},
{
  id: 'C-PT-006', editais: ['inss','bb','prf'], materia: 'Língua Portuguesa', topico: 'pt-crase',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'media',
  enunciado: '<p>Julgue o item: na frase "O documento foi encaminhado à Diretoria de Benefícios", o uso do sinal indicativo de crase é obrigatório.</p>',
  alternativas: ['Certo','Errado'], gabarito: 0,
  explicacao: 'CERTO. O verbo encaminhar exige a preposição "a" ("encaminhar algo a alguém") e "Diretoria" é palavra feminina que admite artigo. Teste: "foi encaminhado ao Departamento" — apareceu "ao", logo há crase.'
},
{
  id: 'C-PT-007', editais: ['inss','bb','prf'], materia: 'Língua Portuguesa', topico: 'pt-ortografia',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>Assinale a opção em que todas as palavras estão grafadas corretamente.</p>',
  alternativas: [
    'previlégio, beneficiente, ansiedade',
    'privilégio, beneficente, ansiedade',
    'privilégio, beneficiente, anciedade',
    'previlégio, beneficente, anciedade',
    'privelégio, beneficente, ansiedade'
  ], gabarito: 1,
  explicacao: 'Letra B. As formas corretas são privilégio (com i), beneficente (sem o "i" depois do "c") e ansiedade (com s).'
},
{
  id: 'C-PT-008', editais: ['inss','bb','prf'], materia: 'Língua Portuguesa', topico: 'pt-ortografia',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'facil',
  enunciado: '<p>Julgue o item: em "Faz cinco anos que ele trabalha aqui", o verbo fazer poderia ser corretamente flexionado no plural, já que se refere a "cinco anos".</p>',
  alternativas: ['Certo','Errado'], gabarito: 1,
  explicacao: 'ERRADO. O verbo fazer indicando tempo decorrido é impessoal: não tem sujeito e fica sempre na 3ª pessoa do singular. "Fazem cinco anos" é erro clássico de concordância.'
},
{
  id: 'C-PT-009', editais: ['inss','bb','prf'], materia: 'Língua Portuguesa', topico: 'pt-ortografia',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>Assinale a opção que completa corretamente a frase: "Ele não explicou ___ faltou, mas todos sabem o ___ da ausência."</p>',
  alternativas: ['por que / porquê','porque / por que','por quê / porque','porquê / por que','por que / por quê'],
  gabarito: 0,
  explicacao: 'Letra A. "Por que" separado e sem acento equivale a "por qual razão" (pergunta indireta). "O porquê" é substantivo (vem precedido de artigo) e por isso leva acento.'
},

/* ---------------- MORFOLOGIA ---------------- */
{
  id: 'C-PT-010', editais: ['inss','bb','prf'], materia: 'Língua Portuguesa', topico: 'pt-morfologia',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'media',
  enunciado: '<p>Julgue o item: em "Os candidatos, cujos nomes foram publicados, devem comparecer", o termo "cujos" é pronome relativo e indica posse.</p>',
  alternativas: ['Certo','Errado'], gabarito: 0,
  explicacao: 'CERTO. "Cujo" é pronome relativo que estabelece relação de posse entre dois substantivos (os nomes dos candidatos) e concorda com o termo que vem depois dele. Lembre: "cujo" nunca é seguido de artigo.'
},
{
  id: 'C-PT-011', editais: ['inss','bb','prf'], materia: 'Língua Portuguesa', topico: 'pt-morfologia',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>Na frase "Embora estivesse cansado, continuou o atendimento", a palavra destacada "Embora" expressa ideia de</p>',
  alternativas: ['causa.','concessão.','conclusão.','finalidade.','proporção.'],
  gabarito: 1,
  explicacao: 'Letra B. "Embora", assim como "ainda que", "mesmo que" e "conquanto", introduz oração subordinada adverbial concessiva: admite um fato contrário ao da oração principal sem impedi-lo.'
},
{
  id: 'C-PT-012', editais: ['inss','bb','prf'], materia: 'Língua Portuguesa', topico: 'pt-morfologia',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'dificil',
  enunciado: '<p>Julgue o item: a transposição de "O servidor analisou os requerimentos" para a voz passiva resulta em "Os requerimentos foram analisados pelo servidor".</p>',
  alternativas: ['Certo','Errado'], gabarito: 0,
  explicacao: 'CERTO. O objeto direto ("os requerimentos") vira sujeito, o verbo passa para a locução "ser + particípio" no mesmo tempo (pretérito perfeito) e o sujeito antigo vira agente da passiva ("pelo servidor").'
},

/* ---------------- SINTAXE ---------------- */
{
  id: 'C-PT-013', editais: ['inss','bb','prf'], materia: 'Língua Portuguesa', topico: 'pt-sintaxe',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>Em "Havia muitos candidatos na sala", o termo "muitos candidatos" exerce a função sintática de</p>',
  alternativas: ['sujeito.','objeto direto.','predicativo do sujeito.','complemento nominal.','adjunto adverbial.'],
  gabarito: 1,
  explicacao: 'Letra B. O verbo "haver" no sentido de existir é impessoal: a oração não tem sujeito, e o termo que o acompanha é objeto direto. Por isso o verbo permanece no singular ("Havia", nunca "Haviam").'
},
{
  id: 'C-PT-014', editais: ['inss','bb','prf'], materia: 'Língua Portuguesa', topico: 'pt-sintaxe',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'dificil',
  enunciado: '<p>Julgue o item: as frases "Os servidores que participaram do curso receberão certificado" e "Os servidores, que participaram do curso, receberão certificado" têm o mesmo sentido.</p>',
  alternativas: ['Certo','Errado'], gabarito: 1,
  explicacao: 'ERRADO. Sem vírgulas, a oração adjetiva é restritiva: apenas os servidores que participaram receberão. Com vírgulas, é explicativa: todos os servidores participaram e todos receberão. A pontuação muda o sentido.'
},
{
  id: 'C-PT-015', editais: ['inss','bb','prf'], materia: 'Língua Portuguesa', topico: 'pt-sintaxe',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>Em "É necessário que todos compareçam", a oração destacada "que todos compareçam" classifica-se como subordinada substantiva</p>',
  alternativas: ['objetiva direta.','completiva nominal.','subjetiva.','apositiva.','predicativa.'],
  gabarito: 2,
  explicacao: 'Letra C. Troque a oração por "isso": "Isso é necessário". O termo funciona como sujeito do verbo ser, logo é subordinada substantiva subjetiva. A estrutura "É + adjetivo + que" é o padrão típico da subjetiva.'
},

/* ---------------- CONCORDÂNCIA E REGÊNCIA ---------------- */
{
  id: 'C-PT-016', editais: ['inss','bb','prf'], materia: 'Língua Portuguesa', topico: 'pt-concordancia',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>Assinale a opção em que a concordância está de acordo com a norma-padrão.</p>',
  alternativas: [
    'Fazem dois meses que aguardo a resposta.',
    'Houveram muitos problemas no atendimento.',
    'Aluga-se salas comerciais no centro.',
    'Mais de um candidato desistiu da vaga.',
    'Seguem anexo as certidões solicitadas.'
  ], gabarito: 3,
  explicacao: 'Letra D. A expressão "mais de um" exige verbo no singular. Nas demais: "Faz dois meses" (verbo impessoal), "Houve muitos problemas" (haver impessoal), "Alugam-se salas" (partícula apassivadora, sujeito no plural) e "Seguem anexas as certidões" (anexo concorda com o substantivo).'
},
{
  id: 'C-PT-017', editais: ['inss','bb','prf'], materia: 'Língua Portuguesa', topico: 'pt-regencia',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'media',
  enunciado: '<p>Julgue o item: na frase "Os servidores assistiram o filme institucional", a regência está de acordo com a norma-padrão.</p>',
  alternativas: ['Certo','Errado'], gabarito: 1,
  explicacao: 'ERRADO. No sentido de "ver", "presenciar", o verbo assistir é transitivo indireto e exige a preposição "a": "assistiram AO filme". Assistir como transitivo direto só no sentido de prestar assistência ("o médico assistiu o paciente").'
},
{
  id: 'C-PT-018', editais: ['inss','bb','prf'], materia: 'Língua Portuguesa', topico: 'pt-regencia',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>Assinale a opção correta quanto à regência verbal.</p>',
  alternativas: [
    'Prefiro trabalhar de manhã do que à tarde.',
    'O gerente visava o cargo de diretor.',
    'Todos obedeceram às normas do edital.',
    'Cheguei na agência às oito horas.',
    'A medida implicou em aumento de custos.'
  ], gabarito: 2,
  explicacao: 'Letra C. "Obedecer" é transitivo indireto: obedece-se A alguma coisa. Erros nas demais: "prefiro X a Y" (sem "do que"); "visar AO cargo" no sentido de almejar; "cheguei À agência"; "implicou aumento" (sem preposição, no sentido de acarretar).'
},
{
  id: 'C-PT-019', editais: ['inss','bb','prf'], materia: 'Língua Portuguesa', topico: 'pt-concordancia',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'media',
  enunciado: '<p>Julgue o item: em "Vendem-se casas nesta rua", o verbo está corretamente flexionado no plural porque "casas" é o sujeito da oração.</p>',
  alternativas: ['Certo','Errado'], gabarito: 0,
  explicacao: 'CERTO. O "se" é partícula apassivadora (voz passiva sintética): a frase equivale a "Casas são vendidas nesta rua". Como o sujeito ("casas") está no plural, o verbo vai para o plural.'
},

/* ---------------- PONTUAÇÃO E COESÃO ---------------- */
{
  id: 'C-PT-020', editais: ['inss','bb','prf'], materia: 'Língua Portuguesa', topico: 'pt-pontuacao',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>Assinale a opção em que a vírgula foi empregada INCORRETAMENTE.</p>',
  alternativas: [
    'Ontem, o atendimento foi suspenso.',
    'O gerente, que chegou cedo, abriu a agência.',
    'Os servidores do setor de benefícios, analisaram os pedidos.',
    'Senhores, a reunião começará agora.',
    'Ele estudou muito; portanto, passou.'
  ], gabarito: 2,
  explicacao: 'Letra C. Não se separa o sujeito ("Os servidores do setor de benefícios") do verbo ("analisaram") por vírgula. Nas demais opções há, respectivamente, adjunto adverbial deslocado, oração adjetiva explicativa, vocativo e conectivo conclusivo isolado.'
},
{
  id: 'C-PT-021', editais: ['inss','bb','prf'], materia: 'Língua Portuguesa', topico: 'pt-coesao',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'media',
  enunciado: '<p>Julgue o item: a substituição de "porém" por "portanto" em "O prazo era curto, porém o trabalho foi concluído" preserva o sentido original do período.</p>',
  alternativas: ['Certo','Errado'], gabarito: 1,
  explicacao: 'ERRADO. "Porém" indica oposição (o trabalho foi concluído apesar do prazo curto); "portanto" indica conclusão. A troca inverte a relação lógica e altera completamente o sentido.'
},
{
  id: 'C-PT-022', editais: ['inss','bb','prf'], materia: 'Língua Portuguesa', topico: 'pt-coesao',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'facil',
  enunciado: '<p>"O atendimento melhorou ___ a equipe foi ampliada." A conjunção que estabelece corretamente a relação de causa é</p>',
  alternativas: ['contudo','porque','embora','a fim de que','ou seja'],
  gabarito: 1,
  explicacao: 'Letra B. "Porque" introduz a causa da melhora. "Contudo" é adversativa, "embora" é concessiva, "a fim de que" é final e "ou seja" é explicativa/retificadora.'
},

/* ---------------- LÓGICA: PROPOSIÇÕES ---------------- */
{
  id: 'C-RL-001', editais: ['inss','bb','prf'], materia: 'Raciocínio Lógico e Matemática', topico: 'rl-proposicoes',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'facil',
  enunciado: '<p>Julgue o item: a proposição composta "Se chove, então a rua fica molhada" é falsa apenas quando chove e a rua não fica molhada.</p>',
  alternativas: ['Certo','Errado'], gabarito: 0,
  explicacao: 'CERTO. A condicional (p → q) só é falsa quando o antecedente é verdadeiro e o consequente é falso (V → F). Nos demais casos, é verdadeira.'
},
{
  id: 'C-RL-002', editais: ['inss','bb','prf'], materia: 'Raciocínio Lógico e Matemática', topico: 'rl-proposicoes',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'facil',
  enunciado: '<p>A tabela-verdade de uma proposição composta formada por 4 proposições simples distintas terá quantas linhas?</p>',
  alternativas: ['4','8','12','16','32'], gabarito: 3,
  explicacao: 'Letra D. O número de linhas é 2 elevado ao número de proposições simples: 2⁴ = 16.'
},
{
  id: 'C-RL-003', editais: ['inss','bb','prf'], materia: 'Raciocínio Lógico e Matemática', topico: 'rl-proposicoes',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>Sabendo que a proposição "João foi aprovado e Maria foi aprovada" é FALSA, é correto concluir que</p>',
  alternativas: [
    'João e Maria foram reprovados.',
    'pelo menos um dos dois não foi aprovado.',
    'João foi reprovado.',
    'Maria foi aprovada.',
    'nada se pode concluir.'
  ], gabarito: 1,
  explicacao: 'Letra B. Uma conjunção só é verdadeira quando as duas partes são verdadeiras. Se ela é falsa, pelo menos uma delas é falsa — mas não se sabe qual, e não é obrigatório que as duas sejam.'
},
{
  id: 'C-RL-004', editais: ['inss','bb','prf'], materia: 'Raciocínio Lógico e Matemática', topico: 'rl-proposicoes',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'media',
  enunciado: '<p>Julgue o item: a frase "Que horas são?" é uma proposição lógica.</p>',
  alternativas: ['Certo','Errado'], gabarito: 1,
  explicacao: 'ERRADO. Frases interrogativas, exclamativas, imperativas e as que não podem ser julgadas como verdadeiras ou falsas não são proposições lógicas.'
},

/* ---------------- LÓGICA: EQUIVALÊNCIAS ---------------- */
{
  id: 'C-RL-005', editais: ['inss','bb','prf'], materia: 'Raciocínio Lógico e Matemática', topico: 'rl-equivalencias',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>A negação da proposição "Se estudo, então passo" é</p>',
  alternativas: [
    'Se não estudo, então não passo.',
    'Estudo e não passo.',
    'Não estudo ou passo.',
    'Se passo, então estudo.',
    'Não estudo e não passo.'
  ], gabarito: 1,
  explicacao: 'Letra B. A negação de p → q é p ∧ ~q: mantém a primeira, nega a segunda e usa "e". A letra A é a inversa, a C é a equivalente (não a negação) e a D é a recíproca.'
},
{
  id: 'C-RL-006', editais: ['inss','bb','prf'], materia: 'Raciocínio Lógico e Matemática', topico: 'rl-equivalencias',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'media',
  enunciado: '<p>Julgue o item: a proposição "Se o candidato é aprovado, então ele estudou" é logicamente equivalente a "Se o candidato não estudou, então ele não é aprovado".</p>',
  alternativas: ['Certo','Errado'], gabarito: 0,
  explicacao: 'CERTO. Trata-se da contrapositiva: p → q ≡ ~q → ~p. Inverte-se a ordem e negam-se as duas partes, o que preserva o valor lógico.'
},
{
  id: 'C-RL-007', editais: ['inss','bb','prf'], materia: 'Raciocínio Lógico e Matemática', topico: 'rl-equivalencias',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>A negação de "Todos os servidores compareceram à reunião" é</p>',
  alternativas: [
    'Nenhum servidor compareceu à reunião.',
    'Todos os servidores faltaram à reunião.',
    'Pelo menos um servidor não compareceu à reunião.',
    'Alguns servidores compareceram à reunião.',
    'Poucos servidores compareceram à reunião.'
  ], gabarito: 2,
  explicacao: 'Letra C. A negação do quantificador universal "todo" é o existencial negativo: "existe pelo menos um que não". Dizer "nenhum compareceu" é mais forte do que a negação exige.'
},
{
  id: 'C-RL-008', editais: ['inss','bb','prf'], materia: 'Raciocínio Lógico e Matemática', topico: 'rl-equivalencias',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>Considere as premissas: (I) Se chove, o jogo é adiado. (II) O jogo não foi adiado. Conclui-se que</p>',
  alternativas: ['choveu.','não choveu.','o jogo foi cancelado.','nada se pode concluir.','choveu e o jogo ocorreu.'],
  gabarito: 1,
  explicacao: 'Letra B. É o Modus Tollens: de p → q e ~q, conclui-se ~p. Como o jogo não foi adiado, não choveu.'
},

/* ---------------- MATEMÁTICA: PORCENTAGEM ---------------- */
{
  id: 'C-MT-001', editais: ['inss','bb','prf'], materia: 'Raciocínio Lógico e Matemática', topico: 'mat-porcentagem',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>Um produto custava R$ 200,00 e sofreu um aumento de 20%. Em seguida, foi concedido um desconto de 20% sobre o novo preço. O preço final é</p>',
  alternativas: ['R$ 200,00','R$ 192,00','R$ 196,00','R$ 180,00','R$ 204,00'],
  gabarito: 1,
  explicacao: 'Letra B. Use fatores: 200 × 1,20 = 240; 240 × 0,80 = 192. Acréscimos e descontos sucessivos não se anulam: houve perda líquida de 4% (1,20 × 0,80 = 0,96).'
},
{
  id: 'C-MT-002', editais: ['inss','bb','prf'], materia: 'Raciocínio Lógico e Matemática', topico: 'mat-porcentagem',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'facil',
  enunciado: '<p>Em uma repartição com 250 servidores, 40% trabalham no atendimento ao público. Quantos servidores NÃO trabalham no atendimento?</p>',
  alternativas: ['100','120','150','160','180'], gabarito: 2,
  explicacao: 'Letra C. 40% de 250 = 100 trabalham no atendimento. Logo, 250 − 100 = 150 não trabalham. (Ou direto: 60% de 250 = 150.)'
},
{
  id: 'C-MT-003', editais: ['inss','bb','prf'], materia: 'Raciocínio Lógico e Matemática', topico: 'mat-porcentagem',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>Cinco atendentes processam 600 pedidos em 4 horas. Mantido o mesmo ritmo, quantos pedidos 8 atendentes processam em 3 horas?</p>',
  alternativas: ['640','680','720','760','800'], gabarito: 2,
  explicacao: 'Letra C. Regra de três composta: cada atendente processa 600 ÷ (5 × 4) = 30 pedidos por hora. Assim, 8 atendentes × 3 horas × 30 = 720 pedidos.'
},
{
  id: 'C-MT-004', editais: ['inss','bb','prf'], materia: 'Raciocínio Lógico e Matemática', topico: 'mat-porcentagem',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'media',
  enunciado: '<p>Julgue o item: se um valor sofre aumento de 25%, para retornar ao valor original é necessário aplicar um desconto de 25%.</p>',
  alternativas: ['Certo','Errado'], gabarito: 1,
  explicacao: 'ERRADO. Depois de multiplicar por 1,25, é preciso multiplicar por 0,80 para voltar ao original — ou seja, desconto de 20%. Com 25% de desconto, chegaria a 93,75% do valor inicial.'
},
{
  id: 'C-MT-005', editais: ['inss','bb','prf'], materia: 'Raciocínio Lógico e Matemática', topico: 'mat-porcentagem',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>Um valor de R$ 3.000,00 será dividido entre três pessoas na proporção 2 : 3 : 5. A maior parte corresponde a</p>',
  alternativas: ['R$ 600,00','R$ 900,00','R$ 1.200,00','R$ 1.500,00','R$ 1.800,00'],
  gabarito: 3,
  explicacao: 'Letra D. Soma das partes: 2 + 3 + 5 = 10. Valor de cada parte: 3.000 ÷ 10 = 300. A maior parte (5 partes) recebe 5 × 300 = R$ 1.500,00.'
},

/* ---------------- MATEMÁTICA: CONJUNTOS E CONTAGEM ---------------- */
{
  id: 'C-MT-006', editais: ['inss','bb','prf'], materia: 'Raciocínio Lógico e Matemática', topico: 'mat-conjuntos',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>Em um grupo de 100 pessoas, 60 falam inglês, 40 falam espanhol e 25 falam os dois idiomas. Quantas pessoas não falam nenhum dos dois?</p>',
  alternativas: ['15','20','25','30','35'], gabarito: 2,
  explicacao: 'Letra C. n(A ∪ B) = 60 + 40 − 25 = 75 pessoas falam pelo menos um idioma. Logo, 100 − 75 = 25 não falam nenhum.'
},
{
  id: 'C-MT-007', editais: ['inss','bb','prf'], materia: 'Raciocínio Lógico e Matemática', topico: 'mat-conjuntos',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>De quantas maneiras é possível formar uma comissão de 3 servidores escolhidos entre 6 candidatos?</p>',
  alternativas: ['18','20','60','120','216'], gabarito: 1,
  explicacao: 'Letra B. Comissão não considera ordem, então é combinação: C(6,3) = 6! / (3!·3!) = 20.'
},
{
  id: 'C-MT-008', editais: ['inss','bb','prf'], materia: 'Raciocínio Lógico e Matemática', topico: 'mat-conjuntos',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>Lançando-se dois dados honestos de seis faces, qual é a probabilidade de a soma dos resultados ser igual a 7?</p>',
  alternativas: ['1/12','1/9','1/6','5/36','7/36'], gabarito: 2,
  explicacao: 'Letra C. Há 36 resultados possíveis. Somam 7: (1,6), (2,5), (3,4), (4,3), (5,2) e (6,1) — seis casos. Portanto 6/36 = 1/6.'
},
{
  id: 'C-MT-009', editais: ['inss','bb','prf'], materia: 'Raciocínio Lógico e Matemática', topico: 'mat-conjuntos',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'media',
  enunciado: '<p>Julgue o item: ao lançar uma moeda honesta três vezes, a probabilidade de sair pelo menos uma cara é de 7/8.</p>',
  alternativas: ['Certo','Errado'], gabarito: 0,
  explicacao: 'CERTO. Use o complementar: a probabilidade de nenhuma cara (três coroas) é (1/2)³ = 1/8. Logo, pelo menos uma cara = 1 − 1/8 = 7/8.'
},

/* ---------------- INFORMÁTICA: SO ---------------- */
{
  id: 'C-IN-001', editais: ['inss','bb','prf'], materia: 'Informática', topico: 'inf-so',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'facil',
  enunciado: '<p>Julgue o item: a memória RAM é do tipo não volátil, pois mantém os dados armazenados mesmo após o desligamento do computador.</p>',
  alternativas: ['Certo','Errado'], gabarito: 1,
  explicacao: 'ERRADO. A RAM é volátil: perde todo o conteúdo quando o equipamento é desligado. Não voláteis são a ROM, o HD, o SSD e as mídias removíveis.'
},
{
  id: 'C-IN-002', editais: ['inss','bb','prf'], materia: 'Informática', topico: 'inf-so',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'facil',
  enunciado: '<p>No Windows, o atalho de teclado que bloqueia a sessão do usuário, exigindo senha para retornar, é</p>',
  alternativas: ['Win + D','Win + L','Ctrl + Alt + Del','Alt + F4','Win + E'],
  gabarito: 1,
  explicacao: 'Letra B. Win + L bloqueia a estação imediatamente — boa prática de segurança ao se ausentar. Win + D mostra a área de trabalho, Alt + F4 fecha a janela e Win + E abre o Explorador de Arquivos.'
},
{
  id: 'C-IN-003', editais: ['inss','bb','prf'], materia: 'Informática', topico: 'inf-so',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'media',
  enunciado: '<p>Julgue o item: no Windows, arquivos excluídos de um pen drive são enviados para a Lixeira e podem ser restaurados por lá.</p>',
  alternativas: ['Certo','Errado'], gabarito: 1,
  explicacao: 'ERRADO. A Lixeira do Windows, por padrão, só recebe arquivos excluídos de unidades internas. Exclusões em pen drives, cartões de memória e unidades de rede são definitivas.'
},

/* ---------------- INFORMÁTICA: OFFICE ---------------- */
{
  id: 'C-IN-004', editais: ['inss','bb','prf'], materia: 'Informática', topico: 'inf-office',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>No Excel, considerando que as células A1, A2, A3, A4 e A5 contenham, respectivamente, 10, 20, 30, 40 e 50, o resultado da fórmula <code>=SOMA(A1:A3)+SOMA(A4;A5)</code> é</p>',
  alternativas: ['60','90','100','150','#VALOR!'],
  gabarito: 3,
  explicacao: 'Letra D. SOMA(A1:A3) usa dois-pontos e soma o intervalo: 10+20+30 = 60. SOMA(A4;A5) usa ponto e vírgula e soma apenas essas duas células: 40+50 = 90. Total: 150.'
},
{
  id: 'C-IN-005', editais: ['inss','bb','prf'], materia: 'Informática', topico: 'inf-office',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>No Excel, ao copiar a fórmula <code>=B2*$C$1</code> da célula D2 para a célula D3, a fórmula resultante em D3 será</p>',
  alternativas: ['=B2*$C$1','=B3*$C$1','=B3*$C$2','=B2*$C$2','=B3*C2'],
  gabarito: 1,
  explicacao: 'Letra B. A referência relativa B2 acompanha o deslocamento de uma linha e vira B3. A referência absoluta $C$1 está travada por cifrões em coluna e linha, permanecendo igual.'
},
{
  id: 'C-IN-006', editais: ['inss','bb','prf'], materia: 'Informática', topico: 'inf-office',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'media',
  enunciado: '<p>Julgue o item: no Excel, a função CONT.VALORES conta apenas as células que contenham valores numéricos em um intervalo.</p>',
  alternativas: ['Certo','Errado'], gabarito: 1,
  explicacao: 'ERRADO. CONT.VALORES conta todas as células não vazias, inclusive textos e datas. Quem conta apenas números é a função CONT.NÚM.'
},
{
  id: 'C-IN-007', editais: ['inss','bb','prf'], materia: 'Informática', topico: 'inf-office',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'facil',
  enunciado: '<p>No Excel, a fórmula <code>=SE(A1&gt;=7;"Aprovado";"Reprovado")</code>, com o valor 7 na célula A1, retorna</p>',
  alternativas: ['Reprovado','Aprovado','#VALOR!','VERDADEIRO','7'],
  gabarito: 1,
  explicacao: 'Letra B. O operador ">=" inclui o próprio 7, logo o teste é verdadeiro e a função devolve o segundo argumento: "Aprovado".'
},

/* ---------------- INFORMÁTICA: INTERNET ---------------- */
{
  id: 'C-IN-008', editais: ['inss','bb','prf'], materia: 'Informática', topico: 'inf-internet',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'media',
  enunciado: '<p>Julgue o item: a navegação anônima impede que o provedor de acesso e o administrador da rede corporativa identifiquem os sites visitados pelo usuário.</p>',
  alternativas: ['Certo','Errado'], gabarito: 1,
  explicacao: 'ERRADO. A navegação anônima apenas evita o registro local de histórico, cookies e dados de formulário no dispositivo. O provedor, o empregador e os próprios sites continuam podendo identificar os acessos.'
},
{
  id: 'C-IN-009', editais: ['inss','bb','prf'], materia: 'Informática', topico: 'inf-internet',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'facil',
  enunciado: '<p>O protocolo responsável por traduzir nomes de domínio (como www.gov.br) em endereços IP é o</p>',
  alternativas: ['DHCP','DNS','SMTP','FTP','HTTP'],
  gabarito: 1,
  explicacao: 'Letra B. O DNS (Domain Name System) faz a resolução de nomes para endereços IP. O DHCP distribui endereços IP automaticamente na rede; SMTP envia e-mails; FTP transfere arquivos.'
},
{
  id: 'C-IN-010', editais: ['inss','bb','prf'], materia: 'Informática', topico: 'inf-internet',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>Ao enviar um e-mail com vários destinatários em Cco (cópia oculta), ocorre que</p>',
  alternativas: [
    'todos os destinatários veem os endereços uns dos outros.',
    'os destinatários em Cco não recebem a mensagem.',
    'os destinatários não conseguem ver quem mais está em Cco.',
    'apenas o primeiro destinatário recebe a mensagem.',
    'a mensagem é enviada sem assunto.'
  ], gabarito: 2,
  explicacao: 'Letra C. O campo Cco preserva a privacidade: cada destinatário em cópia oculta recebe a mensagem, mas não enxerga os demais endereços em Cco.'
},
{
  id: 'C-IN-011', editais: ['inss','bb','prf'], materia: 'Informática', topico: 'inf-internet',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'media',
  enunciado: '<p>Julgue o item: intranet é uma rede privada, restrita a uma organização, que utiliza as mesmas tecnologias da internet.</p>',
  alternativas: ['Certo','Errado'], gabarito: 0,
  explicacao: 'CERTO. A intranet usa protocolos e serviços da internet (TCP/IP, navegador, e-mail), porém com acesso restrito ao ambiente interno. Quando parte dela é aberta a parceiros externos autenticados, chama-se extranet.'
},

/* ---------------- INFORMÁTICA: SEGURANÇA ---------------- */
{
  id: 'C-IN-012', editais: ['inss','bb','prf'], materia: 'Informática', topico: 'inf-seguranca',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>O tipo de malware que criptografa os arquivos da vítima e exige pagamento para liberar o acesso é o</p>',
  alternativas: ['worm','spyware','ransomware','rootkit','adware'],
  gabarito: 2,
  explicacao: 'Letra C. Ransomware sequestra os dados por criptografia e exige resgate. Worm se propaga sozinho, spyware espiona, rootkit oculta a invasão e adware exibe publicidade.'
},
{
  id: 'C-IN-013', editais: ['inss','bb','prf'], materia: 'Informática', topico: 'inf-seguranca',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'media',
  enunciado: '<p>Julgue o item: o firewall é capaz de detectar e remover vírus já instalados no computador.</p>',
  alternativas: ['Certo','Errado'], gabarito: 1,
  explicacao: 'ERRADO. O firewall filtra o tráfego de entrada e saída conforme regras, funcionando como barreira de rede. Detectar e remover códigos maliciosos já presentes na máquina é função do antivírus.'
},
{
  id: 'C-IN-014', editais: ['inss','bb','prf'], materia: 'Informática', topico: 'inf-seguranca',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>Na assinatura digital de um documento eletrônico, o remetente utiliza</p>',
  alternativas: [
    'a chave pública do destinatário.',
    'a chave privada do destinatário.',
    'a própria chave pública.',
    'a própria chave privada.',
    'uma chave simétrica compartilhada previamente.'
  ], gabarito: 3,
  explicacao: 'Letra D. Quem assina usa a própria chave privada; qualquer pessoa verifica com a chave pública do signatário. Isso garante autenticidade, integridade e não repúdio. Para garantir sigilo, é que se usaria a chave pública do destinatário.'
},
{
  id: 'C-IN-015', editais: ['inss','bb','prf'], materia: 'Informática', topico: 'inf-seguranca',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>O backup que copia apenas os arquivos alterados desde o último backup de qualquer tipo, sendo o mais rápido de gravar e o mais demorado de restaurar, é o</p>',
  alternativas: ['completo','diferencial','incremental','espelhado','em nuvem'],
  gabarito: 2,
  explicacao: 'Letra C. O incremental copia só o que mudou desde o último backup (completo ou incremental). A restauração exige o último completo mais todos os incrementais na sequência, o que a torna mais lenta.'
},
{
  id: 'C-IN-016', editais: ['inss','bb','prf'], materia: 'Informática', topico: 'inf-seguranca',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'facil',
  enunciado: '<p>Julgue o item: phishing é uma técnica de fraude que busca enganar o usuário para que ele forneça dados pessoais ou credenciais, geralmente por meio de mensagens que imitam instituições legítimas.</p>',
  alternativas: ['Certo','Errado'], gabarito: 0,
  explicacao: 'CERTO. Phishing é uma modalidade de engenharia social: a isca (e-mail, SMS, link falso) explora a confiança do usuário. A defesa principal é a desconfiança, não apenas a tecnologia.'
},

/* ---------------- ATUALIDADES E ÉTICA ---------------- */
{
  id: 'C-AT-001', editais: ['inss','bb','prf'], materia: 'Atualidades e Ética', topico: 'atu-geral',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'facil',
  enunciado: '<p>Os princípios expressos da Administração Pública previstos no art. 37 da Constituição Federal são</p>',
  alternativas: [
    'legalidade, impessoalidade, moralidade, publicidade e eficiência.',
    'legalidade, isonomia, motivação, publicidade e economicidade.',
    'legalidade, impessoalidade, moralidade, proporcionalidade e eficácia.',
    'liberdade, igualdade, moralidade, publicidade e eficiência.',
    'legalidade, impessoalidade, motivação, publicidade e eficiência.'
  ], gabarito: 0,
  explicacao: 'Letra A. É o famoso LIMPE. Razoabilidade, proporcionalidade, motivação e autotutela são princípios reconhecidos, mas implícitos no texto do art. 37.'
},
{
  id: 'C-AT-002', editais: ['inss','bb','prf'], materia: 'Atualidades e Ética', topico: 'atu-geral',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'media',
  enunciado: '<p>Julgue o item: segundo o Código de Ética Profissional do Servidor Público Civil Federal, a demora injustificada na prestação do serviço é considerada forma de dano moral ao usuário.</p>',
  alternativas: ['Certo','Errado'], gabarito: 0,
  explicacao: 'CERTO. O Decreto 1.171/1994 afirma que toda pessoa tem direito à verdade e que a demora e a ausência injustificadas causam dano moral ao usuário do serviço público.'
},
{
  id: 'C-AT-003', editais: ['inss','bb','prf'], materia: 'Atualidades e Ética', topico: 'atu-geral',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>A Comissão de Ética prevista no Decreto 1.171/1994 pode aplicar ao servidor a penalidade de</p>',
  alternativas: ['suspensão de até 90 dias.','demissão.','censura.','multa.','advertência verbal e suspensão.'],
  gabarito: 2,
  explicacao: 'Letra C. A pena aplicável pela Comissão de Ética é apenas a censura. Advertência, suspensão e demissão são penalidades disciplinares da Lei 8.112/1990, aplicadas em processo próprio.'
},
{
  id: 'C-AT-004', editais: ['inss','bb','prf'], materia: 'Atualidades e Ética', topico: 'atu-geral',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>A sigla ESG, muito usada em relatórios de empresas e instituições financeiras, refere-se a critérios</p>',
  alternativas: [
    'econômicos, sociais e governamentais.',
    'ambientais, sociais e de governança.',
    'estruturais, sustentáveis e globais.',
    'estratégicos, sociais e gerenciais.',
    'energéticos, sociais e de gestão.'
  ], gabarito: 1,
  explicacao: 'Letra B. ESG vem de Environmental, Social and Governance: critérios ambientais, sociais e de governança usados para avaliar o impacto e a sustentabilidade das organizações.'
}

]);
