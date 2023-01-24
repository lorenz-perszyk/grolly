// I M P O R T S
import barba from "@barba/core";
import barbaCss from "@barba/css";
import { activateShopFunction } from "./shop";
import { activateMainAnimations } from "./main";
import { activateBasketFunctions } from "./basket";
import { hero } from "./main";

// tell Barba to use the css plugin
barba.use(barbaCss);

// F U N C T I O N S

// Scroll to top when new page enters
barba.hooks.afterLeave(() => {
});

barba.hooks.enter(() => {
    if (history.scrollRestoration) {
        history.scrollRestoration = 'manual';
    }
    console.log('scroll top enter');
    window.scrollTo(0, 0);

  });

// init Barba
barba.init({
	// debug: true,
	transitions: [
		{
            name: 'home',
            to: {namespace: ['home']},
			once() {},
		},{
            name: 'cover',
            leave() {},
            enter() {},
        }
	],
	views: [
		{
			namespace: "home",
			beforeEnter() {
				if (!window.location.href.includes("weingut" || "warenkorb" || "shop")) {
					activateMainAnimations();
				}
			},
		},
		{
			namespace: "weingut",
			beforeEnter() {
				if (window.location.href.includes("weingut")) {
                    hero();
				}
			},
		},
		{
			namespace: "shop",
			beforeEnter() {
				if (window.location.href.includes("shop")) {
					activateShopFunction();
                    hero();
				}
			},
		},
		{
			namespace: "basket",
			beforeEnter() {
				if (window.location.href.includes("warenkorb")) {
					activateBasketFunctions();
				}
			},
		},
	],
});
