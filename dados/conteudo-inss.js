/* Trilha específica: INSS — Técnico do Seguro Social (nível médio) */
CONC.addTrilha({
  id: 'inss',
  nome: 'Específico INSS',
  subtitulo: 'Técnico do Seguro Social · nível médio',
  descricao: 'Além das matérias comuns, o edital do INSS cobra Direito Previdenciário (o coração da prova), Direito Constitucional, Direito Administrativo, Ética no serviço público e Segurança da informação. A banca das últimas edições foi a CEBRASPE, com itens de Certo/Errado e desconto para erro.',
  dica: 'Direito Previdenciário vale mais que tudo. Se o tempo estiver curto, garanta Previdenciário + Português + Raciocínio Lógico.',
  modulos: [

  {
    id: 'inss-const-1',
    materia: 'Direito Constitucional',
    titulo: 'Princípios fundamentais e direitos e garantias (arts. 1º a 5º)',
    minutos: 45,
    editais: ['INSS'],
    topicos: ['const-principios', 'const-direitos'],
    resumo: `
      <p><strong>Fundamentos da República (art. 1º) — SO-CI-DI-VA-PLU:</strong> Soberania, Cidadania,
      Dignidade da pessoa humana, Valores sociais do trabalho e da livre iniciativa, Pluralismo político.
      "Todo o poder emana do povo, que o exerce por meio de representantes eleitos ou diretamente."</p>
      <p><strong>Objetivos fundamentais (art. 3º) — CO-GA-ERRA-PRO:</strong> Construir uma sociedade livre,
      justa e solidária; Garantir o desenvolvimento nacional; Erradicar a pobreza e a marginalização e
      reduzir as desigualdades sociais e regionais; Promover o bem de todos, sem preconceitos.
      São objetivos (verbos no infinitivo), não fundamentos — a banca troca as listas.</p>
      <p><strong>Direitos e garantias (art. 5º)</strong> — pontos mais cobrados:</p>
      <ul>
        <li>Igualdade formal: todos são iguais perante a lei, sem distinção de qualquer natureza.</li>
        <li>Legalidade: ninguém será obrigado a fazer ou deixar de fazer algo senão em virtude de lei.</li>
        <li>Casa é asilo inviolável: só se entra com consentimento, em caso de flagrante delito,
        desastre, para prestar socorro ou, <strong>durante o dia</strong>, por determinação judicial.</li>
        <li>Sigilo de comunicações: só por ordem judicial, nas hipóteses e na forma da lei, para fins de
        investigação criminal ou instrução processual penal.</li>
        <li>Remédios constitucionais: <em>habeas corpus</em> (liberdade de locomoção),
        <em>habeas data</em> (informações pessoais em bancos de dados públicos),
        <em>mandado de segurança</em> (direito líquido e certo não amparado por HC ou HD),
        <em>mandado de injunção</em> (falta de norma regulamentadora),
        <em>ação popular</em> (qualquer cidadão, contra ato lesivo ao patrimônio público).</li>
        <li>Direitos fundamentais não são absolutos e, em regra, alcançam brasileiros e estrangeiros
        residentes no país (a jurisprudência estende aos não residentes em território nacional).</li>
      </ul>
      <p><strong>Direitos sociais (art. 6º):</strong> educação, saúde, alimentação, trabalho, moradia,
      transporte, lazer, segurança, <strong>previdência social</strong>, proteção à maternidade e à
      infância, assistência aos desamparados.</p>`,
    chaves: [
      'Fundamentos (art. 1º) ≠ objetivos (art. 3º) ≠ princípios das relações internacionais (art. 4º).',
      'Habeas corpus é gratuito e pode ser impetrado por qualquer pessoa, inclusive em favor de outrem.',
      'Mandado de segurança exige direito líquido e certo (prova pré-constituída).',
      'A casa pode ser invadida à noite em flagrante delito, desastre ou para prestar socorro.',
      'Previdência social é direito social expresso no art. 6º.'
    ],
    pegadinhas: [
      'Ação popular é do cidadão (eleitor), não de qualquer pessoa.',
      'Mandado de injunção é para falta de norma, não para norma injusta.',
      '"Ninguém será privado de direitos por motivo de crença religiosa", salvo se invocá-la para eximir-se de obrigação legal a todos imposta e recusar prestação alternativa.'
    ],
    videos: [
      { titulo: 'Artigo 5º da Constituição completo — direitos e garantias', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=9XDXxP0ACG0' },
      { titulo: 'Art. 5º — direitos e deveres individuais e coletivos (aula 01)', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=XS3QU0mHAv0' },
      { titulo: '100 questões do art. 5º da CF/88', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=1PNIZszVN2U' },
      { titulo: 'Princípios fundamentais da CF/88', canal: 'Gran Cursos Online', busca: 'principios fundamentais constituicao artigo 1 ao 4 concurso aula' },
      { titulo: 'Direitos e garantias fundamentais — art. 5º', canal: 'Estratégia Concursos', busca: 'direitos e garantias fundamentais artigo 5 concurso aula completa' }
    ]
  },

  {
    id: 'inss-const-2',
    materia: 'Direito Constitucional',
    titulo: 'Administração Pública (arts. 37 a 41) e Seguridade Social (arts. 194 a 204)',
    minutos: 50,
    editais: ['INSS'],
    topicos: ['const-adm', 'const-seguridade'],
    resumo: `
      <p><strong>Art. 37 — princípios LIMPE</strong> (legalidade, impessoalidade, moralidade,
      publicidade e eficiência) e regras:</p>
      <ul>
        <li>Investidura em cargo ou emprego público depende de <strong>concurso público</strong>
        de provas ou de provas e títulos (exceto cargo em comissão, declarado em lei de livre nomeação
        e exoneração).</li>
        <li>Prazo de validade do concurso: até 2 anos, prorrogável uma vez por igual período.</li>
        <li>Reserva de percentual de cargos para pessoas com deficiência.</li>
        <li>Publicidade de atos não pode conter nomes, símbolos ou imagens que caracterizem promoção
        pessoal de autoridades.</li>
        <li>A responsabilidade do Estado por danos causados por seus agentes é <strong>objetiva</strong>,
        com direito de regresso contra o agente em caso de dolo ou culpa.</li>
        <li>Estabilidade (art. 41): servidor nomeado para cargo efetivo em virtude de concurso adquire
        estabilidade após <strong>3 anos</strong> de efetivo exercício, com avaliação especial de desempenho.</li>
      </ul>
      <p><strong>Seguridade Social (art. 194)</strong> = conjunto integrado de ações de iniciativa dos
      Poderes Públicos e da sociedade destinadas a assegurar os direitos relativos à
      <strong>saúde, previdência e assistência social</strong>.</p>
      <p><strong>Objetivos/princípios da seguridade (art. 194, parágrafo único):</strong>
      universalidade da cobertura e do atendimento; uniformidade e equivalência dos benefícios e
      serviços às populações urbanas e rurais; seletividade e distributividade na prestação;
      irredutibilidade do valor dos benefícios; equidade na forma de participação no custeio;
      diversidade da base de financiamento; caráter democrático e descentralizado da administração
      (gestão quadripartite, com participação de trabalhadores, empregadores, aposentados e Governo).</p>
      <p><strong>Diferenças que a prova adora:</strong></p>
      <ul>
        <li><strong>Saúde</strong> (art. 196): direito de todos e dever do Estado,
        <em>independe de contribuição</em>, acesso universal e igualitário.</li>
        <li><strong>Assistência social</strong> (art. 203): a quem dela necessitar,
        <em>independentemente de contribuição</em>. Inclui o BPC/LOAS — 1 salário mínimo à pessoa com
        deficiência e ao idoso que comprovem não ter meios de prover a própria manutenção.</li>
        <li><strong>Previdência social</strong> (art. 201): <em>caráter contributivo</em> e de
        <em>filiação obrigatória</em>, com equilíbrio financeiro e atuarial.</li>
      </ul>
      <p><strong>Regra da contrapartida</strong> (art. 195, § 5º): nenhum benefício ou serviço da
      seguridade social pode ser criado, majorado ou estendido sem a correspondente fonte de custeio total.</p>`,
    chaves: [
      'Seguridade = saúde + previdência + assistência (tripé).',
      'Saúde e assistência não exigem contribuição; previdência exige.',
      'Nenhum benefício novo sem fonte de custeio total (art. 195, §5º).',
      'Estabilidade do servidor: 3 anos de efetivo exercício.',
      'Responsabilidade civil do Estado é objetiva; do agente, subjetiva (regresso com dolo ou culpa).'
    ],
    pegadinhas: [
      'BPC/LOAS é assistência social — não é aposentadoria e não gera 13º nem pensão por morte.',
      'A gestão da seguridade é quadripartite (trabalhadores, empregadores, aposentados e Governo).',
      '"Universalidade da cobertura" (riscos) ≠ "universalidade do atendimento" (pessoas).'
    ],
    videos: [
      { titulo: 'Princípios constitucionais da seguridade social (art. 194)', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=5VtPsqg-648' },
      { titulo: 'Constituição, arts. 193 a 204 — Da seguridade social', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=_JiGaIpiVWw' },
      { titulo: 'Seguridade social: princípios constitucionais — Prof. Tanaka', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=K2tthLEYP-Y' },
      { titulo: 'Art. 37 da CF — Administração Pública', canal: 'Gran Cursos Online', busca: 'artigo 37 constituicao administracao publica concurso aula completa' },
      { titulo: 'Seguridade Social na Constituição — arts. 194 a 204', canal: 'Estratégia Concursos', busca: 'seguridade social na constituicao artigos 194 a 204 concurso aula' }
    ]
  },

  {
    id: 'inss-adm-1',
    materia: 'Direito Administrativo',
    titulo: 'Princípios, poderes e atos administrativos',
    minutos: 50,
    editais: ['INSS'],
    topicos: ['adm-principios', 'adm-atos'],
    resumo: `
      <p><strong>Princípios expressos (LIMPE)</strong> + implícitos: supremacia do interesse público,
      indisponibilidade do interesse público, autotutela (a Administração pode anular seus atos ilegais e
      revogar os inconvenientes — Súmulas 346 e 473 do STF), razoabilidade, proporcionalidade,
      motivação, segurança jurídica, continuidade do serviço público.</p>
      <p><strong>Poderes administrativos:</strong></p>
      <ul>
        <li><strong>Vinculado</strong>: lei define todos os elementos, sem margem de escolha.</li>
        <li><strong>Discricionário</strong>: há juízo de conveniência e oportunidade, dentro da lei.</li>
        <li><strong>Hierárquico</strong>: ordenar, fiscalizar, delegar, avocar, rever atos de subordinados.</li>
        <li><strong>Disciplinar</strong>: punir servidores e quem tem vínculo específico com a Administração.</li>
        <li><strong>Regulamentar/normativo</strong>: editar decretos e normas para fiel execução da lei.</li>
        <li><strong>Poder de polícia</strong>: limita o exercício de direitos individuais em favor do
        interesse público. Atributos: discricionariedade, autoexecutoriedade e coercibilidade.</li>
      </ul>
      <p><strong>Abuso de poder</strong> = excesso de poder (extrapola a competência) ou
      desvio de finalidade (age com finalidade diversa da prevista).</p>
      <p><strong>Ato administrativo — elementos (COFIFOM):</strong> Competência, Finalidade, Forma,
      Motivo e Objeto. Competência, finalidade e forma são sempre <strong>vinculados</strong>;
      motivo e objeto podem ser discricionários (formam o <em>mérito administrativo</em>).</p>
      <p><strong>Atributos (PATI):</strong> Presunção de legitimidade e veracidade, Autoexecutoriedade,
      Tipicidade e Imperatividade.</p>
      <p><strong>Extinção:</strong> <em>anulação</em> (ato ilegal, efeitos em regra retroativos — ex tunc;
      pode ser feita pela Administração ou pelo Judiciário), <em>revogação</em> (ato legal, mas
      inconveniente; efeitos futuros — ex nunc; só pela Administração) e <em>cassação</em>
      (o beneficiário descumpre condições).</p>
      <p><strong>Teoria dos motivos determinantes</strong>: se a Administração declara o motivo,
      fica vinculada a ele; se o motivo for falso ou inexistente, o ato é inválido.</p>`,
    chaves: [
      'Anulação: ilegalidade, efeito ex tunc. Revogação: conveniência, efeito ex nunc.',
      'O Judiciário anula, mas não revoga ato do Executivo.',
      'Competência, finalidade e forma são sempre vinculadas.',
      'Poder de polícia é diferente de polícia judiciária: aqui se limita direito, não se investiga crime.',
      'Autotutela está nas Súmulas 346 e 473 do STF.'
    ],
    pegadinhas: [
      'Nem todo ato administrativo tem autoexecutoriedade (multa, por exemplo, não se cobra sem processo).',
      'Ato discricionário não é ato arbitrário: a discricionariedade existe dentro da lei.',
      'Delegação não transfere a titularidade da competência.'
    ],
    videos: [
      { titulo: 'Aula completa de atos administrativos', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=S5gLQkG0miY' },
      { titulo: 'Poderes administrativos — aula completa (teoria + questões)', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=oGdXyqvcx2g' },
      { titulo: 'Direito Administrativo para concursos do zero', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=53pQJERXK78' },
      { titulo: 'Princípios do Direito Administrativo', canal: 'Gran Cursos Online', busca: 'principios do direito administrativo concurso aula completa' },
      { titulo: 'Atos administrativos — elementos e atributos', canal: 'Estratégia Concursos', busca: 'atos administrativos elementos atributos concurso aula completa' }
    ]
  },

  {
    id: 'inss-adm-2',
    materia: 'Direito Administrativo',
    titulo: 'Lei 8.112/90 (servidores federais) e processo administrativo',
    minutos: 50,
    editais: ['INSS'],
    topicos: ['adm-8112'],
    resumo: `
      <p>O técnico do INSS é servidor federal regido pela <strong>Lei 8.112/1990</strong>.</p>
      <p><strong>Provimento</strong> (formas de ocupar cargo): nomeação (única forma <em>originária</em>),
      promoção, readaptação, reversão, aproveitamento, reintegração e recondução.
      <strong>Posse</strong>: até 30 dias da publicação do ato de provimento (é o ato que completa a
      investidura). <strong>Exercício</strong>: até 15 dias da posse.
      <strong>Estágio probatório</strong>: 24 meses de avaliação (a estabilidade constitucional é de 3 anos).</p>
      <p><strong>Vacância</strong>: exoneração, demissão, promoção, readaptação, aposentadoria,
      posse em outro cargo inacumulável e falecimento.
      <em>Exoneração</em> não é punição; <em>demissão</em> é.</p>
      <p><strong>Licenças e afastamentos</strong>: por motivo de doença em pessoa da família,
      por afastamento do cônjuge, para o serviço militar, para atividade política, para capacitação,
      para tratar de interesses particulares, para desempenho de mandato classista.</p>
      <p><strong>Deveres</strong> (art. 116): exercer com zelo, ser leal, observar normas, cumprir ordens
      superiores (salvo manifestamente ilegais), atender com presteza, guardar sigilo, tratar com urbanidade,
      representar contra ilegalidade.</p>
      <p><strong>Proibições</strong> (art. 117): ausentar-se sem autorização, retirar documento da
      repartição sem permissão, recusar fé a documentos públicos, valer-se do cargo para proveito pessoal,
      receber propina, participar de gerência de empresa (com exceções), praticar usura, proceder de forma
      desidiosa, cometer a outro servidor atribuições estranhas ao cargo.</p>
      <p><strong>Penalidades</strong>: advertência, suspensão (até 90 dias),
      demissão, cassação de aposentadoria ou disponibilidade, destituição de cargo em comissão e
      destituição de função comissionada. O <strong>PAD</strong> tem três fases:
      instauração, inquérito administrativo (instrução, defesa e relatório) e julgamento;
      prazo de 60 dias, prorrogável por mais 60. Comissão de três servidores estáveis.</p>
      <p><strong>Lei 9.784/1999</strong> (processo administrativo federal): direito à informação, à
      vista dos autos, à defesa e ao contraditório; dever de motivar as decisões; prazo de
      <strong>5 anos</strong> para a Administração anular atos que gerem efeitos favoráveis ao
      administrado, salvo comprovada má-fé; recurso administrativo em regra em até 10 dias.</p>`,
    chaves: [
      'Nomeação é a única forma de provimento originário.',
      'Posse em 30 dias; exercício em 15 dias após a posse.',
      'Estágio probatório: 24 meses. Estabilidade: 3 anos.',
      'Suspensão: até 90 dias (pode ser convertida em multa).',
      'Prazo decadencial de 5 anos para anular ato favorável ao administrado (Lei 9.784/99), salvo má-fé.'
    ],
    pegadinhas: [
      'Exoneração de cargo efetivo a pedido não é punição; demissão sempre é.',
      'A recondução ocorre quando o servidor é inabilitado em estágio probatório em outro cargo.',
      'A improbidade (Lei 8.429/92) pode gerar sanções independentes das penalidades da 8.112.'
    ],
    videos: [
      { titulo: 'Lei 8.112/90 — resumo atualizado para concursos', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=yKtte_WyK3w' },
      { titulo: 'Lei 8.112/1990 esquematizada — resumo geral', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=HcQiY8lXsps' },
      { titulo: 'Lei 8.112/1990 — regime jurídico dos servidores da União (01)', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=_5irvphXdAs' },
      { titulo: 'Lei 8.112/90 — aula completa', canal: 'Gran Cursos Online', busca: 'lei 8112 90 aula completa concurso regime juridico unico' },
      { titulo: 'Provimento, posse, exercício e vacância', canal: 'Estratégia Concursos', busca: 'provimento posse exercicio vacancia lei 8112 concurso' }
    ]
  },

  {
    id: 'inss-etica-1',
    materia: 'Ética no Serviço Público',
    titulo: 'Decreto 1.171/94, conduta e improbidade administrativa',
    minutos: 35,
    editais: ['INSS'],
    topicos: ['etica-1171'],
    resumo: `
      <p><strong>Decreto 1.171/1994 — Código de Ética Profissional do Servidor Público Civil Federal.</strong>
      Pontos que a CEBRASPE cobra quase literalmente:</p>
      <ul>
        <li>A dignidade, o decoro, o zelo, a eficácia e a consciência dos princípios morais são primados
        maiores que devem nortear o servidor.</li>
        <li>O servidor não pode decidir apenas entre o legal e o ilegal, mas principalmente entre
        <strong>o honesto e o desonesto</strong>.</li>
        <li>A <strong>remuneração é custeada pelos tributos pagos pelos cidadãos</strong>, por isso o
        servidor deve o melhor desempenho.</li>
        <li>É vedado ao servidor: ser, em função do espírito de solidariedade, conivente com erro ou
        infração; usar o cargo para obter favorecimento; deixar de atender por antipatia;
        retirar documento da repartição; apresentar-se embriagado; desviar servidor para atendimento a
        interesse particular; alterar o teor de documento.</li>
        <li><strong>Toda ausência injustificada é forma de dano moral</strong> ao usuário, assim como a
        demora injustificada.</li>
        <li>A <strong>Comissão de Ética</strong> existe em todo órgão e entidade da Administração Pública
        Federal; a única pena que aplica é a <strong>censura</strong>, e seu fundamento é o próprio Código.</li>
      </ul>
      <p><strong>Lei 8.429/1992 (improbidade administrativa)</strong>, com as mudanças da Lei 14.230/2021:</p>
      <ul>
        <li>Três espécies: enriquecimento ilícito (art. 9º), prejuízo ao erário (art. 10) e
        atentado contra princípios da Administração (art. 11).</li>
        <li>Depois da Lei 14.230/2021, exige-se <strong>dolo</strong> em todas as modalidades —
        não há mais improbidade culposa.</li>
        <li>Sanções: perda dos bens acrescidos ilicitamente, ressarcimento integral do dano,
        perda da função pública, suspensão dos direitos políticos e multa civil. A ação é civil,
        não penal, e independe das esferas penal e administrativa.</li>
      </ul>`,
    chaves: [
      'Comissão de Ética só aplica censura.',
      'Demora e ausência injustificadas = dano moral ao usuário.',
      'Depois de 2021 não existe mais improbidade por culpa: exige-se dolo.',
      'As esferas penal, civil e administrativa são independentes.',
      'O servidor deve escolher entre o honesto e o desonesto, não só entre o legal e o ilegal.'
    ],
    pegadinhas: [
      'A Comissão de Ética não demite, não suspende e não multa.',
      'Improbidade pode atingir quem não é agente público (o particular que concorre para o ato).',
      'Ética no Decreto 1.171 alcança todos que prestam serviço à Administração, inclusive terceirizados e estagiários.'
    ],
    videos: [
      { titulo: 'Decreto 1.171/94 completo + questões resolvidas', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=GQ6EyOB_xpU' },
      { titulo: 'Improbidade administrativa — Lei 8.429/92 atualizada', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=QwNcy04oq8I' },
      { titulo: 'Nova lei de improbidade administrativa (resumo)', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=PXFfF_cVUUk' },
      { titulo: 'Decreto 1.171/94 — aula completa comentada', canal: 'Gran Cursos Online', busca: 'decreto 1171 94 codigo de etica aula completa concurso' },
      { titulo: 'Ética no serviço público para INSS', canal: 'Estratégia Concursos', busca: 'etica no servico publico inss aula completa' }
    ]
  },

  {
    id: 'inss-prev-1',
    materia: 'Direito Previdenciário',
    titulo: 'Custeio, segurados e dependentes',
    minutos: 55,
    editais: ['INSS'],
    topicos: ['prev-custeio', 'prev-segurados'],
    resumo: `
      <p><strong>Custeio (Lei 8.212/91 e art. 195 da CF)</strong>: a seguridade é financiada por toda a
      sociedade, de forma direta e indireta, com recursos da União, dos Estados, do DF, dos Municípios
      e de contribuições sociais:</p>
      <ul>
        <li>do <strong>empregador/empresa</strong>: sobre a folha de salários, a receita/faturamento
        (COFINS) e o lucro (CSLL);</li>
        <li>do <strong>trabalhador</strong> e demais segurados (não incide sobre aposentadoria e pensão
        do RGPS);</li>
        <li>sobre a <strong>receita de concursos de prognósticos</strong> (loterias);</li>
        <li>do <strong>importador</strong> de bens ou serviços.</li>
      </ul>
      <p><strong>Segurados obrigatórios</strong> (filiação automática com o exercício de atividade remunerada):</p>
      <ul>
        <li><strong>Empregado</strong> (inclusive o doméstico, que é categoria própria);</li>
        <li><strong>Trabalhador avulso</strong> (sindicato ou órgão gestor de mão de obra);</li>
        <li><strong>Contribuinte individual</strong> (autônomo, empresário, MEI, motorista de aplicativo);</li>
        <li><strong>Segurado especial</strong> (produtor rural em regime de economia familiar, pescador
        artesanal e seus familiares).</li>
      </ul>
      <p><strong>Segurado facultativo</strong>: maior de 16 anos que não exerce atividade remunerada
      (dona/dono de casa, estudante, síndico não remunerado, desempregado). A filiação decorre da
      <strong>inscrição e do primeiro pagamento</strong>.</p>
      <p><strong>Dependentes</strong> (art. 16 da Lei 8.213/91) — três classes:</p>
      <ul>
        <li><strong>Classe 1</strong>: cônjuge, companheiro(a) e filho não emancipado menor de 21 anos
        ou inválido ou com deficiência intelectual/mental/grave — <em>dependência econômica presumida</em>.</li>
        <li><strong>Classe 2</strong>: os pais.</li>
        <li><strong>Classe 3</strong>: irmão não emancipado menor de 21 anos, inválido ou com deficiência.</li>
      </ul>
      <p>A existência de dependente de uma classe <strong>exclui</strong> as classes seguintes.
      Nas classes 2 e 3, a dependência econômica precisa ser <strong>comprovada</strong>.</p>
      <p><strong>Filiação × inscrição</strong>: filiação é o vínculo jurídico (automático para o
      obrigatório que trabalha); inscrição é o ato de cadastrar-se no INSS. Para o facultativo,
      a filiação depende de inscrição + pagamento.</p>`,
    chaves: [
      'Segurado especial é o rural em economia familiar — não é qualquer trabalhador rural.',
      'Filiação do obrigatório é automática com o trabalho; do facultativo, depende de inscrição e pagamento.',
      'Dependente de classe superior exclui as demais.',
      'Filho maior de 21 anos, salvo inválido ou com deficiência, não é dependente.',
      'Aposentadoria e pensão do RGPS não sofrem contribuição previdenciária.'
    ],
    pegadinhas: [
      'MEI e motorista de aplicativo são contribuintes individuais.',
      'Menor de 16 anos não pode ser segurado facultativo (idade mínima: 16 anos).',
      'O empregado doméstico tem categoria própria de segurado obrigatório.'
    ],
    videos: [
      { titulo: 'Direito Previdenciário do zero — dependentes (aula 2)', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=sDt7z5mRwsw' },
      { titulo: 'Concurso INSS do zero: beneficiários do RGPS', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=78W4zdFj7YM' },
      { titulo: 'Financiamento da seguridade social', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=4Hmcopyz-zY' },
      { titulo: 'Segurados do RGPS — obrigatórios e facultativo', canal: 'Gran Cursos Online', busca: 'segurados do rgps obrigatorios facultativo inss aula completa' },
      { titulo: 'Dependentes na previdência — art. 16', canal: 'Estratégia Concursos', busca: 'dependentes previdencia social artigo 16 lei 8213 concurso' }
    ]
  },

  {
    id: 'inss-prev-2',
    materia: 'Direito Previdenciário',
    titulo: 'Benefícios do RGPS: aposentadorias, auxílios e pensão',
    minutos: 60,
    editais: ['INSS'],
    topicos: ['prev-beneficios'],
    resumo: `
      <p><strong>Aposentadoria programada</strong> (regra geral após a EC 103/2019):
      idade mínima de <strong>62 anos para a mulher</strong> e <strong>65 anos para o homem</strong>,
      com <strong>15 anos de contribuição</strong> para a mulher e
      <strong>20 anos para o homem</strong> que se filiou depois da reforma
      (quem já era filiado mantém 15 anos).</p>
      <p><strong>Aposentadoria por incapacidade permanente</strong> (antiga por invalidez):
      incapacidade total e permanente para qualquer atividade, sem possibilidade de reabilitação.
      Carência de 12 contribuições, dispensada em caso de acidente de qualquer natureza, doença
      profissional/do trabalho e nas doenças graves listadas em lei.</p>
      <p><strong>Auxílio por incapacidade temporária</strong> (antigo auxílio-doença):
      incapacidade por mais de 15 dias consecutivos. Para o empregado, os primeiros 15 dias são pagos
      pela empresa; a partir do 16º, pelo INSS. Carência de 12 contribuições (com as mesmas dispensas).</p>
      <p><strong>Auxílio-acidente</strong>: indenizatório, pago quando ficam sequelas que reduzem a
      capacidade de trabalho. Não tem carência, corresponde a 50% do salário de benefício e é pago
      <em>junto</em> com o salário; cessa com a aposentadoria.</p>
      <p><strong>Salário-maternidade</strong>: 120 dias, devido em parto, adoção, guarda judicial para
      adoção, natimorto e aborto não criminoso (2 semanas). Carência: 10 contribuições para contribuinte
      individual, facultativo e segurado especial; <strong>sem carência</strong> para empregado, doméstico
      e avulso.</p>
      <p><strong>Salário-família</strong>: pago ao empregado e ao avulso de baixa renda, por filho menor
      de 14 anos ou inválido. Não tem carência.</p>
      <p><strong>Pensão por morte</strong>: devida aos dependentes. Não tem carência.
      Após a EC 103/2019, o valor é de 50% do benefício + 10% por dependente
      (chegando a 100% com cinco dependentes). A duração depende da idade do cônjuge e do tempo de
      união/contribuição (pode ser vitalícia a partir de 44 anos de idade do dependente).</p>
      <p><strong>Auxílio-reclusão</strong>: pago aos dependentes do segurado <em>de baixa renda</em>
      recolhido em regime fechado. Carência de 24 contribuições.</p>
      <p><strong>Benefícios que NÃO têm carência</strong>: pensão por morte, auxílio-acidente,
      salário-família e salário-maternidade (para empregado, doméstico e avulso).</p>`,
    chaves: [
      'Aposentadoria programada: 62 (mulher) / 65 (homem) anos.',
      'Auxílio-acidente é indenizatório, vale 50% e acumula com salário.',
      'Auxílio-reclusão exige regime fechado e baixa renda, com carência de 24 contribuições.',
      'Pensão por morte: 50% + 10% por dependente.',
      'Empresa paga os 15 primeiros dias de afastamento do empregado.'
    ],
    pegadinhas: [
      'Auxílio-reclusão é pago aos dependentes, não ao preso.',
      'Aposentadoria por incapacidade permanente pode ser revista — não é definitiva.',
      'Salário-maternidade tem carência para contribuinte individual e facultativo (10 contribuições).'
    ],
    videos: [
      { titulo: 'Resumão de benefícios previdenciários — concurso INSS', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=0hVRiosIY78' },
      { titulo: 'Benefícios previdenciários: aposentadorias programadas', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=IhGZv-DB-G4' },
      { titulo: 'Benefícios previdenciários: salário-família', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=Uv3WlC1yBnw' },
      { titulo: 'Benefícios do RGPS — aula completa', canal: 'Gran Cursos Online', busca: 'beneficios do rgps aula completa inss aposentadoria auxilio' },
      { titulo: 'Pensão por morte após a reforma', canal: 'Estratégia Concursos', busca: 'pensao por morte apos reforma da previdencia concurso inss' }
    ]
  },

  {
    id: 'inss-prev-3',
    materia: 'Direito Previdenciário',
    titulo: 'Carência, qualidade de segurado, salário de benefício e EC 103/2019',
    minutos: 50,
    editais: ['INSS'],
    topicos: ['prev-regras'],
    resumo: `
      <p><strong>Carência</strong> é o número mínimo de contribuições mensais para ter direito ao
      benefício. Principais:</p>
      <ul>
        <li>12 contribuições: auxílio por incapacidade temporária e aposentadoria por incapacidade permanente;</li>
        <li>180 contribuições: aposentadorias programada, especial e por idade;</li>
        <li>24 contribuições: auxílio-reclusão;</li>
        <li>10 contribuições: salário-maternidade do contribuinte individual/facultativo;</li>
        <li>sem carência: pensão por morte, auxílio-acidente, salário-família e salário-maternidade
        de empregado/doméstico/avulso.</li>
      </ul>
      <p><strong>Período de graça</strong> (manutenção da qualidade de segurado sem contribuir):</p>
      <ul>
        <li>sem limite, para quem está em gozo de benefício (exceto auxílio-acidente);</li>
        <li><strong>12 meses</strong> após cessar as contribuições (regra geral);</li>
        <li>prorrogável para <strong>24 meses</strong> se o segurado tiver mais de 120 contribuições
        sem perda da qualidade;</li>
        <li>mais <strong>12 meses</strong> se houver desemprego comprovado (podendo chegar a 36 meses);</li>
        <li>12 meses para o segurado facultativo;</li>
        <li>3 meses para o incorporado às Forças Armadas; 12 meses após o livramento, para o segurado detido.</li>
      </ul>
      <p>A perda da qualidade de segurado ocorre no dia seguinte ao do vencimento do prazo de
      recolhimento da contribuição referente ao mês seguinte ao fim do período de graça.</p>
      <p><strong>Salário de benefício</strong> após a EC 103/2019: média aritmética simples de
      <strong>100% dos salários de contribuição</strong> desde julho/1994 (acabou o descarte dos 20% menores).</p>
      <p><strong>Cálculo da aposentadoria programada</strong>: 60% da média + 2% por ano que exceder
      15 anos (mulher) ou 20 anos (homem) de contribuição.</p>
      <p><strong>Regras de transição da EC 103/2019</strong>: pontos (soma de idade + tempo de contribuição,
      com progressão anual), idade mínima progressiva, pedágio de 50% e pedágio de 100%.</p>
      <p><strong>Princípios que a prova cobra</strong>: nenhum benefício substitutivo do salário pode ser
      inferior ao salário mínimo; o 13º (abono anual) é devido a quem recebe benefício com duração
      superior a um mês; benefícios são reajustados para preservar o valor real,
      e é vedada a acumulação de certos benefícios (ex.: duas aposentadorias do RGPS;
      aposentadoria + pensão passou a ter redutor).</p>`,
    chaves: [
      'Período de graça padrão: 12 meses, podendo chegar a 36.',
      'Salário de benefício hoje considera 100% das contribuições desde julho/1994.',
      'Aposentadoria programada: 60% da média + 2% por ano extra.',
      'Nenhum benefício que substitui o salário pode ser menor que o mínimo.',
      'Carência de 180 contribuições para as aposentadorias programadas.'
    ],
    pegadinhas: [
      'Período de graça não é carência: um é manutenção da qualidade, o outro é número mínimo de contribuições.',
      'Auxílio-acidente não mantém a qualidade de segurado indefinidamente.',
      'O BPC/LOAS não exige carência porque não é benefício previdenciário.'
    ],
    videos: [
      { titulo: 'Reforma da Previdência — regras permanentes e de transição', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=hf67eANVXLs' },
      { titulo: 'Regras de transição da EC 103/2019 — concurso INSS', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=ihvY2f089NY' },
      { titulo: 'Lei 8.212/91 — plano de custeio (arts. 1º a 9º)', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=qI5ntq0MY-8' },
      { titulo: 'Qualidade de segurado e período de graça', canal: 'Gran Cursos Online', busca: 'qualidade de segurado periodo de graca concurso inss aula' },
      { titulo: 'Reforma da Previdência (EC 103/2019) resumida', canal: 'Estratégia Concursos', busca: 'ec 103 2019 reforma da previdencia resumo concurso inss' }
    ]
  },

  {
    id: 'inss-seg-1',
    materia: 'Segurança da Informação',
    titulo: 'Segurança da informação e LGPD no atendimento previdenciário',
    minutos: 35,
    editais: ['INSS'],
    topicos: ['inss-lgpd'],
    resumo: `
      <p>O técnico do INSS lida com dados sensíveis o dia inteiro (saúde, biometria, renda).
      Por isso o edital cobra <strong>Segurança da Informação</strong> em bloco próprio, com foco em
      conduta e em LGPD.</p>
      <p><strong>LGPD (Lei 13.709/2018)</strong>:</p>
      <ul>
        <li><strong>Dado pessoal</strong>: informação relacionada a pessoa natural identificada ou identificável.</li>
        <li><strong>Dado pessoal sensível</strong>: origem racial ou étnica, convicção religiosa, opinião
        política, filiação a sindicato, dado referente à saúde, à vida sexual, dado genético ou biométrico.</li>
        <li><strong>Agentes</strong>: controlador (decide sobre o tratamento), operador (trata em nome do
        controlador) e encarregado/DPO (canal de comunicação com titulares e com a ANPD).</li>
        <li><strong>Bases legais</strong>: além do consentimento, há o cumprimento de obrigação legal,
        a execução de políticas públicas, o exercício regular de direitos, a proteção da vida, a tutela
        da saúde e o legítimo interesse. O poder público trata dados para execução de políticas públicas —
        <em>não depende de consentimento</em>.</li>
        <li><strong>Direitos do titular</strong>: confirmação, acesso, correção, anonimização, portabilidade,
        eliminação, informação sobre compartilhamento e revogação do consentimento.</li>
        <li>Fiscalização: <strong>ANPD</strong> — Autoridade Nacional de Proteção de Dados.</li>
      </ul>
      <p><strong>Boas práticas no atendimento:</strong> não compartilhar senha ou certificado;
      bloquear a estação ao se ausentar (Win+L); nunca consultar dados de terceiros por curiosidade
      (acesso indevido é infração funcional e pode ser crime); conferir a identidade do requerente;
      desconfiar de golpes de engenharia social por telefone e WhatsApp em nome do INSS
      (o INSS não pede senha nem cobra taxa para liberar benefício).</p>`,
    chaves: [
      'Dado de saúde e biometria são dados sensíveis.',
      'O poder público pode tratar dados para políticas públicas sem consentimento.',
      'A ANPD é o órgão fiscalizador da LGPD.',
      'Consultar dados sem necessidade de serviço é acesso indevido — infração funcional.',
      'O INSS nunca pede senha nem cobra taxa para liberar benefício.'
    ],
    pegadinhas: [
      'Consentimento não é a única base legal — é apenas uma entre dez.',
      'Anonimização bem-feita retira o dado do alcance da LGPD.',
      'A LGPD se aplica também a dados em papel, não só digitais.'
    ],
    videos: [
      { titulo: 'LGPD para concursos — Lei 13.709/18 (parte 1)', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=hjnd-8AZtMI' },
      { titulo: 'LGPD para concursos — parte 2', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=ci8lLCtoiHk' },
      { titulo: 'LGPD esquematizada', canal: 'Aula no YouTube', url: 'https://www.youtube.com/watch?v=C_147jYoIhA' },
      { titulo: 'LGPD para concursos — aula completa', canal: 'Gran Cursos Online', busca: 'lgpd para concursos aula completa lei 13709' },
      { titulo: 'Segurança da informação para o INSS', canal: 'Estratégia Concursos', busca: 'seguranca da informacao inss concurso aula completa' }
    ]
  }

  ]
});
