import React, {Component} from "react";
import "./Features.scss"

import Title from "../Title/Title";
import FeatureItem from "../FeatureItem/FeatureItem";

import img1 from '../../images/feature1.png';
import img2 from '../../images/feature2.png';
import img3 from '../../images/feature3.png';

const features = [
    {
        image: img1,
        title: "Some awesome features",
        info: "Lorem ipsum dolor agni sed asperiores, reprehenderit, ratione aspernatur exercitationem illo eaque. At, eum vero!"  
    },
    {
        image: img2,
        title: "Some awesome features",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia vero nulla debitis ipsam doloremque reiciendis net, eum vero!"  
    },
    {
        image: img3,
        title: "Some awesome features",
        info: "Quia vero nulla debitis ipsam doloremque reiciendis neque rerum a magni sed asperiores, reprehenderit, ratione aspernatur exercitationem illo eaque. At, eum vero!"  
    }
];

class Features extends Component {
    state = { features }

    render() {
        const listFeatures = this.state.features.map((item, index) => {
            return(
                <FeatureItem
                    key={index}
                    image={item.image}
                    title={item.title}
                    info={item.info} />
            );
        });
        // En règle général il est déconseillé d'utilisé l'index comme key pour map()

        return(
            <section id="features" className="section features">
                <div className="container">
                    <Title
                        title="Some awesome features"
                        suptitle="New features"
                        className="title--center" />
                    <div className="feature">
                        {listFeatures}
                    </div>
                </div>
            </section>
        );
    }
}

export default Features;