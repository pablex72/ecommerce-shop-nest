import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
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

  //version 2
  @Get(':productId')
  getProduct(@Param('productId') productId: string) {
    return `product: ${productId}`;
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
    return `products: limit= ${limit}   .. offset = ${offset} ... brand == ${brand}`;
  }

  @Post()
  create(@Body('price') payload: any) {
    return {
      message: 'accion de crear',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return id;
  }
}
