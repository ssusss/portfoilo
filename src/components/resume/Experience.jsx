const Experience = ({ projectName, proInfo, date, add }) =>{


    return(
        

        <div className="experience">
            <h2>Work Experience _학원 수료일</h2>

            <div>
                <h4>{projectName}</h4>
                <h4>{proInfo}</h4>
                <h4>{date}</h4>
                <h4>{add}</h4>
            </div>
            
        </div>
    )
}

export default Experience;