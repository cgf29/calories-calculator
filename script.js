const weight = document.getElementById('w'),
   height = document.getElementById('h'),
   age = document.getElementById('a'),
   inputs = document.querySelectorAll('.inputs'),
   btn = document.getElementById('btn'),
   finalResult = document.querySelector('.result'),
   radioBtn = document.getElementsByName('radio'),
   goal = document.getElementsByName('goal'),
   goToEat = document.querySelector('.goToEat');


function dark() {
   element.classList.toggle("dark-mode");
}


const selectValue = () => {
   const select = document.getElementById('activity').value;
   let activity = 1.2;
   if (select == 1) { activity = 1.2 }
   else if (select == 2) { activity = 1.375 }
   else if (select == 3) { activity = 1.55 }
   else if (select == 4) { activity = 1.725 }
   else if (select == 5) { activity = 1.9 }
   return activity;
}



const maleRetention = (weight, height, age) => {
   const maleMath = (weight, height, age) => {
      const wResult = 10 * weight,
         hResult = 6.25 * height,
         aResult = 5 * age;

      const activity = selectValue();
      const mathresult = Math.floor(((wResult + hResult - aResult) + 5) * activity);
      return mathresult;
   }

   const maleWater = (weight) => {
      return (weight * 35) / 1000;
   }

   const maleWeight = (height) => {
      return Math.floor((height * 4.0 / 2.54 - 128) * 0.453);
   }
   const mProtein = (weight, height, age) => {
      const calories = maleMath(weight, height, age);
      return Math.floor((calories * 0.3 / 4));
   }

   const mFats = (weight, height, age) => {
      const calories = maleMath(weight, height, age);
      return Math.floor((calories * 0.25 / 9));
   }

   const mCarbohydrates = (weight, height, age) => {
      const calories = maleMath(weight, height, age);
      return Math.floor((calories * 0.45 / 4));
   }

   const showReslult = (c, w, pw, p, f, ca) => {
      const divElement = document.createElement('div');
      divElement.classList.add('result')
      finalResult.append(divElement);
      divElement.innerHTML = `You have to eat ${c} ccal and drink ${w} liter every day <br><br>
      Your perfect weight: ${pw}kg <br><br>
      Protein: ${p}g<br>
      Fats: ${f}g<br>
      Carbohydrates: ${ca}g`;
   }

   const caloriesResult = maleMath(weight, height, age),
      waterResult = maleWater(weight),
      perfectWeight = maleWeight(height),
      protein = mProtein(weight, height, age),
      fats = mFats(weight, height, age),
      carbohydrates = mCarbohydrates(weight, height, age);

   showReslult(caloriesResult, waterResult, perfectWeight, protein, fats, carbohydrates);

   (function (weight, height, age) {
      new Chart(document.getElementById("chart"), {
         type: 'pie',
         data: {
            labels: ["Protein", "Fats", "Carbohydrates"],
            datasets: [{
               backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f"],
               data: [mProtein(weight, height, age),
               mFats(weight, height, age),
               mCarbohydrates(weight, height, age)]
            }]
         },
         options: {}
      });
   }(weight, height, age));

   return caloriesResult;
}
const maleLose = (weight, height, age) => {
   const maleMath = (weight, height, age) => {
      const wResult = 10 * weight,
         hResult = 6.25 * height,
         aResult = 5 * age;

      const activity = selectValue();
      const mathresult = Math.floor(((wResult + hResult - aResult) + 5) * activity);
      return mathresult - 0.08 * mathresult;
   }

   const maleWater = (weight) => {
      return (weight * 35) / 1000;
   }

   const maleWeight = (height) => {
      return Math.floor((height * 4.0 / 2.54 - 128) * 0.453);
   }
   const mProtein = (weight, height, age) => {
      const calories = maleMath(weight, height, age);
      return Math.floor((calories * 0.38 / 4));
   }

   const mFats = (weight, height, age) => {
      const calories = maleMath(weight, height, age);
      return Math.floor((calories * 0.34 / 9));
   }

   const mCarbohydrates = (weight, height, age) => {
      const calories = maleMath(weight, height, age);
      return Math.floor((calories * 0.28 / 4));
   }

   const showReslult = (c, w, pw, p, f, ca) => {
      const divElement = document.createElement('div');
      divElement.classList.add('result')
      finalResult.append(divElement);
      divElement.innerHTML = `You have to eat ${c} ccal and drink ${w} liter every day <br><br>
      Your perfect weight: ${pw}kg <br><br>
      Protein: ${p}g<br>
      Fats: ${f}g<br>
      Carbohydrates: ${ca}g`;
   }

   const caloriesResult = maleMath(weight, height, age),
      waterResult = maleWater(weight),
      perfectWeight = maleWeight(height),
      protein = mProtein(weight, height, age),
      fats = mFats(weight, height, age),
      carbohydrates = mCarbohydrates(weight, height, age);

   showReslult(caloriesResult, waterResult, perfectWeight, protein, fats, carbohydrates);

   (function (weight, height, age) {
      new Chart(document.getElementById("chart"), {
         type: 'pie',
         data: {
            labels: ["Protein", "Fats", "Carbohydrates"],
            datasets: [{
               backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f"],
               data: [mProtein(weight, height, age),
               mFats(weight, height, age),
               mCarbohydrates(weight, height, age)]
            }]
         },
         options: {}
      });
   }(weight, height, age));

   return caloriesResult;
}
const maleBuild = (weight, height, age) => {
   const maleMath = (weight, height, age) => {
      const wResult = 10 * weight,
         hResult = 6.25 * height,
         aResult = 5 * age;

      const activity = selectValue();
      const mathresult = Math.floor(((wResult + hResult - aResult) + 5) * activity);
      return mathresult + 0.08 * mathresult;
   }

   const maleWater = (weight) => {
      return (weight * 35) / 1000;
   }

   const maleWeight = (height) => {
      return Math.floor((height * 4.0 / 2.54 - 128) * 0.453);
   }
   const mProtein = (weight, height, age) => {
      const calories = maleMath(weight, height, age);
      return Math.floor((calories * 0.3 / 4));
   }

   const mFats = (weight, height, age) => {
      const calories = maleMath(weight, height, age);
      return Math.floor((calories * 0.3 / 9));
   }

   const mCarbohydrates = (weight, height, age) => {
      const calories = maleMath(weight, height, age);
      return Math.floor((calories * 0.4 / 4));
   }

   const showReslult = (c, w, pw, p, f, ca) => {
      const divElement = document.createElement('div');
      divElement.classList.add('result')
      finalResult.append(divElement);
      divElement.innerHTML = `You have to eat ${c} ccal and drink ${w} liter every day <br><br>
      Your perfect weight: ${pw}kg <br><br>
      Protein: ${p}g<br>
      Fats: ${f}g<br>
      Carbohydrates: ${ca}g`;
   }

   const caloriesResult = maleMath(weight, height, age),
      waterResult = maleWater(weight),
      perfectWeight = maleWeight(height),
      protein = mProtein(weight, height, age),
      fats = mFats(weight, height, age),
      carbohydrates = mCarbohydrates(weight, height, age);

   showReslult(caloriesResult, waterResult, perfectWeight, protein, fats, carbohydrates);

   (function (weight, height, age) {
      new Chart(document.getElementById("chart"), {
         type: 'pie',
         data: {
            labels: ["Protein", "Fats", "Carbohydrates"],
            datasets: [{
               backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f"],
               data: [mProtein(weight, height, age),
               mFats(weight, height, age),
               mCarbohydrates(weight, height, age)]
            }]
         },
         options: {}
      });
   }(weight, height, age));

   return caloriesResult;
}





