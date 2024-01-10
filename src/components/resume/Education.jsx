const Education = () => {

    const academic  ={
        highSchool:{
            scName:"선사고등학교",
            period:"2012.03-2015.02",
        },
        university:{
            scName:"삼육대학교",
            department:"생활체육학과",
            period:"2015.03-2021.02",
        },
        academy:{
            scName:"KH 정보교육원",
            department:"자바(JAVA) 기반 개발자 양성과정",
            period:"2022.02-2021.09",
        }
    }

    return(
    
        <div className="education">

            <div> <h2 className="font_pilseung">Education</h2> </div>

            <div className="euduContent">

                <div>
                    <h4>{academic.highSchool.scName}</h4>
                    <h4>{academic.highSchool.period}</h4>
                </div>

                <div>
                    <h4>{academic.university.scName}</h4>
                    <h4>{academic.university.department}</h4>
                    <h4>{academic.university.period}</h4>
                </div>

                <div>
                    <h4>{academic.academy.scName}</h4>
                    <h4>{academic.academy.department}</h4>
                    <h4>{academic.academy.period}</h4>
                </div>

            </div>
            
        
        </div>
    )
}

export default Education;