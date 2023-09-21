class CoffeeService {
    _apiBase = 'db/db.json';

    getResource = async (url) => {
        let res = await fetch(url);

        if(!res.ok) {
            throw new Error(`Couid not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllProduct = async () => {
        const res = await this.getResource(`${this._apiBase}`);
        return res.product.map(this._transformDataCatalog);
    }

    getProduct = async (id) => {
         const res = await this.getResource(`${this._apiBase}`);
        return this._transformDataCatalog(res.product[id]);

    }

    getAbout = async (id) => {
        const res = await this.getResource(`${this._apiBase}`);
        return this._transformDataAbout(res.about[id]);
    }

    _transformDataAbout = (resIdPage) => {
        return {
            title: resIdPage.title,
            descr: resIdPage.descr,
            img:   resIdPage.urlImg
        }
    }

    _transformDataCatalog = (resProduct) => {
        return {
            name: resProduct.name,
            type: resProduct.type,
            weight: resProduct.weight,
            country: resProduct.country,
            price: resProduct.price,
            id: resProduct.id
        }
    }
}

export default CoffeeService;
