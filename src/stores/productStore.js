import { defineStore } from 'pinia';

const CATEGORY_OPTIONS = ['Pop', 'Country', 'Alternative', 'Indie'];

export const useProductStore = defineStore('products', {
  state: () => ({
    products: [],
    loading: false,
    error: null,
  }),

  getters: {
    totalProducts: (state) => state.products.length,
    totalStock: (state) => state.products.reduce((acc, product) => acc + product.stock, 0),
    activeProducts: (state) => state.products.filter((product) => product.stock > 0).length,
    totalRevenue: (state) =>
      state.products
        .reduce((acc, product) => acc + Number(product.price) * product.stock, 0)
        .toFixed(2),
    categoriesSummary: (state) => {
      const counts = state.products.reduce((acc, product) => {
        acc[product.category] = (acc[product.category] || 0) + 1;
        return acc;
      }, {});

      return Object.entries(counts).map(([name, products]) => ({
        name,
        products,
      }));
    },
  },

  actions: {
    async fetchProducts() {
      if (this.products.length > 0) {
        return;
      }

      this.loading = true;
      this.error = null;

      try {
        const res = await fetch('https://taylor-swift-api.sarbo.workers.dev/albums');
        const data = await res.json();

        this.products = data.map((album, index) => ({
          id: album.album_id,
          title: album.title,
          date: album.release_date,
          artistId: album.artist_id,
          category: CATEGORY_OPTIONS[index % CATEGORY_OPTIONS.length],
          stock: Math.floor(Math.random() * 100) + 1,
          status: 'Released',
          price: (Math.random() * 15 + 20).toFixed(2),
          image: `https://placehold.co/600x600/fff1f2/be185d?text=${encodeURIComponent(album.title)}`,
        }));
      } catch (err) {
        this.error = 'No se pudo cargar la discografía.';
      } finally {
        this.loading = false;
      }
    },

    addProduct(newProduct) {
      this.products.unshift({
        id: newProduct.id,
        title: newProduct.title,
        date: newProduct.date,
        category: newProduct.category,
        stock: Number(newProduct.stock),
        status: 'New',
        price: Number(newProduct.price).toFixed(2),
        image: `https://placehold.co/600x600/fff1f2/be185d?text=${encodeURIComponent(newProduct.title)}`,
      });
    },
  },
});
