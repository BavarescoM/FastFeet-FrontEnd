import { createGlobalStyle } from "styled-components";
// import "react-perfect-scrollbar/dist/css/styles.css";
// import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap');
*{ 
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}
*:focus {
    outline:0;   
}
html,body, #root {
    height: 100%;  
    width: 100%;
    
}
body {
    -webkit-font-smothing: antialiased;
}
body,input, button {
    font: 14px 'Arial',sans-serif;   
    border: transparent;
}
a{
    text-decoration: none;
}
ul {
    text-decoration: none;
    list-style-type: none;
}
button {
    cursor: pointer;
}
.w100 {
    width: 100%;
}
.w60{
    width: 56%;
}
.w50{
    width: 49%;
}
.w33{
    width: 32%;
}
.w20{
    width: 20%;
}
`;
