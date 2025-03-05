const mainDiv = React.createElement("div" , {id : "Main-Div"} , [
    React.createElement("div" , {id : "div1"} , [
        React.createElement("h1" , {id : "h1"} , "Hello World from div1"),
    ])
    ,
    React.createElement("div" , {id : "div2"} , [
        React.createElement("h2" , {id : "h2"} , "Hello World from div2"),
    ])
    ,
    React.createElement("div" , {id : "div3"} , [
        React.createElement("h3" , {id : "h3"} , "Hello World from div3"),
    ])
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(mainDiv)

