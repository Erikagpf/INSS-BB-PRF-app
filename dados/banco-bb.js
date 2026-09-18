/* Banco de questões — específicas do Banco do Brasil (Escriturário/Agente Comercial) */
CONC.addQuestoes([

/* ---------------- SISTEMA FINANCEIRO NACIONAL ---------------- */
{
  id: 'B-CB-001', editais: ['bb'], materia: 'Conhecimentos Bancários', topico: 'bb-sfn',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'facil',
  enunciado: '<p>O órgão máximo do Sistema Financeiro Nacional, responsável por formular a política da moeda e do crédito, é o</p>',
  alternativas: ['Banco Central do Brasil','Conselho Monetário Nacional','Comissão de Valores Mobiliários','Banco do Brasil','Tesouro Nacional'],
  gabarito: 1,
  explicacao: 'Letra B. O CMN é órgão normativo máximo, composto por três membros: Ministro da Fazenda (presidente), Ministro do Planejamento e Presidente do Banco Central. Ele normatiza; quem executa e fiscaliza é o Bacen.'
},
{
  id: 'B-CB-002', editais: ['bb'], materia: 'Conhecimentos Bancários', topico: 'bb-sfn',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>A definição da meta da taxa Selic é atribuição do</p>',
  alternativas: ['CMN','COPOM','CVM','Tesouro Nacional','Ministério da Fazenda'],
  gabarito: 1,
  explicacao: 'Letra B. O Comitê de Política Monetária (COPOM), órgão do Banco Central, define a meta da Selic. A meta de INFLAÇÃO, por sua vez, é fixada pelo CMN — a banca adora trocar os dois.'
},
{
  id: 'B-CB-003', editais: ['bb'], materia: 'Conhecimentos Bancários', topico: 'bb-sfn',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>A fiscalização do mercado de valores mobiliários, incluindo ações e fundos de investimento, compete à</p>',
  alternativas: ['SUSEP','PREVIC','CVM','B3','ANBIMA'],
  gabarito: 2,
  explicacao: 'Letra C. A CVM supervisiona o mercado de capitais. A SUSEP cuida de seguros, capitalização e previdência aberta; a PREVIC, dos fundos de pensão; a B3 é a bolsa e a ANBIMA é entidade de autorregulação.'
},
{
  id: 'B-CB-004', editais: ['bb'], materia: 'Conhecimentos Bancários', topico: 'bb-sfn',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>Sobre a garantia oferecida pelo Fundo Garantidor de Créditos (FGC), é correto afirmar que</p>',
  alternativas: [
    'cobre até R$ 250 mil por CPF por conglomerado financeiro, com teto global de R$ 1 milhão a cada quatro anos.',
    'cobre qualquer valor investido em fundos de investimento.',
    'é garantia oferecida pelo Banco Central com recursos públicos.',
    'não abrange depósitos em conta corrente.',
    'cobre integralmente aplicações em ações e debêntures.'
  ], gabarito: 0,
  explicacao: 'Letra A. O FGC é entidade privada mantida pelas próprias instituições. Cobre conta corrente, poupança, CDB, LCI e LCA. Fundos de investimento, ações, debêntures e títulos públicos ficam de fora.'
},
{
  id: 'B-CB-005', editais: ['bb'], materia: 'Conhecimentos Bancários', topico: 'bb-sfn',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>A principal característica que distingue o banco comercial do banco de investimento é que apenas o banco comercial</p>',
  alternativas: [
    'pode conceder crédito a pessoas jurídicas.',
    'pode captar depósitos à vista, criando moeda escritural.',
    'está sujeito à fiscalização do Banco Central.',
    'pode administrar fundos de investimento.',
    'pode realizar operações de câmbio.'
  ], gabarito: 1,
  explicacao: 'Letra B. A captação de depósitos à vista é exclusiva dos bancos comerciais (e dos múltiplos com carteira comercial). Por isso eles participam do processo de criação de moeda escritural e estão sujeitos ao depósito compulsório.'
},
{
  id: 'B-CB-006', editais: ['bb'], materia: 'Conhecimentos Bancários', topico: 'bb-sfn',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>São instrumentos clássicos de política monetária utilizados pelo Banco Central, EXCETO</p>',
  alternativas: [
    'taxa de juros (Selic).',
    'depósito compulsório.',
    'operações de mercado aberto.',
    'fixação do salário mínimo.',
    'operações de redesconto.'
  ], gabarito: 3,
  explicacao: 'Letra D. A fixação do salário mínimo é decisão de política de renda do Governo Federal, sancionada em lei — não é instrumento de política monetária.'
},

/* ---------------- PRODUTOS E SERVIÇOS ---------------- */
{
  id: 'B-CB-007', editais: ['bb'], materia: 'Conhecimentos Bancários', topico: 'bb-produtos',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>Com relação ao PGBL e ao VGBL, é correto afirmar que</p>',
  alternativas: [
    'no PGBL, o imposto de renda incide apenas sobre os rendimentos no resgate.',
    'no VGBL, é possível deduzir as contribuições até 12% da renda bruta anual.',
    'o PGBL permite dedução de até 12% da renda bruta anual para quem faz declaração completa.',
    'ambos permitem dedução integral das contribuições.',
    'o VGBL é indicado apenas para quem declara no modelo completo.'
  ], gabarito: 2,
  explicacao: 'Letra C. PGBL: dedução de até 12% da renda bruta anual na declaração completa, com IR incidindo sobre o total resgatado. VGBL: sem dedução, com IR só sobre os rendimentos — melhor para isentos e para quem usa a declaração simplificada.'
},
{
  id: 'B-CB-008', editais: ['bb'], materia: 'Conhecimentos Bancários', topico: 'bb-produtos',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>O consórcio é modalidade de autofinanciamento em grupo. Sobre ele, é correto afirmar que</p>',
  alternativas: [
    'cobra juros sobre as parcelas, como um financiamento comum.',
    'é fiscalizado pela SUSEP.',
    'a contemplação pode ocorrer por sorteio ou por lance.',
    'garante a entrega do bem no primeiro mês a todos os consorciados.',
    'não admite a cobrança de taxa de administração.'
  ], gabarito: 2,
  explicacao: 'Letra C. No consórcio não há juros, mas há taxa de administração e fundo de reserva. A contemplação ocorre por sorteio ou lance, e a fiscalização é do Banco Central (não da SUSEP).'
},
{
  id: 'B-CB-009', editais: ['bb'], materia: 'Conhecimentos Bancários', topico: 'bb-produtos',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>Considerando as regras de remuneração da caderneta de poupança, quando a taxa Selic está igual ou abaixo de 8,5% ao ano, o rendimento é de</p>',
  alternativas: [
    '0,5% ao mês mais TR.',
    '70% da Selic mais TR.',
    '80% da Selic, sem TR.',
    '100% do CDI.',
    '0,5% ao mês, sem TR.'
  ], gabarito: 1,
  explicacao: 'Letra B. Com Selic igual ou inferior a 8,5% a.a., a poupança rende 70% da Selic mais TR. Acima desse patamar, volta à regra antiga de 0,5% ao mês mais TR.'
},
{
  id: 'B-CB-010', editais: ['bb'], materia: 'Conhecimentos Bancários', topico: 'bb-produtos',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'facil',
  enunciado: '<p>A operação em que a instituição financeira adquire o bem e o cede ao cliente para uso mediante pagamento de contraprestações, com opção de compra ao final, é o</p>',
  alternativas: ['crédito direto ao consumidor','leasing (arrendamento mercantil)','factoring','consórcio','penhor'],
  gabarito: 1,
  explicacao: 'Letra B. No leasing, a propriedade do bem permanece com a arrendadora durante o contrato, e ao final o arrendatário pode exercer a opção de compra pelo valor residual garantido (VRG).'
},
{
  id: 'B-CB-011', editais: ['bb'], materia: 'Conhecimentos Bancários', topico: 'bb-produtos',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>Sobre o crédito consignado, é correto afirmar que</p>',
  alternativas: [
    'tem taxas de juros geralmente mais altas que as do cheque especial.',
    'o pagamento das parcelas é descontado diretamente da folha ou do benefício, o que reduz o risco e a taxa.',
    'é destinado exclusivamente a pessoas jurídicas.',
    'não possui limite de comprometimento da renda.',
    'dispensa a formalização de contrato.'
  ], gabarito: 1,
  explicacao: 'Letra B. Como a cobrança é feita por desconto em folha ou no benefício, o risco de inadimplência cai e as taxas ficam entre as menores do mercado. Existe limite de margem consignável definido em norma.'
},

/* ---------------- MERCADO DE CAPITAIS ---------------- */
{
  id: 'B-CB-012', editais: ['bb'], materia: 'Conhecimentos Bancários', topico: 'bb-mercado',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>São investimentos de renda fixa isentos de imposto de renda para a pessoa física</p>',
  alternativas: ['CDB e RDB','LCI e LCA','Tesouro Selic e Tesouro IPCA+','debêntures simples e CRI comuns','fundos DI e fundos multimercado'],
  gabarito: 1,
  explicacao: 'Letra B. LCI e LCA são isentas de IR para a pessoa física (assim como CRI, CRA, LIG e debêntures incentivadas). CDB e títulos do Tesouro seguem a tabela regressiva.'
},
{
  id: 'B-CB-013', editais: ['bb'], materia: 'Conhecimentos Bancários', topico: 'bb-mercado',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>Na tabela regressiva de imposto de renda aplicável às aplicações de renda fixa, a alíquota mínima é de</p>',
  alternativas: ['10%','12,5%','15%','17,5%','20%'],
  gabarito: 2,
  explicacao: 'Letra C. As alíquotas são 22,5% (até 180 dias), 20% (181 a 360), 17,5% (361 a 720) e 15% (acima de 720 dias). Quanto maior o prazo, menor o imposto.'
},
{
  id: 'B-CB-014', editais: ['bb'], materia: 'Conhecimentos Bancários', topico: 'bb-mercado',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>O mecanismo de antecipação semestral do imposto de renda em fundos de investimento, conhecido como come-cotas, NÃO se aplica aos fundos</p>',
  alternativas: ['de renda fixa','DI','multimercado','de ações','cambiais'],
  gabarito: 3,
  explicacao: 'Letra D. Os fundos de ações não sofrem come-cotas: a tributação (15%) ocorre apenas no resgate. Renda fixa, DI, cambiais e multimercados têm a antecipação em maio e novembro.'
},
{
  id: 'B-CB-015', editais: ['bb'], materia: 'Conhecimentos Bancários', topico: 'bb-mercado',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>A obrigação de verificar o perfil do investidor antes de recomendar um produto de investimento é conhecida como</p>',
  alternativas: ['compliance','suitability','disclosure','benchmark','hedge'],
  gabarito: 1,
  explicacao: 'Letra B. Suitability é a adequação do produto ao perfil (conservador, moderado ou arrojado), aos objetivos e ao conhecimento do cliente. Recomendar produto incompatível é infração regulatória.'
},
{
  id: 'B-CB-016', editais: ['bb'], materia: 'Conhecimentos Bancários', topico: 'bb-mercado',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'facil',
  enunciado: '<p>As ações preferenciais (PN) caracterizam-se por</p>',
  alternativas: [
    'conferirem direito a voto nas assembleias.',
    'terem preferência na distribuição de dividendos.',
    'serem obrigatoriamente conversíveis em debêntures.',
    'garantirem rentabilidade mínima ao acionista.',
    'serem emitidas apenas por bancos.'
  ], gabarito: 1,
  explicacao: 'Letra B. A ação PN dá preferência na distribuição de dividendos e no reembolso de capital, mas em regra não dá direito a voto. Quem vota é o titular de ações ordinárias (ON).'
},

/* ---------------- MATEMÁTICA FINANCEIRA ---------------- */
{
  id: 'B-MF-001', editais: ['bb'], materia: 'Matemática Financeira', topico: 'bb-matfin',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>Um capital de R$ 1.000,00 foi aplicado a juros compostos de 10% ao mês durante 2 meses. O montante obtido é</p>',
  alternativas: ['R$ 1.100,00','R$ 1.200,00','R$ 1.210,00','R$ 1.221,00','R$ 1.250,00'],
  gabarito: 2,
  explicacao: 'Letra C. M = 1.000 × (1,10)² = 1.000 × 1,21 = R$ 1.210,00. Em juros simples o montante seria R$ 1.200,00 — a diferença de R$ 10,00 é o juro sobre juro.'
},
{
  id: 'B-MF-002', editais: ['bb'], materia: 'Matemática Financeira', topico: 'bb-matfin',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>Uma taxa nominal de 12% ao ano, capitalizada mensalmente, corresponde a uma taxa efetiva mensal de</p>',
  alternativas: ['0,5%','1%','1,2%','12%','1,0068%'],
  gabarito: 1,
  explicacao: 'Letra B. Na taxa nominal, divide-se proporcionalmente pelo número de capitalizações: 12% ÷ 12 = 1% ao mês. Essa é a taxa efetiva do período de capitalização (a efetiva anual seria 12,68%).'
},
{
  id: 'B-MF-003', editais: ['bb'], materia: 'Matemática Financeira', topico: 'bb-matfin',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>No Sistema de Amortização Constante (SAC), ao longo do financiamento, as prestações são</p>',
  alternativas: [
    'constantes, com amortização crescente.',
    'decrescentes, com amortização constante.',
    'crescentes, com juros constantes.',
    'constantes, com juros constantes.',
    'decrescentes, com amortização decrescente.'
  ], gabarito: 1,
  explicacao: 'Letra B. No SAC a amortização é sempre a mesma e os juros caem conforme o saldo devedor diminui, de modo que a prestação decresce. No Price, a prestação é constante e a amortização cresce.'
},
{
  id: 'B-MF-004', editais: ['bb'], materia: 'Matemática Financeira', topico: 'bb-matfin',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>Um capital de R$ 5.000,00 aplicado a juros simples de 2% ao mês durante 6 meses rende juros de</p>',
  alternativas: ['R$ 500,00','R$ 600,00','R$ 630,00','R$ 660,00','R$ 720,00'],
  gabarito: 1,
  explicacao: 'Letra B. J = C × i × n = 5.000 × 0,02 × 6 = R$ 600,00. Em juros simples, o rendimento é sempre calculado sobre o capital inicial.'
},
{
  id: 'B-MF-005', editais: ['bb'], materia: 'Matemática Financeira', topico: 'bb-matfin',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'dificil',
  enunciado: '<p>Se a taxa de juros de uma aplicação foi de 10% no ano e a inflação do período foi de 5%, a taxa real de juros, pela fórmula de Fisher, é aproximadamente</p>',
  alternativas: ['5,00%','4,76%','5,26%','15,50%','10,50%'],
  gabarito: 1,
  explicacao: 'Letra B. (1 + 0,10) = (1 + real) × (1 + 0,05) → 1,10 ÷ 1,05 = 1,0476, ou seja, 4,76%. A taxa real não é a simples diferença entre juros e inflação.'
},

/* ---------------- ATUALIDADES DO MERCADO FINANCEIRO ---------------- */
{
  id: 'B-AT-001', editais: ['bb'], materia: 'Atualidades do Mercado Financeiro', topico: 'bb-atualidades',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'facil',
  enunciado: '<p>O PIX, sistema de pagamentos instantâneos brasileiro, foi criado e é gerido pelo</p>',
  alternativas: ['Banco do Brasil','Banco Central do Brasil','Conselho Monetário Nacional','Tesouro Nacional','FEBRABAN'],
  gabarito: 1,
  explicacao: 'Letra B. O PIX é uma infraestrutura do Banco Central, disponível 24 horas por dia, sete dias por semana, gratuita para pessoas físicas na maior parte das situações.'
},
{
  id: 'B-AT-002', editais: ['bb'], materia: 'Atualidades do Mercado Financeiro', topico: 'bb-atualidades',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>O Open Finance caracteriza-se por</p>',
  alternativas: [
    'obrigar todos os clientes a compartilhar seus dados entre instituições.',
    'permitir o compartilhamento de dados e serviços financeiros entre instituições, mediante consentimento do cliente.',
    'substituir o sistema de pagamentos instantâneos.',
    'ser um sistema exclusivo de bancos públicos.',
    'eliminar a necessidade de autenticação do usuário.'
  ], gabarito: 1,
  explicacao: 'Letra B. O princípio central é que os dados pertencem ao cliente. O compartilhamento é voluntário, tem finalidade e prazo determinados e pode ser revogado a qualquer momento.'
},
{
  id: 'B-AT-003', editais: ['bb'], materia: 'Atualidades do Mercado Financeiro', topico: 'bb-atualidades',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>O Drex, projeto conduzido pelo Banco Central, corresponde a</p>',
  alternativas: [
    'uma criptomoeda privada emitida por bancos comerciais.',
    'a moeda digital de banco central brasileira (CBDC).',
    'um novo sistema de compensação de cheques.',
    'um índice de inflação setorial.',
    'um fundo garantidor de investimentos digitais.'
  ], gabarito: 1,
  explicacao: 'Letra B. O Drex é a versão digital do real emitida pelo Banco Central, com uso de tecnologia de registro distribuído e possibilidade de contratos programáveis. Não é criptomoeda descentralizada.'
},
{
  id: 'B-AT-004', editais: ['bb'], materia: 'Atualidades do Mercado Financeiro', topico: 'bb-atualidades',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>No contexto do PIX, o Mecanismo Especial de Devolução (MED) serve para</p>',
  alternativas: [
    'parcelar transferências de alto valor.',
    'devolver recursos em casos de fraude ou falha operacional.',
    'converter reais em moeda estrangeira.',
    'cadastrar chaves aleatórias.',
    'limitar transferências noturnas.'
  ], gabarito: 1,
  explicacao: 'Letra B. O MED permite que a instituição do pagador solicite a devolução dos valores quando há fundada suspeita de fraude ou falha, dentro dos prazos definidos pelo Banco Central.'
},

/* ---------------- VENDAS E NEGOCIAÇÃO ---------------- */
{
  id: 'B-VN-001', editais: ['bb'], materia: 'Vendas e Negociação', topico: 'bb-vendas',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>Em uma negociação, a melhor alternativa disponível caso o acordo não seja fechado é conhecida como</p>',
  alternativas: ['ZOPA','BATNA (MAPAN)','benchmark','rapport','follow-up'],
  gabarito: 1,
  explicacao: 'Letra B. BATNA (Best Alternative To a Negotiated Agreement), em português MAPAN, é o plano B. Quanto melhor a alternativa, maior o poder de barganha. ZOPA é a zona de possível acordo entre as partes.'
},
{
  id: 'B-VN-002', editais: ['bb'], materia: 'Vendas e Negociação', topico: 'bb-vendas',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>Um cliente que procura o banco para contratar um empréstimo é informado de que a liberação depende da contratação de um seguro. Essa prática caracteriza</p>',
  alternativas: [
    'up-selling, permitido pelo CDC.',
    'venda casada, vedada pelo Código de Defesa do Consumidor.',
    'cross-selling, prática recomendada.',
    'suitability, exigida pela regulação.',
    'negociação integrativa.'
  ], gabarito: 1,
  explicacao: 'Letra B. Condicionar o fornecimento de um produto à aquisição de outro é venda casada, expressamente proibida pelo art. 39, I, do CDC. Oferecer o seguro como opção, sem condicionar, seria cross-selling legítimo.'
},
{
  id: 'B-VN-003', editais: ['bb'], materia: 'Vendas e Negociação', topico: 'bb-vendas',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>Na etapa de tratamento de objeções, a conduta mais adequada do profissional de vendas é</p>',
  alternativas: [
    'interromper o cliente para corrigir sua percepção imediatamente.',
    'ignorar a objeção e reforçar os benefícios do produto.',
    'ouvir integralmente, demonstrar empatia, esclarecer com informações objetivas e confirmar o entendimento.',
    'oferecer desconto imediato para encerrar a discussão.',
    'encaminhar o cliente a outro atendente.'
  ], gabarito: 2,
  explicacao: 'Letra C. Objeção é sinal de interesse e pedido de informação. A sequência recomendada é ouvir, acolher, esclarecer com dados e confirmar se a dúvida foi resolvida antes de retomar o fechamento.'
},
{
  id: 'B-VN-004', editais: ['bb'], materia: 'Vendas e Negociação', topico: 'bb-vendas',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'facil',
  enunciado: '<p>Oferecer um cartão de crédito a um cliente que já possui conta corrente no banco é exemplo de</p>',
  alternativas: ['cross-selling','up-selling','downgrade','churn','pós-venda'],
  gabarito: 0,
  explicacao: 'Letra A. Cross-selling (venda cruzada) é a oferta de um produto complementar. Up-selling seria oferecer uma versão superior do mesmo produto, como um cartão de categoria mais alta.'
},
{
  id: 'B-VN-005', editais: ['bb'], materia: 'Vendas e Negociação', topico: 'bb-vendas',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>Segundo o método de negociação baseado em princípios (Escola de Harvard), um dos pilares é</p>',
  alternativas: [
    'focar nas posições declaradas, não nos interesses.',
    'separar as pessoas do problema.',
    'evitar critérios objetivos para não limitar a barganha.',
    'buscar sempre o resultado ganha-perde.',
    'manter uma única opção de acordo sobre a mesa.'
  ], gabarito: 1,
  explicacao: 'Letra B. Os quatro pilares são: separar as pessoas do problema; concentrar-se em interesses, e não em posições; criar opções de ganho mútuo; e usar critérios objetivos.'
},

/* ---------------- CULTURA DIGITAL ---------------- */
{
  id: 'B-CD-001', editais: ['bb'], materia: 'Cultura Digital e Tecnologia', topico: 'bb-digital',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>No framework Scrum, o responsável por maximizar o valor do produto e gerenciar o backlog é o</p>',
  alternativas: ['Scrum Master','Product Owner','time de desenvolvimento','gerente de projetos','stakeholder'],
  gabarito: 1,
  explicacao: 'Letra B. O Product Owner prioriza o backlog e representa a visão de negócio. O Scrum Master é facilitador e remove impedimentos; o time de desenvolvimento é autogerenciável.'
},
{
  id: 'B-CD-002', editais: ['bb'], materia: 'Cultura Digital e Tecnologia', topico: 'bb-digital',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>O Manifesto Ágil valoriza</p>',
  alternativas: [
    'processos e ferramentas mais que indivíduos e interações.',
    'documentação abrangente mais que software em funcionamento.',
    'responder a mudanças mais que seguir um plano.',
    'negociação de contratos mais que colaboração com o cliente.',
    'planejamento detalhado mais que entregas incrementais.'
  ], gabarito: 2,
  explicacao: 'Letra C. O manifesto reconhece valor nos dois lados, mas prioriza o da esquerda: indivíduos e interações, software funcionando, colaboração com o cliente e resposta a mudanças.'
},
{
  id: 'B-CD-003', editais: ['bb'], materia: 'Cultura Digital e Tecnologia', topico: 'bb-digital',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>A análise de dados que responde à pergunta "o que provavelmente vai acontecer?" é classificada como</p>',
  alternativas: ['descritiva','diagnóstica','preditiva','prescritiva','exploratória'],
  gabarito: 2,
  explicacao: 'Letra C. Descritiva mostra o que aconteceu; diagnóstica explica por quê; preditiva projeta o que deve acontecer; prescritiva recomenda a melhor ação a tomar.'
},
{
  id: 'B-CD-004', editais: ['bb'], materia: 'Cultura Digital e Tecnologia', topico: 'bb-digital',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'facil',
  enunciado: '<p>No método Kanban, a limitação do WIP (work in progress) tem como objetivo principal</p>',
  alternativas: [
    'aumentar o número de tarefas iniciadas simultaneamente.',
    'reduzir o trabalho em andamento para melhorar o fluxo e reduzir gargalos.',
    'eliminar a necessidade de priorização.',
    'substituir as reuniões de equipe.',
    'medir a produtividade individual de cada membro.'
  ], gabarito: 1,
  explicacao: 'Letra B. Limitar o trabalho em progresso evita que tudo comece e nada termine: o foco passa a ser finalizar itens, o que melhora o fluxo e revela os gargalos do processo.'
},

/* ---------------- INGLÊS ---------------- */
{
  id: 'B-EN-001', editais: ['bb'], materia: 'Língua Inglesa', topico: 'bb-ingles',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<div class="texto-apoio">"Digital banking has expanded access to financial services. However, many customers still lack the digital skills required to use these tools safely."</div><p>The word "However" introduces an idea of</p>',
  alternativas: ['addition','contrast','conclusion','purpose','condition'],
  gabarito: 1,
  explicacao: 'Letra B. "However" (porém, no entanto) marca contraste: o texto reconhece o avanço e, em seguida, apresenta a limitação. Conectivos de adição seriam "moreover" ou "furthermore".'
},
{
  id: 'B-EN-002', editais: ['bb'], materia: 'Língua Inglesa', topico: 'bb-ingles',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>In the sentence "The bank charges a monthly fee for this account", the word "fee" means</p>',
  alternativas: ['lucro','tarifa','multa','imposto','saldo'],
  gabarito: 1,
  explicacao: 'Letra B. "Fee" é tarifa ou taxa de serviço. Lucro é "profit", multa é "fine" ou "penalty", imposto é "tax" e saldo é "balance".'
},
{
  id: 'B-EN-003', editais: ['bb'], materia: 'Língua Inglesa', topico: 'bb-ingles',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>Assinale a opção que apresenta a tradução CORRETA do falso cognato destacado em "She was actually the first customer of the day".</p>',
  alternativas: ['atualmente','na verdade','eventualmente','realmente rápido','anualmente'],
  gabarito: 1,
  explicacao: 'Letra B. "Actually" significa "na verdade", "de fato". Para dizer "atualmente" usa-se "currently" ou "nowadays". É um dos falsos cognatos mais cobrados.'
},
{
  id: 'B-EN-004', editais: ['bb'], materia: 'Língua Inglesa', topico: 'bb-ingles',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<div class="texto-apoio">"Borrowers must be aware of the total cost of the loan before signing the contract."</div><p>In the text, "Borrowers" refers to people who</p>',
  alternativas: ['lend money','take out a loan','work at the bank','invest in stocks','audit contracts'],
  gabarito: 1,
  explicacao: 'Letra B. "Borrower" é quem toma emprestado (tomador). Quem empresta é o "lender" (credor). Cuidado: a troca entre esses dois termos é pegadinha frequente.'
},

/* ---------------- COMPLIANCE E PLD ---------------- */
{
  id: 'B-CP-001', editais: ['bb'], materia: 'Conhecimentos Bancários', topico: 'bb-compliance',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>As três fases clássicas do processo de lavagem de dinheiro são</p>',
  alternativas: [
    'colocação, ocultação e integração.',
    'captação, aplicação e resgate.',
    'origem, destino e conversão.',
    'depósito, transferência e saque.',
    'identificação, registro e comunicação.'
  ], gabarito: 0,
  explicacao: 'Letra A. Colocação (inserção do dinheiro no sistema), ocultação (sucessivas movimentações para apagar o rastro) e integração (retorno dos recursos com aparência lícita).'
},
{
  id: 'B-CP-002', editais: ['bb'], materia: 'Conhecimentos Bancários', topico: 'bb-compliance',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>Ao identificar uma operação suspeita de lavagem de dinheiro, a instituição financeira deve</p>',
  alternativas: [
    'comunicar o fato ao COAF, sem dar ciência ao cliente.',
    'comunicar o cliente antes de qualquer providência.',
    'encerrar imediatamente a conta e devolver os valores.',
    'aguardar decisão judicial antes de qualquer comunicação.',
    'informar apenas a Receita Federal.'
  ], gabarito: 0,
  explicacao: 'Letra A. A comunicação vai ao COAF e não depende de certeza do crime — basta a suspeita. Avisar o cliente é vedado (tipping off), pois comprometeria a investigação.'
},
{
  id: 'B-CP-003', editais: ['bb'], materia: 'Conhecimentos Bancários', topico: 'bb-compliance',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'facil',
  enunciado: '<p>A sigla KYC, usada nas políticas de prevenção à lavagem de dinheiro, significa</p>',
  alternativas: [
    'Keep Your Capital.',
    'Know Your Customer.',
    'Key Yield Control.',
    'Knowledge Yearly Check.',
    'Know Your Competitor.'
  ], gabarito: 1,
  explicacao: 'Letra B. "Conheça seu cliente" é o dever de identificar, qualificar e manter atualizado o cadastro, avaliando a compatibilidade entre as movimentações e a capacidade financeira declarada.'
},
{
  id: 'B-CP-004', editais: ['bb'], materia: 'Conhecimentos Bancários', topico: 'bb-compliance',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>Sobre o sigilo bancário previsto na LC 105/2001, é correto afirmar que</p>',
  alternativas: [
    'é absoluto, não admitindo qualquer exceção.',
    'não se aplica a contas de pessoas jurídicas.',
    'não é violado quando há requisição judicial nas hipóteses legais.',
    'pode ser quebrado por qualquer servidor público mediante justificativa.',
    'impede a comunicação de ilícitos penais às autoridades competentes.'
  ], gabarito: 2,
  explicacao: 'Letra C. O sigilo é a regra, mas cede diante de ordem judicial e de outras hipóteses legais, como a comunicação de ilícitos penais e as requisições de CPI nos termos da lei.'
}

]);
