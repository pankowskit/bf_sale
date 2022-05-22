import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import SubmissionsS1 from "../components/submissions-s1";
import SubmissionsS2 from "../components/submissions-s2";
import SubmissionsS3 from "../components/submissions-s3";
import SubmissionsS4 from "../components/submissions-s4";

class Submissions extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <SubmissionsS1/>
                <SubmissionsS2/>
                <SubmissionsS3/>
                <SubmissionsS4/>
            </Container>    
        );
    }
}

export default Submissions;