import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import MoreS1 from "../components/more-s1";
import MoreS2 from "../components/more-s2";

class More extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <MoreS1/>
                <MoreS2/>
            </Container>    
        );
    }
}

export default More;