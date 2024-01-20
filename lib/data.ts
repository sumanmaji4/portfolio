import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { LuGraduationCap } from 'react-icons/lu'
import todoappImg from '@/public/todoapp.png'
import oldgoodsImg from '@/public/oldgoods.png'
import nodeMessage from '@/public/nodeMessage.png'
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
    title: 'Todo App',
    description:
      'An web-app, using React that allows users to add, edit, and delete tasks they want to work on, and also mark the tasks as complete without deleting them. It has a priority sorting feature.',
    tags: ['React', 'Tailwind CSS', 'React Context'],
    imageUrl: todoappImg,
    code: 'https://github.com/sumanmaji4/AulaCubeAssignment',
    live: 'https://aula-cube-assignment-chi.vercel.app/',
  },
  {
    title: 'Node Message',
    description:
      'It is a web platform where anyone with an account can post, and everyone having account can see those post. It comes with login system, post editing and deleting features.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'CSS', 'Express'],
    imageUrl: nodeMessage,
    code: 'https://github.com/sumanmaji4/NodeMessageBackEnd',
    live: 'https://node-message-front-end.vercel.app/',
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
