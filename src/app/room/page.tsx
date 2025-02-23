import {calendarIcon} from "@/app/icons";

export default function Page() {

    const events = [
        {
            name : "Suite Royale",
            description: "Une chambre spacieuse ornée de moulures dorées, d’un lit à baldaquin en velours et d’une vue imprenable sur le parc du château",
            image: "suite.jpg",
            complet:true
        },
        {
            name : "Chambre Jardin d’Époque",
            description: "Un havre de paix inspiré des jardins à la française, avec mobilier en bois noble, pour un moment de détente absolu.",
            image: "room.jpg",
            complet:false
        },
        {
            name : "L’Appartement du Marquis",
            description: "Un espace raffiné avec cheminée en marbre, tissus brodés et touches de modernité pour un confort absolu.",
            image: "marquis.jpg",
            complet:true
        },
        {
            name : "Chambre Mélodie Baroque",
            description: "Une atmosphère feutrée où la musique classique inspire la décoration, avec une harmonie de tons chauds et une literie somptueuse.",
            image: "baroque.jpg",
            complet:false
        },
        {
            name : "Le Boudoir du Temps Suspendu",
            description: "Un décor intimiste, inspiré des salons nobles du XVIIIe siècle, avec des luminaires en cristal et une alcôve cosy pour une nuit enchanteresse.",
            image: "boudoir.jpg",
            complet:false
        },
    ]

    return (
        <div className="bg-our-white p-4">

            <div className="w-11/12 m-auto h-40 bg-our-red rounded-md flex justify-center items-center">
                <h2 className={"text-center text-5xl"}>Nos Chambres</h2>
            </div>

            <div id="listOfId" className="flex flex-col gap-y-10 mt-8">
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
                                </div>
                                <p className="text-justify mt-4">{event.description}</p>
                                <div className="card-actions justify-end">
                                    <button className={`btn text-white ${event.complet ? "bg-our-red" : "bg-green-400"}`}> {event.complet ? "Reservé" : "Disponible"} </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}