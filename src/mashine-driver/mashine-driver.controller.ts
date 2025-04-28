import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MashineDriverService } from './mashine-driver.service';
import { CreateMashineDriverDto } from './dto/create-mashine-driver.dto';
import { UpdateMashineDriverDto } from './dto/update-mashine-driver.dto';

@Controller('mashine-driver')
export class MashineDriverController {
  constructor(private readonly mashineDriverService: MashineDriverService) {}

  @Post()
  create(@Body() createMashineDriverDto: CreateMashineDriverDto) {
    return this.mashineDriverService.create(createMashineDriverDto);
  }

  @Get()
  findAll() {
    return this.mashineDriverService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mashineDriverService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMashineDriverDto: UpdateMashineDriverDto) {
    return this.mashineDriverService.update(+id, updateMashineDriverDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mashineDriverService.remove(+id);
  }
}
