import React from 'react'

const PostItems = ({category, description, date}) => {
  return (
    <>
      <div className="container mx-auto">
        <div className='className="py-16 lg:py-20"'>
            <div className="flex items-center pb-6">
            <div className="border-b border-grey-lighter pt-10 pb-8">
        <div className="flex items-center">
          <span
            className="mb-4 inline-block rounded-full bg-grey-light px-2 py-1 font-body text-sm text-blue-dark"
            >{category}</span
          >
        </div>
        <a
          href="/post"
          className="block font-body text-lg font-semibold text-primary transition-colors hover:text-green dark:text-white dark:hover:text-secondary"
          >{description}</a
        >
        <div className="flex items-center pt-4">
          <p className="pr-2 font-body font-light text-primary dark:text-white">
            {date}
          </p>
          <span className="font-body text-grey dark:text-white">//</span>
          <p className="pl-2 font-body font-light text-primary dark:text-white">
            5 min read
          </p>
        </div>
      </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default PostItems
