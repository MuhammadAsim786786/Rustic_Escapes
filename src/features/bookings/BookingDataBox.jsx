<<<<<<< HEAD
import styled from 'styled-components';
import { format } from 'date-fns';

import { box } from 'styles/styles';
import { formatDistanceFromNow } from 'utils/helpers';
import { isToday } from 'date-fns/esm';
import { formatCurrency } from 'utils/helpers';
=======
import styled from "styled-components";
import { format, isToday } from "date-fns";
>>>>>>> origin/final-4
import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCheckCircle,
  HiOutlineCurrencyDollar,
  HiOutlineHomeModern,
<<<<<<< HEAD
} from 'react-icons/hi2';
import DataItem from 'ui/DataItem';
import { Flag } from 'ui/Flag';

const StyledBookingDataBox = styled.section`
  ${box} /* padding: 3.2rem 4rem; */
=======
} from "react-icons/hi2";

import DataItem from "../../ui/DataItem";
import { Flag } from "../../ui/Flag";

import { formatDistanceFromNow, formatCurrency } from "../../utils/helpers";

const StyledBookingDataBox = styled.section`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

>>>>>>> origin/final-4
  overflow: hidden;
`;

const Header = styled.header`
  background-color: var(--color-brand-500);
<<<<<<< HEAD
  /* padding: 2.4rem 4rem; */
=======
>>>>>>> origin/final-4
  padding: 2rem 4rem;
  color: #e0e7ff;
  font-size: 1.8rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    height: 3.2rem;
    width: 3.2rem;
  }

  & div:first-child {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    font-weight: 600;
    font-size: 1.8rem;
  }

  & span {
<<<<<<< HEAD
    font-family: 'Sono';
=======
    font-family: "Sono";
>>>>>>> origin/final-4
    font-size: 2rem;
    margin-left: 4px;
  }
`;

const Section = styled.section`
  padding: 3.2rem 4rem 1.2rem;
`;

const Guest = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
<<<<<<< HEAD
  /* font-size: 1.8rem; */
=======
>>>>>>> origin/final-4
  margin-bottom: 1.6rem;
  color: var(--color-grey-500);

  & p:first-of-type {
    font-weight: 500;
    color: var(--color-grey-700);
  }
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 3.2rem;
  border-radius: var(--border-radius-sm);
  margin-top: 2.4rem;

  background-color: ${(props) =>
<<<<<<< HEAD
    props.isPaid ? 'var(--color-green-100)' : 'var(--color-yellow-100)'};
  color: ${(props) =>
    props.isPaid ? 'var(--color-green-700)' : 'var(--color-yellow-700)'};
=======
    props.isPaid ? "var(--color-green-100)" : "var(--color-yellow-100)"};
  color: ${(props) =>
    props.isPaid ? "var(--color-green-700)" : "var(--color-yellow-700)"};
>>>>>>> origin/final-4

  & p:last-child {
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 600;
  }

  svg {
    height: 2.4rem;
    width: 2.4rem;
    color: currentColor !important;
  }
`;

const Footer = styled.footer`
  padding: 1.6rem 4rem;
  font-size: 1.2rem;
  color: var(--color-grey-500);
  text-align: right;
`;

<<<<<<< HEAD
=======
// A purely presentational component
>>>>>>> origin/final-4
function BookingDataBox({ booking }) {
  const {
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    cabinPrice,
    extrasPrice,
    totalPrice,
    hasBreakfast,
    observations,
    isPaid,
    guests: { fullName: guestName, email, country, countryFlag, nationalID },
    cabins: { name: cabinName },
  } = booking;

  return (
    <StyledBookingDataBox>
      <Header>
        <div>
          <HiOutlineHomeModern />
          <p>
            {numNights} nights in Cabin <span>{cabinName}</span>
          </p>
        </div>

        <p>
<<<<<<< HEAD
          {format(new Date(startDate), 'EEE, MMM dd yyyy')} (
          {isToday(new Date(startDate))
            ? 'Today'
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), 'EEE, MMM dd yyyy')}
=======
          {format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
>>>>>>> origin/final-4
        </p>
      </Header>

      <Section>
        <Guest>
          {countryFlag && <Flag src={countryFlag} alt={`Flag of ${country}`} />}
          <p>
<<<<<<< HEAD
            {guestName} {numGuests > 1 ? `+ ${numGuests - 1} guests` : ''}
=======
            {guestName} {numGuests > 1 ? `+ ${numGuests - 1} guests` : ""}
>>>>>>> origin/final-4
          </p>
          <span>&bull;</span>
          <p>{email}</p>
          <span>&bull;</span>
          <p>National ID {nationalID}</p>
        </Guest>

        {observations && (
          <DataItem
            icon={<HiOutlineChatBubbleBottomCenterText />}
<<<<<<< HEAD
            label='Observations'
=======
            label="Observations"
>>>>>>> origin/final-4
          >
            {observations}
          </DataItem>
        )}

<<<<<<< HEAD
        <DataItem icon={<HiOutlineCheckCircle />} label='Breakfast included?'>
          {hasBreakfast ? 'Yes' : 'No'}
=======
        <DataItem icon={<HiOutlineCheckCircle />} label="Breakfast included?">
          {hasBreakfast ? "Yes" : "No"}
>>>>>>> origin/final-4
        </DataItem>

        <Price isPaid={isPaid}>
          <DataItem icon={<HiOutlineCurrencyDollar />} label={`Total price`}>
            {formatCurrency(totalPrice)}

            {hasBreakfast &&
              ` (${formatCurrency(cabinPrice)} cabin + ${formatCurrency(
                extrasPrice
              )} breakfast)`}
          </DataItem>

<<<<<<< HEAD
          <p>{isPaid ? 'Paid' : 'Will pay at property'}</p>
=======
          <p>{isPaid ? "Paid" : "Will pay at property"}</p>
>>>>>>> origin/final-4
        </Price>
      </Section>

      <Footer>
<<<<<<< HEAD
        <p>Booked {format(new Date(created_at), 'EEE, MMM dd yyyy, p')}</p>
=======
        <p>Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}</p>
>>>>>>> origin/final-4
      </Footer>
    </StyledBookingDataBox>
  );
}

export default BookingDataBox;
