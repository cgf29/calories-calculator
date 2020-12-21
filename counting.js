const name = document.getElementById('food'),
   cal = document.getElementById('cal'),
   inputs1 = document.getElementsByName('input'),
   addBtn = document.getElementById('add-btn'),
   table = document.getElementById('today')
   eaten = document.getElementById('eaten'),
   remaining = document.getElementById('remaining'),
   limit = document.getElementById('limit'),
   allDays = document.getElementById('allDaysTable'),
   allDaysTh = document.getElementsByClassName('allDaysTh'),
   navLink = document.querySelectorAll('.nav__item'),
   allDaysTr = document.querySelectorAll('.allDaysTable > tr'),
   daysNum = document.getElementById('days'),
   avarge = document.getElementById('avarge'),
   element = document.body;

let deleteBtn,
   eatenCal = JSON.parse(localStorage.getItem('eaten')) || 0,
   limitCal = JSON.parse(localStorage.getItem('limit')),
   remainingCal = JSON.parse(localStorage.getItem('remaining'));

let days = [],
   eated;
const today = new Date;


window.addEventListener('load', () => {
   const lastDate = JSON.parse(localStorage.getItem('date')),
      lastMonth = JSON.parse(localStorage.getItem('month'));
   eated = JSON.parse(localStorage.getItem('eaten'));
   

   days = JSON.parse(localStorage.getItem('days')) || []; 

   class CrerateDay {
      constructor(cal) {
         this.cal = cal;
         this.date = lastDate;
         this.month = lastMonth;
      }
   }
   
   days.unshift(new CrerateDay(eated));
   if(days.length == 0 || days[0].date == undefined){
      days.shift();
      localStorage.setItem('days', JSON.stringify(days));
   }
   if(today.getDate() !== days[0].date){
      days.shift();
      days.unshift(new CrerateDay(eated));
      localStorage.setItem('days', JSON.stringify(days));   
   }
   if (days[0].date == today.getDate() || days[0].cal == 0){
      days.shift();
      localStorage.setItem('days', JSON.stringify(days));
   }
   

   const addDay = index => {
         allDays.innerHTML += `
            <tr class="table-row">
               <td>${days[index].month }.${days[index].date}</td>
               <td class="calories">${days[index].cal}</td>
            </tr>
            `
   }
      
   days.forEach((element, index) => {
      addDay(index);
   });

   let sum = 0;
   for(let i = 0; i<days.length; i++){
      sum += days[i].cal;
   }
   const avargeCal = Math.floor(sum / days.length);
   daysNum.innerHTML = `${days.length} days`;
   if(days.length > 0){
      avarge.innerHTML = `${avargeCal} cal per day`;
   } else {
      avarge.innerHTML = 'This is your first day';
   }


   if (today.getDate() !== lastDate) {
      eatenCal = 0;
      const newFoods = [];
      localStorage.setItem('eaten', JSON.stringify(eatenCal));
      localStorage.setItem('foods', JSON.stringify(newFoods));
      table.innerHTML = '';
      const newRemaining = limitCal;
      localStorage.setItem('remaining', JSON.stringify(newRemaining));
      remaining.innerHTML = `Remaining: ${newRemaining}`;
      eaten.innerHTML = `Eaten: ${eatenCal}`;
   }
})


function dark() {
   element.classList.toggle("dark-mode");
}




const showPage = (pageId) => {
   const page = document.querySelectorAll('.page');
   page.forEach(page => { page.style.display = 'none' });
   document.querySelector(pageId).style.display = 'flex';
}

location.hash = '';
location.hash = '#counting';

window.addEventListener('hashchange', () => {
   showPage(location.hash);
   navLink.forEach(element => {
      if(element.getAttribute('href') === location.hash){
         element.classList.add('selected');
      } else {
         element.classList.remove('selected');
      }
   })
})



let foods = [];

remaining.innerHTML = `Remaining: ${remainingCal}`;
eaten.innerHTML = `Eaten: ${eatenCal}`;
limit.innerHTML = `Max: ${limitCal}`;

if (remainingCal < 0) {
   const overEaten = eatenCal - limitCal;
   remaining.innerHTML = `Overeaten: ${overEaten}`;
} else {
   remaining.innerHTML = `Remaining: ${remainingCal}`;
}
localStorage.setItem('remaining', JSON.stringify(remainingCal));


foods = JSON.parse(localStorage.getItem('foods')) || [];


const addFood = index => {
   table.innerHTML += `
   <tr>
      <td>${foods[index].name}</td>
      <td class="calories">${foods[index].cal} cal</td>
      <td>
      <a class="delete-btn" style="cursor:pointer;color:#FF0000;font-weight:500">X</a>
      </td>
   </tr>
   `
}
if(foods){
foods.forEach((element, index) => {
   addFood(index);
});
}

class CrerateFood {
   constructor(name, cal) {
      this.name = name;
      this.cal = cal;
   }
}


addBtn.addEventListener('click', () => {
   if (!name.value || !cal.value || isNaN(cal.value)) {
      for (const key of inputs1) {
         key.classList.add('error');
      }
   } else if (remainingCal == null){
      alert('Calculate your calories firs!')
   } else {
      for (const key of inputs1) {
         key.classList.remove('error');
      }
      foods.push(new CrerateFood(name.value, cal.value));
      localStorage.setItem('foods', JSON.stringify(foods));

      eatenCal += parseInt(cal.value, 10);
      eaten.innerHTML = `Eaten: ${eatenCal}`;
      localStorage.setItem('eaten', JSON.stringify(eatenCal));


      remainingCal -= parseInt(cal.value, 10);
      if (remainingCal < 0) {
         const overEaten = eatenCal - limitCal;
         remaining.innerHTML = `Overeaten: ${overEaten}`;
      } else {
         remaining.innerHTML = `Remaining: ${remainingCal}`;
      }
      localStorage.setItem('remaining', JSON.stringify(remainingCal));

      const date = new Date;
      localStorage.removeItem('date');
      localStorage.setItem('date', JSON.stringify(date.getDate()));
      localStorage.setItem('month', JSON.stringify(date.getMonth()+1));
      addFood(foods.length - 1);
      name.value = null;
      cal.value = null;
      btnDeleteFood();
   }
})


const deleteFood = e => {
   const rowIndex = e.target.parentNode.parentNode.rowIndex;
   e.target.parentNode.parentNode.parentNode.remove();

   eatenCal -= parseInt(foods[foods.length - 1].cal, 10);
   eaten.innerHTML = `Eaten: ${eatenCal}`;
   localStorage.removeItem('eaten');
   localStorage.setItem('eaten', JSON.stringify(eatenCal));

   remainingCal += parseInt(foods[foods.length - 1].cal, 10);
   if (remainingCal < 0) {
      const overEaten = eatenCal - limitCal;
      remaining.innerHTML = `Overeaten: ${overEaten}`;
   } else {
      remaining.innerHTML = `Remaining: ${remainingCal}`;
   }
   remaining.innerHTML = `Reamaining: ${remainingCal}`;
   localStorage.removeItem('remaining');
   localStorage.setItem('remaining', JSON.stringify(remainingCal));

   foods.splice(rowIndex, 1);
   localStorage.removeItem('foods');
   localStorage.setItem('foods', JSON.stringify(foods));
}

const btnDeleteFood = () => {
   if (foods) {
      deleteBtn = document.querySelectorAll('.delete-btn');
      for (const btn of deleteBtn) {
         btn.addEventListener('click', e => {
            e.preventDefault;
            deleteFood(e);
         })
      }
   }
}
btnDeleteFood();