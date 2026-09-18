/* Estrutura dos simulados completos.
   Cada bloco puxa questões do banco filtrando por edital + matéria. */
CONC.addSimulados([
  {
    id: 'inss',
    concurso: 'inss',
    nome: 'Simulado INSS — Técnico do Seguro Social',
    banca: 'Estilo CEBRASPE',
    tempoMin: 150,
    corte: 60,
    observacao: 'A prova real do INSS é de Certo/Errado com desconto para erro: cada item errado anula um item certo. Por isso o simulado mostra também a <strong>pontuação líquida</strong>. Só marque quando tiver alguma segurança — chutar, aqui, custa ponto.',
    blocos: [
      { materia: 'Língua Portuguesa', qtd: 12 },
      { materia: 'Raciocínio Lógico e Matemática', qtd: 8 },
      { materia: 'Informática', qtd: 6 },
      { materia: 'Atualidades e Ética', qtd: 2 },
      { materia: 'Ética no Serviço Público', qtd: 3 },
      { materia: 'Direito Constitucional', qtd: 6 },
      { materia: 'Direito Administrativo', qtd: 7 },
      { materia: 'Direito Previdenciário', qtd: 16 },
      { materia: 'Segurança da Informação', qtd: 4 }
    ]
  },
  {
    id: 'bb',
    concurso: 'bb',
    nome: 'Simulado Banco do Brasil — Escriturário',
    banca: 'Estilo CESGRANRIO',
    tempoMin: 150,
    corte: 60,
    observacao: 'A prova do Banco do Brasil é de múltipla escolha com cinco alternativas e <strong>não há desconto por erro</strong>. Nunca deixe questão em branco: elimine o que for absurdo e escolha a melhor opção.',
    blocos: [
      { materia: 'Língua Portuguesa', qtd: 10 },
      { materia: 'Raciocínio Lógico e Matemática', qtd: 6 },
      { materia: 'Conhecimentos Bancários', qtd: 14 },
      { materia: 'Matemática Financeira', qtd: 5 },
      { materia: 'Atualidades do Mercado Financeiro', qtd: 4 },
      { materia: 'Vendas e Negociação', qtd: 5 },
      { materia: 'Cultura Digital e Tecnologia', qtd: 4 },
      { materia: 'Língua Inglesa', qtd: 4 }
    ]
  },
  {
    id: 'prf',
    concurso: 'prf',
    nome: 'Simulado PRF — Policial Rodoviário Federal',
    banca: 'Estilo CEBRASPE',
    tempoMin: 180,
    corte: 60,
    observacao: 'A prova da PRF é de Certo/Errado com desconto para erro, além de prova discursiva e demais fases (teste físico, exames e investigação social). O simulado mostra a <strong>pontuação líquida</strong> para você sentir o peso do chute.',
    blocos: [
      { materia: 'Língua Portuguesa', qtd: 10 },
      { materia: 'Raciocínio Lógico e Matemática', qtd: 6 },
      { materia: 'Informática', qtd: 5 },
      { materia: 'Legislação de Trânsito', qtd: 13 },
      { materia: 'Direito Constitucional', qtd: 4 },
      { materia: 'Direito Administrativo', qtd: 4 },
      { materia: 'Direito Penal', qtd: 6 },
      { materia: 'Direito Processual Penal', qtd: 5 },
      { materia: 'Legislação Especial', qtd: 5 },
      { materia: 'Direitos Humanos', qtd: 3 },
      { materia: 'Física', qtd: 4 },
      { materia: 'Geopolítica e Atualidades', qtd: 3 },
      { materia: 'Ética e Legislação PRF', qtd: 2 }
    ]
  }
]);
