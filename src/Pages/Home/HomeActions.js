import React from 'react';
import { GrFacebookOption } from 'react-icons/gr';
import { AiOutlineInstagram } from 'react-icons/ai';
import { Button, Text } from '../../Components';

const HomeActions = () => (
  <>
    <div>
      <Button variant="primary">
        <a href="#products">
          <Text>Find your taste</Text>
        </a>
      </Button>
    </div>
    <div className="iconContainer">
      <div className="icon">
        <GrFacebookOption className="main_icon" size={30} />
      </div>
      <div className="icon">
        <AiOutlineInstagram className="main_icon" size={30} />
      </div>
    </div>
  </>
);

export default HomeActions;
