

let data = [{
	title: "EGYPT TANGBIA",
	cardDesc: "Denatibus et magnis dis parturient montes, nascetur ridiculus mus",
	imageSrc: "./MicrosoftTeams-image (5).png"
},
{
	title: "OLLING PHISOTIP",
	cardDesc: "Penatibus et magnis dis parturient montes, nascetur ridiculus mus",
	imageSrc: "./MicrosoftTeams-image (3).png"

},
{
	title: "CORTIA DYNA",
	cardDesc: "Penatibus et magnis dis parturient montes, nascetur ridiculus mus",
	imageSrc: "./MicrosoftTeams-image (7).png"

},
{
	title: "EGYPT TANGBIA",
	cardDesc: "Denatibus et magnis dis parturient montes, nascetur ridiculus mus",
	imageSrc: "./MicrosoftTeams-image (11).png"

},
{
	title: "OLLING PHISOTIP",
	cardDesc: "Penatibus et magnis dis parturient montes, nascetur ridiculus mus",
	imageSrc: "./MicrosoftTeams-image (4).png"

},
{
	title: "CORTIA DYNA",
	cardDesc: "Penatibus et magnis dis parturient montes, nascetur ridiculus mus",
	imageSrc: "./MicrosoftTeams-image (9).png"

},
{
	title: "EGYPT TANGBIA",
	cardDesc: "Denatibus et magnis dis parturient montes, nascetur ridiculus mus",
	imageSrc: "./MicrosoftTeams-image (6).png"

},
{
	title: "OLLING PHISOTIP",
	cardDesc: "Penatibus et magnis dis parturient montes, nascetur ridiculus mus",
	imageSrc: "./MicrosoftTeams-image (12).png"

},
{
	title: "OLLING PHISOTIP",
	cardDesc: "Penatibus et magnis dis parturient montes, nascetur ridiculus mus",
	imageSrc: "./MicrosoftTeams-image (1).png"

},
{
	title: "CORTIA DYNA",
	cardDesc: "Penatibus et magnis dis parturient montes, nascetur ridiculus mus",
	imageSrc: "./MicrosoftTeams-image (2).png"

},
{
	title: "EGYPT TANGBIA",
	cardDesc: "Denatibus et magnis dis parturient montes, nascetur ridiculus mus",
	imageSrc: "./MicrosoftTeams-image.png"

},
{
	title: "OLLING PHISOTIP",
	cardDesc: "Penatibus et magnis dis parturient montes, nascetur ridiculus mus",
	imageSrc: "./MicrosoftTeams-image (8).png"

},

];


//   const bodywrapper = document.getElementsByClassName("body")[0];


const rowWrapper = document.querySelector('.row-wrapper');

// const modal = document.createElement("section");
// modal.className = "modal hidden";
// modal.innerHTML = `<div class="flex">
//   <button class="btn-close">⨉</button>
//   </div>
//   <div>
//   <h3></h3>
//   <p>
//   </p>
//   </div>`;
// document.body.append(modal);

// const overlay = document.createElement("div");
// overlay.className = "overlay hidden";
// document.body.append(overlay);

// const closebtn = document.querySelector(".modal .btn-close");

// const openModal = function (e) {
// 	const modalTitle = document.querySelector(".modal h3");
// 	modalTitle.innerHTML = e.target.closest(".card").querySelector(".card-title").innerHTML;
// 	const modalText = document.querySelector(".modal p");
// 	const parent = e.target.closest(".row-wrapper")
// 	const child = e.target.closest(".card");
// 	const currentIndex = Array.prototype.indexOf.call(parent.children, child);
// 	modalText.innerHTML = `${data[currentIndex].cardDesc}`;
// 	modal.classList.remove("hidden");
// 	overlay.classList.remove("hidden");
// 	document.body.style.overflow = "hidden"


// };

// const closeModal = function () {
// 	modal.classList.add("hidden");
// 	overlay.classList.add("hidden");
// 	document.body.style.overflow = "scroll"

