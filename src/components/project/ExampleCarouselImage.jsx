import Badge from 'react-bootstrap/Badge';

const ExampleCarouselImage = ({ projectInfo }) => {

    const title = projectInfo[0];
    const imageUrl = projectInfo[1];
    const term = projectInfo[2];
    const participants = projectInfo[3];
    const explanation = projectInfo[4];
    const functions = projectInfo[5];
    const skills = projectInfo[6];


    return (
        <div>
            <img className="backImage"
                src="https://via.placeholder.com/1200x700"  // 실제 이미지 소스로 교체
                alt={`Slide: ${projectInfo}`}
            />

            <div className="projectInfoContainer" style={{padding: '20px'}}>
                <h3>{title}</h3>
                <p>{term} | {participants}</p>
                <div style={{display: 'flex'}}>
                    <div style={{backgroundColor: 'lightblue', width: '45%', textAlign: 'left'}}>
                        <p style={{marginTop: '5px'}}>{explanation}</p>
                        <div style={{borderTop: '1px solid black', paddingTop: '20px'}}>
                            <h5>주요 기능</h5>
                            {functions.map((func, index) => (
                                <div key={index} style={{marginLeft: '5px'}}>✔ {func}</div>
                            ))}

                            <h5 style={{marginTop: '20px'}}>기술 스택</h5>
                            {skills.map((skill, index) => (
                                <Badge bg="primary" key={index} style={{marginLeft: '5px'}}>{skill}</Badge>
                            ))}
                        </div>
                    </div>
                    <div style={{backgroundColor: 'lightpink', width: '55%'}}>
                        <img src={imageUrl} alt="" style={{margin: '5px auto'}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExampleCarouselImage;