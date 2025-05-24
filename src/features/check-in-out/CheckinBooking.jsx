<<<<<<< HEAD
import { useEffect, useState } from 'react';
import { formatCurrency } from 'utils/helpers';

import Spinner from 'ui/Spinner';
import Row from 'ui/Row';
import Heading from 'ui/Heading';
import ButtonGroup from 'ui/ButtonGroup';
import Button from 'ui/Button';
import ButtonText from 'ui/ButtonText';
import Checkbox from 'ui/Checkbox';

import BookingDataBox from 'features/bookings/BookingDataBox';

import { useBooking } from 'features/bookings/useBooking';
import { useMoveBack } from 'hooks/useMoveBack';
import { useCheckin } from './useCheckin';

import styled from 'styled-components';
import { box } from 'styles/styles';
import { useSettings } from 'features/settings/useSettings';

const Box = styled.div`
  ${box}
=======
import styled from "styled-components";
import BookingDataBox from "../../features/bookings/BookingDataBox";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";
import Spinner from "../../ui/Spinner";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "../bookings/useBooking";
import { useEffect, useState } from "react";
import Checkbox from "../../ui/Checkbox";
import { formatCurrency } from "../../utils/helpers";
import { useCheckin } from "./useCheckin";
import { useSettings } from "../settings/useSettings";

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
>>>>>>> origin/final-4
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const [confirmPaid, setConfirmPaid] = useState(false);
  const [addBreakfast, setAddBreakfast] = useState(false);
<<<<<<< HEAD

  const { booking, isLoading } = useBooking();
  const { mutate: checkin, isLoading: isCheckingIn } = useCheckin();
  const moveBack = useMoveBack();
  const { isLoading: isLoadingSettings, settings } = useSettings();

  // Can't use as initial state, because booking will still be loading
  useEffect(() => setConfirmPaid(booking?.isPaid ?? false), [booking]);

=======
  const { booking, isLoading } = useBooking();
  const { settings, isLoading: isLoadingSettings } = useSettings();

  useEffect(() => setConfirmPaid(booking?.isPaid ?? false), [booking]);

  const moveBack = useMoveBack();
  const { checkin, isCheckingIn } = useCheckin();

>>>>>>> origin/final-4
  if (isLoading || isLoadingSettings) return <Spinner />;

  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
  } = booking;

  const optionalBreakfastPrice =
<<<<<<< HEAD
    numNights * settings.breakfastPrice * numGuests;
=======
    settings.breakfastPrice * numNights * numGuests;
>>>>>>> origin/final-4

  function handleCheckin() {
    if (!confirmPaid) return;

<<<<<<< HEAD
    if (addBreakfast)
=======
    if (addBreakfast) {
>>>>>>> origin/final-4
      checkin({
        bookingId,
        breakfast: {
          hasBreakfast: true,
          extrasPrice: optionalBreakfastPrice,
          totalPrice: totalPrice + optionalBreakfastPrice,
        },
      });
<<<<<<< HEAD
    else checkin({ bookingId, breakfast: {} });
  }

  // We return a fragment so that these elements fit into the page's layout
  return (
    <>
      <Row type='horizontal'>
        <Heading type='h1'>Check in booking #{bookingId}</Heading>
=======
    } else {
      checkin({ bookingId, breakfast: {} });
    }
  }

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
>>>>>>> origin/final-4
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

<<<<<<< HEAD
      {/* LATER */}
=======
>>>>>>> origin/final-4
      {!hasBreakfast && (
        <Box>
          <Checkbox
            checked={addBreakfast}
            onChange={() => {
              setAddBreakfast((add) => !add);
              setConfirmPaid(false);
            }}
<<<<<<< HEAD
            id='breakfast'
=======
            id="breakfast"
>>>>>>> origin/final-4
          >
            Want to add breakfast for {formatCurrency(optionalBreakfastPrice)}?
          </Checkbox>
        </Box>
      )}

      <Box>
        <Checkbox
          checked={confirmPaid}
          onChange={() => setConfirmPaid((confirm) => !confirm)}
<<<<<<< HEAD
          // If the guest has already paid online, we can't even undo this
          disabled={isCheckingIn || confirmPaid}
          id='confirm'
        >
          I confirm that {guests.fullName} has paid the total amount of{' '}
=======
          disabled={confirmPaid || isCheckingIn}
          id="confirm"
        >
          I confirm that {guests.fullName} has paid the total amount of{" "}
>>>>>>> origin/final-4
          {!addBreakfast
            ? formatCurrency(totalPrice)
            : `${formatCurrency(
                totalPrice + optionalBreakfastPrice
              )} (${formatCurrency(totalPrice)} + ${formatCurrency(
                optionalBreakfastPrice
<<<<<<< HEAD
              )} for breakfast)`}
=======
              )})`}
>>>>>>> origin/final-4
        </Checkbox>
      </Box>

      <ButtonGroup>
<<<<<<< HEAD
        <Button onClick={handleCheckin} disabled={isCheckingIn || !confirmPaid}>
          Check in booking #{bookingId}
        </Button>
        <Button variation='secondary' onClick={moveBack}>
=======
        <Button onClick={handleCheckin} disabled={!confirmPaid || isCheckingIn}>
          Check in booking #{bookingId}
        </Button>
        <Button variation="secondary" onClick={moveBack}>
>>>>>>> origin/final-4
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;
