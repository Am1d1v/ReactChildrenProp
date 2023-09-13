

function Wrapper(props){

    console.log(props)

return(
    <div style={{backgroundColor: props.color,
         width: "250px",
         padding: "20px",
         margin: "20px"
         }}>
        {props.children}
    </div>
)
}

export default Wrapper;