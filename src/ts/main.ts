// I M P O R T S
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../styles/style.css";
import { updateBasket } from "./basket";
import { cartItemAmount } from "./basket";

gsap.registerPlugin(ScrollTrigger);


// F U N C T I O N S

// Menu Animation
const animateMenu = () => {
	const menuIcons = document.querySelectorAll(".menu-toggle")!;
	const menu = document.querySelector(".menu")!;

	menuIcons.forEach((icon) =>
		icon.addEventListener("click", () => {
			menu.classList.toggle("translate-x-full");
			if (menu.classList.contains("duration-500")) {
				menu.classList.replace("duration-500", "duration-300")
			} else {
				menu.classList.replace("duration-300", "duration-500")
			}
		})
	);
};

// Show "Heuriger" Banner on scroll
const showBanner = () => {
	document.removeEventListener("scroll", showBanner);
	let banner = document.getElementById("banner");

	if (banner && window.innerHeight > 799) {
		setTimeout(() => {
			banner?.classList.replace("translate-y-full", "translate-y-0");
		}, 2000);
	}
};

// Show Modal onClick
const showModal = () => {
	let banner = document.getElementById("banner");
	let modal = document.getElementById("modal");
	let openButton = document.getElementById("banner-button");

	if (banner && modal && openButton) {
		openButton.addEventListener("click", () => {
			modal?.classList.remove("invisible");
			banner?.classList.replace("translate-y-0", "translate-y-full");
		});
	}
};

// Close Modal onClick
const closeModal = () => {
	let modal = document.getElementById("modal");
	let closeButton = document.getElementById("close-modal");

	if (modal && closeButton) {
		closeButton.addEventListener("click", () => {
			modal?.classList.add("invisible");
		});
	}
};

// Activate Animations after Page Load
window.addEventListener('load', () => {
	// console.log("load main animations");
	animateMenu();
	updateBasket();
	cartItemAmount();
	showModal();
	closeModal();
	document.addEventListener("scroll", showBanner);
})

export const activateMainAnimations = () => {
	// console.log("activate home animations");
	showModal();
	closeModal();
	document.addEventListener("scroll", showBanner);
}


// G S A P  Animations
export function hero() {
	gsap.to(".hero", {
		scrollTrigger: {
			trigger: ".main",
			start: "top bottom",
			end: "top top",
			scrub: true,
		},
		yPercent: 50,
		ease: "none",
	});
}



