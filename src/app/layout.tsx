import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import GlobalContext from './GlobalContext';
import prisma from "../../utils/db";
export const dynamic = 'force-dynamic';


const prismaHandlers=async ()=>{
  const links=await prisma.link.findMany({
    orderBy:{
      order:'asc'
    },
  })
  const movies=await prisma.anime.findMany({
    where:{
      movie:true
    }
  });
  const anime=await prisma.anime.findMany({
    where:{
      anime:true
    }
  });
  const all=await prisma.anime.findMany()
  const topAnime=await prisma.anime.findMany({
    where:{
      anime:true
    },
    orderBy:{
      searches:'desc'
    },
    take:10,
  });
  const topMovies=await prisma.anime.findMany({
    where:{
      movie:true
    },
    orderBy:{
      searches:'desc'
    },
    take:10,
  });
  const top=await prisma.anime.findMany({
    orderBy:{
      searches:'desc'
    },
    take:10,
  });
  const topAll=await prisma.anime.findMany({
    orderBy:{
      searches:'desc'
    },
  });
  return {anime,movies,all,topAnime,topMovies,top,links,topAll}
}

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "AniSphere",
  description: "Watch Anime On AniSphere",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {anime,movies,all,topAnime,topMovies,top,links,topAll}=await prismaHandlers()
  const data={
    all,anime,movies,topAnime,topMovies,top,
    links,topAll
  }
  return (
    <html lang="en" >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
      <GlobalContext data={data}>
      {children}
      </GlobalContext>
      </body>
    </html>
  );
}
