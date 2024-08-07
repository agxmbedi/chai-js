# Projects relaetd to DOM

## project link
https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html

## projects 1 solution

``` javascript
const buttons=document.querySelectorAll('.button')
//console.log(buttons);
const body=document.querySelector("body")
buttons.forEach((button)=>{
  //console.log(button);
  button.addEventListener('click',function(event){
    console.log(event)
    console.log(event.target)
    if(event.target.id==='grey') {
      body.style.backgroundColor=event.target.id;
    }
    if(event.target.id==='blue') {
      body.style.backgroundColor=event.target.id;
    }
    if(event.target.id==='white') {
      body.style.backgroundColor=event.target.id;
    }
    if(event.target.id==='yellow') {
      body.style.backgroundColor=event.target.id;
    }
    if(event.target.id==='purple') {
      body.style.backgroundColor=event.target.id;
    }
    
  })
})

```

## projects 2 solution

``` javascript
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  }
  //results.innerHTML=`${height}`;
  else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight ${weight}`;
  } else {
    //cal BMI
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = (`<span>${bmi}</span>`);
  }
});

```
## Project 3 solution

``` javascript
const clock = document.querySelector('#clock');

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```

## Project 5

``` javascript
const insert=document.getElementById('insert')

window.addEventListener('keydown',(e)=>{
  insert.innerHTML=`
  <div class='color'>
    <h1>${e.key}</h1>
  </div>`
})

```