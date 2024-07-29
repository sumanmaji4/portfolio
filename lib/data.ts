import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { LuGraduationCap } from 'react-icons/lu'
import mypen from '@/public/MyPen.png'
import oldgoodsImg from '@/public/oldgoods.png'
import nimbuschat from '@/public/NimbusChat.png'
import { SiFreelancer } from 'react-icons/si'

import snakeGame from '@/public/snakeGame.png'
import guessingGame from '@/public/guessingGame.png'
import mailMomentum from '@/public/mailMomentum.png'

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
      'Evaluated 100+ data structures and algorithm problems, and crafted 120+ comprehensive editorials to provide in-depth solutions. Resolved 350+ user issues promptly, demonstrating strong problem-solving skills. Directed content strategy for GeeksforGeeks Practice Portal, ensuring alignment with platform objectives and enhancing user engagement.',
    icon: React.createElement(CgWorkAlt),
    date: 'July 2022 - March 2023',
  },
  {
    title: 'Cheeg.com',
    location: 'Subject Matter Expert in Computer Science',
    description: `Provided freelance services as an independent contractor for Chegg India Private Limited, addressing 65+ student's doubts in Computer Science. Delivered comprehensive solutions tailored to each student's needs, ensuring clarity and understanding. Demonstrated expertise in resolving complex queries and fostering academic success.`,
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

export const additionalProjectsData = [
  {
    title: 'Guessing Game',
    description:
      'Here I tried to bring back one of our childhood games to your fingertips once again. To know what it does click on live link. And to know how it does, click on code',
    tags: ['React.js', 'Tailwind CSS'],
    imageUrl: guessingGame,
    code: 'https://github.com/sumanmaji4/guessing-game',
    live: 'https://guessing-game-red.vercel.app/',
  },
  {
    title: 'SnakeGame',
    description: `This classic Snake game. Mobile-friendly with touch controls and supports keyboard input for PC users. The minimalist design ensures a clean and engaging experience, offering nostalgic fun for players of all ages.`,
    tags: ['HTML', 'CSS', 'Vanila Javascript'],
    imageUrl: snakeGame,
    code: 'https://github.com/sumanmaji4/jsSnakeGame',
    live: 'https://jssnakegame.onrender.com/',
  },
  {
    title: 'Mail Momentum',
    description:
      'Mail Momentum optimizes email marketing campaigns through A/B testing and advanced analytics. Users can create and test multiple email versions, such as different subject lines or sender names, to identify what resonates best with their audience. The platform offers a user-friendly interface for designing email templates and a real-time dashboard that visualizes key metrics like open rates and click-through rates (CTR).',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Express.js'],
    imageUrl: mailMomentum,
    code: 'https://github.com/sumanmaji4/mailMomentumClient',
    live: 'https://mail-momentum-client.vercel.app/',
  },
] as const
