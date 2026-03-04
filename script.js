const resbtn=document.querySelectorAll('.res_btn');
const resdet=document.querySelectorAll('.resume_det');
const navbarr=document.querySelectorAll('header nav a');
const sections=document.querySelectorAll('section');
const menu=document.querySelector('#main_menu');
const navbr=document.querySelector('header nav');


let form = document.querySelector('#contactForm');
let submitBtn = document.querySelector('#cbtn');
let formStatus = document.querySelector('#formStatus');


menu.addEventListener('click',()=>{
     menu.classList.toggle('fa-xmark');
     navbr.classList.toggle('active');
});
const active=()=>{
    navbarr.forEach(link=>{
        link.classList.remove('active');
    });
    sections.forEach(section=>{
        section.classList.remove('active');
    });
     menu.classList.remove('fa-xmark');
     navbr.classList.remove('active');
}
navbarr.forEach((link,idx)=>{
    link.addEventListener('click',()=>{
        if(!link.classList.contains('active')){
            active();
            link.classList.add('active');
            sections[idx].classList.add('active');

        }
    });
});
resbtn.forEach((btn,idx)=>{
    btn.addEventListener('click',()=>{
        resbtn.forEach(btn=>{
            console.log("you clicked");
            btn.classList.remove('active');
        });
        btn.classList.add('active');
        resdet.forEach(det=>{
            det.classList.remove('active');
        });
        resdet[idx].classList.add('active');
    });
});
    const getservice=document.querySelectorAll('.getservices');

getservice.forEach(get=>{
  const contact=document.querySelector('#ct');
  get.addEventListener('click',()=>{
     contact.click();
  });
});

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (submitBtn) submitBtn.disabled = true;
    if (formStatus) formStatus.textContent = 'Sending...';
    const fd = new FormData(form);
    fd.set('_next', `${location.origin}${location.pathname}?status=success#contact-section`);
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: fd,
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        if (formStatus) formStatus.textContent = 'Message sent successfully';
        form.reset();
      } else {
        const to = 'nazirmuzammal28@gmail.com';
        const subject = fd.get('subject') ? String(fd.get('subject')) : 'Portfolio Contact';
        const name = fd.get('name') ? String(fd.get('name')) : '';
        const email = fd.get('email') ? String(fd.get('email')) : '';
        const phone = fd.get('phone') ? String(fd.get('phone')) : '';
        const message = fd.get('message') ? String(fd.get('message')) : '';
        const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`;
        if (formStatus) formStatus.textContent = 'Network issue. Opening email client.';
        window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      }
    } catch (_) {
      const to = 'nazirmuzammal28@gmail.com';
      const subject = fd.get('subject') ? String(fd.get('subject')) : 'Portfolio Contact';
      const name = fd.get('name') ? String(fd.get('name')) : '';
      const email = fd.get('email') ? String(fd.get('email')) : '';
      const phone = fd.get('phone') ? String(fd.get('phone')) : '';
      const message = fd.get('message') ? String(fd.get('message')) : '';
      const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`;
      if (formStatus) formStatus.textContent = 'Network issue. Opening email client.';
      window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
  });
}
