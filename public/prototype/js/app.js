/* ================= MOCK DATA (shared across screens) ================= */
const RECRUITERS = [
  { id:'mc', name:'Marie C.',   full:'Marie Caballero',  cls:'mc' },
  { id:'al', name:'Alliso L.',  full:'Alliso López',     cls:'al' },
  { id:'bf', name:'Brigit F.',  full:'Brigit Flores',    cls:'bf' },
  { id:'es', name:'Eliana S.',  full:'Eliana Sánchez',   cls:'es' },
];
const rec = id => RECRUITERS.find(r=>r.id===id);

const ORDERS = [
  { id:1030, title:'AI Solutions Engineer', type:'Nuevo Ingreso', company:'Kasnet',     recruiter:'mc', priority:'Urgente', proc:3, days:11, stalled:0 },
  { id:1026, title:'Backend Developer',     type:'Nuevo Ingreso', company:'Kasnet',     recruiter:'al', priority:'Urgente', proc:2, days:12, stalled:0 },
  { id:1016, title:'Consultor SRE',         type:'Nuevo Ingreso', company:'Kasnet',     recruiter:'bf', priority:'Urgente', proc:2, days:25, stalled:11 },
  { id:1004, title:'Data Engineer',         type:'Nuevo Ingreso', company:'Lindcorp',   recruiter:'mc', priority:'Urgente', proc:4, days:33, stalled:8  },
  { id:1035, title:'A.P. Fullstack',        type:'Nuevo Ingreso', company:'Interseguro',recruiter:'mc', priority:'Urgente', proc:0, days:5,  stalled:0  },
  { id:1023, title:'Consultor SAP FICO',    type:'Nuevo Ingreso', company:'Yanbal',     recruiter:'al', priority:'Urgente', proc:4, days:15, stalled:0  },
  { id:1032, title:'Analista Automatizador de Calidad', type:'Nuevo Ingreso', company:'Kasnet', recruiter:'bf', priority:'Urgente', proc:2, days:11, stalled:0 },
  { id:1002, title:'Scrum Master',          type:'Nuevo Ingreso', company:'Sanna',      recruiter:'al', priority:'Urgente', proc:4, days:33, stalled:14 },
  { id:1034, title:'Analista Programador N1', type:'Reemplazo',   company:'Bata',       recruiter:'bf', priority:'Alta',    proc:3, days:6,  stalled:0 },
  { id:1031, title:'Especialista CRM',      type:'Nuevo Ingreso', company:'Auna',       recruiter:'mc', priority:'Alta',    proc:3, days:11, stalled:0 },
  { id:1020, title:'Fullstack — Reemp. Cazzia', type:'Reemplazo', company:'Kasnet',     recruiter:'al', priority:'Alta',    proc:2, days:20, stalled:0 },
  { id:1009, title:'Product Designer',      type:'Nuevo Ingreso', company:'Auna',       recruiter:'bf', priority:'Alta',    proc:2, days:29, stalled:8 },
  { id:1010, title:'Agile Coach',           type:'Nuevo Ingreso', company:'Auna',       recruiter:'mc', priority:'Alta',    proc:3, days:29, stalled:8 },
  { id:1024, title:'Analista de Calidad de Software', type:'Nuevo Ingreso', company:'Auna', recruiter:'mc', priority:'Baja', proc:3, days:15, stalled:0 },
  { id:1013, title:'Fullstack Developer',   type:'Nuevo Ingreso', company:'Auna',       recruiter:'al', priority:'Baja',    proc:2, days:27, stalled:15 },
  { id:1029, title:'Ingeniero de Datos',    type:'Nuevo Ingreso', company:'Auna',       recruiter:'mc', priority:'Baja',    proc:3, days:11, stalled:0 },
];

