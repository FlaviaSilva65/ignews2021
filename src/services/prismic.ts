import * as prismic from '@prismicio/client'
import { config } from 'process';

export function getPrismicClient(req?: unknown) {
  const endpoint = prismic.getEndpoint('IgnewsFlavia');
  const client = prismic.createClient(
    endpoint,
    {
      accessToken: process.env.PRISMIC_ACCESS_TOKEN
    }
  )
  return client;
}