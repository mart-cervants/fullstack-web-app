import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ImageCard = ({ images, deleteImage }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={images.urls.small} />
      <Card.Body>
        <Card.Title>{images.title.toUpperCase()}</Card.Title>
        <Card.Text>{images.description || images.alt_description}</Card.Text>
        <Button variant="primary" onClick={() => deleteImage(images.id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ImageCard;
