

let btn = document.getElementById("btn")

btn.addEventListener("click", ()=> {
    
    let priority = document.getElementById("priority").value;
    
    if(priority == "p1" || priority == "p2"){

        let e1 = document.getElementById("Input1").value;
        let e2 = document.getElementById("Input2").value;
        let e3 = document.getElementById("Input3").value;

        let sub = document.getElementById("sub").value;
        let bob = document.getElementById("bod").value;



        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "rakesh.rock3823@gmail.com",
            Password : "316173B487E24E330CD47B6DAE385080B8D1",
            To : e1,
            From : "rakesh.rock3823@gmail.com",
            Subject : sub,
            Body : bob
        })

        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "rakesh.rock3823@gmail.com",
            Password : "316173B487E24E330CD47B6DAE385080B8D1",
            To : e2,
            From : "rakesh.rock3823@gmail.com",
            Subject : sub,
            Body : bob
        })

        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "rakesh.rock3823@gmail.com",
            Password : "316173B487E24E330CD47B6DAE385080B8D1",
            To : e3,
            From : "rakesh.rock3823@gmail.com",
            Subject : sub,
            Body : bob
        })




    }
})




