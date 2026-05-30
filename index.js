
fetch('data/lessons.json')
.then(r=>r.json())
.then(data=>{
 const categories=[...new Set(data.map(x=>x.category))];
 const root=document.getElementById('categories');

 categories.forEach(cat=>{
   const card=document.createElement('div');
   card.className='card';
   card.innerHTML=`<h2>${cat}</h2>`;
   card.onclick=()=>{
      location.href=`category.html?category=${encodeURIComponent(cat)}`;
   };
   root.appendChild(card);
 });
});
