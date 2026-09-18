/* Trilha: matérias em comum aos três concursos (INSS, Banco do Brasil e PRF) */
CONC.addTrilha({
  id: 'comum',
  nome: 'Matérias em comum',
  subtitulo: 'Cai nas três provas',
  descricao: 'Português, raciocínio lógico/matemática, informática e atualidades aparecem no edital do INSS, do Banco do Brasil e da PRF. É aqui que se ganha mais pontos por hora estudada: uma aula serve para as três provas.',
  dica: 'Comece por aqui. Só depois vá para a parte específica do seu concurso.',
  modulos: [

  /* ================= LÍNGUA PORTUGUESA ================= */
  {
    id: 'com-pt-1',
    materia: 'Língua Portuguesa',
    titulo: 'Interpretação e compreensão de textos',
    minutos: 50,
    editais: ['INSS', 'BB', 'PRF'],
    topicos: ['pt-interpretacao'],
    resumo: `
      <p>É o assunto que mais cai nas três provas. A banca não quer saber sua opinião: ela quer saber
      o que o texto <strong>diz</strong> e o que é possível <strong>concluir</strong> dele.</p>
      <p><strong>Compreensão</strong> é o que está escrito, na superfície ("o autor afirma que...").
      <strong>Interpretação</strong> é a conclusão que o texto autoriza ("infere-se que...", "depreende-se que...").
      Tudo que extrapola o texto está errado, mesmo que seja verdade no mundo real.</p>
      <p><strong>Método que funciona na prova:</strong></p>
      <ol>
        <li>Leia primeiro o <em>comando</em> da questão (o que estão pedindo), depois o texto.</li>
        <li>Marque no texto: tese do autor, palavras de oposição (<em>mas, porém, entretanto, contudo</em>),
        de causa (<em>porque, pois, já que</em>) e de conclusão (<em>portanto, logo, assim</em>).</li>
        <li>Volte ao texto para confirmar cada alternativa. Nenhuma resposta se defende "de cabeça".</li>
        <li>Desconfie de alternativas com palavras absolutas: <em>sempre, nunca, todos, exclusivamente, apenas</em>.</li>
      </ol>
      <p><strong>Tipos textuais</strong> que a banca cobra: narração (fatos em sequência, personagens),
      descrição (características, muitos adjetivos), dissertação/argumentação (tese + argumentos),
      injunção (instruções, verbos no imperativo) e exposição (explica um assunto).</p>
      <p><strong>Funções da linguagem</strong> mais cobradas: referencial (informar, 3ª pessoa, jornalístico),
      apelativa/conativa (convencer o leitor, imperativo, propaganda), emotiva (1ª pessoa, sentimentos),
      metalinguística (a linguagem falando dela mesma, dicionário), fática (testar o canal: "alô?", "entende?")
      e poética (a forma da mensagem importa).</p>`,
    chaves: [
      'Inferir = conclusão obrigatória a partir do texto. Não é "achar" nem "poder ser".',
      'Se a alternativa traz informação nova, que não está no texto, está errada.',
      'Paráfrase = mesmo sentido com outras palavras (pode estar certa). Alteração de sentido = errada.',
      'Nas provas CEBRASPE (INSS e PRF) o item "Certo/Errado" geralmente erra por exagero, inversão de causa/efeito ou troca de sujeito.',
      'A opinião do autor não é a opinião de uma pessoa citada no texto — cuidado com essa troca.'
    ],
    pegadinhas: [
      'Trocar "possibilidade" por "certeza": o texto diz "pode reduzir", a alternativa diz "reduz".',
      'Inverter causa e consequência.',
      'Generalizar: o texto fala de um grupo, a alternativa fala de todos.',
      'Somar informação verdadeira, mas que não está no texto.'
    ],
    videos: [
      { titulo: 'Acerte as questões de interpretação de texto com estes 4 passos', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=z0PX0-KjI6U' },
      { titulo: 'Interpretação de texto para iniciantes — AlfaCon', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=k_tiQ6C__Yc' },
      { titulo: 'Curso grátis de interpretação de textos (playlist)', canal: 'Aula no YouTube', url: 'https://www.youtube.com/playlist?list=PL-4cMc9KcAt5HuK2LF1jrxBZXl6Jpeqa8' },
      { titulo: 'Interpretação de texto para concursos — aula completa', canal: 'Gran Cursos Online', busca: 'interpretacao de texto para concursos aula completa gran cursos' },
      { titulo: 'Como interpretar texto em prova CEBRASPE (Certo/Errado)', canal: 'Estratégia Concursos', busca: 'interpretacao de texto cebraspe certo errado estrategia concursos' }
    ]
  },

  {
    id: 'com-pt-2',
    materia: 'Língua Portuguesa',
    titulo: 'Ortografia, acentuação e crase',
    minutos: 45,
    editais: ['INSS', 'BB', 'PRF'],
    topicos: ['pt-ortografia', 'pt-crase'],
    resumo: `
      <p><strong>Acentuação (regras que caem):</strong></p>
      <ul>
        <li><strong>Oxítonas</strong> (última sílaba forte): acentuam-se as terminadas em
        A(s), E(s), O(s), EM/ENS → <em>sofá, café, cipó, também, parabéns</em>.</li>
        <li><strong>Paroxítonas</strong> (penúltima forte): acentuam-se as que NÃO terminam em
        A(s), E(s), O(s), EM/ENS → <em>tórax, hífen, fácil, álbum, órfã, jóquei</em>.</li>
        <li><strong>Proparoxítonas</strong> (antepenúltima forte): <strong>todas</strong> acentuadas →
        <em>médico, número, lâmpada</em>.</li>
        <li><strong>Hiato</strong>: I e U sozinhos (ou com S) na sílaba seguinte à vogal →
        <em>saída, baú, país</em>. Mas não se acentua depois de ditongo em paroxítona: <em>feiura, baiuca</em>.</li>
        <li>Reforma ortográfica: caiu o acento de <em>ideia, jiboia, heroico</em> (ditongos abertos EI/OI em
        paroxítona), de <em>feiura</em>, e o trema (<em>linguiça</em>). Continua o acento diferencial em
        <em>pôde</em> (passado) × <em>pode</em>, e <em>pôr</em> (verbo) × <em>por</em> (preposição).</li>
      </ul>
      <p><strong>Crase</strong> = fusão da preposição <em>a</em> + artigo <em>a</em> (à). Teste rápido:
      troque a palavra feminina por uma masculina. Se aparecer <strong>ao</strong>, tem crase.
      <em>Refiro-me à prova → refiro-me ao teste</em> (tem crase).</p>
      <ul>
        <li><strong>Nunca</strong> há crase antes de: palavra masculina, verbo, pronome pessoal,
        a maioria dos pronomes (<em>esta, essa, você, ela</em>), palavra no plural com "a" singular
        (<em>a pessoas</em>), e nas expressões <em>a partir de</em>, <em>a distância</em> (sem especificar).</li>
        <li><strong>Sempre</strong> há crase em: <em>à moda de</em>, <em>à medida que</em>, <em>às vezes</em>,
        <em>à noite</em>, <em>à tarde</em>, <em>à vista</em>, <em>à direita/esquerda</em>, e em horas definidas
        (<em>às 14h</em>).</li>
        <li><strong>Facultativa</strong>: antes de nome próprio feminino (<em>a/à Maria</em>),
        depois de <em>até</em> e com pronome possessivo (<em>a/à minha mãe</em>).</li>
      </ul>
      <p><strong>Ortografia campeã de prova:</strong> mas (oposição) × mais (quantidade);
      mal (advérbio, oposto de bem) × mau (adjetivo, oposto de bom); a fim de (finalidade) × afim (semelhante);
      onde (lugar) × aonde (lugar + movimento); há (tempo passado / existir) × a (tempo futuro / distância);
      porque / por que / porquê / por quê; senão × se não.</p>`,
    chaves: [
      'Se cabe "ao" na versão masculina, cabe "à" na feminina.',
      'Antes de verbo e de palavra masculina não existe crase (exceto "à moda de").',
      'Todas as proparoxítonas são acentuadas — sem exceção.',
      '"Há 3 anos" = passado. "Daqui a 3 anos" = futuro.',
      '"Por que" separado em pergunta e quando equivale a "pelo qual"; "porquê" com acento é substantivo (o porquê).'
    ],
    pegadinhas: [
      '"Vou a Brasília" (sem crase) × "Vou à Brasília do Niemeyer" (com especificação, com crase). Macete: quem vai a e volta da → crase.',
      '"À distância de 10 metros" tem crase; "estudar a distância" (genérico) não tem.',
      'Paroxítona terminada em -ens não é acentuada (jovens), mas oxítona terminada em -ém é (também).'
    ],
    videos: [
      { titulo: 'Acentuação para concurso: oxítona, paroxítona, proparoxítona', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=nWQVPQmxWTk' },
      { titulo: 'Crase para quem não sabe nada — Profa. Pamba', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=J3dxXgiL1fY' },
      { titulo: 'Macetes de crase: resolva exercícios rapidamente', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=nNynswVIqao' },
      { titulo: 'Acentuação gráfica — todas as regras em uma aula', canal: 'Gran Cursos Online', busca: 'acentuacao grafica concurso todas as regras aula completa' },
      { titulo: 'Crase: aprenda de uma vez com macetes', canal: 'Professora Pamba / Português', busca: 'crase concurso macete aula completa exercicios' }
    ]
  },

  {
    id: 'com-pt-3',
    materia: 'Língua Portuguesa',
    titulo: 'Classes de palavras (morfologia)',
    minutos: 45,
    editais: ['INSS', 'BB', 'PRF'],
    topicos: ['pt-morfologia'],
    resumo: `
      <p>As dez classes: substantivo, artigo, adjetivo, numeral, pronome, verbo, advérbio,
      preposição, conjunção e interjeição. A banca quase nunca pergunta a definição: ela dá
      uma palavra no texto e pergunta a <strong>função</strong> dela ali.</p>
      <ul>
        <li><strong>Substantivo</strong>: nomeia. Vem acompanhado de artigo/adjetivo. Palavra que
        aceita "o/a" na frente costuma ser substantivo (<em>o jantar</em> = substantivo; <em>vou jantar</em> = verbo).</li>
        <li><strong>Adjetivo</strong>: caracteriza o substantivo. Pode virar <em>locução adjetiva</em>
        (<em>de ouro</em> = áureo).</li>
        <li><strong>Pronome</strong>: os que mais caem são os <em>relativos</em> (que, qual, cujo, onde,
        quem) e os <em>oblíquos</em> (me, te, se, lhe, o, a). <em>Cujo</em> = posse e nunca vem com artigo
        depois (<em>o autor cujo livro li</em>).</li>
        <li><strong>Verbo</strong>: tempo, modo, pessoa e voz. Cuidado com os verbos que a banca adora:
        ter/vir/haver/pôr/fazer e os defectivos (<em>reaver</em>, <em>precaver-se</em>).</li>
        <li><strong>Advérbio</strong>: modifica verbo, adjetivo ou outro advérbio. Indica tempo, modo,
        lugar, intensidade, negação, dúvida. Não varia.</li>
        <li><strong>Preposição</strong>: liga e cria relação de sentido (a, ante, após, até, com, contra,
        de, desde, em, entre, para, perante, por, sem, sob, sobre, trás).</li>
        <li><strong>Conjunção</strong>: liga orações. <em>Coordenativas</em>: aditiva (e), adversativa
        (mas, porém), alternativa (ou), conclusiva (logo, portanto), explicativa (pois, porque).
        <em>Subordinativas</em>: causal, condicional (se, caso), concessiva (embora, ainda que),
        temporal, final (a fim de que), consecutiva, comparativa, proporcional.</li>
      </ul>
      <p><strong>Vozes verbais</strong> (cai muito na CEBRASPE): ativa (<em>o servidor analisou o pedido</em>),
      passiva analítica (<em>o pedido foi analisado pelo servidor</em>), passiva sintética
      (<em>analisou-se o pedido</em>) e reflexiva. Transformar de ativa para passiva sem mudar o
      tempo verbal é uma cobrança clássica.</p>`,
    chaves: [
      'A classe da palavra depende do contexto, não da forma.',
      '"Que" pode ser pronome relativo, conjunção integrante, partícula expletiva ou advérbio de intensidade.',
      'Só verbo transitivo direto (ou direto e indireto) vira voz passiva.',
      'Embora / ainda que / conquanto / mesmo que = concessão (quebra de expectativa).',
      'Advérbio nunca concorda: "elas ficaram meio nervosas" (meio = advérbio, invariável).'
    ],
    pegadinhas: [
      '"Pois" antes do verbo é explicativa/causal; depois do verbo é conclusiva ("Erre, pois; não faz mal" × "Estudou, pois passou").',
      'Confundir pronome relativo "onde" (só para lugar físico) com "em que" (para qualquer situação).',
      '"Se" pode ser: conjunção condicional, integrante, pronome apassivador ou índice de indeterminação do sujeito.'
    ],
    videos: [
      { titulo: 'Morfologia: classes de palavras (para concurso)', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=ltrzPijgKi4' },
      { titulo: 'Gramática básica para concursos — classes de palavras', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=ANdT9_YQjr8' },
      { titulo: 'Português — morfologia, curso completo (playlist)', canal: 'Aula no YouTube', url: 'https://www.youtube.com/playlist?list=PLv2s1dlsadn-cWPht-0JsOy8JhmZS0zQ9' },
      { titulo: 'Classes gramaticais — aula completa para concursos', canal: 'Gran Cursos Online', busca: 'classes gramaticais aula completa concurso gran cursos' },
      { titulo: 'Pronomes relativos e o uso de CUJO', canal: 'Estratégia Concursos', busca: 'pronome relativo cujo concurso aula estrategia' }
    ]
  },

  {
    id: 'com-pt-4',
    materia: 'Língua Portuguesa',
    titulo: 'Sintaxe: termos da oração e período composto',
    minutos: 50,
    editais: ['INSS', 'BB', 'PRF'],
    topicos: ['pt-sintaxe'],
    resumo: `
      <p><strong>Termos essenciais:</strong> sujeito e predicado.
      Sujeito pode ser simples, composto, oculto/desinencial, indeterminado
      (<em>Precisa-se de vendedores</em>) ou a oração pode ser <strong>sem sujeito</strong>
      (verbos <em>haver</em> = existir, <em>fazer</em> e <em>ser</em> indicando tempo, fenômenos da natureza).</p>
      <p><strong>Termos integrantes:</strong> complemento verbal (objeto direto, sem preposição obrigatória;
      objeto indireto, com preposição), complemento nominal (completa substantivo abstrato, adjetivo ou
      advérbio) e agente da passiva.</p>
      <p><strong>Termos acessórios:</strong> adjunto adnominal (liga-se a substantivo; indica posse,
      qualidade), adjunto adverbial (circunstância) e aposto (explica: vem entre vírgulas).
      O <strong>vocativo</strong> é termo à parte (chamamento).</p>
      <p><strong>Complemento nominal × adjunto adnominal</strong> — diferença que mais cai:
      se a palavra <em>pratica</em> a ação, é adjunto adnominal (<em>a invasão dos manifestantes</em> —
      eles invadem); se <em>sofre</em> a ação, é complemento nominal (<em>a invasão da cidade</em> —
      a cidade é invadida).</p>
      <p><strong>Período composto por coordenação</strong>: orações independentes (sindéticas —
      com conjunção — e assindéticas).
      <strong>Por subordinação</strong>: substantivas (funcionam como sujeito, objeto, complemento nominal,
      predicativo ou aposto — trocáveis por "isso"), adjetivas (iniciadas por pronome relativo;
      <em>restritiva</em> sem vírgula, <em>explicativa</em> entre vírgulas) e adverbiais
      (nove tipos: causal, consecutiva, condicional, concessiva, comparativa, conformativa, final,
      proporcional, temporal).</p>
      <p><strong>Oração adjetiva restritiva × explicativa</strong> muda o sentido:
      "Os candidatos <em>que estudaram</em> passaram" (só alguns) ×
      "Os candidatos, <em>que estudaram</em>, passaram" (todos).</p>`,
    chaves: [
      'Troque a oração por "isso": se couber, é substantiva.',
      'Vírgula na adjetiva = explicativa = se aplica a todo o grupo.',
      'Verbo "haver" no sentido de existir é impessoal: fica sempre no singular ("Havia muitos candidatos").',
      'Predicativo do sujeito aparece com verbo de ligação (ser, estar, ficar, parecer, permanecer, continuar, tornar-se).',
      'Aposto explica e vem entre vírgulas; vocativo chama e também vem isolado por vírgula.'
    ],
    pegadinhas: [
      '"Fazem dez anos" está errado: verbo fazer indicando tempo é impessoal → "Faz dez anos".',
      '"Existem" concorda normalmente ("Existem problemas"), mas "haver" não ("Há problemas").',
      'Sujeito nunca vem preposicionado — "De todos os candidatos, poucos passaram": o sujeito é "poucos".'
    ],
    videos: [
      { titulo: 'Análise sintática para concurso: entenda a oração (do zero)', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=pp-QLuf0w3Y' },
      { titulo: 'Sintaxe da oração — conceitos mais cobrados (teoria + questões)', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=ZVfeDI6gPb0' },
      { titulo: 'Sintaxe — entenda de uma vez por todas', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=WZwRBcuf4hQ' },
      { titulo: 'Análise sintática do zero — termos da oração', canal: 'Gran Cursos Online', busca: 'analise sintatica termos da oracao concurso aula completa' },
      { titulo: 'Período composto por subordinação', canal: 'Estratégia Concursos', busca: 'periodo composto por subordinacao concurso aula completa' }
    ]
  },

  {
    id: 'com-pt-5',
    materia: 'Língua Portuguesa',
    titulo: 'Concordância, regência e colocação pronominal',
    minutos: 50,
    editais: ['INSS', 'BB', 'PRF'],
    topicos: ['pt-concordancia', 'pt-regencia'],
    resumo: `
      <p><strong>Concordância verbal</strong> — casos de prova:</p>
      <ul>
        <li>Sujeito composto antes do verbo → plural. Depois do verbo → plural ou concorda com o mais próximo.</li>
        <li><em>Um dos que</em> → verbo no plural (<em>Ele é um dos que mais trabalham</em>).</li>
        <li><em>Mais de um</em> → singular (<em>Mais de um candidato faltou</em>).</li>
        <li>Expressões partitivas (<em>a maioria de, grande parte de</em>) → singular ou plural.</li>
        <li>Verbo <em>ser</em> com pronome pessoal concorda com o pronome (<em>Eu sou o responsável</em>).</li>
        <li>Partícula apassivadora: verbo concorda com o sujeito (<em>Vendem-se casas</em>).
        Índice de indeterminação: verbo fica no singular (<em>Precisa-se de professores</em>).</li>
      </ul>
      <p><strong>Concordância nominal</strong>: <em>anexo, obrigado, mesmo, próprio, incluso</em> concordam;
      <em>menos</em> e <em>alerta</em> são invariáveis; <em>bastante</em> varia como adjetivo
      (<em>bastantes livros</em>) e não varia como advérbio (<em>estudaram bastante</em>);
      <em>é proibido entrada</em> (sem artigo) × <em>é proibida a entrada</em> (com artigo).</p>
      <p><strong>Regência verbal</strong> — os campeões:</p>
      <ul>
        <li><em>Assistir</em> = ver → exige "a" (<em>assistir ao filme</em>); = ajudar → direto (<em>assistir o doente</em>).</li>
        <li><em>Visar</em> = ter por objetivo → "a" (<em>visa ao cargo</em>); = mirar/dar visto → direto.</li>
        <li><em>Aspirar</em> = desejar → "a"; = cheirar/sugar → direto.</li>
        <li><em>Obedecer, desobedecer, responder, agradar (satisfazer)</em> → objeto indireto.</li>
        <li><em>Preferir</em> → "prefiro X a Y" (nunca "do que").</li>
        <li><em>Implicar</em> (= acarretar) → direto: <em>o atraso implica multa</em>.</li>
        <li><em>Chegar/ir</em> → preposição "a", não "em" (<em>cheguei à repartição</em>).</li>
      </ul>
      <p><strong>Colocação pronominal</strong>: próclise (antes) é obrigatória com palavra atrativa —
      negação, advérbio, pronome relativo/indefinido/demonstrativo, conjunção subordinativa e frases
      exclamativas/interrogativas. Ênclise (depois) é a regra no início de frase e com verbo no imperativo
      afirmativo. Mesóclise só com futuro do presente e futuro do pretérito sem palavra atrativa
      (<em>far-se-á</em>, <em>far-se-ia</em>). Nunca se inicia período com pronome oblíquo átono.</p>`,
    chaves: [
      'Palavra negativa, advérbio ou pronome relativo puxam o pronome para antes do verbo (próclise).',
      '"Prefiro isto a aquilo" — nunca "prefiro mais do que".',
      '"Namorar" é transitivo direto: namorar alguém (não "namorar com").',
      '"Fazem dois anos" e "houveram problemas" são erros clássicos — os dois verbos são impessoais no sentido de tempo/existência.',
      'Verbo + "se" com sujeito paciente no plural → verbo no plural: "Alugam-se salas".'
    ],
    pegadinhas: [
      '"A maioria dos servidores chegou/chegaram" — as duas formas são aceitas.',
      '"Obrigado" varia com quem fala: uma mulher diz "obrigada".',
      '"Seguem anexas as certidões" (anexo concorda).'
    ],
    videos: [
      { titulo: 'Concordância verbal e nominal — Professora Pamba', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=IjVd1jviQrA' },
      { titulo: 'Concordância verbal — teoria e questões para concurso', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=jdqhnVUvqOc' },
      { titulo: 'Você ainda erra concordância? Veja isto antes da prova', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=C8JPK8vBfa0' },
      { titulo: 'Concordância verbal — todos os casos com questões', canal: 'Gran Cursos Online', busca: 'concordancia verbal concurso aula completa questoes' },
      { titulo: 'Regência verbal e nominal para concursos', canal: 'Estratégia Concursos', busca: 'regencia verbal e nominal concurso aula completa' }
    ]
  },

  {
    id: 'com-pt-6',
    materia: 'Língua Portuguesa',
    titulo: 'Pontuação, coesão, coerência e reescrita de frases',
    minutos: 45,
    editais: ['INSS', 'BB', 'PRF'],
    topicos: ['pt-pontuacao', 'pt-coesao'],
    resumo: `
      <p><strong>Vírgula — regra de ouro:</strong> não se separa sujeito do verbo, nem verbo do complemento.
      Usa-se vírgula para:</p>
      <ul>
        <li>separar elementos de uma enumeração;</li>
        <li>isolar aposto explicativo, vocativo e expressões explicativas (<em>isto é, ou seja, por exemplo</em>);</li>
        <li>isolar adjunto adverbial deslocado (obrigatório se for longo);</li>
        <li>isolar oração adjetiva explicativa;</li>
        <li>marcar termo deslocado ou intercalado;</li>
        <li>indicar a omissão de um verbo (vírgula por elipse).</li>
      </ul>
      <p><strong>Ponto e vírgula</strong>: separa itens de enumeração longa (comum em textos legais) e
      orações coordenadas extensas. <strong>Dois-pontos</strong>: anuncia explicação, enumeração ou citação.
      <strong>Travessão</strong>: pode substituir vírgulas ou parênteses para destacar.</p>
      <p><strong>Coesão</strong> é o "amarramento" do texto:
      <em>referencial</em> (pronomes e sinônimos retomando termos — anáfora retoma o que já apareceu,
      catáfora anuncia o que vem) e <em>sequencial</em> (conectivos ligando ideias).
      <strong>Coerência</strong> é o sentido lógico do conjunto: sem contradição, sem salto de raciocínio.</p>
      <p><strong>Reescrita</strong> (cobrança típica da CEBRASPE no INSS e na PRF): a banca reescreve um
      trecho e pergunta se foram mantidos <strong>a correção gramatical</strong> E <strong>o sentido original</strong>.
      Verifique nessa ordem: (1) mudou o sentido? (2) quebrou concordância/regência? (3) a pontuação
      continua válida? Basta uma falha para o item ficar errado.</p>`,
    chaves: [
      'Nunca separe sujeito e verbo por uma única vírgula.',
      'Conectivo trocado = sentido trocado: "mas" (oposição) não equivale a "portanto" (conclusão).',
      'Adjunto adverbial curto no início: vírgula é facultativa. Longo ou intercalado: obrigatória.',
      'Na reescrita, se o item mantém a gramática mas muda o sentido, está ERRADO.',
      'Voz passiva sintética ↔ analítica costuma manter sentido e correção (boa candidata a item CERTO).'
    ],
    pegadinhas: [
      '"Porém" e "no entanto" entre vírgulas — se a banca tirar as vírgulas, o item fica errado.',
      'Substituir "que" por "o qual" só funciona se a regência for respeitada.',
      'Trocar "à medida que" (proporção) por "na medida em que" (causa) muda o sentido.'
    ],
    videos: [
      { titulo: 'Pontuação — aulão completo para concurso público', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=G8Stjzy-87k' },
      { titulo: 'Uso da vírgula — regras mais cobradas em concurso', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=mwesr5YGr9o' },
      { titulo: 'Vírgula para concurso: aprenda em 1 vídeo + questões', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=huEo6imC5Xw' },
      { titulo: 'Pontuação para concursos — uso da vírgula', canal: 'Gran Cursos Online', busca: 'pontuacao virgula concurso aula completa cebraspe' },
      { titulo: 'Coesão e coerência textual', canal: 'Estratégia Concursos', busca: 'coesao e coerencia textual concurso aula completa' }
    ]
  },

  /* ================= RACIOCÍNIO LÓGICO E MATEMÁTICA ================= */
  {
    id: 'com-rl-1',
    materia: 'Raciocínio Lógico e Matemática',
    titulo: 'Proposições, conectivos e tabela-verdade',
    minutos: 50,
    editais: ['INSS', 'BB', 'PRF'],
    topicos: ['rl-proposicoes'],
    resumo: `
      <p><strong>Proposição</strong> é toda frase declarativa que pode ser julgada como verdadeira (V)
      ou falsa (F). Pergunta, ordem, exclamação e frase sem sujeito definido <em>não</em> são proposições.</p>
      <p><strong>Conectivos e quando cada um é verdadeiro:</strong></p>
      <ul>
        <li><strong>Negação</strong> (~p): inverte o valor.</li>
        <li><strong>Conjunção</strong> (p ∧ q, "e"): só é V quando <strong>as duas</strong> são V.</li>
        <li><strong>Disjunção</strong> (p ∨ q, "ou"): só é F quando <strong>as duas</strong> são F.</li>
        <li><strong>Disjunção exclusiva</strong> (ou... ou..., v): V quando os valores são <strong>diferentes</strong>.</li>
        <li><strong>Condicional</strong> (p → q, "se... então"): só é F quando V → F
        ("o único jeito de mentir é prometer e não cumprir").</li>
        <li><strong>Bicondicional</strong> (p ↔ q, "se e somente se"): V quando os valores são <strong>iguais</strong>.</li>
      </ul>
      <p><strong>Número de linhas da tabela-verdade</strong> = 2<sup>n</sup>, sendo n o número de
      proposições simples. Com 3 proposições → 8 linhas.</p>
      <p><strong>Classificação:</strong> <em>tautologia</em> (sempre V), <em>contradição</em> (sempre F)
      e <em>contingência</em> (depende).</p>
      <p><strong>Ordem de precedência</strong> quando não há parênteses:
      ~ , ∧ , ∨ , → , ↔.</p>
      <p><strong>Atalho de prova:</strong> na maioria das questões não é preciso montar a tabela inteira.
      Suponha que a proposição composta é falsa (ou verdadeira, conforme o enunciado) e vá "forçando"
      os valores das simples. Se der contradição, sua hipótese estava errada.</p>`,
    chaves: [
      'Condicional só é falsa em V → F. Guarde isso: resolve metade das questões.',
      'Tabela-verdade tem 2 elevado a n linhas.',
      '"Ou ... ou ..." (exclusivo) é diferente de "ou" simples.',
      'Bicondicional = iguais dão V.',
      'Frases interrogativas, imperativas e paradoxos não são proposições.'
    ],
    pegadinhas: [
      'Tratar "mas", "porém", "embora", "todavia" como diferentes de "e": para a lógica, todos são conjunção (∧).',
      '"A menos que" e "salvo se" equivalem a "se não": são condicionais disfarçadas.',
      '"p somente se q" é p → q (e não q → p).'
    ],
    videos: [
      { titulo: 'Tabela-verdade — aula completa para concursos', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=1A0JSFJOMAo' },
      { titulo: 'Entenda tabela-verdade de uma vez por todas (aula 1)', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=KsdFf1QGA0M' },
      { titulo: 'Raciocínio lógico — proposições e tabela-verdade', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=KXm8Hi-I_G0' },
      { titulo: 'Lógica proposicional do zero — conectivos', canal: 'Gran Cursos Online', busca: 'logica proposicional conectivos tabela verdade concurso aula completa' },
      { titulo: 'Tabela-verdade: como montar rápido', canal: 'Estratégia Concursos', busca: 'tabela verdade como montar rapido concurso' }
    ]
  },

  {
    id: 'com-rl-2',
    materia: 'Raciocínio Lógico e Matemática',
    titulo: 'Equivalências, negações e argumentação',
    minutos: 45,
    editais: ['INSS', 'BB', 'PRF'],
    topicos: ['rl-equivalencias'],
    resumo: `
      <p><strong>Equivalências que você precisa decorar:</strong></p>
      <ul>
        <li><strong>Contrapositiva</strong>: p → q ≡ ~q → ~p (inverte e nega).</li>
        <li>p → q ≡ ~p ∨ q ("nega a primeira, mantém a segunda, troca por OU").</li>
        <li><strong>De Morgan</strong>: ~(p ∧ q) ≡ ~p ∨ ~q ; ~(p ∨ q) ≡ ~p ∧ ~q.</li>
        <li><strong>Negação da condicional</strong>: ~(p → q) ≡ p ∧ ~q ("mantém a primeira, nega a segunda, com E").</li>
      </ul>
      <p><strong>Quantificadores:</strong> a negação de "todo A é B" é "algum A não é B"
      (e não "nenhum A é B"). A negação de "algum A é B" é "nenhum A é B".
      A negação de "nenhum" é "algum".</p>
      <p><strong>Argumento</strong> = conjunto de premissas + conclusão. É <strong>válido</strong> quando,
      sendo todas as premissas verdadeiras, a conclusão é obrigatoriamente verdadeira.
      Validade não tem nada a ver com o conteúdo ser verdadeiro no mundo real.</p>
      <p><strong>Como testar validade rápido:</strong> assuma todas as premissas verdadeiras e a conclusão
      falsa. Se chegar a uma contradição, o argumento é válido. Se conseguir manter tudo coerente,
      o argumento é inválido.</p>
      <p><strong>Regras clássicas:</strong> Modus Ponens (p→q, p ⊢ q); Modus Tollens (p→q, ~q ⊢ ~p);
      Silogismo Hipotético (p→q, q→r ⊢ p→r); Silogismo Disjuntivo (p∨q, ~p ⊢ q).</p>`,
    chaves: [
      'Contrapositiva: inverte a ordem E nega as duas partes.',
      'Negar "se... então" NÃO gera outra condicional: gera "e" (p ∧ ~q).',
      'Negação de "todo" é "algum não", nunca "nenhum".',
      'Argumento válido = impossível ter premissas V e conclusão F.',
      'Comece sempre pelas premissas que já têm valor definido (proposições simples).'
    ],
    pegadinhas: [
      'Confundir a recíproca (q → p) com a contrapositiva (~q → ~p): a recíproca NÃO é equivalente.',
      'Negar só uma parte da conjunção.',
      'Achar que argumento com conclusão absurda é inválido — pode ser válido mesmo assim.'
    ],
    videos: [
      { titulo: 'Equivalências lógicas e negação de proposição composta', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=TVjzslm2QO4' },
      { titulo: 'Negação e equivalência — lógica proposicional para concursos', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=R3DySXXznA8' },
      { titulo: 'Equivalências e negações lógicas: nunca mais erre', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=HJ3wiIsfIGM' },
      { titulo: 'Equivalências lógicas e negações', canal: 'Gran Cursos Online', busca: 'equivalencias logicas e negacoes concurso aula completa' },
      { titulo: 'Lei de De Morgan e negação de proposições', canal: 'Estratégia Concursos', busca: 'lei de de morgan negacao de proposicoes concurso' }
    ]
  },

  {
    id: 'com-mat-1',
    materia: 'Raciocínio Lógico e Matemática',
    titulo: 'Razão, proporção, regra de três e porcentagem',
    minutos: 45,
    editais: ['INSS', 'BB', 'PRF'],
    topicos: ['mat-porcentagem'],
    resumo: `
      <p><strong>Porcentagem</strong>: x% = x/100. Para calcular mentalmente, 10% é dividir por 10;
      1% é dividir por 100; 5% é metade de 10%.</p>
      <p><strong>Aumentos e descontos sucessivos</strong> — nunca se somam. Use fatores multiplicativos:</p>
      <ul>
        <li>Aumento de 20% → multiplicar por 1,20.</li>
        <li>Desconto de 20% → multiplicar por 0,80.</li>
        <li>Aumento de 20% seguido de desconto de 20% → 1,20 × 0,80 = 0,96 → perda de 4%.</li>
      </ul>
      <p><strong>Regra de três simples</strong>: monte as grandezas em colunas e verifique se são
      diretamente proporcionais (aumenta/aumenta) ou inversamente (aumenta/diminui).
      Se for inversa, inverta uma das razões antes de multiplicar cruzado.</p>
      <p><strong>Regra de três composta</strong>: compare cada grandeza com a grandeza da incógnita,
      uma de cada vez, mantendo as demais fixas.</p>
      <p><strong>Divisão proporcional</strong>: para dividir R$ 1.200 entre A e B na razão 2:3,
      some as partes (2+3=5), ache o valor da parte (1200/5 = 240) e multiplique
      (A = 480, B = 720). Na divisão inversamente proporcional, use os inversos (1/2 e 1/3).</p>
      <p><strong>Média</strong>: aritmética (soma ÷ quantidade), ponderada (soma dos valores × pesos,
      dividida pela soma dos pesos). A média ponderada é a que mais cai, porque é assim que se calcula
      nota final de concurso.</p>`,
    chaves: [
      'Descontos e acréscimos sucessivos: multiplique fatores, não some percentuais.',
      'Variação percentual = (valor final − valor inicial) ÷ valor inicial × 100.',
      'Aumentar 100% é dobrar; aumentar para o dobro é o mesmo que aumentar 100%.',
      'Para voltar de um aumento de 25%, o desconto necessário é de 20% (não 25%).',
      'Grandezas inversamente proporcionais: mais máquinas, menos tempo.'
    ],
    pegadinhas: [
      '"Sobre o valor já reajustado" muda toda a conta — leia a base de cálculo.',
      'Porcentagem de porcentagem: 50% de 20% = 10%, não 70%.',
      'Em questão de desconto em folha, o percentual costuma incidir sobre o salário bruto.'
    ],
    videos: [
      { titulo: 'Proporção, porcentagem e regra de três — do básico ao avançado', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=rkdI_7yvlI8' },
      { titulo: 'Regra de três simples e composta para concursos', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=n6MY9Iux8WE' },
      { titulo: 'Porcentagem: aprenda de uma vez por todas', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=c8XuGrJIIXQ' },
      { titulo: 'Porcentagem para concursos — aula completa', canal: 'Gran Cursos Online', busca: 'porcentagem para concursos aula completa exercicios' },
      { titulo: 'Regra de três simples e composta', canal: 'Estratégia Concursos', busca: 'regra de tres simples e composta concurso aula completa' }
    ]
  },

  {
    id: 'com-mat-2',
    materia: 'Raciocínio Lógico e Matemática',
    titulo: 'Conjuntos, combinatória e probabilidade',
    minutos: 45,
    editais: ['INSS', 'BB', 'PRF'],
    topicos: ['mat-conjuntos'],
    resumo: `
      <p><strong>Conjuntos</strong>: use diagramas. Para dois conjuntos,
      n(A ∪ B) = n(A) + n(B) − n(A ∩ B). Para três,
      n(A∪B∪C) = n(A)+n(B)+n(C) − n(A∩B) − n(A∩C) − n(B∩C) + n(A∩B∩C).
      Na prática, <strong>comece preenchendo o miolo</strong> (a interseção dos três) e vá de dentro para fora.</p>
      <p><strong>Princípio fundamental da contagem</strong>: se uma escolha tem m possibilidades e a
      seguinte tem n, o total é m × n.</p>
      <ul>
        <li><strong>Arranjo</strong> (a ordem importa): A(n,p) = n! / (n−p)!</li>
        <li><strong>Combinação</strong> (a ordem não importa): C(n,p) = n! / [p!(n−p)!]</li>
        <li><strong>Permutação</strong> simples: P(n) = n!. Com repetição, divide-se pelos fatoriais dos repetidos.</li>
      </ul>
      <p>Pergunta-chave: "trocar a ordem gera um resultado diferente?" Se sim, arranjo/permutação;
      se não (comissão, grupo, escolha de pessoas), combinação.</p>
      <p><strong>Probabilidade</strong> = casos favoráveis ÷ casos possíveis (de 0 a 1).</p>
      <ul>
        <li>União: P(A ∪ B) = P(A) + P(B) − P(A ∩ B).</li>
        <li>Eventos independentes: P(A ∩ B) = P(A) × P(B).</li>
        <li>Complementar: P(não A) = 1 − P(A) — ótimo atalho para "pelo menos um".</li>
        <li>Condicional: P(A|B) = P(A ∩ B) ÷ P(B).</li>
      </ul>`,
    chaves: [
      'Comissão/grupo/equipe = combinação. Senha/pódio/fila = arranjo ou permutação.',
      '"Pelo menos um" → calcule o complementar (1 − probabilidade de nenhum).',
      'Sem reposição muda o denominador da segunda retirada.',
      'Em diagramas de conjuntos, preencha sempre da interseção central para fora.',
      '0! = 1 e C(n,0) = 1.'
    ],
    pegadinhas: [
      '"Somente A" é diferente de "A" (que inclui as interseções).',
      'Probabilidade condicional restringe o universo ao evento que já ocorreu.',
      'Anagramas com letras repetidas: divida pelo fatorial das repetições.'
    ],
    videos: [
      { titulo: 'Conjuntos, porcentagem e regra de três composta (questões)', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=u2sFZvVIyt0' },
      { titulo: 'Melhores questões de análise combinatória e probabilidade', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=zho7JDMyByA' },
      { titulo: 'Análise combinatória e probabilidade para concursos (playlist)', canal: 'Aula no YouTube', url: 'https://www.youtube.com/playlist?list=PL60ZfbDS5WWMrQFk2Ngf2XhYbNTWnBoL6' },
      { titulo: 'Teoria dos conjuntos e diagramas de Venn', canal: 'Gran Cursos Online', busca: 'teoria dos conjuntos diagrama de venn concurso aula' },
      { titulo: 'Análise combinatória — arranjo, combinação e permutação', canal: 'Estratégia Concursos', busca: 'analise combinatoria arranjo combinacao permutacao concurso aula' }
    ]
  },

  /* ================= INFORMÁTICA ================= */
  {
    id: 'com-inf-1',
    materia: 'Informática',
    titulo: 'Hardware, software e Windows',
    minutos: 40,
    editais: ['INSS', 'BB', 'PRF'],
    topicos: ['inf-so'],
    resumo: `
      <p><strong>Hardware</strong> é a parte física; <strong>software</strong>, os programas.
      Componentes que caem: CPU (processador — unidade de controle, ULA e registradores),
      memória RAM (volátil, de trabalho), memória ROM (não volátil, BIOS/UEFI),
      cache (mais rápida, dentro do processador), HD (magnético) e SSD (sem partes móveis, mais rápido).</p>
      <p><strong>Periféricos</strong>: de entrada (teclado, mouse, scanner, microfone),
      de saída (monitor, impressora, caixa de som) e híbridos/entrada-e-saída
      (touchscreen, pen drive, placa de rede, impressora multifuncional).</p>
      <p><strong>Sistema operacional</strong> gerencia processos, memória, arquivos e dispositivos.
      No <strong>Windows</strong>, saiba:</p>
      <ul>
        <li><strong>Explorador de Arquivos</strong>: pastas, extensões, propriedades, atributos
        (somente leitura, oculto).</li>
        <li><strong>Lixeira</strong>: arquivos excluídos de pen drive ou de rede NÃO vão para a lixeira;
        Shift+Delete apaga sem passar por ela.</li>
        <li><strong>Atalhos</strong>: Ctrl+C copiar, Ctrl+X recortar, Ctrl+V colar, Ctrl+Z desfazer,
        Ctrl+Y refazer, Ctrl+A selecionar tudo, Ctrl+F localizar, Win+E abrir o explorador,
        Win+L bloquear, Win+D mostrar área de trabalho, Alt+Tab alternar janelas,
        F2 renomear, F5 atualizar, PrtScn capturar tela.</li>
        <li>Nome de arquivo no Windows não aceita <code>\\ / : * ? " &lt; &gt; |</code>.</li>
      </ul>
      <p><strong>Software livre × proprietário</strong>: livre garante as liberdades de usar, estudar,
      modificar e redistribuir (Linux, LibreOffice); proprietário tem licença restritiva (Windows, MS Office).
      Freeware é grátis mas não necessariamente livre.</p>`,
    chaves: [
      'RAM é volátil: perde o conteúdo quando o computador desliga.',
      'SSD é mais rápido e mais resistente que HD; ambos são memória secundária.',
      'Arquivo apagado de pen drive não vai para a lixeira.',
      'Ctrl+Shift+Esc abre direto o Gerenciador de Tarefas.',
      'Software livre não é sinônimo de software gratuito.'
    ],
    pegadinhas: [
      'Confundir memória RAM (trabalho) com memória de armazenamento (HD/SSD).',
      'Achar que formatar apaga fisicamente os dados — pode haver recuperação.',
      'Bit (b) × Byte (B): 1 byte = 8 bits.'
    ],
    videos: [
      { titulo: 'Windows 10 para concursos: o que mais cai em prova', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=kT4LIVZeMb4' },
      { titulo: 'Noções de informática para concursos — aula gratuita', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=e-w07JpTYvo' },
      { titulo: 'Informática para concursos — Windows 11, aula 1', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=QIB18HYMdok' },
      { titulo: 'Hardware e software — noções de informática', canal: 'Gran Cursos Online', busca: 'nocoes de informatica hardware e software concurso aula completa' },
      { titulo: 'Windows 10/11 para concursos', canal: 'Estratégia Concursos', busca: 'windows 10 11 para concursos aula completa informatica' }
    ]
  },

  {
    id: 'com-inf-2',
    materia: 'Informática',
    titulo: 'Word, Excel e edição de documentos',
    minutos: 45,
    editais: ['INSS', 'BB', 'PRF'],
    topicos: ['inf-office'],
    resumo: `
      <p><strong>Word / Writer</strong>: formatação de fonte e parágrafo, estilos, cabeçalho e rodapé,
      quebra de página (Ctrl+Enter) × quebra de seção, sumário automático (depende dos estilos de título),
      controle de alterações e comentários, mala direta, marca d'água.
      Extensões: .docx (Word), .odt (Writer), .pdf (exportação).</p>
      <p><strong>Excel / Calc</strong> — é o que mais cai:</p>
      <ul>
        <li>Toda fórmula começa com <code>=</code>.</li>
        <li><strong>Referência relativa</strong> (A1) muda ao copiar; <strong>absoluta</strong> ($A$1) não muda;
        <strong>mista</strong> ($A1 ou A$1) trava só a coluna ou só a linha. F4 alterna.</li>
        <li>Funções campeãs: <code>SOMA</code>, <code>MÉDIA</code>, <code>MÁXIMO</code>, <code>MÍNIMO</code>,
        <code>CONT.NÚM</code> (conta números), <code>CONT.VALORES</code> (conta não vazias),
        <code>CONT.SE</code> e <code>SOMASE</code> (com critério), <code>SE</code> (condição),
        <code>PROCV</code> (busca vertical), <code>CONCATENAR</code> / &amp;, <code>HOJE()</code>.</li>
        <li><code>=SE(A1&gt;=7;"Aprovado";"Reprovado")</code> — teste, valor se verdadeiro, valor se falso.</li>
        <li>Intervalo com dois-pontos (A1:A10) = tudo entre eles. Ponto e vírgula (A1;A10) = só esses dois.</li>
        <li>Erros: <code>#DIV/0!</code> (divisão por zero), <code>#NOME?</code> (função escrita errada),
        <code>#VALOR!</code> (tipo incompatível), <code>#REF!</code> (referência apagada),
        <code>#N/D</code> (PROCV não achou).</li>
      </ul>
      <p><strong>PowerPoint / Impress</strong>: slide mestre, transições, animações, modo apresentador.</p>`,
    chaves: [
      'Fórmula sempre começa com "=" (o Excel também aceita + ou −).',
      '$ trava a referência: $A$1 não muda ao arrastar.',
      'CONT.NÚM conta só números; CONT.VALORES conta qualquer célula preenchida.',
      'PROCV procura na PRIMEIRA coluna do intervalo, da esquerda para a direita.',
      'Ctrl+Enter no Word = quebra de página; no Excel, preenche a seleção.'
    ],
    pegadinhas: [
      '=SOMA(A1;A5) soma só duas células; =SOMA(A1:A5) soma cinco.',
      'MÉDIA ignora células vazias, mas considera zeros.',
      'Ao copiar uma fórmula para baixo, a linha muda; para o lado, a coluna muda.'
    ],
    videos: [
      { titulo: 'Excel para concursos: as funções mais cobradas', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=8t59E-3zdFs' },
      { titulo: 'Detonando Excel — funções e fórmulas (aula 1)', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=7Obpzhbsirc' },
      { titulo: 'Fórmulas e funções do Excel para concursos públicos', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=PH0616bnbYk' },
      { titulo: 'Excel para concursos — aula completa', canal: 'Gran Cursos Online', busca: 'excel para concursos aula completa funcoes formulas' },
      { titulo: 'Funções do Excel que mais caem em prova', canal: 'Estratégia Concursos', busca: 'funcoes do excel que mais caem em concurso procv se somase' }
    ]
  },

  {
    id: 'com-inf-3',
    materia: 'Informática',
    titulo: 'Internet, navegadores, e-mail e redes',
    minutos: 40,
    editais: ['INSS', 'BB', 'PRF'],
    topicos: ['inf-internet'],
    resumo: `
      <p><strong>Redes</strong>: LAN (local), MAN (metropolitana), WAN (ampla), VPN (túnel criptografado
      sobre a internet), intranet (rede interna da organização, mesma tecnologia da internet) e
      extranet (parte da intranet aberta a parceiros/usuários externos com autenticação).</p>
      <p><strong>Protocolos</strong>: HTTP/HTTPS (web; HTTPS usa TLS e cadeado),
      FTP (transferência de arquivos), SMTP (envio de e-mail),
      POP3 (baixa e normalmente remove do servidor), IMAP (sincroniza e mantém no servidor),
      DNS (traduz nome para IP), DHCP (distribui IP automaticamente), TCP (confiável, com confirmação),
      UDP (rápido, sem garantia).</p>
      <p><strong>Navegadores</strong>: guias, favoritos, histórico, downloads, cookies, cache e
      navegação anônima/privativa. A janela anônima <strong>não</strong> deixa histórico nem cookies
      no computador, mas <strong>não</strong> deixa você invisível: provedor, empregador e o site
      continuam vendo o acesso. Atalhos: Ctrl+T nova guia, Ctrl+Shift+T reabrir guia fechada,
      Ctrl+Shift+N (ou Ctrl+Shift+P no Firefox) janela anônima, Ctrl+H histórico, Ctrl+D favoritar,
      F5/Ctrl+R atualizar, Ctrl+F5 atualizar ignorando cache.</p>
      <p><strong>E-mail</strong>: "Para", "Cc" (cópia visível) e "Cco" (cópia oculta — os demais
      destinatários não veem quem está em Cco). "Responder a todos" envia para todos os destinatários
      visíveis. Anexos têm limite de tamanho (em geral 20–25 MB).</p>
      <p><strong>Computação em nuvem</strong>: IaaS (infraestrutura), PaaS (plataforma) e SaaS
      (software como serviço, ex.: Gmail, Google Drive, Office 365). Vantagens: acesso de qualquer lugar,
      escalabilidade; riscos: dependência de conexão e de terceiros.</p>`,
    chaves: [
      'HTTPS = HTTP + criptografia (TLS). O cadeado indica canal seguro, não site confiável.',
      'IMAP sincroniza em vários dispositivos; POP3 tende a baixar e remover do servidor.',
      'Navegação anônima não esconde seu acesso do provedor nem do site.',
      'Intranet é rede privada da organização; extranet estende o acesso a parceiros.',
      'Cco esconde os destinatários uns dos outros.'
    ],
    pegadinhas: [
      'Achar que a navegação anônima impede rastreamento do empregador ou do provedor.',
      'Confundir DNS (nome → IP) com DHCP (distribuição de IP).',
      'Cookies não são vírus: são arquivos de preferência/sessão.'
    ],
    videos: [
      { titulo: 'Aula completa: protocolos, internet, intranet, e-mail e segurança', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=eEHZGYglxrI' },
      { titulo: 'Conceitos de internet e intranet', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=CpWW9irlu-Y' },
      { titulo: 'Redes e protocolos — AlfaCon', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=CcBvqLq0UeA' },
      { titulo: 'Internet, intranet e extranet', canal: 'Gran Cursos Online', busca: 'internet intranet extranet concurso aula informatica' },
      { titulo: 'Navegadores e correio eletrônico para concursos', canal: 'Estratégia Concursos', busca: 'navegadores e correio eletronico concurso aula completa' }
    ]
  },

  {
    id: 'com-inf-4',
    materia: 'Informática',
    titulo: 'Segurança da informação, malware e backup',
    minutos: 40,
    editais: ['INSS', 'BB', 'PRF'],
    topicos: ['inf-seguranca'],
    resumo: `
      <p><strong>Pilares (DICA-N)</strong>: <strong>D</strong>isponibilidade,
      <strong>I</strong>ntegridade, <strong>C</strong>onfidencialidade, <strong>A</strong>utenticidade e
      não repúdio (irretratabilidade).</p>
      <p><strong>Malwares:</strong></p>
      <ul>
        <li><strong>Vírus</strong>: precisa de hospedeiro e de execução pelo usuário.</li>
        <li><strong>Worm</strong>: se propaga sozinho pela rede, sem hospedeiro.</li>
        <li><strong>Trojan (cavalo de troia)</strong>: se disfarça de programa útil.</li>
        <li><strong>Ransomware</strong>: criptografa os dados e exige resgate.</li>
        <li><strong>Spyware / keylogger / screenlogger</strong>: espionam e capturam o que é digitado ou a tela.</li>
        <li><strong>Backdoor</strong>: abre acesso remoto; <strong>rootkit</strong>: esconde a invasão;
        <strong>bot/botnet</strong>: máquina zumbi controlada remotamente.</li>
      </ul>
      <p><strong>Ataques</strong>: phishing (isca por e-mail/mensagem), pharming (redireciona o DNS),
      engenharia social (manipula a pessoa), força bruta (testa senhas), DDoS (derruba o serviço por
      sobrecarga), man-in-the-middle (intercepta a comunicação).</p>
      <p><strong>Defesas</strong>: antivírus atualizado, firewall (filtra o tráfego, não remove vírus),
      atualizações, senhas fortes, autenticação em dois fatores (2FA), criptografia,
      certificado digital e assinatura digital.</p>
      <p><strong>Criptografia</strong>: simétrica (mesma chave, rápida) e assimétrica (par de chaves —
      pública e privada). Na <strong>assinatura digital</strong>, assina-se com a chave <em>privada</em>
      do remetente (garante autenticidade, integridade e não repúdio); para <strong>sigilo</strong>,
      criptografa-se com a chave <em>pública</em> do destinatário.</p>
      <p><strong>Backup</strong>: completo (tudo), incremental (só o que mudou desde o último backup de
      qualquer tipo — mais rápido de gravar, mais lento de restaurar) e diferencial (tudo que mudou desde
      o último completo). Boa prática 3-2-1: 3 cópias, 2 mídias, 1 fora do local.</p>`,
    chaves: [
      'Worm se espalha sozinho; vírus precisa de hospedeiro.',
      'Firewall filtra tráfego — não substitui antivírus.',
      'Assinatura digital usa a chave privada de quem assina.',
      'Backup incremental é o mais rápido de fazer e o mais lento de restaurar.',
      'Phishing é engenharia social: o alvo é a pessoa, não a máquina.'
    ],
    pegadinhas: [
      'Ransomware não "rouba" necessariamente: ele sequestra (criptografa) os dados.',
      'Certificado digital não é senha; é emitido por uma Autoridade Certificadora.',
      'Backup na mesma máquina não protege contra roubo, incêndio ou ransomware.'
    ],
    videos: [
      { titulo: 'Segurança da informação — aula ao vivo (AlfaCon)', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=PxgYsfzLaoo' },
      { titulo: 'Segurança da informação para concursos #1', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=K2aUdyJpd8k' },
      { titulo: 'O que é malware? Vírus e seus tipos', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=Z1xLrsV30fc' },
      { titulo: 'Segurança da informação para concursos', canal: 'Gran Cursos Online', busca: 'seguranca da informacao para concursos aula completa' },
      { titulo: 'Malwares: vírus, worm, trojan, ransomware', canal: 'Estratégia Concursos', busca: 'malwares virus worm trojan ransomware concurso aula' }
    ]
  },

  /* ================= ATUALIDADES E ÉTICA ================= */
  {
    id: 'com-atu-1',
    materia: 'Atualidades e Ética',
    titulo: 'Atualidades e noções de ética no serviço público',
    minutos: 35,
    editais: ['INSS', 'BB', 'PRF'],
    topicos: ['atu-geral'],
    resumo: `
      <p><strong>Como estudar atualidades sem enlouquecer:</strong> 20 minutos por dia lendo um resumo
      semanal ou assistindo a um "atualidades da semana" no YouTube. Foque nos últimos 12 meses antes
      da prova e nos temas ligados ao órgão: previdência e envelhecimento (INSS), economia e sistema
      financeiro (BB), segurança pública e rodovias (PRF).</p>
      <p><strong>Temas recorrentes:</strong> reforma da previdência e envelhecimento populacional;
      inflação, juros e política monetária; PIX e digitalização dos serviços; inteligência artificial e
      LGPD; ESG e transição energética; conflitos internacionais e blocos econômicos (BRICS, Mercosul);
      segurança pública, fronteiras e tráfico; desigualdade e programas sociais; mudanças climáticas.</p>
      <p><strong>Ética no serviço público (base):</strong> a Constituição (art. 37) traz os princípios
      <strong>LIMPE</strong> — Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência.
      No serviço público federal, o <strong>Decreto 1.171/1994</strong> (Código de Ética do Servidor
      Civil) estabelece que:</p>
      <ul>
        <li>o servidor deve tratar o público com cortesia e não pode causar dano moral ao usuário;</li>
        <li>a moralidade administrativa não se limita à legalidade: exige escolher entre o honesto e o
        desonesto, não só entre o legal e o ilegal;</li>
        <li>a demora injustificada na prestação do serviço é tratada como forma de dano moral ao usuário;</li>
        <li>a Comissão de Ética pode aplicar apenas a pena de <strong>censura</strong>.</li>
      </ul>
      <p>Para o Banco do Brasil, a lógica é parecida, mas vem do <strong>Código de Ética e Normas de
      Conduta do BB</strong>: integridade, sigilo bancário, prevenção a conflito de interesses,
      combate à lavagem de dinheiro e relacionamento responsável com o cliente.</p>`,
    chaves: [
      'LIMPE: Legalidade, Impessoalidade, Moralidade, Publicidade, Eficiência.',
      'A única penalidade que a Comissão de Ética aplica é a censura.',
      'Demora injustificada no atendimento = dano moral ao usuário (Decreto 1.171/94).',
      'Ética vai além da lei: envolve escolher entre o honesto e o desonesto.',
      'Nas atualidades, priorize os 12 meses anteriores à prova e os temas ligados ao órgão.'
    ],
    pegadinhas: [
      'Confundir as penalidades da Comissão de Ética (censura) com as da Lei 8.112 (advertência, suspensão, demissão).',
      'Achar que o código de ética só vale para servidores efetivos — alcança todo aquele que presta serviço à Administração.',
      'Atualidade não é "achismo": a banca cobra fato, data e conceito.'
    ],
    videos: [
      { titulo: 'Decreto 1.171/94 — Código de Ética atualizado', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=KBB1p1IXFf4' },
      { titulo: 'Decreto 1.171/94 completo + questões resolvidas', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=GQ6EyOB_xpU' },
      { titulo: 'Princípios da Administração Pública e poderes administrativos', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=A_8Cyx-9Spo' },
      { titulo: 'Atualidades para concursos — resumo da semana', canal: 'Gran Cursos Online', busca: 'atualidades para concursos resumo da semana 2025' },
      { titulo: 'Ética no serviço público — Decreto 1.171/94', canal: 'Estratégia Concursos', busca: 'etica no servico publico decreto 1171 94 concurso aula completa' }
    ]
  }

  ]
});
