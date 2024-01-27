import { left } from "@popperjs/core";

const Technology = () =>{


    return(

        <div className="technologyContainer" id="skill">
            <h1 className="font_pilseung">Skills</h1>
            
            <div className="skillContainer font_eastar">
                <div className="frontendContainer">
                    <div>Frontend</div>
                    <div className="iconContainer">
                        <img className="js" src="img/javascript.png" alt="" />
                        <img className="html" src="img/html.png" alt="" />
                        <img className="css" src="img/css.png" alt="" />
                        <img className="react" src="img/react.png" alt="" />
                        <img className="bootstrap" src="img/bootstrap.png" alt="" />
                        <img className="jquery" src="img/jquery.png" alt="" />
                    </div>
                </div>
                <div style={{display: "flex"}}>
                    <div className="backendContainer">
                        <div>Backend</div>
                        <div className="iconContainer">
                            <img className="java" src="img/java.png" alt="" />
                            <img className="spring" src="img/spring.png" alt="" />
                            <img className="oracle" src="img/oracle.png" alt="" />
                        </div>
                    </div>
                    
                    <div className="toolContainer">
                        <div>Tool</div>
                        <div className="iconContainer">
                            <img className="eclipse" src="img/eclipse.png" alt="" />
                            <img className="vscode" src="img/vscode.png" alt="" />
                        </div>
                    </div>
                </div>
                
                <div className="VCContainer">
                    <div>Version control</div>
                    <div className="iconContainer">
                        <img className="git" src="img/git.png" alt="" />
                        <img className="github" src="img/github.png" alt="" />
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default Technology;