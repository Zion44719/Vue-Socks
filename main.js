let kin = new Vue({
    el: '#kin',
    data: {
        brand: 'Zion Vue',
        product: 'Socks',
        message: 'Vue must obey',
        selectedVariant: 0,
        inventory: 0,
        // onSale: true,
        // offSale: true,
        details: ["80% cotton", "20% polyester", "Gender-neutral", "Sport Wear"],
        variants: [
            {
                variandId: 2234,
                variantColor: 'green',
                variantImage: './assets/green.jpg',
                variantQuantity: 10
            },
            {
                variantId: 2235,
                variantColor: 'blue',
                variantImage: './assets/blue.jpg',
                variantQuantity: 0
            }
        ],
        // sizes: ['Size 45', 'Size 42', 'Size 32']
        cart: 0
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        removeFromCart() {
            this.cart -= 1
        },
        updateProduct(index) {
            this.selectedVariant = index
            console.log(index);
        }
    },
    computed: {
        title () {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        }
    }
})