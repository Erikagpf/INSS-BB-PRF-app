/* Trilha específica: PRF — Policial Rodoviário Federal */
CONC.addTrilha({
  id: 'prf',
  nome: 'Específico PRF',
  subtitulo: 'Policial Rodoviário Federal · nível superior',
  descricao: 'A PRF cobra legislação de trânsito (CTB), direito penal e processual penal, direito administrativo e constitucional, legislação especial, direitos humanos, física aplicada e geopolítica. A banca das últimas edições foi a CEBRASPE: itens de Certo/Errado com desconto para erro, além de prova discursiva, teste físico e demais fases.',
  dica: 'Legislação de Trânsito é a matéria que mais pesa: comece por ela e por Direito Penal. Física e Geopolítica são poucas questões, mas rendem ponto fácil perto do esforço.',
  modulos: [

  {
    id: 'prf-ctb-1',
    materia: 'Legislação de Trânsito',
    titulo: 'CTB: sistema nacional, normas gerais de circulação e veículos',
    minutos: 55,
    editais: ['PRF'],
    topicos: ['prf-ctb-geral'],
    resumo: `
      <p>O <strong>Código de Trânsito Brasileiro — Lei 9.503/1997</strong> é a matéria mais importante
      da prova. Comece pelos conceitos do Anexo I e pelos primeiros artigos.</p>
      <p><strong>Art. 1º</strong>: o trânsito em condições seguras é <strong>direito de todos</strong> e
      dever dos órgãos do Sistema Nacional de Trânsito, que respondem objetivamente por danos causados
      aos cidadãos por ação, omissão ou erro na execução e manutenção de programas, projetos e serviços.</p>
      <p><strong>Sistema Nacional de Trânsito (SNT)</strong>: CONTRAN (órgão máximo normativo e coordenador),
      CETRAN e CONTRANDIFE (recursais estaduais), SENATRAN (órgão máximo executivo da União),
      DNIT, DETRAN, órgãos municipais e a <strong>PRF</strong>, que é órgão executivo de trânsito da
      União com circunscrição sobre as <strong>rodovias e estradas federais</strong>.</p>
      <p><strong>Competências da PRF (art. 20 do CTB)</strong>: cumprir e fazer cumprir a legislação,
      realizar o patrulhamento ostensivo, aplicar e arrecadar multas, fiscalizar o nível de emissão de
      poluentes e ruído, efetuar levantamento de acidentes, credenciar serviços de escolta,
      assegurar a livre circulação nas rodovias federais, e executar operações de policiamento
      preventivo e repressivo relacionadas com crimes.</p>
      <p><strong>Normas gerais de circulação (arts. 26 a 67):</strong></p>
      <ul>
        <li>Circular pelo lado direito, salvo exceções; a ultrapassagem é pela esquerda
        (exceto quando o veículo à frente sinaliza conversão à esquerda).</li>
        <li><strong>Preferências</strong>: veículos de emergência (bombeiros, polícia, ambulância,
        fiscalização de trânsito), quando em serviço de urgência com dispositivos sonoros e luminosos
        acionados, têm livre circulação e prioridade — os demais devem dar passagem encostando à direita.</li>
        <li>Em cruzamento sem sinalização, a preferência é de quem vem pela <strong>direita</strong>
        (em rotatória, de quem já está circulando).</li>
        <li><strong>Velocidade</strong> sem sinalização: vias urbanas — 80 km/h em vias de trânsito rápido,
        60 km/h em arteriais, 40 km/h em coletoras e 30 km/h em locais; rodovias — 110 km/h para
        automóveis, camionetas e motocicletas, 90 km/h para ônibus e micro-ônibus e 80 km/h para os demais;
        estradas (não pavimentadas), 60 km/h.</li>
        <li><strong>Cinto de segurança</strong> é obrigatório para todos os ocupantes; crianças menores de
        10 anos devem ser transportadas no banco traseiro, com dispositivo de retenção adequado.</li>
      </ul>
      <p><strong>Habilitação</strong>: categorias A (motocicleta), B (até 3.500 kg e 8 passageiros),
      C (carga acima de 3.500 kg), D (mais de 8 passageiros) e E (unidade acoplada acima de 6.000 kg).
      A CNH tem validade de 10 anos até 49 anos de idade, 5 anos dos 50 aos 69 e 3 anos a partir de 70.
      O condutor em <strong>permissão para dirigir</strong> (PPD, um ano) não pode cometer infração grave
      ou gravíssima nem ser reincidente em média.</p>`,
    chaves: [
      'A PRF atua nas rodovias e estradas federais (art. 20 do CTB).',
      'Velocidade padrão em rodovia pavimentada, sem sinalização: 110 km/h para automóveis.',
      'Preferência em cruzamento não sinalizado: quem vem pela direita.',
      'Crianças menores de 10 anos vão no banco traseiro com dispositivo adequado.',
      'Trânsito seguro é direito de todos e os órgãos respondem objetivamente.'
    ],
    pegadinhas: [
      'O CONTRAN é normativo; o SENATRAN é executivo — a banca troca os dois.',
      'Veículo de emergência só tem prioridade em serviço de urgência e com os dispositivos acionados.',
      'Ultrapassagem pela direita é permitida quando o veículo da frente sinaliza conversão à esquerda.'
    ],
    videos: [
      { titulo: 'CTB na veia: Sistema Nacional de Trânsito (curso grátis PRF)', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=pDRezG1fV4U' },
      { titulo: 'CTB para iniciantes — aula pré-edital PRF', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=4aQPggqUqxk' },
      { titulo: 'Tudo sobre o CTB em uma aula', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=eF_RfQJ2G_c' },
      { titulo: 'CTB para PRF — aula completa', canal: 'Gran Cursos Online', busca: 'legislacao de transito ctb prf aula completa concurso' },
      { titulo: 'Sistema Nacional de Trânsito e competências', canal: 'Estratégia Concursos', busca: 'sistema nacional de transito competencias ctb concurso prf' }
    ]
  },

  {
    id: 'prf-ctb-2',
    materia: 'Legislação de Trânsito',
    titulo: 'Infrações, penalidades, medidas administrativas e crimes de trânsito',
    minutos: 55,
    editais: ['PRF'],
    topicos: ['prf-ctb-infracoes'],
    resumo: `
      <p><strong>Infrações</strong> (art. 259) são classificadas em:
      leve (3 pontos), média (4 pontos), grave (5 pontos) e gravíssima (7 pontos).</p>
      <p><strong>Suspensão do direito de dirigir por pontos</strong> (após a Lei 14.071/2020):</p>
      <ul>
        <li>20 pontos, se houver 2 ou mais infrações gravíssimas no período de 12 meses;</li>
        <li>30 pontos, se houver 1 infração gravíssima;</li>
        <li>40 pontos, se não houver nenhuma infração gravíssima;</li>
        <li>para condutor com atividade remunerada (EAR), o limite é de 40 pontos, independentemente
        da natureza das infrações.</li>
      </ul>
      <p><strong>Penalidades</strong> (art. 256): advertência por escrito, multa, suspensão do direito de
      dirigir, cassação da CNH, cassação da permissão e frequência obrigatória em curso de reciclagem.
      <strong>Medidas administrativas</strong> (art. 269) são diferentes de penalidade: retenção do
      veículo, remoção, recolhimento da CNH/CRLV, transbordo de excesso de carga, realização de teste de
      alcoolemia e recolhimento de animais na via.</p>
      <p><strong>Multas</strong>: infração leve R$ 88,38; média R$ 130,16; grave R$ 195,23;
      gravíssima R$ 293,47 — esta última pode ser multiplicada (x2, x3, x5, x10, x20, como na
      embriaguez, que é gravíssima multiplicada por 10, e por 20 na reincidência em 12 meses).</p>
      <p><strong>Art. 165 — dirigir sob influência de álcool</strong>: infração gravíssima,
      multa x10, suspensão do direito de dirigir por 12 meses e retenção do veículo.
      <strong>Art. 165-A — recusar o teste do etilômetro</strong>: mesmas penalidades.
      A recusa é infração administrativa, mas não é crime.</p>
      <p><strong>Crimes de trânsito (arts. 291 a 312-B):</strong></p>
      <ul>
        <li><strong>Art. 302 — homicídio culposo na direção</strong>: detenção de 2 a 4 anos e suspensão
        ou proibição de obter a CNH. Se o agente estiver sob influência de álcool ou disputando racha,
        a pena passa a ser de <strong>reclusão de 5 a 8 anos</strong> (§ 3º).</li>
        <li><strong>Art. 303 — lesão corporal culposa</strong>: detenção de 6 meses a 2 anos;
        forma qualificada se houver lesão grave ou gravíssima sob influência de álcool.</li>
        <li><strong>Art. 306 — embriaguez ao volante</strong>: conduzir com capacidade psicomotora alterada.
        Configura-se com 6 decigramas por litro de sangue, 0,3 mg/l no ar alveolar ou por
        sinais de alteração constatados pelo agente (vídeo, testemunhas, exame clínico).
        Pena: detenção de 6 meses a 3 anos, multa e suspensão da CNH.</li>
        <li><strong>Art. 305 — afastar-se do local do acidente</strong> para fugir à responsabilidade.</li>
        <li><strong>Art. 308 — racha</strong>; <strong>art. 309</strong> — dirigir sem habilitação gerando
        perigo de dano; <strong>art. 310</strong> — entregar a direção a pessoa não habilitada.</li>
      </ul>
      <p><strong>Processo</strong>: autuação → notificação da autuação (prazo de 30 dias para expedição)
      → defesa prévia → penalidade → recurso à JARI → recurso ao CETRAN/CONTRANDIFE.</p>`,
    chaves: [
      'Pontuação: leve 3, média 4, grave 5, gravíssima 7.',
      'Suspensão em 20, 30 ou 40 pontos, conforme o número de gravíssimas.',
      'Embriaguez: infração do art. 165 (administrativa) e crime do art. 306 (penal) — respondem juntos.',
      'Recusar o etilômetro é infração gravíssima, mas não é crime.',
      'Medida administrativa (retenção, remoção) não é penalidade.'
    ],
    pegadinhas: [
      'Homicídio culposo com embriaguez: a pena é de reclusão de 5 a 8 anos, não detenção.',
      'Advertência por escrito só cabe em infração leve ou média, se o infrator não for reincidente em 12 meses.',
      'A JARI julga recurso em primeira instância — não é órgão do CONTRAN.'
    ],
    videos: [
      { titulo: 'CTB na veia: infrações e penalidades', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=i0m9ZvpyWko' },
      { titulo: 'CTB na veia: crimes de trânsito', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=nbYtGaGUnB8' },
      { titulo: 'Penalidades e medidas administrativas — pré-edital PRF', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=OO2jx2SHfQo' },
      { titulo: 'Infrações e penalidades no CTB', canal: 'Gran Cursos Online', busca: 'infracoes e penalidades ctb concurso prf aula completa' },
      { titulo: 'Crimes de trânsito — arts. 302 a 312', canal: 'Estratégia Concursos', busca: 'crimes de transito ctb artigo 302 306 concurso prf aula' }
    ]
  },

  {
    id: 'prf-const-1',
    materia: 'Direito Constitucional',
    titulo: 'Direitos fundamentais, organização do Estado e segurança pública (art. 144)',
    minutos: 50,
    editais: ['PRF'],
    topicos: ['prf-const'],
    resumo: `
      <p><strong>Art. 144 — Segurança pública</strong>: dever do Estado, direito e responsabilidade de
      todos, exercida para a preservação da ordem pública e da incolumidade das pessoas e do patrimônio,
      por meio dos órgãos:</p>
      <ol>
        <li>Polícia Federal;</li>
        <li><strong>Polícia Rodoviária Federal</strong> — órgão permanente, organizado e mantido pela União,
        estruturado em carreira, destinado, na forma da lei, ao <strong>patrulhamento ostensivo das
        rodovias federais</strong>;</li>
        <li>Polícia Ferroviária Federal;</li>
        <li>Polícias civis;</li>
        <li>Polícias militares e corpos de bombeiros militares;</li>
        <li>Polícias penais federal, estaduais e distrital.</li>
      </ol>
      <p>As <strong>polícias civis</strong> exercem funções de polícia judiciária e apuração de infrações
      penais, exceto as militares e as de competência da União. Às <strong>polícias militares</strong>
      cabem a polícia ostensiva e a preservação da ordem pública.
      Os <strong>municípios</strong> podem constituir guardas municipais para proteção de seus bens,
      serviços e instalações.</p>
      <p><strong>Direitos fundamentais relevantes para a atividade policial (art. 5º):</strong>
      inviolabilidade de domicílio; vedação à tortura e ao tratamento desumano;
      prisão apenas em flagrante delito ou por ordem escrita e fundamentada de autoridade judiciária
      competente; comunicação imediata da prisão ao juiz e à família;
      direito ao silêncio; assistência de advogado; identificação dos responsáveis pela prisão;
      relaxamento imediato da prisão ilegal; vedação de penas cruéis, de trabalhos forçados,
      de banimento e de morte (salvo guerra declarada);
      crimes inafiançáveis e imprescritíveis: racismo e ação de grupos armados contra a ordem
      constitucional; inafiançáveis e insuscetíveis de graça ou anistia: tortura, tráfico,
      terrorismo e crimes hediondos.</p>
      <p><strong>Organização do Estado</strong>: federação formada pela União, Estados, DF e Municípios,
      todos autônomos. Competências: exclusivas da União (art. 21), privativas legislativas (art. 22 —
      inclui <strong>trânsito e transporte</strong>), comuns (art. 23) e concorrentes (art. 24).
      <strong>Intervenção federal</strong> é excepcional e tem hipóteses taxativas (art. 34).</p>`,
    chaves: [
      'A PRF é órgão permanente da União destinado ao patrulhamento ostensivo das rodovias federais.',
      'Legislar sobre trânsito e transporte é competência privativa da União.',
      'Racismo: inafiançável e imprescritível. Tortura, tráfico, terrorismo e hediondos: inafiançáveis e insuscetíveis de graça ou anistia.',
      'Prisão só em flagrante ou por ordem judicial escrita e fundamentada.',
      'Segurança pública é dever do Estado e responsabilidade de todos.'
    ],
    pegadinhas: [
      'Guarda municipal não é órgão de segurança pública do rol do art. 144 (protege bens, serviços e instalações).',
      'Racismo é imprescritível; tortura e tráfico não são.',
      'A PRF faz patrulhamento ostensivo — atribuição de polícia administrativa e ostensiva, não de polícia judiciária comum.'
    ],
    videos: [
      { titulo: 'Art. 144 da CF: tudo sobre segurança pública', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=Egh-kT4ykMk' },
      { titulo: 'Todas as possíveis questões de segurança pública (art. 144)', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=8hTBQG2SToU' },
      { titulo: 'Artigo 5º da Constituição completo', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=9XDXxP0ACG0' },
      { titulo: 'Segurança pública na CF/88 — art. 144', canal: 'Gran Cursos Online', busca: 'seguranca publica artigo 144 constituicao concurso prf aula' },
      { titulo: 'Direitos fundamentais para carreiras policiais', canal: 'Estratégia Concursos', busca: 'direitos fundamentais carreiras policiais concurso prf aula' }
    ]
  },

  {
    id: 'prf-adm-1',
    materia: 'Direito Administrativo',
    titulo: 'Princípios, poderes, atos, licitações e responsabilidade do Estado',
    minutos: 50,
    editais: ['PRF'],
    topicos: ['prf-adm'],
    resumo: `
      <p>Vale tudo o que está no módulo de Direito Administrativo do INSS (princípios, poderes,
      atos administrativos). Para a PRF, acrescente:</p>
      <p><strong>Organização administrativa</strong>: administração direta (União, Estados, DF,
      Municípios) e indireta (autarquias, fundações públicas, empresas públicas e sociedades de economia
      mista). <em>Descentralização</em> cria pessoa jurídica nova; <em>desconcentração</em> distribui
      competências internamente.</p>
      <p><strong>Responsabilidade civil do Estado</strong> (art. 37, § 6º): <strong>objetiva</strong>,
      na modalidade do risco administrativo — basta conduta, dano e nexo causal, sem necessidade de provar
      culpa. Admite excludentes: culpa exclusiva da vítima, caso fortuito/força maior e fato de terceiro.
      Nas <strong>omissões</strong>, a responsabilidade costuma ser subjetiva (falta do serviço).
      O Estado tem direito de regresso contra o agente que agiu com dolo ou culpa.</p>
      <p><strong>Lei 14.133/2021 (nova lei de licitações)</strong>:</p>
      <ul>
        <li>Modalidades: pregão, concorrência, concurso, leilão e diálogo competitivo.
        (Tomada de preços e convite foram extintos.)</li>
        <li>Critérios de julgamento: menor preço, maior desconto, melhor técnica ou conteúdo artístico,
        técnica e preço, maior lance (leilão) e maior retorno econômico.</li>
        <li>Princípios próprios: planejamento, transparência, segregação de funções, competitividade.</li>
        <li>Contratação direta: dispensa (valor, emergência, calamidade) e inexigibilidade
        (inviabilidade de competição — fornecedor exclusivo, profissional notoriamente especializado,
        artista consagrado).</li>
      </ul>
      <p><strong>Serviços públicos</strong>: princípios da continuidade, generalidade, modicidade,
      cortesia e eficiência. Delegação por concessão, permissão e autorização.</p>
      <p><strong>Controle da Administração</strong>: interno (autotutela), externo
      (Legislativo com auxílio do TCU) e judicial (legalidade, nunca mérito).</p>`,
    chaves: [
      'Responsabilidade do Estado por ato comissivo: objetiva (risco administrativo).',
      'Nova lei de licitações: pregão, concorrência, concurso, leilão e diálogo competitivo.',
      'Inexigibilidade = inviabilidade de competição; dispensa = a lei permite não licitar.',
      'Descentralização cria pessoa jurídica; desconcentração é interna.',
      'O Judiciário controla a legalidade do ato, não o mérito administrativo.'
    ],
    pegadinhas: [
      'Culpa exclusiva da vítima exclui a responsabilidade do Estado; culpa concorrente apenas atenua.',
      'Sociedade de economia mista é pessoa jurídica de direito privado.',
      'Convite e tomada de preços não existem mais na Lei 14.133/2021.'
    ],
    videos: [
      { titulo: 'Poderes administrativos para PRF', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=vGVkLlD0pNI' },
      { titulo: 'Aula completa de atos administrativos', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=S5gLQkG0miY' },
      { titulo: 'Direito Administrativo para concursos do zero', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=53pQJERXK78' },
      { titulo: 'Responsabilidade civil do Estado', canal: 'Gran Cursos Online', busca: 'responsabilidade civil do estado concurso aula completa' },
      { titulo: 'Nova Lei de Licitações 14.133/2021', canal: 'Estratégia Concursos', busca: 'nova lei de licitacoes 14133 2021 concurso aula completa' }
    ]
  },

  {
    id: 'prf-penal-1',
    materia: 'Direito Penal',
    titulo: 'Teoria do crime e crimes em espécie',
    minutos: 55,
    editais: ['PRF'],
    topicos: ['prf-penal'],
    resumo: `
      <p><strong>Princípios</strong>: legalidade (não há crime sem lei anterior que o defina),
      anterioridade, retroatividade da lei mais benéfica, intervenção mínima, lesividade, culpabilidade.</p>
      <p><strong>Conceito analítico de crime</strong>: fato típico + ilícito (antijurídico) + culpável.</p>
      <ul>
        <li><strong>Fato típico</strong>: conduta (dolosa ou culposa), resultado, nexo causal e tipicidade.
        <em>Dolo direto</em> (quer o resultado), <em>dolo eventual</em> (assume o risco),
        <em>culpa</em> (imprudência, negligência ou imperícia) e <em>culpa consciente</em>
        (prevê o resultado, mas acredita que pode evitá-lo).</li>
        <li><strong>Excludentes de ilicitude</strong> (art. 23): estado de necessidade, legítima defesa,
        estrito cumprimento do dever legal e exercício regular de direito.</li>
        <li><strong>Excludentes de culpabilidade</strong>: inimputabilidade (menoridade, doença mental,
        embriaguez completa e acidental), erro de proibição inevitável e coação moral irresistível.</li>
      </ul>
      <p><strong>Legítima defesa</strong> (art. 25): repelir injusta agressão, atual ou iminente, a direito
      seu ou de outrem, usando <strong>moderadamente</strong> os meios necessários.
      Não cabe contra agressão futura ou já cessada (aí seria vingança).</p>
      <p><strong>Iter criminis</strong>: cogitação (não punível), atos preparatórios (em regra não puníveis),
      execução e consumação. <strong>Tentativa</strong> (art. 14, II): iniciada a execução, o crime não se
      consuma por circunstâncias alheias à vontade do agente — pena reduzida de 1 a 2/3.
      <strong>Desistência voluntária</strong> e <strong>arrependimento eficaz</strong>: responde só pelos
      atos já praticados. <strong>Arrependimento posterior</strong>: reparação do dano antes da denúncia,
      em crime sem violência — reduz a pena de 1 a 2/3.</p>
      <p><strong>Crimes que mais caem para a PRF</strong>:</p>
      <ul>
        <li><strong>Contra a pessoa</strong>: homicídio (art. 121), lesão corporal (129), ameaça (147).</li>
        <li><strong>Contra o patrimônio</strong>: furto (155), roubo (157 — com violência ou grave ameaça),
        extorsão (158), receptação (180). Furto de veículo transportado para outro estado ou país é
        qualificado.</li>
        <li><strong>Contra a fé pública</strong>: falsificação de documento público (297),
        falsidade ideológica (299), uso de documento falso (304).</li>
        <li><strong>Contra a Administração Pública</strong>: peculato (312), concussão (316),
        corrupção passiva (317) e ativa (333), prevaricação (319), resistência (329),
        desobediência (330), desacato (331).</li>
      </ul>`,
    chaves: [
      'Crime = fato típico + ilícito + culpável.',
      'Legítima defesa exige agressão atual ou iminente e uso moderado dos meios.',
      'Corrupção passiva é do funcionário público; ativa é do particular.',
      'Roubo tem violência ou grave ameaça; furto, não.',
      'Tentativa reduz a pena de 1 a 2/3.'
    ],
    pegadinhas: [
      'Embriaguez voluntária não exclui a imputabilidade (teoria da actio libera in causa).',
      'Dolo eventual não é culpa consciente: no dolo eventual o agente aceita o resultado.',
      'Estrito cumprimento do dever legal não autoriza excesso — o excesso é punível.'
    ],
    videos: [
      { titulo: 'Teoria do crime — aula esquematizada + resumão e questões', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=VvGblRJCMA0' },
      { titulo: 'Teoria do crime explicada de forma simples — aula completa', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=e43PMgUA5es' },
      { titulo: 'Direito Penal do zero para carreiras policiais', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=M78IiD2M5NY' },
      { titulo: 'Teoria do crime — aula completa', canal: 'Gran Cursos Online', busca: 'teoria do crime fato tipico ilicito culpavel concurso aula completa' },
      { titulo: 'Excludentes de ilicitude e legítima defesa', canal: 'Estratégia Concursos', busca: 'excludentes de ilicitude legitima defesa concurso penal aula' }
    ]
  },

  {
    id: 'prf-proc-1',
    materia: 'Direito Processual Penal',
    titulo: 'Inquérito policial, prisões e provas',
    minutos: 45,
    editais: ['PRF'],
    topicos: ['prf-processo'],
    resumo: `
      <p><strong>Inquérito policial</strong>: procedimento administrativo, inquisitivo, escrito, sigiloso
      e dispensável, destinado a apurar a infração e sua autoria. Não há contraditório pleno.
      Prazos: <strong>10 dias</strong> se o indiciado estiver preso e <strong>30 dias</strong> se solto
      (na Justiça Federal, 15 dias prorrogáveis por mais 15).
      A autoridade policial <strong>não pode arquivar</strong> o inquérito.</p>
      <p><strong>Prisões:</strong></p>
      <ul>
        <li><strong>Em flagrante</strong> (art. 302): próprio (está cometendo ou acabou de cometer),
        impróprio (perseguido logo após) e presumido/ficto (encontrado logo depois com instrumentos ou
        objetos que façam presumir ser o autor). Qualquer do povo <em>pode</em> prender;
        a autoridade policial e seus agentes <strong>devem</strong>.</li>
        <li><strong>Preventiva</strong>: decretada pelo juiz, a requerimento, para garantia da ordem
        pública, da ordem econômica, por conveniência da instrução criminal ou para assegurar a aplicação
        da lei penal. Exige prova da existência do crime e indício suficiente de autoria
        (fumus commissi delicti + periculum libertatis). Não pode ser decretada de ofício pelo juiz.</li>
        <li><strong>Temporária</strong> (Lei 7.960/89): só na fase de inquérito, para crimes do rol legal;
        5 dias prorrogáveis por mais 5 (30 + 30 em crimes hediondos).</li>
        <li><strong>Audiência de custódia</strong>: o preso deve ser apresentado ao juiz em até 24 horas.</li>
      </ul>
      <p><strong>Busca e apreensão</strong>: domiciliar exige mandado judicial, salvo flagrante delito,
      desastre, socorro ou consentimento do morador. Busca <strong>pessoal</strong> independe de mandado
      quando houver <strong>fundada suspeita</strong> de que a pessoa esteja na posse de arma proibida ou
      de objetos que constituam corpo de delito. A busca em <strong>veículo</strong> é equiparada à busca
      pessoal, salvo se o veículo servir de moradia (trailer, cabine-leito de caminhão).</p>
      <p><strong>Provas</strong>: são inadmissíveis as provas ilícitas (art. 5º, LVI, da CF), assim como as
      derivadas delas (teoria dos frutos da árvore envenenada), salvo se houver fonte independente ou
      descoberta inevitável. A confissão é retratável e divisível e não basta sozinha para a condenação.</p>`,
    chaves: [
      'Inquérito: 10 dias (preso) e 30 dias (solto) na Justiça Estadual.',
      'A autoridade policial não pode arquivar inquérito.',
      'Busca pessoal e em veículo dispensam mandado se houver fundada suspeita.',
      'Prisão preventiva não pode ser decretada de ofício pelo juiz.',
      'Audiência de custódia em até 24 horas.'
    ],
    pegadinhas: [
      'Flagrante presumido exige que o agente seja encontrado logo depois com objetos que o liguem ao crime.',
      'Prisão temporária só existe na fase de investigação.',
      'Prova ilícita por derivação pode ser aproveitada se houver fonte independente.'
    ],
    videos: [
      { titulo: 'Aula completa de inquérito policial para concursos', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=MFBv7pOB3hA' },
      { titulo: 'PF/PRF: processo penal — inquérito policial', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=mwjjh9jhLBg' },
      { titulo: 'Inquérito policial esquematizado', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=LKC-WndRbEU' },
      { titulo: 'Inquérito policial — aula completa', canal: 'Gran Cursos Online', busca: 'inquerito policial aula completa concurso processo penal' },
      { titulo: 'Prisão em flagrante, preventiva e temporária', canal: 'Estratégia Concursos', busca: 'prisao em flagrante preventiva temporaria concurso aula completa' }
    ]
  },

  {
    id: 'prf-leg-1',
    materia: 'Legislação Especial',
    titulo: 'Drogas, armas, tortura, abuso de autoridade e crimes ambientais',
    minutos: 50,
    editais: ['PRF'],
    topicos: ['prf-legesp'],
    resumo: `
      <p><strong>Lei de Drogas (11.343/2006)</strong>:</p>
      <ul>
        <li><strong>Art. 28</strong> — porte para consumo pessoal: <em>não gera pena privativa de
        liberdade</em>. As sanções são advertência, prestação de serviços à comunidade e medida educativa.
        Para distinguir do tráfico, o juiz considera a quantidade, o local, as condições da ação,
        as circunstâncias sociais e pessoais e os antecedentes.</li>
        <li><strong>Art. 33</strong> — tráfico: reclusão de 5 a 15 anos e multa; é equiparado a hediondo.
        O § 4º prevê redução de 1/6 a 2/3 para o agente primário, de bons antecedentes, que não se dedique
        a atividades criminosas nem integre organização criminosa (tráfico privilegiado, que o STF
        entendeu não ser hediondo).</li>
        <li><strong>Art. 35</strong> — associação para o tráfico (duas ou mais pessoas, de forma reiterada).</li>
      </ul>
      <p><strong>Estatuto do Desarmamento (10.826/2003)</strong>: <em>posse</em> (dentro de casa ou no
      local de trabalho, art. 12) × <em>porte</em> (fora, art. 14). Posse ou porte de arma de
      <strong>uso restrito</strong> (art. 16) é crime equiparado a hediondo quando envolve arma de uso
      proibido. O comércio ilegal (art. 17) e o tráfico internacional de armas (art. 18) são mais graves.</p>
      <p><strong>Lei de Tortura (9.455/1997)</strong>: constranger alguém com emprego de violência ou
      grave ameaça, causando sofrimento físico ou mental, para obter informação, provocar ação criminosa
      ou por discriminação. Reclusão de 2 a 8 anos, com aumento se cometida por agente público, que
      também perde o cargo e fica interditado para seu exercício pelo dobro do prazo da pena.
      A <strong>omissão</strong> de quem tinha o dever de evitar ou apurar é punida com detenção de 1 a 4 anos.
      A tortura é crime inafiançável e insuscetível de graça ou anistia.</p>
      <p><strong>Lei de Abuso de Autoridade (13.869/2019)</strong>: os crimes exigem
      <strong>dolo específico</strong> — a finalidade de prejudicar outrem, beneficiar a si mesmo ou a
      terceiro, ou por mero capricho ou satisfação pessoal. A divergência na interpretação da lei não
      configura abuso. Exemplos: constranger o preso a exibir-se à curiosidade pública,
      executar captura sem ordem judicial fora das hipóteses legais, invadir imóvel alheio,
      prosseguir com interrogatório de pessoa que optou por ficar em silêncio.</p>
      <p><strong>Crimes ambientais (9.605/1998)</strong>: a pessoa jurídica pode ser responsabilizada
      penalmente. Condutas típicas: maus-tratos a animais, poluição, transporte de produtos perigosos
      sem autorização, transporte irregular de madeira — temas frequentes na fiscalização de rodovias.</p>
      <p><strong>ECA (8.069/1990)</strong>: adolescente (12 a 18 anos) comete <em>ato infracional</em> e
      recebe <em>medida socioeducativa</em>; criança (até 12 anos incompletos) recebe medida de proteção.</p>`,
    chaves: [
      'Porte de droga para consumo pessoal não gera pena de prisão.',
      'Tráfico privilegiado (§ 4º do art. 33) não é hediondo, segundo o STF.',
      'Posse é dentro de casa/trabalho; porte é fora.',
      'Abuso de autoridade exige dolo específico — divergência de interpretação não é crime.',
      'A pessoa jurídica pode responder penalmente por crime ambiental.'
    ],
    pegadinhas: [
      'Tortura por omissão tem pena de detenção de 1 a 4 anos, menor que a da tortura em si.',
      'Adolescente não comete crime: comete ato infracional.',
      'Não existe quantidade legal fixa que separe usuário de traficante.'
    ],
    videos: [
      { titulo: 'Lei de Drogas (11.343/06) — aula gratuita', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=i5lcZyzzP_k' },
      { titulo: 'Estatuto do Desarmamento (10.826/03) — aula gratuita', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=6WqqpOA5qKs' },
      { titulo: 'Lei de Abuso de Autoridade esquematizada (13.869/19)', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=MCW9cviyn0o' },
      { titulo: 'Lei de Drogas para concursos policiais', canal: 'Gran Cursos Online', busca: 'lei de drogas 11343 concurso policial aula completa prf' },
      { titulo: 'Estatuto do Desarmamento', canal: 'Estratégia Concursos', busca: 'estatuto do desarmamento 10826 concurso prf aula completa' }
    ]
  },

  {
    id: 'prf-dh-1',
    materia: 'Direitos Humanos',
    titulo: 'Direitos humanos, cidadania e atuação policial',
    minutos: 35,
    editais: ['PRF'],
    topicos: ['prf-dh'],
    resumo: `
      <p><strong>Características dos direitos humanos</strong>: universalidade, indivisibilidade,
      interdependência, inalienabilidade, imprescritibilidade, irrenunciabilidade, historicidade e
      vedação ao retrocesso. Não são absolutos: podem ser relativizados diante de outros direitos.</p>
      <p><strong>Gerações/dimensões</strong>: 1ª — liberdades individuais e políticas (direitos civis,
      abstenção do Estado); 2ª — direitos sociais, econômicos e culturais (prestação estatal);
      3ª — direitos de solidariedade (meio ambiente, paz, desenvolvimento);
      4ª e 5ª — democracia, informação, bioética, paz (classificação doutrinária).</p>
      <p><strong>DUDH (1948)</strong>: declaração da ONU, não é tratado — tem força de norma costumeira e
      grande peso político. Artigo 1º: "Todos os seres humanos nascem livres e iguais em dignidade e direitos."</p>
      <p><strong>Sistema internacional</strong>: Pacto Internacional dos Direitos Civis e Políticos e
      Pacto dos Direitos Econômicos, Sociais e Culturais (1966);
      <strong>Convenção Americana de Direitos Humanos — Pacto de San José da Costa Rica (1969)</strong>,
      que criou a Comissão e a Corte Interamericana. O Brasil reconhece a jurisdição da Corte.</p>
      <p><strong>Art. 5º, § 3º, da CF</strong>: tratados de direitos humanos aprovados em dois turnos,
      nas duas Casas do Congresso, por 3/5 dos votos, equivalem a <strong>emenda constitucional</strong>
      (ex.: Convenção sobre os Direitos das Pessoas com Deficiência). Os demais tratados de direitos
      humanos têm status <strong>supralegal</strong> (acima da lei, abaixo da Constituição), conforme o STF.</p>
      <p><strong>Uso da força na atividade policial</strong> — princípios internacionais
      (Código de Conduta da ONU e Princípios Básicos sobre o Uso da Força):
      <strong>legalidade, necessidade, proporcionalidade, moderação e conveniência</strong>.
      A arma de fogo é o último recurso, admitida em defesa da vida própria ou de terceiros.
      Toda pessoa detida deve ser tratada com respeito à dignidade; é vedada a tortura em qualquer
      circunstância, inclusive em estado de guerra ou instabilidade política.</p>`,
    chaves: [
      'A DUDH é declaração, não tratado.',
      'Tratado de direitos humanos aprovado por 3/5, em dois turnos, nas duas Casas = emenda constitucional.',
      'Demais tratados de direitos humanos: status supralegal (entendimento do STF).',
      'Uso da força: legalidade, necessidade, proporcionalidade, moderação e conveniência.',
      'A proibição da tortura é absoluta — não admite exceção.'
    ],
    pegadinhas: [
      'Direitos humanos não são absolutos, mas a vedação à tortura é.',
      'Direitos humanos (plano internacional) × direitos fundamentais (positivados na Constituição).',
      'A Corte Interamericana julga Estados, não indivíduos.'
    ],
    videos: [
      { titulo: 'Direitos humanos para concursos em uma aula', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=8LEPdVizEmg' },
      { titulo: 'Bateria de questões PRF: direitos humanos', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=JtiFe97HxuI' },
      { titulo: 'Direitos humanos: uso da força e de arma de fogo', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=yiOx3M5ByEs' },
      { titulo: 'Direitos humanos para concursos policiais', canal: 'Gran Cursos Online', busca: 'direitos humanos para concursos policiais aula completa prf' },
      { titulo: 'DUDH e Pacto de San José', canal: 'Estratégia Concursos', busca: 'declaracao universal direitos humanos pacto de san jose concurso aula' }
    ]
  },

  {
    id: 'prf-fis-1',
    materia: 'Física',
    titulo: 'Física aplicada ao trânsito: cinemática, dinâmica e energia',
    minutos: 45,
    editais: ['PRF'],
    topicos: ['prf-fisica'],
    resumo: `
      <p>A PRF cobra física com aplicação prática em acidentes e frenagem.</p>
      <p><strong>Cinemática</strong>:</p>
      <ul>
        <li>Velocidade média: v = Δs / Δt. Converta km/h em m/s dividindo por 3,6.</li>
        <li>MRU: s = s₀ + v·t.</li>
        <li>MRUV: v = v₀ + a·t ; s = s₀ + v₀t + (a·t²)/2 ;
        <strong>Torricelli</strong>: v² = v₀² + 2·a·Δs (a mais útil em questão de frenagem,
        porque não depende do tempo).</li>
      </ul>
      <p><strong>Dinâmica</strong> — leis de Newton: (1) inércia; (2) F = m·a; (3) ação e reação.
      <strong>Atrito</strong>: F<sub>at</sub> = μ·N. Na frenagem em piso horizontal,
      a desaceleração é a = μ·g, e a distância de frenagem é
      d = v² / (2·μ·g) — ou seja, <strong>dobrar a velocidade quadruplica a distância de parada</strong>.
      Esse é o cálculo que mais aparece na prova.</p>
      <p><strong>Distância de parada</strong> = distância percorrida durante o tempo de reação
      (v · t<sub>reação</sub>) + distância de frenagem.</p>
      <p><strong>Energia e trabalho</strong>: energia cinética E<sub>c</sub> = m·v²/2;
      energia potencial gravitacional E<sub>p</sub> = m·g·h;
      trabalho W = F·d·cos θ; potência P = W/Δt.
      Conservação da energia mecânica na ausência de atrito.</p>
      <p><strong>Quantidade de movimento e colisões</strong>: Q = m·v; o momento linear se conserva em
      colisões. <em>Elástica</em>: conserva energia cinética. <em>Inelástica</em>: não conserva;
      na <em>perfeitamente inelástica</em>, os corpos seguem juntos.
      O <strong>impulso</strong> (I = F·Δt = ΔQ) explica por que airbag e zona de deformação salvam vidas:
      aumentando o tempo da colisão, reduz-se a força.</p>
      <p><strong>Curvas</strong>: na curva, a força de atrito faz o papel de resultante centrípeta
      (F<sub>c</sub> = m·v²/R). Velocidade máxima sem derrapar: v = √(μ·g·R).
      Por isso pista molhada (μ menor) e curva fechada (R menor) exigem velocidade menor.</p>`,
    chaves: [
      'Para converter km/h em m/s, divida por 3,6.',
      'Distância de frenagem: d = v²/(2·μ·g) — cresce com o quadrado da velocidade.',
      'Distância de parada inclui o tempo de reação do motorista.',
      'Airbag aumenta o tempo de colisão e reduz a força (teorema do impulso).',
      'Em curva, a resultante centrípeta é dada pelo atrito: v = √(μ·g·R).'
    ],
    pegadinhas: [
      'Dobrar a velocidade não dobra a distância de frenagem: quadruplica.',
      'Em colisão perfeitamente inelástica conserva-se o momento, mas não a energia cinética.',
      'Massa não altera a distância de frenagem teórica em piso plano (o μ e a velocidade é que mandam).'
    ],
    videos: [
      { titulo: 'Tudo sobre física em uma aula — concurso PRF', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=-u52A4TlN0U' },
      { titulo: 'Física (cinemática) — aula pré-edital PRF', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=1_q3UanChDM' },
      { titulo: 'Física (colisões) — aula pré-edital PRF', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=xhIvX1vaUho' },
      { titulo: 'Física para PRF — cinemática aplicada', canal: 'Gran Cursos Online', busca: 'fisica para prf cinematica aula completa concurso' },
      { titulo: 'Distância de frenagem e atrito', canal: 'Estratégia Concursos', busca: 'distancia de frenagem atrito fisica concurso prf' }
    ]
  },

  {
    id: 'prf-geo-1',
    materia: 'Geopolítica e Atualidades',
    titulo: 'Geopolítica brasileira, fronteiras e segurança nas rodovias',
    minutos: 35,
    editais: ['PRF'],
    topicos: ['prf-geo'],
    resumo: `
      <p><strong>Território e fronteiras</strong>: o Brasil faz fronteira com 10 países
      (todos da América do Sul, exceto Chile e Equador) e tem cerca de 16.900 km de fronteira terrestre.
      A <strong>faixa de fronteira</strong> tem 150 km de largura e é considerada área indispensável à
      segurança nacional. As rotas de tráfico de drogas e armas entram principalmente pelo arco norte e
      pela fronteira com Paraguai e Bolívia — daí a importância da PRF nas rodovias federais.</p>
      <p><strong>Regionalização</strong>: divisão oficial do IBGE em cinco regiões e a divisão geoeconômica
      (Amazônia, Nordeste e Centro-Sul). Principais eixos rodoviários: BR-116 (a mais extensa),
      BR-101 (litorânea), BR-153 (Belém–Brasília / Transbrasiliana), BR-163 (escoamento da soja),
      BR-364 e BR-230 (Transamazônica).</p>
      <p><strong>Temas atuais</strong>: agronegócio e corredores logísticos; desmatamento e crimes
      ambientais; garimpo ilegal e terras indígenas; migração venezuelana e haitiana;
      facções criminosas e domínio de rotas; mudanças climáticas e desastres (enchentes);
      Mercosul e integração sul-americana; BRICS; segurança pública e o SUSP
      (Sistema Único de Segurança Pública, Lei 13.675/2018).</p>
      <p><strong>Estatísticas de trânsito</strong> que costumam aparecer: as principais causas de acidentes
      graves em rodovias federais são excesso de velocidade, ultrapassagem indevida, falta de atenção,
      consumo de álcool e sono/fadiga. Motociclistas são os mais vulneráveis.
      Programas: Década de Ação pela Segurança no Trânsito (ONU), meta de redução de mortes,
      Operação Rodovida (verão e feriados).</p>`,
    chaves: [
      'O Brasil faz fronteira com 10 países — todos, menos Chile e Equador.',
      'A faixa de fronteira tem 150 km de largura.',
      'BR-116 é a rodovia federal mais extensa; BR-163 é o corredor da soja.',
      'SUSP: Sistema Único de Segurança Pública (Lei 13.675/2018).',
      'Excesso de velocidade, ultrapassagem indevida e álcool lideram as causas de acidentes graves.'
    ],
    pegadinhas: [
      'A faixa de fronteira é de 150 km, não de 100 km.',
      'A divisão geoeconômica não coincide com a divisão regional do IBGE.',
      'A PRF atua nas rodovias federais; as estaduais ficam com as polícias rodoviárias estaduais.'
    ],
    videos: [
      { titulo: 'Atualidades e geopolítica — concurso PRF', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=KnMPBaKxfSQ' },
      { titulo: 'Geopolítica: organização do Estado brasileiro (PRF)', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=sbbuSYdFwA0' },
      { titulo: 'História da PRF e geopolítica', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=37VxPJoDXGo' },
      { titulo: 'Geopolítica do Brasil para concursos', canal: 'Gran Cursos Online', busca: 'geopolitica do brasil para concursos aula completa prf' },
      { titulo: 'Fronteiras brasileiras e segurança', canal: 'Estratégia Concursos', busca: 'fronteiras brasileiras faixa de fronteira seguranca concurso prf' }
    ]
  },

  {
    id: 'prf-etica-1',
    materia: 'Ética e Legislação PRF',
    titulo: 'Ética no serviço público e legislação institucional da PRF',
    minutos: 30,
    editais: ['PRF'],
    topicos: ['prf-etica'],
    resumo: `
      <p>Além do <strong>Decreto 1.171/1994</strong> (visto na trilha do INSS) e do <strong>art. 37</strong>
      da Constituição, a PRF tem base normativa própria:</p>
      <ul>
        <li><strong>Art. 144, § 2º, da CF</strong> e <strong>Decreto 1.655/1995</strong>: competências da
        Polícia Rodoviária Federal — patrulhamento ostensivo, fiscalização e policiamento das rodovias
        federais, prevenção e repressão a crimes, escolta de veículos e cargas, colaboração com órgãos de
        segurança e apoio em desastres e calamidades.</li>
        <li><strong>Lei 13.675/2018 (SUSP e Política Nacional de Segurança Pública e Defesa Social)</strong>:
        integra órgãos federais, estaduais e municipais; princípios de proteção dos direitos humanos,
        eficiência, uso comedido da força e resolução pacífica de conflitos.</li>
        <li><strong>Regime disciplinar</strong>: os policiais rodoviários federais são servidores públicos
        federais regidos pela <strong>Lei 8.112/1990</strong>, com regulamento disciplinar próprio.</li>
        <li><strong>Lei 12.527/2011 (Acesso à Informação)</strong>: a publicidade é a regra e o sigilo,
        a exceção; classificações de reservada (5 anos), secreta (15) e ultrassecreta (25).</li>
        <li><strong>Lei 8.429/1992</strong> (improbidade) e <strong>Lei 12.846/2013</strong> (anticorrupção).</li>
      </ul>
      <p><strong>Ética na atividade policial</strong>: imparcialidade no atendimento ao cidadão;
      proibição de discriminação; dever de identificar-se; uso da força apenas quando necessário e de
      forma proporcional; vedação de receber vantagem indevida; dever de comunicar irregularidades;
      preservação do local do acidente e do crime; respeito à dignidade da pessoa abordada,
      inclusive na busca pessoal (que deve, sempre que possível, ser feita por agente do mesmo sexo).</p>`,
    chaves: [
      'Competências da PRF: art. 144, § 2º, da CF e Decreto 1.655/1995.',
      'SUSP foi criado pela Lei 13.675/2018.',
      'Policiais rodoviários federais seguem a Lei 8.112/1990.',
      'Na LAI, a publicidade é a regra e o sigilo, a exceção.',
      'Busca pessoal deve ser feita, sempre que possível, por agente do mesmo sexo.'
    ],
    pegadinhas: [
      'Ultrassecreto: 25 anos (prorrogável uma vez); secreto: 15; reservado: 5.',
      'O uso da força deve ser proporcional — o excesso gera responsabilização penal e administrativa.',
      'Improbidade exige dolo desde a Lei 14.230/2021.'
    ],
    videos: [
      { titulo: 'Decretos 6.029/07 e 1.171/94 — código de ética completo para PRF', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=3VuRyD0sAMk' },
      { titulo: 'Improbidade administrativa — Lei 8.429/92 atualizada', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=QwNcy04oq8I' },
      { titulo: 'Artigo 20 do CTB: competências da PRF', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=UI1AiWYyxnE' },
      { titulo: 'Competências da PRF — art. 144 e Decreto 1.655', canal: 'Gran Cursos Online', busca: 'competencias da prf artigo 144 decreto 1655 concurso' },
      { titulo: 'Lei 13.675/2018 — SUSP', canal: 'Estratégia Concursos', busca: 'lei 13675 2018 susp politica nacional seguranca publica concurso' }
    ]
  }

  ]
});
