/* One font-metric baseline rule for every internal Page title; no viewport offsets. */
(() => {
 'use strict';
 const screen=document.querySelector('.mcp-internal-screen');if(!screen)return;
 const title=screen.querySelector('.mcp-internal-title'),anchor=screen.querySelector('.mcp-internal-accent');
 const context=document.createElement('canvas').getContext('2d');let frame;
 const align=()=>{
  const style=getComputedStyle(title),final=title.querySelector('[data-title-final]');
  const last=document.createRange();last.selectNodeContents(final);const top=last.getBoundingClientRect().top;
  let line='';
  // Read the actual final line, including wrapped long words and descenders.
  for(const node of [title.querySelector('[data-title-prefix]').firstChild,final.firstChild]){
   if(!node)continue;
   for(let i=0;i<node.length;){const glyph=String.fromCodePoint(node.textContent.codePointAt(i));const range=document.createRange();range.setStart(node,i);range.setEnd(node,i+glyph.length);if(Math.abs(range.getBoundingClientRect().top-top)<1)line+=glyph;i+=glyph.length;}
  }
  context.font=`${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
  anchor.style.setProperty('--ink-descent',`${context.measureText(line).actualBoundingBoxDescent}px`);
 };
 const schedule=()=>{cancelAnimationFrame(frame);frame=requestAnimationFrame(align);};
 new ResizeObserver(schedule).observe(title);window.addEventListener('resize',schedule);
 if(document.fonts){document.fonts.ready.then(schedule);document.fonts.addEventListener('loadingdone',schedule);}schedule();
 const dropdown=screen.querySelector('details');
 document.addEventListener('keydown',event=>{if(event.key==='Escape'&&dropdown.open){dropdown.open=false;dropdown.querySelector('summary').focus();}});
 document.addEventListener('click',event=>{if(dropdown.open&&!dropdown.contains(event.target))dropdown.open=false;});
})();
