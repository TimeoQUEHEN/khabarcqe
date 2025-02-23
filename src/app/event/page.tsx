import {calendarIcon} from "@/app/icons";

export default function Page() {

    const events = [
        {
            name : "La Revue du Château",
            date : "Mardi et Vendredi",
            description: "Un spectacle de danse cabaret où plumes, " +
                "strass et paillettes illuminent la scène dans une chorégraphie endiablée.",
            image: "danse.jpg",
            complet:true
        },
        {
            name : "Les Nuits du Rire",
            date : "Tous les premiers samedi du mois",
            description: "Chaque mois, un humoriste de renom vient enflammer la scène du cabaret " +
                "avec un spectacle unique mêlant stand-up et interactions avec le public.",
            image: "humour.jpg",
            complet:true
        },
        {
            name : "Illusions & Mystères",
            date : "Dimanche 16/03",
            description: "Un magicien de talent vous plonge dans un univers où l’impossible devient réalité, " +
                "entre tours de cartes, grandes illusions et mentalisme envoûtant.",
            image: "magicien.jpg",
            complet:true
        },
        {
            name : "Soirée Jazz & Cocktails",
            date : "Tous les jeudis",
            description: "Un groupe de jazz live vous transporte dans une ambiance feutrée et élégante, " +
                "idéale pour une soirée chic et détendue. Pas de réservations nécessaires, venez nombreux !",
            image: "jazz.jpeg",
            complet:false
        },
    ]

    return (
        <div className="bg-our-white p-4">

            <div className="w-11/12 m-auto h-40 bg-our-red rounded-md flex justify-center items-center">
                <h2 className={"text-center text-5xl"}>Nos Evenements</h2>
            </div>

            <div>
                <div>
                    <h3 className="text-2xl font-semibold text-black text-center my-8">Prochain evenement</h3>
                    <div className="card lg:card-side bg-our-black my-shadow w-5/6 m-auto">
                        <figure>
                            <img
                                src={"/event/" + events[2].image}
                                alt="Album"/>
                        </figure>
                        <div className="card-body">
                            <div className="flex justify-between w-full">
                                <h2 className="card-title underline">{events[2].name}</h2>
                                <span className="text-sm flex items-end">{calendarIcon} {events[2].date}</span>
                            </div>
                            <p>{events[2].description}</p>
                            <div className="card-actions justify-end">
                                <button className="btn bg-our-red">Complet</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="listOfId" className="flex flex-col gap-y-10 mt-8">
                    <h3 className="text-2xl font-semibold text-black text-center">Tous les evenements</h3>
                    {
                        events.map((event, n) => (
                            <div key={n} className="card lg:card-side md:max-h-60 bg-our-black my-shadow w-5/6 m-auto">
                                <figure className="md:w-2/3">
                                    <img
                                        src={"/event/" + event.image}
                                        alt="Album"
                                    />
                                </figure>
                                <div className="card-body">
                                    <div className="flex justify-between w-full">
                                        <h2 className="card-title underline">{event.name}</h2>
                                        <span className="text-sm flex items-end">{calendarIcon} {event.date}</span>
                                    </div>
                                    <p className="text-justify mt-4">{event.description}</p>
                                    <div className="card-actions justify-end">
                                        <button className={`btn text-white ${event.complet ? "bg-our-red" : "bg-green-400"}`}> {event.complet ? "Complet" : "Disponible"} </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}