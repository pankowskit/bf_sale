import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import IssuesS1 from "../components/issues-s1";
import IssuesS2 from "../components/issues-s2";

class Issues extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <IssuesS1/>
                <IssuesS2/>
            </Container>    
        );
    }
}

export default Issues;