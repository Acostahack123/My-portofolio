var togglebtn=document.querySelector(".togglebtn");
        var nav=document.querySelector(".navlinks");
        var links=document.querySelector(".navlinks li");

        togglebtn.addEventListener("click", function(){
            this.classList.toggle("click");
            nav.classList.toggle("open")
        })

        var contactForm = document.getElementById("contactForm");
        if (contactForm) {
            contactForm.addEventListener("submit", function(event) {
                event.preventDefault();
                var name = encodeURIComponent(contactForm.elements["name"].value);
                var email = encodeURIComponent(contactForm.elements["email"].value);
                var subject = encodeURIComponent(contactForm.elements["subject"].value);
                var message = encodeURIComponent(contactForm.elements["message"].value);

                var body = encodeURIComponent("Name: ") + name + "%0D%0A" +
                           encodeURIComponent("Email: ") + email + "%0D%0A%0D%0A" +
                           encodeURIComponent("Message: ") + message;

                var mailtoLink = "mailto:ibrahimabass20251@gmail.com" +
                                 "?subject=" + subject +
                                 "&body=" + body;

                window.location.href = mailtoLink;
            });
        }

        var typed=new Typed(".input",{
            strings:["Frontend Developer", "Graphic Designer", "Photographer", "Cyber Security Expert"],
            typeSpeed:70,
            backSpeed:55,
            loop:true
        })  