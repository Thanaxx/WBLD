import React from 'react'
import { ProjectContainer, ProjHeader, ProjectList, ProjectLeft, ProjRight, ProjectLists} from './Projectstyle'
import { item } from './data'

function Projects() {

    return (
        <>
            <ProjectContainer>
                <ProjHeader data-aos='zoom-in'>
                    <ProjectLeft>
                        <h1>Projects</h1>
                    </ProjectLeft>
                        
                    <ProjRight>
                        <h2>Some of the works below include developing some sample ideas of how websites were developed and viewed using various devices. These are the projects that were used to meet the needs of the clients as well as to solve the world's challenges by creating major types of solutions to people's problems. Here are a few examples of our work.</h2>
                    </ProjRight>
                </ProjHeader>

                <ProjectList>
                    {item.map((data) => (
                        <ProjectLists key={data.id}>
                            <div className="SingleTeam">
                                <div className="team-img">
                                    <img src={data.image} alt="project" />
                                </div>
                            </div>
                        </ProjectLists>
                    ))}

                </ProjectList>
            </ProjectContainer>
        </>
    )
}

export default Projects