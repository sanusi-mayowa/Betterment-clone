// show/hide faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq =>{
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');
        // change icon
        const icon = faq.querySelector('.faq_icon i');
        if(icon.className ==='bx bx-plus') {
            icon.className ="bx bx-minus";
        } else{
            icon.className = "bx bx-plus";
        }
    })
}) 