const multiStepForm = document.querySelector("[data-multi-step");
const formSteps = [...multiStepForm.querySelectorAll("[data-step]")];
console.log(formSteps.length);


let currentStep = formSteps.findIndex( step => {
    return step.classList.contains("d-block");
}); 

// If we didn't have any active class in the html then we make the first step as active step

if(currentStep < 0 ){
    currentStep = 0; 
  
    // formSteps[currentStep].classList.replace("d-none","d-block");
    showCurrentStep();
}



console.log(currentStep);

// Tranfer between the steps
multiStepForm.addEventListener( "click", e => {
    let incrementor;
   
    e.preventDefault;
    if(e.target.matches("[data-next]")){
        
        incrementor = 1
        
    } else if(e.target.matches("[data-previous")){
        incrementor = -1;
    } else {
        return; // if not clicked on next or prev , return nothing
    }
    if( incrementor == null) return;

    const inputs = [...formSteps[currentStep].querySelectorAll("input")];
    const allValid = inputs.every(input => input.reportValidity());

     console.log(inputs)
     if(allValid){
        formSteps[currentStep].classList.replace("d-block","d-none");
        currentStep += incrementor;
        
        showCurrentStep();
     }
    // currentStep += incrementor;
    // showCurrentStep();
    console.log(currentStep);
    
})

function showCurrentStep(){
     
    formSteps[currentStep].classList.replace("d-none","d-block");
   
    // Remove the d-block from the active step and add it to the next step
    formSteps.forEach((step, index) => {  
        step.classList.toggle("d-block", index === currentStep)          
    })
}


const showSummaryButton = document.getElementById("showSummaryPage");

showSummaryButton.addEventListener("click",function(){
    formSteps[currentStep].classList.replace("d-none","d-block");
    showSummaryForm();
})

function showSummaryForm(){
    const firstName = document.querySelector("#validationDefault01").value;
    const lastName = document.querySelector("#validationDefault02").value;
    const city = document.querySelector("#validationDefault03").value;
    const state = document.querySelector("#validationDefault04").value;
    const jobTitle = document.querySelector("#validationDefault05").value;
    const jobState = document.querySelector("#validationDefault06").value;
    const summary = document.getElementById("put");

    const summaryContent = `
      <h2>Summary</h2>
      <p>First Name: ${firstName}</p>
      <p>Last Name: ${lastName}</p>
      <p>City: ${city}</p>
      <p>State: ${state}</p>
      <p>Job Title: ${jobTitle}</p>
      <p>Job State: ${jobState}</p>
    `;

    summary.innerHTML = summaryContent;

}

const submit = multiStepForm.querySelector("[data-submit]");
submit.addEventListener("submit", function(){
    e.preventDefault;
    alert(" Form Submitted! ");
})





















// var currentTab = 0; // Current tab is set to be the first tab (0)
// showTab(currentTab); // Display the current tab

// function showTab(n) {
//   // This function will display the specified tab of the form ...
//   var x = document.getElementsByClassName("tab");
//   x[n].style.display = "block";
//   // ... and fix the Previous/Next buttons:
//   if (n == 0) {
//     document.getElementById("prevBtn").style.display = "none";
//   } else {
//     document.getElementById("prevBtn").style.display = "inline";
//   }
//   if (n == (x.length - 1)) {
//     document.getElementById("nextBtn").innerHTML = "Submit";
//   } else {
//     document.getElementById("nextBtn").innerHTML = "Next";
//   }
//   // ... and run a function that displays the correct step indicator:
//   fixStepIndicator(n)
// }

// function nextPrev(n) {
//   // This function will figure out which tab to display
//   var x = document.getElementsByClassName("tab");
//   // Exit the function if any field in the current tab is invalid:
//   if (n == 1 && !validateForm()) return false;
//   // Hide the current tab:
//   x[currentTab].style.display = "none";
//   // Increase or decrease the current tab by 1:
//   currentTab = currentTab + n;
//   // if you have reached the end of the form... :
//   if (currentTab >= x.length) {
//     //...the form gets submitted:
//     document.getElementById("regForm").submit();
//     return false;
//   }
//   // Otherwise, display the correct tab:
//   showTab(currentTab);
// }

// function fixStepIndicator(n) {
//     // This function removes the "active" class of all steps...
//     var i, x = document.getElementsByClassName("step");
//     for (i = 0; i < x.length; i++) {
//       x[i].className = x[i].className.replace(" active", "");
//     }
//     //... and adds the "active" class to the current step:
//     x[n].className += " active";
//   }
// (() => {
//     'use strict'
  
//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     const forms = document.getElementsByTagName('button');
//   console.log(forms)
//     // Loop over them and prevent submission
//     Array.from(forms).forEach(form => {
//       form.addEventListener('submit', event => {
//         if (!form.checkValidity()) {
//           event.preventDefault()
//           event.stopPropagation()
//         }
//         form.classList.add('was-validated')
//       }, false)
//     })
// })()
