import React from "react";
import {varelaRound} from "@/fonts";
import {bedIcon, beerIcon, cutleryIcon, gameIcon, theaterIcon} from "@/app/icons";

const infos = [
    {
        name: "Spectacles époustouflants",
        description: "Laissez-vous envoûter par une programmation riche et variée :" +
            " revues cabaret, numéros de magie, danseurs envoûtants et artistes talentueux" +
            " se succèdent sur notre scène pour vous offrir une soirée inoubliable." +
            " Que vous soyez amateurs de comédies musicales ou d’acrobaties spectaculaires," +
            " notre scène est le théâtre de moments magiques.",
        redirect: "/scene",
        image_name: "scene.png",
        icon: theaterIcon
    },
    {
        name: "Restauration gastronomique",
        description: "Pendant les horaires de repas, notre service à table vous propose une carte raffinée, " +
            "élaborée à partir de produits locaux et de saison. Dans une ambiance feutrée, " +
            "laissez-vous séduire par des mets savoureux et des accords mets-vins soigneusement sélectionnés" +
            " pour éveiller vos papilles.",
        redirect: "/restauration",
        image_name: "table.png",
        icon: cutleryIcon
    },
    {
        name: "Rafraîchissements",
        description: "Dès la nuit tombée, notre bar vous accueille dans un cadre élégant et chaleureux." +
            " Cocktails signatures, vins d’exception et spiritueux de prestige sont au rendez-vous" +
            " pour accompagner vos conversations et prolonger la magie de la soirée.",
        redirect: "/restauration",
        image_name: "bar.png",
        icon: beerIcon
    },
    {
        name: "Hébergement noblesque",
        description: "L’étage du château est dédié à l’hôtellerie et vous offre des chambres somptueusement décorées," +
            " alliant charme historique et confort moderne. " +
            "Profitez d’un séjour dans un cadre noble et apaisant, où chaque détail est pensé pour votre bien-être.",
        redirect: "/hebergement",
        image_name: "chambre.png",
        icon: bedIcon
    },
    {
        name: "Arcade pour les plus jeunes",
        description: "Parce que le divertissement est un art qui se partage," +
            " notre cabaret dispose également d’une arcade," +
            " idéale pour occuper les plus jeunes pendant les soirées ou même organiser des événements dédiés." +
            " Jeux d’arcade rétro, bornes interactives et espace ludique" +
            " leur garantissent un moment de plaisir et d’évasion.",
        redirect: "/arcade",
        image_name: "flipper.png",
        icon: gameIcon
    },
];

export default function Home() {
    return (
        <main>
            <div className="h-screen w-screen flex bg-castle relative">
                <div className={`w-1/2 text-center m-auto ${varelaRound.variable} relative`}>
                    <div className="absolute inset-0" />
                    <div className="relative z-10 py-8 bg-our-red slide-in-text rounded-md">
                        <h1 className="text-8xl mb-4">Khabarcqé</h1>
                        <span className="text-2xl">Divertissement, Restauration et Hébergement</span>
                    </div>
                </div>
            </div>
            <div className="w-screen h-80 bg-our-red shadowed flex text-justify">
                <p className={"m-auto w-2/3 text-xl"}>
                    Niché au cœur du village d’Habarcq, notre cabaret prend vie dans l’illustre "Château" d’Habarcq, une majestueuse villa où se mêlent élégance et divertissement. Dès que vous franchissez ses portes, vous plongez dans un univers raffiné, mêlant spectacles, gastronomie, détente et hébergement d’exception.
                </p>
            </div>
            <div className="flex flex-col text-justify">
                {infos.map((info, index) => (
                    <div key={info.name} className="h-40 px-10 py-5 flex justify-center items-center info gap-4">
                        <i className={""}>{info.icon}</i>
                        <div className="w-4/5 opacity-0 slide-in-text" style={{ animationDelay: `${index * 0.2}s`}}>
                            <h2 className="text-2xl font-bold mb-2">{info.name}</h2>
                            <p>{info.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}