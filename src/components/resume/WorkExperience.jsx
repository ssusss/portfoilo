const WorkExperience = ()=>{

    const WorkExperience={
        company1:{
            comName:"씨웨이브",
            responsibility:"행사관리 및 인원관리",
            Period:"2015.05 - 2023.11"

        },
        company2:{
            comName:"대교/트니트니",
            responsibility:"유아체육 강사",
            Period:"2020.12 - 2022.03"
        }
    }

    return(
        <div>

            <div><h2 className="font_pilseung">사회경험</h2></div>

            <div style={{display:"flex"}}>
                <div>
                    <h4>{WorkExperience.company1.comName}</h4>
                    <h4>{WorkExperience.company1.responsibility}</h4>
                    <h4>{WorkExperience.company1.Period}</h4>
                </div>
                <div style={{marginLeft:"30px"}}>
                    <h4>{WorkExperience.company2.comName}</h4>
                    <h4>{WorkExperience.company2.responsibility}</h4>
                    <h4>{WorkExperience.company2.Period}</h4>
                </div>
            </div>
        </div>
    )
}

export default WorkExperience;