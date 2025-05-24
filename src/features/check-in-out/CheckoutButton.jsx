<<<<<<< HEAD
import Button from 'ui/Button';
import { useCheckout } from './useCheckout';

function CheckoutButton({ bookingId }) {
  const { isLoading, mutate: checkout } = useCheckout();

  return (
    <Button
      variation='primary'
      size='small'
      onClick={() => checkout(bookingId)}
      disabled={isLoading}
    >
=======
import Button from "../../ui/Button";

function CheckoutButton({ bookingId }) {
  return (
    <Button variation="primary" size="small">
>>>>>>> origin/final-4
      Check out
    </Button>
  );
}

export default CheckoutButton;
