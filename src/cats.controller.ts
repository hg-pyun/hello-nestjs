import {Controller, HttpCode, Get, Post, Header, Param, Body} from '@nestjs/common';
import {CreateCatDto} from "./create-cat.dto";

@Controller('cats')
export class CatsController {
  @Post()
  @Header('Cache-Control', 'none')
  create(): string {
    return 'This action adds a new cat';
  }

  @Post('dto')
  async createWithDto(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat: ' + JSON.stringify(createCatDto);
  }

  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

  @Get('ab*cd')
  wildcards() {
    return 'This route uses a wildcard';
  }

  @Get('status')
  @HttpCode(500)
  withStatusCode() {
    return 'This route status code 500';
  }

  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }
}