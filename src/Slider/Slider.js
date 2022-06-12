import {React,} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader;
import { Carousel } from 'react-responsive-carousel';
import "./Slider.css";


import img1 from "./PH1.JPG";
import img2 from "./PH2.jpg";
import img3 from "./PH3.JPG";
import img4 from "./PH4.JPG";

function Slider() {


    const data = [

        {
            id: 1,
            image: `${img1}`,
            title: "Prises de vues photo/vidéo aérienne par drone",
            text: "Plus rapide, plus flexible, plus économique, les prises de vues aériennes par drone vous seront indispensables. Spot publicitaire, documentaire, téléfilm, émission, reportage, film de fiction… Dans tous les domaines le drone a su trouver sa place et prouver sa force."
        },

        {
            id:2,
            image:`${img2}`,
            title:"Inspection de toiture/d'ouvrage en hauteur",
            text:"L’objectif est de vérifier : 1) Que l’état de l’ouvrage/toiture ne s’est pas anormalement dégradé.  2) Que les dispositifs assurant la sécurité des usagers sont dans un état acceptable. 3) Qu’il n’y a pas de désordres apparents menaçant la sécurité. 4) Que les points d’attention précédemment identifiés ne s’aggravent pas prématurément",
        },

        {
            id:3,
            image:`${img3}`,
            title:"Guide d’achat de drones Pro/Loisir",
            text:"Vous voulez acquérir un drone ? Il est important de bien acheter, nous pouvons vous aider à choisir le drone qui vous convient et vous accompagner dans les démarches administratives. N’hésitez pas à faire appel a nos services.",
        
        },

        {
            id:4,
            image:`${img4}`,
            title:"Formation de pilotage de drone",
            text:"Pour le professionnel et pour le particulier, l'apprentissage du télépilotage devient accessible grâce à nos programmes de formations. Complets, spécifiques et adaptés, ils vous donnent la possibilité d'acquérir des compétences en matiére de télépilotage et de les ameliorer.",
        },

        
    ]

    return(
        
        <Carousel 
        autoPlay 
        infiniteLoop 
        interval={10000} 
        thumbWidth={150} 
        emulateTouch={true}
        width="90%"
        showIndicators={true}
        stopOnHover={false}
        showThumbs={false}
        showArrows={false}
        >

            {data.map((slide) => (
                <div className="contents" key={slide.id}>
                    <img src={slide.image}/>
                    <div className="overlay"> 
                        <h3 className="overlay-title">{slide.title}</h3>
                        <a className="overlay-text">{slide.text}</a>
                    </div>
                </div>
            ))}
            
        </Carousel>  
        
    )
}

export default Slider;