import { defineStore } from 'pinia';

export const useProductStore = defineStore('products', {
    state: () => ({
        products: [],
        loading: false,
        error: null
    }),
    actions: {
        async fetchProducts() {
            this.loading = true;
            try {
                const res = await fetch('https://taylor-swift-api.sarbo.workers.dev/albums');
                const data = await res.json();

                this.products = data.map(album => ({
                    id: album.album_id,
                    title: album.title,
                    date: album.release_date,
                    artistId: album.artist_id,
                    status: 'Released',
                    price: (Math.random() * 15 + 20).toFixed(2),
                    image: `https://placehold.co/600x600/fff1f2/be185d?text=${encodeURIComponent(album.title)}`
                }));
            } catch (err) {
                this.error = "No se pudo cargar la discografía.";
            } finally {
                this.loading = false;
            }
        },

        addProduct(newProduct) {
            this.products.push({
                id: newProduct.id,
                title: newProduct.title,
                date: newProduct.date,
                status: 'New',
                price: (Math.random() * 15 + 20).toFixed(2),
                image: `https://placehold.co/600x600/fff1f2/be185d?text=${encodeURIComponent(newProduct.title)}`
            });
        }
    }
});
