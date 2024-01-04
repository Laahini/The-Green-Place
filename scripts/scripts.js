$(".checkbox-dropdown").click(function () {
  $(this).toggleClass("is-active");
});

$(".checkbox-dropdown ul").click(function (e) {
  e.stopPropagation();
});

function showMore() {
  var els = document.getElementsByClassName('hidden');
  while (els[0]) {
    els[0].classList.remove('hidden');
  }
  var button = document.getElementById('showMoreBtn');
  button.classList.add('hidden');
  document.getElementById('shownMessage').innerHTML="Showing all available jobs";
}


/*JOB SEARCH FILTERS*/
var allCheckboxes = document.querySelectorAll('input[type=checkbox]');
var allJobs = Array.from(document.querySelectorAll('.jobCard'));
var checked = {};

getChecked('careerType');
getChecked('location');
getChecked('jobType');

Array.prototype.forEach.call(allCheckboxes, function (el) {
  el.addEventListener('change', toggleCheckbox);
});

function toggleCheckbox(e) {
  getChecked(e.target.name);
  setVisibility();
}

function getChecked(name) {
  checked[name] = Array.from(document.querySelectorAll('input[name=' + name + ']:checked')).map(function (el) {
    return el.value;
  });
}

function setVisibility() {
  allJobs.map(function (el) {
    var careerType = checked.careerType.length ? _.intersection(Array.from(el.classList), checked.careerType).length : true;
    var location = checked.location.length ? _.intersection(Array.from(el.classList), checked.location).length : true;
    var jobType = checked.jobType.length ? _.intersection(Array.from(el.classList), checked.jobType).length : true;
    if (careerType && location && jobType) {
      el.style.display = 'block';
    } else {
      el.style.display = 'none';
    }
  });
}



/*CONTACT FORM*/
function ValidateEmail()
{
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var email = document.getElementById('emailInput');
  var message = document.getElementById('submitted');
  if(email.value.match(mailformat))
  {
    location.href="index.html";
    return true;
  }
  else
  {
    submitted.innerHTML="Invalid email address";
    return false;
  }
}


/*JOB APPLICATION*/
function applyJob(job)
{
  if(job==="job1")
  {
    location.href="../apply/job1.html";
  }
  else if(job==="job2")
  {
    location.href="../apply/job2.html";
  }
  else if(job==="job3")
  {
    location.href="../apply/job3.html";
  }
  else if(job==="job4")
  {
    location.href="../apply/job4.html";
  }
}

/*OPEN CURRENT JOBS*/
function openJobs(){
  location.href="currentJobs.html";
}

function openCareers(){
  location.href="../careers.html";
}

function calculateCredit() {
    var creditDisplay = document.getElementById("displayCredit");
    var income = document.getElementById("income").value;

    // Calculate Solar Credit
    var solarCost = document.getElementById("solarCost").value;
    var solarCredit = solarCost * 0.3;

    // Calculate Electric Vehicle Credit
    var isNew = document.getElementById("electricVehicleCondition").value == "new";
    var electricVehicleCost = document.getElementById("electricVehicleCost").value;

    if ((isNew && income < 225000 && electricVehicleCost < 80000) || (!isNew && income < 112500 && electricVehicleCost < 25000)) {
        var electricVehicleCredit = electricVehicleCost * 0.3;
        if (isNew && electricVehicleCredit > 7500) {
            electricVehicleCredit = 7500;
        } else if (!isNew && electricVehicleCredit > 4000) {
            electricVehicleCredit = 4000;
        }
    } else {
        var electricVehicleCredit = 0;
    }

    

    var totalCredit = solarCredit;
    creditDisplay.textContent = totalCredit; //`$${totalCredit.toFixed(2)}`;
}