const navbar = document.querySelector('.navlist');
const detail = document.querySelector('.details');
const btns = document.querySelectorAll('.tabs');



// slide bar show and hide for smaller screen navbar 

function menubar() {
    navbar.classList.toggle("slidebar");
}

function hide() {
    navbar.classList.toggle("slidebar");
}


//dynamic content -- of price section 
const details = [{
        inside: "Registration",
        title: "TRADEMARK <br> Registration",
        price: "<sup>&#8377</sup>999",
        disc: "The symbols ™ (the trademark symbol) and ® (the registered trademark symbol) can be used to indicate trademarks. Register your trademark within budget from KG TAX CONSULTANTS to get the best service."
    },
    {
        inside: "Registration",
        title: "IMPORT EXPORT CODE <br> Registration",
        price: "<sup>&#8377</sup>499",
        disc: "IEC is a mandatory requirement for Export and Import of Goods and Services. Apply  IEC Certificate Online Now. Hassle Free Process, Instant Solution."
    },
    {
        inside: "Registration",
        title: "AD CODE <br> Registration",
        price: "<sup>&#8377</sup>999",
        disc: "An AD Code is a 14-digit code, which is given by the bank where the Exporter maintains a business current account. This code, printed with the bank letterhead, can be obtained after the Exporter has registered for an Import Export Code (IEC) by the Director General of Foreign Trade (DGFT)."
    },
    {
        inside: "Registration",
        title: "FSSAI <br> Registration",
        price: "<sup>&#8377</sup>999",
        disc: "FSSAI Registration ensures the security of Food products and it is essentially a Food Safety certificate circulated by the food authority in India. Apply for your Fssai Registration at affordable price."
    },
    {
        inside: "dsc",
        title: "DSC Class  3 Signing -  (No Hidden Charges)",
        price: "<sup>&#8377</sup>799",
        disc: "A Class 3 DSC is issued by a Certifying Authoriry (CA) after thorough verification of the user's identity."
    },
    {
        inside: "dsc",
        title: "DSC Class  3 Signing with Token (No Hidden Charges)",
        price: "<sup>&#8377</sup>1099",
        disc: "Feel free to Call or Whatsapp us and Our Experts will follow up and ensure you to get your DSC at the earliest."
    },
    {
        inside: "dsc",
        title: "DSC Class  3 Combo (Sign+Encryption) with USB Token (No Hidden Charges)",
        price: "<sup>&#8377</sup>1799",
        disc: "The Class 3 Combo DSC (Signature+Encryption) is the highest level of certificate in India. Combo Provides higher security to online authorization."
    },
    {
        inside: "dsc",
        title: "DSC for E-TENDER with USB Token (No Hidden Charges)",
        price: "<sup>&#8377</sup>1799",
        disc: "Any Organisation that is looking forward to applying  any Government E-Tender, needs to have a Class 3 Digital Signature Certificate Registered in the name of a representative who is authorised to submit online offers for E-Tendering Applications."
    },
    {
        inside: "income tax",
        title: "Income Tax Return - Salaried / Pension Income",
        price: "<sup>&#8377</sup>499",
        disc: "Income from salary/pension. A Salaried individual can file his/her Income Tax Return either using ITR-1 or ITR-2."
    },
    {
        inside: "income tax",
        title: "Income Tax Return Business 44AD",
        price: "<sup>&#8377</sup>999",
        disc: "Section 44AD is a presumptive taxation scheme , income will be calculated on the basis of 8% of the turnover( 6% in case of digital receipts and payments)."
    },
    {
        inside: "income tax",
        title: "Income Tax Return Professionals  44ADA",
        price: "<sup>&#8377</sup>999",
        disc: "Under Section 44ADA, income will be computed on presumptive basis, i.e. @ 50% of the total gross receipts of the profession."
    },
    {
        inside: "income tax",
        title: "Income Tax Return   TRUSTS",
        price: "<sup>&#8377</sup>4399",
        disc: "Feel free to Call or Whatsapp us and Our Experts will follow up and ensure you to get your Income Tax return filed at the earliest."
    },
    {
        inside: "gst tax",
        title: "GST <br> Registrations",
        price: "<sup>&#8377</sup>999",
        disc: "The Registration under GST is necessary for business entities who fall under the eligibility criteria of GST Registration. Feel free to contact us and get your GST Registration."
    },
    {
        inside: "gst tax",
        title: "GST <br> Returns",
        price: "<sup>&#8377</sup>499",
        disc: "A GST return is a document containing details of all income/sales and/or expenses/purchases. Our Experts will take care of your GST Returns."
    },
    {
        inside: "gst tax",
        title: "GST Annual Return GSTR-9",
        price: "<sup>&#8377</sup>2999",
        disc: "GSTR-9 is an annual return to be filed once for each financial year, by the registered taxpayers who were regular taxpayers."
    },
    {
        inside: "gst tax",
        title: "GST Final Return GSTR-10",
        price: "<sup>&#8377</sup>1499",
        disc: "A taxable person whose GST registration is cancelled or surrendered has to file final return in Form GSTR-10."
    },
];

//adding dynamic content in price section

window.addEventListener('DOMContentLoaded', () => {
    let displayDetails = details.map(function(item) {
        if (item.inside == "Registration") {
            return `<div class="detail" id="detail4">
         <h2 class="title">${item.title}</h2>
         <h1 class="price">${item.price}</h1>
         <p class="disc">${item.disc}</p>
        </div>`;
        }
    });
    displayDetails = displayDetails.join("");
    detail.innerHTML = displayDetails;
});

function registration() {
    let displayDetails = details.map(function(item) {
        if (item.inside == "Registration") {
            return `<div class="detail" id="detail4">
         <h2 class="title">${item.title}</h2>
         <h1 class="price">${item.price}</h1>
         <p class="disc">${item.disc}</p>
        </div>`;
        }
    });
    displayDetails = displayDetails.join("");
    detail.innerHTML = displayDetails;
}

function dsc() {
    let displayDetails = details.map(function(item) {
        if (item.inside == "dsc") {
            return `<div class="detail" id="detail4">
         <h2 class="title">${item.title}</h2>
         <h1 class="price">${item.price}</h1>
         <p class="disc">${item.disc}</p>
        </div>`;
        }
    });
    displayDetails = displayDetails.join("");
    detail.innerHTML = displayDetails;
}

function incometax() {
    let displayDetails = details.map(function(item) {
        if (item.inside == "income tax") {
            return `<div class="detail" id="detail4">
         <h2 class="title">${item.title}</h2>
         <h1 class="price">${item.price}</h1>
         <p class="disc">${item.disc}</p>
        </div>`;
        }
    });
    displayDetails = displayDetails.join("");
    detail.innerHTML = displayDetails;
}

function servicetax() {
    let displayDetails = details.map(function(item) {
        if (item.inside == "gst tax") {
            return `<div class="detail" id="detail4">
         <h2 class="title">${item.title}</h2>
         <h1 class="price">${item.price}</h1>
         <p class="disc">${item.disc}</p>
        </div>`;
        }
    });
    displayDetails = displayDetails.join("");
    detail.innerHTML = displayDetails;
}

// -----------