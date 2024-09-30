import React from 'react'
import iconStory from "../assets/img/icon-story.png"
import arrowRight from "../assets/img/long-arrow-right.png"
import PostItems from './PostItems'
const Post = () => {
    const postItems = [
        {"category": "categoryA",
        "description": "Quis hendrerit dolor magna eget est lorem ipsum dolor sit",
        "date": "July 19, 2020"
        },
        {"category": "categoryB",
        "description": "Senectus et netus et malesuada fames ac turpis egestas integer",
        "date": "June 30, 2020"
        },
        {"category": "categoryC",
        "description": "Vulputate ut pharetra sit amet aliquam id diam maecenas ultricies",
        "date": "June 26, 2020"
        },
        
    ]
  return (
    <>
      <div className="container mx-auto">
        <div className="py-16 lg:py-20">
    <div className="flex items-center pb-6">
      <img src={iconStory} alt="icon story" />
      <h3
        className="ml-3 font-body text-2xl font-semibold text-primary dark:text-white"
      >
        My Story
      </h3>
      <a
        href="/blog"
        className="flex items-center pl-10 font-body italic text-green transition-colors hover:text-secondary dark:text-green-light dark:hover:text-secondary"
      >
        All posts
        <img
          src={arrowRight}
          className="ml-3"
          alt="arrow right"
        />
      </a>
    


    </div>
{postItems.map((item, index)=>(
    <PostItems category={item.category} description={item.description} date={item.date} index={index}/>
))}
  </div>
    </div>
    </>
  )
}

export default Post
