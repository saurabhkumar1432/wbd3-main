import React from 'react'
import "./ClinicalT.css"
import "../Home/Home.css"
import { Link } from "react-router-dom"
import ct1 from "../Images/ct1.png";
import ct2 from "../Images/ct2.png";
import ct3 from "../Images/ct3.png";
import Navbar from "../Navbar/Navbar"


function ClinicalT(){ 
    const s1={paddingTop:'10rem'}
    const styleobj = {
        fontSize : "20px",
        textAlign:"center",
    }

return(
    <>
    <Navbar/>
 

    <section className="about" id="about">
        <h1 style={s1} className="hd">CLINICAL THERAPY</h1>
        <h2 style={styleobj}>Deals with specific mental health disorders and coping techniques.</h2>
        <br/><br/>
        <div className="row">
            <div className="image">
                    <img src={ct1} alt=''></img>
                    <Link to="/bookApp"></Link>
            </div>
            <div className="content" id="1">
                <h3>Counselling for Depression</h3>
                <p>Since we all feel sad, moody or low from time to time, some people experience these emotions deeply,for long periods of time - weeks, months or even years and even for any identifiable reason.
                  Depression is more than just a bad mood – a severe illness that affects your physical and mental health. Do check out other symptoms and facts about depression and learn how counselling for depression can help, and find a right therapist here at Happylyf.</p>
            </div>
        </div>
        <br/><br/>

        <div className="clmn">
            <h1>What Causes Depression?</h1>
            {/* <br> */}

            <ul>
                <li>Grief -Sadness or grief from the death or loss of a loved one may increase the risk of depression.</li>
                <li>Abuse- emotional physical, physical, sexual abuse can lead to depression.</li>
                <li>Genetics - A family history of depression may increase the risk of depression.</li>
                <li>Brain chemistry</li>
                </ul>
                <h1>Symptoms Of Depression?</h1>
                {/* <br> */}
                <ul>
                    <li>Feeling fatigued most of the time</li>
                    <li>Reduced concentration and attention</li>
                    <li>Reduced self esteem and self confidence</li>
                    <li>Ideas of guilt and unworthiness</li>
                    <li>Pessimistic view of future</li>
                    <li>Social Withdrawal</li>
                    <li>Disturbed sleep & Diminished appetite</li>
                    <li>Forgetfulness</li>
                </ul>
                <h1>Treatment</h1>
                
                {/* <br> */}
                <ul>
                    <li>Medication- Antidepressants are medicines that treat depression</li>
                    <li>Talk therapy (Psychotherapy) can help people with depression</li>
                    <li>Interpersonal therapy - It aims the patient’s current interpersonal relations and social functioning.</li>
                </ul>
        </div>
    </section>
    
    <hr size="10%"/>

    <section className="about" id="about">
        <div className="row">
            <div className="image">
                    <img src={ct3} alt=''></img>
            </div>
            <div className="content" id="2">
                <h3>Counselling for Anxiety</h3>
                <p>Anxiety is a common emotion we face on a regular basis. We all experience anxiety while giving an examination, visiting the doctor or before any kind stage performance. However, when an individual faces anxiety at inappropriate levels regularly, it can be categorized as an anxiety disorder.
                    Anxiety is a diffuse, vague, unpleasant feeling of fear and apprehension, for dealing with such anxiety, a person must take anxiety counselling.</p>
            </div>
        </div>
        
        <br/><br/>
        <div className="clmn">
            <h1>What Causes Anxiety?</h1>
            {/* <br> */}
            <ul>
                <li>Witnessing a traumatic experience or exposure, such as accidents or unpleasant circumstances.</li>
                <li>Giving up after prolonged drug or alcohol induces higher level of anxiety.</li>
                <li>Changes in brain chemistry due to medical factors, age, biological changes can lead to anxiety.</li>
                <li>Future worries like money, health, loneliness etc. can lead to anxiety.</li>
                </ul>
                <h1>Symptoms Of Anxiety?</h1>
                {/* <br> */}
                <ul>
                    <li>Negative thoughts</li>
                    <li>Shortness of breath</li>
                    <li>Distracted thinking</li>
                    <li>Restlessness</li>
                    <li>Trembling/ shaking</li>
                    <li>Pale face</li>
                    <li>Sweating</li>
                    <li>Having a sense of impending danger, panic or doom.</li>
                </ul>
                <h1>Treatment</h1>
                {/* <br> */}
                <ul>
                    <li>Cognitive Behavioural Therapy- CBT is a practical treatment, which involves teaching practical skills to deal with anxiety symptoms</li>
                    <li>Interpersonal therapy - It aims the patient’s current interpersonal relations and social functioning.</li>
                    <li>Relaxation techniques are one of the best ways to deal with anxiety, one of them is progressive muscle relaxation.</li>
                    </ul>
            </div>
            
    </section>
    <hr size="10%"/>

    <section className="about" id="about">
        <div className="row">
            <div className="image">
              <Link to="/bookApp">
                <img src={ct2} alt=''></img>
          </Link>  </div>
            <div className="content">
                <h3>Counselling for Sleeping Disorder</h3>
                <p>Significant life stress, Illness, emotional discomfort, environmental factors like noise, light, or extreme temperature, medication may interfere with sleep.
                    Disturbed sleep schedules may happen on occasions such as jet lag. Sleep disorders include insomnia, narcolepsy, restless leg syndrome. Disturbed sleep can result in adverse health consequences, including fatigue low mood.
                    You can seek counselling for sleep problems, like cognitive behaviour therapy for insomnia and therapy for sleep disorders.</p>
            </div>
        </div>
        <br/><br/>
        <div className="clmn">
            <h1>What Causes Sleeping Disorders?</h1>
            {/* <br> */}
            <ul>
                <li>Physiological causes like Chronic physical pain, high blood pressure</li>
                <li>Psychological factors such as stress, anxiety, depression, Parkinson's disease</li>
                <li>Medical conditions for instance asthma, sinus, diabetes mellitus</li>
                <li>Lifestyle choices and dietary habits</li>
            </ul><br/>
                <h1>Symptoms Of Sleep Disorder?</h1>
                {/* <br> */}
                <ul>
                    <li>Waking up tired</li>
                    <li>Trouble falling asleep</li>
                    <li>Nightmares</li>
                    <li>Sleep walking</li>
                    <li>Persistent headache</li>
                    <li>Reduced concentration</li>
                </ul>
                <br/><br/><br/>
                <h1>Treatment</h1>
                <ul>
                    <li>
                        Medication- to induce sleep and provide physical rest to the body
                    </li>
                    <li>Relaxation techniques- to reduce stress, be calm and mindful</li>
                    <li>Individual Counselling- to talk out and release all sorts of worries fear and tension disrupting sleep.</li>
                    <li>Sleep hygiene- Following certain practices to ensure proper sound sleep</li>
                </ul>
            </div>
    </section>

</>
)
}

export default ClinicalT