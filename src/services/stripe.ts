import Stripe from 'stripe';
import packageInfo from '../../package.json'

const version = packageInfo.version;

export const stripe = new Stripe(
  process.env.STRIPE_API_KEY!,
  {
    apiVersion: '2022-11-15',
    appInfo: {
      name: 'ignews',
      version
    },
  }
)
