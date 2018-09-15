import React, { Component } from 'react';
import People from './People.js';

class AboutPage extends Component {
  render() {
    return(<div className="About">
        <h2>Motivation</h2>
        <p>
        Artificial Intelligence (AI) is a field of technology that is changing the world at an extraordinary pace. All sectors and industries will be influenced by the impacts of AI, including governments, schools, hospitals, and courtrooms. Unfortunately, the technology is often applied and developed with little consideration for its risks and potential challenges for society. As the upcoming generation that will be most affected by this technology, it is our responsibility to promote safe AI implementation and usage. 
        </p>
        <p>
        Given AI’s ability to transcend borders and disciplines, a safe outcome can only be achievable through multidisciplinary and global collaboration. However, a gap persists between different fields of expertise, beginning in academia, that stifles possible conversations and collaborations that can lead to great innovation and creativity. Johns Hopkins University, with its international reach and diverse talent, can help to reverse this trend. And HopAI aims to support university dialogue committed to a future of safe and responsible AI practice. 
        </p>
        <h2>Mission</h2>
        <p>
        HopAI strives to connect students and academics from different fields of study and levels of expertise who share a common interest and curiosity for Artificial Intelligence (AI). It provides a platform for this diverse community to educate one another and others about AI, and to examine the present and future issues and impacts of AI from varying perspectives. Through multidisciplinary discussion and debate, HopAI encourages awareness of work in varying fields of study and create an integrative network across the Johns Hopkins institute. It cultivates interdisciplinary conversation and collaboration that is crucial for innovation and success as both students and academics alike, while also fostering the design and implementation of safe technology.
        </p>
        <h2>Team</h2>
        <People />
        <h2>Contact</h2>
        <a href="mailto:hopai.blog@gmail.com">Email</a>
        </div>);
  }
}

export default AboutPage;
