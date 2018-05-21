import ItemList from './ItemList'

const camelize = str => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const createListView = type => {
  return {
    name: `${type}-stories-view`,

    // asyncData ({ store }) {
    //   return store.dispatch()
    // }

    title: camelize(type),

    render (h) {
      return h(ItemList, { props: { type } })
    }
  }
}
