/* Banco de questões — específicas do INSS (Técnico do Seguro Social) */
CONC.addQuestoes([

/* ---------------- DIREITO PREVIDENCIÁRIO: SEGURADOS E CUSTEIO ---------------- */
{
  id: 'I-PR-001', editais: ['inss'], materia: 'Direito Previdenciário', topico: 'prev-segurados',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'media',
  enunciado: '<p>Julgue o item: o segurado facultativo é aquele maior de 16 anos de idade que se filia ao RGPS mediante contribuição, desde que não exerça atividade remunerada que o enquadre como segurado obrigatório.</p>',
  alternativas: ['Certo','Errado'], gabarito: 0,
  explicacao: 'CERTO. São exemplos a dona ou o dono de casa, o estudante e o desempregado. Se passar a exercer atividade remunerada, deixa de ser facultativo e vira segurado obrigatório.'
},
{
  id: 'I-PR-002', editais: ['inss'], materia: 'Direito Previdenciário', topico: 'prev-segurados',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>São segurados obrigatórios do Regime Geral de Previdência Social, EXCETO</p>',
  alternativas: [
    'o empregado.',
    'o trabalhador avulso.',
    'o contribuinte individual.',
    'o segurado especial.',
    'o estudante maior de 16 anos que não exerce atividade remunerada.'
  ], gabarito: 4,
  explicacao: 'Letra E. O estudante que não exerce atividade remunerada pode filiar-se como segurado FACULTATIVO. As demais categorias listadas são todas de filiação obrigatória.'
},
{
  id: 'I-PR-003', editais: ['inss'], materia: 'Direito Previdenciário', topico: 'prev-segurados',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'media',
  enunciado: '<p>Julgue o item: o microempreendedor individual (MEI) é enquadrado como contribuinte individual perante o RGPS.</p>',
  alternativas: ['Certo','Errado'], gabarito: 0,
  explicacao: 'CERTO. O MEI, o autônomo, o empresário e o motorista de aplicativo são contribuintes individuais. Isso importa porque a carência do salário-maternidade dessa categoria é de 10 contribuições.'
},
{
  id: 'I-PR-004', editais: ['inss'], materia: 'Direito Previdenciário', topico: 'prev-segurados',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>Quanto aos dependentes do segurado, é correto afirmar que</p>',
  alternativas: [
    'a existência de dependente de qualquer classe não exclui as demais.',
    'os pais concorrem em igualdade com o cônjuge.',
    'a dependência econômica do cônjuge e dos filhos menores de 21 anos é presumida.',
    'o irmão maior de 21 anos e capaz é dependente de segunda classe.',
    'o companheiro em união estável não é considerado dependente.'
  ], gabarito: 2,
  explicacao: 'Letra C. Na primeira classe (cônjuge, companheiro e filho não emancipado menor de 21 anos, inválido ou com deficiência) a dependência econômica é presumida. Nas classes dos pais e dos irmãos, precisa ser comprovada — e a existência de dependente de uma classe exclui as seguintes.'
},
{
  id: 'I-PR-005', editais: ['inss'], materia: 'Direito Previdenciário', topico: 'prev-custeio',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'media',
  enunciado: '<p>Julgue o item: nenhum benefício ou serviço da seguridade social poderá ser criado, majorado ou estendido sem a correspondente fonte de custeio total.</p>',
  alternativas: ['Certo','Errado'], gabarito: 0,
  explicacao: 'CERTO. É a regra da contrapartida, prevista no art. 195, § 5º, da Constituição. Garante o equilíbrio financeiro e atuarial do sistema.'
},
{
  id: 'I-PR-006', editais: ['inss'], materia: 'Direito Previdenciário', topico: 'prev-custeio',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>A seguridade social é financiada por toda a sociedade. NÃO constitui fonte de custeio prevista no art. 195 da Constituição a contribuição</p>',
  alternativas: [
    'do empregador sobre a folha de salários.',
    'do trabalhador e demais segurados.',
    'sobre a receita de concursos de prognósticos.',
    'do importador de bens ou serviços do exterior.',
    'incidente sobre as aposentadorias e pensões pagas pelo RGPS.'
  ], gabarito: 4,
  explicacao: 'Letra E. A Constituição veda expressamente a incidência de contribuição sobre aposentadoria e pensão concedidas pelo Regime Geral de Previdência Social.'
},
{
  id: 'I-PR-007', editais: ['inss'], materia: 'Direito Previdenciário', topico: 'prev-custeio',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'dificil',
  enunciado: '<p>Julgue o item: para o segurado obrigatório, a filiação ao RGPS decorre automaticamente do exercício de atividade remunerada, independentemente de inscrição.</p>',
  alternativas: ['Certo','Errado'], gabarito: 0,
  explicacao: 'CERTO. Filiação é o vínculo jurídico e, no caso do segurado obrigatório, nasce com o exercício da atividade. A inscrição é apenas o ato formal de cadastro. Para o facultativo, porém, a filiação depende de inscrição e do primeiro pagamento.'
},

/* ---------------- DIREITO PREVIDENCIÁRIO: BENEFÍCIOS ---------------- */
{
  id: 'I-PR-008', editais: ['inss'], materia: 'Direito Previdenciário', topico: 'prev-beneficios',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>São benefícios que independem de carência, EXCETO</p>',
  alternativas: [
    'pensão por morte.',
    'auxílio-acidente.',
    'salário-família.',
    'auxílio-reclusão.',
    'salário-maternidade da segurada empregada.'
  ], gabarito: 3,
  explicacao: 'Letra D. O auxílio-reclusão exige carência de 24 contribuições mensais. Os demais listados não têm carência (o salário-maternidade só tem para contribuinte individual, facultativa e segurada especial: 10 contribuições).'
},
{
  id: 'I-PR-009', editais: ['inss'], materia: 'Direito Previdenciário', topico: 'prev-beneficios',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'media',
  enunciado: '<p>Julgue o item: no caso do segurado empregado, o auxílio por incapacidade temporária é devido pelo INSS a partir do primeiro dia de afastamento do trabalho.</p>',
  alternativas: ['Certo','Errado'], gabarito: 1,
  explicacao: 'ERRADO. Para o empregado, os 15 primeiros dias consecutivos de afastamento são pagos pela empresa. O INSS paga a partir do 16º dia. Para as demais categorias, o benefício é devido desde o início da incapacidade.'
},
{
  id: 'I-PR-010', editais: ['inss'], materia: 'Direito Previdenciário', topico: 'prev-beneficios',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>Sobre o auxílio-acidente, é correto afirmar que</p>',
  alternativas: [
    'tem natureza indenizatória e corresponde a 50% do salário de benefício.',
    'exige carência de 12 contribuições mensais.',
    'substitui a remuneração do segurado, não podendo ser acumulado com salário.',
    'é devido apenas ao segurado empregado doméstico.',
    'é vitalício, mantendo-se após a aposentadoria.'
  ], gabarito: 0,
  explicacao: 'Letra A. O auxílio-acidente é indenizatório (compensa a redução da capacidade laboral), vale 50% do salário de benefício, não tem carência, é acumulável com o salário e cessa com a aposentadoria.'
},
{
  id: 'I-PR-011', editais: ['inss'], materia: 'Direito Previdenciário', topico: 'prev-beneficios',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'media',
  enunciado: '<p>Julgue o item: o auxílio-reclusão é pago diretamente ao segurado recolhido à prisão, para custeio de suas despesas pessoais.</p>',
  alternativas: ['Certo','Errado'], gabarito: 1,
  explicacao: 'ERRADO. O auxílio-reclusão é devido aos DEPENDENTES do segurado de baixa renda recolhido em regime fechado. Quem recebe são os dependentes, nunca o preso.'
},
{
  id: 'I-PR-012', editais: ['inss'], materia: 'Direito Previdenciário', topico: 'prev-beneficios',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>A idade mínima exigida para a aposentadoria programada, na regra geral instituída pela EC 103/2019, é de</p>',
  alternativas: [
    '60 anos para a mulher e 65 para o homem.',
    '62 anos para a mulher e 65 para o homem.',
    '62 anos para ambos.',
    '65 anos para ambos.',
    '60 anos para ambos.'
  ], gabarito: 1,
  explicacao: 'Letra B. A reforma da previdência fixou 62 anos para a mulher e 65 para o homem, com tempo mínimo de contribuição de 15 anos (mulher) e 20 anos (homem que se filiou após a reforma).'
},
{
  id: 'I-PR-013', editais: ['inss'], materia: 'Direito Previdenciário', topico: 'prev-beneficios',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>O salário-maternidade é devido pelo período de</p>',
  alternativas: ['90 dias','100 dias','120 dias','180 dias','150 dias'],
  gabarito: 2,
  explicacao: 'Letra C. São 120 dias, devidos em caso de parto, adoção ou guarda judicial para fins de adoção. No caso de aborto não criminoso, o benefício é de duas semanas.'
},
{
  id: 'I-PR-014', editais: ['inss'], materia: 'Direito Previdenciário', topico: 'prev-beneficios',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'dificil',
  enunciado: '<p>Julgue o item: após a EC 103/2019, a pensão por morte corresponde a 50% do valor do benefício, acrescido de 10% por dependente, podendo alcançar 100%.</p>',
  alternativas: ['Certo','Errado'], gabarito: 0,
  explicacao: 'CERTO. A cota familiar é de 50% e cada dependente acrescenta 10%. Com cinco dependentes chega-se a 100%. As cotas por dependente cessam quando o dependente perde essa qualidade, sem reversão aos demais (salvo exceções legais).'
},
{
  id: 'I-PR-015', editais: ['inss'], materia: 'Direito Previdenciário', topico: 'prev-beneficios',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>O salário-família é devido</p>',
  alternativas: [
    'a todos os segurados, independentemente da renda.',
    'ao segurado empregado e ao trabalhador avulso de baixa renda, por filho menor de 14 anos ou inválido.',
    'apenas ao contribuinte individual com filhos menores de 18 anos.',
    'ao segurado facultativo com dependentes na escola.',
    'a qualquer segurado com filho menor de 21 anos.'
  ], gabarito: 1,
  explicacao: 'Letra B. O salário-família alcança o empregado (inclusive doméstico) e o avulso de baixa renda, por filho ou equiparado menor de 14 anos ou inválido de qualquer idade. Não tem carência.'
},
{
  id: 'I-PR-016', editais: ['inss'], materia: 'Direito Previdenciário', topico: 'prev-beneficios',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'media',
  enunciado: '<p>Julgue o item: o Benefício de Prestação Continuada (BPC/LOAS) é benefício previdenciário, exigindo contribuições prévias do beneficiário.</p>',
  alternativas: ['Certo','Errado'], gabarito: 1,
  explicacao: 'ERRADO. O BPC é benefício ASSISTENCIAL (art. 203, V, da CF e Lei 8.742/93): independe de contribuição. Garante um salário mínimo ao idoso com 65 anos ou mais e à pessoa com deficiência sem meios de prover a própria manutenção. Não gera 13º nem pensão por morte.'
},

/* ---------------- DIREITO PREVIDENCIÁRIO: REGRAS GERAIS ---------------- */
{
  id: 'I-PR-017', editais: ['inss'], materia: 'Direito Previdenciário', topico: 'prev-regras',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>O período de graça, em regra, mantém a qualidade de segurado por</p>',
  alternativas: [
    '6 meses após a cessação das contribuições.',
    '12 meses, podendo chegar a 36 meses nas hipóteses legais.',
    '24 meses em qualquer situação.',
    '12 meses, sem possibilidade de prorrogação.',
    '5 anos, conforme prazo decadencial.'
  ], gabarito: 1,
  explicacao: 'Letra B. A regra geral é 12 meses. Sobe para 24 quando o segurado já tiver mais de 120 contribuições sem perda da qualidade, e ganha mais 12 meses em caso de desemprego comprovado — chegando a 36 meses.'
},
{
  id: 'I-PR-018', editais: ['inss'], materia: 'Direito Previdenciário', topico: 'prev-regras',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'media',
  enunciado: '<p>Julgue o item: carência e período de graça são expressões sinônimas no Direito Previdenciário.</p>',
  alternativas: ['Certo','Errado'], gabarito: 1,
  explicacao: 'ERRADO. Carência é o número mínimo de contribuições mensais exigido para ter direito ao benefício. Período de graça é o tempo em que o segurado mantém essa qualidade mesmo sem contribuir.'
},
{
  id: 'I-PR-019', editais: ['inss'], materia: 'Direito Previdenciário', topico: 'prev-regras',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>Após a EC 103/2019, o salário de benefício é calculado com base na média aritmética simples</p>',
  alternativas: [
    'dos 80% maiores salários de contribuição desde julho de 1994.',
    'de 100% dos salários de contribuição desde julho de 1994.',
    'dos últimos 36 salários de contribuição.',
    'dos 12 últimos salários de contribuição.',
    'de todos os salários de contribuição desde a filiação, sem limite temporal.'
  ], gabarito: 1,
  explicacao: 'Letra B. A reforma acabou com o descarte dos 20% menores salários: hoje entram 100% das competências desde julho de 1994, o que tende a reduzir o valor do benefício.'
},
{
  id: 'I-PR-020', editais: ['inss'], materia: 'Direito Previdenciário', topico: 'prev-regras',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'facil',
  enunciado: '<p>Julgue o item: nenhum benefício que substitua o salário de contribuição ou o rendimento do trabalho do segurado terá valor mensal inferior ao salário mínimo.</p>',
  alternativas: ['Certo','Errado'], gabarito: 0,
  explicacao: 'CERTO. É garantia do art. 201, § 2º, da Constituição. Atenção: o salário-família e o auxílio-acidente não substituem a renda, por isso podem ter valor inferior ao mínimo.'
},
{
  id: 'I-PR-021', editais: ['inss'], materia: 'Direito Previdenciário', topico: 'prev-regras',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>A carência exigida para o auxílio por incapacidade temporária é de</p>',
  alternativas: ['não há carência','10 contribuições','12 contribuições','24 contribuições','180 contribuições'],
  gabarito: 2,
  explicacao: 'Letra C. São 12 contribuições mensais. A carência é dispensada em caso de acidente de qualquer natureza, doença profissional ou do trabalho e nas doenças graves previstas em lista do Ministério da Saúde e da Previdência.'
},

/* ---------------- DIREITO CONSTITUCIONAL ---------------- */
{
  id: 'I-CO-001', editais: ['inss'], materia: 'Direito Constitucional', topico: 'const-seguridade',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'facil',
  enunciado: '<p>A seguridade social compreende um conjunto integrado de ações destinadas a assegurar os direitos relativos à</p>',
  alternativas: [
    'saúde, previdência e assistência social.',
    'educação, saúde e previdência.',
    'previdência, trabalho e moradia.',
    'saúde, educação e assistência social.',
    'assistência social, trabalho e transporte.'
  ], gabarito: 0,
  explicacao: 'Letra A. É o tripé do art. 194 da CF: saúde, previdência e assistência social. Educação, trabalho e moradia são direitos sociais do art. 6º, mas não integram a seguridade.'
},
{
  id: 'I-CO-002', editais: ['inss'], materia: 'Direito Constitucional', topico: 'const-seguridade',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'media',
  enunciado: '<p>Julgue o item: a previdência social tem caráter contributivo e filiação obrigatória, ao passo que a saúde e a assistência social independem de contribuição direta do beneficiário.</p>',
  alternativas: ['Certo','Errado'], gabarito: 0,
  explicacao: 'CERTO. É a principal distinção do tripé: a previdência é um seguro (contributivo, art. 201); a saúde é direito de todos (art. 196) e a assistência é prestada a quem dela necessitar (art. 203), ambas sem exigir contribuição.'
},
{
  id: 'I-CO-003', editais: ['inss'], materia: 'Direito Constitucional', topico: 'const-direitos',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>O remédio constitucional cabível para assegurar o conhecimento de informações relativas à pessoa do impetrante constantes de bancos de dados de entidades governamentais é o</p>',
  alternativas: ['habeas corpus','mandado de injunção','habeas data','mandado de segurança','ação popular'],
  gabarito: 2,
  explicacao: 'Letra C. O habeas data serve para conhecer ou retificar informações pessoais em registros públicos ou de caráter público. O mandado de injunção combate a falta de norma regulamentadora e a ação popular ataca ato lesivo ao patrimônio público.'
},
{
  id: 'I-CO-004', editais: ['inss'], materia: 'Direito Constitucional', topico: 'const-principios',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'media',
  enunciado: '<p>Julgue o item: a erradicação da pobreza e da marginalização é um dos fundamentos da República Federativa do Brasil.</p>',
  alternativas: ['Certo','Errado'], gabarito: 1,
  explicacao: 'ERRADO. Trata-se de OBJETIVO fundamental (art. 3º, III), e não de fundamento. Os fundamentos do art. 1º são soberania, cidadania, dignidade da pessoa humana, valores sociais do trabalho e da livre iniciativa e pluralismo político.'
},
{
  id: 'I-CO-005', editais: ['inss'], materia: 'Direito Constitucional', topico: 'const-adm',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>O servidor nomeado para cargo de provimento efetivo em virtude de concurso público adquire estabilidade após</p>',
  alternativas: ['1 ano de exercício','2 anos de exercício','3 anos de efetivo exercício','4 anos de exercício','5 anos de efetivo exercício'],
  gabarito: 2,
  explicacao: 'Letra C. O art. 41 da Constituição exige 3 anos de efetivo exercício, com avaliação especial de desempenho. Não confunda com o estágio probatório da Lei 8.112/90, de 24 meses de avaliação.'
},
{
  id: 'I-CO-006', editais: ['inss'], materia: 'Direito Constitucional', topico: 'const-adm',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'media',
  enunciado: '<p>Julgue o item: o prazo de validade do concurso público é de até dois anos, prorrogável uma única vez por igual período.</p>',
  alternativas: ['Certo','Errado'], gabarito: 0,
  explicacao: 'CERTO. É o art. 37, III, da Constituição. Durante esse prazo, o aprovado tem prioridade sobre novos concursados para assumir o cargo.'
},

/* ---------------- DIREITO ADMINISTRATIVO ---------------- */
{
  id: 'I-AD-001', editais: ['inss'], materia: 'Direito Administrativo', topico: 'adm-atos',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>Sobre a extinção dos atos administrativos, é correto afirmar que a</p>',
  alternativas: [
    'anulação decorre de ilegalidade e produz, em regra, efeitos retroativos.',
    'revogação decorre de ilegalidade e produz efeitos retroativos.',
    'anulação só pode ser feita pelo Poder Judiciário.',
    'revogação pode ser determinada pelo Poder Judiciário no exercício do controle.',
    'cassação ocorre quando o ato se torna inconveniente para a Administração.'
  ], gabarito: 0,
  explicacao: 'Letra A. Anulação = vício de legalidade, efeitos ex tunc (retroativos), podendo ser feita pela própria Administração (autotutela) ou pelo Judiciário. Revogação = ato legal, mas inconveniente, efeitos ex nunc, privativa da Administração.'
},
{
  id: 'I-AD-002', editais: ['inss'], materia: 'Direito Administrativo', topico: 'adm-atos',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'media',
  enunciado: '<p>Julgue o item: competência, finalidade e forma são elementos sempre vinculados do ato administrativo.</p>',
  alternativas: ['Certo','Errado'], gabarito: 0,
  explicacao: 'CERTO. Esses três elementos são definidos em lei e não admitem juízo de conveniência. Motivo e objeto é que podem ser discricionários, formando o mérito administrativo.'
},
{
  id: 'I-AD-003', editais: ['inss'], materia: 'Direito Administrativo', topico: 'adm-principios',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>A prerrogativa que permite à Administração anular seus próprios atos ilegais e revogar os inconvenientes, sem necessidade de provocação do Judiciário, é o princípio da</p>',
  alternativas: ['legalidade','autotutela','tutela','continuidade','especialidade'],
  gabarito: 1,
  explicacao: 'Letra B. É a autotutela, consagrada nas Súmulas 346 e 473 do STF. A "tutela" é o controle que a Administração direta exerce sobre a indireta.'
},
{
  id: 'I-AD-004', editais: ['inss'], materia: 'Direito Administrativo', topico: 'adm-8112',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>Segundo a Lei 8.112/1990, o prazo para a posse é de</p>',
  alternativas: [
    '15 dias contados da publicação do ato de provimento.',
    '30 dias contados da publicação do ato de provimento.',
    '30 dias contados do início do exercício.',
    '60 dias contados da homologação do concurso.',
    '10 dias contados da nomeação.'
  ], gabarito: 1,
  explicacao: 'Letra B. A posse deve ocorrer em até 30 dias da publicação do ato de provimento; o exercício, em até 15 dias contados da posse. Não tomando posse no prazo, o ato de nomeação é tornado sem efeito.'
},
{
  id: 'I-AD-005', editais: ['inss'], materia: 'Direito Administrativo', topico: 'adm-8112',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'media',
  enunciado: '<p>Julgue o item: a nomeação é a única forma de provimento originário de cargo público prevista na Lei 8.112/1990.</p>',
  alternativas: ['Certo','Errado'], gabarito: 0,
  explicacao: 'CERTO. Todas as demais formas (promoção, readaptação, reversão, aproveitamento, reintegração e recondução) são derivadas, pois pressupõem vínculo anterior com a Administração.'
},
{
  id: 'I-AD-006', editais: ['inss'], materia: 'Direito Administrativo', topico: 'adm-8112',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>A penalidade de suspensão prevista na Lei 8.112/1990 não pode exceder</p>',
  alternativas: ['30 dias','45 dias','60 dias','90 dias','120 dias'],
  gabarito: 3,
  explicacao: 'Letra D. A suspensão é de até 90 dias e, havendo conveniência para o serviço, pode ser convertida em multa de 50% da remuneração, ficando o servidor obrigado a permanecer em serviço.'
},
{
  id: 'I-AD-007', editais: ['inss'], materia: 'Direito Administrativo', topico: 'adm-8112',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'dificil',
  enunciado: '<p>Julgue o item: o direito da Administração de anular atos administrativos de que decorram efeitos favoráveis para os destinatários decai em cinco anos, contados da data em que foram praticados, salvo comprovada má-fé.</p>',
  alternativas: ['Certo','Errado'], gabarito: 0,
  explicacao: 'CERTO. É o art. 54 da Lei 9.784/1999. A ressalva da má-fé afasta o prazo decadencial, permitindo a anulação a qualquer tempo.'
},

/* ---------------- ÉTICA ---------------- */
{
  id: 'I-ET-001', editais: ['inss'], materia: 'Ética no Serviço Público', topico: 'etica-1171',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'media',
  enunciado: '<p>Julgue o item: conforme o Decreto 1.171/1994, o servidor deve decidir não apenas entre o legal e o ilegal, mas principalmente entre o honesto e o desonesto.</p>',
  alternativas: ['Certo','Errado'], gabarito: 0,
  explicacao: 'CERTO. É uma das regras deontológicas mais cobradas do Código de Ética: a moralidade administrativa exige um juízo ético que vai além do simples cumprimento formal da lei.'
},
{
  id: 'I-ET-002', editais: ['inss'], materia: 'Ética no Serviço Público', topico: 'etica-1171',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>Após a Lei 14.230/2021, para a caracterização de ato de improbidade administrativa exige-se</p>',
  alternativas: [
    'culpa em qualquer modalidade.',
    'dolo específico, não bastando a culpa.',
    'apenas o dano ao erário, independentemente do elemento subjetivo.',
    'condenação criminal prévia.',
    'prejuízo superior a 60 salários mínimos.'
  ], gabarito: 1,
  explicacao: 'Letra B. A reforma da Lei de Improbidade eliminou a modalidade culposa: hoje todas as espécies exigem dolo, entendido como a vontade livre e consciente de alcançar o resultado ilícito.'
},
{
  id: 'I-ET-003', editais: ['inss'], materia: 'Ética no Serviço Público', topico: 'etica-1171',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'facil',
  enunciado: '<p>Julgue o item: a Comissão de Ética pode aplicar ao servidor faltoso as penas de censura, suspensão e demissão.</p>',
  alternativas: ['Certo','Errado'], gabarito: 1,
  explicacao: 'ERRADO. A única penalidade aplicável pela Comissão de Ética é a CENSURA. Suspensão e demissão são penalidades disciplinares da Lei 8.112/1990, aplicadas pela autoridade competente em processo administrativo disciplinar.'
},

/* ---------------- SEGURANÇA DA INFORMAÇÃO / LGPD ---------------- */
{
  id: 'I-SI-001', editais: ['inss'], materia: 'Segurança da Informação', topico: 'inss-lgpd',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'media',
  enunciado: '<p>De acordo com a LGPD (Lei 13.709/2018), são considerados dados pessoais sensíveis, entre outros, os dados</p>',
  alternativas: [
    'de endereço residencial e telefone.',
    'referentes à saúde, à vida sexual e os dados biométricos.',
    'de renda e patrimônio.',
    'cadastrais de pessoa jurídica.',
    'de matrícula funcional e lotação.'
  ], gabarito: 1,
  explicacao: 'Letra B. São sensíveis os dados sobre origem racial ou étnica, convicção religiosa, opinião política, filiação sindical, saúde, vida sexual, além dos dados genéticos e biométricos. Endereço e renda são dados pessoais comuns.'
},
{
  id: 'I-SI-002', editais: ['inss'], materia: 'Segurança da Informação', topico: 'inss-lgpd',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'media',
  enunciado: '<p>Julgue o item: na LGPD, o consentimento do titular é a única base legal que autoriza o tratamento de dados pessoais pela Administração Pública.</p>',
  alternativas: ['Certo','Errado'], gabarito: 1,
  explicacao: 'ERRADO. Há várias bases legais. O poder público pode tratar dados para a execução de políticas públicas e para o cumprimento de obrigação legal, independentemente de consentimento.'
},
{
  id: 'I-SI-003', editais: ['inss'], materia: 'Segurança da Informação', topico: 'inss-lgpd',
  banca: 'Estilo CESGRANRIO', tipo: 'me', dificuldade: 'facil',
  enunciado: '<p>O órgão responsável por zelar pela proteção de dados pessoais e fiscalizar o cumprimento da LGPD no Brasil é a</p>',
  alternativas: ['ANPD','ANATEL','CGU','SERPRO','CVM'],
  gabarito: 0,
  explicacao: 'Letra A. A Autoridade Nacional de Proteção de Dados (ANPD) edita normas, fiscaliza e aplica sanções administrativas previstas na LGPD.'
},
{
  id: 'I-SI-004', editais: ['inss'], materia: 'Segurança da Informação', topico: 'inss-lgpd',
  banca: 'Estilo CEBRASPE', tipo: 'ce', dificuldade: 'media',
  enunciado: '<p>Julgue o item: o servidor que consulta, por curiosidade pessoal, os dados de um beneficiário nos sistemas do órgão, sem qualquer demanda de serviço, pratica acesso indevido, sujeito a responsabilização.</p>',
  alternativas: ['Certo','Errado'], gabarito: 0,
  explicacao: 'CERTO. O acesso deve ser pautado pela necessidade de serviço. A consulta sem finalidade legítima viola o dever de sigilo e a LGPD, podendo gerar responsabilidade administrativa, civil e penal.'
}

]);