const CANDIDATES = [
  { id:1, name:'Fabian Villanueva Jaqui',  role:'IA Engineer',            city:'Lince',     status:'Entrevista', skills:['IA Engineer','Arquitecto IA','AWS','Azure'], extra:6, avail:'2 semanas', salary:'S/ 12,500', source:'LinkedIn', recruiter:'mc' },
  { id:2, name:'Bryan Inche Condor',        role:'IA Engineer',            city:'SJL',       status:'Entrevista', skills:['Agentic AI','AWS','Python','LLMs'], extra:1, avail:'Inmediata', salary:'S/ 12,500', source:'LinkedIn', recruiter:'mc' },
  { id:3, name:'Jack Anthony Aguilar Cabrera', role:'IA Engineer',         city:'San Isidro',status:'Rechazado',  skills:['IA Engineer','AWS','Python'], extra:0, avail:'Por confirmar', salary:'S/ 13,000', source:'LinkedIn', recruiter:'mc' },
  { id:4, name:'Yeisly Junior Aguilera Alvarado', role:'QA Automation',    city:'Piura',     status:'Calificado', skills:['Selenium','Java','API Testing','TestNG'], extra:0, avail:'Inmediata', salary:'S/ 6,500', source:'Bumeran', recruiter:'bf' },
  { id:5, name:'Verónica Antolina Unocc Jacinto', role:'QA Automation',    city:'Lima',      status:'Nuevo',      skills:['Cypress','JavaScript','API Testing'], extra:0, avail:'2 semanas', salary:'S/ 6,000', source:'LinkedIn', recruiter:'bf' },
  { id:6, name:'Italo Ramiro Sanchez Simeon', role:'Scrum Master',         city:'Lima',      status:'Calificado', skills:['Scrum','SAFe','Jira','Kanban'], extra:0, avail:'Por confirmar', salary:'—', source:'LinkedIn', recruiter:'es' },
  { id:7, name:'Randy Miller Rodriguez Flores', role:'Data Engineer',      city:'San Miguel',status:'Enviado',    skills:['Python','Spark','Airflow','GCP'], extra:1, avail:'1 semana', salary:'S/ 7,000', source:'LinkedIn', recruiter:'mc' },
  { id:8, name:'Maria Cielo Escobedo Neyra', role:'AI / Data Pricing Manager', city:'La Molina', status:'Calificado', skills:['AWS','Amazon Bedrock','Pricing','Python'], extra:0, avail:'1 semana', salary:'S/ 8,000', source:'LinkedIn', recruiter:'mc' },
  { id:9, name:'Axel David Valuis Ramirez', role:'QA Automation',          city:'Lima',      status:'Enviado',    skills:['QA','Cypress','JavaScript','Postman'], extra:0, avail:'Inmediata', salary:'S/ 5,000 – 5,500', source:'Bumeran', recruiter:'bf' },
  { id:10,name:'Nicol Lesly Mendoza Mattos',role:'Fullstack',              city:'Lima',      status:'Entrevista', skills:['React','Node.js','MongoDB','TypeScript'], extra:0, avail:'Inmediata', salary:'S/ 6,500', source:'LinkedIn', recruiter:'bf' },
  { id:11,name:'Diego Torres Perez',        role:'Backend',                city:'Lima',      status:'Nuevo',      skills:['Node.js','PostgreSQL','AWS'], extra:0, avail:'2 semanas', salary:'S/ 7,500', source:'LinkedIn', recruiter:'al' },
  { id:12,name:'Lucía Ramos Quispe',        role:'SAP FICO',               city:'Callao',    status:'Calificado', skills:['SAP FICO','ABAP'], extra:0, avail:'Por confirmar', salary:'S/ 9,000', source:'LinkedIn', recruiter:'al' },
  { id:13,name:'Marco Antonio Silva',       role:'Desarrollador web',      city:'Lima',      status:'Nuevo',      skills:['HTML','CSS','JavaScript'], extra:0, avail:'Inmediata', salary:'S/ 4,000', source:'Bumeran', recruiter:'es' },
  { id:14,name:'Karla Vega Muñoz',          role:'Analista QA',            city:'Lima',      status:'Enviado',    skills:['Manual QA','Jira'], extra:0, avail:'1 semana', salary:'S/ 4,500', source:'LinkedIn', recruiter:'bf' },
  { id:15,name:'Renzo Chávez',              role:'IA Engineer',            city:'Lima',      status:'Nuevo',      skills:['LangChain','LLMs','Python'], extra:0, avail:'Por confirmar', salary:'S/ 11,000', source:'LinkedIn', recruiter:'mc' },
  { id:16,name:'Andrea Salas',              role:'QA Automation',          city:'Lima',      status:'Nuevo',      skills:['Playwright','TypeScript'], extra:0, avail:'Por confirmar', salary:'—', source:'Bumeran', recruiter:'bf' },
];

