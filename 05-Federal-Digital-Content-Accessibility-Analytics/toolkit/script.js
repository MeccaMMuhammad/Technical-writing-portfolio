/* PSRO demonstration — no analytics calls or external services. */
'use strict';
const search = document.getElementById('search');
const category = document.getElementById('category');
const reset = document.getElementById('reset');
const count = document.getElementById('count');
const results = document.getElementById('results');
const empty = document.getElementById('empty');
const categories = [...new Set(RESOURCES.map(r => r.category))].sort();
for (const name of categories) {
  const option = document.createElement('option'); option.value=name; option.textContent=name; category.append(option);
}
function appendResult(resource) {
  const item=document.createElement('li');
  const heading=document.createElement('h3'); heading.textContent=resource.title;
  const pill=document.createElement('span'); pill.className='tag';pill.textContent=resource.category;
  const details=document.createElement('p');details.className='meta';
  details.textContent=`${resource.type} · Last reviewed ${resource.updated} · ${resource.id}`;
  const link=document.createElement('a'); link.href='sample-resource.html';
  link.textContent=`Open sample resource: ${resource.title}`;
  link.setAttribute('aria-label',`Open fictional sample resource for ${resource.title}`);
  item.append(heading,pill,details,link);results.append(item);
}
function update() {
 const q=search.value.trim().toLocaleLowerCase(); const cat=category.value;
 const filtered=RESOURCES.filter(r=>(!cat||r.category===cat)&&(!q||[r.title,r.keywords,r.category,r.id].join(' ').toLocaleLowerCase().includes(q)));
 results.replaceChildren(); for(const r of filtered) appendResult(r);
 count.textContent=`${filtered.length} ${filtered.length===1?'resource':'resources'} found`;
 empty.hidden=filtered.length!==0;
}
search.addEventListener('input',update);category.addEventListener('change',update);
reset.addEventListener('click',()=>{search.value='';category.value='';update();search.focus();});
update();
