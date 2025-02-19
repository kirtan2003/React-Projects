import React from 'react'
import Navbar from '../Components/Navbar'

const BlogView = () => {
    const title = 'Blog Importance'
    const description =`1. Listicles
    Everybody loves a list. They’re easy to scan, have digestible information and they’re super popular for social media sharing.
    
    You can create lists on almost any subject. It could be your favourite books or a list of your top bloggers to follow.
    
    Here are two great examples of listicles:
    
    10 Great Space-Saving Speaker Cabinets For Guitarists
    11 Best Minecraft Server Hosting Providers
    Pro Tip: Build your lists around your main blog niche and topics to stay relevant to your audience. It’s also recommended to consider what type of lists people are searching for in Google. Check out our guide to keyword research for more help.
    
    2. Written tutorials and how to’s
    Tutorials and how-to guides are a great way to engage your audience and educate them in a single blog post. Plus, they’re easy to work on too since you’re already familiar with the topic.
    
    The key thing to remember when writing how-to guides is to break things down into small actionable steps. This makes it easier for readers to follow your instructions. Including step-by-step screenshots further aids in this, especially for visual learners.
    
    Marketing bloggers could write tutorials on how to use different social media platforms. Beauty bloggers can guide their readers through makeup applications. It all depends on your target audience and what they want to read.
    
    Here’s an example from YourCreativeAura.com: How To Write A Song: Songwriting Basics, this post is broken into the 5 main sections of song creation, along with imagery and examples to make it easier for beginners to understand.
    
    3. Video tutorials
    If writing full guides on a subject seems too daunting for you, you can always create a video tutorial instead. Video is hugely popular – sometimes more popular than the written word, so utilising it in your blog makes a lot of sense.
    
    Your options for video tutorials include:
    
    Filming yourself explaining things
    Filming a screencast of you performing the tutorial steps
    Filming a screencast with a voice-over explaining as you go through the steps.
    When posting your tutorial to your blog, you can either host the video directly on your website by uploading it. Or, you could upload it to a video hosting site like YouTube or Vimeo and embed it in a blog post on your site.
    
    4. Checklists
    A checklist is one of the simplest types of content you can publish. We’ve all written a check-list or to-do list before and they work because they’re short, easy to digest and allow the ability to cross items off as you complete them.
    
    Translating this into a blog post is the same thing. Simply post your checklist with some supporting information.
    
    Gardening bloggers could post a checklist for planting in the spring or getting your garden ready for winter. On the other hand, interior bloggers can create a spring cleaning checklist.
    
    Pro Tip: You can share your checklists as content upgrades in the future to get more subscribers.
    
    5. Industry news
    What do you do when you get up in the morning? You’ll likely grab a tea or coffee and browse the latest news. This is a habit you could include in your daily blogging activities too.
    
    Why not scour various news sources for the latest in your blogging niche or industry. Put together some of the best pieces into a blog post and add your own critique and commentary alongside it.
    
    A regular feature like this has the potential to be something your readers return regularly to read. Here is a great example of this in practice.
    
    6. Infographics
    Infographics don’t have to be those long professionally made images you see all over Pinterest. An infographic can be an image of any size or shape and about any type of information.
    
    Creating infographics for your blog is an effective way to provide valuable information while encouraging people to share something visually appealing. They could be charts, statistics, step-by-step instructions an even fun facts.
    
    The higher the quality these infographics are, the better. Tools like Canva and Venngage make it especially easy to make your own imagery with their pre-built templates and free icons.
    
    7. Current events
    Similar to industry news, writing about current events is even easier. The key benefit of writing about what’s happening now is that people are already searching for more information about events as they happen, making your blog post a prime reading option.
    
    Think of things that interest you and stories that stand out. Maybe they’re controversial, or especially interesting. Cover it in your own way to generate more interest from your readers. Even better, find a topic that already links to your niche.
    
    8. Case studies
    Case studies are an excellent way to generate social proof and they’re easy to write too. People love success stories, so writing a case study about someone who has used your product/service or advice to great success, can do wonders for your blog.
    
    Get in touch with your audience and if you sell a product, contact your customer and start a conversation about how they’ve used your product and how it’s improved their life or business. Then include them in a case study published on your blog.
    
    Here’s an example of a Thrive Themes case study where a tiny email list of fewer than 1,000 subscribers was turned into $100,000+ in sales.
    
    9. Inspirational stories
    Why not step away from the same old content and share some good news? Write about a new milestone your blog has reached. Or, share an inspirational story of how you got started in your industry. What happened to get you to the point you’re at today?
    
    People love inspirational stories because it makes them want to experience that success too. This is why stories filled with hope and inspiration do so well on social media.
    
    We’re all striving for something better from our lives – your success story will help your readers to continue to reach for their goals too.
    
    10. Interviews
    Interviews are always a good way to drive interest amongst your readers. People are always eager to hear what the people they look up to have to say. Try publishing an interview with an important figure in your blog niche and area of interest.
    
    During the interview, you can discuss important events in your industry, get expert advice and even business insights.
    
    The key is to keep the topic of your interview central to things your audience is interested in.`

  return (
    <div>
      <Navbar/>
        <div className='font-bold text-2xl text-center'>
            {title}
        </div>
        <div className='flex justify-center h-60 md:h-80 lg:h-100'>
        <img className = ' rounded-lg' src = 'https://static.wixstatic.com/media/0e0314_46871fae1bae4ead92d0eb9c0cd07dfe~mv2.png/v1/fill/w_723,h_414,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0e0314_46871fae1bae4ead92d0eb9c0cd07dfe~mv2.png'></img>
        </div>
        <div className='flex justify-center mt-5 m-2 text-left lg:m-10'>
            {description}
        </div>
    </div>
  )
}

export default BlogView