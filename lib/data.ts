import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { LuGraduationCap } from 'react-icons/lu'
import mypen from '@/public/MyPen.png'
import oldgoodsImg from '@/public/oldgoods.png'
import nimbuschat from '@/public/NimbusChat.png'
import { SiFreelancer } from 'react-icons/si'

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const

export const experiencesData = [
  {
    title:
      'Graduated from Jalpaiguri Government Engineering College Jalpaiguri',
    location: 'CGPA: 8.2',
    description:
      'I complete my bachelor of technology in electronics and communication engineering',
    icon: React.createElement(LuGraduationCap),
    date: 'July 2019 - June 2023',
  },
  {
    title: 'Geeksforgeeks',
    location: 'Problem Setter Intern',
    description:
      'Created problems based on data structures and algorithms. Tested problems created by other problem setters. Managed content for Geeksforgeeks Practice Portal.',
    icon: React.createElement(CgWorkAlt),
    date: 'July 2022 - March 2023',
  },
  {
    title: 'Cheeg.com',
    location: 'Subject Matter Expert in Computer Science',
    description:
      'Worked as a freelance independent contractor for Chegg India Private Limited. Solved students doubts related to Computer Science.',
    icon: React.createElement(SiFreelancer),
    date: 'October 2021 - July 2022',
  },
] as const

export const projectsData = [
  {
    title: 'My Pen',
    description:
      'A web application that allows users to write, compile, and preview HTML, CSS, and JavaScript code in real-time. Has features for saving and sharing code snippets, enabling users to store their work securely and collaborate by sharing unique URLs with others.',
    tags: ['React.js', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Typescript'],
    imageUrl: mypen,
    code: 'https://github.com/sumanmaji4/MyPenClient',
    live: 'https://my-pen-client.vercel.app/',
  },
  {
    title: 'Nimbus Chat',
    description:
      'A real-time text chatting website using Next.js and Pusher WebSocket for seamless communication,vproviding users with an efficient and interactive messaging experience. Integrated Google authentication using NextAuth to offer secure and streamlined user login and registration processes, enhancing the overall user experience and safety.',
    tags: ['Next.js', 'NextAuth', 'Tailwind CSS', 'Redis', 'WebSockets'],
    imageUrl: nimbuschat,
    code: 'https://github.com/sumanmaji4/nimbus-chat',
    live: 'https://nimbus-chat.vercel.app/dashboard',
  },
  {
    title: 'Old Goods',
    description:
      'It is a web platform for students of our hostels, where we can buy and sell our old items like books, cycles, Lab equipment, etc. The application comes with login system, user dashboard, and Admin dashboard.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'CSS', 'Express'],
    imageUrl: oldgoodsImg,
    code: 'https://github.com/sumanmaji4/production-oldGoods',
    live: 'https://oldgoods-beta.onrender.com/',
  },
] as const

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Redux',
  'Rest',
  'GraphQL',
  'Node.js',
  'Express',
  'Git',
  'C',
  'C++',
  'Tailwind',
  'Mongoose',
  'MongoDB',
] as const