/* ================= SIDEBAR ================= */
function renderSidebar(active){
  const el = document.getElementById('sidebar'); if(!el) return;
  const items = [
    { id:'tablero',    label:'Tablero',           href:'tablero.html',    ico:'📋' },
    { id:'ordenes',    label:'Órdenes de Trabajo',href:'ordenes.html',    ico:'📑' },
    { id:'candidatos', label:'Cándidatos',        href:'candidatos.html', ico:'👥' },
    { id:'companias',  label:'Compañias',         href:'#',               ico:'🏢' },
    { id:'calendario', label:'Calendario',        href:'#',               ico:'📅' },
    { id:'reportes',   label:'Reportes',          href:'#',               ico:'📊' },
  ];
  el.innerHTML = `
    <div class="brand"><span class="b1">BM</span><span class="b2">&amp;</span><span class="b3">L</span>
      <div class="bsub">BUSINESS MANAGEMENT AND LOGISTICS</div>
    </div>
    <div class="section-label">PRINCIPAL</div>
    <nav>${items.map(i=>`<a href="${i.href}" class="${i.id===active?'active':''}"><span class="ico">${i.ico}</span>${i.label}</a>`).join('')}</nav>
    <a href="login.html" class="exit">SALIR <span>⎋</span></a>`;
}

/* ================= TABLERO ================= */
function renderTablero(){
  const funnel = [
    { name:'Nuevo',           n:38, pct:100, color:'#8A8F98' },
    { name:'Calificado',      n:24, pct:63,  color:'#4A78D9' },
    { name:'Enviado a Cliente',n:15,pct:39,  color:'#8A5CD9' },
    { name:'Entrevista Cliente',n:9,pct:24,  color:'#F5A524' },
    { name:'Propuesta',       n:4,  pct:11,  color:'#2AA79B' },
    { name:'Contratado',      n:3,  pct:8,   color:'#4FA36B' },
  ];
  document.getElementById('funnel').innerHTML = funnel.map(f=>`
    <div class="funnel-row">
      <div>${f.name}</div>
      <div class="funnel-bar"><div style="width:${f.pct}%;background:${f.color}"></div></div>
      <div class="fnum">${f.n}</div><div class="fpct">${f.pct}%</div>
    </div>`).join('');

  const pri = [
    { name:'Urgente', n:8, color:'var(--senda-danger)' },
    { name:'Alta',    n:5, color:'#F5A524' },
    { name:'Baja',    n:3, color:'#8A8F98' },
  ];
  document.getElementById('priorityList').innerHTML = pri.map(p=>`
    <div class="priority-row">
      <div class="pdot" style="background:${p.color}"></div>
      <div>${p.name}</div>
      <div style="font-weight:700">${p.n}</div>
      <div class="pbar"><div style="width:${p.n*10}%;background:${p.color}"></div></div>
    </div>`).join('');

  const stalled = ORDERS.filter(o=>o.stalled>0).slice(0,5);
  document.getElementById('stalledList').innerHTML = stalled.map(o=>`
    <div class="stalled-row">
      <div><div class="title">${o.title}</div><div class="sub">${o.company} · ${rec(o.recruiter).name}</div></div>
      <div style="text-align:right"><div class="days">${o.days} días</div><div class="noavc">sin avance ${o.stalled}d</div></div>
    </div>`).join('');

  const recent = CANDIDATES.slice(0,3);
  document.getElementById('recentCandidates').innerHTML = recent.map(c=>{
    const ini = c.name.split(' ').map(s=>s[0]).slice(0,2).join('');
    return `<div class="rc-row"><div class="avatar">${ini}</div><div><div class="n">${c.name}</div><div class="r">${c.role}</div></div></div>`;
  }).join('');
}

