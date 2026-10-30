/* Internal-only glyph ink alignment and native dropdown accessibility. */
(() => {
 'use strict';
 const screen=document.querySelector('.mcp-internal-screen');if(!screen)return;
 const title=screen.querySelector('.mcp-internal-title'),final=title.querySelector('[data-title-final]'),anchor=title.querySelector('.mcp-internal-accent');
 const canvas=document.createElement('canvas').getContext('2d');let frame;
 const align=()=>{
  if(!final.firstChild)return;
  const glyph=document.createRange();glyph.selectNodeContents(final);
  const last=glyph.getBoundingClientRect();
  const probe=document.createElement('span');probe.style.cssText='display:inline-block;width:0;height:0;padding:0;margin:0;vertical-align:baseline';
  final.append(probe);const baseline=probe.getBoundingClientRect().bottom;probe.remove();
  // Only the final word's visible fragment defines the accent ink edge.
  let line='';const walker=document.createTreeWalker(title.querySelector('[data-title-last-word]'),NodeFilter.SHOW_TEXT);let node;
  while((node=walker.nextNode())){
   for(let i=0;i<node.length;){const text=String.fromCodePoint(node.textContent.codePointAt(i));const range=document.createRange();range.setStart(node,i);range.setEnd(node,i+text.length);const rect=range.getBoundingClientRect();if(Math.abs(rect.top-last.top)<1)line+=text;i+=text.length;}
  }
  const style=getComputedStyle(title);canvas.font=`${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
  const inkBottom=baseline+canvas.measureText(line).actualBoundingBoxDescent;
  // em keeps the attachment proportional even before the next resize frame.
  anchor.style.setProperty('--title-ink-trim',`${(last.bottom-inkBottom)/parseFloat(style.fontSize)}em`);
 };
 const schedule=()=>{cancelAnimationFrame(frame);frame=requestAnimationFrame(align);};
 new ResizeObserver(schedule).observe(title);window.addEventListener('resize',schedule);
 if(document.fonts){document.fonts.ready.then(schedule);document.fonts.addEventListener('loadingdone',schedule);}align();
 const dropdown=screen.querySelector('details'),toggle=dropdown.querySelector('summary');
 const sync=()=>toggle.setAttribute('aria-expanded',String(dropdown.open));sync();dropdown.addEventListener('toggle',sync);
 document.addEventListener('keydown',event=>{if(event.key==='Escape'&&dropdown.open){dropdown.open=false;sync();toggle.focus();}});
 document.addEventListener('click',event=>{if(dropdown.open&&!dropdown.contains(event.target)){dropdown.open=false;sync();}});
})();
