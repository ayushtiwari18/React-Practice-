import "./Product.css";
import Price from "../Price";

export default function Product({title, idx}){
    let oldPrices = ["12,495" ,"11,900","1599","599"];
    let newPrice = ["8,999", "9199" , "899" ,"278"];
    let description = [["8,000 DPI","5 Programmable buttons"],["intutive surface","desgined for iPad Pro" ], ["desgined for iPad Pro","intutive surface"],["wireless","optical orientation"]]
    return ( 
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice = {oldPrices[idx]} newPrice={newPrice[idx]}/>
        </div> 
    )
}