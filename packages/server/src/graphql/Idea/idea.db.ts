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
  const foundIdea = ideas.find(idea => idea.id === id)
  await sleep(3000)
  return foundIdea
}

export async function longOperation() {
  await sleep(10000)
  return 'This took v long.'
}

export async function sleep(time: number) {
  return new Promise(resolve => setTimeout(resolve, time))
}
