import { loadStripe } from '@stripe/react-stripe-js';

export const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
);