// };
// closebtn.addEventListener("click", closeModal);


// actual modal //

const closebtn = document.querySelector(".btn-close");
// const cardButtons = document.querySelectorAll('.card');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

function handleCardButtonClick(event) {
	const button = event.currentTarget;
	const card = button.closest('.card');
	const imgSrc = card.querySelector('img').src;
	const desc = card.querySelector('.card-text').innerHTML;
	const title = card.querySelector('.card-title').textContent;

	// cardButtons.forEach(button => button.addEventListener('click', handleCardButtonClick))


	modal.innerHTML = 
	`
	<div class="container">
	<div class="row">
		<div class="col-md-6">
			<img class="img-fluid" src="${imgSrc}">
		</div>
		<div class="col-md-6">
			<h4>${title}</h4>
			<p>${desc}</p>
			<p>${desc}</p>
			<p>${desc}</p>

		</div>

	</div>
</div>
  	`
  ;

  
modal.classList.remove("hidden");
overlay.classList.remove("hidden");
document.body.style.overflow = "hidden"
}


const closeModal = function () {
	modal.classList.add("hidden");
	overlay.classList.add("hidden");
	document.body.style.overflow = "scroll"

};
closebtn.addEventListener("click", closeModal);



for (let i = 0; i < data.length; i++) {

	const col = document.createElement('div');
	col.className = "col-md-3 mb-4 d-flex justify-content-center justify-content-md-start"
	rowWrapper.appendChild(col);

	const card = document.createElement('div');
	card.className = "card"
	card.style.width = "18rem";
	col.appendChild(card);

	const cardImage = document.createElement('img');
	// cardImage.className = "card-img-top"
	cardImage.src = `${data[i].imageSrc}`
	card.appendChild(cardImage);

	const cardBody = document.createElement('div');
	cardBody.className = "card-body";
	card.appendChild(cardBody);

	const cardTitle = document.createElement('h5');
	cardTitle.className = "card-title text-center card-headline";
	cardTitle.innerHTML = `${data[i].title}`
	cardBody.appendChild(cardTitle);

	const cardText = document.createElement('p');
	cardText.className = "card-text text-center card-paragraph";
	cardText.innerHTML = `${data[i].cardDesc}`
	cardBody.appendChild(cardText);

	const cardFooter = document.createElement('div');
	cardFooter.className = "card--footer d-flex justify-content-between";
	cardBody.appendChild(cardFooter);

	const iconWrapper1 = document.createElement('span');
	iconWrapper1.className = "icon-wrapper-1";
	iconWrapper1.innerHTML = "23,Aug,2013"
	cardFooter.appendChild(iconWrapper1);

	const iconWrapper2 = document.createElement('span');
	iconWrapper2.className = "icon-wrapper-2";
	iconWrapper1.appendChild(iconWrapper2);

	const icon = document.createElement('i');
	icon.className = "fa-solid fa-calendar-days";
	icon.style.color = "#bababa"
	iconWrapper2.appendChild(icon);

	const commentsWrapper1 = document.createElement('span');
	commentsWrapper1.className = "comments-wrapper-1";
	commentsWrapper1.innerHTML = "22 Comments"
	cardFooter.appendChild(commentsWrapper1);

	const commentsWrapper2 = document.createElement('span');
	commentsWrapper2.className = "comments-wrapper-2";
	commentsWrapper1.appendChild(commentsWrapper2);

	const icon2 = document.createElement('i');
	icon2.className = "fa-regular fa-comments";
	icon2.style.color = "#bababa"
	commentsWrapper2.appendChild(icon2);

	card.addEventListener("click", handleCardButtonClick);

}

//   const mini = document.querySelector(".mini");

//   if (mini.innerText.length > 150) {
// 	const newText2 = mini.innerText.substring(0, 150);
// 	mini.innerText = newText2 + "...";
//   } else {
// 	mini.innerText = mini;
//   }
