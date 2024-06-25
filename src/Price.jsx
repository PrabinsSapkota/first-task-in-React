export default function Price({oldPrice,newPrice}){

    let styles={
        textDecoration:"line-through",
    }
    let styles2={
       fontWeight:"bold"
    }
    let styles3={
        backgroundColor:"grey",
        widht:"200px",
        height:"30px",
        marginBottom:"0px",  
        borderBottomleftRadius:"20px",
        borderBottomRightRadius:"20px"
  
    }
    return(
<>
<div style={styles3}>
<span style={styles}>Rs.{oldPrice}</span>
&nbsp;&nbsp;&nbsp;



<span style={styles2}>Rs.{newPrice}</span>
</div>
</>
    );
}