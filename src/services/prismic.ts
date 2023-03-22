import Prismic from '@prismicio/client'
import { config } from 'process';

export function getPrismicClient(req?: unknown) {
  const prismic = Prismic.createClient(
    process.env.PRISMIC_ENDPOINT!,
    {
      req,
      accessToken: process.env.PRISMIC_ACCESS_TOKEN
    }
  )
  return prismic;
}