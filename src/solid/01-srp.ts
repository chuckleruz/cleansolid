(() => {

    interface Product { 
        id:   number;
        name: string;
    }
    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    
    class ProductService {

        getProduct(id: number){
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }

        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            console.log('Guardando en base de datos', product );
        }
    }
    
    class Mailer {
        private masterEmail: string = 'chuck@gmail.com'

        sendEmail(emailList: string[], template: 'to-clients' | 'to-admins', ){
            console.log('Send mail to the clients', template)
        }
    }
    
    class ProductBloc {

        private productService: ProductService
        private mailer: Mailer

        constructor(productService: ProductService, mailer: Mailer){
            this.productService = productService
            this.mailer = mailer
        }
    
        loadProduct( id: number ) {
            // Realiza un proceso para obtener el producto y retornarlo
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }
    
        saveProduct( product: Product ) {
            this.productService.saveProduct(product)
            console.log('Guardando en base de datos', product );
        }
    
        notifyClients() {
            this.mailer.sendEmail(['chuck@gmail.com'], 'to-clients')
            console.log('Enviando correo a los clientes');
        }
    
    }

    class CartBLoc {

        onAddToCart( productId: number ) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }
    }
    


    const productService = new ProductService();
    const mailer = new Mailer()
    const productBloc = new ProductBloc(productService, mailer);
    const cartBLoc = new CartBLoc() 

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBLoc.onAddToCart(10);








})();