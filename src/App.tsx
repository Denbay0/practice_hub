import { useEffect, useState } from "react";
import { projects, type Project } from "./projects";

function Mark() {
  return <svg className="mark" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="26"/><path d="M7 32h50M32 7v50M14 14l36 36M50 14 14 50"/><circle cx="32" cy="32" r="7"/></svg>;
}

function NodeCard({project}: {project: Project}) {
  return <article className="node-card">
    <div className="card-scan" />
    <header><span>[ {project.node} ]</span><span className="live"><i />{project.status.toUpperCase()}</span></header>
    <div className="node-map" aria-hidden="true"><span /><span /><b>{project.node.slice(-2)}</b></div>
    <div className="card-body"><p className="service">SERVICE: {project.service}</p><h2 data-text={project.name}>{project.name}</h2><p>{project.description}</p></div>
    <dl><div><dt>PROTOCOL</dt><dd>HTTP/S</dd></div><div><dt>LOCAL PORT</dt><dd>{project.port}</dd></div><div><dt>ACCESS</dt><dd>PUBLIC SOURCE</dd></div></dl>
    <div className="actions"><a href={project.demo} target="_blank" rel="noreferrer">OPEN PROJECT <span>↗</span></a><a href={project.repository} target="_blank" rel="noreferrer">SOURCE CODE <span>↗</span></a></div>
  </article>;
}

export function App() {
  const [wired, setWired] = useState(false);
  const [clock, setClock] = useState("");
  useEffect(() => {const tick=()=>setClock(new Date().toLocaleTimeString("ru-RU",{hour12:false}));tick();const id=setInterval(tick,1000);return()=>clearInterval(id)}, []);
  const enter = () => {setWired(true); window.setTimeout(() => setWired(false), 1700)};
  return <div className={wired ? "app wired" : "app"}>
    <div className="noise"/><div className="scanlines"/><div className="grid-bg"/>
    <div className="wire wire-a"/><div className="wire wire-b"/>
    <nav><a className="identity" href="#top"><Mark/><span>PROTOCOL<small>SEVEN</small></span></a><div className="nav-status"><span>LINK: STABLE</span><span>LOCAL_TIME: {clock}</span><span>SECTOR: 127.0.0.1</span></div></nav>
    <main id="top">
      <section className="boot">
        <div className="boot-copy"><p className="kicker">PRESENT DAY · PRESENT TIME</p><h1><span>DJANGO</span><br/>PRACTICE<br/>ARCHIVE<i>_</i></h1><p className="lead">Three independent systems. One connection point.<br/>An educational transmission from the local Wired.</p><button onClick={enter}>ENTER THE WIRED <span>→</span></button></div>
        <div className="terminal" aria-label="Connection status"><div className="terminal-bar"><span>root@protocol7: ~</span><i/><i/><i/></div><pre><b>&gt;</b> booting protocol_7...
<b>&gt;</b> resolving identity <em>[OK]</em>
<b>&gt;</b> mounting django archive <em>[OK]</em>
<b>&gt;</b> scanning available nodes...

  node_01  learning_log   <em>ONLINE</em>
  node_02  public_blog    <em>ONLINE</em>
  node_03  task_manager   <em>ONLINE</em>

<b>&gt;</b> connection established<span className="cursor">█</span></pre></div>
      </section>
      <section className="archive" id="archive"><div className="section-head"><div><p className="kicker">NETWORK MAP / 03 NODES</p><h2>Available systems</h2></div><p>Select a node to open its local service<br/>or inspect the source transmission.</p></div><div className="nodes">{projects.map(project => <NodeCard key={project.node} project={project}/>)}</div></section>
      <section className="manifest"><p className="kicker">ARCHIVE MANIFEST</p><div><h2>Built to be inspected.</h2><p>Django 5 · React · TypeScript · Docker<br/>Isolated repositories connected by Git submodules.</p></div><code>checksum: 7f:1a:03<br/>layer: education<br/>signal: persistent</code></section>
    </main>
    <footer><span>PROTOCOL 7 © {new Date().getFullYear()}</span><span>NO DEPLOYMENT SIGNAL</span><button onClick={enter}>Let's all love Lain.</button></footer>
    {wired && <div className="overlay" role="status"><Mark/><strong>WIRED MODE</strong><span>memory fragment #03 recovered</span></div>}
  </div>;
}
