import React, { useState } from 'react';
import { Carousel, CarouselActions, CarouselSlide, CarouselImage } from '@strapi/parts/Carousel';
import { IconButton } from '@strapi/parts/IconButton';
import AddIcon from '@strapi/icons/AddIcon';
import EditIcon from '@strapi/icons/EditIcon';
import DeleteIcon from '@strapi/icons/DeleteIcon';
import PublishIcon from '@strapi/icons/PublishIcon';

export const MediaLibraryInput = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleNext = () => {
    setSelectedIndex(current => (current < 2 ? current + 1 : 0));
  };

  const handlePrevious = () => {
    setSelectedIndex(current => (current > 0 ? current - 1 : 2));
  };

  return (
    <Carousel
      label={`Carousel of numbers (${selectedIndex + 1}/3)`}
      selectedSlide={selectedIndex}
      previousLabel="Previous slide"
      nextLabel="Next slide"
      onNext={handleNext}
      onPrevious={handlePrevious}
      hint="Description line"
      actions={
        <CarouselActions>
          <IconButton
            onClick={() => console.log('edit')}
            label="Edit"
            id="edit"
            icon={<EditIcon />}
          />
          <IconButton onClick={() => console.log('Create')} label="Create" icon={<AddIcon />} />
          <IconButton onClick={() => console.log('Delete')} label="Delete" icon={<DeleteIcon />} />
          <IconButton
            onClick={() => console.log('Publish')}
            label="Publish"
            icon={<PublishIcon />}
          />
        </CarouselActions>
      }
      style={{
        width: '242px',
      }}
    >
      <CarouselSlide label="1 of 3 slides">
        <CarouselImage src="firstPathImg" alt="First" />
      </CarouselSlide>
      <CarouselSlide label="2 of 3 slides">
        <CarouselImage src="firstPathImg" alt="second" />
      </CarouselSlide>
      <CarouselSlide label="3 of 3 slides">
        <CarouselImage src="firstPathImg" alt="third" />
      </CarouselSlide>
    </Carousel>
  );
};
