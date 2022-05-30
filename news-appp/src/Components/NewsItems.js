import React, {Component} from 'react';
import {Card, Button} from 'react-bootstrap'

class NewsItems extends Component {
  render() {
    return(
      <>
        <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={this.props.img} />
        <Card.Body>
          <Card.Title>{this.props.title.slice(0,100)}...</Card.Title>
          <Card.Text>
            {this.props.description.slice(0,200)}...
          </Card.Text>
          <Button href={this.props.newsURl} target="_blank" variant="secondary btn-sm">Go somewhere</Button>
        </Card.Body>
      </Card>
      </>
    );
  }
}
export default NewsItems;
