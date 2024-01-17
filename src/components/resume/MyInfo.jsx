const MyInfo = ()=> {

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
        <div className="myInfoContainer">
            
            <div className="myInfoContents">
                <div>
                    <h4>{academic.university.scName}</h4>
                    <h4>{academic.university.department}</h4>
                    <h4>{academic.university.period}</h4>
                </div>
                <div>
                <h4>{academic.academy.scName}</h4>
                    <h4>{academic.academy.department}</h4>
                    <h4>{academic.academy.period}</h4>
                    <h4>{academic.academy.scName}에서 6개월간 교육을 받았습니다. 기본적인 cs 지식과 객체지향 프로그래밍에 대해 학습하고 Spring FrameWork와 SpringBoot 를 사용한 프로젝트를 진행하였습니다. </h4>
                    <h4>수료 이후 이론적인 부분이 부족하다고 생각하여 네트워크의 개념과 CS 지식과 리눅스 공부를 진행하였습니다. </h4>
                </div>
                <div>
                    <h2>기술 스택 </h2>
                    <h2>이미지로 여러개 넣어보자 </h2>
                </div>
            </div>

        </div>
    )
}

export default MyInfo;