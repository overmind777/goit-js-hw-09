!function(){var t=document.querySelector("body"),e=t.querySelector("button[data-start]"),a=t.querySelector("button[data-stop]"),n=null;e.addEventListener("click",(function(o){e.disabled=!0,a.disabled=!1,n=setInterval((function(){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),a.addEventListener("click",(function(){a.disabled=!0,e.disabled=!1,clearInterval(n)}))}();
//# sourceMappingURL=01-color-switcher.01893c1d.js.map