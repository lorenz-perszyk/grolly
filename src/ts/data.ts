// I M P O R T S
import zweigeltImage from "/src/assets/media/bottles/zweigelt.webp";
import zweigeltBg from "/src/assets/media/gradients/gradient_zweigelt.webp";

import blaufraenkischImage from "/src/assets/media/bottles/blaufraenkisch.webp";
import blaufraenkischBg from "/src/assets/media/gradients/gradient_blaufraenkisch.webp";

import cabernetImage from "/src/assets/media/bottles/cabernet.webp";
import cabernetBg from "/src/assets/media/gradients/gradient_cabernet.webp";

import rieslingImage from "/src/assets/media/bottles/riesling.webp";
import rieslingBg from "/src/assets/media/gradients/gradient_riesling.webp";

import chardonnayImage from "/src/assets/media/bottles/chardonnay.webp";
import chardonnayBg from "/src/assets/media/gradients/gradient_chardonnay.webp";

import veltlinerImage from "/src/assets/media/bottles/veltliner.webp";
import veltlinertBg from "/src/assets/media/gradients/gradient_veltliner.webp";


// D A T A

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

export let shopItemsData: basketData[] = [
    {
        id: "red_1",
        name: "Zweigelt",
        year: 2020,
        type: "red",
        price: 18,
        quantity: 0,
        desc: "Tiefdunkles Rubingranat, opaker Kern, violette Reflexe,zarte Randaufhellung. Röstige Nuancen, etwas Nougat, schwarze Kirschen, Brombeerkonfit, frische Orangenzesten. Saftig, frische Herzkirschen, feine Tannine, lebendig strukturiert, dezente Süße im Nachhall, verfügt über Reifepotenzial.",
        vol: "12,5",
        sugar: "1,5",
        acid: "5,5",
        img: zweigeltImage,
        background: zweigeltBg,
    },
    {
        id: "red_2",
        name: "Blaufränkisch",
        year: 2016,
        type: "red",
        price: 22,
        quantity: 0,
        desc: "Dunkles Rubingranat, tiefer Kern, violette Reflexe, zarte Randaufhellung. Feine Nuancen von Edelholz, reife dunkle Waldbeeren, Anklänge von süßen Gewürzen, Zwetschken, zart nach Nougat, mineralisch unterlegt. Komplex, kraftvoll, reife Herzkirschen und Brombeeren, reife Tannine, lange und mit angenehmer Süße im Nachhall, besitzt Frische und sicheres Reifepotenzial.",
        vol: "13",
        sugar: "1,0",
        acid: "5,0",
        img: blaufraenkischImage,
        background: blaufraenkischBg,
    },{
        id: "red_3",
        name: "Cabernet Sauvignon",
        year: 2018,
        type: "red",
        price: 20,
        quantity: 0,
        desc: "Besonders lebendiges Bukett, erinnert an frische, gelbe Äpfel, Quitten und Zitrusfrüchten mit einem Touch von Anis. Am Gaumen zupackend, lebendig und leichtfüssig, präsentiert sich betont fruchtig, mit schlankem und dabei feingliedrigem Körper, animierender Nachhall mit Noten von Grapefruit.",
        vol: "13,5",
        sugar: "1,5",
        acid: "4,0",
        img: cabernetImage,
        background: cabernetBg,
    },{
        id: "white_1",
        name: "Riesling",
        year: 2019,
        type: "white",
        price: 14,
        quantity: 0,
        desc: "Helles Grüngelb, Silberreflexe. Frische gelbe Tropenfrucht, ein Hauch von Mango und Maracuja, feine Noten von weißen Blüten, ein Hauch von Limetten, ein Pfauenrad von Aromen, sehr verführerisch. Saftig, stoffig und elegant, feine Steinobstnuancen, finessenreich strukturiert, dezente Fruchtsüße, mineralisch-zitronig im Abgang, bleibt sehr lange haften, strahlender Stil, Potenzial für Jahrzehnte. ",
        vol: "14,0",
        sugar: "3,0",
        acid: "4,0",
        img: rieslingImage,
        background: rieslingBg,
    },{
        id: "white_2",
        name: "Chardonnay",
        year: 2021,
        type: "white",
        price: 12,
        quantity: 0,
        desc: "Helles Grüngelb, Silberreflexe. Feine gelbe Tropenfrucht, ein Hauch von reifem Steinobst, mit Wiesenkräuterwürze unterlegt. Saftig, mittlere Komplexität, weißer Pfirsich, frische Säurestruktur, mineralisch-zitroniger Abgang, salziger Nachhall, ein feiner Speisenbegleiter.",
        vol: "13,5",
        sugar: "3,5",
        acid: "3,0",
        img: chardonnayImage,
        background: chardonnayBg,
    },{
        id: "white_3",
        name: "Grüner Veltliner",
        year: 2020,
        type: "white",
        price: 11,
        quantity: 0,
        desc: "Helles Gelbgrün, Silberreflexe. Feinwürzig, ein Hauch von Wiesenkräutern, zart nach Anis und Kümmel, Noten von reifem gelbem Kernobst, zart nach Mango und Honigmelone. Komplex, saftig, enorm dicht, weißes Steinobst, straff und engmaschig, finessenreicher Säurebogen, salzig und minutenlang anhaftend, sicheres Reifepotenzial für Jahrzehnten. Ein Veltliner-Monument par excellence, wird lange unerreicht bleiben.",
        vol: "12,5",
        sugar: "2,5",
        acid: "4,5",
        img: veltlinerImage,
        background: veltlinertBg,
    }
]