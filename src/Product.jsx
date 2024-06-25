import "./Product.css";
import Price from "./Price"
function Product({title,idx}){
    let oldPrices=["5000","5500","6000","7500"];
    let newPrices=["4500","5200","5800","7000"];
    let description=["bloo-red color","sky-blue with great finishing","creamy-white","white"]
    return(
        <>
        
        <div className="Product">
           
           <h3>{title}</h3>
           <p>{description[idx]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
        </>
    );

}
export default Product;