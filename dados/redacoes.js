/* Temas de redação / prova discursiva, com o que a banca espera.
   O prompt de correção para a IA é montado pelo app a partir destes campos. */
CONC.addRedacoes([

/* ==================== INSS ==================== */
{
  id: 'red-inss-1', concurso: 'inss', banca: 'Estilo CEBRASPE',
  genero: 'Texto dissertativo',
  titulo: 'Envelhecimento da população e o futuro da previdência',
  linhas: 30, tempoMin: 60,
  motivador: 'O Brasil envelhece em ritmo acelerado: a proporção de pessoas com 60 anos ou mais cresce enquanto a população em idade de trabalhar diminui. Em um regime de repartição, no qual quem trabalha hoje custeia quem já se aposentou, essa mudança pressiona diretamente o equilíbrio financeiro e atuarial do sistema.',
  comando: 'Redija um texto dissertativo a respeito do impacto do envelhecimento populacional sobre o Regime Geral de Previdência Social.',
  aspectos: [
    'o caráter contributivo e solidário do RGPS e o que significa equilíbrio financeiro e atuarial;',
    'ao menos duas consequências do envelhecimento populacional para o custeio da previdência;',
    'duas medidas possíveis de enfrentamento, apontando limites de cada uma.'
  ],
  espera: [
    'Mostrar que o RGPS é contributivo, de filiação obrigatória e organizado em regime de repartição simples.',
    'Citar a razão de dependência: menos contribuintes por beneficiário.',
    'Lembrar a regra do art. 195, § 5º, da CF: nenhum benefício sem fonte de custeio total.',
    'Mencionar a EC 103/2019 (idade mínima, novo cálculo) como resposta já adotada.',
    'Evitar opinião política sem argumento — a banca cobra técnica, não militância.'
  ]
},
{
  id: 'red-inss-2', concurso: 'inss', banca: 'Estilo CEBRASPE',
  genero: 'Texto dissertativo',
  titulo: 'Atendimento digital do INSS e a exclusão dos que não têm acesso',
  linhas: 30, tempoMin: 60,
  motivador: 'A maior parte dos serviços do INSS passou a ser prestada pelo aplicativo e pelo portal Meu INSS. A digitalização reduziu filas e prazos, mas parte do público do instituto é idosa, mora longe e tem pouca familiaridade ou pouco acesso à internet.',
  comando: 'Redija um texto dissertativo sobre os efeitos da digitalização do atendimento previdenciário para o cidadão.',
  aspectos: [
    'os ganhos da digitalização para o segurado e para a Administração;',
    'o risco de exclusão digital de parte do público atendido;',
    'o papel do servidor no atendimento das pessoas que não conseguem usar os canais digitais.'
  ],
  espera: [
    'Relacionar a digitalização com o princípio da eficiência (art. 37 da CF).',
    'Falar de universalidade do atendimento como objetivo da seguridade social.',
    'Citar alternativas concretas: atendimento presencial agendado, telefone 135, apoio de parentes, parceria com prefeituras.',
    'Tratar do dever de cortesia e do dano moral por demora injustificada (Decreto 1.171/94).',
    'Fechar com uma conclusão propositiva, sem repetir a introdução.'
  ]
},
{
  id: 'red-inss-3', concurso: 'inss', banca: 'Estilo CEBRASPE',
  genero: 'Texto dissertativo',
  titulo: 'Ética e impessoalidade no atendimento ao segurado',
  linhas: 25, tempoMin: 50,
  motivador: 'O servidor do INSS decide, todos os dias, sobre o sustento de pessoas em situação de vulnerabilidade. Pressões por favorecimento, curiosidade sobre dados de conhecidos e diferença de tratamento entre usuários são situações concretas do balcão de atendimento.',
  comando: 'Redija um texto dissertativo sobre a importância dos princípios éticos na atuação do servidor público que atende o cidadão.',
  aspectos: [
    'o conteúdo dos princípios da impessoalidade e da moralidade administrativa;',
    'dois exemplos de conduta vedada pelo Código de Ética do servidor público civil federal;',
    'as consequências, para o cidadão e para a instituição, da quebra desses deveres.'
  ],
  espera: [
    'Usar o LIMPE corretamente, sem confundir impessoalidade com indiferença.',
    'Citar o Decreto 1.171/94: decidir entre o honesto e o desonesto, e não só entre o legal e o ilegal.',
    'Mencionar acesso indevido a dados e sigilo (LGPD) como exemplo atual.',
    'Diferenciar a censura da Comissão de Ética das penalidades da Lei 8.112/90.',
    'Manter linguagem formal e impessoal — nada de primeira pessoa do singular.'
  ]
},
{
  id: 'red-inss-4', concurso: 'inss', banca: 'Estilo CEBRASPE',
  genero: 'Texto dissertativo',
  titulo: 'Fraudes e descontos indevidos em benefícios previdenciários',
  linhas: 30, tempoMin: 60,
  motivador: 'Aposentados e pensionistas são alvo frequente de golpes: empréstimos consignados não solicitados, mensalidades associativas descontadas sem autorização e falsos intermediários que cobram para "liberar" benefícios.',
  comando: 'Redija um texto dissertativo sobre a proteção do beneficiário da previdência social contra fraudes e descontos indevidos.',
  aspectos: [
    'por que esse público é especialmente vulnerável;',
    'duas formas de prevenção pelo Estado e duas de proteção pelo próprio beneficiário;',
    'o papel da informação clara prestada pelo servidor.'
  ],
  espera: [
    'Explicar que o INSS não cobra taxa nem pede senha — a orientação vale como medida de prevenção.',
    'Falar em bloqueio de empréstimo consignado e canais oficiais (Meu INSS e 135).',
    'Relacionar o tema com engenharia social e proteção de dados pessoais.',
    'Apontar responsabilidade das instituições financeiras e a atuação dos órgãos de controle.',
    'Concluir com proposta, não com lamento.'
  ]
},
{
  id: 'red-inss-5', concurso: 'inss', banca: 'Estilo CEBRASPE',
  genero: 'Texto dissertativo',
  titulo: 'Previdência e assistência social: duas portas de proteção',
  linhas: 25, tempoMin: 50,
  motivador: 'É comum o cidadão chegar ao balcão pedindo "a aposentadoria do idoso" e sair com a informação de que se trata, na verdade, de um benefício assistencial. A confusão entre previdência e assistência atrapalha o planejamento de vida das famílias.',
  comando: 'Redija um texto dissertativo que explique a diferença entre a previdência social e a assistência social no sistema brasileiro de seguridade.',
  aspectos: [
    'a base constitucional de cada uma e a exigência (ou não) de contribuição;',
    'as características do BPC/LOAS frente às aposentadorias do RGPS;',
    'por que essa distinção importa para o cidadão.'
  ],
  espera: [
    'Apresentar o tripé da seguridade: saúde, previdência e assistência (art. 194).',
    'Deixar claro que previdência é contributiva e de filiação obrigatória (art. 201).',
    'Dizer que o BPC é de um salário mínimo, não gera 13º nem pensão por morte e independe de contribuição.',
    'Usar exemplos concretos sem perder a formalidade.',
    'Cuidar da paragrafação: introdução, dois parágrafos de desenvolvimento e conclusão.'
  ]
},

/* ==================== BANCO DO BRASIL ==================== */
{
  id: 'red-bb-1', concurso: 'bb', banca: 'Estilo CESGRANRIO',
  genero: 'Texto dissertativo-argumentativo',
  titulo: 'Inclusão financeira em um banco cada vez mais digital',
  linhas: 30, tempoMin: 60,
  motivador: 'O PIX, o Open Finance e os aplicativos bancários mudaram a relação das pessoas com o dinheiro. Ao mesmo tempo, parte da população segue sem conta, sem crédito formal e sem familiaridade com os canais digitais.',
  comando: 'Redija um texto dissertativo-argumentativo sobre o papel dos bancos na inclusão financeira da população em um cenário de digitalização acelerada.',
  aspectos: [
    'o que é inclusão financeira e por que ela interessa ao banco, e não só ao cliente;',
    'dois obstáculos concretos enfrentados por quem está fora do sistema;',
    'duas ações que uma instituição financeira pode adotar para ampliar o acesso.'
  ],
  espera: [
    'Citar PIX e conta digital como instrumentos de inclusão, com dados ou exemplos plausíveis.',
    'Falar de educação financeira e de linguagem acessível no atendimento.',
    'Lembrar do papel do Banco Central na agenda de cidadania financeira.',
    'Argumentar em favor do negócio: novos clientes, fidelização, redução de inadimplência.',
    'Tese clara na introdução e retomada na conclusão — a CESGRANRIO valoriza estrutura.'
  ]
},
{
  id: 'red-bb-2', concurso: 'bb', banca: 'Estilo CESGRANRIO',
  genero: 'Texto dissertativo-argumentativo',
  titulo: 'Ética na oferta de produtos e o risco do superendividamento',
  linhas: 30, tempoMin: 60,
  motivador: 'Metas comerciais pressionam o atendimento bancário. Vender o produto errado à pessoa errada resolve o mês e destrói a relação de anos — além de expor a instituição a sanções por venda casada e por falta de adequação ao perfil do cliente.',
  comando: 'Redija um texto dissertativo-argumentativo sobre o equilíbrio entre metas comerciais e responsabilidade no relacionamento com o cliente bancário.',
  aspectos: [
    'o que caracteriza a venda casada e por que ela é vedada;',
    'a importância da adequação do produto ao perfil e à necessidade do cliente;',
    'os efeitos, para o banco, de uma venda mal feita.'
  ],
  espera: [
    'Citar o Código de Defesa do Consumidor (informação clara e vedação da venda casada).',
    'Usar o conceito de suitability e o dever de transparência.',
    'Distinguir cross-selling legítimo de imposição de produto.',
    'Relacionar com reputação, ouvidoria, reclamações e churn.',
    'Evitar generalizações do tipo "todo banco engana o cliente".'
  ]
},
{
  id: 'red-bb-3', concurso: 'bb', banca: 'Estilo CESGRANRIO',
  genero: 'Texto dissertativo-argumentativo',
  titulo: 'ESG e crédito: o banco como indutor de práticas sustentáveis',
  linhas: 30, tempoMin: 60,
  motivador: 'Ao decidir para quem empresta, um banco decide também que atividades vão existir. Critérios ambientais, sociais e de governança passaram a integrar a análise de risco das instituições financeiras brasileiras.',
  comando: 'Redija um texto dissertativo-argumentativo sobre o papel do sistema financeiro na promoção de práticas sustentáveis.',
  aspectos: [
    'o significado da sigla ESG aplicada ao crédito;',
    'como o risco socioambiental afeta o próprio banco;',
    'um exemplo de produto ou política que estimule práticas sustentáveis.'
  ],
  espera: [
    'Explicar ESG sem virar texto publicitário.',
    'Citar a Política de Responsabilidade Social, Ambiental e Climática (Resolução CMN 4.945).',
    'Falar de crédito rural sustentável, títulos verdes ou financiamento de energia limpa.',
    'Tratar do risco reputacional e do risco de inadimplência ligado a passivos ambientais.',
    'Fechar com posicionamento próprio, defendido com argumento.'
  ]
},
{
  id: 'red-bb-4', concurso: 'bb', banca: 'Estilo CESGRANRIO',
  genero: 'Texto dissertativo-argumentativo',
  titulo: 'Inteligência artificial no atendimento bancário',
  linhas: 25, tempoMin: 50,
  motivador: 'Chatbots respondem clientes, algoritmos aprovam crédito e sistemas detectam fraude em tempo real. A automação amplia a escala do atendimento, mas levanta perguntas sobre viés, transparência e uso de dados pessoais.',
  comando: 'Redija um texto dissertativo-argumentativo sobre os benefícios e os cuidados necessários no uso de inteligência artificial pelas instituições financeiras.',
  aspectos: [
    'dois ganhos concretos do uso de IA no banco;',
    'dois riscos, incluindo o tratamento de dados pessoais;',
    'o papel que resta ao profissional humano nesse cenário.'
  ],
  espera: [
    'Citar escore de crédito, prevenção a fraude e personalização da oferta.',
    'Tratar de viés algorítmico e de explicabilidade das decisões.',
    'Mencionar a LGPD e o direito do titular à informação.',
    'Defender a complementaridade: a IA resolve o repetitivo, a pessoa resolve o complexo.',
    'Manter norma culta impecável — em prova discursiva, erro de português custa caro.'
  ]
},
{
  id: 'red-bb-5', concurso: 'bb', banca: 'Estilo CESGRANRIO',
  genero: 'Texto técnico (comunicação interna)',
  titulo: 'Proposta para melhorar a experiência do cliente na agência',
  linhas: 25, tempoMin: 50,
  motivador: 'Você é escriturário de uma agência que vem recebendo reclamações por tempo de espera no atendimento presencial, principalmente em dias de pagamento de benefícios.',
  comando: 'Redija um texto técnico, na forma de comunicação interna dirigida à gerência, apresentando um diagnóstico do problema e propondo medidas para reduzir o tempo de espera e melhorar a experiência do cliente. Não assine com seu nome verdadeiro nem identifique a agência.',
  aspectos: [
    'a descrição objetiva do problema e de suas causas prováveis;',
    'pelo menos três medidas viáveis, com a justificativa de cada uma;',
    'a forma de acompanhar o resultado das medidas propostas.'
  ],
  espera: [
    'Respeitar o gênero: linguagem formal, objetiva, com estrutura de comunicação interna.',
    'Propor coisas executáveis (escalonamento de equipe, orientação para canais digitais, triagem na entrada, agendamento).',
    'Falar em indicadores: tempo médio de espera, número de reclamações, pesquisa de satisfação.',
    'Não personalizar culpa em colegas nem usar tom de reclamação.',
    'Não se identificar — identificação zera a prova discursiva.'
  ]
},

/* ==================== PRF ==================== */
{
  id: 'red-prf-1', concurso: 'prf', banca: 'Estilo CEBRASPE',
  genero: 'Texto dissertativo',
  titulo: 'Fator humano e fiscalização na redução de mortes nas rodovias',
  linhas: 30, tempoMin: 60,
  motivador: 'Excesso de velocidade, ultrapassagem indevida, consumo de álcool e fadiga respondem pela maior parte dos acidentes graves em rodovias federais. A fiscalização ostensiva, por sua vez, atua justamente sobre esses comportamentos.',
  comando: 'Redija um texto dissertativo sobre a relação entre o comportamento do condutor e a atuação fiscalizatória do Estado na redução da mortalidade no trânsito.',
  aspectos: [
    'as principais causas de acidentes graves relacionadas ao fator humano;',
    'de que maneira a fiscalização ostensiva altera esse comportamento;',
    'os limites da fiscalização e o papel da educação para o trânsito.'
  ],
  espera: [
    'Citar o art. 1º do CTB: trânsito seguro é direito de todos e dever dos órgãos do SNT.',
    'Usar dado físico como argumento: a distância de frenagem cresce com o quadrado da velocidade.',
    'Mencionar o art. 165 e o art. 306 (álcool) e a lógica preventiva da punição.',
    'Falar de educação para o trânsito como política de longo prazo, não como substituto da fiscalização.',
    'Estruturar em introdução, desenvolvimento por aspecto e conclusão.'
  ]
},
{
  id: 'red-prf-2', concurso: 'prf', banca: 'Estilo CEBRASPE',
  genero: 'Texto dissertativo',
  titulo: 'Uso da força e respeito aos direitos humanos na atividade policial',
  linhas: 30, tempoMin: 60,
  motivador: 'O policial rodoviário federal aborda pessoas todos os dias, em situações de tensão e incerteza. A Constituição, os tratados internacionais e os princípios da ONU definem os limites do que pode ser feito nessas abordagens.',
  comando: 'Redija um texto dissertativo sobre os limites do uso da força pelo agente de segurança pública.',
  aspectos: [
    'os princípios que regem o uso da força e sua ordem de aplicação;',
    'a relação entre o respeito aos direitos humanos e a eficiência policial;',
    'as consequências jurídicas do excesso.'
  ],
  espera: [
    'Nomear os princípios: legalidade, necessidade, proporcionalidade, moderação e conveniência.',
    'Afirmar que a arma de fogo é o último recurso, para proteção da vida.',
    'Sustentar que direitos humanos não se opõem à segurança pública — são o que legitima a atuação.',
    'Citar a Lei de Abuso de Autoridade (13.869/2019) e a vedação absoluta da tortura.',
    'Evitar tom de defesa corporativa ou de ataque à instituição: a banca quer equilíbrio técnico.'
  ]
},
{
  id: 'red-prf-3', concurso: 'prf', banca: 'Estilo CEBRASPE',
  genero: 'Texto dissertativo',
  titulo: 'Rodovias federais como rota do crime organizado',
  linhas: 30, tempoMin: 60,
  motivador: 'Drogas, armas, mercadorias contrabandeadas e pessoas vítimas de tráfico circulam pelas mesmas estradas que abastecem o país. A malha federal liga as fronteiras aos grandes centros urbanos.',
  comando: 'Redija um texto dissertativo sobre a atuação da Polícia Rodoviária Federal no enfrentamento ao crime organizado nas rodovias federais.',
  aspectos: [
    'por que as rodovias federais são estratégicas para o crime organizado;',
    'as competências da PRF que permitem atuar nesse enfrentamento;',
    'a importância da integração com outros órgãos de segurança.'
  ],
  espera: [
    'Citar o art. 144, § 2º, da CF e o art. 20 do CTB (patrulhamento ostensivo, repressão a crimes).',
    'Falar da faixa de fronteira de 150 km e das rotas de entrada.',
    'Tratar de busca pessoal e veicular com fundada suspeita, dentro da legalidade.',
    'Mencionar o SUSP (Lei 13.675/2018) e a integração entre as forças.',
    'Não transformar o texto em relato de opinião sobre política de drogas.'
  ]
},
{
  id: 'red-prf-4', concurso: 'prf', banca: 'Estilo CEBRASPE',
  genero: 'Texto dissertativo',
  titulo: 'Tecnologia na fiscalização de trânsito: eficiência e privacidade',
  linhas: 25, tempoMin: 50,
  motivador: 'Radares, leitores automáticos de placas, câmeras com reconhecimento facial e sistemas de análise de dados ampliaram a capacidade de fiscalização do Estado nas estradas — e, com ela, a quantidade de dados pessoais coletados.',
  comando: 'Redija um texto dissertativo sobre o uso de tecnologia na fiscalização de trânsito e seus limites.',
  aspectos: [
    'dois ganhos concretos da tecnologia para a segurança viária;',
    'os riscos para a privacidade e para os direitos individuais;',
    'como compatibilizar eficiência e proteção de dados.'
  ],
  espera: [
    'Relacionar a tecnologia com a redução de acidentes e com a localização de veículos roubados.',
    'Citar a LGPD e a base legal de segurança pública, além do princípio da finalidade.',
    'Falar de risco de erro e de viés no reconhecimento facial.',
    'Defender controle, transparência e responsabilização pelo uso dos dados.',
    'Terminar com posição própria, sustentada nos argumentos apresentados.'
  ]
},
{
  id: 'red-prf-5', concurso: 'prf', banca: 'Estilo CEBRASPE',
  genero: 'Texto dissertativo',
  titulo: 'Educação para o trânsito como política pública',
  linhas: 25, tempoMin: 50,
  motivador: 'Multar quem já errou custa caro e chega tarde. A educação para o trânsito aparece no CTB como atribuição dos órgãos do Sistema Nacional de Trânsito, mas costuma receber menos atenção do que a fiscalização.',
  comando: 'Redija um texto dissertativo sobre a importância da educação para o trânsito na construção de uma cultura de segurança viária.',
  aspectos: [
    'o que prevê o CTB sobre educação para o trânsito;',
    'a diferença entre punir e formar o condutor;',
    'duas ações educativas viáveis e o público de cada uma.'
  ],
  espera: [
    'Citar que a educação para o trânsito é direito de todos e dever dos órgãos do SNT.',
    'Argumentar com a lógica preventiva: mudar comportamento sai mais barato que remediar acidente.',
    'Propor ações concretas: campanhas em períodos de maior fluxo, trabalho nas escolas, ações com caminhoneiros e motociclistas.',
    'Citar a Operação Rodovida ou a Década de Ação pela Segurança no Trânsito, da ONU.',
    'Cuidar da coesão entre os parágrafos: use conectivos com sentido correto.'
  ]
}

]);
