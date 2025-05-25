import Button from "../../ui/Button";
<<<<<<< HEAD

function CheckoutButton({ bookingId }) {
  return (
    <Button variation="primary" size="small">
=======
import { useCheckout } from "./useCheckout";

function CheckoutButton({ bookingId }) {
  const { checkout, isCheckingOut } = useCheckout();

  return (
    <Button
      variation="primary"
      size="small"
      onClick={() => checkout(bookingId)}
      disabled={isCheckingOut}
    >
>>>>>>> origin/final-stages
      Check out
    </Button>
  );
}

export default CheckoutButton;
