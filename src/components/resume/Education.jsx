const Education = ({ university, degree, graduationYear }) => {


    return(
    
        <section className="education">
            <h2>Education</h2>
            <ul>
                <li>
                    <strong>{university}</strong>
                    <p>{degree}</p>
                    <p>Graduation Year: {graduationYear}</p>
                </li>
            </ul>
        </section>
    )
}

export default Education;