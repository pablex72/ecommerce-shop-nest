import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'hellooooooooooooooooooooooo';
  }
  @Get('nuevo')
  newEndpoint() {
    return 'nuevo endpoint';
  }

  /**
   * Analizando choque de RUTAS, lo toma como id dinamico
   *
   * ASEGURARNOS QUE LAS RUTAS QUE NOSEAN DINAMICAS VAYAN PRIMERAS
   * @returns
   */
  @Get('products/filter')
  getProductFilter() {
    return ` yo soy u n filter`;
  }

  ////version 1
  // @Get('products/:productId')
  // getProduct(@Param() params: any) {
  //   return `product: ${params.productId}`
  // }

  //version 2
  @Get('products/:productId')
  getProduct(@Param('productId') productId: string) {
    return `product: ${productId}`;
  }

  @Get('categories/:id/products/:productId')
  getCategory(@Param('productId') productId: string, @Param('id') id: string) {
    return `product ${productId} and ${id}`;
  }

  /**
   * http://localhost:3000/products?limit=100&offset=12
   * ret : products: limit= 100 .. offset = 12
   * con default values
   * dont matter the oorder 
   * @param params
   * @returns
   */
  @Get('products')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset: number = 0,
    @Query('brand') brand: string,
  ) {
    return `products: limit= ${limit}   .. offset = ${offset} ... brand == ${brand}`;
  }
}
