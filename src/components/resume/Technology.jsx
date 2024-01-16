import { left } from "@popperjs/core";

const Technology = () =>{

    return(

        <div className="technologyContainer">
            <h1 className="font_pilseung">Skills</h1>
            <div className="line"></div>
            
            <div style={{display:"flex", margin:"20px"}}>
                <div style={{marginRight:"20px"}}>
                    <h4>Back-end</h4>
                    <br/>
                    <h4>Java</h4>
                    <h4>SP&Servlet</h4>
                    <h4>MyBatis</h4>
                
                </div>

                <div style={{marginRight:"20px"}}>
                    <h4>Front-end</h4>
                    <br/>
                    <h4>JavaScript</h4>
                    <h4>Ajax</h4>
                    <h4>HTML</h4>
                    <h4>CSS</h4>
                </div>

                <div>
                    <h4>DB</h4>
                    <br/>
                    <h4>Oracle</h4>
                </div>
                
                <div>
                    <h4>Tool</h4>
                    <br/>
                    <h4>Eclipse</h4>
                    <h4>VisualStudioCode</h4>
                </div>
                <div>
                    <h4>ramework/Library</h4>
                    <br/>
                    <h4>Spring</h4>
                    <h4>SpringBoot</h4>
                    <h4>react</h4>
                </div>
                <div>
                    <h4>Collaboration</h4>
                    <br/>
                    <h4>GitHub</h4>
                    <h4>notion</h4>
                </div>
                
            </div>
            
        </div>
    )
}

export default Technology;