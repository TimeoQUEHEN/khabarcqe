'use client'

import { useState } from 'react';
import {beerIcon, cutleryIcon} from "@/app/icons";

const MenuDisplay = () => {
    const [showMeals, setShowMeals] = useState(true);

    const meals = [
        {
            name : "Entrées",
            plats : [
                {
                    name: "Marbré de foie gras au genièvre de Houlle",
                    ingredients: "foie gras, genièvre, pain d’épices maison",
                    price: "18.00"
                },
                {
                    name: "Velouté de chicon au maroilles",
                    ingredients: "endives, maroilles AOP, crème fraîche, croûtons",
                    price: "12.00"
                },
                {
                    name: "Assiette de terrines artisanales",
                    ingredients: "terrine de campagne, rillettes de canard, confiture d’oignons",
                    price: "14.00"
                },
            ]
        },
        {
            name : "Plats",
            plats : [
                {
                    name: "Carbonnade flamande à la bière locale",
                    ingredients: "bœuf mijoté à la bière brune, pain d’épices, frites maison",
                    price: "24.00"
                },
                {
                    name: "Waterzoï de poisson de la Côte d’Opale",
                    ingredients: "cabillaud, saumon, légumes, crème, vin blanc",
                    price: "26.00"
                },
                {
                    name: "Potjevleesch maison et ses pommes de terre sautées",
                    ingredients: "terrine de viandes blanches en gelée, vinaigre, épices",
                    price: "22.00"
                },
            ]
        },
        {
            name : "Viandes",
            plats : [
                {
                    name: "Côte de bœuf grillée et son beurre maître d’hôtel",
                    ingredients: "bœuf charolais, beurre aux herbes, pommes grenailles",
                    price: "32.00"
                },
                {
                    name: "Magret de canard aux griottes et purée de panais",
                    ingredients: "canard fermier, cerises, miel, purée onctueuse",
                    price: "28.00"
                },
                {
                    name: "Suprême de volaille fermière à la crème d’ail",
                    ingredients: "poulet des Hauts-de-France, ail confit, légumes de saison",
                    price: "24.00"
                },
                {
                    name: "Filet mignon de porc aux pommes caramélisées",
                    ingredients: "porc fermier, pommes fondantes, sauce au cidre",
                    price: "26.00",
                },
            ]
        },
        {
            name : "Desserts",
            plats : [
                {
                    name: "Tarte au sucre des Flandres",
                    ingredients: "pâte briochée, cassonade, crème",
                    price: "10.00"
                },
                {
                    name: "Merveilleux au chocolat",
                    ingredients: "meringue, chocolat noir, chantilly",
                    price: "12.00"
                },
                {
                    name: "Crème brûlée à la chicorée",
                    ingredients: "crème, chicorée liquide, cassonade caramélisée",
                    price: "11.00"
                },
            ]
        },
    ];

    const drinks = [
        {
            name : "Boisson softs",
            plats : [
                {
                    name: "Cola",
                    ingredients: "",
                    price: "3.50"
                },
                {
                    name: "Thé Glacé",
                    ingredients: "",
                    price: "3.00"
                },
                {
                    name: "Sirop",
                    ingredients: "Eau, sirop au choix (Menthe, Fraise, Abricot, Citron)",
                    price: "1.00"
                },
            ]
        },
        {
            name : "Cocktails Classiques",
            plats : [
                {
                    name: "Mojito",
                    ingredients: "rhum, menthe, citron vert, sucre, eau gazeuse",
                    price: "10.00"
                },
                {
                    name: "Pina Colada",
                    ingredients: "rhum, ananas, lait de coco",
                    price: "12.00"
                },
                {
                    name: "Cosmopolitan",
                    ingredients: "vodka, triple sec, cranberry, citron vert",
                    price: "11.00"
                },
            ]
        },
        {
            name : "Grands Crus",
            plats : [
                {
                    name: "Champagne Grand Cru",
                    ingredients: "",
                    price: "15.00 (verre) - 53.00 (bouteille)"
                },
                {
                    name: "Whisky Single Malt 18 ans",
                    ingredients: "",
                    price: "18.00"
                },
                {
                    name: "Cognac XO",
                    ingredients: "",
                    price: "20.00"
                },
            ]
        },
        {
            name : "Signatures",
            plats : [
                {
                    name: "Éclat du Château",
                    ingredients: "gin, liqueur de violette, citron, tonic, lavande",
                    price: "14.00"
                },
                {
                    name: "Mystère d’Habarcq",
                    ingredients: "rhum ambré, sirop de noisette, bitter chocolat, orange confite",
                    price: "14.00"
                },
            ]
        },
    ];

    return (
        <div className=" w-screen bg-our-white py-10">

            <div className="w-11/12 m-auto h-40 bg-our-red rounded-md flex justify-center items-center">
                <h2 className={"text-center text-5xl"}>Notre Carte</h2>
            </div>

            <div className="flex justify-center gap-4 py-4">
                <button
                    onClick={() => setShowMeals(true)}
                    className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                        showMeals ? 'bg-our-red text-white' : 'bg-our-grey'
                    }`}
                >
                    {cutleryIcon}
                </button>
                <button
                    onClick={() => setShowMeals(false)}
                    className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                        !showMeals ? 'bg-our-red text-white' : 'bg-our-grey'
                    }`}
                >
                    {beerIcon}
                </button>
            </div>

            <div
                id="MenuClipBoard"
                className={` m-auto w-11/12 md:w-2/3 h-5/6 rounded-md my-shadow p-2 md:p-8 flex items-center bg-our-black
                }`}
            >

                {/* Menu Content */}
                <div className="w-full">
                    <div className="space-y-4">
                        {(showMeals ? meals : drinks).map((categorie, index) => (
                            <div key={index} className={"flex flex-col"}>
                                <span className="divider divider-error">{categorie.name}</span>
                                <div
                                     className="flex flex-col justify-between items-center p-4 rounded-md text-white gap-y-4">
                                    {categorie.plats.map((plat, n) => (
                                        <div key={n} className={"flex justify-between w-full"}>
                                            <div className={"flex flex-col"}>
                                                <h3>{plat.name}</h3>
                                                <p className={"italic text-black"}>{plat.ingredients}</p>
                                            </div>
                                            <span className={"flex items-end w-1/5 justify-end"}>{plat.price} €</span>
                                        </div>
                                    ))
                                    }
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuDisplay;