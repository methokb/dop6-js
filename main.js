const ROOT = document.getElementById('root')

const BtnOne = document.createElement ('button')
ROOT.append(BtnOne)
BtnOne.textContent = 'Show modal 1'
BtnOne.style.cssText = `
display: inline-block;  
transform: translateX(300px);
box-sizing: border-box;
padding: 0 25px;
margin: 0 15px 15px 0;
outline: none;
border: 1px solid #fff;
border-radius: 50px;
height: 46px;
line-height: 46px;
font-size: 14px;
font-weight: 600;
text-decoration: none;
color: #444;
background-color: #fff;
box-shadow: 0 4px 6px rgb(65 132 144 / 10%), 0 1px 3px rgb(0 0 0 / 8%);
cursor: pointer;
user-select: none;
appearance: none;
touch-action: manipulation;  
vertical-align: top;
transition: box-shadow 0.2s;
position: relative;
top: 25px;
`
const BtnTwo = document.createElement ('button')
ROOT.append(BtnTwo)
BtnTwo.textContent = 'Show modal 2'
BtnTwo.style.cssText = `
display: inline-block;  
box-sizing: border-box;
padding: 0 25px;
margin: 0 15px 15px 0;
outline: none;
border: 1px solid #fff;
border-radius: 50px;
height: 46px;
line-height: 46px;
font-size: 14px;
font-weight: 600;
text-decoration: none;
color: #444;
background-color: #fff;
box-shadow: 0 4px 6px rgb(65 132 144 / 10%), 0 1px 3px rgb(0 0 0 / 8%);
cursor: pointer;
user-select: none;
appearance: none;
touch-action: manipulation;  
vertical-align: top;
transition: box-shadow 0.2s;
position: relative;
top: 25px;
`
const BtnThree = document.createElement ('button')
ROOT.append(BtnThree)
BtnThree.textContent = 'Show modal 3'
BtnThree.style.cssText = `
display: inline-block;  
box-sizing: border-box;
padding: 0 25px;
transform: translateX(-300px);
margin: 0 15px 15px 0;
outline: none;
border: 1px solid #fff;
border-radius: 50px;
height: 46px;
line-height: 46px;
font-size: 14px;
font-weight: 600;
text-decoration: none;
color: #444;
background-color: #fff;
box-shadow: 0 4px 6px rgb(65 132 144 / 10%), 0 1px 3px rgb(0 0 0 / 8%);
cursor: pointer;
user-select: none;
appearance: none;
touch-action: manipulation;  
vertical-align: top;
transition: box-shadow 0.2s;
position: relative;
top: 25px;
`

const modal = document.createElement('div')
modal.style.cssText = `
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: #00000090;
position: fixed;
top: 0;
left: 0;
`

const modalWindow = document.createElement ('div')
modalWindow.innerHTML = `
<h1>I'm modal window 😍</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit dolorem autem minima illum nesciunt at omnis, vero tempore dolore repellat! Dicta, consectetur dolorum doloribus magni soluta culpa, consequatur dolore iure facilis eaque commodi ea laborum incidunt adipisci excepturi cumque, quasi neque nemo. Praesentium veniam, excepturi distinctio laborum saepe aut unde. Velit nemo quod repellat porro ab assumenda, tempore aspernatu.</p>`

modalWindow.style.cssText = `
padding: 10px 20px 30px;
width: 1050px;
height: 150px;
background-color: white;
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`

modal.append(modalWindow);


BtnOne.addEventListener('click', ()=> {
ROOT.append(modal);
console.log('clicked');
}
)

BtnTwo.addEventListener('click', ()=> {
ROOT.append(modal)
console.log('clicked');
}
);

BtnThree.addEventListener('click', ()=> {
ROOT.append(modal);
console.log('clicked');
}
)


const closeWindow = document.createElement('button')
closeWindow.textContent = 'x'
modalWindow.append(closeWindow);

closeWindow.style.cssText = `
border-radius: 3px;
cursor: pointer;
background-color: red;
color: white;
border: none;
width: 30px;
height: 20px;
transform: translate(530px, -106.5px);
`

closeWindow.addEventListener('click', () => {
    modal.remove();
});
 
modal.addEventListener('click', (event) => {
    if(event.target === modal){
        modal.remove();
    } 
})