(()=>{"use strict";class e{constructor(e){this.name=e,this.tasks=[]}addTask(e){this.tasks.push(e)}deleteTask(e){this.tasks.splice(e,1)}}const t=[],n=new e("My Day");t.push(n);class d{constructor(e,t,n,d){this.name=e,this.description=t,this.dueDate=n,this.priority=d,this.isComplete=!1}updateName(e){this.name=e}updateDescription(e){this.description=e}updateDueDate(e){this.dueDate=e}updatePriority(e){this.priority=e}}const a=()=>{const e=document.querySelector(".project-container");e.innerHTML="",t.forEach(((t,n)=>{const d=document.createElement("div");d.textContent=t.name,d.classList.add("project-item"),d.setAttribute("data-index",n),d.addEventListener("click",(()=>{o(t)})),e.appendChild(d)}))};function o(e){const t=document.querySelector(".right-container");t.innerHTML="";const n=document.createElement("div");n.textContent="Add Task",n.classList.add("add-task"),n.addEventListener("click",(()=>{!function(e,t){const n=document.querySelector(".right-container");t.style.display="none";const a=document.createElement("form");a.id="task-form";const c=document.createElement("input");c.type="text",c.placeholder="Task Name",c.required=!0,a.appendChild(c);const i=document.createElement("textarea");i.placeholder="Task Description",i.required=!0,a.appendChild(i);const s=document.createElement("input");s.type="date",s.required=!0,a.appendChild(s);const l=document.createElement("div");["High","Medium","Low"].forEach((e=>{const t=document.createElement("label"),n=document.createElement("input");n.type="radio",n.name="priority",n.value=e,t.appendChild(n),t.appendChild(document.createTextNode(e)),l.appendChild(t)})),a.appendChild(l);const r=document.createElement("button");r.type="button",r.textContent="Cancel",r.onclick=()=>{a.remove(),t.style.display="block"},a.appendChild(r);const p=document.createElement("button");p.type="submit",p.textContent="Add Task",a.appendChild(p),n.insertBefore(a,t),a.addEventListener("submit",(t=>{t.preventDefault();const n=new d(c.value,i.value,s.value,a.priority.value);e.tasks.unshift(n),o(e)}))}(e,n)})),t.appendChild(n),e.tasks.forEach(((n,d)=>{const a=document.createElement("div");a.classList.add("task");const c=function(e,t){const n=document.createElement("div");return n.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg>',n.classList.add("delete-button"),n.onclick=n=>{n.stopPropagation(),e.deleteTask(t),o(e)},n}(e,d),i=document.createElement("div");i.textContent=n.name,i.classList.add("task-name");const s=document.createElement("div");s.textContent=n.description,s.classList.add("task-description");const l=document.createElement("div");l.textContent=`Due: ${n.dueDate}`,l.classList.add("task-due-date");const r=document.createElement("div");r.textContent=`Priority: ${n.priority}`,r.classList.add("task-priority");const p=function(e){const t=document.createElement("button");return t.textContent=e.isComplete?"Complete":"In Progress",t.classList.add(e.isComplete?"status-complete":"status-in-progress"),t.onclick=n=>{n.stopPropagation(),function(e,t){e.isComplete?(e.isComplete=!1,t.textContent="In Progress",t.classList.replace("status-complete","status-in-progress")):(e.isComplete=!0,t.textContent="Complete",t.classList.replace("status-in-progress","status-complete"))}(e,t)},t}(n);a.appendChild(c),a.appendChild(i),a.appendChild(s),a.appendChild(l),a.appendChild(r),a.appendChild(p),a.onclick=()=>function(e,t,n){const d=document.createElement("div");d.id="taskModal",d.classList.add("modal");const a=document.createElement("div");a.classList.add("modal-content"),d.appendChild(a);const c=document.createElement("form");c.id="task-form";const i=document.createElement("div");i.id="form-row-1";const s=document.createElement("label");s.for="taskName",s.textContent="Task Name",i.appendChild(s);const l=document.createElement("input");l.type="text",l.value=e.name,i.appendChild(l);const r=document.createElement("div");r.id="form-row-2";const p=document.createElement("label");p.for="taskDescription",p.textContent="Task Description",r.appendChild(p);const m=document.createElement("textarea");m.placeholder="Enter task description",m.value=e.description,r.appendChild(m);const u=document.createElement("div");u.id="form-row-3";const h=document.createElement("label");h.for="dueDate",h.textContent="Due Date",u.appendChild(h);const C=document.createElement("input");C.type="date",u.appendChild(C);const E=document.createElement("div");E.id="form-row-4";const v=document.createElement("label");v.for="taskPriority",v.textContent="Priority",E.appendChild(v);const y=document.createElement("select");y.name="taskPriority",["High","Medium","Low"].forEach((e=>{const t=document.createElement("option");t.value=e,t.text=e,y.appendChild(t)})),y.value=e.priority,E.appendChild(y);const k=document.createElement("button");k.type="submit",k.value="Submit",k.textContent="Submit",c.appendChild(i),c.appendChild(r),c.appendChild(u),c.appendChild(E),c.appendChild(k),a.appendChild(c),document.body.appendChild(d),d.style.display="flex",c.addEventListener("submit",(n=>{n.preventDefault(),e.updateName(l.value.trim()),e.updateDescription(m.value.trim()),e.updateDueDate(C.value.trim()),e.updatePriority(y.value),d.style.display="none",o(t)})),d.addEventListener("click",(e=>{e.target===d&&(d.style.display="none")}))}(n,e),t.appendChild(a)}))}(()=>{const e=document.querySelector("#header"),t=document.createElement("div");t.classList.add("header-content");const n=document.createElement("img");n.classList.add("brand-image"),n.src="/src/images/dodo-logo.png",n.alt="dodo",t.appendChild(n);const d=document.createElement("h1");d.textContent="To-dodo",t.appendChild(d),e.appendChild(t)})(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("left-container");const n=document.createElement("div");n.classList.add("right-container"),e.appendChild(t),e.appendChild(n);const d=document.createElement("div");d.classList.add("project-container");const a=document.createElement("div");a.classList.add("project-header");const o=document.createElement("h4");o.textContent="My project",a.appendChild(o);const c=document.createElement("button");c.setAttribute("id","add-button"),c.textContent="+",a.appendChild(c),t.appendChild(a),t.appendChild(d)})(),document.querySelector("#add-button").addEventListener("click",(()=>{!function(){const n=document.createElement("div");n.id="myModal",n.classList.add("modal");const d=document.createElement("div");d.classList.add("modal-content"),n.appendChild(d);const o=document.createElement("form");o.id="project-form";const c=document.createElement("div");c.id="form-row-1";const i=document.createElement("label");i.for="title",i.textContent="Name",c.appendChild(i);const s=document.createElement("input");s.type="text",s.placeholder="Enter project name",c.appendChild(s);const l=document.createElement("button");l.type="submit",l.value="Submit",l.textContent="Submit",o.appendChild(c),o.appendChild(l),d.appendChild(o),document.body.appendChild(n),n.style.display="flex",o.addEventListener("submit",(d=>{d.preventDefault();const o=s.value.trim();if(o){const d=new e(o);console.log(d),t.push(d),console.log(t),s.value="",n.style.display="none",a()}})),n.addEventListener("click",(e=>{e.target===n&&(n.style.display="none")}))}()})),a()})();