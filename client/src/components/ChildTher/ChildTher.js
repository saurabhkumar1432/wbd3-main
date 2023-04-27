import React from 'react'
import "../ClinicalT/ClinicalT.css"
import "../Home/Home.css"
//import { Link } from "react-router-dom"

import Navbar from "../Navbar/Navbar"
export default function ChildTher(){
    const s1={textAlign: 'center',fontSize: '20px'}
    const s2={paddingTop:'10rem'}
    return(
        <>
        <Navbar/>
            <section className="about" id="about">
                <h1 style={s2} className="hd">THERAPY for Children and Teenagers</h1>
                <h2 style={s1}>Explore solutions for prevailing childhood psychological problems</h2><br /><br />
                <div className="row">
                    <div className="image">
                        <img src="https://www.verywellhealth.com/thmb/YxW1s1Ak-5TVeraIc5p2DN1HWGQ=/1500x1000/filters:no_upscale():max_bytes(150000):strip_icc()/adhd-attention-deficit-hyperactivity-disorder-included-definition-symptoms-traits-causes-treatment-5084784_final-bc92546bc9df465ea7f13fc423c2085b.jpg" alt='' />
                    </div>
                    <div className="content">
                        <h3>ADHD</h3>
                        <p>Attention Deficit Hyperactivity Disorder has three main features- inattention, hyperactivity and impulsivity.
                            Children affected by ADHD find it difficult to sustain mental effort during play or work.
                            There exists an inability to control their reactions, waiting for a turn and resist immediate temptations.</p>
                    </div>
                </div><br /><br />
                <div className="clmn">
                    <h1>What Causes ADHD?</h1><br />
                    <ul>
                        <li>Genetic prevalence in those with parents, siblings or first degree relatives are suffering</li>
                        <li>Exposure of expecting mother to harmful radiation, chemical or drug (teratogens)</li>
                        <li>Premature birth or complications during delivery</li>
                        <li>Exposure of pregnant mother or infant to environmental toxins such as paint, lead, smoke etc.</li>
                    </ul>
                    <h1>Symptoms Of ADHD?</h1><br />
                    <ul>
                        <li>Inattention or low attention span</li>
                        <li>Hyperactivity or Always on the go</li>
                        <li>Impulsivity or less patience</li>
                        <li>Low self-esteem</li>
                        <li>Easily distracted</li>
                        <li>Difficulty in following instructions</li>
                        <li>Poor academic performance</li>
                        <li>Troublesome relationship </li>
                    </ul><br /><br />
                    <h1>Treatment</h1><br />
                    <ul>
                        <li>Psycho-education for parents to understand the disorder and perhaps understand the need of their child.</li>
                        <li>Special Education for improved learning and academic competence</li>
                        <li>Occupational therapy to improve coordination and organisation</li>
                        <li>Speech therapy for improved language, interaction and social skills</li>
                    </ul>
                </div>
            </section><hr size="10%" />
            <section className="about" id="about">
                <div className="row">
                    <div className="image">
                        <img src="https://www.speechandot.com/wp-content/uploads/2019/06/SignsOfAutism.jpeg" alt="stress" />
                    </div>
                    <div className="content">
                        <h3>Autism Spectrum Disorder</h3>
                        <p>Autism is a pervasive developmental disorder characterized by severe impairments in social interactions, communication, and stereotyped patterns of behaviours.
                            Autism is evident in a restricted range of interests and a strong desire for routine.</p>
                    </div>
                </div><br /><br />
                <div className="clmn">
                    <h1>What Causes Autism?</h1><br />
                    <ul>
                        <li>Genetic mutation prevalence in those with parents, siblings or first degree relatives are suffering</li>
                        <li>Exposure of expecting mother to harmful radiation, chemical or drug (teratogens)</li>
                        <li>Premature birth or complications during delivery</li>
                        <li>Exposure of pregnant mother or infant to environmental toxins such as paint, lead, smoke etc.</li>
                    </ul>
                    <h1>Symptoms Of Autism?</h1><br />
                    <ul>
                        <li>Repetitive behaviour</li>
                        <li>Flapping hands</li>
                        <li>Avoiding eye contacts</li>
                        <li>Spinning in circles</li>
                        <li>Unresponsive to others</li>
                        <li>Rocking their bodies</li>
                        <li>Difficulty in expressing</li>
                    </ul><br /><br /><br /><br />
                    <h1>Treatment</h1><br />
                    <ul>
                        <li>Autism behavioural therapy for sensory integration and to initiate a relationship</li>
                        <li>Psycho-education for parents to understand the disorder and perhaps understand the need of their child</li>
                        <li>Special Education for improved academic performance and speech therapy for interaction</li>
                        <li>Occupational therapy and play therapy to improved coordination and organisation skills</li>
                    </ul>
                </div>
            </section><hr size="10%" />
            <section className="about" id="about">
                <div className="row">
                    <div className="image">
                        <img src="https://www.childrens.com/wps/wcm/connect/childrenspublic/f64ee2bc-f887-4366-b8e9-c67b486a1041/shutterstock_573798472_800x480.jpg?MOD=AJPERES&CVID=" alt='' />
                    </div>
                    <div className="content">
                        <h3>Bullying</h3>
                        <p>Bullying is repeated behaviour that is intended to hurt someone, either emotionally or physically.
                            This could be done by using spoken words, physical violence, emotions, or the Internet. Bullying can take place at school, at home and at work. It can be harmful to physical and mental health.
                            There are several therapies, such as bullying group therapy, Cognitive behavioural therapy, and Individual therapy to deal with such bullying behaviour.</p>
                    </div>
                </div><br /><br />
                <div className="clmn">
                    <h1>What Causes Bullying?</h1><br />
                    <ul>
                        <li>Being in circumstances where a bully has taken their own power away; can cause them to reclaim that power by bullying others.</li>
                        <li>Provided too much authority and expectation gives the child, an unrealistic sense of power and control and it causes bullying behaviour.</li>
                        <li>Children may use harassment/bullying to express a grievance or to retaliate against bullying they suffered.</li>
                    </ul>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h1>Symptoms Of Bullying?</h1><br />
                    <ul>
                        <li>Becoming sick or faking a disease</li>
                        <li>Disinterested in school work</li>
                        <li>Feeling weak or declining self-esteem</li>
                        <li>Sleep problem</li>
                        <li>Does not want to go to school</li>
                        <li>Has unexplained bruises, burns, cuts</li>
                    </ul><br /><br /><br /><br /><br />
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h1>Treatment</h1><br />
                    <ul>
                        <li>Individual therapy - A child psychologist will provide a safe place for a child to share their thoughts and feelings.
                        </li>
                        <li>Cognitive behavioural therapy based activities for making child aware of their support network and boost self-esteem.</li>
                        <li>Psychotherapy- This therapy is supposed to help and communicate  your child's feelings about being bullied.</li>
                        <li>Group therapy-This therapy involves counselling sessions with other children focusing on similar issues.</li>
                    </ul>
                </div>
            </section>
        </>
    )
}