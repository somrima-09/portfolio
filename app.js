var typed = new Typed(".auto-type",{
    strings: ["Web Developer.","Coder.","Tech Enthusiast."],
    typeSpeed: 90,
    backSpeed: 90,
    loop: true
})
var tablinks=document.getElementsByClassName("tab-links");
    var tabcontents=document.getElementsByClassName("tab-contents");

    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }

    var sidemenu= document.getElementById("sidemenu");

    function openmenu(){
        sidemenu.style.right="0";
    }
    function closemenu(){
        sidemenu.style.right="-200px";
    }

    function sendEmail(){
        Email.send({
            Host : "smtp.gmail.com",
            Username : "somrima09072003@gmail.com",
            Password : "paCF308029DCD71AD999B15866A8B5E7F497FE",
            To : 'somrima09072003@gmail.com',
            From : document.getElementById("email").value,
            Subject : "New Contact Form Enquiry",
            Body : "Name: " + document.getElementById("name").value
            +"<br>Email: " + document.getElementById("email").value
            +"<br>Message: " + document.getElementById("message").value
        }).then(
        message => alert("Message Sent Successfully")
        );
    }