document.addEventListener('DOMContentLoaded',function(){
  const toggle=document.querySelector('.nav-toggle');
  const nav=document.querySelector('.nav');
  toggle&&toggle.addEventListener('click',()=>{
    if(nav.style.display==='block') nav.style.display=''; else nav.style.display='block';
  });

  const form=document.getElementById('contactForm');
  const msg=document.getElementById('formMessage');
  form&&form.addEventListener('submit',function(e){
    e.preventDefault();
    const data=new FormData(form);
    const name=data.get('name');
    msg.textContent='Grazie '+(name||'')+' — messaggio inviato (demo).';
    form.reset();
  });
});
