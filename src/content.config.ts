import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
    loader: glob({ pattern: ['{design,experiments,**}/*.md'], base: 'src/pages/work' }),
    schema: z.object({
        layout: z.string(),
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        tools: z.array(z.string()).optional(),
        deviceFrame: z.boolean(),
        image: z.object({ url: z.string(), alt: z.string() }),
        mobile: z.object({ url: z.string(), alt: z.string() }).optional(),
        video: z.object({ title: z.string(), videoCode: z.string() }).optional(),
        gallery: z.array(z.object({ image: z.string(), alt: z.string() })).optional()
    })
})

export const collections = { work };