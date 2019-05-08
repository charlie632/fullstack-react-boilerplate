import { firestore } from '../../firebase'
import { ApolloError } from 'apollo-server-errors'
const ideas = [
  {
    name: 'Idea 1',
    id: 'idea1',
    description: 'this is an idea',
    tags: ['bot', 'automation'],
    creator: {
      name: 'Carlos Ortiz',
      id: 'carlos.ortiz',
    },
  },
  {
    name: 'Idea 2',
    id: 'idea2',
    description: 'this is an idea 2',
    tags: ['bot', 'automation', 'tool'],
    creator: {
      name: 'Gilberto Isida',
      id: 'gisida.duazon',
    },
  },
]

export async function getIdea(id) {
  // const foundIdea = ideas.find(idea => idea.id === id)
  const snap = await firestore
    .collection('Ideas')
    .doc(id)
    .get()
  if (!snap.exists) {
    throw new ApolloError('No existe')
  }

  const idea = snap.data()
  return idea
}

export async function updateIdea(idea, id) {
  const { name, numberOfComments } = idea

  await firestore
    .collection('Ideas')
    .doc(id)
    .update({ name, numberOfComments })

  return { name, numberOfComments }
}

export async function getAnalytics() {
  await sleep(5000)
  return 'Analytics: 1jidjeiodio'
}

export async function longOperation() {
  await sleep(10000)
  return 'This took v long.'
}

export async function sleep(time: number) {
  return new Promise(resolve => setTimeout(resolve, time))
}
