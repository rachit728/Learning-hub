
const category=new URLSearchParams(location.search).get('category');

document.getElementById('categoryTitle').textContent=category;

fetch('data/lessons.json')
.then(r=>r.json())
.then(data=>{
 const root=document.getElementById('lessons');

 data.filter(x=>x.category===category)
 .forEach(lesson=>{
   const card=document.createElement('div');
   card.className='card';
   card.innerHTML=`
   <h3>${lesson.title}</h3>
   <p>${lesson.description}</p>
   `;

   card.onclick=()=>{
      location.href=`lesson.html?id=${lesson.id}`;
   };

   root.appendChild(card);
 });
});
