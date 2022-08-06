import styled from "styled-components";

const SideBarCSS = styled.div`
 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background-color: #04172A; 
    height: 100vh;
    color:#FDFEF8;
}
/* Dashboard Navigation Bar */
.main{
    display: flex;
    flex-direction: row;
}
header{
    padding: 2em;
    padding-left: 24em;
    background-color: #04172A;
    display: flex;
    flex-direction: row;
    gap: 50px;
    position: fixed;
}
.logo{
    display: block;
    margin: 1.5em;
    margin-left: 4.5em;
}
.search form{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}
.search input{
    width: 466px;
    height: 50px;
    border: 1px solid #052A4FBF;
    background-color: #04172A;
    border-radius: 8px;
    font-family: 'Lato';
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align:left;
    text-indent: 1em;
}
#searchicon{
    position: relative;
    top: 0px;
    right: 2.2em;
    border: 2px solid #D3D4CF;
}
.search form button{
    border: 0;
}
header .feedback{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4px;
}
header .feedback a{
    padding: 10px 20px;
    border: 1px solid #04172A;
    background-color: #04172A;
    border-radius: 8px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: #A9A9A5;
    text-decoration: none;
}
header .feedback a:hover{
    border: 1px solid #052A4F;
}
.profile{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 4px;   
}
.profile select{
    background-color: #04172A;
    border: 1px solid #04172A;
    text-align: left;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #A9A9A5;
}

/* Side Bar */
section{
    background-color: #04172A;
    border-right: 1px solid #052A4F;
    position: fixed;
    height:100%;
 }   
.pages{
    padding: 5em;
}
.pages ul{
    font-family: 'Lato';
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    gap: 29px;
    list-style: none;
}
.pages ul li{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 6px;
}
.pages ul li a{
    font-family: 'Lato';
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0em;
    text-align: left;
    color: #A9A9A5;
    text-decoration: none;
    cursor: pointer;
}
a::after{
    font-family: Lato;
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: 0em;
    text-align: left;
    color: #FDFEF8;
}
/* Content */
footer{
    margin-top: 10em;
    margin-left: 22em;
    margin-right: 2em;
    margin-bottom: 4em;
    right: 293px;
    top: 104px;
}
`;

export default SideBarCSS;
