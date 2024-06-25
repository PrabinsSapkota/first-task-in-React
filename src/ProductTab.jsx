import Product from "./Product";
function ProductTab() {
    let styles = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center"
    };
    return (
        
        <div style={styles}>
            <Product title="Nike Air Max" idx={0} />
            <Product title="Adidas Bad bunny" idx={1} />
            <Product title="Air Jordan 4" idx={2} />
            <Product title="SB Dunk" idx={3} />
        </div>
    );
}
export default ProductTab;