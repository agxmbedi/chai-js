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
