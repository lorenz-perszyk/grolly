// I M P O R T S
import "../styles/style.css";
import { shopItemsData } from "./data";
import { cartItemAmount } from "./basket";


// F U N C T I O N S

type basketData = {
	id: string;
	name: string;
	year: number;
	price: number;
	quantity: number;
};
type wineData = {
	id: string;
	name: string;
	year: number;
	type: string;
	price: number;
	quantity: number;
	desc: string;
	vol: string;
	sugar: string;
	acid: string;
	img: string;
	background: string;
};


const createEntry = (item: wineData) => {
    return `
        <div class="basket wine flex flex-col gap-4 mx-auto md:flex-row md:grid md:grid-cols-6 md:gap-4
            lg:max-w-[960px] xl:flex xl:flex-col">
                <div class="relative w-3/4 mx-auto md:col-span-3 md:mr-0 md:w-full md:flex md:justify-end">
                    <img class="drop-shadow-xl mx-auto max-h-[550px]
                    sm:max-h-[750px] md:mr-0 xl:mr-auto  xl:max-h-[680px]"
                    src=${item.img} alt="Eine Flasche ${item.name}" />
                    <div class="absolute -z-10 m-auto left-0 right-0 top-[15%] bg-center bg-cover h-[70%] w-[80%]
                    md:w-[65%] md:m-0 xl:w-[80%] xl:m-auto" 
                    style="background-image: url(${item.background});"></div>
                </div>
                <div class="flex flex-col gap-4 max-w-[570px] mx-auto md:col-span-3 md:pt-28 xl:pt-0">
                    <div class="grid grid-cols-4 gap-2 py-1 border-y border-black">
                        <h3 class="col-span-3 pt-1">${item.name}</h3>
                        <h3 class="col-span-1 pt-1 border-l border-black text-right">${item.year}</h3>
                    </div>
                    <div class="h-10 grid grid-cols-4 gap-2">
                        <select class="h-full col-span-1 px-2 pt-1 cursor-pointer border border-black hover:border-[#904cd4] active:border-[#6014ad] bg-slate-100" name="amount_${item.name}" id="amount_${item.id}">
                            <option value="1">1 Stk.</option>
                            <option value="2">2 Stk.</option>
                            <option value="3">3 Stk.</option>
                            <option value="4">4 Stk.</option>
                            <option value="5">5 Stk.</option>
                            <option value="6">6 Stk.</option>
                            <option value="12">12 Stk.</option>
                            <option value="18">18 Stk.</option>
                            <option value="24">24 Stk.</option>
                            <option value="30">30 Stk.</option>
                        </select>
                        <button class="add h-full col-span-3 pt-1 border border-black transition bg-slate-100 hover:text-white hover:bg-[#904cd4] active:bg-[#6014ad]" 
                        data-id="${item.id}">
                        Hinzufügen</button>
                    </div>
                    <div class="flex flex-row justify-between mt-4 items-end">
                        <div class="details-toggle ${item.name} h-fit pb-1 cursor-pointer underline md:invisible">Details +</div>
                        <h1 class="">${item.price},-</h1>
                    </div>
                    <div class="details max-h-0 pt-6 overflow-hidden transition-all duration-200 ease-out md:max-h-fit" id="${item.name}">
                        <p class="mb-10">
                            ${item.desc}
                        </p>
                        <p class="small">
                            Alkohol: ${item.vol} % vol<br />
                            Restzucker: ${item.sugar} g/l trocken<br />
                            Säure: ${item.acid} g/l
                        </p>
                    </div>
                </div>
            </div>
        `
} 

// Wine Detailed Description
const showDetails = () => {
	const wines = document.querySelectorAll(".wine");

	if (wines) {
		wines.forEach((wine) => {
			let button = wine.querySelector(".details-toggle");
			let details = wine.querySelector(".details");

			button?.addEventListener("click", () => {
				let maxHeight: string = details?.scrollHeight + "px";

				if (button?.innerHTML === "Details +") {
					button.innerHTML = "Details –";
				} else if (button?.innerHTML === "Details –") {
					button.innerHTML = "Details +";
				}

				details?.classList.toggle("max-h-0");
				details?.classList.toggle(`max-h-${maxHeight}`);
			});
		});
	}
};
// Create the red wines
const generateShopRed = () => {
    let shopRed = document.getElementById("shop-red")!;
    return (shopRed.innerHTML = shopItemsData.filter((item) => item.type === "red").map((item) => 
       createEntry(item)
    ).join(""))
}
// Create the white wines
const generateShopWhite = () => {
    let shopWhite = document.getElementById("shop-white")!;
    return (shopWhite.innerHTML = shopItemsData.filter((item) => item.type === "white").map((item) => 
       createEntry(item)
    ).join(""))
}
// Add selected wine and amount to basket
const addToBasket = (wineId: string) => {
    let basket: basketData[] = JSON.parse(localStorage.getItem("basket")!) ?? [];
    let inputElement = document.getElementById(`amount_${wineId}`)! as HTMLSelectElement;
    let index = inputElement.options.selectedIndex;
    let quantity = Number(inputElement.options[index].value);
    
    if (!basket.find((item) => item.id === wineId)) {
        let dataIndex = shopItemsData.findIndex((item) => item.id === wineId);
        let wine = {...shopItemsData[dataIndex]}
        let {id, name, year, quantity, price} = wine
        let basketWineData = {id, name, year, quantity, price}
        basket.push(basketWineData);
    }
    
    let basketIndex = basket.findIndex((item) => item.id === wineId)
    basket[basketIndex].quantity += quantity;           

    localStorage.setItem("basket", JSON.stringify(basket));
    cartItemAmount();
}

const createAddButtons = () => {
    let addButtons = document.querySelectorAll(".add")
    
    if (addButtons) {
        addButtons.forEach((button) => {
            if (button instanceof HTMLElement) {
                let value = button.dataset.id!
                button.addEventListener("click", () => {
                    addToBasket(value)
                })
            }
        });
    }
}

// Activate Animations after Page Load
window.addEventListener('load', () => {
    if (window.location.href.includes("shop")) {
        // console.log("load shop animations");
        generateShopRed();
        generateShopWhite();
        createAddButtons();
        showDetails();
    }
})

export const activateShopFunction = () => {
    // console.log("activate shop animations");
    generateShopRed();
    generateShopWhite();
    createAddButtons();
    showDetails();
}

export {}