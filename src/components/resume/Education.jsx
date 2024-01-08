const Education = ({ university, degree, graduationYear }) => {


    return(
    
        <div className="education">

            <div> <h2>Education</h2> </div>

            <div>

                <div>
                    <h4>고등학교 졸업년도</h4>
                    <h4>고등학교 이름</h4>
                </div>

                <div>
                    <h4>{university}</h4>
                    <h4>{degree}</h4>
                    <h4>{graduationYear}</h4>
                </div>

            </div>
            
        
        </div>
    )
}

export default Education;