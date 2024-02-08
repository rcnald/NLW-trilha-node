import { PrismaClient } from '@prisma/client'
import fastify from 'fastify'
import { z } from 'zod'

const app = fastify()

const prisma = new PrismaClient()

app.post('/polls', async (req, rep) => {
  const createPollBody = z.object({
    title: z.string(),
  })
  const { title } = createPollBody.parse(req.body)

  const poll = await prisma.poll.create({
    data: {
      title,
    },
  })

  return rep.status(201).send(poll)
})

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP server running')
})