import {warningIcon} from "@/app/icons";

export default function page() {
    return (
        <div className="bg-our-white p-4 flex flex-col gap-y-4 text-justify">
            <p className="p-2 bg-our-black text-white rounded-md">
                En 2013, 3 amis décident de rigoler un peu et investissent un total de 30 € dans le bitcoin.
                Aujourd'hui, 10 ans plus tard et sans soucis d'argents, ils décident de démarrer une entreprise ensemble
                pour s'ouvrir à de nouveaux horizons. En rachetant le Chateau d'Habarcq, et en le rettapant en cabaret
                pour le plaisir du village et des alentours.
                Ce cabaret, prévu pour tout âge, à pour objectif d'offir au village la chance de briller et de sortir de
                l'ombre de son ainée arageoise.
            </p>

            <ul className="p-2 bg-our-black text-white rounded-md">
                <h2 className="text-center text-xl">Les membres</h2>
                <div className="flex justify-evenly py-2">
                    <li>personne 1 : Trésorier et PDG</li>
                    <li>personne 2 : Hôtelier et co-PDG</li>
                    <li>personne 3 : Responsable Communication, responsable Bar et co-PDG</li>
                </div>
                <div className="flex justify-evenly py-2">
                    <li className="text-center">Une équipe compétente de cuisine (4 membres)</li>
                    <li className="text-center">Un agent d'entretien additionnel (temps partiel)</li>
                </div>
                <li className="text-center text-sm italic pt-4">désolé ou pas je met pas mon prénom n'importe où :)</li>
            </ul>

            <div className="w-11/12 m-auto md:h-40 bg-our-red rounded-md justify-center items-center p-2">
            <h2 className={"text-center text-xl gap-2 p-2 flex justify-center items-center"}>{warningIcon} Attention {warningIcon}</h2>
                <p className="text-justify w-11/12 m-auto">Ceci est un projet scolaire et n'a pas d'impact sur la réalité.
                    Malheureusement, en 2013 on préférait jouer aux pokémons plutôt
                    qu'investir dans une monnaie que je ne comprends toujours pas.
                    A ce jour (23/02/2025), nous n'avons pas racheté le Château d'Habarcq, même si ça serait drôle.
                    De la même manière, <span className="underline">nous ne possèdons pas les droits des images affichées sur ce site</span>.
                    Ce site n'a pas pour but de générer des recettes.
                </p>
            </div>
        </div>
    )
}