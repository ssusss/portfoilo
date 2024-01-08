const Experience = ({ company, position, date, responsibilities }) =>{


    return(
        

        <section className="experience">
            <h2>Work Experience</h2>
            <ul>
                <li>
                    <strong>{company}</strong>
                    <p>{position}</p>
                    <p>{date}</p>
                    <p>{responsibilities}</p>
                </li>
            </ul>
        </section>
    )
}

export default Experience;