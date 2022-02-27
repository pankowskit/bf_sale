import About from "./views/about";
import Comingsoon from "./views/comingsoon";
import Error from "./views/error";
import Home from "./views/home";
import Issues from "./views/issues";
import More from "./views/more";
import Privacy from "./views/privacy";
import Submissions from "./views/submissions";

const ERRORS = {
    "401":{
        backLink: "/",
        backName:"Home",
        code:"401",
        text: "You are not authorized to access this resource"
    },
    "404":{
        backLink: "/",
        backName:"Home",
        code:"404",
        text: "Page not found"
    }
}

const PATHS = [
    {menuItem:true,menuName:"Home",path:"/",component:<Home/>},
    {menuItem:true,menuName:"About",path:"/about",component:<About/>},
    {menuItem:true,menuName:"Issues",path:"/issues",component:<Issues/>},
    {menuItem:true,menuName:"Submissions",path:"/submissions",component:<Submissions/>},
    {menuItem:true,menuName:"More",path:"/more",component:<More/>},
    {menuItem:false,menuName:"",path:"/comingsoon",component:<Comingsoon/>},
    {menuItem:false,menuName:"",path:"/privacy",component:<Privacy/>},
    {menuItem:false,menuName:"",path:"*",component:<Error errorData={ERRORS['404']}/>}
];

export {
    ERRORS,
    PATHS
}