const femaleRetention = (weight, height, age) => {
   const femaleMath = (weight, height, age) => {
      const wResult = 10 * weight,
         hResult = 6.25 * height,
         aResult = 5 * age;

      const activity = selectValue();
      const mathresult = Math.floor(((wResult + hResult - aResult) - 161) * activity);
      return mathresult;
   }

   const femaleWater = (weight) => {
      return (weight * 31) / 1000;
   }

   const femaleWeight = (height) => {
      return Math.floor((height * 3.5 / 2.54 - 108) * 0.453);
   }

   const fProtein = (weight, height, age) => {
      const calories = femaleMath(weight, height, age);
      return Math.floor((calories * 0.3 / 4));
   }

   const fFats = (weight, height, age) => {
      const calories = femaleMath(weight, height, age);
      return Math.floor((calories * 0.25 / 9));
   }

   const fCarbohydrates = (weight, height, age) => {
      const calories = femaleMath(weight, height, age);
      return Math.floor((calories * 0.45 / 4));
   }

   const showReslult = (c, w, pw, p, f, ca) => {
      const divElement = document.createElement('div');
      divElement.classList.add('result')
      finalResult.append(divElement);
      divElement.innerHTML = `You have to eat ${c} ccal and drink ${w} liter every day <br><br>
   Your perfect weight: ${pw}kg <br><br>
   Protein: ${p}g<br>
   Fats: ${f}g<br>
   Carbohydrates: ${ca}g`;
   }

   const caloriesResult = femaleMath(weight, height, age),
      waterResult = femaleWater(weight),
      perfectWeight = femaleWeight(height),
      protein = fProtein(weight, height, age);
   fats = fFats(weight, height, age),
      carbohydrates = fCarbohydrates(weight, height, age);

   showReslult(caloriesResult, waterResult, perfectWeight, protein, fats, carbohydrates);


   (function (weight, height, age) {
      new Chart(document.getElementById("chart"), {
         type: 'pie',
         data: {
            labels: ["Protein", "Fats", "Carbohydrates"],
            datasets: [{
               backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f"],
               data: [fProtein(weight, height, age),
               fFats(weight, height, age),
               fCarbohydrates(weight, height, age)]
            }]
         },
         options: {}
      });
   }(weight, height, age));

   return caloriesResult;
}
const femaleLose = (weight, height, age) => {
   const femaleMath = (weight, height, age) => {
      const wResult = 10 * weight,
         hResult = 6.25 * height,
         aResult = 5 * age;

      const activity = selectValue();
      const mathResult = Math.floor(((wResult + hResult - aResult) - 161) * activity);
      return mathResult - 0.08 * mathResult;
   }

   const femaleWater = (weight) => {
      return (weight * 31) / 1000;
   }

   const femaleWeight = (height) => {
      return Math.floor((height * 3.5 / 2.54 - 108) * 0.453);
   }

   const fProtein = (weight, height, age) => {
      const calories = femaleMath(weight, height, age);
      return Math.floor((calories * 0.38 / 4));
   }

   const fFats = (weight, height, age) => {
      const calories = femaleMath(weight, height, age);
      return Math.floor((calories * 0.34 / 9));
   }

   const fCarbohydrates = (weight, height, age) => {
      const calories = femaleMath(weight, height, age);
      return Math.floor((calories * 0.28 / 4));
   }

   const showReslult = (c, w, pw, p, f, ca) => {
      const divElement = document.createElement('div');
      divElement.classList.add('result')
      finalResult.append(divElement);
      divElement.innerHTML = `You have to eat ${c} ccal and drink ${w} liter every day <br><br>
   Your perfect weight: ${pw}kg <br><br>
   Protein: ${p}g<br>
   Fats: ${f}g<br>
   Carbohydrates: ${ca}g`;
   }

   const caloriesResult = femaleMath(weight, height, age),
      waterResult = femaleWater(weight),
      perfectWeight = femaleWeight(height),
      protein = fProtein(weight, height, age);
      fats = fFats(weight, height, age),
      carbohydrates = fCarbohydrates(weight, height, age);

   showReslult(caloriesResult, waterResult, perfectWeight, protein, fats, carbohydrates);


   (function (weight, height, age) {
      new Chart(document.getElementById("chart"), {
         type: 'pie',
         data: {
            labels: ["Protein", "Fats", "Carbohydrates"],
            datasets: [{
               backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f"],
               data: [fProtein(weight, height, age),
               fFats(weight, height, age),
               fCarbohydrates(weight, height, age)]
            }]
         },
         options: {}
      });
   }(weight, height, age));

   return caloriesResult;
}
const femaleBuild = (weight, height, age) => {
   const femaleMath = (weight, height, age) => {
      const wResult = 10 * weight,
         hResult = 6.25 * height,
         aResult = 5 * age;

      const activity = selectValue();
      const mathResult = Math.floor(((wResult + hResult - aResult) - 161) * activity);
      return mathResult + 0.08 * mathResult;
   }

   const femaleWater = (weight) => {
      return (weight * 31) / 1000;
   }

   const femaleWeight = (height) => {
      return Math.floor((height * 3.5 / 2.54 - 108) * 0.453);
   }

   const fProtein = (weight, height, age) => {
      const calories = femaleMath(weight, height, age);
      return Math.floor((calories * 0.3 / 4));
   }

   const fFats = (weight, height, age) => {
      const calories = femaleMath(weight, height, age);
      return Math.floor((calories * 0.3 / 9));
   }

   const fCarbohydrates = (weight, height, age) => {
      const calories = femaleMath(weight, height, age);
      return Math.floor((calories * 0.4 / 4));
   }

   const showReslult = (c, w, pw, p, f, ca) => {
      const divElement = document.createElement('div');
      divElement.classList.add('result')
      finalResult.append(divElement);
      divElement.innerHTML = `You have to eat ${c} ccal and drink ${w} liter every day <br><br>
   Your perfect weight: ${pw}kg <br><br>
   Protein: ${p}g<br>
   Fats: ${f}g<br>
   Carbohydrates: ${ca}g`;
   }

   const caloriesResult = femaleMath(weight, height, age),
      waterResult = femaleWater(weight),
      perfectWeight = femaleWeight(height),
      protein = fProtein(weight, height, age);
   fats = fFats(weight, height, age),
      carbohydrates = fCarbohydrates(weight, height, age);

   showReslult(caloriesResult, waterResult, perfectWeight, protein, fats, carbohydrates);


   (function (weight, height, age) {
      new Chart(document.getElementById("chart"), {
         type: 'pie',
         data: {
            labels: ["Protein", "Fats", "Carbohydrates"],
            datasets: [{
               backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f"],
               data: [fProtein(weight, height, age),
               fFats(weight, height, age),
               fCarbohydrates(weight, height, age)]
            }]
         },
         options: {}
      });
   }(weight, height, age));

   return caloriesResult;
}


