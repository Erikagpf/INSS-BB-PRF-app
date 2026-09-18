/* Banco de questões — específicas da PRF (Policial Rodoviário Federal) */
CONC.addQuestoes([

/* ---------------- LEGISLAÇÃO DE TRÂNSITO: GERAL ---------------- */
{
  id: 'P-TR-001', editais: ['prf'], materia: 'Legislação de Trânsito', topico: 'prf-ctb-geral',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'facil',
  enunciado: '<p>Julgue o item: segundo o CTB, o trânsito em condições seguras é um direito de todos e dever dos órgãos e entidades componentes do Sistema Nacional de Trânsito.</p>',
  alternativas: ['Certo','Errado'], gabarito: 0,
  explicacao: 'CERTO. É o art. 1º, § 2º, do CTB. O § 3º complementa: os órgãos do SNT respondem, no âmbito das respectivas competências, objetivamente por danos causados aos cidadãos por ação, omissão ou erro na execução e manutenção de programas, projetos e serviços.'
},
{
  id: 'P-TR-002', editais: ['prf'], materia: 'Legislação de Trânsito', topico: 'prf-ctb-geral',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>Na ausência de sinalização regulamentadora, a velocidade máxima permitida para automóveis em rodovia pavimentada é de</p>',
  alternativas: ['80 km/h','90 km/h','100 km/h','110 km/h','120 km/h'],
  gabarito: 3,
  explicacao: 'Letra D. Em rodovias de pista dupla ou simples pavimentadas: 110 km/h para automóveis, camionetas e motocicletas; 90 km/h para ônibus e micro-ônibus; 80 km/h para os demais veículos. Em estradas (não pavimentadas), 60 km/h.'
},
{
  id: 'P-TR-003', editais: ['prf'], materia: 'Legislação de Trânsito', topico: 'prf-ctb-geral',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'media',
  enunciado: '<p>Julgue o item: o CONTRAN é o órgão máximo executivo de trânsito da União, competindo-lhe o patrulhamento ostensivo das rodovias federais.</p>',
  alternativas: ['Certo','Errado'], gabarito: 1,
  explicacao: 'ERRADO. O CONTRAN é o órgão máximo NORMATIVO e consultivo. O órgão máximo executivo da União é a SENATRAN, e o patrulhamento ostensivo das rodovias federais cabe à Polícia Rodoviária Federal (art. 20 do CTB).'
},
{
  id: 'P-TR-004', editais: ['prf'], materia: 'Legislação de Trânsito', topico: 'prf-ctb-geral',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>Em um cruzamento não sinalizado, entre dois veículos que se aproximam ao mesmo tempo, a preferência de passagem é</p>',
  alternativas: [
    'do veículo de maior porte.',
    'do veículo que vier pela direita.',
    'do veículo que vier pela esquerda.',
    'do veículo com maior velocidade.',
    'definida por acordo entre os condutores.'
  ], gabarito: 1,
  explicacao: 'Letra B. A regra geral do art. 29 do CTB dá preferência a quem vem pela direita. Em rotatória, no entanto, a preferência é de quem já está circulando por ela.'
},
{
  id: 'P-TR-005', editais: ['prf'], materia: 'Legislação de Trânsito', topico: 'prf-ctb-geral',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'media',
  enunciado: '<p>Julgue o item: veículos de emergência, como ambulâncias e viaturas policiais, têm sempre prioridade de passagem, independentemente de estarem em serviço de urgência.</p>',
  alternativas: ['Certo','Errado'], gabarito: 1,
  explicacao: 'ERRADO. A prioridade existe apenas quando o veículo está em serviço de urgência e com os dispositivos regulamentares de alarme sonoro e iluminação vermelha intermitente acionados. Fora disso, seguem as regras comuns.'
},
{
  id: 'P-TR-006', editais: ['prf'], materia: 'Legislação de Trânsito', topico: 'prf-ctb-geral',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'facil',
  enunciado: '<p>Conforme o CTB, crianças com idade inferior a 10 anos devem ser transportadas</p>',
  alternativas: [
    'no banco dianteiro, com cinto de três pontos.',
    'no banco traseiro, com uso de dispositivo de retenção adequado.',
    'em qualquer banco, desde que com cinto.',
    'no colo de um adulto, no banco traseiro.',
    'apenas em veículos com airbag desativado.'
  ], gabarito: 1,
  explicacao: 'Letra B. A regra é o transporte no banco traseiro com cinto de segurança ou dispositivo de retenção equivalente (bebê-conforto, cadeirinha ou assento de elevação), conforme a idade e o porte da criança.'
},

/* ---------------- INFRAÇÕES E CRIMES DE TRÂNSITO ---------------- */
{
  id: 'P-TR-007', editais: ['prf'], materia: 'Legislação de Trânsito', topico: 'prf-ctb-infracoes',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>A pontuação atribuída a uma infração de natureza gravíssima é de</p>',
  alternativas: ['3 pontos','4 pontos','5 pontos','7 pontos','10 pontos'],
  gabarito: 3,
  explicacao: 'Letra D. Leve: 3 pontos; média: 4; grave: 5; gravíssima: 7. Essa escala é cobrada quase toda prova, junto com os limites de 20, 30 e 40 pontos para a suspensão.'
},
{
  id: 'P-TR-008', editais: ['prf'], materia: 'Legislação de Trânsito', topico: 'prf-ctb-infracoes',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'dificil',
  enunciado: '<p>Julgue o item: após a Lei 14.071/2020, o condutor que não cometer nenhuma infração gravíssima nos últimos doze meses só terá o direito de dirigir suspenso ao atingir 40 pontos.</p>',
  alternativas: ['Certo','Errado'], gabarito: 0,
  explicacao: 'CERTO. Os limites passaram a variar: 20 pontos com duas ou mais gravíssimas, 30 pontos com uma gravíssima e 40 pontos sem nenhuma gravíssima no período de 12 meses.'
},
{
  id: 'P-TR-009', editais: ['prf'], materia: 'Legislação de Trânsito', topico: 'prf-ctb-infracoes',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'media',
  enunciado: '<p>Julgue o item: a retenção do veículo e o recolhimento da Carteira Nacional de Habilitação são espécies de penalidade previstas no CTB.</p>',
  alternativas: ['Certo','Errado'], gabarito: 1,
  explicacao: 'ERRADO. São MEDIDAS ADMINISTRATIVAS (art. 269), e não penalidades. As penalidades estão no art. 256: advertência por escrito, multa, suspensão do direito de dirigir, cassação da CNH, cassação da permissão e frequência obrigatória em curso de reciclagem.'
},
{
  id: 'P-TR-010', editais: ['prf'], materia: 'Legislação de Trânsito', topico: 'prf-ctb-infracoes',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>O condutor que se recusa a se submeter ao teste do etilômetro (bafômetro) está sujeito a</p>',
  alternativas: [
    'nenhuma sanção, por força do direito de não produzir prova contra si.',
    'infração gravíssima, com multa multiplicada, suspensão do direito de dirigir e retenção do veículo.',
    'prisão em flagrante por desobediência.',
    'apenas advertência por escrito.',
    'cassação imediata da CNH.'
  ], gabarito: 1,
  explicacao: 'Letra B. O art. 165-A prevê as mesmas penalidades do art. 165: infração gravíssima, multa multiplicada por dez, suspensão do direito de dirigir por 12 meses e retenção do veículo. A recusa é infração administrativa; não configura crime nem desobediência.'
},
{
  id: 'P-TR-011', editais: ['prf'], materia: 'Legislação de Trânsito', topico: 'prf-ctb-infracoes',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'dificil',
  enunciado: '<p>Julgue o item: o homicídio culposo na direção de veículo automotor praticado por condutor sob influência de álcool é punido com pena de reclusão de cinco a oito anos.</p>',
  alternativas: ['Certo','Errado'], gabarito: 0,
  explicacao: 'CERTO. É a figura do art. 302, § 3º, do CTB. No tipo simples (caput), a pena é de detenção de dois a quatro anos; sob influência de álcool ou substância psicoativa, passa a reclusão de cinco a oito anos.'
},
{
  id: 'P-TR-012', editais: ['prf'], materia: 'Legislação de Trânsito', topico: 'prf-ctb-infracoes',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>O crime de embriaguez ao volante (art. 306 do CTB) pode ser comprovado por</p>',
  alternativas: [
    'exclusivamente pelo exame de sangue.',
    'exclusivamente pelo etilômetro.',
    'teste de alcoolemia, exame clínico, perícia, vídeo, prova testemunhal ou outros meios de prova admitidos.',
    'confissão do condutor, apenas.',
    'declaração da autoridade, sem necessidade de qualquer elemento.'
  ], gabarito: 2,
  explicacao: 'Letra C. O § 2º do art. 306 admite a comprovação por qualquer meio de prova em direito admitido, inclusive sinais de alteração da capacidade psicomotora constatados pelo agente, o que evita a impunidade em caso de recusa ao bafômetro.'
},
{
  id: 'P-TR-013', editais: ['prf'], materia: 'Legislação de Trânsito', topico: 'prf-ctb-infracoes',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'media',
  enunciado: '<p>Julgue o item: a penalidade de advertência por escrito pode ser aplicada a infrações de natureza leve ou média, quando o infrator não for reincidente na mesma infração nos últimos doze meses.</p>',
  alternativas: ['Certo','Errado'], gabarito: 0,
  explicacao: 'CERTO. É o art. 267 do CTB. Trata-se de faculdade da autoridade de trânsito, considerando o prontuário do infrator, e substitui a multa.'
},

/* ---------------- CONSTITUCIONAL ---------------- */
{
  id: 'P-CO-001', editais: ['prf'], materia: 'Direito Constitucional', topico: 'prf-const',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'facil',
  enunciado: '<p>Segundo o art. 144 da Constituição Federal, a Polícia Rodoviária Federal destina-se, na forma da lei, ao</p>',
  alternativas: [
    'policiamento ostensivo das vias urbanas.',
    'patrulhamento ostensivo das rodovias federais.',
    'exercício das funções de polícia judiciária da União.',
    'controle das fronteiras marítimas.',
    'policiamento das ferrovias federais.'
  ], gabarito: 1,
  explicacao: 'Letra B. O § 2º do art. 144 define a PRF como órgão permanente, organizado e mantido pela União e estruturado em carreira, destinado ao patrulhamento ostensivo das rodovias federais. As funções de polícia judiciária da União são da Polícia Federal.'
},
{
  id: 'P-CO-002', editais: ['prf'], materia: 'Direito Constitucional', topico: 'prf-const',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'media',
  enunciado: '<p>Julgue o item: a casa é asilo inviolável do indivíduo, podendo nela penetrar-se, sem consentimento do morador, em caso de flagrante delito ou desastre, ou para prestar socorro, a qualquer hora do dia ou da noite.</p>',
  alternativas: ['Certo','Errado'], gabarito: 0,
  explicacao: 'CERTO. As hipóteses de flagrante delito, desastre e prestação de socorro autorizam o ingresso a qualquer hora. Já a entrada por determinação judicial só é possível DURANTE O DIA.'
},
{
  id: 'P-CO-003', editais: ['prf'], materia: 'Direito Constitucional', topico: 'prf-const',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'media',
  enunciado: '<p>Julgue o item: a prática do racismo constitui crime inafiançável e imprescritível, sujeito à pena de reclusão.</p>',
  alternativas: ['Certo','Errado'], gabarito: 0,
  explicacao: 'CERTO. É o art. 5º, XLII, da CF. Já a tortura, o tráfico ilícito de entorpecentes, o terrorismo e os crimes hediondos são inafiançáveis e insuscetíveis de graça ou anistia — mas não são imprescritíveis.'
},
{
  id: 'P-CO-004', editais: ['prf'], materia: 'Direito Constitucional', topico: 'prf-const',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>Compete privativamente à União legislar sobre</p>',
  alternativas: ['proteção ao meio ambiente','trânsito e transporte','proteção à infância e à juventude','educação e cultura','defesa da saúde'],
  gabarito: 1,
  explicacao: 'Letra B. Trânsito e transporte estão no art. 22, XI, entre as competências privativas da União. As demais opções são competências concorrentes ou comuns entre os entes federativos.'
},

/* ---------------- ADMINISTRATIVO ---------------- */
{
  id: 'P-AD-001', editais: ['prf'], materia: 'Direito Administrativo', topico: 'prf-adm',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'media',
  enunciado: '<p>Julgue o item: a responsabilidade civil do Estado por danos causados por seus agentes a terceiros é objetiva, dispensando a comprovação de culpa do agente pela vítima.</p>',
  alternativas: ['Certo','Errado'], gabarito: 0,
  explicacao: 'CERTO. Basta demonstrar conduta, dano e nexo causal (art. 37, § 6º, da CF — teoria do risco administrativo). A culpa ou o dolo do agente só importa para o direito de regresso do Estado contra ele.'
},
{
  id: 'P-AD-002', editais: ['prf'], materia: 'Direito Administrativo', topico: 'prf-adm',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>São modalidades de licitação previstas na Lei 14.133/2021</p>',
  alternativas: [
    'convite, tomada de preços e concorrência.',
    'pregão, concorrência, concurso, leilão e diálogo competitivo.',
    'pregão, convite e leilão.',
    'concorrência, tomada de preços e diálogo competitivo.',
    'pregão eletrônico e carta-convite.'
  ], gabarito: 1,
  explicacao: 'Letra B. A nova lei manteve pregão, concorrência, concurso e leilão, criou o diálogo competitivo e extinguiu o convite e a tomada de preços.'
},
{
  id: 'P-AD-003', editais: ['prf'], materia: 'Direito Administrativo', topico: 'prf-adm',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'media',
  enunciado: '<p>Julgue o item: o poder de polícia administrativa caracteriza-se pelos atributos da discricionariedade, da autoexecutoriedade e da coercibilidade.</p>',
  alternativas: ['Certo','Errado'], gabarito: 0,
  explicacao: 'CERTO. Atenção, porém: nem todo ato de polícia é autoexecutório — a cobrança de multa não paga, por exemplo, depende de ação judicial de execução.'
},
{
  id: 'P-AD-004', editais: ['prf'], materia: 'Direito Administrativo', topico: 'prf-adm',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>A criação de uma autarquia federal, com personalidade jurídica própria, para executar serviço antes prestado diretamente pela União, é exemplo de</p>',
  alternativas: ['desconcentração','descentralização','delegação de competência','avocação','tutela'],
  gabarito: 1,
  explicacao: 'Letra B. Descentralização transfere a atividade a outra pessoa jurídica. A desconcentração é a distribuição interna de competências, dentro da mesma pessoa jurídica, com base na hierarquia.'
},

/* ---------------- DIREITO PENAL ---------------- */
{
  id: 'P-PE-001', editais: ['prf'], materia: 'Direito Penal', topico: 'prf-penal',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'media',
  enunciado: '<p>Julgue o item: age em legítima defesa quem, usando moderadamente dos meios necessários, repele injusta agressão, atual ou iminente, a direito seu ou de outrem.</p>',
  alternativas: ['Certo','Errado'], gabarito: 0,
  explicacao: 'CERTO. É a redação do art. 25 do Código Penal. Se a agressão já cessou, não há legítima defesa (seria vingança); se é apenas futura e incerta, também não.'
},
{
  id: 'P-PE-002', editais: ['prf'], materia: 'Direito Penal', topico: 'prf-penal',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>São causas de exclusão da ilicitude previstas no art. 23 do Código Penal</p>',
  alternativas: [
    'coação moral irresistível e obediência hierárquica.',
    'estado de necessidade, legítima defesa, estrito cumprimento do dever legal e exercício regular de direito.',
    'erro de tipo e erro de proibição.',
    'menoridade penal e doença mental.',
    'desistência voluntária e arrependimento eficaz.'
  ], gabarito: 1,
  explicacao: 'Letra B. As demais alternativas trazem excludentes de CULPABILIDADE (coação moral irresistível, obediência hierárquica, menoridade, doença mental, erro de proibição) ou institutos ligados à tipicidade e ao iter criminis.'
},
{
  id: 'P-PE-003', editais: ['prf'], materia: 'Direito Penal', topico: 'prf-penal',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'media',
  enunciado: '<p>Julgue o item: no dolo eventual, o agente prevê o resultado e assume o risco de produzi-lo; na culpa consciente, prevê o resultado, mas acredita sinceramente que poderá evitá-lo.</p>',
  alternativas: ['Certo','Errado'], gabarito: 0,
  explicacao: 'CERTO. A distinção está na aceitação: no dolo eventual o agente é indiferente ao resultado ("se acontecer, tudo bem"); na culpa consciente, ele confia que o evitará. É tema clássico em acidentes de trânsito e racha.'
},
{
  id: 'P-PE-004', editais: ['prf'], materia: 'Direito Penal', topico: 'prf-penal',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>O funcionário público que solicita ou recebe, para si ou para outrem, vantagem indevida em razão da função pratica o crime de</p>',
  alternativas: ['corrupção ativa','corrupção passiva','concussão','peculato','prevaricação'],
  gabarito: 1,
  explicacao: 'Letra B. Corrupção passiva é do funcionário (art. 317). Se ele EXIGE a vantagem, o crime é concussão (art. 316). Quem oferece a vantagem, sendo particular, comete corrupção ativa (art. 333).'
},
{
  id: 'P-PE-005', editais: ['prf'], materia: 'Direito Penal', topico: 'prf-penal',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'media',
  enunciado: '<p>Julgue o item: a diferença essencial entre o furto e o roubo é o emprego de violência ou grave ameaça à pessoa, presente apenas no roubo.</p>',
  alternativas: ['Certo','Errado'], gabarito: 0,
  explicacao: 'CERTO. No furto (art. 155), a subtração ocorre sem violência ou grave ameaça à pessoa. No roubo (art. 157), há violência, grave ameaça ou qualquer meio que reduza a capacidade de resistência da vítima.'
},
{
  id: 'P-PE-006', editais: ['prf'], materia: 'Direito Penal', topico: 'prf-penal',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>Iniciada a execução, o crime não se consuma por circunstâncias alheias à vontade do agente. Trata-se de</p>',
  alternativas: [
    'desistência voluntária, sem punição.',
    'arrependimento eficaz, com extinção da punibilidade.',
    'tentativa, com pena reduzida de um a dois terços.',
    'crime impossível, atípico.',
    'consumação ficta.'
  ], gabarito: 2,
  explicacao: 'Letra C. É a tentativa do art. 14, II, do Código Penal. Na desistência voluntária e no arrependimento eficaz, a interrupção decorre da vontade do próprio agente, que então responde apenas pelos atos já praticados.'
},

/* ---------------- PROCESSO PENAL ---------------- */
{
  id: 'P-PP-001', editais: ['prf'], materia: 'Direito Processual Penal', topico: 'prf-processo',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'media',
  enunciado: '<p>Julgue o item: a busca pessoal independe de mandado judicial quando houver fundada suspeita de que a pessoa esteja na posse de arma proibida ou de objetos que constituam corpo de delito.</p>',
  alternativas: ['Certo','Errado'], gabarito: 0,
  explicacao: 'CERTO. É o art. 244 do CPP. A fundada suspeita precisa ser objetiva e justificável; a jurisprudência recente exige elementos concretos, não apenas atitude "suspeita" genérica.'
},
{
  id: 'P-PP-002', editais: ['prf'], materia: 'Direito Processual Penal', topico: 'prf-processo',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>O prazo para conclusão do inquérito policial, quando o indiciado estiver preso, é de</p>',
  alternativas: ['5 dias','10 dias','15 dias','30 dias','60 dias'],
  gabarito: 1,
  explicacao: 'Letra B. Na Justiça Estadual, são 10 dias com indiciado preso e 30 dias se estiver solto (prorrogáveis). Na Justiça Federal, o prazo com réu preso é de 15 dias, prorrogável por mais 15.'
},
{
  id: 'P-PP-003', editais: ['prf'], materia: 'Direito Processual Penal', topico: 'prf-processo',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'media',
  enunciado: '<p>Julgue o item: qualquer pessoa do povo poderá e as autoridades policiais e seus agentes deverão prender quem quer que seja encontrado em flagrante delito.</p>',
  alternativas: ['Certo','Errado'], gabarito: 0,
  explicacao: 'CERTO. É o art. 301 do CPP. Para o particular, é faculdade (flagrante facultativo); para a autoridade e seus agentes, é dever (flagrante obrigatório/compulsório).'
},
{
  id: 'P-PP-004', editais: ['prf'], materia: 'Direito Processual Penal', topico: 'prf-processo',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>Sobre a prisão preventiva, é correto afirmar que</p>',
  alternativas: [
    'pode ser decretada de ofício pelo juiz, a qualquer tempo.',
    'exige prova da existência do crime e indício suficiente de autoria, e não pode ser decretada de ofício.',
    'tem prazo máximo de cinco dias, prorrogável por igual período.',
    'somente é cabível na fase do inquérito policial.',
    'é decretada pela autoridade policial em caso de urgência.'
  ], gabarito: 1,
  explicacao: 'Letra B. A preventiva depende de requerimento do Ministério Público, do querelante, do assistente ou de representação da autoridade policial. Prazo de 5 + 5 dias é da prisão TEMPORÁRIA, cabível apenas na investigação.'
},
{
  id: 'P-PP-005', editais: ['prf'], materia: 'Direito Processual Penal', topico: 'prf-processo',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'dificil',
  enunciado: '<p>Julgue o item: são inadmissíveis no processo as provas derivadas das ilícitas, salvo quando não evidenciado o nexo de causalidade entre umas e outras ou quando puderem ser obtidas por fonte independente.</p>',
  alternativas: ['Certo','Errado'], gabarito: 0,
  explicacao: 'CERTO. É o art. 157, § 1º, do CPP — a teoria dos frutos da árvore envenenada e suas exceções (fonte independente e descoberta inevitável).'
},

/* ---------------- LEGISLAÇÃO ESPECIAL ---------------- */
{
  id: 'P-LE-001', editais: ['prf'], materia: 'Legislação Especial', topico: 'prf-legesp',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'media',
  enunciado: '<p>Julgue o item: conforme a Lei 11.343/2006, o porte de droga para consumo pessoal sujeita o agente a pena privativa de liberdade de até seis meses.</p>',
  alternativas: ['Certo','Errado'], gabarito: 1,
  explicacao: 'ERRADO. O art. 28 não prevê pena privativa de liberdade. As sanções são advertência sobre os efeitos das drogas, prestação de serviços à comunidade e medida educativa de comparecimento a programa ou curso educativo.'
},
{
  id: 'P-LE-002', editais: ['prf'], materia: 'Legislação Especial', topico: 'prf-legesp',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>Para distinguir o usuário do traficante, o juiz deve considerar, entre outros elementos,</p>',
  alternativas: [
    'exclusivamente a quantidade de droga apreendida.',
    'a natureza e a quantidade da substância, o local e as condições da ação, as circunstâncias sociais e pessoais e os antecedentes do agente.',
    'apenas a confissão do agente.',
    'somente a existência de balança de precisão.',
    'a opinião da autoridade policial, de forma vinculante.'
  ], gabarito: 1,
  explicacao: 'Letra B. É o § 2º do art. 28 da Lei de Drogas. Não existe quantidade legal fixa que, isoladamente, separe usuário de traficante — a análise é do conjunto de circunstâncias.'
},
{
  id: 'P-LE-003', editais: ['prf'], materia: 'Legislação Especial', topico: 'prf-legesp',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'media',
  enunciado: '<p>Julgue o item: no Estatuto do Desarmamento, a posse de arma de fogo refere-se a mantê-la no interior de residência ou local de trabalho, enquanto o porte diz respeito a trazê-la consigo fora desses locais.</p>',
  alternativas: ['Certo','Errado'], gabarito: 0,
  explicacao: 'CERTO. Posse é o art. 12 e porte é o art. 14 da Lei 10.826/2003. Se o agente é o titular ou responsável legal pelo estabelecimento, a arma mantida ali configura posse; fora disso, porte.'
},
{
  id: 'P-LE-004', editais: ['prf'], materia: 'Legislação Especial', topico: 'prf-legesp',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>Segundo a Lei 13.869/2019 (Abuso de Autoridade), os crimes nela previstos exigem</p>',
  alternativas: [
    'apenas a prática do ato, independentemente da intenção.',
    'dolo específico, com a finalidade de prejudicar outrem, beneficiar a si mesmo ou a terceiro, ou por mero capricho ou satisfação pessoal.',
    'culpa grave do agente público.',
    'condenação prévia em processo administrativo.',
    'dano material efetivo à vítima.'
  ], gabarito: 1,
  explicacao: 'Letra B. A lei é expressa ao exigir esse elemento subjetivo especial, e afirma que a divergência na interpretação de lei ou na avaliação de fatos e provas não configura abuso de autoridade.'
},
{
  id: 'P-LE-005', editais: ['prf'], materia: 'Legislação Especial', topico: 'prf-legesp',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'media',
  enunciado: '<p>Julgue o item: o adolescente que pratica conduta descrita como crime responde por ato infracional e está sujeito a medidas socioeducativas.</p>',
  alternativas: ['Certo','Errado'], gabarito: 0,
  explicacao: 'CERTO. Pelo ECA, adolescente é quem tem entre 12 e 18 anos incompletos; pratica ato infracional e recebe medidas socioeducativas. A criança (até 12 anos incompletos) recebe apenas medidas de proteção.'
},

/* ---------------- DIREITOS HUMANOS ---------------- */
{
  id: 'P-DH-001', editais: ['prf'], materia: 'Direitos Humanos', topico: 'prf-dh',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'media',
  enunciado: '<p>Julgue o item: a Declaração Universal dos Direitos Humanos, de 1948, é um tratado internacional que gera obrigações jurídicas vinculantes aos Estados signatários desde a sua adoção.</p>',
  alternativas: ['Certo','Errado'], gabarito: 1,
  explicacao: 'ERRADO. A DUDH é uma resolução/declaração da Assembleia Geral da ONU, não um tratado. Sua força jurídica é reconhecida por constituir costume internacional e por ter inspirado os pactos de 1966, esses sim tratados vinculantes.'
},
{
  id: 'P-DH-002', editais: ['prf'], materia: 'Direitos Humanos', topico: 'prf-dh',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>Os tratados internacionais de direitos humanos aprovados em cada Casa do Congresso Nacional, em dois turnos, por três quintos dos votos dos respectivos membros, equivalem a</p>',
  alternativas: ['lei ordinária','lei complementar','emenda constitucional','norma supralegal','decreto legislativo'],
  gabarito: 2,
  explicacao: 'Letra C. É o § 3º do art. 5º da CF, incluído pela EC 45/2004. Os tratados de direitos humanos não aprovados por esse rito têm status supralegal, segundo o STF.'
},
{
  id: 'P-DH-003', editais: ['prf'], materia: 'Direitos Humanos', topico: 'prf-dh',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'media',
  enunciado: '<p>Julgue o item: no uso da força pelos agentes de segurança pública, a arma de fogo deve ser o último recurso, admitida apenas quando estritamente necessária para proteger a vida.</p>',
  alternativas: ['Certo','Errado'], gabarito: 0,
  explicacao: 'CERTO. Os Princípios Básicos da ONU sobre o Uso da Força e de Armas de Fogo consagram legalidade, necessidade, proporcionalidade e moderação, sendo o emprego de arma letal excepcional e voltado à proteção da vida.'
},

/* ---------------- FÍSICA ---------------- */
{
  id: 'P-FI-001', editais: ['prf'], materia: 'Física', topico: 'prf-fisica',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>Um veículo trafega a 72 km/h. Sua velocidade em metros por segundo é de</p>',
  alternativas: ['15 m/s','18 m/s','20 m/s','25 m/s','30 m/s'],
  gabarito: 2,
  explicacao: 'Letra C. Basta dividir por 3,6: 72 ÷ 3,6 = 20 m/s. Para o caminho inverso (m/s para km/h), multiplica-se por 3,6.'
},
{
  id: 'P-FI-002', editais: ['prf'], materia: 'Física', topico: 'prf-fisica',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'media',
  enunciado: '<p>Julgue o item: mantidas as mesmas condições de pista e de pneus, se a velocidade de um veículo dobrar, a distância necessária para a frenagem também dobrará.</p>',
  alternativas: ['Certo','Errado'], gabarito: 1,
  explicacao: 'ERRADO. A distância de frenagem é proporcional ao QUADRADO da velocidade: d = v² / (2·μ·g). Dobrando a velocidade, a distância fica quatro vezes maior. É o argumento físico central das campanhas de redução de velocidade.'
},
{
  id: 'P-FI-003', editais: ['prf'], materia: 'Física', topico: 'prf-fisica',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>Um veículo a 20 m/s freia com desaceleração constante de 5 m/s². A distância percorrida até parar é de</p>',
  alternativas: ['20 m','30 m','40 m','50 m','80 m'],
  gabarito: 2,
  explicacao: 'Letra C. Por Torricelli: v² = v₀² + 2aΔs → 0 = 400 − 2(5)Δs → Δs = 400/10 = 40 m.'
},
{
  id: 'P-FI-004', editais: ['prf'], materia: 'Física', topico: 'prf-fisica',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'media',
  enunciado: '<p>Julgue o item: o airbag reduz as lesões em uma colisão porque aumenta o tempo de interação entre o ocupante e o veículo, diminuindo a força média envolvida na variação da quantidade de movimento.</p>',
  alternativas: ['Certo','Errado'], gabarito: 0,
  explicacao: 'CERTO. Pelo teorema do impulso (I = F·Δt = ΔQ), como a variação da quantidade de movimento é a mesma, aumentar o tempo de contato reduz a força média sobre o corpo. Mesmo princípio das zonas de deformação programada.'
},

/* ---------------- GEOPOLÍTICA E ÉTICA ---------------- */
{
  id: 'P-GE-001', editais: ['prf'], materia: 'Geopolítica e Atualidades', topico: 'prf-geo',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>A faixa de fronteira, considerada área indispensável à segurança nacional, corresponde a uma faixa interna de</p>',
  alternativas: ['50 km','100 km','150 km','200 km','250 km'],
  gabarito: 2,
  explicacao: 'Letra C. São 150 km de largura paralelos à linha divisória terrestre, conforme o art. 20, § 2º, da Constituição. A ocupação e a utilização dessa faixa são reguladas em lei.'
},
{
  id: 'P-GE-002', editais: ['prf'], materia: 'Geopolítica e Atualidades', topico: 'prf-geo',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'facil',
  enunciado: '<p>Julgue o item: o Brasil faz fronteira terrestre com todos os países da América do Sul, exceto Chile e Equador.</p>',
  alternativas: ['Certo','Errado'], gabarito: 0,
  explicacao: 'CERTO. São dez países vizinhos: Uruguai, Argentina, Paraguai, Bolívia, Peru, Colômbia, Venezuela, Guiana, Suriname e Guiana Francesa (território da França).'
},
{
  id: 'P-GE-003', editais: ['prf'], materia: 'Geopolítica e Atualidades', topico: 'prf-geo',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>O Sistema Único de Segurança Pública (SUSP) foi instituído pela</p>',
  alternativas: ['Lei 9.503/1997','Lei 13.675/2018','Lei 12.527/2011','Lei 10.826/2003','Lei 13.869/2019'],
  gabarito: 1,
  explicacao: 'Letra B. A Lei 13.675/2018 criou o SUSP e instituiu a Política Nacional de Segurança Pública e Defesa Social, com foco na integração entre União, estados e municípios.'
},
{
  id: 'P-ET-001', editais: ['prf'], materia: 'Ética e Legislação PRF', topico: 'prf-etica',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'media',
  enunciado: '<p>Julgue o item: na Lei de Acesso à Informação, a publicidade é a regra e o sigilo, a exceção.</p>',
  alternativas: ['Certo','Errado'], gabarito: 0,
  explicacao: 'CERTO. É diretriz expressa da Lei 12.527/2011. As informações classificadas seguem prazos: reservada (5 anos), secreta (15 anos) e ultrassecreta (25 anos, prorrogável uma única vez).'
},
{
  id: 'P-ET-002', editais: ['prf'], materia: 'Ética e Legislação PRF', topico: 'prf-etica',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>Os policiais rodoviários federais, como servidores públicos federais, submetem-se ao regime jurídico da</p>',
  alternativas: ['CLT','Lei 8.112/1990','Lei 9.503/1997','Lei 13.675/2018','Lei 8.429/1992'],
  gabarito: 1,
  explicacao: 'Letra B. A Lei 8.112/1990 é o Regime Jurídico dos servidores públicos civis da União, aplicável também aos policiais rodoviários federais, ao lado do regulamento disciplinar próprio da categoria.'
}

]);
