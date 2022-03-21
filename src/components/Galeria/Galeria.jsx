import React from 'react';
import './styles.scss';
import top1 from "../../assets/img/jpg/top1.jpg";
import top2 from "../../assets/img/jpg/top2.jpg";
import top3 from "../../assets/img/jpg/top3.jpg";
import mid1 from "../../assets/img/jpg/mid1.jpg";
import mid2 from "../../assets/img/jpg/mid2.jpg";
import bottom from "../../assets/img/jpg/bottom.jpg";

const Galeria = () => {
    return(
        <div className="galeria">
            <img grid-area="top1" src={top1} alt="" className="galeria__card--cuadrada" />
            <img grid-area="top2" src={top2} alt="" className="galeria__card--cuadrada" />
            <img grid-area="top3" src={top3} alt="" className="galeria__card--cuadrada"/>
            <img grid-area="mid1" src={mid1} alt="" className="galeria__card--cuadrada"/>
            <img grid-area="mid2" src={mid2} alt="" className="galeria__card--cuadrada"/>
            <img grid-area="mid3" src={mid1} alt="" className="galeria__card--cuadrada"/>
            <img grid-area="btm" src={bottom} alt="" className="galeria__card--large"/>
        </div>
    )
}

export default Galeria;