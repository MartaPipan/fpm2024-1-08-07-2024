export const getBooks = () => {
    return fetch("/data/books.json")
      .then((response) => response.json())
}

export const getEvents = () => {
    return fetch("/data/events.json")
      .then((response) => response.json())
}