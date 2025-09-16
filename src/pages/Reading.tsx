// Reading.tsx

import React from 'react';
import './Reading.css';
import atomicHabits from '../images/atomic_habits.jpg';
import richDadPoorDad from '../images/rich_dad_poor_dad.jpg';
import TheHardThingAboutHardThings from '../images/HardThing.jpg';
import eatThatFrog from '../images/eat_that_frog.jpg';
import gita from '../images/gita.jpg';
import amazon from '../images/amazon.jpg';

const books = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    imgSrc: atomicHabits,
    description: "A practical guide to building good habits and breaking bad ones.",
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    imgSrc: richDadPoorDad,
    description: "An eye-opener on wealth, assets, and financial literacy.",
  },
  {
    title: "The Hard Things About hard Things",
    author: "Ben Horowitz",
    imgSrc: TheHardThingAboutHardThings,
    description: "The analysis of the problems that confront leaders every day",
  },
  {
    title: "Eat That Frog",
    author: "Brian Tracy",
    imgSrc: eatThatFrog,
    description: "A motivational book on overcoming procrastination.",
  },
  {
    title: "Amazon Shareowner Letters",
    author: "Jeffrey P. Bezos",
    imgSrc: amazon,
    description: "Lessons from a $2 Trillion Company.",
  },
  {
    title: "Bhagvad Gita",
    author: "Veda vyasa",
    imgSrc: gita,
    description: "An episode recorded in the Mahabharata, a Sanskrit epic poem of ancient India.",
  },
  
];

const Reading: React.FC = () => {
  return (
    <div className="reading-container">
      <h2 className="reading-title">📚 Books That Shaped My Mindset</h2>
      <p className="reading-intro">These books have influenced my perspectives, motivation, and self-growth.</p>
      <div className="books-grid">
        {books.map((book, index) => (
          <div key={index} className="book-card" style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}>
            <img src={book.imgSrc} alt={book.title} className="book-cover" />
            <div className="book-info">
              <h3 className="book-title">{book.title}</h3>
              <h4 className="book-author">{book.author}</h4>
              <p className="book-description">{book.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reading;
