import { instance } from "@/lib/apiService";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      profile(profile) {
        return {
          // Return all the profile information you need.
          // The only truly required field is `id`
          // to be able identify the account when added to a database
        };
      },
    }),
    GitHubProvider({
      profile(profile) {
        //console.log(profile)
        return {
          ...profile,
          role: profile.role ?? "user",
          id: profile.id.toString(),
          image: profile.avatar_url,
        };
      },
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email:",
          type: "email",
          placeholder: "your email",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "your-awesome-password",
        },
      },
      authorize: async (credentials, req) => {
        try {
          // Your logic to call the external registration endpoint
          // If the user already exists, consider this as an authentication attempt
          const response = await instance.post("/login", credentials);
          const { userInfo, token } = response.data;

          if (userInfo && token) {
            // Registration successful, return user information and access token
            return {
              ...userInfo,
              accessToken: token.access_token, // Adjust this based on your token structure
            };
          } else {
            // If the user does not exist, it's an authentication attempt
            // Handle authentication logic (e.g., validate credentials against existing users)
            // ...

            // If authentication is successful, return user information (without access token)
            // ...
            throw new Error("Invalid credentials");
          }
        } catch (error) {
          throw new Error(error.response?.data?.ResponseMessage);
        
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signin",
  },
  session: {
    strategy: "jwt",
  },
};
