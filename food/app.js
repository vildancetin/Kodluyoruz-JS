const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://img.taste.com.au/AIEhBA9P/taste/2018/07/dan-dan-noodles-139178-1.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

//buttons
const div=document.querySelector(".btn-container")

const btnAll=document.createElement("button")
btnAll.innerHTML="All"

const btnKorea=document.createElement("button")
btnKorea.innerHTML="Korea"

const btnJapan=document.createElement("button")
btnJapan.innerHTML="Japan"

const btnChina=document.createElement("button")
btnChina.innerHTML="China"

div.append(btnAll,btnKorea,btnJapan,btnChina)
for (const child of div.children) {
  child.classList.add("btn-item")
}
const section=document.querySelector(".section-center")
// create element and add class
function menues(array){
  
  array.forEach(menu => {

    let divcol=document.createElement("div")
    divcol.classList.add("col-6","menu-items")
    
    let img=document.createElement("img")
    img.classList.add("photo")
    img.src=menu.img
    
    let menuInfo=document.createElement("div")
    menuInfo.classList.add("menu-info")
    
    let menuTitle=document.createElement("div")
    menuTitle.classList.add("menu-title")
    
    let menuText=document.createElement("div")
    menuText.classList.add("menu-text")
    menuText.innerHTML=menu.desc
    
    menuInfo.append(menuTitle,menuText)
    
    let title=document.createElement("h4")
    title.innerHTML=menu.title
    let price=document.createElement("h4")
    price.innerHTML=menu.price

    menuTitle.append(title,price)
    
    divcol.append(img,menuInfo)
    section.append(divcol)
  });
  
}


// sorting by category with reduce
const category="category"
  const groupByCategory = (array, prop) => {
    return array.reduce((acc, obj) => {
        let key = obj[prop]
        console.log(obj)
        console.log(key)
        if (!acc[key]){
            acc[key] = []
            console.log(acc[key] = [])
        }
        acc[key].push(obj)
        return acc
    }, {})
}

 
let groupedCategory = groupByCategory(menu,category)

btnKorea.addEventListener("click",clickCategory)
btnJapan.addEventListener("click",clickCategory)
btnChina.addEventListener("click",clickCategory)
btnAll.addEventListener("click",clickCategory)
// click method and show groups
function clickCategory(event){
  section.innerHTML=""
  if(event.target.textContent=="All")
    menues(menu)
  else if(event.target.textContent=="Korea")
    menues(groupedCategory.Korea)
  else if(event.target.textContent=="Japan")
    menues(groupedCategory.Japan)
  else if(event.target.textContent=="China")
    menues(groupedCategory.China)

}