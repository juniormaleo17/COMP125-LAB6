((content) => {

    //local variables
    let FullName = document.getElementById("FullName");
    let ContactNumber = document.getElementById("ContactNumber");
    let EmailAddress = document.getElementById("EmailAddress");
    let Message = document.getElementById("Message");

    function OutputFormDataToConsole() {
      

        console.log(`%c ---------------------------------------`, "color: blue;");
        console.log(`%c Form Data`, "font-weight:bold; font-size: 16px; color: blue;");
        console.log(`%c ---------------------------------------`, "color: blue;");
        console.log(`%c Full Name     : ${FullName.value}`, "color: blue;");
        console.log(`%c Contact Number: ${ContactNumber.value}`, "color: blue;");
        console.log(`%c Email Address : ${EmailAddress.value}`, "color: blue;");
        console.log(`%c Your Message  : ${Message.value}`, "color: blue;");
        console.log(`%c ---------------------------------------`, "color: blue;");

        console.log(`%c ---------------------------------------`, "color: blue;");
        console.log(`%c Form Properties`, "font-weight:bold; font-size: 16px; color: blue;");
        console.log(`%c ---------------------------------------`, "color: blue;");
        console.log(`%c Form Length     : ${ document.forms[0].length}`, "color: blue;");

        for (let index = 0; index <  document.forms[0].length; index++) {
            console.log(`%c Form Element ${index}: ${ document.forms[0].elements[index].value}`, "color: blue;");
            
        }

        

    }


    function ContactContent() {
        document.forms[0].noValidate = true;

        console.log("%c Contact Content Accessed...", "font-weight:bold; font-size: 30px;");
        
        document.getElementsByClassName("card-title")[0].textContent = "Contact You!";

        // create a new HTML Element
        let cancelButton = document.createElement("button");
        // configure the HTML Element
        cancelButton.setAttribute("class", "btn btn-warning");
        cancelButton.classList.add("btn-lg");
        cancelButton.textContent = "Cancel";
        cancelButton.addEventListener("click", function(event){
            event.preventDefault();
            window.open("index.html","_parent");
        });

        // add the HTML Element to the page somewhere 
        // in this case I'm attaching a button to the first forml element
        document.forms[0].appendChild(cancelButton);


        let SendButton = document.getElementById("SendButton");
        SendButton.addEventListener("click", (event) => {
            //event.preventDefault();
            OutputFormDataToConsole();
        });

    }

    content.ContactContent = ContactContent;
   
})(content || (content = {}));


