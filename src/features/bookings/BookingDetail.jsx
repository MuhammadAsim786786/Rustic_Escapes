<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Spinner from 'ui/Spinner';
import BookingDataBox from './BookingDataBox';
import Row from 'ui/Row';
import Heading from 'ui/Heading';
import Tag from 'ui/Tag';
import ButtonGroup from 'ui/ButtonGroup';
import Button from 'ui/Button';
import Modal from 'ui/Modal';
import ConfirmDelete from 'ui/ConfirmDelete';

import { useBooking } from 'features/bookings/useBooking';
import { useDeleteBooking } from './useDeleteBooking';
import { useMoveBack } from 'hooks/useMoveBack';
import { useCheckout } from 'features/check-in-out/useCheckout';
import ButtonText from 'ui/ButtonText';
import Empty from 'ui/Empty';
=======
import styled from "styled-components";

import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "./useBooking";
import Spinner from "../../ui/Spinner";
import { useNavigate } from "react-router-dom";
import { HiArrowUpOnSquare } from "react-icons/hi2";
import { useCheckout } from "../check-in-out/useCheckout";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteBooking } from "./useDeleteBooking";
>>>>>>> origin/final-4

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
<<<<<<< HEAD
  const { booking } = useBooking();
  const { mutate: deleteBooking, isLoading: isDeleting } = useDeleteBooking();
  const { mutate: checkout, isLoading: isCheckingOut } = useCheckout();
=======
  const { booking, isLoading } = useBooking();
  const { checkout, isCheckingOut } = useCheckout();
  const { deleteBooking, isDeleting } = useDeleteBooking();
>>>>>>> origin/final-4

  const moveBack = useMoveBack();
  const navigate = useNavigate();

<<<<<<< HEAD
  // if (isLoading) return <Spinner />;
  // if (!booking) return <Empty resource='booking' />;

  const statusToTagName = {
    unconfirmed: 'blue',
    'checked-in': 'green',
    'checked-out': 'silver',
  };

  const { id: bookingId, status } = booking;

  // We return a fragment so that these elements fit into the page's layout
  return (
    <>
      <Row type='horizontal'>
        <HeadingGroup>
          <Heading type='h1'>Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace('-', ' ')}</Tag>
=======
  if (isLoading) return <Spinner />;

  const { status, id: bookingId } = booking;

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
>>>>>>> origin/final-4
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
<<<<<<< HEAD
        {status === 'unconfirmed' && (
=======
        {status === "unconfirmed" && (
>>>>>>> origin/final-4
          <Button onClick={() => navigate(`/checkin/${bookingId}`)}>
            Check in
          </Button>
        )}

<<<<<<< HEAD
        {status === 'checked-in' && (
          <Button onClick={() => checkout(bookingId)} disabled={isCheckingOut}>
=======
        {status === "checked-in" && (
          <Button
            icon={<HiArrowUpOnSquare />}
            onClick={() => checkout(bookingId)}
            disabled={isCheckingOut}
          >
>>>>>>> origin/final-4
            Check out
          </Button>
        )}

        <Modal>
<<<<<<< HEAD
          <Modal.Toggle opens='delete'>
            <Button variation='danger'>Delete booking</Button>
          </Modal.Toggle>
          <Modal.Window name='delete'>
            <ConfirmDelete
              resource='booking'
              // These options will be passed wherever the function gets called, and they determine what happens next
              onConfirm={(options) => deleteBooking(bookingId, options)}
              disabled={isDeleting}
=======
          <Modal.Open opens="delete">
            <Button variation="danger">Delete booking</Button>
          </Modal.Open>

          <Modal.Window name="delete">
            <ConfirmDelete
              resourceName="booking"
              disabled={isDeleting}
              onConfirm={() =>
                deleteBooking(bookingId, {
                  onSettled: () => navigate(-1),
                })
              }
>>>>>>> origin/final-4
            />
          </Modal.Window>
        </Modal>

<<<<<<< HEAD
        <Button variation='secondary' onClick={moveBack}>
=======
        <Button variation="secondary" onClick={moveBack}>
>>>>>>> origin/final-4
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