/* ================= ORDENES ================= */
let ordersFilters = { priority:new Set(), state:new Set(), recruiter:new Set(), company:new Set() };
function renderOrdenes(){
  const cnt = (arr,fn) => arr.filter(fn).length;
  const priorities = ['Urgente','Alta','Baja'];
  const companies = [...new Set(ORDERS.map(o=>o.company))].sort();
  document.getElementById('filterPriority').innerHTML = priorities.map(p=>`
    <div class="filter-item"><label><input type="checkbox" data-fp="${p}"/>${p}</label><span class="cnt">${cnt(ORDERS,o=>o.priority===p)}</span></div>`).join('');
  document.getElementById('filterState').innerHTML =
    `<div class="filter-item"><label><input type="checkbox" data-fs="En reclutamiento"/>En reclutamiento</label><span class="cnt">${ORDERS.length}</span></div>`;
  document.getElementById('filterRecruiter').innerHTML = RECRUITERS.map(r=>`
    <div class="filter-item"><label><input type="checkbox" data-fr="${r.id}"/>${r.name}</label><span class="cnt">${cnt(ORDERS,o=>o.recruiter===r.id)}</span></div>`).join('');
  document.getElementById('filterCompany').innerHTML = companies.map(c=>`
    <div class="filter-item"><label><input type="checkbox" data-fc="${c}"/>${c}</label><span class="cnt">${cnt(ORDERS,o=>o.company===c)}</span></div>`).join('');

  document.querySelectorAll('[data-fp]').forEach(i=>i.onchange=e=>toggle(ordersFilters.priority,e.target.dataset.fp,e.target.checked));
  document.querySelectorAll('[data-fr]').forEach(i=>i.onchange=e=>toggle(ordersFilters.recruiter,e.target.dataset.fr,e.target.checked));
  document.querySelectorAll('[data-fc]').forEach(i=>i.onchange=e=>toggle(ordersFilters.company,e.target.dataset.fc,e.target.checked));
  document.getElementById('ordenSearch').addEventListener('input', drawOrders);
  document.getElementById('clearFilters').onclick = e=>{e.preventDefault();ordersFilters={priority:new Set(),state:new Set(),recruiter:new Set(),company:new Set()};document.querySelectorAll('.filter-panel input[type=checkbox]').forEach(c=>c.checked=false);drawOrders();};
  drawOrders();
}
function toggle(set,val,on){ on?set.add(val):set.delete(val); drawOrders(); }
function drawOrders(){
  const q = (document.getElementById('ordenSearch').value||'').toLowerCase();
  const f = ordersFilters;
  const rows = ORDERS.filter(o=>{
    if(f.priority.size && !f.priority.has(o.priority)) return false;
    if(f.recruiter.size && !f.recruiter.has(o.recruiter)) return false;
    if(f.company.size && !f.company.has(o.company)) return false;
    if(q && !(o.title.toLowerCase().includes(q) || o.company.toLowerCase().includes(q) || String(o.id).includes(q))) return false;
    return true;
  });
  document.getElementById('countTotal').textContent = rows.length;
  const barColor = o => o.priority==='Urgente' ? (o.days>20?'var(--senda-danger)':'var(--senda-warn)') : (o.priority==='Alta'?'var(--senda-warn)':'#5B8DEF');
  document.getElementById('ordersBody').innerHTML = rows.map(o=>{
    const r = rec(o.recruiter);
    const stall = o.stalled>0 ? `<span class="stall-tag">⚡ ${o.stalled}d sin avance</span>` : '';
    return `<tr class="${o.priority==='Urgente'?'urgent':''}" data-id="${o.id}">
      <td><div class="ord-title">${o.title} ${stall}</div><div class="ord-sub">#${o.id} · ${o.type}</div></td>
      <td>${o.company}</td>
      <td><span class="avatar ${r.cls}" style="width:26px;height:26px;font-size:10px">${r.id.toUpperCase()}</span> ${r.name}</td>
      <td><span class="chip ${o.priority.toLowerCase()}"><span class="dot"></span>${o.priority}</span></td>
      <td>${o.proc}</td>
      <td>${o.days} <span class="mini-bar"><div style="width:${Math.min(o.days*3,100)}%;background:${barColor(o)}"></div></span></td>
      <td>›</td>
    </tr>`;
  }).join('');
  document.querySelectorAll('#ordersBody tr').forEach(tr=>tr.onclick=()=>{
    document.querySelectorAll('#ordersBody tr').forEach(x=>x.classList.remove('focus'));
    tr.classList.add('focus');
  });
}

