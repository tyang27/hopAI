import React, { Component } from 'react';
import { Panel} from 'react-bootstrap';

class BlogPost extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="BlogPost" style={{ maxWidth: '800px', margin: '0 auto' }} >
        <Panel>
          <Panel.Heading>
            <b>{this.props.title}</b>
            <br />
            <i>By {this.props.author}</i>
          </Panel.Heading>
          <Panel.Body>
            {this.props.paragraphs.map(function(paragraph, i) {
              return (
                <p key={i}>{paragraph}</p>
              );
            })}
          </Panel.Body>
        </Panel>
      </div>
    );
  }
}

export default BlogPost;
