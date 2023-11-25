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
          ...profile,
          role: profile.role ?? "user",
          id: profile.id.toString(),
          image: profile.avatar_url,
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

          const user = { ...userInfo };
          if (user && token) {
            user.accessToken = token.access_token;
            return {
              ...user,
              role: user?.usertype,
              businessname: user?.businessname,
              accessToken: user.accessToken,
              customerID: user?.customerID,
              image: user.profile_pic,
              store_logo: user.store_logo,
              email_verified: user?.email_verified,
              isPremium: user?.merchantSubStatus,
            };
          } else {
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
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    // If you want to use the role in client components
    async session({ session, token }) {
      if (session?.user) session.user.role = token.role;
      return session;
    },
    // async signIn(userInfo, account, profile) {
    //   console.log({ userInfo, account, profile});
    //   // Check if it's a new user and send registration data to external API
    //   if (userInfo?.account?.provider === "google" && userInfo?.user?.id) {
    //     console.log("new");
    //     try {
    //       const response = await instance.post("/register", {
    //         email: userInfo?.user?.email,
    //         name: userInfo?.user?.name,
    //       });
    //       console.log({ response });
    //     } catch (error) {
    //       console.log({ error: error?.response?.data });
    //       console.error("Error sending registration data:", error.message);
    //     }
    //   }

    //   return true; // Continue with sign-in
    // },
  },
};
