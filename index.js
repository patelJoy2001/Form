function mysubmit() {
    document.getElementById("para").style.fontSize = "100px";
}

function reload() {
    // to reload page
    window.location.reload();
}

function getVal() {
    const name = document.getElementById("name").value
    const age = document.getElementById("age").value
    const weight = document.getElementById("weight").value
    var height = document.getElementById("height").value

    height = (height / 3.281);
    var bmi = weight / (height * height);
    // alert(bmi);

    if (bmi > 16 && bmi < 18.5) {
        document.getElementById("para").innerHTML = "Hey " + name + ".Your bmi is "+bmi.toFixed(2)+ ". You are underweight,need to gain some weight."
    }
    else if (bmi > 18.5 && bmi < 25.5) {
        document.getElementById("para").innerHTML = "Hey " + name + ".Your bmi is "+bmi.toFixed(2)+". You are healthy,enjoy..."
    }
    else if (bmi > 25 && bmi < 30) {
        document.getElementById("para").innerHTML = "Hey " + name + ".Your bmi is "+bmi.toFixed(2)+".You are overweight, need proper diet and exercise."
    }
    else if (bmi > 25) {
        document.getElementById("para").innerHTML = "Hey " + name + ".Your bmi is "+bmi.toFixed(2)+" . You are obese, needed to take some extreme diet measures and exercise."
    }
}



