import { query as q } from 'faunadb'

// import NextAuth, { NextAuthOptions} from "next-auth"
import NextAuth from 'next-auth/next';
// import Providers from 'next-auth/providers'

import GithubProvider from "next-auth/providers/github"

import { fauna } from '../../../services/fauna';

// export const authOptions: NextAuthOptions = ({
  export default NextAuth({
  // Configure one or more authentication providers
  providers: [
// Providers.GitHub({
  
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: 'read:user'
        }
      }
      
    }),
    // ...add more providers here
  ],
  
  callbacks:{
    async signIn({ user, account, profile }) {
      const { email } = user

      try {
        await fauna.query(
          q.If(
            q.Not(
              q.Exists(
                q.Match(
                  q.Index('user_by_email'),
                  q.Casefold(user.email!)
                )
              )
            ),
            q.Create(
              q.Collection('users'),
              { data: { email }}
            ),
            q.Get(
              q.Match(
                q.Index('user_by_email'),
                q.Casefold(user.email!)
              )
            )    
          )
        )      

      return true
    } catch {
      return false
    }
    },
  }
})
// export default NextAuth(authOptions)