/* ================= CANDIDATOS ================= */
let candFilters = { profile:new Set(), avail:new Set(), recruiter:new Set(), source:new Set() };
function renderCandidatos(){
  const profiles = [...new Set(CANDIDATES.map(c=>c.role))];
  const cnt = fn => CANDIDATES.filter(fn).length;
  document.getElementById('filterProfile').innerHTML = profiles.map(p=>`
    <div class="filter-item"><label><input type="checkbox" data-cp="${p}"/>${p}</label><span class="cnt">${cnt(c=>c.role===p)}</span></div>`).join('');
  const avails = ['Inmediata','1 semana','2 semanas','Por confirmar'];
  document.getElementById('filterAvail').innerHTML = avails.map(a=>`
    <div class="filter-item"><label><input type="checkbox" data-ca="${a}"/>${a}</label><span class="cnt">${cnt(c=>c.avail===a)}</span></div>`).join('');
  document.getElementById('filterCandRecruiter').innerHTML = RECRUITERS.map(r=>`
    <div class="filter-item"><label><input type="checkbox" data-cr="${r.id}"/>${r.name}</label><span class="cnt">${cnt(c=>c.recruiter===r.id)}</span></div>`).join('');
  const sources = ['Bumeran','LinkedIn'];
  document.getElementById('filterSource').innerHTML = sources.map(s=>`
    <div class="filter-item"><label><input type="checkbox" data-cs="${s}"/>${s}</label><span class="cnt">${cnt(c=>c.source===s)}</span></div>`).join('');

  document.querySelectorAll('[data-cp]').forEach(i=>i.onchange=e=>toggleC(candFilters.profile,e.target.dataset.cp,e.target.checked));
  document.querySelectorAll('[data-ca]').forEach(i=>i.onchange=e=>toggleC(candFilters.avail,e.target.dataset.ca,e.target.checked));
  document.querySelectorAll('[data-cr]').forEach(i=>i.onchange=e=>toggleC(candFilters.recruiter,e.target.dataset.cr,e.target.checked));
  document.querySelectorAll('[data-cs]').forEach(i=>i.onchange=e=>toggleC(candFilters.source,e.target.dataset.cs,e.target.checked));
  document.getElementById('candSearch').addEventListener('input', drawCandidates);
  document.getElementById('candSideSearch').addEventListener('input', e=>{document.getElementById('candSearch').value=e.target.value;drawCandidates();});
  document.getElementById('candClear').onclick = e=>{e.preventDefault();candFilters={profile:new Set(),avail:new Set(),recruiter:new Set(),source:new Set()};document.querySelectorAll('.filter-panel input[type=checkbox]').forEach(c=>c.checked=false);drawCandidates();};
  drawCandidates();
}
function toggleC(set,v,on){ on?set.add(v):set.delete(v); drawCandidates(); }
function drawCandidates(){
  const q = (document.getElementById('candSearch').value||'').toLowerCase();
  const f = candFilters;
  const stored = JSON.parse(localStorage.getItem('bml_new_candidates')||'[]');
  const all = [...stored, ...CANDIDATES];
  const rows = all.filter(c=>{
    if(f.profile.size && !f.profile.has(c.role)) return false;
    if(f.avail.size && !f.avail.has(c.avail)) return false;
    if(f.recruiter.size && !f.recruiter.has(c.recruiter)) return false;
    if(f.source.size && !f.source.has(c.source)) return false;
    if(q && !(c.name.toLowerCase().includes(q) || c.skills.join(' ').toLowerCase().includes(q))) return false;
    return true;
  });
  document.getElementById('candCount').textContent = rows.length;
  const statusClass = s => s==='Enviado a Cliente'?'Enviado':(s==='Entrevista Cliente'?'Entrevista':s);
  const statusLabel = s => s==='Enviado'?'Enviado a Cliente':(s==='Entrevista'?'Entrevista Cliente':s);
  const availClass = a => a==='Inmediata'?'Inmediata':(a==='1 semana'?'1':(a==='2 semanas'?'2':'Por'));
  document.getElementById('candidatesGrid').innerHTML = rows.map(c=>{
    const ini = c.name.split(' ').map(s=>s[0]).slice(0,2).join('');
    const r = rec(c.recruiter);
    return `<div class="col-md-6"><div class="cand-card">
      <div class="cand-head">
        <div style="display:flex;gap:10px;align-items:flex-start">
          <div class="avatar">${ini}</div>
          <div><div class="cand-name">${c.name}</div><div class="cand-meta">${c.role} · ${c.city}</div></div>
        </div>
        <span class="status-badge status-${statusClass(c.status)}">${statusLabel(c.status)}</span>
      </div>
      <div class="cand-tags">
        ${c.skills.slice(0,4).map(s=>`<span class="tag">${s}</span>`).join('')}
        ${c.extra?`<span class="tag more">+${c.extra}</span>`:''}
      </div>
      <div class="cand-foot">
        <div style="display:flex;gap:8px;align-items:center"><span class="avail-tag avail-${availClass(c.avail)}">${c.avail}</span><span style="font-weight:700;color:var(--senda-navy)">${c.salary}</span></div>
        <div style="display:flex;gap:6px;align-items:center"><span class="avatar ${r.cls}" style="width:24px;height:24px;font-size:10px">${r.id.toUpperCase()}</span><span style="color:var(--senda-muted)">🌐</span></div>
      </div>
    </div></div>`;
  }).join('');
}

