import {warningIcon} from "@/app/icons";

export default function page() {
    return (
        <div>
            <p>
                En 2013, 3 amis décident de rigoler un peu et investissent un total de 30 € dans le bitcoin.
                Aujourd'hui, 10 ans plus tard et sans soucis d'argents, ils décident de démarrer une entreprise ensemble
                pour s'ouvrir à de nouveaux horizons. En rachetant le Chateau d'Habarcq, et en le rettapant en cabaret
                pour le plaisir du village et des alentours.
                Ce cabaret, prévu pour tout âge, à pour objectif d'offir au village la chance de briller et de sortir de
                l'ombre de son ainée arageoise.
            </p>

            <ul>
                <h2>Les membres</h2>
                <li>Nicolas Lapotre : Trésorier et PDG</li>
                <li>Jules Langagne : Hôtelier et co-PDG</li>
                <li>Timéo Quehen : Responsable Communication, responsable Bar et co-PDG</li>
            </ul>

            <div className="w-11/12 m-auto h-40 bg-our-red rounded-md justify-center items-center">
                <h2 className={"text-center text-xl gap-2 p-2 flex justify-center items-center"}>{warningIcon} Attention {warningIcon}</h2>
                <p className="text-justify w-11/12 m-auto">Ceci est un projet scolaire et n'a pas d'impact sur la réalité.
                    Malheureusement, en 2013 on préférait jouer aux pokémons plutôt
                    qu'investir dans une monnaie que je ne comprends toujours pas.
                    A ce jour (23/02/2025), nous n'avons pas racheté le Château d'Habarcq, même si ça serait drôle.
                    De la même manière, nous ne possèdons pas les droits des images affichées sur ce site.
                    Ce site n'a pas pour but de générer des recettes.
                </p>
            </div>
        </div>
    )
}