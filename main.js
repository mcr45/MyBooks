const myLibr=[{
    title:'La redazione',
    author:'John',
    pages:90,
    finish:false
},{
    title:'Trono di spade',
    author:'William',
    pages:78,
    finish:false
},{
    title:'Mare e Sole',
    author:'Hidaki',
    pages:45,
    finish:false
}]

function Books(title, author, pages, finish) {
  this.title = title;
  this.author = author;
  this.title = title;
  this.pages=pages
  this.finish = finish;
  this.info = function () {
    console.log(
      `${this.title} by ${this.author}, ${this.pages}  ${
        this.finish === true ? "has been read" : "not read yet"
      }`
    );
  };
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
tdtitle.setAttribute("data-attribute",index)
tdauthor.innerHTML=item.author
tdauthor.setAttribute("data-attribute",index)
tdpages.innerText=item.pages
tdpages.setAttribute("data-attribute",index)
tdfinish.innerText=item.finish ? 'read': 'not read yet'
tdfinish.setAttribute("data-attribute",index)
tbut.innerHTML=`<button data-attribute='${index}'>update</button>`
tbut.setAttribute("data-attribute",index)
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
let book={title:title.value,
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

let updatebutton=document.querySelectorAll('.update')
let buttons=Array.from(updatebutton)
buttons.forEach((item)=>{
  item.addEventListener('click', removeBook)
})
/* updatebutton */

function removeBook(e){
let y=e.target.getAttribute("data-attribute")
console.log(y)


}