import React, { Component } from 'react';
import "./Discuss.css";
import { Panel, Navbar, Nav, MenuItem, PageHeader } from 'react-bootstrap';
import BlogPost from "./BlogPost"

class Discuss extends Component {

  render() {

    const blogPosts = [
      {
        title: 'Yes, I’m humanities. And Yes, I care about AI.',
        author: 'Aliza Berger',
        paragraphs: [
          'As a Johns Hopkins student, I am used to defending my humanities identities. From informal socializing to being identified by my laptop sticker in a coffee shop, I’m used to the same reaction, “Oh you go to Johns Hopkins, you must want to be a doctor!” When I clarify that I’m an International Studies, the follow-up is guaranteed to be a combination of “well what can you do with that/what do you want to be?”',
          'Being passed along the side for not having an obvious career trajectory or hard-skill(s) has become a challenge in a world mesmerized with resume worthy capabilities. Even more challenging, is convincing others of my passion to work within technology and cybersecurity. Fortunately, legendary historian and international relations scholar and diplomat, Henry Kissinger, has made the argument for me,',
          '“Typically, [artificial intelligence] questions are left to technologists and to the intelligentsia of related scientific fields. Philosophers and others in the field of the humanities who helped shape previous concepts of world order [such as Age of Enlightenment] tend to be disadvantaged, lacking knowledge of AI’s mechanisms or being overawed by its capacities. In contrast, the scientific world is impelled to explore the technical possibilities of its achievements, and the technological world is preoccupied with commercial vistas of fabulous scale. The incentive of both these worlds is to push the limits of discoveries rather than to comprehend them.” (Link: https://www.theatlantic.com/magazine/archive/2018/06/henry-kissinger-ai-could-mean-the-end-of-human-history/559124/)',
          'We can change this incentive structure, but it’ll take a group effort. By coming together to discuss and problem-solve we can promote a world where technology intends to benefit, and not determine, societal needs: a world where ethics and morality is embedded in the design and implementation of any emerging technology. I am excited for hopAI to serve as a connector between us all and provide a new approach to the Digital Age.'
        ],
      },
      {
        title: 'The Best Blog Bost',
        author: 'Will David',
        paragraphs: [
          'The best paragraphs ever',
          'And another!!'
        ],
      },
    ];

    return (
      <div className="Discuss" style={{ height: '4000px', marginLeft: '50px', marginRight: '50px' }}>

        {/* <PageHeader>Discuss <small>AI</small></PageHeader> */}

        <div id='Blog'>
          <Panel>
            <Panel.Heading>
              <Panel.Title>Blog</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              {blogPosts.map(function(item, i) {
                return (
                  <BlogPost key={i} title={item.title} author={item.author} paragraphs={item.paragraphs} />
                );
              })}
            </Panel.Body>
          </Panel>
        </div>

        <div id='Contribute'>
          <Panel style={{ height: '300px' }}>
            <Panel.Heading>
              <Panel.Title>Contribute</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <div>
                <p>content...</p>
              </div>
            </Panel.Body>
          </Panel>
        </div>
      </div>
    );
  }
}

export default Discuss;
