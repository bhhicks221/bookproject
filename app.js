const app = Vue.createApp({
    data() {
        return {
            url: 'http://www.google.com',
            showBooks: true,
            books: [
                {title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/1.jpg', isFav: true},
                {title: 'the way of kings', author: 'Brandon Sanderson', img: 'assets/2.jpg', isFav: false},
                {title: 'the final empire', author: 'Brandon Sanderson', img: 'assets/3.jpg', isFav: true},
            ]
            // x: 0,
            // y: 0,
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        toggleFav(book) {
            book.isFav = !book.isFav
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')