let finalCalories;


btn.addEventListener('click', () => {
   if (
      weight.value.length < 1 ||
      height.value.length < 1 ||
      age.value.lenght < 1 ||
      isNaN(weight.value) ||
      isNaN(height.value) || 
      isNaN(age.value)
   ) {
      for (const key of inputs) {
         key.classList.add('error');
      }
   } else {
      for (const key of inputs) {
         key.classList.remove('error');
      }
      if (finalResult.childNodes) {
         finalResult.innerHTML = '';
      }
      if (goToEat.childNodes) {
         goToEat.innerHTML = '';
      }
      

      for (let i = 0, length = radioBtn.length; i < length; i++) {
         if (radioBtn[i].checked) {
            if (radioBtn[i].value == 'male') {
               for (let i = 0, length = goal.length; i < length; i++) {
                  if (goal[i].checked) {
                     if (goal[i].value == 'retention') {
                       
                        finalCalories = maleRetention(weight.value, height.value, age.value);
                     } else if (goal[i].value == 'lose') {
                       
                        finalCalories = maleLose(weight.value, height.value, age.value);
                     } else if (goal[i].value == 'build') {
                       
                        finalCalories = maleBuild(weight.value, height.value, age.value);
                     }
                  }
               }
            } else if (radioBtn[i].value == 'female') {
               for (let i = 0, length = goal.length; i < length; i++) {
                  if (goal[i].checked) {
                     if (goal[i].value == 'retention') {
                        
                        finalCalories = femaleRetention(weight.value, height.value, age.value);
                     } else if (goal[i].value == 'lose') {
                        
                        finalCalories = femaleLose(weight.value, height.value, age.value);
                     } else if (goal[i].value == 'build') {
                        finalCalories = femaleBuild(weight.value, height.value, age.value);
                     }
                  }
               }
            }
         }
      }
      goToEat.innerHTML = 
      '<a class="goEat" style="width:300px;margin: 0 auto;" href="#counting" onclick="saveLimit()">Use this number</a>';
   }
});

const saveLimit = () => {
   localStorage.setItem('limit', JSON.stringify(finalCalories));
   localStorage.setItem('remaining', JSON.stringify(finalCalories));
   limit.innerHTML = finalCalories;
   remaining.innerHTML = finalCalories;
}