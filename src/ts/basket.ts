// I M P O R T S
import "../styles/style.css";


// F U N C T I O N S

type basketData = {
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
let basket: basketData[] = JSON.parse(localStorage.getItem("basket")!) ?? [];

// Update Basket
export const updateBasket = () => {
    basket = JSON.parse(localStorage.getItem("basket")!);
}

// Show how many items are in the cart
export const cartItemAmount = () => {
    let cartIcon = document.getElementById("cart-icon")!;
    let totalItems = basket.map((item) => item.quantity).reduce((a, b) => a + b, 0);

    if (basket.length !== 0 && !cartIcon.classList.contains("after:content-[attr(data-after)]")) {
		cartIcon.setAttribute("data-after", String(totalItems))
        cartIcon.classList.add("after:absolute", "after:w-6", "after:h-6", "after:text-center", "after:text-white", "after:text-[14px]", "after:leading-[26px]",
		"after:align-middle", "after:-top-2", "after:-right-2", "after:bg-orange-600", "after:content-[attr(data-after)]", "after:rounded-full")
    } else if (basket.length === 0) {
		cartIcon.classList.remove("after:absolute", "after:w-6", "after:h-6", "after:text-center", "after:text-white", "after:text-[14px]", "after:leading-[26px]",
		"after:align-middle", "after:-top-2", "after:-right-2", "after:bg-orange-600", "after:content-[attr(data-after)]", "after:rounded-full")
	} else {
		cartIcon.setAttribute("data-after", String(totalItems))
		console.log("only set item amount");
	}
}

const formatNumber = (number: number) => {
    let formattedNumber = (number).toLocaleString('de-DE', {currency: 'EUR', minimumFractionDigits: 2});
    return formattedNumber;
}

const calculateShipping = () => {
    let subTotal = basket.map((item) => item.price * item.quantity).reduce((a, b) => a + b, 0);
    let costs: number;
    if (basket.length === 0 || (basket.length !== 0 && subTotal > 100)) {
        costs = 0
    } else  {
        costs = 9.90
    }
    
    return costs;
}

const generateBasketItem = (item: basketData) => {
    return `
        <tr class="grid grid-cols-3 gap-y-4 my-4 border-b border-black last:border-b-0 md:table-row lg:my-8">
            <td class="pt-4 col-span-2">
                <h4 class="uppercase tracking-wider">${item.name}</h4>
                <h4 class="font-medium">${item.year}</h4>
            </td>
            <td class="order-3 col-span-full md:hidden">
                <div class="flex flex-row pb-4">
                    <div class="pr-4 text-left tabular-nums before:content-['€'] before:pr-1">${formatNumber(item.price)}</div>
                    <div class="px-2 min-w-[90px] text-center border-l border-r border-black">${item.quantity} Stk.</div>
                    <div data-id="${item.id}" class="remove pl-4 underline cursor-pointer">enfernen</div>
                </div>
            </td>
            <td class="hidden order-3 text-left tabular-nums md:table-cell before:content-['€'] before:pr-1">${formatNumber(item.price)}</td>
            <td class="hidden order-4 text-center md:table-cell">${item.quantity} Stk.</td>
            <td data-id="${item.id}" class="remove hidden order-5 text-center underline cursor-pointer md:table-cell">enfernen</td>
            <td class="order-2 pt-4 tabular-nums md:pt-2">
                <div class="figure text-right before:content-['€'] before:pr-2 before:float-left float-right">
                    ${formatNumber(item.price * item.quantity)}
                </div>
            </td>
        </tr>
    `;
};

const generateTableFooter = () => {
    let subTotal = basket.map((item) => item.price * item.quantity).reduce((a, b) => a + b, 0);
    let total = (subTotal + calculateShipping());
    const footer = document.getElementById("table-footer")!;

    footer.innerHTML = 
    `
        <tr class="h-20"></tr>
        <tr class="border-t border-black h-fit">
            <td class="pt-4 pb-2" colspan="5">
                <div class="flex flex-col gap-2">
                    <div class="flex justify-between">
                        <h4 class="h-fit font-medium text-xl text-slate-600">Zwischensumme</h4>
                        <h4 class="figure text-right font-medium tabular-nums before:content-['€'] before:pr-2 before:float-left">${formatNumber(subTotal)}</h4>
                    </div>
                    <div class="flex justify-between">
                        <h4 class="font-medium text-xl text-slate-600">Versand</h4>
                        <h4 class="figure text-right font-medium tabular-nums before:content-['€'] before:pr-2 before:float-left">${formatNumber(calculateShipping())}</h4>
                    </div>
                </div>
            </td>
        </tr>
        <tr class="">
            <td class="pt-4 pb-2 justify-between border-t border-b-2 border-black tracking-wider" colspan="5">
                <div class="flex justify-between">
                    <h4 class="uppercase">Gesamt</h4>
                    <h4 class="figure font-bold text-right tabular-nums before:content-['€'] before:pr-2 before:float-left">${formatNumber(total)}</h4>
                </div>
            </td>
        </tr>
    `
}

const fillBasket = () => {
    basket = JSON.parse(localStorage.getItem("basket")!)
    let basketItems = document.getElementById("basket-items")!;
    if (basket.length !== 0) {
        basketItems.innerHTML = basket.map((item: basketData) => generateBasketItem(item)).join("")
    } else {
        basketItems.innerHTML = `<td class="text-center text-xl pt-8" colspan="5">Warenkorb leer.</td`
    }
}

const removeItem = (id: string) => {
    basket = basket.filter((item) => item.id !== id);
    localStorage.setItem("basket", JSON.stringify(basket));
    fillBasket();
    generateTableFooter();
    createDeleteButtons();
    updateBasket();
    cartItemAmount();
}

export const createDeleteButtons = () => {
    const removeButtons = document.querySelectorAll(".remove")

    if (removeButtons) {
        removeButtons.forEach((button) => {
            if (button instanceof HTMLElement) {
                let value = button.dataset.id!
                button.addEventListener("click", () => {
                    removeItem(value);
                })
            }
        });
    }
}

// Activate Animations after Page Load
window.addEventListener('load', () => {
    if (window.location.href.includes("warenkorb")) {
        // console.log("load basket animations");
        fillBasket();
        generateTableFooter();
        createDeleteButtons();
        updateBasket();
        cartItemAmount();
    }
})

export const activateBasketFunctions = () => {
    // console.log("activate basket animations");
    fillBasket();
    generateTableFooter();
    createDeleteButtons();
    updateBasket();
    cartItemAmount();
}

export {}
