import { Component } from 'react';
// import "../../header/header.css";
import MembersNavigator from '../MembersNavigator';
import MembersPersonal from '../MembersPersonal';
import Integrantes from '../../data/Integrantes';
class Members extends Component {
    constructor (){
        super();
        this.integrantes = new Integrantes()
    }
    render() { 
        return (
            <>
                <MembersNavigator integrantes={this.integrantes}/>
                <MembersPersonal/>
            </>
        )
    }
}
 
export default Members;