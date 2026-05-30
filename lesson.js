
const id=Number(new URLSearchParams(location.search).get('id'));

fetch('data/lessons.json')
.then(r=>r.json())
.then(data=>{
 const lesson=data.find(x=>x.id===id);

 if(!lesson){
   document.body.innerHTML='<h1>Lesson Not Found</h1>';
   return;
 }

 document.getElementById('title').textContent=lesson.title;
 document.getElementById('description').textContent=lesson.description;
 document.getElementById('player').src=lesson.youtube;
});
