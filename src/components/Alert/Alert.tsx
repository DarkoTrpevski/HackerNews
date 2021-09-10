import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../redux/types/types';
import { removeAlert } from '../../redux/alert/alertActions';
import { AiOutlineClose } from 'react-icons/ai';
import { BsFillInfoCircleFill as InfoIcon } from 'react-icons/bs';
import styled from 'styled-components';

interface AlertProps {
}

const AlertDialog = styled.div<{ color: string }>`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  background-color: ${props => props.color};
`
const AlertTitle = styled.h2`
  margin: 1rem 0 1rem 1rem;
  color: #fff;
  font-size: 1.4rem;
  font-weight: bold;
  letter-spacing: 0.2rem;
`
const AlertIcon = styled(InfoIcon)`
  margin: 1rem;
  font-size: 2rem;
  color: ${props => props.color};
`
const CloseButton = styled(AiOutlineClose)`
  position: absolute;
  top: 4px;
  right: 4px;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
`

const Alert: React.FC<AlertProps> = () => {

  const dispatch = useDispatch();
  const alerts = useSelector((state: AppState) => state.alertReducer);

  return (
    <>
      {alerts !== null && alerts.length > 0 && alerts.map(({ id, msg, alertType }) => (
        <AlertDialog key={id} color={alertType === "error" ? "#f76363b2" : alertType === "success" ? "#66d644b2" : alertType === "warning" ? "#ee8989b2" : "#cfd148b2"}>
          <AlertIcon color={alertType === "error" ? "#f76363" : alertType === "success" ? "#66d644" : alertType === "warning" ? "#ee8989" : "#cfd148"} />
          <AlertTitle>{msg}</AlertTitle>
          <CloseButton onClick={() => dispatch(removeAlert(id))} />
        </AlertDialog>
      ))}
    </>
  )

}


export default Alert;