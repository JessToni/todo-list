(()=>{"use strict";(()=>{const e=document.querySelector("#header"),t=document.createElement("div");t.classList.add("header-content");const d=document.createElement("img");d.classList.add("brand-image"),d.src="/src/images/dodo-logo.png",d.alt="dodo",t.appendChild(d);const n=document.createElement("h1");n.textContent="To-dodo",t.appendChild(n),e.appendChild(t)})(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("left-container");const d=document.createElement("div");d.classList.add("right-container"),e.appendChild(t),e.appendChild(d);const n=document.createElement("div");n.classList.add("project-container"),t.appendChild(n);const c=document.createElement("div");c.classList.add("project-header"),n.appendChild(c);const o=document.createElement("h4");o.textContent="My project",c.appendChild(o);const a=document.createElement("button");a.setAttribute("id","add-button"),a.textContent="+",c.appendChild(a),n.appendChild(c),t.appendChild(n)})(),document.querySelector("#add-button").addEventListener("click",(()=>{!function(){const e=document.createElement("div");e.id="myModal",e.classList.add("modal");const t=document.createElement("div");t.classList.add("modal-content"),e.appendChild(t);const d=document.createElement("form");d.id="project-form";const n=document.createElement("div");n.id="form-row-1";const c=document.createElement("label");c.for="title",c.textContent="Name",n.appendChild(c);const o=document.createElement("input");o.type="text",o.placeholder="Enter project name",n.appendChild(o);const a=document.createElement("button");a.type="submit",a.value="Submit",a.textContent="Submit",d.appendChild(n),d.appendChild(a),t.appendChild(d),document.body.appendChild(e),e.style.display="flex",e.addEventListener("click",(t=>{t.target===e&&(e.style.display="none")}))}()}))})();