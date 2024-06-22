import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
  Res,
} from '@nestjs/common';

import { Response, response } from 'express';
import { ProductService } from 'src/services/product.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductService) {}

  /**
   * Analizando choque de RUTAS, lo toma como id dinamico
   *
   * ASEGURARNOS QUE LAS RUTAS QUE NOSEAN DINAMICAS VAYAN PRIMERAS
   * @returns
   */
  @Get('filter')
  getProductFilter() {
    return ` yo soy u n filter`;
  }

  ////version 1
  // @Get('products/:productId')
  // getProduct(@Param() params: any) {
  //   return `product: ${params.productId}`
  // }
  //@Res() response:Response
  //version 2
  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('productId') productId: string) {
    // return {
    //   message: `product: ${productId}`,
    return this.productsService.findOne(+productId);
    // };
  }

  /**
   * http://localhost:3000/products?limit=100&offset=12
   * ret : products: limit= 100 .. offset = 12
   * con default values
   * dont matter the oorder
   * @param params
   * @returns
   */
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset: number = 0,
    @Query('brand') brand: string,
  ) {
    // return `products: limit= ${limit}   .. offset = ${offset} ... brand == ${brand}`;
    return this.productsService.findAll();
  }

  @Post()
  create(@Body('price') payload: any) {
    // return {
    //   message: 'accion de crear',
    //   payload,
    // };
    return this.productsService.create(payload)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: any) {
    // return {
    //   id,
    //   payload,
    // };
    return this.productsService.update(+id,payload)
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return id;
  }
}
