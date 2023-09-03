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


/* td.innerText='hey'
tr.appendChild(td)
tab.appendChild(tr) */

myLibr.forEach((item)=>{
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

loadBook()




