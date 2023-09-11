/* let lg=2 */

let myLibr=[{
    title:'La redazione',
    author:'John',
    pages:90,
    finish:false,
    id:0
},{
    title:'Trono di spade',
    author:'William',
    pages:78,
    finish:false,
    id:1
},{
    title:'Mare e Sole',
    author:'Hidaki',
    pages:45,
    finish:false,
    id:2
}]/* 
let prova=new Books('non','ji',90,true)
console.log(prova) */
function Books(title, author, pages, finish) {
  /* console.log(lg) */
  let lg=0
  this.title = title;
  this.author = author;
  this.title = title;
  this.pages=pages
  this.finish = finish;
  this.id=setId()
  this.info = function () {
    console.log(
      `${this.title} by ${this.author}, ${this.pages}  ${
        this.finish === true ? "has been read" : "not read yet"
      }`
    );
  };
  function setId(){
    return lg=lg+1
  }
}


function addBook(book){

    myLibr.push(book)
}

function loadBook(){

let tab=document.querySelector('#tab')




myLibr.forEach((item,index)=>{
    let tr=document.createElement('tr')
let tdtitle=document.createElement('td')
let tdauthor =document.createElement('td')
let tdpages=document.createElement('td')
let tdfinish=document.createElement('td')
let tbut=document.createElement('td')
tdtitle.innerText=item.title
tdtitle.setAttribute("data-attribute",item.id)//index
tdauthor.innerHTML=item.author
tdauthor.setAttribute("data-attribute",item.id)
tdpages.innerText=item.pages
tdpages.setAttribute("data-attribute",item.id)
tdfinish.innerText=item.finish ? 'read': 'not read yet'
tdfinish.setAttribute("data-attribute",item.id)
tbut.innerHTML=`<button data-attribute='${item.id}'>update</button>`
tbut.setAttribute("data-attribute",item.id)
tbut.classList.add('update')
tr.append(tdtitle,tdauthor,tdpages,tdfinish,tbut)
tab.appendChild(tr)
})


}

loadBook()
/* 
prova send books on click */

const mydemo=[/* {
  title:'Vuoto ap e',
  author:'John',
  pages:77,
  finish:false
} */]

function sendBook(e){
  e.preventDefault()
  let tab=document.querySelector('#tab')
let form=document.querySelector('#prova')
let title=document.querySelector("#title")
let author=document.querySelector('#author')
let pages=document.querySelector('#pages')
/* console.log(title.value) */
let book={title:title.value,// new Book qui,non ora ma fallo
author:author.value,
pages:pages.value,
finish:false
}

mydemo.push(book)

form.style.display='none'

  mydemo.forEach((item)=>{
      let tr=document.createElement('tr')
  let tdtitle=document.createElement('td')
  let tdauthor =document.createElement('td')
  let tdpages=document.createElement('td')
  let tdfinish=document.createElement('td')
  tdtitle.innerText=item.title
  tdauthor.innerHTML=item.author
  tdpages.innerText=item.pages
  tdfinish.innerText=item.finish ? 'read': 'not read yet'
  
  tr.append(tdtitle,tdauthor,tdpages,tdfinish)
  tab.appendChild(tr)
  
  })

}
let but=document.querySelector('#send')
but.addEventListener('click',sendBook)
/*                **********    add book from form sopra ********************** */



let updatebutton=document.querySelectorAll('.update')
let buttons=Array.from(updatebutton)
buttons.forEach((item)=>{
  item.addEventListener('click', updateBook)
})


/*              updatebutton */
/* 
console.log(myLibr) */
function updateBook(e){
/* 
console.log(myLibr) */
let value_id=e.target.getAttribute("data-attribute")
console.log('it is'+ value_id)
/* console.log(y) */
/* 
let bb=document.querySelectorAll(`[data-attribute='${y}']`)
console.log(bb)
let aa=Array.from(bb)
console.log(aa) */



let bts=document.querySelectorAll('.update')
let updbutns=Array.from(bts)
/* 
updbutns.forEach((btn)=>{
  btn.removeEventListener("click",updateBook)
}) */


/* 
console.log(myLibr) */
function ver0(im,value_id){
  if(im.id===value_id){return true}
}

/* myLibr.forEach((ir)=>{
  console.log(ir)
}) */

/* let eleIndex=myLibr.findIndex((item)=>{
if(item.id===value_id) return true
})
 */

let eleIndex=myLibr.findIndex(ver0)
  




console.log(eleIndex)
let updBook=myLibr[eleIndex]/* 
updBook.finish=updBook.finish? false : true */
console.log(updBook)/* 
myLibr.splice((eleIndex,1,updBook)) */


/* 
loadBook() */

}