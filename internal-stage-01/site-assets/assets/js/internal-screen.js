/* Dropdown interaction only. The title square is anchored entirely by CSS. */
(() => {
 'use strict';
 const dropdown=document.querySelector('.mcp-internal-screen details');if(!dropdown)return;
 document.addEventListener('keydown',event=>{if(event.key==='Escape'&&dropdown.open){dropdown.open=false;dropdown.querySelector('summary').focus();}});
 document.addEventListener('click',event=>{if(dropdown.open&&!dropdown.contains(event.target))dropdown.open=false;});
})();