/* ================= NUEVO CANDIDATO ================= */
function initNuevoCandidato(){
  const chips = document.getElementById('skillsChips');
  const entry = document.getElementById('skillEntry');
  const skills = [];
  const draw = () => chips.innerHTML = skills.map((s,i)=>`<span class="skill-chip">${s}<button type="button" data-i="${i}">×</button></span>`).join('');
  entry.addEventListener('keydown', e=>{
    if(e.key==='Enter' || e.key===','){
      e.preventDefault();
      const v = entry.value.trim().replace(/,$/,'');
      if(v){ skills.push(v); entry.value=''; draw(); }
    } else if(e.key==='Backspace' && !entry.value && skills.length){ skills.pop(); draw(); }
  });
  chips.addEventListener('click', e=>{ if(e.target.dataset.i!==undefined){ skills.splice(+e.target.dataset.i,1); draw(); } });

  document.getElementById('newCandForm').addEventListener('submit', e=>{
    e.preventDefault();
    const fd = new FormData(e.target);
    const inputs = e.target.querySelectorAll('input,select');
    const nombre = inputs[0].value, apellido = inputs[1].value, correo = inputs[5]?.value || '';
    const stored = JSON.parse(localStorage.getItem('bml_new_candidates')||'[]');
    stored.unshift({
      id: 900+stored.length,
      name: `${nombre} ${apellido}`.trim() || 'Candidato Sin Nombre',
      role: 'Nuevo perfil', city:'Lima', status:'Nuevo',
      skills: skills.length? skills : ['Sin especificar'], extra:0,
      avail:'Por confirmar', salary:'—', source:'LinkedIn', recruiter:'mc'
    });
    localStorage.setItem('bml_new_candidates', JSON.stringify(stored));
    window.location.href = 'candidatos.html';
  });
}

/* ================= LOGIN ================= */
document.addEventListener('DOMContentLoaded', ()=>{
  const f = document.getElementById('loginForm');
  if(f) f.addEventListener('submit', e=>{ e.preventDefault(); window.location.href='tablero.html'; });
});
