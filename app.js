/* Aprova — app de estudos para INSS, Banco do Brasil e PRF
   JavaScript puro, sem dependências. Funciona abrindo o index.html direto. */
(function () {
  'use strict';

  /* ==================== dados básicos ==================== */

  var CONCURSOS = {
    comum: { nome: 'Matérias em comum', curto: 'Comum', icone: '🤝' },
    inss:  { nome: 'INSS',              curto: 'INSS',  icone: '🏛️' },
    bb:    { nome: 'Banco do Brasil',   curto: 'BB',    icone: '🏦' },
    prf:   { nome: 'PRF',               curto: 'PRF',   icone: '🚓' }
  };

  var view = document.getElementById('view');
  var toastEl = document.getElementById('toast');

  /* ==================== estado salvo ==================== */

  var KEY = 'aprova-inss-bb-prf-v1';

  function padrao() {
    return {
      resp: {}, modulos: {}, hist: [], redacoes: {},
      prefs: { tema: '', estudar: 'comum', treino: 'inss', simulado: 'inss', redacao: 'inss' }
    };
  }

  var S = (function carregar() {
    var base = padrao();
    try {
      var salvo = JSON.parse(localStorage.getItem(KEY) || '{}');
      Object.keys(salvo).forEach(function (k) { base[k] = salvo[k]; });
      if (!base.prefs) base.prefs = padrao().prefs;
      if (!base.redacoes) base.redacoes = {};
    } catch (e) { /* começa do zero */ }
    return base;
  })();

  function salvar() {
    try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* modo privativo */ }
  }

  /* ==================== utilidades ==================== */

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function embaralhar(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toast._t);
    toast._t = setTimeout(function () { toastEl.classList.remove('show'); }, 2200);
  }

  function pct(a, b) { return b ? Math.round((a / b) * 100) : 0; }

  function classeBarra(p) { return p >= 70 ? 'ok' : (p >= 50 ? 'warn' : 'bad'); }

  function tempoTexto(seg) {
    var m = Math.floor(seg / 60), s = seg % 60;
    return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
  }

  function dataTexto(ts) {
    var d = new Date(ts);
    return d.toLocaleDateString('pt-BR') + ' ' + d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  }

  function ytLink(busca) {
    return 'https://www.youtube.com/results?search_query=' + encodeURIComponent(busca);
  }

  function trilha(id) {
    for (var i = 0; i < CONC.trilhas.length; i++) if (CONC.trilhas[i].id === id) return CONC.trilhas[i];
    return CONC.trilhas[0];
  }

  function modulo(id) {
    for (var i = 0; i < CONC.trilhas.length; i++) {
      var m = CONC.trilhas[i].modulos;
      for (var j = 0; j < m.length; j++) if (m[j].id === id) return { mod: m[j], trilha: CONC.trilhas[i] };
    }
    return null;
  }

  function questoesDe(filtro) {
    return CONC.banco.filter(function (q) {
      if (filtro.edital && q.editais.indexOf(filtro.edital) === -1) return false;
      if (filtro.comum && q.editais.length < 3) return false;
      if (filtro.especificas && q.editais.length === 3) return false;
      if (filtro.materia && q.materia !== filtro.materia) return false;
      if (filtro.topicos && filtro.topicos.indexOf(q.topico) === -1) return false;
      if (filtro.soErros) {
        var r = S.resp[q.id];
        if (!r || r.ultimoOk !== false) return false;
      }
      return true;
    });
  }

  function registrar(q, acertou) {
    var r = S.resp[q.id] || { acertos: 0, erros: 0 };
    if (acertou) r.acertos++; else r.erros++;
    r.ultimoOk = acertou;
    r.quando = Date.now();
    S.resp[q.id] = r;
    salvar();
  }

  function estatMateria(edital) {
    var mapa = {};
    CONC.banco.forEach(function (q) {
      if (edital && q.editais.indexOf(edital) === -1) return;
      var r = S.resp[q.id];
      if (!r) return;
      var m = mapa[q.materia] || (mapa[q.materia] = { acertos: 0, erros: 0 });
      m.acertos += r.acertos; m.erros += r.erros;
    });
    return mapa;
  }

  /* ==================== componentes de UI ==================== */

  function chipsConcurso(atual, acao, incluirComum) {
    var ids = incluirComum ? ['comum', 'inss', 'bb', 'prf'] : ['inss', 'bb', 'prf'];
    return '<div class="chips">' + ids.map(function (id) {
      var c = CONCURSOS[id];
      return '<button class="chip' + (atual === id ? ' on' : '') + '" data-act="' + acao + '" data-id="' + id + '">' +
        '<span aria-hidden="true">' + c.icone + '</span>' + esc(id === 'comum' ? 'Matérias em comum' : 'Específico ' + c.curto) + '</button>';
    }).join('') + '</div>';
  }

  function barra(p, cls) {
    return '<div class="bar ' + (cls || classeBarra(p)) + '"><span style="width:' + (p > 0 ? Math.max(3, p) : 0) + '%"></span></div>';
  }

  function cardQuestao(q, estado) {
    // estado: { escolha: n|null, revelado: bool, numero, total, marcada }
    var letras = ['A', 'B', 'C', 'D', 'E'];
    var h = '';
    h += '<div class="q-meta">';
    h += '<span class="tag">' + esc(q.materia) + '</span>';
    h += '<span class="tag">' + esc(q.banca) + '</span>';
    if (q.dificuldade) h += '<span class="tag">' + esc(q.dificuldade === 'facil' ? 'fácil' : q.dificuldade === 'media' ? 'média' : 'difícil') + '</span>';
    if (estado.numero) h += '<span class="tag">questão ' + estado.numero + '/' + estado.total + '</span>';
    h += '</div>';
    h += '<div class="enunciado">' + q.enunciado + '</div>';
    h += '<div class="alts">';
    q.alternativas.forEach(function (alt, i) {
      var cls = 'alt';
      if (estado.revelado) {
        if (i === q.gabarito) cls += ' certa';
        else if (i === estado.escolha) cls += ' errada';
      } else if (i === estado.escolha) cls += ' sel';
      h += '<button class="' + cls + '" data-act="resp" data-i="' + i + '"' + (estado.revelado ? ' disabled' : '') + '>' +
        '<span class="k">' + (q.tipo === 'ce' ? (i === 0 ? 'C' : 'E') : letras[i]) + '</span>' +
        '<span>' + alt + '</span></button>';
    });
    h += '</div>';
    if (estado.revelado) {
      var ok = estado.escolha === q.gabarito;
      h += '<div class="feedback ' + (ok ? 'ok' : 'bad') + '">' +
        '<h4>' + (ok ? '✅ Você acertou' : '❌ Você errou') + '</h4>' +
        '<p>' + q.explicacao + '</p></div>';
    }
    return h;
  }

  /* ==================== ABA 1 — CONTEÚDO ==================== */

  function telaEstudar(trilhaId) {
    var t = trilha(trilhaId || S.prefs.estudar);
    S.prefs.estudar = t.id; salvar();

    var lidos = t.modulos.filter(function (m) { return S.modulos[m.id]; }).length;
    var p = pct(lidos, t.modulos.length);

    var h = '';
    h += '<h1>Conteúdo para estudar</h1>';
    h += '<p class="muted">Escolha o bloco. Cada módulo traz o resumo da matéria, os pontos que a banca cobra, vídeos do YouTube e um teste no final.</p>';
    h += chipsConcurso(t.id, 'trilha', true);

    h += '<div class="card hero">';
    h += '<h2 style="margin-top:0">' + esc(t.nome) + '</h2>';
    h += '<p class="small muted" style="margin-top:-6px">' + esc(t.subtitulo) + '</p>';
    h += '<p>' + esc(t.descricao) + '</p>';
    h += '<div class="callout info"><strong>Dica:</strong> ' + esc(t.dica) + '</div>';
    h += '<div class="row between" style="margin-top:10px"><span class="small muted">Progresso nesta trilha</span>' +
      '<span class="small"><strong>' + lidos + '</strong> de ' + t.modulos.length + ' módulos</span></div>';
    h += barra(p);
    h += '</div>';

    // agrupa por matéria
    var ordem = [], grupos = {};
    t.modulos.forEach(function (m) {
      if (!grupos[m.materia]) { grupos[m.materia] = []; ordem.push(m.materia); }
      grupos[m.materia].push(m);
    });

    ordem.forEach(function (mat) {
      h += '<div class="materia-head"><h3>' + esc(mat) + '</h3><span class="small muted">' + grupos[mat].length + ' módulo(s)</span></div>';
      h += '<div class="mod-list">';
      grupos[mat].forEach(function (m, i) {
        var feito = !!S.modulos[m.id];
        h += '<button class="mod' + (feito ? ' done' : '') + '" data-act="abrir-modulo" data-id="' + m.id + '">' +
          '<span class="num">' + (feito ? '✓' : (i + 1)) + '</span>' +
          '<span class="grow"><span class="t">' + esc(m.titulo) + '</span><br>' +
          '<span class="s">' + m.minutos + ' min · ' + m.videos.length + ' vídeos · ' + esc(m.editais.join(', ')) + '</span></span>' +
          '</button>';
      });
      h += '</div>';
    });

    h += '<div class="card tight small muted" style="margin-top:20px">Cada módulo traz três aulas específicas do YouTube sobre o assunto e mais duas buscas prontas. Se algum vídeo sair do ar, use as buscas logo abaixo dele: elas sempre trazem material atualizado.</div>';

    view.innerHTML = h;
    window.scrollTo(0, 0);
  }

  function telaModulo(id) {
    var achado = modulo(id);
    if (!achado) { location.hash = '#/estudar'; return; }
    var m = achado.mod, t = achado.trilha;
    var qs = questoesDe({ topicos: m.topicos });

    var h = '';
    h += '<div class="breadcrumb"><button data-act="voltar-estudar">← ' + esc(t.nome) + '</button></div>';
    h += '<h1>' + esc(m.titulo) + '</h1>';
    h += '<div class="row"><span class="tag">' + esc(m.materia) + '</span><span class="tag">' + m.minutos + ' min</span>' +
      m.editais.map(function (e) { return '<span class="tag">' + esc(e) + '</span>'; }).join('') + '</div>';

    h += '<div class="card">' + m.resumo + '</div>';

    h += '<div class="card"><h3>📌 Pontos-chave para decorar</h3><ul>' +
      m.chaves.map(function (c) { return '<li>' + esc(c) + '</li>'; }).join('') + '</ul></div>';

    if (m.pegadinhas && m.pegadinhas.length) {
      h += '<div class="card"><h3>⚠️ Pegadinhas de prova</h3><ul>' +
        m.pegadinhas.map(function (c) { return '<li>' + esc(c) + '</li>'; }).join('') + '</ul></div>';
    }

    h += '<div class="card"><h3>▶️ Vídeos recomendados</h3><div class="vids">';
    m.videos.forEach(function (v) {
      var href = v.url || ytLink(v.busca);
      var rotulo = v.url
        ? (v.url.indexOf('playlist') > -1 ? 'playlist no YouTube' : 'aula no YouTube')
        : esc(v.canal) + ' · abre uma busca no YouTube';
      h += '<a class="vid" href="' + href + '" target="_blank" rel="noopener">' +
        '<span class="yt" aria-hidden="true">▶</span>' +
        '<span class="grow"><span class="t">' + esc(v.titulo) + '</span><br><span class="c">' + rotulo + '</span></span>' +
        '</a>';
    });
    h += '</div></div>';

    h += '<div class="card" id="quizArea">';
    h += '<h3>🧠 Teste o que você acabou de estudar</h3>';
    if (!qs.length) {
      h += '<p class="muted">Ainda não há questões cadastradas para este módulo. Use a aba Treino para praticar a matéria.</p>';
    } else {
      h += '<p class="muted small">' + qs.length + ' questões sobre este conteúdo, com correção e explicação na hora.</p>';
      h += '<button class="btn wide" data-act="quiz-modulo" data-id="' + m.id + '">Começar o teste</button>';
    }
    h += '</div>';

    h += '<div class="row" style="margin:14px 0 30px">';
    h += '<button class="btn ' + (S.modulos[m.id] ? 'subtle' : 'ghost') + '" data-act="marcar-modulo" data-id="' + m.id + '">' +
      (S.modulos[m.id] ? '✓ Estudado' : 'Marcar como estudado') + '</button>';
    h += '<button class="btn subtle" data-act="treino-materia" data-materia="' + esc(m.materia) + '">Treinar ' + esc(m.materia) + '</button>';
    h += '</div>';

    view.innerHTML = h;
    window.scrollTo(0, 0);
  }

  /* ==================== sessão de questões (treino / módulo) ==================== */

  var sess = null;

  function iniciarSessao(lista, cfg) {
    sess = {
      lista: lista, idx: 0, escolha: null, revelado: false,
      resultados: [], origem: cfg.origem, titulo: cfg.titulo, volta: cfg.volta
    };
    desenharSessao();
  }

  function desenharSessao() {
    var q = sess.lista[sess.idx];
    var p = pct(sess.idx, sess.lista.length);
    var h = '';
    h += '<div class="breadcrumb"><button data-act="sair-sessao">← Sair</button></div>';
    h += '<h1 style="margin-bottom:4px">' + esc(sess.titulo) + '</h1>';
    h += barra(p, 'ok');
    h += '<div class="card">' + cardQuestao(q, { escolha: sess.escolha, revelado: sess.revelado, numero: sess.idx + 1, total: sess.lista.length }) + '</div>';
    h += '<div class="sticky-actions">';
    if (!sess.revelado) {
      h += '<button class="btn wide" data-act="confirmar"' + (sess.escolha === null ? ' disabled' : '') + '>Responder</button>';
    } else {
      h += '<button class="btn wide" data-act="proxima">' + (sess.idx + 1 < sess.lista.length ? 'Próxima questão →' : 'Ver resultado') + '</button>';
    }
    h += '</div>';
    view.innerHTML = h;
    window.scrollTo(0, 0);
  }

  function resultadoSessao() {
    var acertos = sess.resultados.filter(function (r) { return r.ok; }).length;
    var total = sess.resultados.length;
    var p = pct(acertos, total);

    var porMat = {};
    sess.resultados.forEach(function (r) {
      var m = porMat[r.q.materia] || (porMat[r.q.materia] = { a: 0, t: 0 });
      m.t++; if (r.ok) m.a++;
    });

    var fracas = Object.keys(porMat).filter(function (k) { return pct(porMat[k].a, porMat[k].t) < 60; });

    var h = '';
    h += '<h1>Resultado do treino</h1>';
    h += '<div class="card">';
    h += '<div class="statgrid"><div class="stat"><b>' + acertos + '</b><span>acertos</span></div>' +
      '<div class="stat"><b>' + (total - acertos) + '</b><span>erros</span></div>' +
      '<div class="stat"><b>' + p + '%</b><span>aproveitamento</span></div></div>';
    h += '<div style="margin-top:12px">' + barra(p) + '</div>';
    h += '<p class="small muted" style="margin-top:8px">' +
      (p >= 80 ? 'Excelente. Esse conteúdo já está sob controle — volte a ele em uma semana para fixar.' :
        p >= 60 ? 'Bom caminho. Reveja os erros abaixo e refaça o treino amanhã.' :
          'Ainda está frágil. Volte ao conteúdo desta matéria antes de treinar de novo.') + '</p>';
    h += '</div>';

    h += '<div class="card"><h3>Desempenho por matéria</h3><table class="rel"><tr><th>Matéria</th><th class="num">Acertos</th><th class="num">%</th></tr>';
    Object.keys(porMat).forEach(function (k) {
      var v = porMat[k], pp = pct(v.a, v.t);
      h += '<tr><td>' + esc(k) + '</td><td class="num">' + v.a + '/' + v.t + '</td><td class="num"><span class="tag ' +
        (pp >= 70 ? 'ok' : pp >= 50 ? 'warn' : 'bad') + '">' + pp + '%</span></td></tr>';
    });
    h += '</table></div>';

    if (fracas.length) {
      h += '<div class="callout"><strong>Onde focar agora:</strong> ' + esc(fracas.join(', ')) +
        '. Volte na aba Conteúdo, leia os pontos-chave e refaça este treino.</div>';
    } else {
      h += '<div class="callout ok"><strong>Nenhuma matéria abaixo de 60%.</strong> Pode avançar para o próximo bloco do edital.</div>';
    }

    var erros = sess.resultados.filter(function (r) { return !r.ok; });
    if (erros.length) {
      h += '<div class="card"><h3>Revisão dos erros</h3>';
      erros.forEach(function (r, i) {
        h += '<div style="margin:14px 0;padding-top:' + (i ? '14px' : '0') + ';' + (i ? 'border-top:1px solid var(--line)' : '') + '">';
        h += '<div class="q-meta"><span class="tag">' + esc(r.q.materia) + '</span></div>';
        h += '<div class="enunciado">' + r.q.enunciado + '</div>';
        h += '<p class="small"><strong>Você marcou:</strong> ' + esc(r.q.alternativas[r.escolha]) +
          '<br><strong>Gabarito:</strong> ' + esc(r.q.alternativas[r.q.gabarito]) + '</p>';
        h += '<div class="feedback ok"><p>' + r.q.explicacao + '</p></div>';
        h += '</div>';
      });
      h += '</div>';
    }

    h += '<div class="row" style="margin:14px 0 30px">';
    if (erros.length) h += '<button class="btn" data-act="refazer-erros">Refazer só os erros</button>';
    h += '<button class="btn subtle" data-act="sair-sessao">Voltar</button></div>';

    view.innerHTML = h;
    window.scrollTo(0, 0);
  }

  /* ==================== ABA 2 — TREINO RÁPIDO ==================== */

  var treinoCfg = { edital: 'inss', materia: '', qtd: 10, soErros: false, soEspecificas: false };

  function telaTreino() {
    treinoCfg.edital = treinoCfg.edital || S.prefs.treino || 'inss';
    S.prefs.treino = treinoCfg.edital; salvar();

    var disponiveis = questoesDe({
      edital: treinoCfg.edital,
      materia: treinoCfg.materia,
      soErros: treinoCfg.soErros,
      especificas: treinoCfg.soEspecificas
    });

    var materias = [];
    questoesDe({ edital: treinoCfg.edital, especificas: treinoCfg.soEspecificas }).forEach(function (q) {
      if (materias.indexOf(q.materia) === -1) materias.push(q.materia);
    });
    materias.sort();

    var est = estatMateria(treinoCfg.edital);
    var totA = 0, totE = 0;
    Object.keys(est).forEach(function (k) { totA += est[k].acertos; totE += est[k].erros; });

    var h = '';
    h += '<h1>Treino rápido</h1>';
    h += '<p class="muted">Acabou de estudar uma matéria? Venha direto para cá testar. A correção e a explicação aparecem na hora, questão por questão.</p>';
    h += chipsConcurso(treinoCfg.edital, 'treino-edital', false);

    h += '<div class="card">';
    h += '<div class="row">';
    h += '<label class="field grow">Matéria<select data-act="treino-materia-sel"><option value="">Todas as matérias</option>' +
      materias.map(function (m) {
        return '<option value="' + esc(m) + '"' + (treinoCfg.materia === m ? ' selected' : '') + '>' + esc(m) + '</option>';
      }).join('') + '</select></label>';
    h += '<label class="field">Questões<select data-act="treino-qtd">' +
      [5, 10, 15, 20, 30].map(function (n) {
        return '<option value="' + n + '"' + (treinoCfg.qtd === n ? ' selected' : '') + '>' + n + '</option>';
      }).join('') + '</select></label>';
    h += '</div>';
    h += '<div class="row" style="margin-top:10px">';
    h += '<label class="check"><input type="checkbox" data-act="treino-erros"' + (treinoCfg.soErros ? ' checked' : '') + '> Só as que eu errei</label>';
    h += '<label class="check"><input type="checkbox" data-act="treino-espec"' + (treinoCfg.soEspecificas ? ' checked' : '') + '> Só matérias específicas</label>';
    h += '</div>';
    h += '<p class="small muted" style="margin-top:10px">' + disponiveis.length + ' questões disponíveis com esses filtros.</p>';
    h += '<button class="btn wide" data-act="iniciar-treino"' + (disponiveis.length ? '' : ' disabled') + '>Começar treino</button>';
    h += '</div>';

    if (totA + totE > 0) {
      h += '<div class="card"><h3>Seu desempenho acumulado — ' + esc(CONCURSOS[treinoCfg.edital].nome) + '</h3>';
      h += '<div class="statgrid"><div class="stat"><b>' + (totA + totE) + '</b><span>respondidas</span></div>' +
        '<div class="stat"><b>' + pct(totA, totA + totE) + '%</b><span>acerto geral</span></div></div>';
      h += '<table class="rel" style="margin-top:12px"><tr><th>Matéria</th><th class="num">Feitas</th><th class="num">%</th></tr>';
      Object.keys(est).sort().forEach(function (k) {
        var v = est[k], tt = v.acertos + v.erros, pp = pct(v.acertos, tt);
        h += '<tr><td>' + esc(k) + '</td><td class="num">' + tt + '</td><td class="num"><span class="tag ' +
          (pp >= 70 ? 'ok' : pp >= 50 ? 'warn' : 'bad') + '">' + pp + '%</span></td></tr>';
      });
      h += '</table>';
      var piores = Object.keys(est).filter(function (k) {
        var v = est[k]; return (v.acertos + v.erros) >= 3 && pct(v.acertos, v.acertos + v.erros) < 60;
      });
      if (piores.length) h += '<div class="callout"><strong>Prioridade de estudo:</strong> ' + esc(piores.join(', ')) + '.</div>';
      h += '<button class="btn subtle small" data-act="zerar" style="margin-top:6px">Zerar meu histórico</button>';
      h += '</div>';
    } else {
      h += '<div class="card tight muted small">Assim que você responder algumas questões, aparece aqui um painel com o seu aproveitamento por matéria e o que precisa de reforço.</div>';
    }

    view.innerHTML = h;
    window.scrollTo(0, 0);
  }

  /* ==================== ABA 3 — SIMULADOS ==================== */

  var sim = null;   // simulado em andamento
  var timerId = null;

  function simuladoDe(id) {
    for (var i = 0; i < CONC.simulados.length; i++) if (CONC.simulados[i].id === id) return CONC.simulados[i];
    return CONC.simulados[0];
  }

  function telaSimulados(edital) {
    pararTimer();
    var e = edital || S.prefs.simulado || 'inss';
    S.prefs.simulado = e; salvar();
    var cfg = simuladoDe(e);

    var total = 0, linhas = '';
    cfg.blocos.forEach(function (b) {
      var disp = questoesDe({ edital: cfg.concurso, materia: b.materia }).length;
      var n = Math.min(b.qtd, disp);
      total += n;
      linhas += '<tr><td>' + esc(b.materia) + '</td><td class="num">' + n + '</td></tr>';
    });

    var h = '';
    h += '<h1>Simulados completos</h1>';
    h += '<p class="muted">Prova inteira, com tempo cronometrado e relatório no final. Faça sempre em silêncio, sem consultar nada — é assim que o simulado vale a pena.</p>';
    h += chipsConcurso(e, 'sim-edital', false);

    h += '<div class="card hero">';
    h += '<h2 style="margin-top:0">' + esc(cfg.nome) + '</h2>';
    h += '<div class="row"><span class="tag">' + esc(cfg.banca) + '</span><span class="tag">' + total + ' questões</span><span class="tag">' + cfg.tempoMin + ' min</span></div>';
    h += '<div class="callout info">' + cfg.observacao + '</div>';
    h += '<div class="row"><label class="check"><input type="checkbox" data-act="sim-metade"> Versão reduzida (metade das questões e do tempo)</label></div>';
    h += '<button class="btn wide" data-act="iniciar-simulado" data-id="' + cfg.id + '" style="margin-top:10px">Iniciar simulado</button>';
    h += '</div>';

    h += '<div class="card"><h3>Distribuição das questões</h3><table class="rel"><tr><th>Matéria</th><th class="num">Questões</th></tr>' +
      linhas + '<tr><td><strong>Total</strong></td><td class="num"><strong>' + total + '</strong></td></tr></table></div>';

    var hist = S.hist.filter(function (x) { return x.concurso === e; }).slice().reverse();
    if (hist.length) {
      h += '<div class="card"><h3>Seus simulados anteriores</h3><table class="rel"><tr><th>Data</th><th class="num">Nota</th><th class="num">%</th></tr>';
      hist.slice(0, 10).forEach(function (x) {
        h += '<tr><td>' + esc(dataTexto(x.quando)) + '</td><td class="num">' + x.acertos + '/' + x.total + '</td>' +
          '<td class="num"><span class="tag ' + (x.perc >= 70 ? 'ok' : x.perc >= 50 ? 'warn' : 'bad') + '">' + x.perc + '%</span></td></tr>';
      });
      h += '</table></div>';
    }

    view.innerHTML = h;
    window.scrollTo(0, 0);
  }

  function montarSimulado(cfg, metade) {
    var lista = [];
    cfg.blocos.forEach(function (b) {
      var pool = embaralhar(questoesDe({ edital: cfg.concurso, materia: b.materia }));
      var n = Math.min(metade ? Math.ceil(b.qtd / 2) : b.qtd, pool.length);
      lista = lista.concat(pool.slice(0, n));
    });
    return lista;
  }

  function iniciarSimulado(id, metade) {
    var cfg = simuladoDe(id);
    var lista = montarSimulado(cfg, metade);
    if (!lista.length) { toast('Nenhuma questão disponível.'); return; }
    sim = {
      cfg: cfg, lista: lista, idx: 0, respostas: {}, marcadas: {},
      restante: (metade ? Math.round(cfg.tempoMin / 2) : cfg.tempoMin) * 60,
      inicio: Date.now(), metade: !!metade
    };
    iniciarTimer();
    desenharSimulado();
  }

  function iniciarTimer() {
    pararTimer();
    timerId = setInterval(function () {
      if (!sim) { pararTimer(); return; }
      sim.restante--;
      var el = document.getElementById('relogio');
      if (el) {
        el.textContent = tempoTexto(Math.max(0, sim.restante));
        if (sim.restante < 300) el.parentNode.classList.add('alerta');
      }
      if (sim.restante <= 0) { pararTimer(); toast('Tempo esgotado!'); finalizarSimulado(); }
    }, 1000);
  }

  function pararTimer() { if (timerId) { clearInterval(timerId); timerId = null; } }

  function desenharSimulado() {
    var q = sim.lista[sim.idx];
    var respondidas = Object.keys(sim.respostas).length;
    var h = '';

    h += '<div class="timer"><span aria-hidden="true">⏱️</span><span class="t" id="relogio">' + tempoTexto(Math.max(0, sim.restante)) + '</span>' +
      '<span class="grow small muted">' + respondidas + ' de ' + sim.lista.length + ' respondidas</span>' +
      '<button class="btn small danger" data-act="finalizar">Finalizar</button></div>';

    h += '<div class="card">' + cardQuestao(q, {
      escolha: sim.respostas[q.id] === undefined ? null : sim.respostas[q.id],
      revelado: false, numero: sim.idx + 1, total: sim.lista.length
    }) + '</div>';

    h += '<div class="row" style="margin:10px 0">';
    h += '<button class="btn subtle" data-act="sim-anterior"' + (sim.idx === 0 ? ' disabled' : '') + '>← Anterior</button>';
    h += '<button class="btn subtle grow" data-act="sim-marcar">' + (sim.marcadas[q.id] ? '★ Desmarcar' : '☆ Marcar para revisar') + '</button>';
    h += '<button class="btn" data-act="sim-proxima"' + (sim.idx === sim.lista.length - 1 ? ' disabled' : '') + '>Próxima →</button>';
    h += '</div>';

    h += '<div class="card"><h4>Navegação</h4><div class="gridnav">';
    sim.lista.forEach(function (qq, i) {
      var cls = '';
      if (sim.respostas[qq.id] !== undefined) cls += ' resp';
      if (sim.marcadas[qq.id]) cls += ' marc';
      if (i === sim.idx) cls += ' atual';
      h += '<button class="' + cls.trim() + '" data-act="sim-ir" data-i="' + i + '">' + (i + 1) + '</button>';
    });
    h += '</div></div>';

    view.innerHTML = h;
    window.scrollTo(0, 0);
  }

  function finalizarSimulado() {
    pararTimer();
    var acertos = 0, errosCE = 0, brancos = 0;
    var porMat = {};
    var resultados = [];

    sim.lista.forEach(function (q) {
      var esc_ = sim.respostas[q.id];
      var m = porMat[q.materia] || (porMat[q.materia] = { a: 0, t: 0 });
      m.t++;
      if (esc_ === undefined) { brancos++; }
      else {
        var ok = esc_ === q.gabarito;
        if (ok) { acertos++; m.a++; } else if (q.tipo === 'ce') errosCE++;
        registrar(q, ok);
      }
      resultados.push({ q: q, escolha: esc_, ok: esc_ === q.gabarito });
    });

    var total = sim.lista.length;
    var perc = pct(acertos, total);
    var liquida = acertos - errosCE;
    var gasto = Math.round((Date.now() - sim.inicio) / 1000);

    S.hist.push({
      concurso: sim.cfg.concurso, quando: Date.now(), acertos: acertos, total: total,
      perc: perc, liquida: liquida, segundos: gasto
    });
    if (S.hist.length > 60) S.hist = S.hist.slice(-60);
    salvar();

    var fracas = Object.keys(porMat).filter(function (k) { return pct(porMat[k].a, porMat[k].t) < 60; });
    var temCE = sim.lista.some(function (q) { return q.tipo === 'ce'; });

    var h = '';
    h += '<h1>Resultado — ' + esc(sim.cfg.nome) + '</h1>';
    h += '<div class="card">';
    h += '<div class="statgrid">';
    h += '<div class="stat"><b>' + acertos + '</b><span>acertos</span></div>';
    h += '<div class="stat"><b>' + (total - acertos - brancos) + '</b><span>erros</span></div>';
    h += '<div class="stat"><b>' + brancos + '</b><span>em branco</span></div>';
    h += '<div class="stat"><b>' + perc + '%</b><span>aproveitamento</span></div>';
    h += '</div>';
    h += '<div style="margin-top:12px">' + barra(perc) + '</div>';
    h += '<p class="small muted">Tempo usado: ' + tempoTexto(gasto) + ' de ' + (sim.metade ? Math.round(sim.cfg.tempoMin / 2) : sim.cfg.tempoMin) + ' minutos.</p>';
    if (temCE) {
      h += '<div class="callout"><strong>Pontuação líquida (padrão CEBRASPE): ' + liquida + ' ponto(s).</strong><br>' +
        'Cada item Certo/Errado marcado errado anula um acerto. ' +
        (errosCE > acertos / 3 ? 'Você está chutando demais — na prova real isso apaga pontos que você conquistou.' : 'Seu nível de chute está controlado.') + '</div>';
    }
    h += '<p>' + (perc >= sim.cfg.corte ?
      '✅ Acima da linha de corte estimada (' + sim.cfg.corte + '%). Mantenha o ritmo e continue revisando.' :
      '⚠️ Abaixo da linha de corte estimada (' + sim.cfg.corte + '%). Não desanime: use o relatório abaixo para escolher o que estudar amanhã.') + '</p>';
    h += '</div>';

    h += '<div class="card"><h3>Desempenho por matéria</h3><table class="rel"><tr><th>Matéria</th><th class="num">Acertos</th><th class="num">%</th></tr>';
    Object.keys(porMat).forEach(function (k) {
      var v = porMat[k], pp = pct(v.a, v.t);
      h += '<tr><td>' + esc(k) + '</td><td class="num">' + v.a + '/' + v.t + '</td><td class="num"><span class="tag ' +
        (pp >= 70 ? 'ok' : pp >= 50 ? 'warn' : 'bad') + '">' + pp + '%</span></td></tr>';
    });
    h += '</table>';
    if (fracas.length) {
      h += '<div class="callout"><strong>Foque nestas matérias:</strong> ' + esc(fracas.join(', ')) +
        '. Abra a aba Conteúdo, releia os pontos-chave e depois faça um treino rápido só dessa matéria.</div>';
    } else {
      h += '<div class="callout ok">Nenhuma matéria abaixo de 60%. Excelente equilíbrio.</div>';
    }
    h += '</div>';

    h += '<div class="card"><h3>Gabarito comentado</h3>';
    resultados.forEach(function (r, i) {
      var st = r.escolha === undefined ? 'branco' : (r.ok ? 'ok' : 'erro');
      h += '<details class="faq"><summary>' + (i + 1) + '. ' +
        (st === 'ok' ? '✅' : st === 'erro' ? '❌' : '⬜') + ' ' + esc(r.q.materia) + '</summary>';
      h += '<div class="enunciado" style="margin-top:8px">' + r.q.enunciado + '</div>';
      h += '<p class="small"><strong>Sua resposta:</strong> ' +
        (r.escolha === undefined ? '<em>em branco</em>' : esc(r.q.alternativas[r.escolha])) +
        '<br><strong>Gabarito:</strong> ' + esc(r.q.alternativas[r.q.gabarito]) + '</p>';
      h += '<div class="feedback ' + (r.ok ? 'ok' : 'bad') + '"><p>' + r.q.explicacao + '</p></div>';
      h += '</details>';
    });
    h += '</div>';

    h += '<div class="row" style="margin:14px 0 30px">' +
      '<button class="btn" data-act="novo-simulado" data-id="' + sim.cfg.id + '">Refazer simulado</button>' +
      '<button class="btn subtle" data-act="ir-simulados">Voltar</button></div>';

    sim = null;
    view.innerHTML = h;
    window.scrollTo(0, 0);
  }

  /* ==================== ABA 4 — REDAÇÃO ==================== */

  function temaRedacao(id) {
    for (var i = 0; i < CONC.redacoes.length; i++) if (CONC.redacoes[i].id === id) return CONC.redacoes[i];
    return null;
  }

  function montarPrompt(t, texto) {
    var banca = t.banca.replace('Estilo ', '');
    var p = '';
    p += 'Você é um examinador experiente da banca ' + banca + ' corrigindo a prova discursiva do concurso ' +
      CONCURSOS[t.concurso].nome + '. Corrija a redação abaixo com o rigor de uma prova real.\n\n';
    p += '=== TEMA PROPOSTO ===\n';
    p += t.titulo + '\n\n';
    p += 'Texto motivador: ' + t.motivador + '\n\n';
    p += 'Comando: ' + t.comando + '\n\n';
    p += 'Aspectos de abordagem obrigatória:\n';
    t.aspectos.forEach(function (a, i) { p += (i + 1) + ') ' + a + '\n'; });
    p += '\nGênero: ' + t.genero + '. Extensão máxima: ' + t.linhas + ' linhas.\n\n';
    p += '=== COMO CORRIGIR ===\n';
    p += 'Pontue cada critério:\n';
    p += '1. Apresentação e estrutura textual (paragrafação, coesão, coerência) — 0 a 2 pontos\n';
    p += '2. Desenvolvimento do tema e dos aspectos obrigatórios — 0 a 6 pontos\n';
    p += '3. Domínio da norma culta (gramática, ortografia, pontuação, concordância, regência, crase) — 0 a 2 pontos\n';
    p += 'Nota final: 0 a 10.\n\n';
    p += 'Na resposta, faça exatamente isto, nesta ordem:\n';
    p += '1. A nota de cada critério e a nota final, com uma frase de justificativa em cada.\n';
    p += '2. Aspecto por aspecto, diga se foi abordado, abordado parcialmente ou não abordado. Aspecto ausente derruba muito a nota.\n';
    p += '3. Liste TODOS os erros de português em tabela: trecho original | qual é o erro | como deveria ser.\n';
    p += '4. Aponte os problemas de argumentação: afirmação sem justificativa, senso comum, repetição de ideia, fuga ao tema, conclusão que não conclui.\n';
    p += '5. Reescreva apenas a introdução e a conclusão, mostrando como ficariam melhores, e explique o que mudou.\n';
    p += '6. Termine com "3 coisas para treinar na próxima redação", bem específicas.\n\n';
    p += 'Regras: não reescreva o texto inteiro; não elogie por educação; seja direto e rigoroso como banca; ';
    p += 'avise se o texto passou do limite de linhas ou ficou curto demais. Responda em português do Brasil.\n\n';
    p += '=== MINHA REDAÇÃO ===\n';
    p += (texto && texto.trim() ? texto.trim() : '[cole aqui a sua redação]') + '\n';
    return p;
  }

  function copiar(txt, msg) {
    function fallback() {
      var ta = document.createElement('textarea');
      ta.value = txt; ta.setAttribute('readonly', '');
      ta.style.position = 'fixed'; ta.style.top = '-1000px';
      document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); toast(msg); }
      catch (e) { toast('Não deu para copiar. Selecione o texto do prompt e copie na mão.'); }
      document.body.removeChild(ta);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(txt).then(function () { toast(msg); }, fallback);
    } else { fallback(); }
  }

  function contagem(txt) {
    var limpo = txt.replace(/\s+/g, ' ').trim();
    var palavras = limpo ? limpo.split(' ').length : 0;
    return { palavras: palavras, caracteres: txt.length, linhas: Math.ceil(txt.length / 70) };
  }

  function telaRedacoes(edital) {
    var e = edital || S.prefs.redacao || 'inss';
    S.prefs.redacao = e; salvar();
    var temas = CONC.redacoes.filter(function (t) { return t.concurso === e; });

    var h = '';
    h += '<h1>Redação corrigida por IA</h1>';
    h += '<p class="muted">Aqui o tema já vem pronto, no formato da banca. Você escreve, copia o prompt com um clique e cola num chat de inteligência artificial — ele devolve a nota por critério, os erros de português e o que treinar.</p>';
    h += chipsConcurso(e, 'red-edital', false);

    h += '<div class="card hero"><h3 style="margin-top:0">Como funciona</h3><ol>' +
      '<li>Escolha um tema abaixo e leia o comando com atenção.</li>' +
      '<li>Escreva no campo do app (ou no papel, cronometrando — e depois digite).</li>' +
      '<li>Clique em <strong>Copiar prompt + minha redação</strong>.</li>' +
      '<li>Cole num chat de IA (ChatGPT, Claude ou Gemini) e envie. A correção vem na hora.</li>' +
      '<li>Reescreva o texto corrigindo o que ele apontou. É a reescrita que faz a nota subir.</li>' +
      '</ol><p class="small muted" style="margin-bottom:0">Dica: faça uma redação por semana e guarde as correções. Em um mês dá para ver o padrão de erro se repetindo — é nele que se estuda.</p></div>';

    if (e === 'inss') {
      h += '<div class="callout">As últimas edições do concurso de Técnico do Seguro Social não tiveram prova discursiva. Mesmo assim, escrever sobre esses temas é o melhor jeito de fixar Direito Previdenciário — e o edital pode voltar a cobrar.</div>';
    }

    h += '<div class="mod-list">';
    temas.forEach(function (t, i) {
      var escrito = S.redacoes[t.id] && S.redacoes[t.id].trim();
      h += '<button class="mod' + (escrito ? ' done' : '') + '" data-act="abrir-red" data-id="' + t.id + '">' +
        '<span class="num">' + (escrito ? '✓' : (i + 1)) + '</span>' +
        '<span class="grow"><span class="t">' + esc(t.titulo) + '</span><br>' +
        '<span class="s">' + esc(t.genero) + ' · ' + t.linhas + ' linhas · ' + t.tempoMin + ' min</span></span>' +
        '</button>';
    });
    h += '</div>';

    view.innerHTML = h;
    window.scrollTo(0, 0);
  }

  function telaRedacaoTema(id) {
    var t = temaRedacao(id);
    if (!t) { location.hash = '#/redacao'; return; }
    var texto = S.redacoes[t.id] || '';
    var c = contagem(texto);

    var h = '';
    h += '<div class="breadcrumb"><button data-act="voltar-redacao">← Temas de redação</button></div>';
    h += '<h1>' + esc(t.titulo) + '</h1>';
    h += '<div class="row"><span class="tag">' + esc(CONCURSOS[t.concurso].nome) + '</span>' +
      '<span class="tag">' + esc(t.banca) + '</span><span class="tag">' + esc(t.genero) + '</span>' +
      '<span class="tag">até ' + t.linhas + ' linhas</span><span class="tag">' + t.tempoMin + ' min</span></div>';

    h += '<div class="card">';
    h += '<h3 style="margin-top:0">Texto motivador</h3><p>' + esc(t.motivador) + '</p>';
    h += '<h3>Comando da prova</h3><p><strong>' + esc(t.comando) + '</strong></p>';
    h += '<p>Ao elaborar seu texto, aborde, necessariamente, os seguintes aspectos:</p><ol>' +
      t.aspectos.map(function (a) { return '<li>' + esc(a) + '</li>'; }).join('') + '</ol>';
    h += '<p class="small muted">Não se identifique no texto: em prova real, identificação anula a redação.</p>';
    h += '</div>';

    h += '<details class="faq"><summary>👀 Ver o que a banca espera (abra só depois de escrever)</summary><ul>' +
      t.espera.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></details>';

    h += '<div class="card">';
    h += '<h3 style="margin-top:0">Sua redação</h3>';
    h += '<textarea class="redacao" id="txtRedacao" data-act="digitar" placeholder="Escreva aqui. O texto fica salvo neste navegador automaticamente."></textarea>';
    h += '<p class="small muted" id="contador">' + c.palavras + ' palavras · ' + c.caracteres +
      ' caracteres · aproximadamente ' + c.linhas + ' de ' + t.linhas + ' linhas</p>';
    h += '<div class="row">';
    h += '<button class="btn grow" data-act="copiar-tudo" data-id="' + t.id + '">📋 Copiar prompt + minha redação</button>';
    h += '<button class="btn subtle" data-act="copiar-prompt" data-id="' + t.id + '">Copiar só o prompt</button>';
    h += '<button class="btn subtle" data-act="limpar-red" data-id="' + t.id + '">Limpar</button>';
    h += '</div>';
    h += '</div>';

    h += '<div class="card">';
    h += '<h3 style="margin-top:0">Onde colar</h3>';
    h += '<p class="small muted">Abra um destes, cole e envie. Todos têm versão gratuita.</p>';
    h += '<div class="ia-links">' +
      '<a href="https://chatgpt.com/" target="_blank" rel="noopener">ChatGPT</a>' +
      '<a href="https://claude.ai/new" target="_blank" rel="noopener">Claude</a>' +
      '<a href="https://gemini.google.com/app" target="_blank" rel="noopener">Gemini</a>' +
      '</div>';
    h += '</div>';

    h += '<details class="faq"><summary>Ver o prompt que será copiado</summary>' +
      '<pre class="prompt" id="preview" style="margin-top:10px"></pre></details>';

    h += '<div style="height:24px"></div>';

    view.innerHTML = h;
    var ta = document.getElementById('txtRedacao');
    ta.value = texto;
    document.getElementById('preview').textContent = montarPrompt(t, texto);
    window.scrollTo(0, 0);
  }

  /* ==================== navegação ==================== */

  function abaAtiva(nome) {
    document.querySelectorAll('.tabs a').forEach(function (a) {
      a.classList.toggle('active', a.dataset.tab === nome);
    });
  }

  function rotear() {
    var h = location.hash || '#/estudar';
    var partes = h.replace('#/', '').split('/');
    pararTimer();
    if (partes[0] === 'treino') { abaAtiva('treino'); telaTreino(); }
    else if (partes[0] === 'redacao') {
      abaAtiva('redacao');
      if (partes[1]) telaRedacaoTema(partes[1]); else telaRedacoes();
    }
    else if (partes[0] === 'simulados') { abaAtiva('simulados'); telaSimulados(); }
    else if (partes[0] === 'modulo') { abaAtiva('estudar'); telaModulo(partes[1]); }
    else { abaAtiva('estudar'); telaEstudar(partes[1]); }
  }

  window.addEventListener('hashchange', rotear);

  /* ==================== eventos ==================== */

  view.addEventListener('change', function (e) {
    var el = e.target.closest('[data-act]');
    if (!el) return;
    var act = el.dataset.act;
    if (act === 'treino-materia-sel') { treinoCfg.materia = el.value; telaTreino(); }
    else if (act === 'treino-qtd') { treinoCfg.qtd = parseInt(el.value, 10); }
    else if (act === 'treino-erros') { treinoCfg.soErros = el.checked; telaTreino(); }
    else if (act === 'treino-espec') { treinoCfg.soEspecificas = el.checked; treinoCfg.materia = ''; telaTreino(); }
  });

  view.addEventListener('input', function (e) {
    var el = e.target.closest('[data-act="digitar"]');
    if (!el) return;
    var id = (location.hash.split('/')[2] || '');
    var t = temaRedacao(id);
    if (!t) return;
    S.redacoes[t.id] = el.value;
    clearTimeout(view._salvaRed);
    view._salvaRed = setTimeout(salvar, 400);
    var c = contagem(el.value);
    var cont = document.getElementById('contador');
    if (cont) {
      cont.textContent = c.palavras + ' palavras · ' + c.caracteres +
        ' caracteres · aproximadamente ' + c.linhas + ' de ' + t.linhas + ' linhas';
      cont.classList.toggle('estourou', c.linhas > t.linhas);
    }
    var pre = document.getElementById('preview');
    if (pre) pre.textContent = montarPrompt(t, el.value);
  });

  view.addEventListener('click', function (e) {
    var el = e.target.closest('[data-act]');
    if (!el) return;
    var act = el.dataset.act;

    switch (act) {
      case 'trilha':
        location.hash = '#/estudar/' + el.dataset.id;
        break;

      case 'abrir-modulo':
        location.hash = '#/modulo/' + el.dataset.id;
        break;

      case 'voltar-estudar':
        location.hash = '#/estudar/' + S.prefs.estudar;
        break;

      case 'marcar-modulo': {
        var id = el.dataset.id;
        if (S.modulos[id]) { delete S.modulos[id]; toast('Marcação removida.'); }
        else { S.modulos[id] = Date.now(); toast('Módulo marcado como estudado!'); }
        salvar(); telaModulo(id);
        break;
      }

      case 'quiz-modulo': {
        var ach = modulo(el.dataset.id);
        var lista = embaralhar(questoesDe({ topicos: ach.mod.topicos }));
        iniciarSessao(lista, { titulo: ach.mod.titulo, volta: '#/modulo/' + ach.mod.id });
        break;
      }

      case 'treino-materia':
        treinoCfg.materia = el.dataset.materia;
        treinoCfg.soErros = false;
        location.hash = '#/treino';
        break;

      case 'treino-edital':
        treinoCfg.edital = el.dataset.id;
        treinoCfg.materia = '';
        telaTreino();
        break;

      case 'iniciar-treino': {
        var qs = embaralhar(questoesDe({
          edital: treinoCfg.edital, materia: treinoCfg.materia,
          soErros: treinoCfg.soErros, especificas: treinoCfg.soEspecificas
        })).slice(0, treinoCfg.qtd);
        if (!qs.length) { toast('Nenhuma questão com esses filtros.'); return; }
        iniciarSessao(qs, {
          titulo: treinoCfg.materia || CONCURSOS[treinoCfg.edital].nome,
          volta: '#/treino'
        });
        break;
      }

      case 'resp':
        if (sim) {
          var qq = sim.lista[sim.idx];
          var i = parseInt(el.dataset.i, 10);
          if (sim.respostas[qq.id] === i) delete sim.respostas[qq.id];
          else sim.respostas[qq.id] = i;
          desenharSimulado();
        } else if (sess && !sess.revelado) {
          sess.escolha = parseInt(el.dataset.i, 10);
          desenharSessao();
        }
        break;

      case 'confirmar': {
        if (!sess || sess.escolha === null) return;
        var q = sess.lista[sess.idx];
        var ok = sess.escolha === q.gabarito;
        registrar(q, ok);
        sess.resultados.push({ q: q, escolha: sess.escolha, ok: ok });
        sess.revelado = true;
        desenharSessao();
        break;
      }

      case 'proxima':
        sess.idx++;
        sess.escolha = null;
        sess.revelado = false;
        if (sess.idx >= sess.lista.length) resultadoSessao();
        else desenharSessao();
        break;

      case 'refazer-erros': {
        var errs = sess.resultados.filter(function (r) { return !r.ok; }).map(function (r) { return r.q; });
        iniciarSessao(embaralhar(errs), { titulo: 'Refazendo os erros', volta: sess.volta });
        break;
      }

      case 'sair-sessao': {
        var v = sess ? sess.volta : '#/treino';
        sess = null;
        location.hash = v;
        if ((location.hash || '') === v) rotear();
        break;
      }

      case 'sim-edital':
        telaSimulados(el.dataset.id);
        break;

      case 'iniciar-simulado': {
        var meia = document.querySelector('[data-act="sim-metade"]');
        iniciarSimulado(el.dataset.id, meia && meia.checked);
        break;
      }

      case 'sim-proxima': sim.idx = Math.min(sim.idx + 1, sim.lista.length - 1); desenharSimulado(); break;
      case 'sim-anterior': sim.idx = Math.max(sim.idx - 1, 0); desenharSimulado(); break;
      case 'sim-ir': sim.idx = parseInt(el.dataset.i, 10); desenharSimulado(); break;

      case 'sim-marcar': {
        var qm = sim.lista[sim.idx];
        if (sim.marcadas[qm.id]) delete sim.marcadas[qm.id]; else sim.marcadas[qm.id] = true;
        desenharSimulado();
        break;
      }

      case 'finalizar': {
        var faltam = sim.lista.length - Object.keys(sim.respostas).length;
        var msg = faltam ? 'Ainda faltam ' + faltam + ' questões sem resposta. Finalizar mesmo assim?' : 'Finalizar e ver o resultado?';
        if (confirm(msg)) finalizarSimulado();
        break;
      }

      case 'novo-simulado':
        iniciarSimulado(el.dataset.id, false);
        break;

      case 'ir-simulados':
        telaSimulados();
        break;

      case 'red-edital':
        telaRedacoes(el.dataset.id);
        break;

      case 'abrir-red':
        location.hash = '#/redacao/' + el.dataset.id;
        break;

      case 'voltar-redacao':
        location.hash = '#/redacao';
        break;

      case 'copiar-tudo': {
        var tt = temaRedacao(el.dataset.id);
        var campo = document.getElementById('txtRedacao');
        var escrito = campo ? campo.value : (S.redacoes[tt.id] || '');
        if (!escrito.trim()) { toast('Escreva a redação primeiro — ou use "Copiar só o prompt".'); return; }
        copiar(montarPrompt(tt, escrito), 'Copiado! Agora cole no chat de IA e envie.');
        break;
      }

      case 'copiar-prompt': {
        var tp = temaRedacao(el.dataset.id);
        copiar(montarPrompt(tp, ''), 'Prompt copiado. Cole a sua redação no fim dele.');
        break;
      }

      case 'limpar-red': {
        if (!confirm('Apagar o que você escreveu neste tema?')) return;
        delete S.redacoes[el.dataset.id];
        salvar();
        telaRedacaoTema(el.dataset.id);
        toast('Texto apagado.');
        break;
      }

      case 'zerar':
        if (confirm('Isso apaga todo o seu histórico de respostas e simulados neste aparelho. Continuar?')) {
          S = padrao(); salvar(); toast('Histórico zerado.'); telaTreino();
        }
        break;
    }
  });

  /* ==================== tema ==================== */

  document.getElementById('btnTema').addEventListener('click', function () {
    var atual = document.documentElement.getAttribute('data-theme');
    var novo = atual === 'dark' ? 'light' : (atual === 'light' ? '' : 'dark');
    if (novo) document.documentElement.setAttribute('data-theme', novo);
    else document.documentElement.removeAttribute('data-theme');
    S.prefs.tema = novo; salvar();
    toast(novo === 'dark' ? 'Tema escuro' : novo === 'light' ? 'Tema claro' : 'Tema do sistema');
  });

  if (S.prefs && S.prefs.tema) document.documentElement.setAttribute('data-theme', S.prefs.tema);

  /* ==================== service worker (offline) ==================== */

  if ('serviceWorker' in navigator && location.protocol.indexOf('http') === 0) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js').catch(function () { /* segue sem offline */ });
    });
  }

  /* ==================== start ==================== */

  rotear();
})();
