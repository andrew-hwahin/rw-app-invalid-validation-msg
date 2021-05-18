import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}

export const userExamples = () => {
  return db.userExample.findMany()
}

export const userExample = ({ id }) => {
  return db.userExample.findUnique({
    where: { id },
  })
}

export const createUserExample = ({ input }) => {
  return db.userExample.create({
    data: input,
  })
}

export const updateUserExample = ({ id, input }) => {
  return db.userExample.update({
    data: input,
    where: { id },
  })
}

export const deleteUserExample = ({ id }) => {
  return db.userExample.delete({
    where: { id },
  })
}
