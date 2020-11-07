import React, { useEffect } from 'react';
import { Steps } from 'antd';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { stepActions } from '../../Redux/Actions';
import { GoTo } from '../../Components';

const { Step } = Steps;

const Status = () => {
  const dispatch = useDispatch();
  const { step } = useSelector((state) => state.step);

  const increment = () => {
    if (step <= 2) {
      dispatch(stepActions.increment());
    }
  };

  useEffect(() => {
    setTimeout(increment, 5000);
  }, [step]);

  return (
    <Wrapper>
      <GoTo position="topLeft" color="#fff" />
      <StepsContainer>
        <Steps current={step}>
          <Step
            title="Working on dispatch"
            subTitle="Less than 1h"
            description="Packing your desired cake for dispatch"
          />
          <Step
            title="On the way"
            subTitle="Less than 2h"
            description="Delivering cake to your location"
          />
          <Step title="Delivered" description="Enjoy the cake :)" />
        </Steps>
      </StepsContainer>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #171f30;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StepsContainer = styled.div`
  border-radius: 10px;
  height: 17%;
  padding: 30px;
  background-color: #fff;
  width: 80%;
`;
export default Status;
