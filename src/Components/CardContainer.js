import url1 from "../img/house1.jpg";
import url2 from "../img/house2.jpg";
import url3 from "../img/house3.jpg";
import url4 from "../img/house4.jpg";
import url5 from "../img/house5.jpg";
import Card from "./Card";
const names = [{key:1,name:'James',url:url1},{key:2,name:'Paul',url:url2},{key:2,name:'John',url:url3},{key:4,name:'George',url:url4},{key:5,name:'Ringo',url:url5}];
const CardContainer = ()=>{
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    {
                        names.map(obj=>(<Card val={obj}/>))
                    }
                </div>

            </div>
        </>
    );
}

export default CardContainer;