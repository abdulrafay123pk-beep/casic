document.addEventListener('DOMContentLoaded',function(){
  const toggle=document.querySelector('.nav-toggle');
  const nav=document.querySelector('.nav');
  toggle&&toggle.addEventListener('click',()=>{
    if(nav.style.display==='block') nav.style.display=''; else nav.style.display='block';
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',function(e){
      const target=document.querySelector(this.getAttribute('href'));
      if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth',block:'start'}); if(nav.style.display==='block') nav.style.display=''; }
    });
  });

  const form=document.getElementById('contactForm');
  const msg=document.getElementById('formMessage');
  form&&form.addEventListener('submit',function(e){
    e.preventDefault();
    const data=new FormData(form);
    const name=data.get('name');
    msg.textContent='Grazie '+(name||'')+' — messaggio inviato (demo).';
    form.reset();
    setTimeout(()=>msg.textContent='',4000);
  });

  // Project modal
  const modal=document.getElementById('projectModal');
  const modalTitle=document.getElementById('modalTitle');
  const modalDesc=document.getElementById('modalDesc');
  const modalLink=document.getElementById('modalLink');
  const closeBtn=document.querySelector('.modal-close');

  document.querySelectorAll('.project-card').forEach(card=>{
    card.addEventListener('click',()=>{
      modalTitle.textContent = card.dataset.title || '';
      modalDesc.textContent = card.dataset.desc || '';
      modalLink.href = card.dataset.link || '#';
      modal.setAttribute('aria-hidden','false');
    });
  });
  closeBtn&&closeBtn.addEventListener('click',()=>modal.setAttribute('aria-hidden','true'));
  modal.addEventListener('click',(e)=>{ if(e.target===modal) modal.setAttribute('aria-hidden','true'); });
});
