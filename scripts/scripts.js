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

/*TAX CREDIT AND REBATE CALCULATOR*/
function CreditAndRebate() {
    var creditDisplay = document.getElementById("displayCredit");
    var rebateDisplay = document.getElementById("displayRebate");
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

    // Calculate Battery Storage Credit
    var iskWh = document.getElementById("batteryStoragekWh").value == "yes";
    var batteryStorageCost = document.getElementById("batteryStorageCost").value;
    if (iskWh) {
        var batteryStorageCredit = batteryStorageCost * 0.3;
    } else {
        var batteryStorageCredit = 0;
    }

    // Calculate Windmills and Geothermal Credit
    var windGeoCost = document.getElementById("windGeothermalCost").value;
    var windGeoCredit = windGeoCost * 0.3;

    // Window, Door, and Energy Property Credit
    var windowCost = document.getElementById("windowCost").value;
    var doorAmount = document.getElementById("doorAmount").value;
    var doorCost = document.getElementById("doorCost").value;
    var propertyCost = document.getElementById("propertyCost").value;
    var windowCredit = windowCost * 0.3;

    if (windowCredit > 600) {
        windowCredit = 600;
    }

    var doorCredit = doorAmount * doorCost * 0.3;

    if (doorAmount > 1 && doorCredit > 500) {
        doorCredit = 500;
    } else if (doorCredit > 250) {
        doorCredit = 250;
    }

    var propertyCredit = propertyCost * 0.3;
    if (propertyCredit > 600) {
        propertyCredit = 600;
    }

    var windDoorPropCredit = windowCredit + doorCredit + propertyCredit;
    if (windDoorPropCredit > 1200) {
        windDoorPropCredit = 1200;
    }

    // Heat Pump Credit AND REBATE
    var heatPumpCost = document.getElementById("heatPumpCost").value;
    var waterHeaterCost = document.getElementById("waterHeaterCost").value;
    var heatPumpCredit = heatPumpCost * 0.3;
    var waterHeaterCredit = waterHeaterCost * 0.3;
    var heatWaterCredit = heatPumpCredit + waterHeaterCredit;
    if (heatWaterCredit > 2000) {
        heatWaterCredit = 2000;
    }

    if (heatPumpCredit > 0) {
        var heatPumpRebate = 0.5 * 8000;
    } else {
        var heatPumpRebate = 0;
    }

    if (waterHeaterCredit > 0) {
        var waterHeaterRebate = 0.5 * 1750;
    } else {
        var waterHeaterRebate = 0;
    }
    

    var hasInsulationVentilation = document.getElementById("hasInsulationVentilation").value == "yes";
    if (hasInsulationVentilation) {
        var insulationRebate = 0.5 * 1600;
    } else {
        var insulationRebate = 0;
    }

    // Electric Appliance Rebate
    var stoveCost = document.getElementById("stoveCost").value;
    var electricWaterHeaterCost = document.getElementById("electricWaterHeaterCost").value;
    var electricDryerCost = document.getElementById("electricDryerCost").value;

    if (stoveCost > 0) {
        var stoveRebate = 0.5 * 840;
    } else {
        var stoveRebate = 0;
    }

    if (electricWaterHeaterCost > 0) {
        var electricWaterHeaterRebate = 0.5 * 1750;
    } else {
        var electricWaterHeaterRebate = 0;
    }

    if (electricDryerCost > 0) {
        var electricDryerRebate = 0.5 * 840;
    } else {
        var electricDryerRebate = 0;
    }

    // Electric Panel and Wiring Credit AND REBATE
    var panelCost = document.getElementById("panelCost").value;
    var wiringCost = document.getElementById("wiringCost").value;
    var panelWiringCredit = 0.3 * (panelCost + wiringCost);
    if (panelWiringCredit > 600) {
        panelWiringCredit = 600;
    }
    var panelRebate = 4000 * 0.5;
    var wiringRebate = 2500 * 0.5;
    

    var totalCredit = solarCredit + electricVehicleCredit + batteryStorageCredit + windGeoCredit + windDoorPropCredit + heatWaterCredit;
    var totalRebate = heatPumpRebate + waterHeaterRebate + insulationRebate + stoveRebate + electricWaterHeaterRebate + electricDryerRebate + panelRebate + wiringRebate;
    if (totalRebate > 14000) {
        totalRebate = 14000;
    }
    totalCredit -= totalRebate;
    if (totalCredit < 0) {
        totalCredit = 0;
    }

   
    creditDisplay.textContent = `$${totalCredit.toFixed(2)}`;
    rebateDisplay.textContent = `$${totalRebate.toFixed(2)}`;
}