import React from "react";
import styled from "styled-components";

const WelcomeMessageHeader = styled.p`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: -10px;
`;

const WelcomeMessageBody = styled(WelcomeMessageHeader)`
  font-size: 1rem;
  font-weight: 400;
`;

const WelcomeMessageComponent = ({ profile, coursesCount }) => {
  let totalCompletedCourses = coursesCount.length.toString();
  
  return (
    <div>
      <WelcomeMessageHeader>{`Hello, ${profile.username}!`}</WelcomeMessageHeader>
      <WelcomeMessageBody>
        {`You've ${totalCompletedCourses} courses completed, yeay! Keep it up, more and more courses will coming after you.`}
      </WelcomeMessageBody>
    </div>
  );
};

export default WelcomeMessageComponent;
