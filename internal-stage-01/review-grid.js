/* Preview aid only. Never enqueued by WordPress or by Home. */
window.mcpShowInternalGrid = () => {
 const screen=document.querySelector('.mcp-internal-screen');if(!screen)return;
 let grid=document.getElementById('review-grid');
 if(!grid){grid=document.createElement('div');grid.id='review-grid';grid.setAttribute('aria-hidden','true');grid.style.cssText='position:absolute;inset:0 var(--page-edge);display:grid;grid-template-columns:repeat(var(--page-columns),minmax(0,1fr));gap:var(--page-gap);pointer-events:none;z-index:30';screen.append(grid);}
 const update=()=>{grid.replaceChildren();for(let i=0;i<Number(getComputedStyle(screen).getPropertyValue('--page-columns'));i++){const col=document.createElement('div');col.style.cssText='background:rgba(184,34,26,.035);border-inline:1px solid rgba(184,34,26,.28)';grid.append(col);}};
 update();window.addEventListener('resize',update);
};
if(new URLSearchParams(location.search).get('grid')==='1')window.mcpShowInternalGrid();
