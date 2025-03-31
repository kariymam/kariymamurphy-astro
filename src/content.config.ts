import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const work = defineCollection({
    loader: glob({ pattern: ['{design,experiments,**}/*.md'], base: 'src/pages/work' }),
    schema: z.object({
        layout: z.string(),
        title: z.string(),
        pubDate: z.date(),
        description: z.string(),
        tags: z.array(z.string()),
        tools: z.array(z.string()).optional(),
        deviceHero: z.boolean(),
        image: z.object({url: z.string(), alt: z.string()}),
        mobile: z.object({url: z.string(), alt: z.string()}).optional(),
        gallery: z.array(z.object({image: z.string(), alt: z.string()})).optional()
    })
})

export const collections = { work };

// layout: "src/layouts/tech_work.astro"
// title: 'Designing for data privacy and governance at Capital One'
// pubDate: 2025-03-28
// description: 'This is the first work in my new Astro portfolio.'
// tags: ["ui design", "frontend", "learning in public"]
// tools: ["photoshop", "figma", "jira"]
// deviceHero: true
// image:
//     url: '/portfolio-images/capital-one.png'
//     alt: 'The Astro logo on a dark background with a pink glow.'
// # mobile:
// #     url: 'https://i.imgur.com/wBgQPt1.png'
// #     alt: 'Placeholder image'

// #image  urls
// gallery:
//     - image: '/portfolio-images/mydata.capitalone_sketch.png'
//       alt: 'Some alt text'
//     - image: '/portfolio-images/mydata.capitalone.com_manage%20(2).png'
//       alt: 'Some alt text'
//     - image: '/portfolio-images/mydata.capitalone.com_manage%20(3).png'
//       alt: 'Some alt text'
//     - image: '/portfolio-images/mydata.capitalone.com_manage.png'
//       alt: 'Some alt text'