/* Trilha específica: Banco do Brasil — Escriturário / Agente Comercial (nível médio) */
CONC.addTrilha({
  id: 'bb',
  nome: 'Específico BB',
  subtitulo: 'Escriturário · Agente Comercial · nível médio',
  descricao: 'O Banco do Brasil cobra conhecimentos bancários, matemática financeira, vendas e negociação, atualidades do mercado financeiro, cultura digital e inglês. A banca das últimas edições foi a CESGRANRIO: múltipla escolha com cinco alternativas, sem desconto por erro — nunca deixe questão em branco.',
  dica: 'Conhecimentos bancários + vendas e negociação é onde se decide a prova. E como não há desconto por erro, responda tudo.',
  modulos: [

  {
    id: 'bb-cb-1',
    materia: 'Conhecimentos Bancários',
    titulo: 'Sistema Financeiro Nacional: estrutura e órgãos',
    minutos: 45,
    editais: ['BB'],
    topicos: ['bb-sfn'],
    resumo: `
      <p>O <strong>Sistema Financeiro Nacional (SFN)</strong> tem três níveis:</p>
      <p><strong>1. Órgãos normativos</strong> (fazem as regras, não executam):</p>
      <ul>
        <li><strong>CMN — Conselho Monetário Nacional</strong>: órgão máximo, formula a política da moeda
        e do crédito. Composto por três membros: Ministro da Fazenda (presidente),
        Ministro do Planejamento e Presidente do Banco Central.</li>
        <li><strong>CNSP</strong> (seguros privados) e <strong>CNPC</strong> (previdência complementar fechada).</li>
      </ul>
      <p><strong>2. Supervisores</strong> (fiscalizam e executam):</p>
      <ul>
        <li><strong>BACEN — Banco Central</strong>: autarquia de natureza especial, com autonomia desde a
        LC 179/2021. Executa a política monetária, emite moeda, fiscaliza instituições financeiras, é o
        "banco dos bancos" e o depositário das reservas internacionais. O <strong>COPOM</strong> define
        a taxa <strong>Selic</strong>, meta da política monetária.</li>
        <li><strong>CVM</strong>: fiscaliza o mercado de <em>valores mobiliários</em> (ações, debêntures,
        fundos de investimento, bolsa).</li>
        <li><strong>SUSEP</strong>: seguros, capitalização e previdência aberta.</li>
        <li><strong>PREVIC</strong>: fundos de pensão (previdência fechada).</li>
      </ul>
      <p><strong>3. Operadores</strong>: bancos comerciais, múltiplos, de investimento, cooperativas de
      crédito, sociedades de crédito, financiadoras, corretoras e distribuidoras, B3, seguradoras,
      administradoras de consórcio, instituições de pagamento e as fintechs (SCD e SEP).</p>
      <p><strong>Diferença que mais cai:</strong> banco <em>comercial</em> capta depósitos à vista e cria
      moeda escritural; banco <em>de investimento</em> não capta depósito à vista, trabalha com
      financiamento de médio e longo prazo; banco <em>múltiplo</em> reúne no mínimo duas carteiras,
      sendo uma delas obrigatoriamente comercial ou de investimento.</p>
      <p><strong>Política monetária</strong> — instrumentos do Bacen: taxa Selic (definida pelo COPOM),
      depósito compulsório e operações de mercado aberto (open market). Política expansionista reduz
      juros e aumenta liquidez; contracionista faz o contrário para conter a inflação.</p>
      <p><strong>FGC — Fundo Garantidor de Créditos</strong>: entidade privada que garante até
      R$ 250 mil por CPF por conglomerado, com teto global de R$ 1 milhão a cada 4 anos.
      Cobre poupança, CDB, LCI, LCA e conta corrente — <strong>não</strong> cobre fundos de investimento,
      ações nem títulos públicos.</p>`,
    chaves: [
      'CMN normatiza; Bacen e CVM supervisionam.',
      'COPOM define a Selic; o CMN define a meta de inflação.',
      'Só banco comercial (e múltiplo com carteira comercial) capta depósito à vista.',
      'FGC garante R$ 250 mil por CPF por conglomerado, teto de R$ 1 milhão em 4 anos.',
      'CVM cuida de valores mobiliários; SUSEP, de seguros; PREVIC, de fundos de pensão.'
    ],
    pegadinhas: [
      'O Bacen não define a meta de inflação — quem define é o CMN.',
      'Fundos de investimento não são cobertos pelo FGC.',
      'O CMN é composto por três membros (não é um colegiado grande).'
    ],
    videos: [
      { titulo: 'Estrutura do Sistema Financeiro Nacional — curso BB', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=QYINo30yDvA' },
      { titulo: 'Conhecimentos bancários: SFN — concurso Banco do Brasil', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=Gtw2_tRnnQ8' },
      { titulo: 'Guia completo do Sistema Financeiro Nacional', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=4Z3YhDqOtv4' },
      { titulo: 'Sistema Financeiro Nacional — aula completa', canal: 'Gran Cursos Online', busca: 'sistema financeiro nacional aula completa concurso banco do brasil' },
      { titulo: 'CMN, Bacen, CVM, Susep e Previc', canal: 'Estratégia Concursos', busca: 'cmn bacen cvm susep previc concurso bancario aula' }
    ]
  },

  {
    id: 'bb-cb-2',
    materia: 'Conhecimentos Bancários',
    titulo: 'Produtos e serviços bancários',
    minutos: 50,
    editais: ['BB'],
    topicos: ['bb-produtos'],
    resumo: `
      <p><strong>Contas:</strong> conta corrente (depósito à vista, movimentação livre),
      conta poupança (rendimento no aniversário; regra atual: 70% da Selic + TR quando a Selic
      estiver igual ou abaixo de 8,5% a.a., e 0,5% ao mês + TR quando acima),
      conta salário (não admite depósitos, só o crédito do empregador, com portabilidade gratuita) e
      conta de pagamento (fintechs).</p>
      <p><strong>Crédito:</strong></p>
      <ul>
        <li><strong>Cheque especial</strong>: limite rotativo caro; juros limitados por regra do CMN e
        cobrança de tarifa sobre limite acima de R$ 500.</li>
        <li><strong>CDC / crédito pessoal</strong>: parcelas fixas.</li>
        <li><strong>Consignado</strong>: desconto em folha, juros menores, margem limitada.</li>
        <li><strong>Capital de giro, desconto de duplicatas, antecipação de recebíveis</strong> (pessoa jurídica).</li>
        <li><strong>Financiamento imobiliário</strong> (SFH/SFI) e <strong>leasing</strong> (arrendamento
        mercantil com opção de compra ao final — VRG).</li>
      </ul>
      <p><strong>Cartões</strong>: débito, crédito (rotativo limitado a 30 dias, depois parcelamento
      obrigatório), pré-pago. Atores: portador, emissor, credenciadora (adquirente) e bandeira.</p>
      <p><strong>Consórcio</strong>: autofinanciamento em grupo, sem juros, com taxa de administração;
      contemplação por sorteio ou lance. Fiscalizado pelo <strong>Bacen</strong>.</p>
      <p><strong>Capitalização</strong>: parte do valor vira poupança, parte custeia sorteios;
      é fiscalizada pela <strong>SUSEP</strong> e <strong>não</strong> é investimento.</p>
      <p><strong>Seguros e previdência privada</strong>: PGBL (dedução de até 12% da renda bruta anual
      para quem declara no modelo completo; o imposto incide sobre o total resgatado) e
      VGBL (sem dedução; o imposto incide só sobre o rendimento — indicado para quem faz declaração
      simplificada ou é isento).</p>
      <p><strong>Serviços</strong>: cobrança bancária (boleto), custódia, DOC/TED (TED é no mesmo dia,
      em tempo real), <strong>PIX</strong> (instantâneo, 24 horas, gratuito para pessoa física),
      débito automático, arrecadação de tributos, folha de pagamento, câmbio.</p>`,
    chaves: [
      'Poupança: 70% da Selic + TR quando a Selic ≤ 8,5% a.a.',
      'PGBL deduz na declaração completa; VGBL não deduz e tributa só o rendimento.',
      'Consórcio é fiscalizado pelo Bacen; capitalização, pela SUSEP.',
      'Leasing tem VRG e opção de compra ao final.',
      'Conta salário não aceita depósitos de terceiros.'
    ],
    pegadinhas: [
      'Título de capitalização não é investimento e costuma render menos que a poupança.',
      'O rotativo do cartão é limitado a um período; depois é obrigatório o parcelamento.',
      'PIX é gratuito para pessoa física, mas pode ter tarifa para pessoa jurídica.'
    ],
    videos: [
      { titulo: 'Produtos bancários — concurso Banco do Brasil', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=JpZnOKZslHg' },
      { titulo: 'Produtos bancários — resolução de questões (BB)', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=2u_lJ6fKS4I' },
      { titulo: 'Conhecimentos bancários para o BB — aula 4 (gratuita)', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=Uc_EVDSfvX0' },
      { titulo: 'Produtos e serviços bancários — aula completa', canal: 'Gran Cursos Online', busca: 'produtos e servicos bancarios aula completa concurso banco do brasil' },
      { titulo: 'PGBL x VGBL — diferenças que caem em prova', canal: 'Estratégia Concursos', busca: 'pgbl x vgbl diferencas concurso bancario aula' }
    ]
  },

  {
    id: 'bb-cb-3',
    materia: 'Conhecimentos Bancários',
    titulo: 'Mercado de capitais, renda fixa, renda variável e fundos',
    minutos: 45,
    editais: ['BB'],
    topicos: ['bb-mercado'],
    resumo: `
      <p><strong>Segmentos do mercado financeiro</strong>: monetário (curtíssimo prazo, liquidez),
      de crédito (empréstimos), de capitais (recursos de médio/longo prazo via títulos e ações) e
      cambial (compra e venda de moeda estrangeira).</p>
      <p><strong>Renda fixa</strong> — você empresta dinheiro e sabe a regra de remuneração:</p>
      <ul>
        <li><strong>CDB</strong>: emitido por banco, coberto pelo FGC.</li>
        <li><strong>LCI/LCA</strong>: isentas de IR para pessoa física, cobertas pelo FGC.</li>
        <li><strong>Tesouro Direto</strong>: Selic (pós-fixado, liquidez diária),
        Prefixado (taxa conhecida) e IPCA+ (híbrido, protege da inflação).</li>
        <li><strong>Debêntures</strong>: dívida de empresas; as incentivadas são isentas de IR para PF;
        não têm cobertura do FGC.</li>
      </ul>
      <p><strong>Renda variável</strong>: ações (ON, com voto; PN, com preferência em dividendos),
      FIIs, ETFs, BDRs. Negociadas na <strong>B3</strong>. Ganhos: dividendos (isentos para PF),
      juros sobre capital próprio (tributados) e valorização.
      IR: 15% sobre ganho líquido em operações comuns e 20% em day trade; há isenção para vendas
      de ações até R$ 20 mil no mês (não vale para day trade nem FIIs).</p>
      <p><strong>Fundos de investimento</strong>: condomínio de investidores, com cotas.
      Classificação da CVM: renda fixa, ações, multimercado e cambial.
      Documentos obrigatórios: regulamento, lâmina e formulário de informações complementares.
      <strong>Come-cotas</strong>: antecipação semestral de IR (maio e novembro) em fundos de renda fixa
      e multimercado — fundos de ações não têm come-cotas.</p>
      <p><strong>Tabela regressiva de IR</strong> na renda fixa: 22,5% (até 180 dias), 20% (181 a 360),
      17,5% (361 a 720) e 15% (acima de 720 dias). <strong>IOF</strong> regressivo nos resgates
      feitos em menos de 30 dias.</p>
      <p><strong>Tripé de investimentos</strong>: rentabilidade, liquidez e segurança —
      não existe aplicação que maximize os três ao mesmo tempo. O <strong>perfil do investidor</strong>
      (suitability) é obrigatório: conservador, moderado e arrojado.</p>`,
    chaves: [
      'LCI e LCA são isentas de IR para pessoa física.',
      'Tabela regressiva: quanto mais tempo, menor o IR (mínimo 15%).',
      'Fundos de ações não têm come-cotas.',
      'Ação ON dá direito a voto; PN dá preferência nos dividendos.',
      'Suitability = obrigação de verificar o perfil antes de recomendar.'
    ],
    pegadinhas: [
      'Debênture não tem FGC.',
      'Dividendos são isentos; JCP é tributado em 15% na fonte.',
      'Tesouro Prefixado pode dar prejuízo se vendido antes do vencimento (marcação a mercado).'
    ],
    videos: [
      { titulo: 'Noções de mercado de capitais (edital BB)', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=uCrOJmnaBPQ' },
      { titulo: 'Renda fixa e renda variável — aula atualizada', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=oP7DWMLupAE' },
      { titulo: 'Mercado de capitais — conhecimentos bancários', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=X6OKwNBzbs8' },
      { titulo: 'Mercado de capitais para concursos bancários', canal: 'Gran Cursos Online', busca: 'mercado de capitais concurso bancario aula completa' },
      { titulo: 'Renda fixa: CDB, LCI, LCA e Tesouro Direto', canal: 'Estratégia Concursos', busca: 'renda fixa cdb lci lca tesouro direto concurso bancario' }
    ]
  },

  {
    id: 'bb-mf-1',
    materia: 'Matemática Financeira',
    titulo: 'Juros simples, compostos, descontos e séries',
    minutos: 50,
    editais: ['BB'],
    topicos: ['bb-matfin'],
    resumo: `
      <p><strong>Juros simples</strong>: J = C · i · n e M = C · (1 + i·n). O juro incide sempre sobre o
      capital inicial — o crescimento é linear.</p>
      <p><strong>Juros compostos</strong>: M = C · (1 + i)<sup>n</sup>. Juros sobre juros —
      crescimento exponencial. Em prazos maiores que 1 período, o montante composto é sempre maior que
      o simples; em prazos menores que 1 período, o simples supera o composto.</p>
      <p><strong>Taxas:</strong></p>
      <ul>
        <li><strong>Nominal</strong>: declarada, não considera capitalização (ex.: 12% a.a. capitalizados mensalmente).</li>
        <li><strong>Efetiva</strong>: a que realmente incide no período de capitalização.</li>
        <li><strong>Equivalentes</strong> (juros compostos): (1 + i<sub>a</sub>) = (1 + i<sub>m</sub>)<sup>12</sup>.</li>
        <li><strong>Proporcionais</strong> (juros simples): 12% a.a. = 1% a.m.</li>
        <li><strong>Real × aparente</strong> (Fisher): (1 + i<sub>aparente</sub>) = (1 + i<sub>real</sub>) · (1 + inflação).</li>
      </ul>
      <p><strong>Descontos</strong>:
      <em>simples racional</em> (por dentro): D = N·i·n / (1 + i·n);
      <em>simples comercial</em> (por fora, o mais usado em banco): D = N · i · n.
      O desconto comercial é sempre <strong>maior</strong> que o racional para os mesmos dados.</p>
      <p><strong>Séries uniformes</strong> (prestações iguais): valor presente
      PV = PMT · [1 − (1+i)<sup>−n</sup>] / i. É o que está por trás de financiamento e de
      empréstimo com parcelas fixas.</p>
      <p><strong>Sistemas de amortização</strong>:</p>
      <ul>
        <li><strong>SAC</strong>: amortização constante, prestações <em>decrescentes</em>,
        juros decrescentes. Total de juros menor.</li>
        <li><strong>Price</strong>: prestações <em>constantes</em>, amortização crescente,
        juros decrescentes. Total de juros maior.</li>
        <li><strong>SAM</strong>: média dos dois.</li>
      </ul>`,
    chaves: [
      'Juros simples: linear. Compostos: exponencial.',
      'SAC tem prestação decrescente; Price tem prestação constante.',
      'Desconto comercial (por fora) é maior que o racional (por dentro).',
      'Taxas equivalentes usam potência, taxas proporcionais usam multiplicação.',
      'Taxa real desconta a inflação — não é simples subtração.'
    ],
    pegadinhas: [
      'Taxa nominal de 12% a.a. capitalizada mensalmente equivale a 1% a.m., e a efetiva anual é 12,68%.',
      'Unidade da taxa precisa bater com a unidade do prazo.',
      'No Price, a primeira parcela tem mais juros e menos amortização.'
    ],
    videos: [
      { titulo: 'Matemática financeira: juros simples e compostos (curso grátis BB)', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=GcL8DoaMcSA' },
      { titulo: 'Matemática financeira — juros compostos (aula gratuita)', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=-S7lpn_m34A' },
      { titulo: 'Juros compostos ficou simples — BB', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=Jx0iXAYdBGs' },
      { titulo: 'Matemática financeira do zero para concursos', canal: 'Gran Cursos Online', busca: 'matematica financeira para concursos aula completa juros simples compostos' },
      { titulo: 'Taxas equivalentes, nominal e efetiva', canal: 'Estratégia Concursos', busca: 'taxa nominal efetiva equivalente matematica financeira concurso' }
    ]
  },

  {
    id: 'bb-atu-1',
    materia: 'Atualidades do Mercado Financeiro',
    titulo: 'PIX, Open Finance, ESG e inovação no sistema financeiro',
    minutos: 40,
    editais: ['BB'],
    topicos: ['bb-atualidades'],
    resumo: `
      <p><strong>PIX</strong> (Bacen, 2020): pagamento instantâneo, 24 horas por dia, sete dias por semana.
      Usa chaves (CPF/CNPJ, e-mail, celular, chave aleatória) e QR Code. Funcionalidades:
      PIX Saque e PIX Troco, PIX Cobrança, PIX Automático, PIX Parcelado (produto do banco, não do Bacen)
      e o Mecanismo Especial de Devolução (MED) para casos de fraude.</p>
      <p><strong>Open Finance</strong> (evolução do Open Banking): o cliente é dono dos próprios dados e
      pode autorizar o compartilhamento entre instituições, o que aumenta a concorrência e permite
      ofertas personalizadas. É <strong>opcional</strong> e exige consentimento com prazo determinado.</p>
      <p><strong>Drex</strong>: moeda digital de banco central (CBDC) brasileira, em desenvolvimento
      pelo Bacen, baseada em registro distribuído. Não é criptomoeda especulativa: é o real em
      formato digital programável.</p>
      <p><strong>ESG</strong> (Environmental, Social, Governance): critérios ambientais, sociais e de
      governança usados para avaliar empresas. No setor bancário aparece em crédito sustentável,
      títulos verdes, política de risco socioambiental e relatórios de sustentabilidade.
      A Resolução CMN 4.945 trata da Política de Responsabilidade Social, Ambiental e Climática (PRSAC).</p>
      <p><strong>Outros temas quentes:</strong> inteligência artificial no atendimento e na análise de
      crédito; bancos digitais e fintechs; marketplace bancário e "banking as a service";
      criptoativos e o marco legal (Lei 14.478/2022); LGPD no setor financeiro;
      prevenção à lavagem de dinheiro; inclusão financeira e educação financeira;
      Selic, IPCA e política monetária no ano corrente.</p>
      <p><strong>Como estudar:</strong> acompanhe as notícias do Banco Central e o relatório Focus,
      além de um canal de atualidades do mercado financeiro. A CESGRANRIO costuma cobrar conceito,
      não número exato.</p>`,
    chaves: [
      'PIX é do Banco Central e é gratuito para pessoa física.',
      'Open Finance depende de consentimento do cliente e tem prazo de validade.',
      'Drex é a CBDC brasileira — o real digital.',
      'ESG: ambiental, social e governança; no Brasil, a PRSAC (Resolução CMN 4.945).',
      'MED é o mecanismo de devolução do PIX em caso de fraude.'
    ],
    pegadinhas: [
      'PIX Parcelado é produto do banco (com juros), não uma funcionalidade do Bacen.',
      'Open Finance não é obrigatório para o cliente.',
      'Drex não é criptomoeda descentralizada: é emitido pelo Banco Central.'
    ],
    videos: [
      { titulo: 'Real Digital (Drex) — concurso Banco do Brasil', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=abQJrWuMAkI' },
      { titulo: 'PIX — atualidades do mercado financeiro', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=aI7bFQ3K8i4' },
      { titulo: 'Atualidades do mercado financeiro do zero — aula 1', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=wEBnz5_eaEg' },
      { titulo: 'PIX e Open Finance para concursos bancários', canal: 'Gran Cursos Online', busca: 'pix open finance concurso bancario banco do brasil aula' },
      { titulo: 'Atualidades do mercado financeiro — BB', canal: 'Estratégia Concursos', busca: 'atualidades do mercado financeiro banco do brasil concurso aula' }
    ]
  },

  {
    id: 'bb-vendas-1',
    materia: 'Vendas e Negociação',
    titulo: 'Técnicas de venda, negociação e relacionamento com o cliente',
    minutos: 45,
    editais: ['BB'],
    topicos: ['bb-vendas'],
    resumo: `
      <p><strong>Etapas da venda</strong>: prospecção → abordagem → levantamento de necessidades →
      apresentação da solução → tratamento de objeções → fechamento → pós-venda.
      A CESGRANRIO adora perguntar em que etapa determinada atitude se encaixa.</p>
      <p><strong>Funil de vendas</strong>: topo (atração e descoberta), meio (consideração) e
      fundo (decisão/compra). <strong>Prospecção</strong> pode ser ativa (o banco procura) ou
      passiva (o cliente procura).</p>
      <p><strong>Vender é resolver problema.</strong> Por isso a fase mais importante é o
      <em>levantamento de necessidades</em>, feito com perguntas abertas e escuta ativa.
      Técnica <strong>SPIN</strong>: perguntas de Situação, Problema, Implicação e Necessidade de solução.</p>
      <p><strong>Objeções</strong> não são "não": são pedidos de informação. Método: ouvir sem interromper,
      demonstrar empatia, esclarecer com dados, confirmar se a dúvida foi resolvida e retomar o fechamento.</p>
      <p><strong>Negociação</strong>:</p>
      <ul>
        <li><strong>Ganha-ganha</strong> (integrativa): amplia o bolo, foca em interesses, preserva o relacionamento.</li>
        <li><strong>Ganha-perde</strong> (distributiva): disputa por um valor fixo.</li>
        <li><strong>BATNA/MAPAN</strong>: a melhor alternativa caso o acordo não aconteça — quem tem uma
        boa alternativa negocia com mais poder.</li>
        <li><strong>ZOPA</strong>: zona de possível acordo entre os limites das duas partes.</li>
        <li>Negociação baseada em princípios (Harvard): separar as pessoas do problema; focar em
        interesses, não em posições; criar opções de ganho mútuo; usar critérios objetivos.</li>
      </ul>
      <p><strong>Marketing de relacionamento e CRM</strong>: fidelizar custa menos que conquistar.
      O CRM organiza o histórico do cliente e permite ofertas certas na hora certa
      (<em>cross-selling</em> = vender produto complementar; <em>up-selling</em> = vender versão superior).</p>
      <p><strong>Qualidade no atendimento</strong>: empatia, cortesia, clareza, agilidade, resolução na
      primeira chamada. O <strong>CDC (Lei 8.078/90)</strong> garante informação clara e adequada,
      proíbe <strong>venda casada</strong> e a publicidade enganosa ou abusiva, e assegura o
      <strong>direito de arrependimento em 7 dias</strong> nas compras fora do estabelecimento.
      A <strong>Resolução CMN 4.949/2021</strong> trata do relacionamento com clientes e usuários:
      transparência, ouvidoria e tratamento de reclamações.</p>`,
    chaves: [
      'Levantamento de necessidades vem antes da apresentação da solução.',
      'Objeção é oportunidade: ouvir, entender, esclarecer, confirmar.',
      'BATNA/MAPAN é seu plano B — define seu poder de barganha.',
      'Venda casada é proibida pelo CDC.',
      'Cross-selling é produto complementar; up-selling é a versão superior.'
    ],
    pegadinhas: [
      'Negociação ganha-ganha não significa ceder sempre.',
      'Exigir a contratação de seguro para liberar empréstimo é venda casada.',
      'Direito de arrependimento (7 dias) só vale para contratação fora do estabelecimento.'
    ],
    videos: [
      { titulo: 'Técnicas de vendas e negociação para o BB — aula 1', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=Zs1EnHOYzic' },
      { titulo: 'Vendas e negociação: técnicas de vendas (curso gratuito)', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=dtFlOaTLtFc' },
      { titulo: 'Vendas e negociação — questões CESGRANRIO', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=v6ISBVrp17I' },
      { titulo: 'Técnicas de vendas e negociação para o BB', canal: 'Gran Cursos Online', busca: 'tecnicas de vendas e negociacao banco do brasil concurso aula completa' },
      { titulo: 'Etapas da venda e tratamento de objeções', canal: 'Estratégia Concursos', busca: 'etapas da venda tratamento de objecoes concurso bancario' }
    ]
  },

  {
    id: 'bb-dig-1',
    materia: 'Cultura Digital e Tecnologia',
    titulo: 'Transformação digital, metodologias ágeis, dados e IA',
    minutos: 40,
    editais: ['BB'],
    topicos: ['bb-digital'],
    resumo: `
      <p><strong>Transformação digital</strong> é mudança de modelo de negócio com uso de tecnologia,
      centrada no cliente — não é apenas digitalizar papel. Conceitos cobrados:
      omnicanalidade (canais integrados), jornada do cliente, experiência do usuário (UX),
      cultura de inovação e mentalidade digital (digital mindset).</p>
      <p><strong>Metodologias ágeis</strong>:</p>
      <ul>
        <li><strong>Manifesto Ágil</strong> — quatro valores: indivíduos e interações mais que processos e
        ferramentas; software em funcionamento mais que documentação abrangente; colaboração com o cliente
        mais que negociação de contratos; responder a mudanças mais que seguir um plano.</li>
        <li><strong>Scrum</strong>: papéis (Product Owner, Scrum Master, time de desenvolvimento),
        artefatos (product backlog, sprint backlog, incremento) e eventos (sprint, planning, daily,
        review, retrospective).</li>
        <li><strong>Kanban</strong>: quadro visual, limite de trabalho em progresso (WIP), fluxo contínuo.</li>
        <li><strong>Design thinking</strong>: empatia → definição → ideação → prototipação → teste.</li>
        <li><strong>MVP</strong>: produto mínimo viável para validar rápido com o cliente.</li>
      </ul>
      <p><strong>Dados e IA</strong>: big data (volume, variedade, velocidade, veracidade e valor);
      business intelligence; analytics (descritivo, diagnóstico, preditivo e prescritivo);
      machine learning (o sistema aprende com dados); IA generativa (cria conteúdo);
      uso bancário: escore de crédito, detecção de fraude, chatbots, personalização de oferta.
      Riscos: viés algorítmico, explicabilidade e proteção de dados (LGPD).</p>
      <p><strong>Outros conceitos</strong>: computação em nuvem (IaaS, PaaS, SaaS), API e integração,
      blockchain (registro distribuído e imutável), internet das coisas, cibersegurança
      (phishing, engenharia social, autenticação em dois fatores) e
      <strong>banking as a service</strong>.</p>`,
    chaves: [
      'O Manifesto Ágil valoriza os dois lados — apenas prioriza o da esquerda.',
      'Scrum Master não é chefe: remove impedimentos e facilita o processo.',
      'Kanban limita o trabalho em progresso (WIP).',
      'MVP serve para aprender rápido, não para entregar produto incompleto de qualquer jeito.',
      'Analytics preditivo prevê; prescritivo recomenda ação.'
    ],
    pegadinhas: [
      'Ágil não significa "sem documentação" nem "sem planejamento".',
      'Blockchain não é sinônimo de bitcoin: é a tecnologia de registro.',
      'Transformação digital não é comprar tecnologia: é mudar processo e cultura.'
    ],
    videos: [
      { titulo: 'Os bancos na era digital — concurso BB', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=IkBEqH7XqMw' },
      { titulo: 'Internet banking e mobile banking', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=91Q649deToQ' },
      { titulo: 'Intensivo BB: aula gratuita de informática', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=YGuBypTs_rs' },
      { titulo: 'Cultura digital para o Banco do Brasil', canal: 'Gran Cursos Online', busca: 'cultura digital banco do brasil concurso aula completa' },
      { titulo: 'Metodologias ágeis: Scrum e Kanban', canal: 'Estratégia Concursos', busca: 'metodologias ageis scrum kanban concurso bancario aula' }
    ]
  },

  {
    id: 'bb-ing-1',
    materia: 'Língua Inglesa',
    titulo: 'Reading: estratégias de leitura e vocabulário bancário',
    minutos: 40,
    editais: ['BB'],
    topicos: ['bb-ingles'],
    resumo: `
      <p>A prova de inglês do BB é de <strong>compreensão de texto</strong>. Você não precisa falar
      inglês: precisa localizar informação e entender o sentido geral.</p>
      <p><strong>Estratégias:</strong></p>
      <ul>
        <li><strong>Skimming</strong>: leitura rápida para captar a ideia geral (título, primeira e
        última frase de cada parágrafo).</li>
        <li><strong>Scanning</strong>: varredura para achar um dado específico (número, nome, data).</li>
        <li><strong>Cognatos</strong>: palavras parecidas com o português (<em>bank, credit, investment,
        digital, technology</em>). Cuidado com os <strong>falsos cognatos</strong>:
        <em>actually</em> = na verdade; <em>eventually</em> = finalmente; <em>pretend</em> = fingir;
        <em>parents</em> = pais; <em>library</em> = biblioteca; <em>comprehensive</em> = abrangente;
        <em>college</em> = faculdade; <em>push</em> = empurrar.</li>
        <li><strong>Referência</strong>: descubra a que palavra se referem <em>it, they, this, these,
        which, whose</em> — é a questão mais frequente.</li>
      </ul>
      <p><strong>Conectivos importantes</strong>: <em>however, nevertheless, although, though</em>
      (contraste); <em>therefore, thus, hence</em> (conclusão); <em>moreover, furthermore, besides</em>
      (adição); <em>because, since, as</em> (causa); <em>in order to</em> (finalidade);
      <em>despite / in spite of</em> (concessão + substantivo).</p>
      <p><strong>Vocabulário bancário</strong>: account (conta), checking/current account (conta corrente),
      savings (poupança), loan (empréstimo), mortgage (financiamento imobiliário), interest rate (taxa de
      juros), borrower (tomador) × lender (credor), withdrawal (saque) × deposit (depósito),
      statement (extrato), balance (saldo), overdraft (cheque especial), branch (agência),
      shares/stocks (ações), bond (título de dívida), tax (imposto), fee (tarifa), income (renda),
      revenue (receita), profit (lucro), debt (dívida), assets (ativos) × liabilities (passivos),
      customer (cliente), asset management (gestão de ativos), compliance, disclosure (divulgação).</p>
      <p><strong>Dica de prova:</strong> leia primeiro a pergunta, depois procure a resposta no texto.
      As alternativas que "extrapolam" o texto estão erradas, exatamente como em português.</p>`,
    chaves: [
      'Skimming = ideia geral; scanning = informação específica.',
      'Falsos cognatos derrubam candidato: actually, eventually, pretend, parents.',
      'Questões de referência ("the word it refers to") são as mais comuns.',
      'Despite e in spite of vêm com substantivo ou gerúndio, sem "that".',
      'Vocabulário bancário básico resolve boa parte da prova.'
    ],
    pegadinhas: [
      '"Actually" não é "atualmente" (currently).',
      '"Sensible" é sensato; "sensitive" é sensível.',
      '"Income" é renda; "revenue" é receita da empresa.'
    ],
    videos: [
      { titulo: 'Interpretação de textos em inglês — concurso BB', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=am_ee1mXY7k' },
      { titulo: 'Questões CESGRANRIO de inglês — Banco do Brasil', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=4ljWdxN5eMU' },
      { titulo: 'Inglês: teoria, gramática e exercícios (curso gratuito BB)', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=32HtbGpCG8E' },
      { titulo: 'Inglês para concursos bancários — reading', canal: 'Gran Cursos Online', busca: 'ingles para concursos bancarios interpretacao de texto aula' },
      { titulo: 'Falsos cognatos em inglês para provas', canal: 'Estratégia Concursos', busca: 'falsos cognatos ingles concurso aula' }
    ]
  },

  {
    id: 'bb-comp-1',
    materia: 'Conhecimentos Bancários',
    titulo: 'Compliance, prevenção à lavagem de dinheiro e sigilo bancário',
    minutos: 35,
    editais: ['BB'],
    topicos: ['bb-compliance'],
    resumo: `
      <p><strong>Lavagem de dinheiro (Lei 9.613/1998)</strong> é ocultar a origem ilícita de bens,
      direitos e valores. Três fases clássicas:</p>
      <ol>
        <li><strong>Colocação</strong> (placement): inserção do dinheiro no sistema financeiro
        (depósitos fracionados, compra de bens).</li>
        <li><strong>Ocultação</strong> (layering): sucessivas transferências para apagar o rastro.</li>
        <li><strong>Integração</strong> (integration): o dinheiro volta com aparência legal.</li>
      </ol>
      <p><strong>Deveres das instituições financeiras</strong>: identificar clientes
      (<em>KYC — Know Your Customer</em>), manter cadastro atualizado, registrar operações,
      comunicar ao <strong>COAF</strong> operações suspeitas e as em espécie a partir do valor
      regulamentado — <strong>sem informar o cliente</strong> (proibição de <em>tipping off</em>).
      Deve haver atenção especial a <strong>PEP</strong> (pessoa exposta politicamente).</p>
      <p><strong>Sigilo bancário (LC 105/2001)</strong>: as instituições devem conservar sigilo das
      operações. Não constitui quebra de sigilo: a troca de informações entre instituições para
      cadastro, o fornecimento à Receita Federal de dados de CPMF/movimentação nos termos da lei,
      a comunicação de ilícitos penais às autoridades e o cumprimento de requisição do Judiciário,
      do Ministério Público ou de CPI (nas hipóteses legais).</p>
      <p><strong>Compliance</strong> é o conjunto de práticas para garantir conformidade com leis,
      normas internas e éticas. Pilares: tom da liderança, avaliação de riscos, políticas e
      procedimentos, treinamento, canal de denúncias, monitoramento e auditoria interna.
      Relaciona-se com a <strong>Lei Anticorrupção (12.846/2013)</strong>, que responsabiliza a
      <em>pessoa jurídica</em> de forma objetiva por atos lesivos à Administração Pública.</p>
      <p><strong>Autorregulação bancária (FEBRABAN)</strong> e o <strong>Código de Ética do BB</strong>
      reforçam integridade, combate ao assédio, respeito à concorrência e transparência com o cliente.</p>`,
    chaves: [
      'Fases da lavagem: colocação, ocultação e integração.',
      'O COAF recebe as comunicações de operações suspeitas.',
      'O cliente não pode ser avisado de que foi comunicado (tipping off).',
      'KYC = conheça seu cliente; PEP = pessoa exposta politicamente.',
      'A Lei Anticorrupção responsabiliza objetivamente a pessoa jurídica.'
    ],
    pegadinhas: [
      'A comunicação ao COAF não depende de certeza do crime: basta a suspeita.',
      'Requisição judicial não é quebra ilegal de sigilo.',
      'Compliance não é só jurídico: envolve toda a organização.'
    ],
    videos: [
      { titulo: 'Ética e compliance: lavagem de dinheiro (Lei 9.613/98)', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=5aqBdw2gvN4' },
      { titulo: 'Prevenção à lavagem de dinheiro: Lei 9.613/98', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=Oobjabv9GBc' },
      { titulo: 'Comportamentos éticos e compliance — aula 01', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=xe59Xxkuppg' },
      { titulo: 'Prevenção à lavagem de dinheiro para concursos', canal: 'Gran Cursos Online', busca: 'prevencao a lavagem de dinheiro lei 9613 concurso bancario aula' },
      { titulo: 'Sigilo bancário — LC 105/2001', canal: 'Estratégia Concursos', busca: 'sigilo bancario lc 105 2001 concurso aula' }
    ]
  }

  ]
});
